#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const STRUCTURE_TYPES = new Set(["section", "row", "row-inner", "column", "column-inner"]);
const IGNORED_TYPES = new Set(["placeholder"]);
const MAX_ITEMS = 40;

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function usage() {
  console.error("Usage: node scripts/summarize-divi-layout.js <raw-layout.json> [output.md]");
  process.exit(1);
}

function get(value, dottedPath) {
  return dottedPath.split(".").reduce((current, key) => {
    return current && typeof current === "object" ? current[key] : undefined;
  }, value);
}

function meaningful(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim() !== "";
  if (typeof value === "number" || typeof value === "boolean") return true;
  if (Array.isArray(value)) return value.some(meaningful);
  if (typeof value === "object") return Object.values(value).some(meaningful);
  return false;
}

function walk(value, callback, parts = []) {
  callback(value, parts);
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, callback, parts.concat(String(index))));
  } else if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, child]) => walk(child, callback, parts.concat(key)));
  }
}

function cleanText(value, length = 90) {
  const text = String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&[a-z0-9#]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > length ? `${text.slice(0, length - 3)}...` : text;
}

function compact(value) {
  if (!meaningful(value)) return "";
  if (typeof value === "string") return cleanText(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map(compact).filter(Boolean).join(", ");

  return Object.entries(value)
    .filter(([, child]) => meaningful(child))
    .slice(0, 6)
    .map(([key, child]) => `${key}: ${compact(child)}`)
    .join(", ");
}

function collectBlockStrings(value, strings = []) {
  if (typeof value === "string") {
    if (value.includes("wp:divi/")) strings.push(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectBlockStrings(item, strings));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectBlockStrings(item, strings));
  }
  return strings;
}

function parseAttrs(rawAttrs) {
  if (!rawAttrs || !rawAttrs.trim()) return {};
  const clean = rawAttrs.trim().replace(/\s\/$/, "");
  try {
    return JSON.parse(clean);
  } catch {
    return { __parseError: clean.slice(0, 160) };
  }
}

function parseBlocks(strings) {
  const root = { type: "root", children: [] };
  const stack = [root];
  const token = /<!--\s*(\/)?wp:divi\/([a-z0-9-]+)(?:\s+([\s\S]*?))?\s*(\/)?-->/gi;
  let id = 0;
  let parseErrors = 0;

  for (const html of strings) {
    let match;
    while ((match = token.exec(html))) {
      const closing = Boolean(match[1]);
      const type = match[2];
      const rawAttrs = match[3] || "";
      const selfClosing = Boolean(match[4]) || rawAttrs.trim().endsWith("/");

      if (closing) {
        while (stack.length > 1 && stack[stack.length - 1].type !== type) stack.pop();
        if (stack.length > 1) stack.pop();
        continue;
      }

      const attrs = parseAttrs(rawAttrs);
      if (attrs.__parseError) parseErrors += 1;

      const node = { id: ++id, type, attrs, children: [], parent: null };
      const parent = stack[stack.length - 1];
      node.parent = parent.type === "root" ? null : parent;
      parent.children.push(node);
      if (!selfClosing) stack.push(node);
    }
  }

  return { root, parseErrors };
}

function flatten(node, depth = 0, output = []) {
  if (node.type !== "root") output.push({ ...node, depth });
  (node.children || []).forEach((child) => flatten(child, depth + 1, output));
  return output;
}

function firstString(attrs, paths) {
  for (const itemPath of paths) {
    const value = get(attrs, itemPath);
    if (typeof value === "string" && value.trim()) return cleanText(value, 70);
  }
  return "";
}

function label(node) {
  return firstString(node.attrs, [
    "module.meta.adminLabel.desktop.value",
    "module.meta.adminLabel.tablet.value",
    "module.meta.adminLabel.phone.value",
    "meta.adminLabel.desktop.value",
    "title.innerContent.desktop.value",
    "content.innerContent.desktop.value",
    "button.innerContent.desktop.value",
    "body.innerContent.desktop.value",
    "number.innerContent.desktop.value",
  ]);
}

function imageName(node) {
  const src = get(node.attrs, "image.innerContent.desktop.value.src");
  return typeof src === "string" && src.trim() ? path.basename(src.split("?")[0]) : "";
}

function ancestor(node, type) {
  let current = node.parent;
  while (current) {
    if (current.type === type) return current;
    current = current.parent;
  }
  return null;
}

function sectionName(node) {
  const section = node.type === "section" ? node : ancestor(node, "section");
  return section ? label(section) || `Section #${section.id}` : "Unsectioned";
}

function nodeRef(node) {
  if (!node) return "layout";
  const nodeLabel = label(node);
  return `${node.type} #${node.id}${nodeLabel ? ` (${nodeLabel})` : ""}`;
}

function sectionKind(node) {
  return (
    firstString(node.attrs, [
      "module.advanced.type.desktop.value",
      "advanced.type.desktop.value",
    ]) || "regular"
  );
}

function columnStructure(row) {
  return (
    firstString(row.attrs, [
      "module.advanced.columnStructure.desktop.value",
      "module.advanced.columnStructure.tablet.value",
      "module.advanced.columnStructure.phone.value",
    ]) || "implicit"
  );
}

function gutter(row) {
  return compact(get(row.attrs, "module.advanced.gutter.desktop.value") || get(row.attrs, "advanced.gutter.desktop.value"));
}

function countBy(items, selector) {
  const counts = new Map();
  items.forEach((item) => counts.set(selector(item), (counts.get(selector(item)) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function unique(items, selector) {
  const seen = new Set();
  return items.filter((item) => {
    const key = selector(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function list(items, formatter, empty = "None detected.") {
  if (!items.length) return `- ${empty}`;
  const lines = items.slice(0, MAX_ITEMS).map(formatter);
  if (items.length > MAX_ITEMS) {
    lines.push(`- ${items.length - MAX_ITEMS} additional items omitted for token efficiency.`);
  }
  return lines.join("\n");
}

function responsiveOverrides(nodes) {
  const relevant = /(spacing|sizing|layout|gutter|display|width|height|margin|padding|position|visibility|overflow|transform|customCss|css)/i;
  const ignored = /(innerContent|modulePreset|builderVersion|locked|adminLabel)/i;
  const output = [];

  nodes.forEach((node) => {
    walk(node.attrs, (value, parts) => {
      if (!value || typeof value !== "object" || Array.isArray(value)) return;
      const keys = Object.keys(value);
      if (!keys.includes("tablet") && !keys.includes("phone")) return;

      const settingPath = parts.join(".");
      if (!relevant.test(settingPath) || ignored.test(settingPath)) return;

      ["tablet", "phone"].forEach((breakpoint) => {
        const breakpointValue = value[breakpoint] && value[breakpoint].value;
        if (meaningful(breakpointValue)) {
          output.push({
            node,
            breakpoint,
            path: settingPath.replace(/^module\./, ""),
            value: compact(breakpointValue),
          });
        }
      });
    });
  });

  return unique(output, (item) => `${item.node.id}|${item.breakpoint}|${item.path}|${item.value}`);
}

function classUses(nodes) {
  const counts = new Map();
  const locations = new Map();

  nodes.forEach((node) => {
    walk(node.attrs, (value, parts) => {
      const settingPath = parts.join(".").toLowerCase();
      if (typeof value !== "string" || !/(class|classes|cssclass)/.test(settingPath)) return;
      if (/innercontent|url|src|srcset/.test(settingPath)) return;

      value.split(/\s+/).filter(Boolean).forEach((className) => {
        counts.set(className, (counts.get(className) || 0) + 1);
        locations.set(className, (locations.get(className) || []).concat(node));
      });
    });
  });

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([className, count]) => ({ className, count, nodes: locations.get(className) || [] }));
}

function customCss(nodes) {
  const output = [];

  nodes.forEach((node) => {
    walk(node.attrs, (value, parts) => {
      const settingPath = parts.join(".");
      const lower = settingPath.toLowerCase();
      if (!/(customcss|custom_css|css)/.test(lower)) return;
      if (/(class|classes|cssid|preset|src|srcset|innercontent)/.test(lower)) return;
      if (!meaningful(value)) return;
      if (typeof value === "object" && !["desktop", "tablet", "phone"].some((key) => key in value)) return;
      output.push({ node, path: settingPath.replace(/^module\./, ""), value: compact(value) });
    });
  });

  return unique(output, (item) => `${item.node.id}|${item.path}|${item.value}`);
}

function risks(nodes, classes, overrides) {
  const output = [];
  const add = (node, kind, detail, value) => output.push({ node, kind, detail, value: compact(value) });

  nodes.forEach((node) => {
    walk(node.attrs, (value, parts) => {
      if (!meaningful(value)) return;
      const settingPath = parts.join(".");
      const lower = settingPath.toLowerCase();
      const text = compact(value);

      if (/margin/.test(lower) && typeof value === "string" && /^-\d/.test(value.trim())) add(node, "Negative margin", settingPath, value);
      if (/(width|height|minwidth|minheight|maxwidth|maxheight)/.test(lower) && typeof value === "string" && /\d{3,}px/.test(value)) add(node, "Fixed large dimension", settingPath, value);
      if (/(width|left|right|margin|padding)/.test(lower) && typeof value === "string" && /vw\b/.test(value)) add(node, "Viewport-width sizing or spacing", settingPath, value);
      if (/overflow/.test(lower) && /hidden|scroll|auto/i.test(text)) add(node, "Overflow control", settingPath, value);
      if (/position/.test(lower) && /absolute|fixed|sticky/i.test(text)) add(node, "Positioned element", settingPath, value);
      if (/display/.test(lower) && /none/i.test(text)) add(node, "Hidden module or layout element", settingPath, value);
      if (/transform/.test(lower)) add(node, "Transform setting", settingPath, value);
      if (/zindex|z-index/.test(lower) && Number(String(value).replace(/[^\d-]/g, "")) > 10) add(node, "High z-index", settingPath, value);
    });

    const rowGutter = gutter(node);
    if ((node.type === "row" || node.type === "row-inner") && /width:\s*(0|1)\b/.test(rowGutter)) {
      add(node, "Tight row gutter", "module.advanced.gutter.desktop.value", rowGutter);
    }
  });

  classes.filter((item) => item.count > 1).forEach((item) => {
    add(item.nodes[0], "Repeated class", "custom class appears on multiple modules", `${item.className} (${item.count} uses)`);
  });

  if (overrides.length > 20) add(null, "Many responsive overrides", "layout has a high volume of tablet/phone-specific settings", overrides.length);

  const maxDepth = nodes.reduce((max, node) => Math.max(max, node.depth), 0);
  if (maxDepth > 6) add(null, "Deep nesting", "layout hierarchy is relatively deep", maxDepth);

  return unique(output, (item) => `${item.node ? item.node.id : "global"}|${item.kind}|${item.detail}|${item.value}`);
}

function summarize(inputPath, parsed) {
  const nodes = flatten(parsed.root);
  const sections = nodes.filter((node) => node.type === "section");
  const rows = nodes.filter((node) => node.type === "row" || node.type === "row-inner");
  const columns = nodes.filter((node) => node.type === "column" || node.type === "column-inner");
  const modules = nodes.filter((node) => !STRUCTURE_TYPES.has(node.type) && !IGNORED_TYPES.has(node.type));
  const overrides = responsiveOverrides(nodes);
  const classes = classUses(nodes);
  const css = customCss(nodes);
  const riskItems = risks(nodes, classes, overrides);
  const moduleCounts = countBy(modules, (node) => node.type);
  const maxDepth = nodes.reduce((max, node) => Math.max(max, node.depth), 0);

  const sectionLines = list(sections, (section, index) => {
    const directRows = section.children.filter((child) => child.type === "row" || child.type === "row-inner").length;
    const sectionModules = flatten(section).filter((node) => !STRUCTURE_TYPES.has(node.type) && !IGNORED_TYPES.has(node.type)).length;
    return `- ${label(section) || `Section ${index + 1}`}: ${sectionKind(section)} section, ${directRows} direct row(s), ${sectionModules} module(s).`;
  });

  const rowLines = list(rows, (row) => {
    const directColumns = row.children.filter((child) => child.type === "column" || child.type === "column-inner").length;
    const rowGutter = gutter(row);
    return `- ${sectionName(row)} > ${row.type} #${row.id}: columns ${columnStructure(row)} (${directColumns} direct column nodes)${rowGutter ? `; gutter ${rowGutter}` : ""}.`;
  });

  const moduleLines = list(modules, (module) => {
    const preview = imageName(module) || label(module);
    return `- ${sectionName(module)} > ${module.type} #${module.id}${preview ? `: ${preview}` : ""}.`;
  });

  const noteLines = [
    "Unsupported or ignored details: raw preset IDs, builder version noise, default empty settings, full content bodies, media metadata, and unsupported module-specific internals.",
    "Unknown Divi modules are still counted and placed in the hierarchy, but their specialist settings may not be interpreted yet.",
  ];
  if (parsed.parseErrors) {
    noteLines.push(`${parsed.parseErrors} block attribute payload(s) could not be parsed and were treated conservatively.`);
  }

  return `# Layout Summary

Source: \`${path.basename(inputPath)}\`

## Sections

${sectionLines}

## Rows

${rowLines}

## Modules

Module counts:

${moduleCounts.length ? moduleCounts.map(([type, count]) => `- ${type}: ${count}`).join("\n") : "- None detected."}

Module hierarchy:

${moduleLines}

## Responsive Overrides

${list(overrides, (item) => `- ${item.breakpoint}: ${nodeRef(item.node)} ${item.path} = ${item.value}`)}

## Custom Classes

${list(classes, (item) => `- ${item.className}: ${item.count} use(s).`)}

## Custom CSS

${list(css, (item) => `- ${nodeRef(item.node)} ${item.path}: ${item.value}`)}

## Potential Risk Areas

${list(riskItems, (item) => `- ${item.kind}: ${item.detail} on ${nodeRef(item.node)}${item.value ? ` (${item.value})` : ""}.`)}

## Complexity Indicators

- Sections: ${sections.length}
- Rows: ${rows.length}
- Columns: ${columns.length}
- Modules: ${modules.length}
- Module types: ${moduleCounts.length}
- Responsive override count: ${overrides.length}
- Custom class count: ${classes.length}
- Custom CSS count: ${css.length}
- Maximum nesting depth: ${maxDepth}

## Notes

${noteLines.map((note) => `- ${note}`).join("\n")}
`;
}

const inputPath = process.argv[2];
if (!inputPath) usage();

const outputPath = process.argv[3] || path.join(path.dirname(inputPath), "layout-summary.md");
let json;
try {
  json = JSON.parse(fs.readFileSync(inputPath, "utf8"));
} catch (error) {
  fail(`Could not read or parse JSON: ${error.message}`);
}

const strings = collectBlockStrings(json);
if (!strings.length) fail("No Divi block comments were found in this JSON export.");

const parsed = parseBlocks(strings);
fs.writeFileSync(outputPath, summarize(inputPath, parsed), "utf8");
console.log(`Wrote ${path.resolve(outputPath)}`);
