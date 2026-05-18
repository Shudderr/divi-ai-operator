# Stage 3 Navigation and Traversal Summary

**Project:** Simplicity Tech Divi AI Operator
**Status:** Official-doc-backed learning summary; not locally verified execution knowledge
**Last Updated:** 2026-05-18
**Learning Plan Stage:** Stage 3 - Layout And Navigation Docs

---

## 1. Source List

| Source | URL | Trust Level | Use In This Summary |
|--------|-----|-------------|---------------------|
| Using the Divi Layers View | https://help.elegantthemes.com/en/articles/8662395-using-the-divi-layers-view | Official Help Center | Primary source for Layers panel hierarchy navigation, element selection, renaming, and reorganising via tree view. |
| Navigate And Organize Your Pages Inside A New Nested Layers Interface | https://www.elegantthemes.com/blog/theme-releases/divi-layers-view | Official Blog / Release Article | Secondary context for intended Layers design goals: visual navigation, structural overview, element targeting. |
| Wireframe View in Divi 5 | https://help.elegantthemes.com/en/articles/10469465-wireframe-view-in-divi-5 | Official Help Center | Primary source for Wireframe View purpose, access path, structural block display, and navigation concepts. |
| The Divi 5 Command Center | https://help.elegantthemes.com/en/articles/13741079-the-divi-5-command-center | Official Help Center | Source for keyboard/search-driven navigation, adding elements, switching views, running Builder actions. |
| Copy/Paste Elements and Elements Attributes in Divi 5 Visual Builder | https://help.elegantthemes.com/en/articles/13309833-copy-paste-elements-and-elements-attributes-in-divi-5-visual-builder | Official Help Center | Source for contextual copy/paste, whole-element copy, attribute copy, and paste style patterns. |
| Divi 5 Visual Builder Interface | https://help.elegantthemes.com/en/articles/12991185-divi-5-visual-builder-interface | Official Help Center | Source for the four interface zones, breadcrumbs in settings panel, canvas selection concepts. |
| The Divi Regular Section (Divi 5) | https://help.elegantthemes.com/en/articles/9996489-the-divi-regular-section-divi-5 | Official Help Center | Source for regular section structure, section settings, section-level controls. |
| The Divi Specialty Section (Divi 5) | https://help.elegantthemes.com/en/articles/10374149-the-divi-specialty-section-divi-5 | Official Help Center | Source for specialty section structure, module columns, row columns, sizing, spacing. |
| Nested Rows in Divi 5 | https://help.elegantthemes.com/en/articles/11009228-nested-rows-in-divi-5 | Official Help Center | Source for nested row limits, inherited responsive behaviour, nested path breadcrumbs, default width/max-width. |
| The Row in Divi 5 | https://help.elegantthemes.com/en/articles/10316106-the-divi-row-divi-5 | Official Help Center | Source for row column structure, sizing, spacing, layout, and order controls. |
| Divi Modules | https://www.elegantthemes.com/documentation/divi/modules/ | Official Documentation | Hub source for module types and module-level documentation. |
| The Heading Module in Divi 5 | https://help.elegantthemes.com/en/articles/10315593-the-heading-module-in-divi-5 | Official Help Center | Locally verified module. Used as the reference case for Content/Design/Advanced tab groups. |
| Getting Started With The Divi Builder | https://www.elegantthemes.com/documentation/divi/visual-builder/ | Official Documentation | Secondary reference for established structural concepts, Wireframe mode, and classic Builder terminology. |

**Stage 1 and Stage 2 summaries** are also primary background sources for this document.

---

## 2. Core Structural Concepts

### The Divi Layout Hierarchy

Divi organises every page into a strict four-level hierarchy:

```
Page
  └── Section
        └── Row
              └── Column
                    └── Module
```

Each level is owned by its parent. Removing a parent removes everything inside it. Changes to a higher level can affect all children.

**Page:** The WordPress page that holds all Builder content. The page-level settings modal (accessed via the Page Menu) contains page-wide controls including custom CSS.

