# Project State

**Status:** Living current-state document  
**Last Updated:** 2026-05-18  
**Project:** Simplicity Tech Divi AI Operator

---

## Current Summary

This repository is a mature Divi 5 knowledge base evolving into the Simplicity Tech Divi AI Operator.

The project has moved beyond pure knowledge gathering. The current priority is to establish AI continuity, governance, routing, safety, and future browser automation control without disrupting the existing KB.

---

## Existing Architecture

Current root-level files:

- `README.md`
- `INDEX.md`
- `quick-reference.md`
- `site-map.md`
- `KB_ARTICLE_TEMPLATE.md`
- `DIVI5_SECTION_TEMPLATE.json`

Current folders:

- `operator/`
- `cases/`
- `audits/`
- `build/`
- `features/`
- `performance/`
- `resources/`
- `troubleshooting/`
- `workflows/`

The `operator/` layer now includes a capability matrix (`operator/divi-builder-capabilities.md`) that separates VERIFIED, ASSUMED, and UNKNOWN Divi Builder interactions.

The `resources/external-sources/` layer now indexes official Elegant Themes / Divi 5 references and defines a staged learning plan before further Builder execution tests.

The original KB folders remain the source knowledge system and should not be moved or renamed. The `operator/` folder is an additive executive layer.

---

## Foundational Docs Already Identified

Important existing files:

- `README.md` - current overview and user guidance.
- `INDEX.md` - main KB index and task references.
- `build/06_design_logic.md` - Simplicity design decision logic.
- `audits/00_MASTER_INDEX.md` - audit routing.
- `resources/template-library.md` - template and reusable resource library.
- `resources/external-sources/elegant-themes-index.md` - official Elegant Themes / Divi 5 source index.
- `resources/external-sources/divi-5-builder-learning-plan.md` - staged official-doc ingestion plan before more Builder execution.
- `workflows/deployment-checklist.md` - launch and staging-first deployment guidance.

---

## What Has Been Analysed

The repository structure has been reviewed.

Key findings:

- The KB is already mature and should not be replaced by a new scaffold.
- The correct direction is to add governance and operator layers on top.
- Browser automation should be introduced later as controlled execution, not primary intelligence.
- The repository was not a Git repo before this phase; Git has now been initialized.

---

## What Exists Now

As of this state document, the AI continuity/governance files have been introduced:

- `PROJECT.md`
- `STATE.md`
- `HANDOFF.md`
- `AI_WORKFLOW.md`
- `CHANGELOG.md`

These files are intended to support continuity across ChatGPT, Codex, Claude, future AI operators, and human contributors.

The initial operator layer has also been introduced:

- `operator/README.md`
- `operator/operator-system.md`
- `operator/source-priority.md`
- `operator/safety-rules.md`
- `operator/browser-automation.md`
- `operator/task-routing.md`
- `operator/memory.md`
- `operator/wp-divi-ui-map.md`
- `operator/divi-builder-capabilities.md`

The official external source layer has been introduced:

- `resources/external-sources/elegant-themes-index.md`
- `resources/external-sources/divi-5-builder-learning-plan.md`
- `resources/external-sources/summaries/stage-1-builder-interface.md`
- `resources/external-sources/summaries/stage-2-responsive-system.md`
- `resources/external-sources/summaries/stage-3-navigation-and-traversal.md`
- `resources/external-sources/summaries/stage-4-presets-and-global-systems.md`

The Divi layout summarizer foundation now exists:

- `scripts/summarize-divi-layout.js`
- `cases/spacing-and-padding/home.json`
- `cases/spacing-and-padding/layout-summary.md`
- `cases/spacing-and-padding/case.md`

`cases/spacing-and-padding/` is the canonical example for using a raw Divi export as the source artifact and `layout-summary.md` as the preferred AI reasoning artifact.

---

## Planned But Not Yet Implemented

Future supporting libraries may include:

- `snippets/`
- `layouts/`
- `qa/`

Those should be additive only and should reference the existing KB rather than duplicating it.

---

## Known Issues And Risks

Known risks:

- Tool-specific references to ChatGPT, Codex, and Claude remain only where they describe supported AI tools or the local folder path.
- A focused cleanup pass replaced known stale folder references to older planned folders with current KB equivalents.
- The previously identified broken Markdown link in `build/02_divi5_mechanics.md` has been fixed.
- The last Builder workflow showed the operator is not yet confident enough navigating Divi 5 Builder layers, viewports, and settings.
- Official docs can inform the operator, but they do not verify local execution capability.
- Some docs contain older planning notes that may not match the current architecture.
Do not perform broad cleanup without a focused scope and reviewable diff.

---

## Current Priorities

1. Preserve the existing KB architecture.
2. Use the `operator/` layer as the executive layer for AI work.
3. Complete official Divi 5 source ingestion before further Builder execution tests.
4. Keep browser automation governed by `operator/browser-automation.md`.
5. Add snippets/layouts/QA libraries only when there is a concrete need.
6. Keep future documentation cleanup focused and reviewable.

---

## Next Recommended Step

The case testing and summarizer foundations are in place, but further Builder execution is paused.

Stage 1 of the official Divi 5 Builder learning plan is complete. `resources/external-sources/summaries/stage-1-builder-interface.md` summarises official Builder interface docs and lists local verification targets without marking them VERIFIED.

Stage 2 is complete. `resources/external-sources/summaries/stage-2-responsive-system.md` summarises official responsive-system docs, breakpoint behaviour, Responsive Editor workflows, units/sizing concepts, visibility/overflow controls, likely responsive failure patterns, and local verification targets without marking them VERIFIED.

Stage 3 is complete. `resources/external-sources/summaries/stage-3-navigation-and-traversal.md` summarises official navigation and traversal docs covering Layers View, Wireframe View, core hierarchy structure, nested rows, specialty sections, canvas navigation risks, structural traversal workflows, structural failure patterns, and candidate capability-matrix items — all marked official-doc-backed only.

Stage 4 is complete. `resources/external-sources/summaries/stage-4-presets-and-global-systems.md` summarises official presets and global systems docs covering Element Presets, Option Group Presets, stacked/nested presets, Preset Manager, Design Variables, Variable Generator, Style Inspector, Theme Builder templates, dynamic content, inheritance/propagation models, rollback complexity, common global-system failure patterns, and candidate capability-matrix items — all marked official-doc-backed only.

Next:

- Continue with Stage 5 in `resources/external-sources/divi-5-builder-learning-plan.md`.
- Map official-doc-backed knowledge from Stages 1–4 into `operator/divi-builder-capabilities.md` under a clearly separated official-doc-backed section.
- Do not mark any Stage 1–4 item as VERIFIED; keep VERIFIED entries limited to behaviours already observed locally.
- Resume controlled LocalWP execution tests only after Stage 5 mapping is complete.

Do not restructure existing KB folders.
