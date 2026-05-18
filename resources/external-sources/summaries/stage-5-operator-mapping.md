# Stage 5 Operator Mapping Summary

**Project:** Simplicity Tech Divi AI Operator
**Status:** Official-doc-backed operator guidance mapping; not locally verified execution knowledge
**Last Updated:** 2026-05-18
**Learning Plan Stage:** Stage 5 - Map Official Docs To Operator Capabilities

---

## 1. Source Summaries Used

| Summary | Key Contribution to Operator Behaviour |
|---------|----------------------------------------|
| [stage-1-builder-interface.md](stage-1-builder-interface.md) | Builder interface zones, settings panel structure, official terminology, save/exit/preview lifecycle. |
| [stage-2-responsive-system.md](stage-2-responsive-system.md) | Breakpoint model, Responsive Editor, inheritance/reset logic, responsive failure patterns, specialty section and nested row responsive risk. |
| [stage-3-navigation-and-traversal.md](stage-3-navigation-and-traversal.md) | Hierarchy traversal (Page → Section → Row → Column → Module), Layers View, Wireframe View, canvas selection ambiguity, specialty section column types, nested row depth. |
| [stage-4-presets-and-global-systems.md](stage-4-presets-and-global-systems.md) | Element Preset propagation, Design Variable propagation, local override model, Style Inspector pre-edit audit, Preset Manager, Theme Builder template scope, rollback complexity. |
| [operator/safety-rules.md](../../operator/safety-rules.md) | Core safety principle, implementation execution order, high-risk action list, QA minimums. |
| [operator/browser-automation.md](../../operator/browser-automation.md) | Browser automation boundaries, required workflow, allowed vs restricted uses. |
| [operator/divi-builder-capabilities.md](../../operator/divi-builder-capabilities.md) | Locally VERIFIED interactions, verified limitations, restricted actions, unknowns needing verification. |
| [operator/task-routing.md](../../operator/task-routing.md) | Task-type routing map, practical worked examples for common Divi requests. |
| [AI_WORKFLOW.md](../../AI_WORKFLOW.md) | Core behaviour contract, source priority, routing expectations, safety rules, change reporting. |

---

## 2. Operator Behaviour Updates

These are the concrete behaviour changes the operator should apply because of Stages 1–4.

### From Stage 1 — Interface Discipline

**Before Stage 1:** The operator might navigate the Builder by whatever affordance was visible first.

**After Stage 1:**
- Use official Divi terminology in all reasoning: Section, Row, Column, Module, Content tab, Design tab, Advanced tab, Layers View, Wireframe View, Command Center.
- Treat the four interface zones as distinct: top bar (page controls), left sidebar (tools), right settings panel (element settings), canvas (editing surface). Do not conflate them.
- Treat Save, Preview, Exit, and Publish as separate, distinct actions. Never collapse them into a single "done" step.
- Any reference to "the toolbar" or "the menu" must be specified as which zone it belongs to.

### From Stage 2 — Responsive Discipline

**Before Stage 2:** The operator might apply a responsive fix without first confirming the breakpoint context or checking for existing overrides.

**After Stage 2:**
- Always confirm the current breakpoint before diagnosing or fixing a responsive problem.
- Check for blue responsive override indicators before adding any new breakpoint value. Stale overrides cause more damage than missing overrides.
- Use the Responsive Editor for field-level diagnosis, not just top-bar preview switching.
- Treat nested rows and specialty sections as higher-risk responsive structures — their collapse behaviour and column ownership require hierarchy inspection before field editing.
- Prefer resetting stale overrides over layering new ones.
- Inspect visibility and overflow settings before assuming an element is missing or broken.

### From Stage 3 — Traversal Discipline

**Before Stage 3:** The operator had one verified targeting method (right-panel hierarchy) and awareness of canvas selection unreliability, but no structural fluency with nested or specialty section layouts.

