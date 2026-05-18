# Divi Builder Capability Matrix

**Project:** Simplicity Tech Divi AI Operator  
**Site:** sampleproblem-pages.local (WP 6.9.4 · Divi 5.5.2 · Backwards Compatibility Mode)  
**Status:** Active operational reference  
**Last Updated:** 2026-05-18 (layers-view-001 verification session)

---

## Purpose

This document is the canonical reference for what the operator has **directly verified** about interacting with the Divi Visual Builder safely. It separates verified knowledge from assumed knowledge from unknown territory.

The operator must not treat assumptions or inferences as operational truth. When a capability is listed as UNKNOWN, it must be verified before being used as a basis for execution.

Official Elegant Themes / Divi documentation can ground terminology and expected feature behaviour, but it does not prove the operator can execute the action safely in the local Builder. Official-doc-backed knowledge must remain separate from locally VERIFIED execution knowledge.

---

## Reading This Document

Each entry is tagged with one of these status labels:

| Label | Meaning |
|-------|---------|
| **VERIFIED** | Directly observed during a live browser session. Includes date and method. |
| **OFFICIAL-DOC-BACKED** | Supported by official Elegant Themes / Divi documentation, but not yet locally verified as an execution capability. Must not be treated as operational truth. |
| **ASSUMED** | Plausible inference from general Divi knowledge — not directly confirmed on this site. Must not be treated as operational truth. |
| **UNKNOWN** | Not yet checked. Requires explicit verification before operational use. |

Use `resources/external-sources/elegant-themes-index.md` and `resources/external-sources/divi-5-builder-learning-plan.md` to build official-doc-backed understanding before future LocalWP execution tests.

---

## 1. Verified Interactions

### 1.1 Module Settings Tab Structure

**Status:** VERIFIED — 2026-05-18 (live DOM inspection, home page Heading module)

The Divi element settings modal presents three top-level tabs:

| Tab | Purpose |
|-----|---------|
| Content | Text, images, links, sub-items, background, loop, meta |
| Design | Colors, typography, spacing, borders, shadows, sizing |
| Advanced | CSS ID, CSS classes, custom CSS per sub-element, animations, visibility |

**Verified Content tab groups (Heading module):** Text, Link, Elements, Background, Loop, Meta.

**Verified Design tab groups (Heading module):** Layout, Text, Heading Text, Sizing, Spacing, Border, Box Shadow, Filters, Transform, Animation.

**Verified Advanced tab groups (Heading module):** Attributes, CSS, HTML, Conditions, Interactions, Visibility, Transitions, Position, Scroll Effects.

**Also verified for:** Page Settings modal — same three-tab structure confirmed.

**Caveats:**
- Group names were verified for Heading module and Page Settings only. Other module types (Text, Button, Blurb, etc.) may expose different group names within the same tab structure.
- Tab structure itself (Content / Design / Advanced) is expected to be consistent across module types, but was only directly confirmed for Heading and Page Settings.

---

### 1.2 Right-Panel Hierarchy Navigation

**Status:** VERIFIED — 2026-05-18 (live browser session, home page hero section)

The most reliable way to target a specific element in the Visual Builder is the right-panel element tree:

```
Section → Row → Column → Module
```

At each level, click the **pencil icon** to drill into that element's settings modal.

**Verified path used:** Hero section → 4-column row → "Rent A Home" Heading module.

**Caveats:**
- Clicking canvas overlays directly tends to select the wrong element level. The right-panel drill-down is the preferred targeting method.
- The canvas hover/click interaction path was NOT directly verified during the 2026-05-18 session.

---

### 1.3 Responsive Field Controls (Per-Field Breakpoint Toggle)

**Status:** VERIFIED — 2026-05-18 (Heading module, Design tab, Spacing group, Margin field)

Hovering over a field row inside the Spacing group reveals three inline icons beside the field label:

| Icon | Function |
|------|---------|
| ⓘ (info) | Field information/tooltip |
| Breakpoint toggle | Per-field responsive override — switches the field value between Desktop / Tablet / Phone |
| ⋮ (overflow menu) | Additional field options |