**Section:** The largest structural unit on a page. A Section spans the full content width by default. Three Section types exist in Divi:

| Section Type | Structural Behaviour |
|--------------|---------------------|
| Regular | Standard horizontal layout — contains Rows that define column structures. |
| Fullwidth | A specialised section for fullwidth modules only (e.g., Fullwidth Header, Fullwidth Image). Does not contain Rows in the standard sense. |
| Specialty | A more complex type — see §7 below for dedicated coverage. |

**Row:** Sits inside a Section (or inside a Specialty Section row column). A Row defines its own column structure (1, 2, 3, 4, or more columns depending on configuration). Row-level settings include spacing, sizing, column structure, visibility, and column gutters.

**Column:** Sits inside a Row. A Column holds Modules or, when nested rows are used, may contain a nested Row. Column width can be adjusted within the Row's available width. Custom column widths require careful gutter math.

**Module:** The actual content element. Examples on the `home` page (verified): Heading, Icon, Text, Number Counter, Image, Button, Blurb, Accordion. A Module sits inside a Column. A Module has three settings tabs — Content, Design, Advanced — as confirmed locally for the Heading module and Page Settings.

### Module Ownership Hierarchy

When reasoning about where a setting belongs, ownership follows the hierarchy exactly:

- A **Module-level** setting (e.g., heading font size) affects only that one module.
- A **Column-level** setting affects all modules inside that column.
- A **Row-level** setting (e.g., row spacing) affects all columns and modules in that row.
- A **Section-level** setting (e.g., section background) affects all rows inside that section.
- A **Page-level** setting (e.g., page-level CSS) affects everything on the page.

Change impact always expands outward. The higher the level, the wider the effect.

### Structural Inheritance Concepts

- **Settings do not flow down automatically.** Each element type (Section, Row, Column, Module) has its own independent settings modal. A Section's padding does not become a Module's padding. Each level manages its own spacing.
- **Responsive overrides do flow through the hierarchy** in the sense that a value set at a higher breakpoint can be inherited by child elements at smaller breakpoints if those children have no override of their own. However, the inheritance unit is the individual field value, not the element level itself.
- **Presets can apply styling across multiple elements** at the same level (e.g., all Heading modules of a given preset). This is a design-system concept, not a structural one, but it affects how changes propagate.

### Nested Rows

Official docs confirm that Divi 5 supports nested rows: a Column can contain a Row, which contains its own Columns, which contain Modules. The nested Row's path adds one extra level:

```
Section → Row → Column → [Nested Row] → Column → Module
```

Official docs state:
- Nested rows default to `width: 100%` and `max-width: none`, inheriting the full width of their parent column.
- Nested rows inherit Divi's responsive column-collapse behaviour.
- Breadcrumbs in the settings panel show the nested path to help locate the current element.

Operator implication: when a Module appears to be inside a Column but visual behaviour suggests column sizing is wrong, there may be an intermediate nested Row or Column that is not immediately visible from the canvas.

---

## 3. Layers View Concepts

### Purpose

Official docs describe the Layers panel as a tree-based navigation tool designed to give the operator a structural overview of all elements on the page without relying solely on canvas interaction.

The intended use case is pages that are densely structured, have overlapping visuals, or contain elements that are hard to click directly on the canvas — exactly the kind of pages where canvas selection becomes unreliable.

### Hierarchy Navigation

The Layers panel shows the full hierarchy of the page:

- All Sections are listed at the top level.
- Each Section is expandable to reveal its Rows.
- Each Row is expandable to reveal its Columns.
- Each Column is expandable to reveal its Modules (or nested Rows).
- Nested Rows expand to show their inner Columns and Modules.

Official docs describe this as a "nested layers interface" — meaning the tree mirrors the Page → Section → Row → Column → Module hierarchy exactly.

### Collapsing and Expanding Structures

Elements in the Layers panel can be collapsed to reduce visual noise and expanded to inspect specific branches. This allows the operator to focus on a particular section without needing to scroll through the entire page tree.

### Structural Identification

