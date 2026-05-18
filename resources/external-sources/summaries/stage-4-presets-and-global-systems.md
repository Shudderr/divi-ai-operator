# Stage 4 Presets and Global Systems Summary

**Project:** Simplicity Tech Divi AI Operator
**Status:** Official-doc-backed learning summary; not locally verified execution knowledge
**Last Updated:** 2026-05-18
**Learning Plan Stage:** Stage 4 - Presets And Design Variable Docs

---

## 1. Source List

| Source | URL | Trust Level | Use In This Summary |
|--------|-----|-------------|---------------------|
| Advanced Styling using Element Presets in Divi 5 | https://help.elegantthemes.com/en/articles/13349150-advanced-styling-using-element-presets-in-divi-5 | Official Help Center | Primary source for element preset creation, default presets, preset application, local overrides, and propagation behaviour. |
| How to Use Option Group Presets in Divi 5 | https://help.elegantthemes.com/en/articles/10725144-how-to-use-option-group-presets-in-divi-5 | Official Help Center | Source for option-group-level preset granularity, how option group presets differ from element presets, and partial-style reuse. |
| Stacked And Nested Presets in Divi 5 | https://help.elegantthemes.com/en/articles/12817235-stacked-and-nested-presets-in-divi-5 | Official Help Center | Source for stacked preset layers, inheritance order, and how multiple preset levels interact on a single element. |
| Preset Manager and Preset Preview Systems in Divi 5 | https://help.elegantthemes.com/en/articles/13427552-preset-manager-and-preset-preview-systems-in-divi-5 | Official Help Center | Source for the Preset Manager panel, preset preview rendering, and preset audit workflows. |
| Global Variables in Divi 5 | https://help.elegantthemes.com/en/articles/13348842-global-variables-in-divi-5 | Official Help Center | Primary source for Global Variables (design variables): types, creation, scoping, referencing, and update propagation. |
| Variable Generator in Divi 5 | https://help.elegantthemes.com/en/articles/14851749-variable-generator-in-divi-5 | Official Help Center | Source for fluid/fixed responsive sizing scales and token families generated from the Variable Generator. |
| Inspect Element Styles Using Divi 5 Style Inspector | https://help.elegantthemes.com/en/articles/13002652-inspect-element-styles-using-divi-5-style-inspector | Official Help Center | Primary source for Style Inspector read-only audit workflow: finding local, preset, and variable style sources. |
| Style Inspector in Divi 5 | https://help.elegantthemes.com/en/articles/12457386-style-inspector-in-divi-5 | Official Help Center | Source for Style Inspector overview: style source attribution, page-level inspection, and element-level inspection. |
| Using The Divi Theme Builder | https://help.elegantthemes.com/en/articles/8624263-using-the-divi-theme-builder | Official Help Center | Primary source for Theme Builder template concepts, template assignment, global header/footer/body areas, and template scope. |
| Editable Theme Builder Areas in Divi 5 | https://help.elegantthemes.com/en/articles/14014566-editable-theme-builder-areas-in-divi-5 | Official Help Center | Source for front-end editing of Theme Builder template areas and template-wide edit scope. |
| The Divi Theme Builder | https://www.elegantthemes.com/documentation/divi/the-divi-theme-builder/ | Official Documentation | Secondary source for Theme Builder portability, template import/export, and template assignment concepts. |
| Dynamic Content in Divi 5 | https://help.elegantthemes.com/en/articles/11622973-dynamic-content-in-divi-5 | Official Help Center | Source for dynamic content in templates: post data, site data, custom fields, and design variable integration. |
| Divi 5 Visual Builder Interface | https://help.elegantthemes.com/en/articles/12991185-divi-5-visual-builder-interface | Official Help Center | Source for left sidebar panel tools including Global Variable Manager, Preset Manager, and Style Inspector access paths. |

**Stage 1, Stage 2, and Stage 3 summaries** are also background sources for this document, particularly for hierarchy, responsive field behaviour, and structural traversal context.

---

## 2. Core Global-System Concepts

### What Makes a System "Global"

In the Divi 5 design system, a "global" system is any styling mechanism whose values propagate beyond the single element being edited. Three global systems exist:

| System | Scope | Propagation Trigger |
|--------|-------|---------------------|
| Element Presets | All elements of a given type using that preset | Editing the preset definition |
| Design Variables (Global Variables) | Any element or preset referencing the variable | Editing the variable value |
| Theme Builder Templates | All pages/posts assigned to that template | Editing the template |

