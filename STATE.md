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
- `audits/`
- `build/`
- `features/`
- `performance/`
- `resources/`
- `troubleshooting/`
- `workflows/`

The original KB folders remain the source knowledge system and should not be moved or renamed. The `operator/` folder is an additive executive layer.

---

## Foundational Docs Already Identified

Important existing files:

- `README.md` - current overview and user guidance.
- `INDEX.md` - main KB index and task references.
- `build/06_design_logic.md` - Simplicity design decision logic.
- `audits/00_MASTER_INDEX.md` - audit routing.
- `resources/template-library.md` - template and reusable resource library.
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

- Some docs still refer to "Claude", "Claude Code", or generic AI language instead of the unified identity "Simplicity Tech Divi AI Operator".
- Some stale references point to nonexistent folder concepts such as `design-system/`, `accessibility/`, `design-patterns/`, or `client-work/`.
- At least one relative Markdown link was previously identified as broken: `build/02_divi5_mechanics.md` references `../design-system/global-variable-strategy.md`.
- Some docs contain older planning notes that may not match the current architecture.
Do not perform broad cleanup until the governance layer is established.

---

## Current Priorities

1. Preserve the existing KB architecture.
2. Use the `operator/` layer as the executive layer for AI work.
3. Keep browser automation governed by `operator/browser-automation.md`.
4. Later, clean stale references and naming drift in a controlled pass.
5. Add snippets/layouts/QA libraries only when there is a concrete need.

---

## Next Recommended Step

Run a focused cleanup pass for stale references and naming drift, after confirming the operator layer content is accepted.

Do not restructure existing KB folders.