The breakpoint toggle is a **per-field control**, not a global toggle.

**Caveats:**
- This was verified specifically for the Margin row in the Spacing group of the Heading module Design tab.
- Other field types (padding, font size, etc.) are expected to have the same pattern, but were not individually confirmed.
- The toggle is only visible on hover — not statically visible.

---

### 1.4 Builder Bar Buttons

**Status:** VERIFIED — 2026-05-18 (DOM inspection of live Visual Builder)

Two structural navigation buttons were confirmed present in the Builder Bar:

| Button | CSS class | Purpose |
|--------|-----------|---------|
| Layers | `et-vb-builder-bar-button--divi-layers` | Structural tree panel |
| Wireframe View | `et-vb-builder-bar-button--divi-wireframe-view` | Block-diagram structural view |

**Caveats:**
- Button presence was confirmed during initial discovery.
- Layers panel behaviour was partially observed in a later read-only verification session; see Section 1.10 and Section 3.4.
- Wireframe View panel internals remain UNKNOWN.
- Do not treat Layers targeting or Wireframe View panel internals as verified.

---

### 1.5 Page Bar Controls

**Status:** VERIFIED — 2026-05-18 (DOM inspection of live Visual Builder)

| Control | Location | Verified |
|---------|----------|---------|
| Exit | Top-left of Page Bar | Yes — button confirmed present |
| Save | Top-right of Page Bar | Yes — button confirmed present, label verified |
| Save Dropdown | Adjacent to Save button | Button confirmed present — sub-options NOT opened |
| Responsive controls | Centre-top of Page Bar | Three breakpoint buttons confirmed |

**Caveats:**
- Save Dropdown sub-options are unknown. Do not use the Save Dropdown without knowing what it contains.
- The Page Menu (top-left area, distinct from Exit) was referenced during session — Advanced tab confirmed present inside Page Settings modal. Page Menu label/button itself not separately confirmed in DOM.

---

### 1.6 Responsive Breakpoint Buttons

**Status:** VERIFIED — 2026-05-18 (DOM inspection)

Three breakpoint buttons confirmed present in the centre-top Page Bar:

| Button | CSS class suffix |
|--------|-----------------|
| Desktop | `--desktop` |
| Tablet | `--tablet` |
| Phone | `--phone` |

A **custom width input** field was present and showed `1580px` on Desktop. A **zoom input** field was also present and showed `100%`.

**Caveats:**
- Canvas widths at Tablet and Phone breakpoints were NOT observed during the 2026-05-18 session.
- Per-field responsive controls (see §1.3) operate independently from these global breakpoint buttons.

---

### 1.7 Page Canvas Structure

**Status:** VERIFIED — 2026-05-18 (DOM query against live canvas)

| Property | Value |
|----------|-------|
| Canvas iframe ID | `et-vb-app-frame` |
| Sections on home page | 9 |
| Rows on home page | 15 |
| Desktop canvas width | 1580px (read from width input) |

**Verified module types present on home page** (via `et_pb_*` CSS classes):

Heading, Icon, Text, Number Counter, Image, Button, Blurb, Accordion.

**Caveats:**
- Section type breakdown (Regular / Fullwidth / Specialty) was NOT determined during discovery.
- Module count per section was not inventoried.

---

### 1.8 Canvas Iframe Separation

**Status:** VERIFIED - 2026-05-18 (read-only browser verification session)

Canvas page content lives inside iframe `#et-vb-app-frame`.

Operational implications:

- Querying the parent Visual Builder DOM is not sufficient for canvas content.
- Canvas selectors must be run inside the iframe context.
- Parent Builder UI state and canvas iframe state must be treated as separate UI surfaces.

**Caveats:**
- This verifies iframe separation only. It does not verify that any specific canvas hover, select, insert, or edit control is reliable.

---

### 1.9 Hover-Injected Canvas Controls

**Status:** VERIFIED - 2026-05-18 (read-only browser verification session)

Canvas hover controls may not exist in the DOM while the canvas is at rest. Hover/mouseover can dynamically inject controls after interaction.