**After Stage 3:**
- Always traverse top-down: identify Section type first, then Row, then Column, then Module. Never target a module without knowing its parent chain.
- Identify Section type (Regular, Fullwidth, or Specialty) before inspecting structure — Specialty Sections have non-uniform hierarchy that makes flat-structure assumptions dangerous.
- Treat Layers View and Wireframe View as the preferred structural inspection tools on dense pages, once locally verified.
- Use breadcrumbs in an open settings modal to confirm current position before making any edit.
- Never rely on canvas visual appearance alone to decide which element to edit.
- For nested structures: always check whether a Column contains a nested Row before assuming Module ownership.

### From Stage 4 — Global-System Discipline

**Before Stage 4:** The operator knew global edits were restricted, but did not have a clear model for *why* or a tool-based method for identifying propagation risk before editing.

**After Stage 4:**
- Before editing any styled field, determine whether the value is local, preset-controlled, or variable-referenced. This is the Style Inspector check — required when Style Inspector is locally verified.
- Apply a local field override when only one element should change. Never edit a preset or variable to fix a single-element problem.
- Before editing a preset, audit its usage scope via the Preset Manager. If scope is wider than intended, use a local override instead.
- All Design Variable edits are sitewide and require explicit approval regardless of environment.
- All Theme Builder template edits are multi-page and require explicit approval regardless of environment.
- Front-end editable areas may belong to a Theme Builder template rather than the page. Confirm element ownership before editing anything in a page header, footer, or shared body area.

---

## 3. Execution Readiness Rules

These conditions must all be true before any browser-based Divi Builder execution is attempted.

### Gate 1 — Capability Matrix Consulted

- Read `operator/divi-builder-capabilities.md`.
- The target interaction must be listed as **VERIFIED** in §1 or §2.
- If the target interaction is **ASSUMED**, **OFFICIAL-DOC-BACKED**, or **UNKNOWN**, it must be converted to a narrow read-only verification test before any edit proceeds.
- Do not treat Stage 1–4 knowledge as execution-safe. Official-doc-backed knowledge informs reasoning; it does not authorise execution.

### Gate 2 — Element Hierarchy Confirmed

- The target element's full parent chain must be known: Section type → Row → Column → (nested Row if present) → Module.
- Hierarchy must be confirmed via structure-first navigation — Layers View (when verified), right-panel hierarchy (verified), or breadcrumbs in an open modal (when verified).
- Canvas-only selection is not a sufficient targeting method. It remains a confirmed limitation (capability matrix §3.1).

### Gate 3 — Styling Source Confirmed Before Styled Edits

- For any field that has visual styling: confirm whether the value is local, preset-controlled, or variable-referenced before editing.
- If the Style Inspector is locally verified, use it. If it is not yet verified, proceed with caution and prefer read-only inspection first.
- If a field is preset-controlled, editing locally overrides only that element. Editing the preset propagates to all elements using it.
- If a field is variable-referenced, editing the variable propagates sitewide. Do not edit variables without explicit approval.

### Gate 4 — Breakpoint Context Confirmed for Responsive Edits

- Before any responsive field edit, confirm: which breakpoint is currently active, whether the field has existing breakpoint overrides, and whether the issue is structural, spacing, typography, visibility, or overflow.
- Do not apply a new breakpoint value before checking what the current breakpoint value is and whether a stale override exists.
- Check the edit result at all three confirmed breakpoints (Desktop, Tablet, Phone) after any responsive change.

### Gate 5 — Propagation Scope Assessed for Global Edits

- If the intended edit involves a preset: assess scope via Preset Manager before editing.
- If the intended edit involves a Design Variable: treat as sitewide and obtain explicit approval before editing.
- If the intended edit involves a Theme Builder template: treat as multi-page and obtain explicit approval before editing.
- If scope cannot be assessed (tools not yet verified locally), escalate to explicit approval regardless.

### Gate 6 — Rollback Path Identified for Non-Trivial Changes

- For any change that affects more than one element, identify the rollback path before editing:
  - For a local field override: note the original value; rollback is a single field reset.
  - For a preset edit: note the original preset state; rollback requires re-editing the preset.
  - For a variable edit: note the original variable value; rollback propagates to all referencing fields.
  - For a Theme Builder template edit: note the original template state; rollback affects all assigned pages.
