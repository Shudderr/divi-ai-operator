# Stage 1 Builder Interface Summary

**Project:** Simplicity Tech Divi AI Operator
**Status:** Official-doc-backed learning summary; not locally verified execution knowledge
**Last Updated:** 2026-05-18
**Learning Plan Stage:** Stage 1 - Builder Interface Docs

---

## Source List

| Source | URL | Trust Level | Use In This Summary |
|--------|-----|-------------|---------------------|
| Divi 5 Visual Builder Interface | https://help.elegantthemes.com/en/articles/12991185-divi-5-visual-builder-interface | Official Help Center | Primary current reference for Divi 5 Builder UI areas, bars, panels, settings, and key interactions. |
| Create and Build a Page with Divi 5 from Scratch | https://help.elegantthemes.com/en/articles/12982611-create-and-build-a-page-with-divi-5-from-scratch | Official Help Center | Source for entry flow, build-from-scratch flow, section/row/column/module hierarchy, and first-page save/publish concepts. |
| Getting Started With The Divi Builder | https://www.elegantthemes.com/documentation/divi/visual-builder/ | Official Documentation | Secondary reference for established Visual Builder concepts and older toolbar terminology. |
| The Divi 5 Command Center | https://help.elegantthemes.com/en/articles/13741079-the-divi-5-command-center | Official Help Center | Source for keyboard/search-driven Builder navigation concepts. |
| Copy/Paste Elements and Elements Attributes in Divi 5 Visual Builder | https://help.elegantthemes.com/en/articles/13309833-copy-paste-elements-and-elements-attributes-in-divi-5-visual-builder | Official Help Center | Source for contextual-menu, whole-element copy/paste, and attribute copy/paste concepts. |

---

## Key Concepts

### Visual Builder Entry Points

Official docs describe two main entry concepts:

- From WordPress admin, create or edit a page, then use **Use Divi Builder** to reload the page into the front-end Visual Builder.
- From the front end, established Divi documentation also describes using the WordPress admin bar's **Enable Visual Builder** entry point.

For a new page, the Divi 5 page flow presents options such as **Build From Scratch**, **Choose a Premade Layout**, and **Build with AI**. Stage 1 should treat those as official UI concepts, not as locally verified operator routes.

### Builder Interface Layout

The current Divi 5 interface documentation describes four practical work zones:

- **Top Bar:** page tools, responsive controls, canvas width, zoom, history, undo/redo, preview, save, and exit.
- **Left Sidebar Panel:** Builder tools such as layouts, Layers View, Style Inspector, Global Variable Manager, Preset Manager, Page Manager, Command Center, Wireframe View, X-Ray, Builder Settings, Help, and light/dark mode.
- **Right Settings Panel:** settings for the selected Section, Row, Column, or Module.
- **Visual Builder Canvas:** the central front-end editing surface where the layout is viewed and edited.

Older official documentation refers to a bottom Divi toolbar in the classic Visual Builder. For Divi 5 work, prefer current Divi 5 terms from the Help Center unless the local Builder clearly exposes older terminology.

### Top Bar And View Controls

Official docs identify these top-bar concepts:

- Device preview buttons for Desktop, Tablet, and Phone, with optional extra breakpoints if enabled.
- Canvas width and zoom controls for previewing layouts at different widths without resizing the browser window.
- Undo/redo controls and a History panel.
- Save, Preview, and Exit controls.

The operator should not assume button positions, labels, or automation selectors from the docs alone. The docs establish what the UI is intended to provide; local inspection must establish what is present and reliable on the target site.

### Element Selection And Navigation

Official docs describe several selection/navigation paths:

- Click a Section, Row, Column, or Module to open its settings in the right panel.
- Use the element's gear icon when visible.
- Use breadcrumbs in the settings panel to move up the structure, for example Page -> Section -> Row -> Column -> Module.
- Use Layers View as a structural tree of Sections, Rows, Columns, and Modules.
- Use Command Center to add elements, open modals, jump to settings, switch views, and run common Builder actions.
- Use right-click/context menus for common actions such as duplicate, copy styles, paste styles, delete, and attribute actions.

