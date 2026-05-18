# Changelog

Human-readable history of meaningful project milestones.

This file should track architectural decisions, governance additions, operator-layer evolution, and major documentation changes. It should not become a noisy log of every small edit.

---

## 2026-05-18 (Pass 10)

Added Stage 2 Divi responsive system summary:

- Created `resources/external-sources/summaries/stage-2-responsive-system.md` as the official-doc-backed responsive learning summary for the operator.
- Summarised official Divi 5 responsive sources covering the Responsive Editor, responsive options, customizable breakpoints, responsive previews, visibility controls, advanced units, fluid sizing variables, nested rows, specialty sections, rows, and column/gutter width concepts.
- Captured breakpoint behaviour, responsive inheritance/reset logic, responsive editing workflows, likely failure patterns, do/don't rules, local verification unknowns, and candidate capability-matrix items marked official-doc-backed only.
- Updated `HANDOFF.md` and `STATE.md` to mark Stage 2 complete and point the next ingestion step at Stage 3 layout/navigation docs.
- Did not update `operator/divi-builder-capabilities.md`; no new execution capability was locally verified.

---

## 2026-05-18 (Pass 9)

Added Stage 1 Divi Builder interface summary:

- Created `resources/external-sources/summaries/stage-1-builder-interface.md` as the first official-doc-backed learning summary for the operator.
- Summarised official Divi 5 Builder interface sources covering entry points, interface zones, top bar concepts, left sidebar tools, right settings panel behaviour, layout hierarchy, settings tabs, navigation candidates, views/modes, save/exit concepts, and operator terminology.
- Captured operator implications, do/don't rules, unknowns needing local verification, and candidate capability-matrix items clearly marked as official-doc-backed but not locally verified.
- Updated `HANDOFF.md` and `STATE.md` to mark Stage 1 complete and point the next ingestion step at Stage 2 responsive system docs.
- Did not update `operator/divi-builder-capabilities.md`; no new execution capability was locally verified.

---

## 2026-05-18 (Pass 8)

Added official Divi 5 reference source layer:

- Created `resources/external-sources/elegant-themes-index.md` as a curated index of official Elegant Themes / Divi 5 references for Builder interface, responsive systems, Wireframe, Layers, Style Inspector, presets, design variables, Divi Library/portability, modules, Theme Builder, editable template areas, and performance.
- Created `resources/external-sources/divi-5-builder-learning-plan.md` to stage official-doc ingestion before more LocalWP Builder execution tests.
- Updated `operator/source-priority.md` to point to the official external source index before new external Divi 5 research.
- Updated `operator/divi-builder-capabilities.md` to distinguish OFFICIAL-DOC-BACKED knowledge from locally VERIFIED execution knowledge.
- Updated `HANDOFF.md` and `STATE.md` to pause further Builder execution and make the official learning plan the next recommended path.

---

## 2026-05-18 (Pass 7)

Added verified Divi Builder capability matrix:

- Created `operator/divi-builder-capabilities.md` — canonical reference for operationally verified Divi Builder interactions, safe workflows, known limitations, restricted actions, unknown capabilities, and future verification targets.
- All entries are explicitly tagged VERIFIED / ASSUMED / UNKNOWN with verification date and method where applicable.
- Key verified capabilities documented: module tab/group structure (Heading module + Page Settings), right-panel hierarchy navigation, per-field responsive breakpoint toggle (hover behaviour), Builder Bar buttons, Page Bar controls, canvas structure (9 sections, 15 rows, iframe ID), module types present, entry path to Visual Builder, and Backwards Compatibility Mode status.
- Key unknowns identified: canvas hover-to-select reliability, Layers/Wireframe View panel internals, Save Dropdown sub-options, Tablet/Phone canvas widths, section type breakdown, module settings consistency across non-Heading module types.
- Restricted actions table formalises the implicit rules already established in `operator/safety-rules.md` and `CLAUDE.md`.
- Updated `operator/browser-automation.md` — Required Workflow now includes a step to check the capability matrix before executing any browser interaction.
- Updated `operator/safety-rules.md` — Implementation Execution Order now includes a step to verify target interactions against the capability matrix before proceeding.

---

## 2026-05-18 (Pass 6)

Validated the canonical Divi spacing case against the LocalWP page:

- Added read-only viewport evidence for `cases/spacing-and-padding/` at widescreen, desktop, tablet, and mobile sizes.
- Updated `case.md` with confirmed visual findings, summary-derived risks that remain unconfirmed, and a revised first safe implementation target.
- Kept `outcome.md` pending because no fix was applied.