The key operator insight is: **changing a value in any of these systems can update many elements simultaneously, across many pages, without element-by-element confirmation prompts.**

### Default Values and the Local Override Model

Divi 5 styling uses a layered override model:

```
Design Variable (sitewide token)
  ↓ applied to
Element Preset (module-type-level style definition)
  ↓ applied to
Local field value (single element instance, single field)
```

A value at a higher layer is the default. A value at a lower layer overrides the default for that element only. The override does not propagate back up the chain.

When no local override exists, the element inherits from the preset. When no preset value exists, the element inherits from the design variable if one is referenced. When neither is set, the element uses the Divi or browser default.

### Propagation

Propagation is the mechanism by which editing a higher-layer value causes automatic updates to all lower-layer elements that reference it.

- Editing a **Design Variable** propagates to every field that references that variable — across all elements, sections, and pages on the site.
- Editing an **Element Preset** propagates to every element of that type using that preset.
- Editing a **Theme Builder template** propagates to every page or post type assigned to that template.

**Propagation is automatic and immediate upon save.** There is no selective preview before applying a global change. This is the core reason global systems require explicit approval before any edit.

### Reusability and Reusable Styles

Official docs position presets and variables as the intended mechanism for style reuse across a Divi site:

- Instead of manually matching a heading color across 20 headings, the color is stored in a Design Variable and all headings reference it.
- Instead of manually styling every Button module, a Button preset defines the base appearance and all Buttons use it.

The value of this is design consistency. The risk is propagation: fixing one heading's color by editing the variable fixes all 20, but it also risks unintentionally changing any heading that should have been different.

---

## 3. Element Preset Concepts

### What an Element Preset Is

An Element Preset is a named collection of field values for a specific module type (e.g., Heading, Button, Text, Blurb). When a Heading module uses a preset named "Section Heading", every field in that preset applies to that Heading unless a local override exists.

Official docs describe presets as per-module-type. A Heading preset cannot be applied to a Button module. Presets are not cross-type.

### Default Presets

Every module type can have a default preset. When a new module of that type is created, it uses the default preset's styling automatically. Changing the default preset changes the appearance of all newly created modules of that type AND all existing modules using that preset.

Official docs distinguish:
- **Default preset:** applied automatically to new elements. Changing it affects all elements using it.
- **Named non-default preset:** manually applied. Changing it still propagates to all elements using it, but does not affect new elements unless it is also set as default.

### Preset Reuse

An element uses a preset by referencing it. Multiple elements on the same page — or across different pages — can reference the same preset. Official docs confirm that a preset edit propagates to all referencing elements sitewide, not just on the current page.

### Preset Override Behaviour

When a field value is set locally on a module instance, that local value overrides the preset's value for that field on that element only. Other elements using the same preset are unaffected by the local override.

Official docs note:
- A local override does not modify the preset.
- The preset still has its original value.
- Other instances of the same preset remain at the preset value.
- The locally-overriding element only changes for itself.

This means: if the operator edits a field on an element that uses a preset, and then edits the same field in the preset definition, the preset edit does NOT automatically override the local override. The local override "wins" for that element.

### Identifying Whether an Element Is Using a Preset

Official docs describe the Style Inspector as the tool for determining whether a field's current value is:
- A local override
- Inherited from a preset
- Referenced from a Design Variable

This means the Style Inspector must be read before any field edit, to understand whether editing locally or editing the preset is the correct intervention.

### Preset Drift

A potential failure state occurs when:
1. Many elements use a preset.
2. Some elements have accumulated local overrides on specific fields.
3. The preset definition is updated.
4. The preset update propagates to all elements — but fields with local overrides do not update (local override wins).

The result is that elements look visually inconsistent: some updated to the new preset, some kept their local override. This is "preset drift" and is difficult to detect without auditing each element individually.

---

## 4. Design Variable Concepts

### What a Design Variable Is

Official docs describe Divi 5 Global Variables (Design Variables) as named, reusable values that can be referenced from any compatible field in any element, across any page.

Variable families described in official docs:

| Variable Family | Examples |
|-----------------|---------|
| Color | Brand primary color, accent color, background color |
| Font | Heading font family, body font family |
| Number/Spacing | Base spacing unit, grid gap, max-width |
| Image | Logo, background image |
| Link | Social URLs, CTAs |
| Text | Site name, tagline, reusable text snippets |

### Variable Referencing

