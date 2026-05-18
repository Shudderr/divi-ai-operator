# Task Routing

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Active routing map  
**Last Updated:** 2026-05-18

---

## Purpose

This file maps common requests to the existing KB files the operator should read first.

Do not scan the entire repository blindly for every task. Route first, then read the smallest useful set of files.

---

## General Orientation

Use for onboarding, "what is this project?", or broad project context.

Read:

- `PROJECT.md`
- `STATE.md`
- `INDEX.md`
- `quick-reference.md`

---

## UI Navigation ("Where Is X?")

Use when a task requires knowing which WP admin page or Divi UI panel to use, or when browser-automation needs a precise path.

Read:

- `operator/wp-divi-ui-map.md`

Covers: WordPress admin navigation, Pages list, Divi Visual Builder zones, module settings modal tabs, responsive controls, Global Variables, Preset Manager, Theme Builder, Theme Options tabs, Menus, Widgets, and safety rules per area.

---

## New Project

Use for starting a new WordPress/Divi site or preparing a client build.

Read:

- `workflows/starting-new-project.md`
- `workflows/design-system-import.md`

Then, if building starts:

- `build/04_divi5_workflow.md`

---

## Build Workflow

Use for page or site build sequencing.

Read:

- `build/04_divi5_workflow.md`

Support with:

- `features/design-variables.md`
- `features/preset-system-complete.md`
- `features/responsive-breakpoints.md`

---

## Design Consistency

Use for spacing, typography, colour consistency, visual polish, and Simplicity Tech design decisions.

Read:

- `build/06_design_logic.md`
- `build/01_system_setup.md`

Support with:

- `audits/01_UX_VISUAL.md`

---

## Presets And Variables

Use for design systems, global variables, presets, stacked presets, and reusable styling.

Read:

- `features/design-variables.md`
- `features/preset-system-complete.md`

Support with:

- `features/dark-mode-relative-colors.md`
- `features/extend-attributes.md`
- `build/02_divi5_mechanics.md`

---

## Responsive Issues

Use for mobile/tablet bugs, layout breaking at widths, overflow, iOS form zoom, or breakpoint decisions.

Read:

- `features/responsive-breakpoints.md`
- `troubleshooting/common-issues.md`

Support with:

- `audits/01_UX_VISUAL.md`

---

## Layout

Use for Flexbox, Grid, card layouts, row/column structure, and complex section layouts.

Read:

- `features/flexbox-layout-system.md`
- `features/css-grid-system.md`

Support with:

- `features/nested-modules.md`
- `features/responsive-breakpoints.md`

---

## Templates And Pattern Reuse

Use when choosing a starting point, reusing sections, importing layouts, or finding approved patterns.

Read:

- `resources/template-library.md`

Support with:

- `workflows/design-system-import.md`
- `features/preset-system-complete.md`

---

## QA

Use for audits, pre-launch reviews, or visual/accessibility/performance checks.

Start with:

- `audits/00_MASTER_INDEX.md`

Then route to:

- `audits/01_UX_VISUAL.md`
- `audits/02_PERFORMANCE.md`
- `audits/03_ACCESSIBILITY.md`
- `audits/04_DIVI5_LOGIC.md`

---

## Deployment And Safety

Use for launch, migration, rollback, and production-readiness questions.

Read:

- `workflows/deployment-checklist.md`

Support with:

- `performance/lcp-optimization.md`
- `troubleshooting/common-issues.md`

---

## Maintenance And Operational Memory

Use for recurring issues, repeated fixes, plugin conflicts, maintenance planning, and lessons learned.

Read:

- `workflows/maintenance-schedule.md`
- `troubleshooting/common-issues.md`
- `operator/memory.md`

---

## Browser Automation Requests

Use when asked to open, inspect, edit, QA, or control WordPress/Divi through a browser.

Read first:

- `operator/browser-automation.md`
- `operator/safety-rules.md`

Then route to task-specific KB docs before acting.

---

## Practical Task Examples

Concrete worked examples showing how the operator should handle common Divi requests.

Each example names the request type, the documents to read first, the expected operator behaviour, the safety checks required, and the reporting expectations.

---

### Example 1: Build A New Homepage Hero Section

**Request type:** New section build on an existing page.

**Read first:**

- `build/04_divi5_workflow.md`
- `build/06_design_logic.md`
- `resources/template-library.md`

**Support docs:**

- `features/design-variables.md`
- `features/preset-system-complete.md`
- `features/flexbox-layout-system.md`

**Expected operator behaviour:**