Official docs position Layers as the tool for:
- Seeing how many sections, rows, and columns exist.
- Identifying which column owns a specific module.
- Finding elements that are not easily visible on the canvas (e.g., visually small modules, elements behind overlapping content, elements at a non-obvious hierarchy level).

### Selection Workflows

Official docs indicate that clicking an element in the Layers panel selects it and opens its settings. This is the document-backed alternative to canvas click selection for reaching a specific element without ambiguity.

### Renaming and Reorganising

Official docs also describe administrative capabilities within Layers:
- Elements can be renamed inside the Layers panel to give them meaningful labels (e.g., renaming a Row from "Row 3" to "Stats Row").
- Drag and drop within the Layers panel can reorganise structure.

Both of these are described as operational features in official docs but **must not be used without local verification**, especially drag-and-drop, which is destructive if misapplied.

### Likely Operator-Safe Usage Patterns

Based on official docs, the safest initial Layers use cases are:

| Usage | Risk Level |
|-------|-----------|
| Expand the full tree to understand page structure (read-only) | Low |
| Click an element in the tree to open its settings | Low-Medium (unverified) |
| Rename elements for clarity | Medium (unverified — affects element labels) |
| Drag-and-drop to reorganise | High (unverified — can move elements destructively) |

---

## 4. Wireframe View Concepts

### Purpose

Official docs describe Wireframe View as a mode that replaces the visual canvas rendering with a simplified block-diagram representation of the page structure. Instead of seeing the designed page, the operator sees labelled boxes representing Sections, Rows, Columns, and Modules.

The value is structure-first inspection: the operator can navigate and understand the layout without being distracted or confused by visual styling, images, overlapping content, or complex backgrounds.

### Access Path

Official docs indicate Wireframe View is accessed via the Builder Bar, through a button with CSS class `et-vb-builder-bar-button--divi-wireframe-view`. This button was **locally verified as present** during the 2026-05-18 session (see capability matrix §1.4). The panel internals were not opened.

### Structure-First Editing

In Wireframe View, modules appear as labelled boxes rather than rendered content. This makes it possible to:
- See all modules in a section without visual overlap.
- Identify which column a module is in.
- Click the structural block to open the element settings.
- See dense sections as a manageable list of structural elements.

### Non-Visual Traversal

The key property of Wireframe View is that it removes design information entirely. For an operator reasoning structurally, this can make it easier to:
- Distinguish rows with one, two, three, or four columns.
- Identify nested rows that are visually invisible in the rendered view.
- Spot empty or hidden elements that have no visual footprint.

### Dense-Page Navigation

Official docs position Wireframe View as particularly useful on dense pages with many modules, overlapping elements, or complex backgrounds. This is consistent with the `home` page structure (9 sections, 15 rows verified), where canvas clicking is already known to select wrong element levels.

### Relationship Visibility

By removing visual styling, Wireframe View makes Column and Row relationships visible that might otherwise be obscured. A 4-column row is clearly visible as 4 boxes at the same level, rather than four visually styled elements that may or may not appear to be siblings.

### Troubleshooting Value

For diagnosing structural problems (wrong spacing, incorrect column ownership, unexpected nesting), Wireframe View is especially useful because it exposes the hierarchy without the visual layer that can mislead the operator about where a setting should be applied.

---

## 5. Canvas Navigation Concepts

### Overlay Behaviour

The Visual Builder canvas renders the page inside an iframe (`et-vb-app-frame`, **verified**). As the operator hovers over canvas elements, visual overlays appear to indicate which element is being hovered and at which level (Section, Row, Column, or Module).

### Hover Interactions

Each element level has its own hover overlay with:
- An element label or badge.
- Action icons such as drag, settings (gear/pencil), duplicate, add, and delete.
- The element's clickable area.

The challenge is that hover zones for different levels can overlap. When a Module sits inside a Column inside a Row inside a Section, all four hover overlays may compete for the same screen region.

### Selection Ambiguity