When a field references a variable instead of storing a literal value, it displays the variable name rather than the raw value. If the variable value changes, the field renders the new value automatically without any per-element edit.

This is the key mechanism of sitewide propagation: one edit to one variable can change the appearance of every element that references it.

### Variable Update Propagation

Official docs confirm that updating a Global Variable value propagates immediately to all referencing fields upon save. The operator cannot selectively update some references and not others — the update is sitewide.

For the operator, this means:
- A request to "change the primary color" may appear to be a one-field change, but it could update dozens of elements across the entire site.
- There is no preview of which elements will change before the variable edit is saved.
- Rollback requires saving the original variable value and restoring it — or using Builder history if history tracks variable edits.

### Variable Scoping

Official docs describe Global Variables as sitewide. There is no concept of page-scoped or section-scoped variables in the official docs reviewed. Variables are defined once and are available everywhere in the Builder.

However, individual fields can opt out by using a literal value instead of a variable reference. This creates a "detached" element that does not respond to variable updates.

### The Variable Generator

The Variable Generator is a Builder tool that generates responsive sizing tokens from input parameters. Official docs describe two output modes:

| Mode | Output | Use Case |
|------|--------|---------|
| Fluid | `clamp()` value | Smooth scaling between viewport sizes |
| Fixed Responsive | Separate per-breakpoint values | Discrete values per device |

The Variable Generator outputs can be stored as Design Variables and referenced from spacing, font-size, or width fields. This makes it a design-system-level tool, not a per-element tool.

### Global Variable Manager

The Global Variable Manager is accessible from the Visual Builder left sidebar panel. Official docs position it as the creation, editing, and management interface for all site Design Variables.

Accessing the Global Variable Manager is a read-only, non-destructive audit action. Editing a variable inside it is a sitewide write action requiring explicit approval.

---

## 5. Theme Builder Concepts

### What the Theme Builder Does

The Divi Theme Builder allows creating reusable Builder-rendered templates for three site-wide areas:

| Area | Scope |
|------|-------|
| Global Header | Rendered as the page header on all assigned pages |
| Global Body | Rendered as the page body/content area on assigned pages |
| Global Footer | Rendered as the page footer on all assigned pages |

Templates can be assigned globally (to all pages) or selectively (specific page types, categories, tags, individual pages).

### Template Assignment

Official docs describe template assignment as condition-based:
- A template can apply to all pages.
- A template can apply to all single posts.
- A template can apply to a specific category or tag archive.
- A template can apply to the homepage, 404 page, or search results.
- A template can apply to a specific page or post by ID.

When a template is assigned to a broad condition (e.g., "all pages"), editing that template propagates to all matching pages. This is the highest scope of propagation available in Divi.

### Local Site Status

The `sampleproblem-pages.local` site has **no Theme Builder templates configured** (verified 2026-05-18). No Global Header, Body, or Footer template exists. This means Theme Builder is currently not a propagation risk on this site, but it is a capability that must be understood before any future work that involves headers, footers, or global body templates.

### Editable Theme Builder Areas from the Front End

Official docs describe Divi 5's ability to edit Theme Builder template areas directly from the front end while the Builder is active. This means the header, footer, or body of a page can be edited inline without navigating to the Theme Builder admin UI — but the edits still apply to the template and propagate to all assigned pages.

This is a significant operator risk: an edit that appears to be a front-end, page-scoped change may actually be a template-scoped, sitewide change if the element being edited is part of a Theme Builder template area.

### Dynamic Content in Templates

Official docs describe Dynamic Content as the mechanism for injecting post-level or site-level data into Theme Builder templates:
- Post title, post content, post excerpt, post date, author name.
- Site title, site tagline, site logo.
- Custom fields.
- Design Variables.

Dynamic content fields display differently per page/post they are assigned to, even though the template definition is shared. This makes templates flexible but also makes template edits more complex to reason about, since the same template renders differently depending on context.

---

## 6. Inheritance and Propagation Concepts

### How Style Inheritance Works Conceptually

Divi 5 applies styles in a cascade of layers. For any given field on any given element, the active value comes from the first matching layer that provides one:

```
1. Local override on the element instance (field edited directly)
2. Element Preset applied to that element (preset's field value)
3. Design Variable referenced by the preset or field (variable's value)
4. Divi default (fallback built into the module type)
5. Browser/CSS default (lowest fallback)
```

Editing at Layer 1 affects only that one element. Editing at Layer 2 affects all elements using that preset. Editing at Layer 3 affects all elements referencing that variable — directly or through presets.

