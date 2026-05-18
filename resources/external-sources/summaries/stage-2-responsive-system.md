# Stage 2 Responsive System Summary

**Project:** Simplicity Tech Divi AI Operator
**Status:** Official-doc-backed learning summary; not locally verified execution knowledge
**Last Updated:** 2026-05-18
**Learning Plan Stage:** Stage 2 - Responsive System Docs

---

## 1. Source List

| Source | URL | Trust Level | Use In This Summary |
|--------|-----|-------------|---------------------|
| Responsive Editor in Divi 5 Visual Builder | https://help.elegantthemes.com/en/articles/13002269-responsive-editor-in-divi-5-visual-builder | Official Help Center | Primary source for Responsive Editor panel behaviour, inheritance, override indicators, and reset workflow. |
| Responsive Editor in Divi 5 | https://help.elegantthemes.com/en/articles/12105366-responsive-editor-in-divi-5 | Official Help Center | Compact source for Responsive Editor use cases, device/hover/sticky states, blue override icon, and Modified Settings filter. |
| Divi 5 Customizable Breakpoints | https://help.elegantthemes.com/en/articles/10511806-divi-5-customizable-breakpoints | Official Help Center | Primary source for seven breakpoints, default enabled devices, Sitewide Responsive Breakpoints modal, and min-width behaviour. |
| Customize the Divi 5's Default Breakpoints | https://help.elegantthemes.com/en/articles/13001900-customize-the-divi-5-s-default-breakpoints | Official Help Center | Source for breakpoint ranges, Desktop as base layer, min/max media-query behaviour, and breakpoint switching. |
| How Responsive Options Work in Divi 5 | https://help.elegantthemes.com/en/articles/10454950-how-responsive-options-work-in-divi-5 | Official Help Center | Source for device-first editing and the difference from Divi 4 responsive controls. |
| How Visibility Settings Work in Divi 5 | https://help.elegantthemes.com/en/articles/13722487-how-visibility-settings-work-in-divi-5 | Official Help Center | Source for Disable On controls, overflow controls, and visibility behaviour by breakpoint. |
| Advanced Units, CSS Functions, and Variables For Divi 5 | https://help.elegantthemes.com/en/articles/10823890-advanced-units-css-functions-and-variables-for-divi-5 | Official Help Center | Source for Unit Picker, `calc()`, `clamp()`, viewport units, keywords, and numeric field behaviour. |
| Variable Generator in Divi 5 | https://help.elegantthemes.com/en/articles/14851749-variable-generator-in-divi-5 | Official Help Center | Source for fluid sizing scales, fixed responsive scales, spacing/gap/width token families, and responsive variables. |
| Nested Rows in Divi 5 | https://help.elegantthemes.com/en/articles/11009228-nested-rows-in-divi-5 | Official Help Center | Source for nested row limits, inherited responsive column behaviour, nested path breadcrumbs, and default width/max-width values. |
| The Divi Specialty Section (Divi 5) | https://help.elegantthemes.com/en/articles/10374149-the-divi-specialty-section-divi-5 | Official Help Center | Source for specialty section structure, module columns, row columns, sizing, spacing, and visibility controls. |
| The Row in Divi 5 | https://help.elegantthemes.com/en/articles/10316106-the-divi-row-divi-5 | Official Help Center | Source for row column structure, sizing, spacing, layout, order, and row visibility controls. |
| How to Customize the Width of Divi Columns | https://help.elegantthemes.com/en/articles/8570473-how-to-customize-the-width-of-divi-columns | Official Help Center | Source for gutter values and column-width math risks. Older/non-Divi-5-specific, so use cautiously. |
| Using the Divi Responsive Preview System | https://www.elegantthemes.com/documentation/divi/responsive-preview-system/ | Official Documentation | Secondary source for preview modes, custom preview widths, drag resizing, device presets, and orientation preview concepts. |
| Divi 5 Update Status | https://help.elegantthemes.com/en/articles/9973580-divi-5-update-status | Official Help Center | Secondary source for noting that responsive columns, gutters, nested rows, and specialty sections have had Divi 5 fixes and should be locally verified. |

---

## 2. Key Responsive Concepts

Divi 5 treats responsive editing as a first-class Builder workflow, not a separate manual mode that must be enabled for each field.

Official docs describe two related editing approaches:

- **Device-first editing:** choose a device or breakpoint first, then edits made through the settings panel apply to that selected device range.
- **Responsive Editor panel:** open the responsive icon beside a specific setting and edit all enabled breakpoint rows for that setting in one panel.

The Responsive Editor is field-specific. It is used for settings such as text size, padding, margin, background, and other responsive-capable values. It can also show related states such as hover or sticky when those states are supported.