This is a **locally confirmed limitation** (see capability matrix §3.1): clicking canvas overlays directly tends to select the wrong element level. The operator may intend to select a Module but instead select its parent Column or Row.

Official docs acknowledge this by providing alternative navigation routes (Layers panel, settings panel breadcrumbs, Command Center) as structurally reliable alternatives.

### Risks of Visual-Only Navigation

Relying solely on canvas clicking for element selection creates several execution risks:

- Selecting the wrong element and editing settings that affect a wider scope than intended.
- Opening a Row's spacing settings when the intent was a Module's padding.
- Accidentally triggering destructive actions (delete, duplicate) via the wrong element's action icons.
- On dense pages or nested structures, canvas overlays may not reliably represent the actual element hierarchy.

### iframe/Canvas Implications

The canvas renders inside an iframe. Browser automation tools interacting with the canvas must handle the iframe context separately from the Builder UI frame. Hover simulation and click simulation inside the iframe require additional setup. **This is an unknown for the local automation layer and must be verified before canvas interaction is attempted.**

---

## 6. Structural Traversal Workflows

### Safest Way to Locate a Module

Based on official docs and local verification, the recommended operator traversal path is:

1. Open the page in the Visual Builder via Edit With Divi (fresh nonce-safe link).
2. Use the **Layers panel** (if locally verified) or the **right-panel hierarchy** (locally verified) to identify the Section → Row → Column → Module path.
3. At each level, confirm the element label and structure before drilling deeper.
4. Use breadcrumbs in the settings panel to confirm the current position once a settings modal is open.
5. Avoid canvas-only selection for element targeting.

The right-panel hierarchy drill-down (Section → Row → Column → Module via pencil icons) is the **only currently locally verified targeting method** (capability matrix §1.2).

### Safest Way to Inspect Nested Structures

For nested structures (nested rows, specialty sections):

1. Do not assume flat structure — always check whether a Column contains a Row before assuming Module ownership.
2. Use the Layers panel (when verified) to expand the full tree before clicking.
3. Use Wireframe View (when verified) to see all nesting levels as labelled blocks.
4. Read breadcrumbs in an open settings modal to confirm the nesting level.

### Top-Down Traversal Logic

Always traverse from the outermost to the innermost element:

1. Identify which Section owns the target element.
2. Within that Section, identify the Row.
3. Within that Row, identify the Column.
4. Within that Column, identify the Module (or confirm whether a nested Row adds a level).
5. Open settings at the identified level only.

This prevents accidentally editing a parent element when the intended target is a child.

### Identifying Responsive Ownership

Before making a responsive change, identify:

1. Which element level owns the value to be changed (Module, Column, Row, or Section).
2. Whether the value is set at the correct level or inherited from a parent.
3. Whether the current preview/breakpoint is the intended editing context.
4. Whether the field has an existing breakpoint override (blue responsive icon).

### Tracing Inheritance

If a spacing or sizing value looks incorrect:

1. Check the element's own settings at the relevant tab (Design → Spacing).
2. If none found, check the parent Column.
3. If none found, check the parent Row.
4. Check for responsive overrides at each level.
5. Check for preset-applied values that may be overriding field-level settings.

---

## 7. Specialty Section Concepts

Specialty sections are structurally more complex than Regular sections and require dedicated operator awareness.

### Why Specialty Sections Are Structurally Different

A Regular section contains Rows, which contain Columns, which contain Modules. The hierarchy is always:

```
Regular Section → Row → Column → Module
```

A Specialty Section introduces a different column concept at the Section level itself:

```
Specialty Section
  ├── Module Column (direct module, no Row wrapper)
  │     └── Module
  └── Row Column (holds Rows, which hold Columns, which hold Modules)
        └── Row
              └── Column
                    └── Module
```

This means the operator cannot assume a uniform hierarchy inside a Specialty Section. Some branches are Module Column paths (shorter). Others are Row Column paths (longer, with additional Row and Column levels).

### Module Columns vs Row Columns

| Column Type | Contains | Depth |
|-------------|----------|-------|
| Module Column | Modules directly | Section → Module Column → Module |
| Row Column | Rows → Columns → Modules | Section → Row Column → Row → Column → Module |