**The higher the layer edited, the wider the effect.**

### Local Override vs Inherited Value

When a field is edited locally on a module, that local value:
- Overrides the preset or variable for that field on that element.
- Does not change the preset or variable.
- Does not affect any other element.
- Creates a "detached" value at that field: if the preset is later updated, the local override value persists unless manually cleared.

When a field is left unset locally, it:
- Inherits from the preset.
- Inherits from the variable through the preset.
- Will respond automatically to preset or variable updates.

The Style Inspector is the official tool for determining which layer is controlling a field's current value.

### Why Propagation Risk Exists

Propagation risk exists because the Divi 5 design system is intentionally built for rapid global changes: edit one thing, update everything. For a designer maintaining a consistent site, this is a feature. For an operator making targeted, narrow fixes, this is a hazard.

Specific risks:

1. **Unintentional preset edit:** The operator intends to edit one module instance but accidentally edits the preset definition. All elements using that preset change.
2. **Variable edit wider than expected:** The operator edits a Design Variable to fix one page's spacing. Every page referencing that variable changes.
3. **Theme Builder template edit masked as page edit:** The operator edits a front-end element that appears to be a page element but is actually inside a Theme Builder template area. The template propagates to all assigned pages.
4. **Preset drift after partial local-override accumulation:** The preset is updated but some elements have local overrides on conflicting fields, creating inconsistent appearance.
5. **Variable reference chain:** A field references a variable, which itself was created using the Variable Generator with a `clamp()` formula. Changing the variable's base scale changes all referencing fields' responsive sizing.

### Why Global Edits Are Dangerous for Automation

For human editing in the Builder UI, there are natural brake points: the operator sees the element they are editing, can visually inspect the result, and can use undo if the change is wrong.

For automated editing (browser automation or AI-driven tool interactions), those brake points are absent or weaker:

- Automation cannot easily distinguish between editing a local field and editing a preset definition unless explicitly checking.
- Automation cannot visually inspect global propagation results before committing.
- Undo history may not be accessible via automation or may be limited in depth.
- A preset edit triggered by automation could silently change dozens of elements before the operator notices.

This is why all preset, variable, and Theme Builder editing is in the restricted-actions table of the capability matrix and requires explicit approval.

### Likely Rollback Complexity

Official docs mention Builder history and undo, but the depth and reliability of undo for global system changes (variables, presets, templates) has not been verified locally.

Rollback for a propagated global change is significantly harder than rollback for a local field change:

- A local field change can be undone by resetting that field.
- A preset change that propagated to 20 elements requires either reverting the preset or resetting the local overrides on all 20 elements.
- A variable change that updated fields across 5 pages requires reverting the variable — and verifying that no local overrides were inadvertently introduced during the period between the change and the revert.
- A Theme Builder template change that modified 10 pages requires reverting the template and confirming all 10 pages rendered correctly after revert.

For automation, the safest posture is: **never trigger a global change without an explicit save point, a pre-edit audit, and an approved reversal path.**

---

## 7. Operator Implications

### Why Global Systems Must Be Treated as High-Risk

A local module field change affects one element on one page. A global system change can affect every element of a module type (preset), every element referencing a color (variable), or every page of a template type (Theme Builder). The blast radius is fundamentally different in kind, not just degree.

The operator must not reason about global systems using the same risk model as local field edits.

### Why Local-First Edits Are Safer

Before any edit, the operator should ask: is this value controlled by a local field, a preset, or a variable? The answer determines scope. Editing the local field is the narrowest possible scope. Editing the preset or variable is always wider.

Official docs describe the local override mechanism specifically to enable local corrections without touching global definitions. When a local fix is sufficient, it should always be preferred over a global change.

### Why Presets Require Ownership Awareness

"Ownership" in this context means knowing whether a preset is used by one element or many. Before editing a preset, the operator should:

1. Use the Preset Manager to see all elements using that preset.
2. Confirm the intended scope of the change.
3. If only one element should change, apply a local override instead of editing the preset.
4. Only edit the preset if the intent is to update all elements using it.

The Preset Manager is the official tool for this audit (but it must be verified locally before use in execution).

### Why AI Must Understand Propagation Before Editing

An AI operator that understands the layout hierarchy (Stage 3) but does not understand propagation (Stage 4) can correctly identify a module and its parent structure — but still cause a sitewide regression by editing a preset or variable that controls that module's appearance.