Responsive values inherit until overridden. Desktop is usually the main/base value. Other breakpoints inherit unless they receive their own value. A blue Responsive Editor icon indicates that alternate device/state values exist for that setting.

The operator should treat each responsive problem as a combination of:

- selected breakpoint,
- responsive field value,
- inherited or overridden state,
- preview width,
- layout structure,
- visibility/overflow settings,
- and any sizing units used.

---

## 3. Breakpoint Behaviour

Official docs describe seven possible Divi 5 breakpoints:

| Breakpoint | Default State | Notes |
|------------|---------------|-------|
| Phone | Enabled | Smallest screens by default. Width can be adjusted. |
| Phone Wide | Disabled | Optional for large phones. |
| Tablet | Enabled | Mid-range screens by default. Width can be adjusted. |
| Tablet Wide | Disabled | Optional for landscape/wider tablets. |
| Desktop | Enabled | Always enabled. Cannot be disabled or edited. Acts as the base layer. |
| Widescreen | Disabled | Optional for large monitors. |
| Ultra Wide | Disabled | Optional for very large monitors. |

Breakpoint settings are sitewide. The Sitewide Responsive Breakpoints modal controls which breakpoints are enabled and what widths they use. Those settings then appear wherever device icons are shown in the Builder, including the top bar and element settings panel.

Official docs describe this implementation model:

- Phone, Phone Wide, Tablet, and Tablet Wide use a min-width style system.
- Widescreen and Ultra Wide use max-width rules.
- Desktop acts as the base layer between the smaller and larger ranges and does not use its own media query.
- Breakpoint widths must stay in logical order relative to neighboring breakpoints.
- Disabling a breakpoint stores its styles rather than deleting them; re-enabling can restore stored styles.

Important operator distinction:

- Official docs explain the breakpoint model.
- The actual enabled breakpoints, actual widths, and local canvas preview widths remain unknown until inspected locally.

---

## 4. Responsive Editing Workflow

Official-doc-backed conceptual workflow:

1. Start from the base/default design, usually Desktop.
2. Identify the specific setting causing the responsive issue, such as font size, padding, margin, width, gap, visibility, or overflow.
3. Open the element settings for the relevant Section, Row, Column, Module, nested Row, or Specialty Section.
4. Find the responsive-capable field.
5. Either:
   - select a device/breakpoint first and edit the field in that view, or
   - open the Responsive Editor icon for that field and edit the breakpoint row directly.
6. Set overrides only where the inherited value fails.
7. Use blue responsive icons and Modified Settings filtering to find existing overrides.
8. Reset unwanted breakpoint values so they inherit again.
9. Check the whole layout in device previews after field-level edits.

Responsive inheritance/reset logic:

- A blank/unset breakpoint value inherits from a parent/base value.
- A custom value on Tablet, Phone, or another enabled breakpoint becomes an override.
- Resetting a breakpoint-specific value clears the override and returns that breakpoint to inherited behaviour.
- Unnecessary overrides increase maintenance risk and make responsive bugs harder to diagnose.

For operator reasoning, the preferred diagnostic order is:

1. Confirm current breakpoint or preview width.
2. Identify whether the issue is structural, spacing/sizing, typography, visibility, or overflow.
3. Check whether the suspect field has a blue responsive icon.
4. Inspect per-breakpoint values before proposing a new override.
5. Prefer resetting stale overrides before adding more overrides.

---

## 5. Responsive Units / Sizing Concepts

Divi 5 numeric fields use a Unit Picker that separates the value from the unit. Official docs describe support for common CSS units, math functions, CSS keywords, and CSS variables.

Responsive-relevant units and functions include:

- `px` for fixed values.
- `%` for parent-relative sizing.
- `em` and `rem` for typography-relative sizing.
- `vw`, `vh`, `vmin`, and `vmax` for viewport-relative sizing.
- `calc()`, `clamp()`, `min()`, and `max()` for CSS math.
- `auto`, `none`, `inherit`, and `unset` for keyword-based behaviour.

`clamp()` is especially relevant because it can create fluid typography or spacing that responds smoothly to viewport width without requiring breakpoint-specific overrides.

The Variable Generator adds a higher-level responsive sizing concept:

- **Fluid:** outputs `clamp()` values that scale smoothly between minimum and maximum viewport sizes.
- **Fixed Responsive:** outputs separate values per enabled breakpoint.
- **Fixed Single:** outputs one value for all sizes.

Official docs mention token families such as font size, spacing, gap, border radius, border width, and width. These can become design-system-level responsive controls, but changing variables is site-wide and should not be treated as a narrow page fix.

Operator risk notes:

- Fixed pixel widths, large fixed margins, and viewport-width spacing can cause overflow or crowding.
- `%` widths must account for gutters and neighboring columns.
- `vw` can overshoot inside constrained containers if used without caps.
- `clamp()` can reduce breakpoint clutter, but wrong min/max values can still create unreadable or oversized layouts.
- Unit changes may clear field values in some Unit Picker states, so unit switching must be locally verified before editing.