This duality is the core source of Specialty Section traversal confusion. If the operator opens a settings modal and sees an unexpected parent, it may be because the selected Column is a Module Column rather than a standard Row Column.

### Why Nested Rows Become More Likely in Specialty Sections

Row Columns can contain standard Rows, which can themselves contain nested Rows. This makes the maximum possible depth inside a Specialty Section considerably greater than inside a Regular Section.

An operator traversing a Specialty Section may encounter:

```
Specialty Section → Row Column → Row → Column → Nested Row → Column → Module
```

This is a six-level path from Section to Module. Each level is invisible from the canvas unless Layers or Wireframe View is used.

### Why Responsive Problems Become More Likely

Official docs note that Specialty Sections have sizing and spacing controls that apply differently to Module Columns and Row Columns. The responsive behaviour of these two column types differs. A spacing change on a Module Column does not behave the same as a spacing change on a Row Column that contains a Row.

This means:
- Breakpoint overrides may need to be applied at different levels depending on column type.
- A responsive failure inside a Specialty Section may require inspecting both the Column-level and the Row-level settings to find the controlling value.
- Backwards Compatibility Mode may affect how Specialty Section controls are rendered, since the Divi 5 Migrator has not been run on this site.

### Row-Inner and Column-Inner Traversal

In official Divi terminology and underlying HTML output:

- A **Row Inner** (also called a nested row) has its own sizing, spacing, and column structure.
- A **Column Inner** is the column inside a nested Row (not the top-level row column).

For the operator, the key distinction is:

- A top-level Row Column controls the width and spacing of its column group at the Specialty Section level.
- A Row Inner inside that Row Column controls the column structure at a nested level.
- A Column Inner inside the Row Inner is where the Module ultimately lives.

Each of these levels has its own settings modal. Editing at the wrong level produces changes at the wrong scope.

---

## 8. Operator Implications

### Why Structure-First Navigation Is Safer

Visual canvas navigation is surface-level. It shows what elements look like, not where they sit in the hierarchy. When the operator relies on visual appearance to decide which element to edit, there is a high risk of targeting the wrong level.

Structure-first navigation — using Layers, Wireframe, breadcrumbs, or the right-panel hierarchy — always exposes the element's actual position in the hierarchy before any settings are opened. This removes ambiguity about scope before any change is made.

### Why Layers and Wireframe May Be Preferred Over Canvas Clicking

| Canvas Clicking | Layers / Wireframe |
|-----------------|--------------------|
| Depends on hover state | Hover-independent |
| Prone to wrong-level selection | Explicit hierarchy selection |
| No structural context shown | Full tree visible |
| Overlapping overlays on dense pages | No overlap — tree or block view |
| Requires iframe hover simulation for automation | Operates in Builder UI frame |

For the operator, Layers and Wireframe View are the intended tools for dense-page navigation and structural inspection, according to official docs. Canvas clicking is intended for quick, simple pages where element identity is unambiguous.

### Why Nested Structures Increase Execution Risk

Every additional level of nesting adds a decision point: is this the element the operator intends, or is the intended element one level deeper?

Nested structures also increase the chance of incorrect responsive-ownership assumptions. An operator who assumes a Module controls its own font size may be wrong if the value is set on a parent Column or Row preset. Traversing nested structures increases the number of levels that need to be checked.

### Why Responsive Reasoning Requires Hierarchy Awareness

From Stage 2: responsive values are field-specific and level-specific. A responsive fix applied at the Row level has different scope than the same field fix applied at the Module level. Before making any responsive change in a nested or Specialty Section structure, the operator must:

1. Confirm the current element level.
2. Confirm the ownership chain.
3. Confirm whether the value is overriding or inheriting.
4. Apply the change at the correct level.

Without hierarchy awareness, responsive fixes can silently affect wider scope or fail to affect the intended element.

---

## 9. Common Structural Failure Patterns