1. Check `resources/template-library.md` for an approved starting pattern before building from scratch.
2. Read `build/06_design_logic.md` to confirm spacing, typography, and colour decisions match Simplicity Tech standards.
3. Check `features/design-variables.md` to identify existing global variables to use (heading size, colour, spacing).
4. Build on staging using `build/04_divi5_workflow.md` sequencing.
5. Apply presets where available rather than inline styles.

**Safety checks:**

- Work on staging only.
- Do not create new global variables or presets without noting this and asking for confirmation.
- Verify layout at desktop, tablet, and mobile before reporting complete.
- Check horizontal overflow on mobile.

**Output and reporting:**

- State which template or pattern was used as the starting point, or explain why a new build was required.
- List any new variables, presets, or styles created.
- Confirm responsive behaviour at all three breakpoints.
- Note any assumptions about imagery, copy, or layout direction.

---

### Example 2: Fix A Mobile Spacing Or Overflow Issue

**Request type:** Responsive bug fix.

**Read first:**

- `features/responsive-breakpoints.md`
- `troubleshooting/common-issues.md`

**Support docs:**

- `audits/01_UX_VISUAL.md`

**Expected operator behaviour:**

1. Read `troubleshooting/common-issues.md` to check if the issue is a known pattern with a documented fix.
2. Read `features/responsive-breakpoints.md` to understand how Divi 5 handles breakpoints, custom widths, and overflow.
3. Isolate the specific module, row, or section causing the issue before making changes.
4. Apply the minimal fix at the breakpoint where the problem occurs.
5. Do not apply broad spacing overrides that affect other pages.

**Safety checks:**

- Work on staging only.
- Confirm the fix at all three breakpoints, not just mobile.
- Check horizontal overflow after fixing.
- Do not overwrite presets or global variables unless that is the confirmed cause.

**Output and reporting:**

- Name the element and breakpoint where the issue was found.
- Describe the fix applied and why it was chosen.
- Confirm desktop, tablet, and mobile appearance after fix.
- Note if the issue suggests a pattern to document in `operator/memory.md`.

---

### Example 3: Improve Page Speed Or LCP

**Request type:** Performance optimisation.

**Read first:**

- `performance/lcp-optimization.md`
- `audits/02_PERFORMANCE.md`

**Support docs:**

- `workflows/deployment-checklist.md`

**Expected operator behaviour:**

1. Read `performance/lcp-optimization.md` to understand Simplicity Tech's current optimisation approach and approved techniques.
2. Read `audits/02_PERFORMANCE.md` to check which performance signals are tracked.
3. Identify the largest contentful paint element and the specific bottleneck before suggesting changes.
4. Recommend changes in order of impact with low risk of regression first.
5. Flag any changes that require plugin configuration, hosting-level settings, or asset pipeline changes.

**Safety checks:**

- Do not remove or defer scripts without understanding what they affect.
- Do not enable or disable caching plugins in production without staging validation.
- Validate performance before and after using consistent tooling.
- Note if animation, video, or third-party scripts are involved, as these affect LCP differently.

**Output and reporting:**

- State the starting LCP score and the identified bottleneck.
- List each change recommended, in priority order, with the expected impact.
- Confirm which changes were made on staging and which remain pending.
- Record any recurring performance patterns in `operator/memory.md` if useful.

---

### Example 4: Audit An Existing Page

**Request type:** Page review or pre-launch QA.

**Read first:**

- `audits/00_MASTER_INDEX.md`

**Then route to:**

- `audits/01_UX_VISUAL.md` for layout, spacing, and visual consistency.
- `audits/02_PERFORMANCE.md` for speed and LCP.
- `audits/03_ACCESSIBILITY.md` for accessibility risks.
- `audits/04_DIVI5_LOGIC.md` for Divi-specific module and preset logic.

**Expected operator behaviour:**

1. Read `audits/00_MASTER_INDEX.md` to determine which audit areas apply to this request.
2. Run each relevant audit check in scope order.
3. Document findings by category rather than as a mixed list.
4. Distinguish between critical issues, medium risks, and minor polish items.
5. Do not make changes during an audit pass unless explicitly asked.

**Safety checks:**

- Audit work is read-only unless a fix is explicitly requested.
- Do not modify presets, variables, or Theme Builder templates during audit.
- If a fix is requested following the audit, route to the relevant task example and apply the standard safety checks for that task type.

**Output and reporting:**

- Present findings by audit category.
- Rate each finding: critical, medium, or minor.
- Suggest the next action for each critical finding.
- State which audit areas were not checked and why.

---

### Example 5: Add Or Reuse A Divi Template Or Layout

**Request type:** Template import, section reuse, or layout application.

**Read first:**

- `resources/template-library.md`
- `workflows/design-system-import.md`

**Support docs:**

- `features/preset-system-complete.md`

**Expected operator behaviour:**