Operational implications:

- DOM queries before hover can falsely report missing controls.
- Browser automation must distinguish DOM-at-rest from DOM-after-interaction.
- Hover-dependent controls require: hover or mouseover, wait, verify visible control state, then re-query.

**Caveats:**
- This verifies the injection pattern, not reliable editing through those controls.
- Canvas hover-to-select remains restricted by the reliability caveat in Section 3.1.

---

### 1.10 Layers Panel — Full Targeting Reliability

**Status:** VERIFIED — 2026-05-18 (layers-view-001 dedicated verification session)

The Layers panel is reliable as a primary structure-first traversal method. All 8 verification questions from the layers-view-001 session returned VERIFIED.

#### Opening Layers

Click the button with class `.et-vb-builder-bar-button--divi-layers` via JS (the button does not appear in the a11y snapshot). Wait for "Search Layout", "Open All", and section names to appear before proceeding.

#### "Open All" Expansion

Clicking "Open All" expands the entire tree to leaf level in one operation. The button label changes to "Close All" immediately when expansion completes. In the layers-view-001 session this was synchronous. A prior session (vs-001) showed asynchronous behaviour. Always apply wait/re-query after clicking "Open All" and verify "Close All" appears and child elements are present before targeting anything.

#### Section Expand/Collapse — Two-Button Targeting Rule

Each section row in Layers has two distinct click targets:

| Target | Label | Effect |
|--------|-------|--------|
| Outer section row button | "Collapse [Name]" or "Expand [Name]" | Opens section settings panel — does NOT toggle expand/collapse |
| Inner toggle sub-button (child of the row) | "Collapse" or "Expand" | Toggles tree expand/collapse |

**Rule for browser automation:** To collapse or expand a section tree node, target the **inner** "Collapse"/"Expand" sub-button. Targeting the outer row button opens the section settings panel instead.

#### Module Selection from Layers

Clicking a Module-level button in the Layers tree (e.g., "Heading", "Icon", "Button") opens the correct settings panel for that module. Canvas auto-scrolls to the selected element.

State verification: wait for the settings panel heading to change from the previous element type to the newly selected module type before reading panel state.

#### Layers Expansion State Indicators

| Layers state | Outer button label | Child nodes in snapshot |
|-------------|-------------------|------------------------|
| Section collapsed | "Expand [Name]" | None |
| Section expanded | "Collapse [Name]" | Row, Column, Module nodes visible |
| Full tree collapsed | "Open All" | Sections only |
| Full tree expanded | "Close All" | All sections, rows, columns, modules |

**Caveats:**
- "Open All" may be asynchronous under some load conditions (prior session observation). Always wait and verify.
- The outer section-row button opening settings instead of toggling collapse is non-obvious — it is an intentional dual-click-target design.
- The builder bar Layers button is not in the a11y snapshot; it must be targeted via JS querySelector.

---

### 1.11 Layers Panel — Element Type Labels

**Status:** VERIFIED — 2026-05-18 (layers-view-001 verification session)

The Layers tree uses distinct labels for all Divi hierarchy levels. After "Open All" expansion on the home page:

| Element Type | Layers label | Example in tree |
|---|---|---|
| Section (Regular) | "Collapse [Name]" / "Expand [Name]" | "Collapse Header" |
| Specialty Section | Same label as Regular — identified structurally | "Collapse Stats" — no Row node under it |
| Row | "Collapse Row" | Under Header, Listings, etc. |
| Column | "Collapse Column" | Under Row |
| Row-Inner (nested row) | "Collapse Inner Row" | Under Column in Stats Specialty Section |
| Column-Inner | "Collapse Inner Column" | Under Inner Row |
| Module | Module type name only | "Heading", "Icon", "Text", "Button", "Blurb", "Image", "Person", "Number Counter", "Accordion", "Slider" |
| Accordion Item | "Accordion Item" | Child of Collapse Accordion |
| Slider Slide | Slide text content | Child of Collapse Slider |