---

## 2026-05-18 (Pass 5)

Added the canonical Divi summarizer case:

- `cases/spacing-and-padding/case.md` now demonstrates the complete workflow from raw Divi export to `layout-summary.md`, operator reasoning, staged safe fix plan, QA expectations, and memory-entry evaluation.
- `cases/README.md` identifies `cases/spacing-and-padding/` as the canonical summarizer example.
- `HANDOFF.md` and `STATE.md` now point future sessions toward completing the case through real LocalWP visual confirmation and outcome documentation.

---

## 2026-05-18 (Pass 4)

Added the Divi layout summarizer foundation:

- `scripts/summarize-divi-layout.js` generates token-efficient `layout-summary.md` files from raw Divi JSON exports.
- Summaries expose layout structure, row and module hierarchy, responsive overrides, custom classes, custom CSS, potential risk areas, and complexity indicators.
- `cases/README.md` now documents the preferred workflow: raw Divi JSON remains the source artifact, while `layout-summary.md` becomes the primary AI reasoning artifact.

---

## 2026-05-18 (Pass 3)

Added the `cases/` case testing foundation:

- `cases/README.md` — defines the case system purpose, LocalWP testing workflow, asset preference (JSON exports first), case lifecycle, connection to the operator system, browser automation positioning, AI readiness gate, and AI evaluation use.
- `cases/case-template.md` — reusable case structure covering: Case ID, Status, Problem Summary, Environment, Symptoms, Expected Behaviour, Related Assets, KB Docs To Consult, Safety Considerations, Operator Analysis, Proposed Fix, QA Checklist, Outcome, Lessons Learned, and a candidate `operator/memory.md` entry.
- `cases/example-case/case.md` — a completed demonstration case (hero section mobile overflow) showing the template in use with real KB routing, safety notes, operator analysis, QA checklist, and a candidate memory entry.
- `cases/example-case/outcome.md` — the resolved outcome for the demonstration case.

Updated `PROJECT.md` to add `cases/` as the fourth architecture layer (case testing layer) between the operator layer and the execution/browser layer.

Updated `STATE.md` to include `cases/` in the current folder list and update the next recommended step.

Updated `HANDOFF.md` to reflect the completed case foundation and the current recommended path forward.

---

## 2026-05-18 (Pass 2)

Added eight practical task examples to `operator/task-routing.md`:

- Build a new homepage hero section.
- Fix a mobile spacing or overflow issue.
- Improve page speed or LCP.
- Audit an existing page.
- Add or reuse a Divi template or layout.
- Troubleshoot a Divi module or preset issue.
- Prepare a page for deployment.
- Review a client site for visual polish.

Each example routes to existing KB docs and includes: docs to read first, expected operator behaviour, safety checks, and output/reporting expectations.

Updated `HANDOFF.md` and `STATE.md` to reflect the completed examples and current operator usability level.

---

## 2026-05-18

### Added

- Initialized Git for version safety before adding AI continuity files.
- Added root-level project-control and continuity documents:
  - `PROJECT.md`
  - `STATE.md`
  - `HANDOFF.md`
  - `AI_WORKFLOW.md`
  - `CHANGELOG.md`
- Added the `operator/` executive layer:
  - `operator/README.md`
  - `operator/operator-system.md`
  - `operator/source-priority.md`
  - `operator/safety-rules.md`
  - `operator/task-routing.md`
  - `operator/browser-automation.md`
  - `operator/memory.md`
- Added `.gitattributes` to keep Markdown line endings stable.

### Established

- Confirmed the project identity as the "Simplicity Tech Divi AI Operator".
- Confirmed that the existing mature Divi 5 KB remains the source knowledge layer.
- Established a three-layer model:
  - Knowledge layer.
  - Governance/operator layer.
  - Execution/browser layer.
- Established that browser automation is a future execution and QA layer, not the primary intelligence layer.
- Established additive, minimal-change development as the default approach.
- Established task routing, source priority, safety rules, browser automation governance, and operator memory as the first operator-layer controls.

### Deferred

- Snippets, layouts, and QA supporting libraries.

### Cleaned Up

- Fixed the broken `build/02_divi5_mechanics.md` Markdown link to the old `design-system/` folder.
- Replaced clear stale references to nonexistent `design-system/`, `accessibility/`, `design-patterns/`, and `client-work/` paths with current KB equivalents.
- Standardised obvious AI naming drift to "Simplicity Tech Divi AI Operator" where the text referred to this project's operator behaviour.