1. Check `resources/template-library.md` for an approved pattern that meets the request.
2. If importing from the Divi library or an external source, read `workflows/design-system-import.md` for the correct import process.
3. Prefer reusing approved patterns over importing new ones or building from scratch.
4. After applying the template, verify that design variables and presets apply correctly.
5. Confirm that the imported layout does not introduce inline styles that conflict with existing presets.

**Safety checks:**

- Work on staging only.
- Do not overwrite a page or section that has existing client content without explicit confirmation.
- Check that imported colour, font, and spacing values match the site's current design variables.
- If the template introduces new presets, note them and confirm before keeping.

**Output and reporting:**

- Name the template or pattern used.
- State whether it was sourced from the internal library, the Divi library, or a new build.
- Confirm that existing variables and presets applied correctly after import.
- Flag any new presets, variables, or inline styles added by the template.

---

### Example 6: Troubleshoot A Divi Module Or Preset Issue

**Request type:** Module not behaving as expected, preset not applying, or styling conflict.

**Read first:**

- `troubleshooting/common-issues.md`
- `features/preset-system-complete.md`
- `operator/memory.md`

**Support docs:**

- `build/02_divi5_mechanics.md`

**Expected operator behaviour:**

1. Check `operator/memory.md` first for a recorded fix for the same or similar issue.
2. Read `troubleshooting/common-issues.md` to check if it is a known issue.
3. Read `features/preset-system-complete.md` to understand preset stacking, inheritance, and override logic.
4. Reproduce the issue on staging before diagnosing the cause.
5. Isolate the affected module or section before making changes.

**Safety checks:**

- Do not change global presets without confirming the change will not affect other pages.
- Confirm staging reproduction before making production changes.
- If the issue is caused by a plugin conflict, flag it and do not attempt to resolve the conflict without investigation.
- Do not disable or delete a preset without confirming nothing else depends on it.

**Output and reporting:**

- Name the module and the specific issue.
- State which diagnostic steps were followed.
- Describe the root cause found.
- Describe the fix applied and confirm it resolves the issue without regression.
- If the fix is a new pattern, note it in `operator/memory.md`.

---

### Example 7: Prepare A Page For Deployment

**Request type:** Pre-launch or pre-deployment readiness check.

**Read first:**

- `workflows/deployment-checklist.md`

**Support docs:**

- `audits/00_MASTER_INDEX.md`
- `performance/lcp-optimization.md`
- `troubleshooting/common-issues.md`

**Expected operator behaviour:**

1. Work through `workflows/deployment-checklist.md` in full before declaring the page ready.
2. Run the relevant audit areas from `audits/00_MASTER_INDEX.md` if a full pre-launch QA is in scope.
3. Flag any open issues from the checklist that have not been resolved.
4. Do not mark deployment as ready if critical items remain open.
5. Confirm staging validation has been completed before recommending production deployment.

**Safety checks:**

- Never recommend production deployment without confirmed staging validation.
- Do not skip checklist items without documenting why they were skipped and who approved.
- Deployment, migration, and rollback actions are high-risk. Follow `operator/safety-rules.md`.
- Do not publish or push to production automatically.

**Output and reporting:**

- Present checklist results item by item.
- Mark each item as passed, failed, or skipped with a reason.
- List any items that block deployment.
- Confirm staging was the validation environment.
- State who approved deployment if production action is requested.

---

### Example 8: Review A Client Site For Visual Polish

**Request type:** Visual QA or client-facing presentation review.

**Read first:**

- `audits/01_UX_VISUAL.md`
- `build/06_design_logic.md`

**Support docs:**

- `audits/03_ACCESSIBILITY.md`

**Expected operator behaviour:**

1. Read `build/06_design_logic.md` to calibrate review standards against Simplicity Tech design decisions.
2. Work through `audits/01_UX_VISUAL.md` systematically rather than reviewing by impression.
3. Check spacing consistency, typography hierarchy, colour usage, button styles, and section rhythm.
4. Flag anything that deviates from Simplicity Tech standards or looks unfinished.
5. Check `audits/03_ACCESSIBILITY.md` for obvious accessibility issues that affect visual presentation (contrast, focus states, text size).

**Safety checks:**

- This is a review pass. Do not make changes without a separate, explicit request.
- Document findings before suggesting any fix.
- If browser access is used, follow `operator/browser-automation.md` and `operator/safety-rules.md`.

**Output and reporting:**

- Present findings by area: spacing, typography, colour, imagery, interactions.
- Rate each issue: polish item, medium concern, or client-visible problem.
- Prioritise items that would stand out to a client viewing the site for the first time.
- Suggest next actions for medium concerns and client-visible problems.
- Note if a full pre-deployment QA is recommended before presenting to the client.