For the operator, these are navigation candidates only. The last local test showed navigation confidence is still weak, so none of these should be treated as an execution route until verified locally.

### Settings Panel Behaviour

Official docs consistently describe the settings panel around three primary tabs:

- **Content:** text, images, icons, links, backgrounds, labels, and basic element content.
- **Design:** typography, sizing, spacing, colors, borders, shadows, alignment, and visual styling.
- **Advanced:** custom CSS, visibility, attributes, transitions, position, scroll effects, conditions, and other advanced controls.

The panel may also include:

- Breadcrumbs that show the selected element's location in the layout structure.
- Search for finding settings by name.
- Filters for modified fields, variable-backed fields, or color-related settings.
- Responsive and hover controls on supported fields.
- Presets and Design Variables integration.

The operator should use official terminology exactly: Section, Row, Column, Module, Content tab, Design tab, Advanced tab, settings panel, option group, field, breakpoint, hover state, preset, and Design Variable.

### Module, Section, Row, And Column Editing Concepts

Official docs describe the Divi layout hierarchy as:

```text
Section -> Row -> Column -> Module
```

Practical meaning:

- A **Section** is the large page-level grouping.
- A **Row** sits inside a Section and defines the column structure.
- A **Column** sits inside a Row.
- A **Module** is the actual content element, such as Heading, Text, Image, Button, or Blurb.

The operator should reason from large to small when locating an element and from specific to broad when assessing change impact. For example, a Module text change is narrower than a Row spacing change, which is narrower than a Section background/padding change.

### Views And Modes In Stage 1

Stage 1 sources mention these Builder views and helpers:

- **Layers View:** a tree view intended for selecting, naming, and reorganising Sections, Rows, Columns, and Modules.
- **Wireframe View:** a simplified block-style view for focusing on page structure instead of visual styling.
- **X-Ray:** a visual outline helper for seeing element boundaries and spacing.
- **Command Center View commands:** commands that can switch view modes, including breakpoints and Wireframe mode.

Wireframe and Layers have deeper Stage 3 coverage. In Stage 1, treat them only as official interface affordances and future verification targets.

### Save, Exit, Preview, Publish

Official docs distinguish related page-state actions:

- **Save** persists Builder work.
- **Preview** opens the page without the Builder interface for review.
- **Exit** leaves the Visual Builder and returns to normal page or dashboard view.
- On new pages, WordPress **Publish** or **Update** may still be part of the broader page lifecycle.
- Older official docs recommend saving manually before exiting even when auto-save/history exists.

For local operator work, save/publish/exit behaviour must be verified per environment before use. Publishing or updating anything remains restricted unless explicitly approved.

---

## Operator Implications

- Stage 1 gives the operator a stable vocabulary for Builder UI reasoning, but not execution confidence.
- The safest mental model is structure-first: Page -> Section -> Row -> Column -> Module.
- The current Divi 5 docs place major tools in the top bar, left sidebar, right settings panel, and canvas; local verification must map those concepts to actual visible controls.
- Layers View, Wireframe View, breadcrumbs, Command Center, and settings search may reduce fragile canvas clicking, but each needs a local read-only verification test.
- Right-click and copy/paste workflows can affect whole elements, attributes, content, styles, and presets; they are too broad for early automation unless narrowly verified.
- Settings panel search and breadcrumbs may be better operator targets than visually hunting through long option groups, but this remains official-doc-backed only.
- Save, Preview, Exit, Publish, and Update are separate concepts. The operator must not collapse them into one "done" action.
- Divi 5 docs may not match a local page in Backwards Compatibility Mode, older Builder modes, custom user preferences, disabled breakpoints, or site-specific settings.

---

## Do / Don't Rules

### Do

- Use official Divi terms consistently: Section, Row, Column, Module, Content, Design, Advanced, Layers View, Wireframe View, Command Center, settings panel.
- Start Builder reasoning from the layout hierarchy before discussing visual fixes.
- Treat top bar, left sidebar, right settings panel, and canvas as separate interface zones.
- Label this knowledge as **official-doc-backed, not locally verified** when referring to execution.
- Prefer read-only verification targets when planning future LocalWP tests.
- Keep Stage 1 summaries concise and task-oriented.