These are diagnostic hypotheses based on official docs, traversal logic, and stage-aggregated knowledge. They are not confirmed diagnoses of CASE-001.

| Pattern | Why It Causes Traversal Problems |
|---------|----------------------------------|
| Editing wrong module | Canvas selection picked parent Column or Row — setting applies wider than intended. |
| Confusing Row with Row-Inner | A nested Row appears to be a top-level Row; spacing is applied to the wrong level. |
| Hidden nested structures | A Column contains a nested Row with its own Columns; operator does not see the nesting without Layers or Wireframe. |
| Specialty section collapse confusion | Module Column and Row Column look structurally similar in the canvas but have different hierarchy depths. |
| Applying responsive override at wrong hierarchy level | Override set on Section when it should be on Module, or vice versa — override wins or is ignored unexpectedly. |
| Canvas selection ambiguity on dense pages | Multiple hover overlays compete; wrong level selected; settings modal opens for wrong element. |
| Assuming module is the source of spacing | Spacing controlled by parent Row or Column, not by the Module's own settings. |
| Invisible nested Row adding an unexpected level | Operator reaches a Column, opens its settings, finds no padding — the value is on a Row-Inner that was not expected. |
| Breadcrumb misread | Operator misreads the breadcrumb and opens settings at the wrong level without noticing. |
| Wrong Section type assumption | Treating a Specialty Section as a Regular Section — looking for a Row that doesn't exist at that level. |

---

## 10. Do / Don't Rules

### Do

- Traverse top-down: Page → Section → Row → Column → Module, always.
- Identify the Section type (Regular, Fullwidth, or Specialty) before drilling into its structure.
- Use Layers panel (once locally verified) for structural overview before any edit.
- Use Wireframe View (once locally verified) for dense pages or complex nesting.
- Read breadcrumbs in an open settings modal to confirm current position.
- Check whether a Column contains a nested Row before assuming Module ownership.
- Confirm element hierarchy before applying any responsive override.
- Treat right-panel drill-down (pencil icon) as the verified targeting method until Layers is verified.
- Label all Layers/Wireframe claims as official-doc-backed, not locally verified.
- Check for Specialty Section presence before beginning structural traversal on any page.

### Don't

- Do not randomly click through canvas overlays to locate elements.
- Do not assume flat structure inside any section until the full tree is inspected.
- Do not assume nested structures inherit correctly without tracing the ownership chain.
- Do not edit visually without confirming hierarchy first.
- Do not confuse Column-Inner vs Column ownership in nested row structures.
- Do not use Layers drag-and-drop without local verification.
- Do not rename or reorganise elements in the Layers panel without understanding that this is a destructive/permanent action.
- Do not treat Wireframe View as a confirmed local capability — button presence is verified, panel internals are not.
- Do not use the Command Center for execution actions without narrow local verification of each command type.
- Do not assume Specialty Section column types without opening the structure in Layers or Wireframe.

---

## 11. Unknowns Requiring Local Verification

| Unknown | Why It Matters |
|---------|----------------|
| Layers panel internal structure (tree layout, element labels, expand/collapse reliability) | Cannot use Layers for targeted navigation until the local tree is confirmed usable. |
| Layers panel click-to-select behaviour | Whether clicking an element in the tree opens its settings reliably. |
| Layers drag-and-drop behaviour | Whether drag-and-drop can accidentally reorganise structure without an undo step. |
| Wireframe View internal structure (block labels, element selection from blocks) | Cannot confirm Wireframe as a structural navigation aid until local panel is opened. |
| Wireframe View responsiveness handling | Whether Wireframe View respects the current breakpoint or always shows desktop structure. |
| Breadcrumb presence and reliability in the right settings panel | Official docs describe breadcrumbs; they were not directly verified in the local Builder. |
| Right-click/context menu contents and reliability | Copy/paste and element actions are described in docs but not locally confirmed. |
| Command Center access path and available commands | Keyboard shortcut or button to open; whether command list is scoped to read-only navigation actions. |
| Command Center search reliability for navigation vs execution commands | Risk that Command Center navigation also surfaces destructive commands. |
| Section type breakdown on the home page | Whether any Specialty Sections exist locally (affects traversal complexity). |
| Canvas iframe hover simulation reliability | Whether browser automation can reliably trigger canvas hover overlays inside the iframe. |
| Nested row presence on the home page | Whether the home page contains any nested rows that would require deeper traversal. |
| Undo reliability across structural navigation changes | Whether accidental drag-and-drop or selection changes can be reliably undone. |
| Layers panel parity with canvas | Whether the Layers tree exactly matches the canvas element structure. |
| Specialty section column type indicators | Whether Module Columns and Row Columns are visually distinguishable in the Builder canvas or Layers panel. |

