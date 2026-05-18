# Changelog

Human-readable history of meaningful project milestones.

This file should track architectural decisions, governance additions, operator-layer evolution, and major documentation changes. It should not become a noisy log of every small edit.

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