**Specialty Section identification rule:** In Layers, a Specialty Section is identified by the presence of "Collapse Column" directly under the section node — with no "Collapse Row" intermediary. There is no badge or special icon marking the section type in the section-level label itself.

**Caveats:**
- Regular sections and Specialty sections have the same section-row label format. Only the child structure reveals the type.
- "Open All" must complete before child structure is visible.

---

### 1.12 Breadcrumbs in Settings Panel

**Status:** VERIFIED — 2026-05-18 (layers-view-001 verification session)

When an element is selected (via Layers or other method) and its settings panel is open, the top of the settings panel shows a breadcrumb trail:

```
Page → Section → [Row →] Column → Module
```

Each breadcrumb level is a clickable button. Clicking a breadcrumb level navigates up the hierarchy and opens that parent's settings panel.

**Verified breadcrumb for:** Heading module in Stats Specialty Section:
```
Page → Section → Column → Heading
```
The absence of "Row" in this breadcrumb confirms the Module Column / Specialty Section structure.

**Operational use:** After selecting an element, read the breadcrumb to confirm the full parent chain before making any edits.

**Caveats:**
- Only verified for a Heading module inside a Specialty Section's Module Column. Breadcrumb for elements inside Regular Section Row → Column structures not separately verified in this session (but expected to show Row in the chain).
- Clicking breadcrumb levels to navigate up was not tested as an edit path — read-only only.

---

### 1.13 Specialty Section Confirmed on Home Page

**Status:** VERIFIED — 2026-05-18 (layers-view-001 verification session)

The **Stats section** on the home page is a Specialty Section. Confirmed via Layers tree structure and breadcrumb.

Specialty Section structure (Stats):
```
Stats [Specialty Section]
├── Column [Module Column]
│   └── Heading
└── Column [Row Column]
    ├── Inner Row
    │   └── Inner Column → Text
    └── Inner Row
        ├── Inner Column → Number Counter
        ├── Inner Column → Number Counter
        └── Inner Column → Number Counter
```

This resolves capability matrix §3.6 (Section Type Breakdown Unknown).

**Full home page section type breakdown (now verified):**

| Section | Type |
|---|---|
| Header | Regular |
| Stats | Specialty |
| Listings | Regular |
| Categories | Regular |
| Features | Regular |
| About | Regular |
| Team | Regular |
| Testimonials | Regular |
| Footer | Regular |

---

### 1.14 Multi-Panel Coexistence

**Status:** VERIFIED - 2026-05-18 (read-only browser verification session)

Multiple Builder panels can coexist, including Layers plus a Section settings panel.

Operational implications:

- Browser automation must identify which panel is active before acting.
- Do not assume that opening one panel closed another.
- Click targets must be scoped to the intended panel or iframe context.

**Caveats:**
- Which panel combinations are possible beyond Layers plus Section settings remains UNKNOWN.

---

### 1.12 Entry Path to Visual Builder

**Status:** VERIFIED — 2026-05-18

Reliable entry path:

1. WP Admin → Pages → `edit.php?post_type=page`
2. Row action: **Edit With Divi** (not "Edit")

The "Edit" row action opens the WP block editor, which only shows a placeholder and does not open the Visual Builder.

The "Edit With Divi" link contains a nonce and **expires** — always generate a fresh link from the Pages list or from the front-end admin bar while logged in.

**Caveats:**
- Front-end admin bar also has "Edit With Divi" — confirmed present, but full nonce behaviour was not tested.

---

### 1.13 Divi Mode

**Status:** VERIFIED — 2026-05-18

The `home` page uses **Divi 4 shortcodes** in Backwards Compatibility Mode. The front-end admin bar shows "Backwards Compatibility Mode Enabled" in orange.

The Divi 5 Migrator (`admin.php?page=et_d5_readiness`) has NOT been run. Running it is irreversible without a database backup restore. **Explicit approval required before running.**

---

## 2. Verified Safe Workflows

### 2.1 Browser-First Inspection Workflow

**Status:** VERIFIED as safe operational path — 2026-05-18