Stage 3 prevents wrong-element selection. Stage 4 prevents wrong-scope mutation. Both are required for safe editing.

### Style Inspector as the Pre-Edit Safety Check

Official docs position the Style Inspector as a read-only pre-edit audit tool. Before modifying any styled field, the Style Inspector should answer:

1. Is this field's current value a local override, a preset value, or a variable reference?
2. Which preset or variable is controlling this field?
3. How many other elements share this preset or variable?

If the Style Inspector shows a preset or variable controlling the field, the operator must assess propagation scope before deciding whether to edit locally (override) or globally (preset/variable edit).

---

## 8. Common Global-System Failure Patterns

| Pattern | Description | Why It Happens |
|---------|-------------|----------------|
| Accidental preset edit | Operator clicks "Edit preset" instead of "Apply local override" — changes propagate to all elements using that preset. | Preset and local-edit controls can be visually adjacent; without local verification, the distinction is unclear. |
| Variable propagation surprise | Operator changes a spacing variable to fix one section — unintended sections on other pages change. | Variable scope is sitewide by default; the operator did not audit all referencing fields before editing. |
| Breaking sitewide spacing consistency | Operator edits a spacing variable used as a base unit for multiple spacing tokens — a cascade of spacing changes across many elements. | Variable tokens may feed other tokens (compound propagation); changing one token can affect multiple downstream values. |
| Local override accumulation hiding preset drift | Many local overrides accumulate on elements. When the preset is updated, the site looks inconsistent because overriding elements don't update. | Local overrides are "forgotten" over time; no audit mechanism reminds the operator they exist. |
| Template-wide regression | Operator edits what appears to be a page header but is actually a Theme Builder template header — all pages using that template change. | Front-end editable Theme Builder areas look identical to page-scoped elements in the visual Builder. |
| Preset deletion affecting many elements | Operator deletes a preset — elements using it may revert to Divi defaults. | Preset deletion is an option in the Preset Manager; its propagation effect (revert to default) may not be obvious. |
| Variable deletion with orphaned references | A Design Variable is deleted while fields still reference it — referencing fields may lose their value or revert to defaults. | The impact of deleting a variable on all referencing fields is not locally verified. |
| Nested preset layer conflict | Element uses both an Element Preset and an Option Group Preset; operator edits one but the other takes precedence for the affected field. | Stacked preset inheritance order is complex and not intuitively visible in the settings panel. |
| Rollback incomplete after global change | Operator attempts to undo a global change via Builder history; undo reverts the variable/preset but some elements retain local overrides created after the change. | Undo may not track local overrides made after the global change; the revert is partial. |

---

## 9. Do / Don't Rules

### Do

- Identify whether a field's value is local, preset-controlled, or variable-referenced before editing (use Style Inspector when locally verified).
- Prefer local field overrides when only one element should change.
- Use the Preset Manager to audit preset usage scope before editing any preset.
- Treat every Design Variable edit as a sitewide change and confirm scope before proceeding.
- Treat every Theme Builder template edit as a multi-page change and confirm assignment scope before proceeding.
- Document the controlling preset or variable name before editing anything globally.
- Obtain explicit approval before editing any preset, variable, or Theme Builder template.
- Plan a rollback path (known original value, undo step confirmed) before any global edit.
- Read the Style Inspector read-only as a pre-edit audit step.

### Don't

- Do not edit a preset when only one element should change — use a local override instead.
- Do not edit a Design Variable without auditing which fields reference it.
- Do not treat a variable edit as a narrowly scoped change.
- Do not assume local override isolation without confirming via Style Inspector.
- Do not modify Theme Builder templates without explicit approval, even in a local environment.
- Do not delete presets or variables without confirming what will revert or break.
- Do not assume the Builder's undo history covers all global system changes reliably.
- Do not use the Save Dropdown (sub-options not verified) when working with global systems.
- Do not edit globally because a local edit is "slower" or "inconvenient" — scope safety always takes precedence.

---

## 10. Unknowns Requiring Local Verification