---

## 6. Visibility / Show-Hide Concepts

Official docs describe visibility as an Advanced tab option group available on sections, rows, columns, and modules.

Visibility controls can:

- disable an element on Phone, Tablet, Desktop, or any enabled custom breakpoint,
- control horizontal overflow,
- control vertical overflow.

In the Visual Builder, elements disabled for the current preview can appear faded so they remain findable/editable while not being shown on the live page for that breakpoint.

Best-practice pattern from the official docs:

- Use responsive settings for smaller visual changes like text size, spacing, and alignment.
- Use visibility only when the layout structure truly needs to differ by device.
- If duplicating desktop/mobile sections, use clear admin labels.
- Keep the number of alternate versions small.
- Check overflow settings when content is clipped.

Operator warning:

Visibility can hide the real cause of a responsive issue. A section may appear "missing" because it is disabled on a breakpoint, not because it failed to render. Always inspect visibility before assuming deletion or layout failure.

---

## 7. Operator Implications

- Responsive reasoning must start with the selected breakpoint and actual preview width.
- Desktop should be treated as the base layer unless local evidence shows a different inheritance path for a field.
- A responsive field with a blue icon deserves inspection before any new value is proposed.
- Responsive failures may come from stale overrides, not just missing overrides.
- The Responsive Editor is better for field-level diagnosis than repeatedly switching global device views.
- Top-bar previews are still needed for whole-layout review after field edits.
- Visibility and overflow controls belong in the responsive diagnosis flow, especially for clipped or missing elements.
- Nested rows and specialty sections add structure depth; breadcrumbs and Layers View may be needed before any responsive edit is safe.
- Column/gutter math matters. Multi-column layouts can fail when column widths, gutter widths, margins, and nested widths do not fit the available row width.
- Divi 5 docs may not fully match migrated Divi 4 layouts or Backwards Compatibility Mode.

---

## 8. Common Responsive Failure Patterns

Official docs and release notes suggest these likely failure patterns for operator attention. These are diagnostic hypotheses, not verified facts about CASE-001.

| Pattern | Why It Fails Responsively |
|---------|---------------------------|
| Stale breakpoint override | A prior Tablet/Phone value overrides the Desktop/base value and causes unexpected spacing, size, or layout. |
| Over-customized breakpoints | Too many breakpoint-specific values make it hard to know which setting controls the current viewport. |
| Fixed pixel widths | Fixed widths can exceed the available container width on smaller screens. |
| Gutter math mismatch | Column widths plus gutters/margins can exceed the row's available width. |
| Large desktop spacing inherited on mobile | Desktop padding/margins may make mobile sections too tall or cramped if not adjusted. |
| Viewport-width spacing | `vw` spacing can become too large or too small depending on the viewport and containing layout. |
| Visibility misconfiguration | Elements can appear missing because they are disabled on a breakpoint. |
| Overflow settings hiding content | Hidden horizontal or vertical overflow can clip content instead of revealing the layout problem. |
| Nested rows inside narrow columns | Nested rows inherit responsive column behaviour but start from a constrained parent width. |
| Specialty section inner structure | Module columns and row columns behave differently, and specialty sections have unique column structures. |
| Migrated/backwards-compatible layouts | Divi 4-to-Divi 5 migration or Backwards Compatibility Mode may affect specialty sections, columns, gutters, and responsive CSS. |
| Responsive unit misuse | `clamp()`, `calc()`, `%`, `vw`, or fixed units may be valid but poorly bounded for the actual layout. |

Special focus for CASE-001-style reasoning:

- A multi-column stat/card row may look correct on Desktop while failing on Tablet because the row's column collapse, gutter width, inherited spacing, and fixed widths are all interacting.
- A Specialty Section can be harder than a regular section because it has inner column types and may contain row columns that hold more rows.
- Nested rows are official Divi 5 layout tools, but they add a deeper hierarchy that must be inspected before assuming which Row or Column owns a spacing/sizing value.

---

## 9. Do / Don't Rules

### Do

- Label all Stage 2 knowledge as official-doc-backed unless it has been locally observed.
- Use the terms breakpoint, preview width, inherited value, override, Responsive Editor, Device Selector, Sitewide Responsive Breakpoints, Visibility, overflow, Unit Picker, and gutter width consistently.
- Check for existing responsive overrides before adding new values.
- Prefer fewer overrides and reset stale values when appropriate.
- Consider visibility and overflow before assuming an element is missing or broken.
- Treat nested rows and specialty sections as higher-risk responsive structures.
- Treat variable and preset changes as broad-scope design-system actions requiring approval.
- Use official docs to plan a future verification checklist, not to execute changes.