### Don't

- Do not edit LocalWP based on this summary.
- Do not run browser automation to prove any Stage 1 claim.
- Do not modify CASE-001 from this learning pass.
- Do not mark any Stage 1 item as VERIFIED in `operator/divi-builder-capabilities.md`.
- Do not assume Command Center, Layers View, Wireframe View, breadcrumbs, or right-click menus are reliable automation targets.
- Do not use copy/paste, duplicate, delete, preset, Publish, or Update actions without explicit approval and local verification.
- Do not treat older toolbar terminology as current Divi 5 UI truth unless local inspection confirms it.

---

## Unknowns Needing Local Verification

- Which Visual Builder entry point is safest for the current LocalWP site: admin Pages list, front-end admin bar, or another route.
- Whether the local Builder UI matches the current Divi 5 docs or exposes older/backwards-compatibility affordances.
- Exact top-bar control labels, positions, and safe selectors for Save, Preview, Exit, history, undo, redo, device buttons, canvas width, and zoom.
- Whether clicking the canvas reliably opens the intended element settings, especially in dense layouts.
- Whether breadcrumbs in the right settings panel are present and reliable for moving up Page -> Section -> Row -> Column -> Module.
- Whether Layers View provides a navigable structural tree suitable for operator targeting.
- Whether Wireframe View exposes enough structure to select and inspect elements safely.
- Whether Command Center can be used read-only for navigation/search without accidentally executing edit actions.
- Whether settings search and filters are present and reliable in the local settings panel.
- Whether right-click/context menu actions are available, where they appear, and which options are dangerous.
- Whether Save, Preview, Exit, Publish, and Update behave as documented in the LocalWP environment.

---

## Candidate Capability-Matrix Items

The following are **official-doc-backed, not locally verified**. They are candidates for later capability-matrix mapping only after a narrow local verification session.

| Candidate Item | Official-Doc-Backed Claim | Local Verification Needed |
|----------------|---------------------------|---------------------------|
| Divi 5 interface zones | Visual Builder is organised around top bar, left sidebar, right settings panel, and canvas. | Confirm the local Builder exposes these zones and record selectors/labels. |
| Settings panel tabs | Section, Row, Column, and Module settings use Content, Design, and Advanced tabs. | Confirm across common local element types beyond the previously inspected Heading/Page Settings cases. |
| Breadcrumb navigation | Settings panel breadcrumbs can move up the layout structure. | Confirm breadcrumb presence, labels, and click behaviour locally. |
| Layers View navigation | Layers View shows a tree of Sections, Rows, Columns, and Modules. | Open read-only and document the local tree structure and targeting reliability. |
| Wireframe View | Wireframe View shows simplified labelled structure blocks. | Open read-only and document what blocks appear and whether settings can be opened safely. |
| Command Center | Command Center can add elements, open modals, jump to settings, and switch views. | Verify read-only navigation/search use before any command execution. |
| Settings search and filters | The settings panel supports search and filters for locating options. | Confirm presence, reliability, and non-destructive use locally. |
| Top bar device/canvas controls | Top bar supports breakpoint previews, canvas width, zoom, history, undo/redo, save, preview, and exit. | Confirm actual controls, labels, enabled states, and safe read-only interactions. |
| Context menu actions | Right-click/triple-dot menus expose copy/paste, duplicate, delete, and attribute actions. | Verify menu contents locally and mark destructive/broad actions restricted. |
| Save/Preview/Exit lifecycle | Save, Preview, Exit, Publish, and Update are distinct page-state actions. | Confirm local save/exit flow before any future edit test. |

---

## Stage 1 Completion Note

Stage 1 establishes interface vocabulary and a set of local verification targets. It does not authorise Builder execution. Stage 2 should proceed with official responsive system docs before further LocalWP Builder testing resumes.