| Unknown | Why It Matters |
|---------|----------------|
| Style Inspector access path in the local Builder left sidebar | Cannot use Style Inspector for pre-edit audits until its local entry point is confirmed. |
| Style Inspector read-only behaviour — does inspecting a field trigger any edit state? | Need to confirm the Inspector is non-destructive before using it as a pre-edit safety step. |
| Preset Manager access path and panel layout | Cannot audit preset usage scope without confirming where and how the Preset Manager opens. |
| Preset Manager display — does it show how many elements use a preset? | If usage count is not shown, auditing propagation scope requires a different method. |
| Whether editing a preset prompts for confirmation before propagating | If no confirmation exists, a misclick on "Edit preset" immediately changes all references. |
| Global Variable Manager access path in local Builder | Cannot read variable names and references without opening the panel. |
| Whether variable references are visible in field UI without opening Style Inspector | If fields don't visually distinguish variable references from literal values, propagation risk is less visible. |
| Builder undo/history depth for global system changes | Whether undo covers preset edits, variable edits, and Theme Builder template edits — and how many steps back. |
| Whether preset drift indicators exist in the local Builder UI | Official docs don't explicitly describe a "drift warning" — local inspection needed. |
| Local Preset Manager preset deletion behaviour — what happens to elements using a deleted preset? | Deletion propagation effect must be verified; currently classified as unknown risk. |
| Whether the Style Inspector can show variable reference chains (variable referencing another variable) | If compound variable references exist, the Style Inspector may need to trace multi-level inheritance. |
| Front-end editable Theme Builder area indicators — how are template areas visually distinguished from page-scoped elements? | Required to avoid accidental template edits. Currently no Theme Builder templates are configured, so this cannot be verified locally yet. |
| Preset save/apply confirmation flow — is there a review step before propagation? | Unknown whether the Builder shows which elements will change before committing a preset edit. |

---

## 11. Candidate Capability-Matrix Entries

**IMPORTANT:** All items below are **OFFICIAL-DOC-BACKED — NOT LOCALLY VERIFIED**. None of these should be added to the capability matrix as VERIFIED entries. They are candidates for future local read-only verification sessions only.

| Candidate Item | Official-Doc-Backed Claim | Local Verification Needed |
|----------------|---------------------------|---------------------------|
| Style Inspector — read-only audit | Style Inspector shows whether a field's value is local, preset-driven, or variable-referenced. | Open Style Inspector on a low-risk element; confirm the panel is non-destructive and shows style source attribution. |
| Preset Manager — audit panel | Preset Manager shows all presets for the current element type, with preview rendering. | Open Preset Manager for one module type; confirm preset list, preview display, and whether usage count per preset is visible. |
| Global Variable Manager — read-only access | Global Variable Manager lists all Design Variables with name, type, and current value. | Open the panel read-only; confirm variable list, type labels, and confirm that opening the panel does not trigger any edit state. |
| Local field override vs preset value distinction | A field edited locally on a module instance overrides the preset for that field on that element only, without changing the preset. | Edit one low-risk field locally on a module known to use a preset; confirm via Style Inspector that the preset is unchanged on other modules. |
| Preset propagation scope | Editing a preset propagates to all elements using that preset, sitewide. | Do NOT verify by editing a preset in the local site; instead, confirm from Style Inspector which preset a module uses, then audit without editing. |
| Builder undo for global changes | Builder history/undo may cover preset and variable edits. | Check undo panel depth before any global edit; confirm whether undo steps include preset or variable changes. |
| Theme Builder template area visual indicator | Theme Builder editable areas are distinguishable from page-scoped elements in the Builder. | Not currently verifiable — no Theme Builder templates exist on this site. Mark for future verification when templates are configured. |
| Preset Manager deletion warning | Deleting a preset from the Preset Manager affects all elements using it. | Do NOT test by deleting; instead, confirm whether a usage count or warning is shown before deletion can proceed. |

---

## Stage 4 Completion Note

Stage 4 establishes the operator's conceptual understanding of Divi 5's three global styling systems — Element Presets, Design Variables, and the Theme Builder — including their inheritance models, propagation mechanisms, and rollback complexity.

The central operator principle from Stage 4 is:

> **The higher the styling layer edited, the wider the propagation. Local overrides are always the safest first choice. Global system edits require explicit approval, a pre-edit scope audit, and a planned rollback path.**

The Style Inspector is the key pre-edit safety tool for distinguishing local, preset, and variable-controlled field values. The Preset Manager is the key audit tool for understanding preset usage scope before any preset-level edit.

Neither the Style Inspector, Preset Manager, nor Global Variable Manager has been verified locally in read-only mode. Their access paths and behaviour must be confirmed before any global system reasoning can become operational.

Stage 5 should proceed to mapping official-doc-backed knowledge to the capability matrix — distinguishing what is doc-backed only, what is locally verified, and what must be verified before any global system editing is safe.