1. Open WP Admin → Pages → Edit With Divi (fresh link).
2. Use the right-panel hierarchy (§1.2) to locate the target element.
3. Open the element settings modal.
4. Navigate Content → Design → Advanced tabs to inspect current values.
5. Do not make changes during an inspection pass.
6. Exit the builder without saving to leave the page unchanged.

---

### 2.2 Setting-First Implementation Workflow

**Status:** VERIFIED as required execution order

Do not reach for CSS or database changes until the Builder control path has been checked. Follow this order:

1. Open the element settings modal via right-panel hierarchy.
2. Check the **Design** tab for the relevant control (spacing, typography, color, etc.).
3. Check the **Advanced** tab for CSS class / custom CSS fields if Design controls are insufficient.
4. Only if Builder controls are genuinely insufficient: document the gap and seek approval before writing CSS.

See `operator/safety-rules.md` — Implementation Execution Order.

---

### 2.3 Responsive Override Workflow

**Status:** VERIFIED pattern — controls confirmed present 2026-05-18

1. Apply the base (Desktop) value first using the relevant Design tab field.
2. Use the per-field breakpoint toggle (hover → ⓘ / toggle / ⋮ icons) to switch to Tablet.
3. Apply the Tablet override value.
4. Switch to Phone and apply the Phone override value.
5. Verify each breakpoint visually using the Page Bar responsive buttons.

**Caveats:**
- Tablet and Phone canvas widths were not recorded during the 2026-05-18 session.
- Horizontal overflow must be checked at Phone width.

---

### 2.4 Save and Exit Workflow

**Status:** VERIFIED controls — 2026-05-18

1. Click **Save** (top-right Page Bar) when confident the change is correct.
2. Do not use the **Save Dropdown** until its sub-options are known.
3. Click **Exit** (top-left Page Bar) to leave the builder.
4. Navigate to `http://sampleproblem-pages.local/home/` to verify the front-end result.

---

### 2.5 LocalWP-Only Testing Protocol

**Status:** Required constraint — environment verified 2026-05-18

All changes on this project must be made against `sampleproblem-pages.local` (local environment) unless explicitly stated otherwise.

- No staging environment has been configured.
- No production URL is in scope.
- Default: all automation and inspection is read-only unless a specific edit is approved.

---

### 2.6 State-Aware Browser Automation Flow

**Status:** VERIFIED as required execution order - 2026-05-18

Every browser automation step against Divi must follow:

1. Act.
2. Wait.
3. Verify state changed.
4. Re-query UI.
5. Continue or stop.

Do not treat click success as task success.

This applies especially to Layers expansion, panel switching, iframe canvas inspection, hover-injected controls, responsive breakpoint switching, and settings modal navigation.

---

## 3. Verified Limitations

### 3.1 Canvas Overlay Selection Is Unreliable

**Status:** VERIFIED — 2026-05-18

Clicking canvas overlays directly tends to select the wrong element level. The right-panel hierarchy drill-down (§1.2) is the preferred and verified targeting method.

---

### 3.2 Hover-Dependent Controls

**Status:** VERIFIED — 2026-05-18

The per-field responsive breakpoint toggle (§1.3) is only visible on hover. Controls that depend on hover state cannot be reliably targeted by automation tools that do not simulate hover.

The same state-aware rule now applies to canvas hover controls verified during the read-only browser session: controls may be absent from DOM-at-rest and injected only after hover/mouseover.

---

### 3.3 Save Dropdown Sub-Options Are Unknown

**Status:** UNKNOWN — not opened during 2026-05-18 session

The Save Dropdown button exists adjacent to the Save button. Its sub-options were not opened. It must not be used until its options are verified.

---

### 3.4 Layers Section-Row Click Opens Settings — Not Collapse Toggle

**Status:** VERIFIED behaviour — 2026-05-18 (layers-view-001 verification session)

The outer section-row button in Layers (labeled "Collapse [Name]" or "Expand [Name]") does NOT toggle the tree expand/collapse state when clicked. It opens the section's settings panel.

To toggle a section's expand/collapse state, the inner "Collapse"/"Expand" sub-button (child of the section row) must be targeted specifically.