- If Builder undo/history reliability for the target action has not been verified, treat the change as non-reversible without manual revert.

---

## 4. Divi Builder Navigation Rules

Practical rules derived from Stage 1 and Stage 3.

1. **Open the Builder via Edit With Divi only.** The "Edit" action opens the WP block editor, which is wrong. The nonce-bearing Edit With Divi link expires — always generate a fresh one from the Pages list. *(Locally verified: capability matrix §1.8.)*

2. **Identify the Section type before drilling into any element.** Regular, Fullwidth, and Specialty sections have different internal structures. Specialty Sections have Module Columns and Row Columns — a flat-structure assumption will target the wrong level.

3. **Traverse top-down.** Page → Section → Row → Column → (nested Row if present) → Module. Never jump to a Module by guessing from the canvas without confirming the parent chain.

4. **Use right-panel hierarchy drill-down (pencil icon) as the primary targeting method.** *(Locally verified: capability matrix §1.2.)* Canvas overlay clicking selects wrong levels. *(Locally verified limitation: capability matrix §3.1.)*

5. **When Layers View is locally verified:** use it on pages with more than one section, any specialty section, or any suspected nested structure. It eliminates canvas selection ambiguity.

6. **When Wireframe View is locally verified:** use it on dense pages or when canvas content obscures structural boundaries.

7. **Read breadcrumbs in an open settings modal** to confirm current element level before editing any field. The breadcrumb shows the full path from Page to the current element.

8. **Do not assume flat structure.** Any Column may contain a nested Row. Check via Layers or open the Column's settings and look for a Row child.

9. **Use official zone terminology in all reasoning.** Do not say "the sidebar" — say "the left sidebar panel" or "the right settings panel". Do not say "the toolbar" — say "the top bar" or "the Builder Bar".

---

## 5. Responsive Editing Rules

Practical rules derived from Stage 2.

1. **Confirm the active breakpoint before diagnosing any responsive issue.** The canvas preview may not match the front-end viewport — both matter.

2. **Check for blue responsive override indicators first.** A field with a blue icon has an existing breakpoint override. Read the override before adding another.

3. **Use the Responsive Editor for field-level diagnosis.** Top-bar preview switching changes the global canvas view but does not show all breakpoint values for a specific field side by side. The Responsive Editor does.

4. **Apply overrides at the correct element level.** A spacing override applied at the Row level affects all Columns. A spacing override applied at the Module level affects only that Module. Confirm ownership before placing the override.

5. **Prefer resetting stale overrides over layering new ones.** An unexpected value at a breakpoint is often a stale override, not a missing override.

6. **Check visibility and overflow before concluding an element is missing.** Elements disabled on a breakpoint still exist — they may appear faded in the Builder but are not rendered on the front end for that device.

7. **Treat nested rows and specialty sections as higher-risk responsive structures.** Before any responsive edit inside a Specialty Section: identify column type (Module Column or Row Column), confirm which Row or Column controls the suspect value, and check for responsive overrides at each level in the chain.

8. **Verify all three breakpoints after any responsive change.** Desktop → Tablet → Phone. Check horizontal overflow at Phone width.

9. **Document before/after for any responsive override.** Note the breakpoint, element path, field name, original value, and new value.

---

## 6. Preset / Variable / Global-System Rules

Practical rules derived from Stage 4.

1. **Style Inspector check before any styled field edit (when locally verified).** Determine whether the field value is local, preset-backed, or variable-referenced. This is not optional — it determines the correct scope of the edit.

2. **Local override is the default edit type.** When only one element should change, apply a local field override, not a preset or variable edit. Local overrides affect only that element and are immediately reversible.

3. **Preset Manager audit before any preset edit.** Confirm how many elements use the preset and which pages they are on. If the intended change is narrower than the preset's scope, use a local override instead.

