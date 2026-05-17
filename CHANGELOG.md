# Changelog

Human-readable history of meaningful project milestones.

This file should track architectural decisions, governance additions, operator-layer evolution, and major documentation changes. It should not become a noisy log of every small edit.

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

- Cleanup of stale references and naming drift.
- Snippets, layouts, and QA supporting libraries.