---

## 12. Candidate Capability-Matrix Entries

**IMPORTANT:** All items below are **OFFICIAL-DOC-BACKED — NOT LOCALLY VERIFIED**. None of these should be added to the capability matrix as VERIFIED entries. They are candidates for future local verification sessions.

| Candidate Item | Official-Doc-Backed Claim | Local Verification Needed |
|----------------|---------------------------|---------------------------|
| Layers panel tree structure | Layers shows a collapsible Page → Section → Row → Column → Module tree. | Open the panel read-only; document tree labels, expand/collapse behaviour, and element count vs DOM count. |
| Layers click-to-select | Clicking an element in the Layers tree opens its settings modal. | Click one non-destructive element (e.g., a Module) and confirm the settings modal opens for the correct element. |
| Wireframe View block display | Wireframe View renders the page as labelled structural blocks rather than rendered content. | Open Wireframe View; document block labels, whether settings can be opened, and whether nested structures are visible. |
| Breadcrumbs in settings panel | The right settings panel shows a breadcrumb path from Page to the current element. | Confirm breadcrumb presence in a Module settings modal; test clicking a breadcrumb level to move up the hierarchy. |
| Command Center keyboard navigation | Command Center can open modals, switch views, and search for elements via keyboard. | Open Command Center read-only; document available commands and distinguish navigation-safe from potentially destructive commands. |
| Specialty section column types | Specialty Sections expose both Module Columns (direct modules) and Row Columns (rows inside the section column). | Determine if the home page has Specialty Sections; map the column type(s) present. |
| Nested row detection via Layers | Nested rows appear as a child Row node inside a Column node in the Layers tree. | If nested rows exist on the home page, confirm they appear as nested nodes in the Layers tree. |
| Copy style / paste style | Right-click or context menu can copy styles from one element and paste them to another element of the same type. | Verify context menu presence and confirm copy/paste is style-only (not destructive) before considering it an operator tool. |
| Copy element / paste element | Right-click or context menu can copy and paste whole elements as independent copies. | Verify behaviour locally; confirm whether paste creates a new independent copy or a global-linked copy. |
| Wireframe View element selection | Elements shown as blocks in Wireframe View are clickable to open their settings modals. | Confirm at least one Module block click opens the correct settings modal. |
| Layers rename | Element names can be changed inside the Layers panel. | Verify locally whether renaming is reversible and whether it affects any public-facing output. |
| Layers drag-and-drop reorganisation | Elements can be dragged to new positions in the Layers panel. | Verify whether undo is reliable before this can be considered an operator capability. |

---

## Stage 3 Completion Note

Stage 3 establishes structural traversal vocabulary, hierarchy awareness, Layers and Wireframe View concepts, Specialty Section structural distinctions, canvas navigation risks, and a set of structural failure patterns to watch for. It does not authorise any new Builder execution beyond what is already VERIFIED in `operator/divi-builder-capabilities.md`.

The key navigation insight from Stage 3 is that the operator must traverse hierarchy top-down, using structure-first tools (Layers, Wireframe, breadcrumbs, right-panel hierarchy) rather than relying on canvas visual appearance. This is especially critical for Specialty Sections and nested row structures, where visual inspection alone cannot reveal the full hierarchy depth.

Stage 4 should proceed with official presets and design variables docs before further LocalWP Builder testing resumes.