This is a non-obvious dual-click-target design. Browser automation that targets the outer section button intending to collapse will instead open the settings panel.

**Rule:** Always target the inner toggle sub-button for tree navigation. Use the outer button only when the intent is to open section settings.

---

### 3.5 Backwards Compatibility Mode Constraints

**Status:** VERIFIED — 2026-05-18

The `home` page uses Divi 4 shortcodes. Divi 5 features that are not available in backwards compatibility mode may behave differently or be absent. Any capability documented in Divi 5 KB articles may not apply directly until the Divi 5 Migrator has been run (which requires explicit approval).

---

### 3.6 Specialty Section Column-Inner Controls — Partially Verified

**Status:** PARTIALLY VERIFIED — 2026-05-18 (layers-view-001 verification session)

Section type breakdown on the home page is now fully verified via Layers View (see §1.13). The Stats section is a Specialty Section containing both Module Columns (direct module holders) and Row Columns (containing Inner Rows and Inner Columns).

The Layers tree exposes Inner Row and Inner Column nodes as distinctly labeled elements. Their settings panels have not been opened in a read-only session; it is expected that they expose Row-level and Column-level settings respectively, but this has not been confirmed locally.

**Remaining unknown:** Whether Inner Row and Inner Column settings panels expose the same controls as top-level Row and Column settings (e.g., spacing, sizing). This requires a separate verification pass.

---

### 3.7 Tablet and Phone Canvas Widths Not Recorded

**Status:** UNKNOWN for this site

Desktop canvas width was confirmed as 1580px. Tablet and Phone widths were not observed during the 2026-05-18 session.

---

## 4. Restricted Actions

The following actions are restricted by default and require explicit approval before execution. They are not valid fallback shortcuts.

| Action | Restriction Level | Notes |
|--------|------------------|-------|
| Direct database mutation (mysql2, wp-cli, scripts) | Prohibited without explicit per-task approval | Prior incident — see `operator/memory.md` |
| Editing WordPress database tables (wp_posts, wp_postmeta, wp_options) | Prohibited without explicit approval | Even in local environments |
| Running the Divi 5 Migrator | Requires explicit approval | Irreversible without DB restore |
| Editing Theme Builder templates | Requires explicit approval | Affects every page site-wide |
| Modifying global presets or design variables | Requires explicit approval | Site-wide scope |
| Editing theme PHP files | Requires explicit approval | Includes via Theme File Editor |
| Adding or modifying JavaScript | Requires explicit approval | Any location |
| Modifying Divi Theme Options and clicking Save | Requires explicit approval | Site-wide scope |
| Publishing automatically | Prohibited | All environments |
| Making production edits | Prohibited without explicit approval | Production environment not in scope for this site |
| Deleting sections, rows, modules, pages, or templates | Requires explicit approval | Destructive |
| Overwriting Theme Builder templates | Requires explicit approval | Site-wide impact |
| Installing, updating, or deleting plugins or themes | Requires explicit approval | |
| Using the WordPress Customizer to publish changes | Not verified as safe — do not use | Publish behaviour not confirmed |
| Using the Save Dropdown | Do not use until sub-options verified | Unknown behaviour |

These restrictions exist regardless of whether the target environment is local, staging, or production.

---

## 5. Unknown / Needs Verification

The following capabilities have not been verified and must not be treated as operational knowledge until confirmed with a live session and a date stamp.

**Resolved in layers-view-001 session (2026-05-18):** Layers panel full targeting reliability, Layers expansion timing and selectors, Specialty section column types on home page, breadcrumbs in settings panel. These are now VERIFIED — see §1.10, §1.11, §1.12, §1.13.