### Don't

- Do not edit LocalWP based on this summary.
- Do not run browser automation for this stage.
- Do not modify CASE-001.
- Do not create VERIFIED entries from documentation alone.
- Do not assume local breakpoint widths from official examples.
- Do not assume responsive controls are available on every field.
- Do not duplicate desktop/mobile sections unless a structural difference is truly needed and approved.
- Do not hide a layout on mobile as a substitute for fixing spacing/sizing.
- Do not use custom CSS, fixed column widths, or gutter overrides as the first fix path.
- Do not modify sitewide breakpoints, variables, presets, or Theme Options without explicit approval.

---

## 10. Unknowns Requiring Local Verification

- Which breakpoints are enabled on the LocalWP site.
- The actual width values for Phone, Tablet, Desktop, and any optional breakpoints.
- Whether the local Builder exposes the Sitewide Responsive Breakpoints modal and where.
- Whether responsive field icons are visible on hover, always visible, or accessed through another field UI.
- Whether the Responsive Editor panel opens reliably for spacing, sizing, text, background, visibility, and column-related fields.
- Whether the blue responsive icon appears consistently when breakpoint overrides exist.
- Whether Modified Settings filtering works reliably for finding responsive overrides.
- How Reset behaves for local responsive values.
- Whether top-bar device switching and field-level Responsive Editor edits update the same underlying values.
- Whether disabled elements appear at 50% opacity locally and can still be inspected.
- Which horizontal/vertical overflow options are available locally and how they affect front-end output.
- How regular rows, nested rows, and specialty section row columns collapse on Tablet and Phone.
- Whether local specialty sections are Divi 5-native or affected by Backwards Compatibility Mode.
- Whether the local `home` page contains specialty sections or nested rows in the problem area.
- Whether gutter width controls exist in the local Row settings and how they interact with column widths.
- Whether viewport units, `clamp()`, `calc()`, and CSS variables are accepted in the local fields relevant to the case.
- Whether responsive preview widths match front-end viewport screenshots.

---

## 11. Candidate Capability-Matrix Items

The following are **official-doc-backed only, not locally verified**. They are candidates for later capability-matrix mapping after narrow read-only local verification.

| Candidate Item | Official-Doc-Backed Claim | Local Verification Needed |
|----------------|---------------------------|---------------------------|
| Responsive Editor panel | A field-level panel can show all enabled breakpoint values for one setting. | Open read-only for a low-risk field and document controls, rows, reset, and close behaviour. |
| Responsive inheritance | Desktop/base values are inherited by other breakpoints until overridden. | Confirm with a local field that has no existing overrides, then with a field that has overrides. |
| Blue responsive indicator | Responsive icon turns blue when alternate device/state values exist. | Confirm icon behaviour on local fields with known overrides. |
| Device-first editing | Selecting a top-bar or settings-panel device causes edits to apply to that breakpoint. | Verify with read-only inspection first; editing requires explicit approval. |
| Sitewide Responsive Breakpoints modal | Breakpoints can be enabled, disabled, and width-adjusted sitewide. | Locate only; do not change values without approval. |
| Breakpoint set | Divi 5 supports Phone, Phone Wide, Tablet, Tablet Wide, Desktop, Widescreen, and Ultra Wide. | Record which are enabled and their local widths. |
| Visibility Disable On | Sections, rows, columns, and modules can be hidden per breakpoint. | Inspect visibility controls and faded disabled-element behaviour locally. |
| Overflow controls | Visibility group includes horizontal and vertical overflow controls. | Inspect available options and compare Builder/front-end behaviour. |
| Unit Picker | Numeric fields support units, CSS math functions, keywords, and variables. | Confirm accepted units/functions on relevant local fields before use. |
| Nested row responsive behaviour | Nested rows inherit Divi responsive column behaviour and default to width 100%, max-width none. | Inspect a local nested row if present, including Tablet/Phone collapse. |
| Specialty section structure | Specialty sections have module columns and row columns with sizing, spacing, and visibility controls. | Determine if the local page uses Specialty Sections and map inner column controls. |
| Row gutter/column width interaction | Gutter width affects available column width and can require math when custom widths are used. | Inspect local Row sizing/gutter controls and verify whether fixed/custom widths exist. |
| Responsive preview system | Builder previews can represent device/breakpoint widths without leaving the Builder. | Record preview widths and compare with external viewport screenshots. |

---

## Stage 2 Completion Note

Stage 2 establishes responsive-system vocabulary, breakpoint concepts, likely failure modes, and local verification targets. It does not authorise responsive Builder edits. Stage 3 should proceed with official layout/navigation docs, especially Wireframe and Layers, before further LocalWP Builder testing resumes.