4. **Design Variable edits require explicit approval.** No exceptions. Variable edits propagate sitewide. There is no per-field preview before propagation.

5. **Theme Builder template edits require explicit approval.** Editing a front-end element that is inside a Theme Builder template area (header, footer, or body template) is a template-scoped, multi-page change. This site currently has no templates configured, but the risk applies to future work.

6. **Confirm element ownership before editing shared areas.** A front-end header or footer may look like a page element but be a Theme Builder template. Before editing, confirm it is page-scoped.

7. **Preset drift is a silent failure.** Elements with local overrides do not update when their preset is changed. After any preset edit, audit elements with local overrides on the same fields to check for visual inconsistency.

8. **Plan a rollback before any global change.** For presets and variables: note the original value. For templates: note the original template state. Builder undo reliability for global changes has not been locally verified.

9. **Never delete a preset, variable, or template without a pre-deletion usage audit.** Deletion propagates to all referencing elements. The effect may not be obvious in the Builder UI before the deletion is confirmed.

---

## 7. Capability Matrix Candidate Updates

All items below are **OFFICIAL-DOC-BACKED — NOT LOCALLY VERIFIED**. They should be added to `operator/divi-builder-capabilities.md` under a clearly separated official-doc-backed section in a future update. They must not be placed in the VERIFIED sections.

| Candidate Item | Official-Doc-Backed Claim | Priority for Local Verification |
|----------------|---------------------------|--------------------------------|
| Style Inspector — read-only audit | Opens from the left sidebar. Shows style source (local, preset, variable) for each field. Non-destructive to open. | High — prerequisite for safe preset/variable field reasoning. |
| Layers View — structural tree | Opens from Builder Bar. Shows collapsible Page → Section → Row → Column → Module tree. Clicking an element opens its settings. | High — prerequisite for safe navigation on dense or nested pages. |
| Wireframe View — structural blocks | Opens from Builder Bar. Renders page as labelled structural blocks rather than visual content. Elements clickable for settings. | High — prerequisite for non-visual traversal of complex layouts. |
| Breadcrumbs in settings panel | Settings panel shows full path from Page to current element. Clicking a breadcrumb level navigates up the hierarchy. | High — prerequisite for confirming element level before editing. |
| Responsive Editor panel — field-level | Opens via responsive icon beside a field. Shows all enabled breakpoint values for that field in one panel. | High — prerequisite for reliable responsive override diagnosis. |
| Preset Manager — audit panel | Opens from left sidebar. Lists all presets per element type with preview rendering. | Medium — prerequisite for safe preset-scope assessment. |
| Global Variable Manager — read-only access | Opens from left sidebar. Lists all Design Variables with name, type, and value. | Medium — prerequisite for understanding variable scope before any variable-adjacent edit. |
| Specialty section column type detection | Specialty Sections expose both Module Columns and Row Columns. Column type is distinguishable in Layers View. | Medium — required if any Specialty Sections exist on the home page. |
| Local field override vs preset value | A locally-edited field shows a local-override indicator in the Style Inspector. The controlling preset's value is unchanged. | Medium — confirms local override isolation before adopting it as safe edit type. |
| Nested row presence on home page | Whether any column on the home page contains a nested Row. Visible in Layers View as a child Row node inside a Column node. | Medium — affects traversal depth for CASE-001 target area. |
| Builder undo/history depth | Undo steps available and whether they cover preset, variable, and template edits. | Medium — required before any globally-scoped edit to confirm rollback availability. |
| Command Center — navigation commands | Accessible via keyboard shortcut. Shows searchable command list. Navigation/search commands do not trigger edits. | Lower — useful if panel navigation proves fragile, but not blocking. |
| Tablet and Phone canvas widths | Actual pixel values for Tablet and Phone breakpoints as shown in the Builder width input. | Lower — needed for accurate responsive reasoning but does not block current read-only work. |

---

## 8. Next Local Verification Targets

Priority order for the first controlled execution session after Stage 5.

### Priority 1 — Pre-Edit Safety Tools (read-only)