| Capability | Why It Matters |
|------------|---------------|
| Canvas hover-to-select interaction | Hover-injected controls are verified, but reliable target selection/editing is not |
| Wireframe View internal structure | Whether Wireframe View is useful for structural inspection |
| Save Dropdown sub-options | What options exist and whether any are safe to use |
| Tablet canvas width | What responsive canvas width Divi uses at Tablet breakpoint |
| Phone canvas width | What responsive canvas width Divi uses at Phone breakpoint |
| Inner Row / Inner Column settings panel controls | Whether settings panels for Row-Inner and Column-Inner expose the same controls as top-level Row/Column |
| Responsive controls for non-spacing fields | Whether the per-field hover toggle exists for fields beyond Spacing/Margin |
| Module settings consistency across module types | Whether Content/Design/Advanced group names match for Text, Button, Blurb, Image, Person, Slider, etc. |
| Undo / history workflow | Whether Divi Builder has a reliable undo path and how many steps it supports |
| Codex/browser automation interaction reliability | Which UI affordances Playwright or Codex can reliably interact with via automation |
| Additional multi-panel combinations | Which panel combinations can coexist beyond the observed cases |
| Global section / global module behaviour | Visual indicators and sync behaviour (Divi Library currently empty — no globals to test) |
| Divi 5 Migrator outcome | What the page structure looks like after migration from Divi 4 to Divi 5 format |
| Front-end admin bar "Edit With Divi" nonce expiry | How long the nonce stays valid |
| Section duplication workflow | What UI controls exist and whether duplication is reliable |
| Divi portability (import/export) | What is exposed in the builder for per-page or per-section export |
| Breadcrumb level click — navigate up hierarchy | Clicking a breadcrumb level to navigate to parent settings was not tested in read-only sessions |

---

## 6. Future Verification Targets

The following should be verified during dedicated live browser sessions. Each verified item should be moved to §1 (Verified Interactions) with a date and method.

**Completed in layers-view-001 session (2026-05-18):** Layers panel targeting reliability, element type labels, Specialty Section identification, breadcrumbs, canvas auto-scroll, Inner Row/Inner Column label visibility.

### High Priority

- **Canvas element selection** — verify whether hover-to-select is reliable or always requires right-panel targeting.
- **Wireframe View contents** — open the panel and document what structural blocks are shown.
- **Tablet and Phone canvas widths** — record the actual pixel values from the width input field.
- **Save Dropdown sub-options** — open and document all options before any are used.
- **Inner Row / Inner Column settings panels** — open settings for an Inner Row and Inner Column in the Stats Specialty Section; confirm which controls are exposed.

### Medium Priority

- **Undo/history workflow** — determine how many undo steps are available and whether they are reliable.
- **Section duplication** — verify the UI controls and whether the duplicated section is an independent copy.
- **Responsive controls on non-spacing fields** — confirm that the hover toggle exists for font size, padding, and other common Design fields.
- **Module settings for Text, Button, Blurb, Person, Slider modules** — verify Content/Design/Advanced group names for commonly used module types beyond Heading.
- **Breadcrumb click navigation** — click a breadcrumb level (e.g., "Section") to navigate up and confirm the parent settings panel opens correctly.

### Lower Priority

- **Divi Library save workflow** — verify how to save a section/row/module to the library and whether it becomes globally editable.
- **Preset editing workflow** — verify what presets exist and how they are edited (currently no presets confirmed).
- **Global variable editing** — verify global variable panel location and whether changes propagate as expected.
- **Theme Builder interaction** — document the UI affordances (currently no templates configured).
- **Responsive preview switching during editing** — confirm that switching breakpoints mid-edit preserves unsaved changes.
- **Divi portability export for a section** — verify right-click or toolbar options for per-section export.

---

## Cross-References

| Document | Relationship |
|----------|-------------|
| [operator/safety-rules.md](operator/safety-rules.md) | Authoritative list of never-without-approval actions and implementation execution order |
| [operator/browser-automation.md](operator/browser-automation.md) | Governs when and how browser automation tools may be used |
| [operator/wp-divi-ui-map.md](operator/wp-divi-ui-map.md) | Live-verified map of WordPress admin and Divi UI locations |
| [CLAUDE.md](CLAUDE.md) | WordPress + Divi operator workflow with verified discovery findings |
| [cases/spacing-and-padding/case.md](cases/spacing-and-padding/case.md) | Canonical example of operator reasoning against a real layout issue |