These must be verified before any further Divi editing work.

1. **Style Inspector access path and read-only behaviour.** Open from the left sidebar. Confirm it shows style source (local, preset, variable) for at least one field on a known module. Confirm it does not enter an edit state when opened. Document access path and panel layout.

2. **Layers View structural tree.** Open from Builder Bar. Expand the full tree for the home page. Confirm element labels match the known structure (9 sections, 15 rows from DOM query). Confirm clicking an element opens the correct settings modal. Document panel layout and collapse/expand reliability.

3. **Wireframe View structural blocks.** Open from Builder Bar. Confirm blocks are labelled. Confirm clicking a block opens its settings. Document how nested rows and specialty sections (if any) appear in the block layout.

4. **Breadcrumb behaviour in settings panel.** Open a Module settings modal via right-panel hierarchy. Confirm breadcrumbs are present and show the full path. Click one breadcrumb level and confirm navigation to the parent element's settings.

### Priority 2 — Responsive Controls (read-only)

5. **Responsive Editor panel for a low-risk field.** Open the responsive icon beside a spacing or font field. Confirm the panel shows per-breakpoint rows. Confirm it can be closed without triggering an edit. Confirm blue icon state when overrides exist.

6. **Tablet and Phone canvas widths.** Switch to Tablet and Phone in the top bar. Record the pixel values shown in the canvas width input.

### Priority 3 — Global System Audit Tools (read-only)

7. **Preset Manager access and panel layout.** Open from left sidebar. Confirm it lists presets by element type. Check whether a per-preset usage count is visible. Confirm that opening the panel does not enter a global edit state.

8. **Global Variable Manager access.** Open from left sidebar. Confirm it lists variable names, types, and values. Confirm that opening the panel does not trigger any edit state. Document whether variable references are shown per-field or only in the manager panel.

### Priority 4 — Structural Confirmation (read-only)

9. **Section type breakdown on home page.** Use Layers View or Wireframe View to identify whether any Specialty Sections exist. Record section types for all 9 sections.

10. **Nested row detection.** Use Layers View to confirm whether any Columns contain nested Rows. This is required before the CASE-001 stats area can be safely targeted.

---

## 9. CASE-001 Implications

CASE-001 is the Stats section responsive issue on `cases/spacing-and-padding/`. The following guidance applies to future work on this case.

### What Must Be True Before CASE-001 Resumes

CASE-001 must not resume until all Priority 1 and Priority 2 verification targets (§8) are complete. Specifically:

- Style Inspector must be locally verified as a read-only pre-edit audit tool.
- Layers View must be locally verified to confirm the full parent chain of the stats modules.
- Breadcrumb behaviour must be locally verified to confirm element level during editing.
- Tablet and Phone canvas widths must be recorded to ground responsive reasoning.

### Structural Traversal for CASE-001

Before any fix:

1. Use Layers View to identify the full parent chain of the Stats Number Counter modules.
2. Confirm whether the stats row is a Regular Section Row or is inside a Specialty Section Row Column.
3. Confirm whether any Column in the stats area contains a nested Row.
4. Confirm how many columns are in the stats row and whether column widths are fixed, percentage-based, or variable-referenced.

Reason: the layout-summary.md for this case (from a Divi JSON export) is the current best structural evidence, but it may not reflect all nesting depth or specialty section column types. Live Layers View confirmation is safer than export-based inference.

### Styling Source Audit for CASE-001

Before editing any spacing, sizing, or typography field in the stats area:

1. Open Style Inspector on the suspect module(s).
2. Confirm whether the spacing values are local overrides, preset-backed, or variable-referenced.
3. If preset-backed: do not edit the preset to fix one row. Apply a local override instead.
4. If variable-referenced: do not edit the variable. Apply a local override to the specific field.

Reason: the stats modules likely use presets (from the pattern of the layout) and potentially design variables for spacing. Editing at the wrong layer would create sitewide or preset-wide regressions.

### Responsive Fix Approach for CASE-001

When the fix is ready:

1. Apply the narrowest possible change: a local override on the identified field, at the identified breakpoint, on the identified element.
2. Check for existing breakpoint overrides on the suspect field before adding a new one.
3. Verify at all three breakpoints after the fix.
4. Document: element path, field name, breakpoint, original value, new value, whether a local override or preset change was used.

### Restricted Actions for CASE-001

The following remain explicitly off-limits without a separate approval step:

- Editing any preset used by the stats modules.
- Editing any Design Variable referenced by the stats modules.
- Editing the Divi 5 Migrator.
- Applying CSS fallback without first documenting which Builder controls were checked and found insufficient.

---

## 10. Do / Don't Summary

### Do

- Consult `operator/divi-builder-capabilities.md` before any execution attempt. Target must be VERIFIED.
- Traverse top-down: Section type → Row → Column → (nested Row) → Module. Every time.
- Use right-panel hierarchy (pencil icon drill-down) as the primary targeting method — it is the only currently VERIFIED targeting method.
- Use Layers View for structural inspection on dense pages (once locally verified).
- Use Wireframe View for non-visual traversal of complex sections (once locally verified).
- Read breadcrumbs in an open settings modal to confirm element level before editing.
- Check the active breakpoint context before any responsive diagnosis or edit.
- Check for existing responsive overrides (blue indicator) before adding new breakpoint values.
- Check style source (Style Inspector) before editing any styled field (once locally verified).
- Apply a local field override when only one element should change.
- Audit preset scope (Preset Manager) before any preset-level edit.
- Obtain explicit approval before editing any Design Variable or Theme Builder template.
- Plan a rollback path before any global-scope change.
- Verify at Desktop, Tablet, and Phone after any responsive change.
- Document: element path, field, breakpoint, original value, new value, and styling source for every edit.

### Don't

- Don't execute any interaction listed as ASSUMED, OFFICIAL-DOC-BACKED, or UNKNOWN in the capability matrix without a verification step.
- Don't click canvas overlays as the primary targeting method — selection ambiguity is a verified limitation.
- Don't assume flat structure inside any section without confirming via Layers or breadcrumbs.
- Don't assume Module Column and Row Column hierarchies are the same inside a Specialty Section.
- Don't edit a preset to fix a single element — use a local override.
- Don't edit a Design Variable without explicit approval regardless of scope size.
- Don't edit a Theme Builder template without explicit approval.
- Don't add a new responsive override without first checking for an existing one.
- Don't reset a breakpoint override without confirming what the inherited value will become.
- Don't delete a preset, variable, or template without a pre-deletion usage audit.
- Don't skip the Style Inspector check before styled field edits once it is locally verified.
- Don't conflate Save, Preview, Exit, and Publish into a single "done" action.
- Don't use the Save Dropdown until its sub-options are locally verified.
- Don't treat this stage or any prior learning summary as locally verified execution knowledge.

---

## Stage 5 Completion Note

Stage 5 converts official-doc-backed conceptual knowledge into practical operator behaviour rules. It does not upgrade any prior summary from official-doc-backed to locally verified — that distinction stands unchanged.

The operator is now equipped to:

- Reason about Builder navigation using correct hierarchy and terminology.
- Apply the correct execution gates before any Builder interaction.
- Distinguish local, preset, and variable-controlled styling before editing.
- Assess propagation risk before touching any global system.
- Plan CASE-001 resumption with the correct pre-conditions.

What the operator is **not** yet equipped to do:

- Rely on Layers View, Wireframe View, Style Inspector, Preset Manager, or Global Variable Manager for execution — all are official-doc-backed only.
- Confirm responsive field controls beyond the Spacing/Margin hover behaviour verified on 2026-05-18.
- Assess specialty section column types on the local home page.
- Know breakpoint canvas widths for Tablet and Phone.

The next session should be a narrow, read-only verification pass targeting the Priority 1 and Priority 2 items from §8. No edits. Each verified item should then be recorded in `operator/divi-builder-capabilities.md` with date and method.
