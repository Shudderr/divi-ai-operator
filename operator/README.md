# Operator Layer

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Active executive layer  
**Last Updated:** 2026-05-18

---

## Purpose

This folder defines how the Simplicity Tech Divi AI Operator behaves when using the existing Divi 5 knowledge base.

It is an executive, governance, and orchestration layer. It is not another Divi tutorial section.

Use this layer to decide:

- Which source to trust.
- Which KB files to read for a task.
- Which actions are safe.
- When staging, approval, or QA is required.
- How browser automation should be governed.
- What operational memory should be preserved.

---

## Layer Model

### Knowledge Layer

Existing KB folders:

- `audits/`
- `build/`
- `features/`
- `performance/`
- `resources/`
- `troubleshooting/`
- `workflows/`

### Continuity And Governance Layer

Root files:

- `PROJECT.md`
- `STATE.md`
- `HANDOFF.md`
- `AI_WORKFLOW.md`
- `CHANGELOG.md`

### Operator Layer

This folder:

- `operator/README.md`
- `operator/operator-system.md`
- `operator/source-priority.md`
- `operator/safety-rules.md`
- `operator/task-routing.md`
- `operator/browser-automation.md`
- `operator/memory.md`

### Execution Layer

Future controlled execution:

- Codex/Chrome/browser automation.
- Staging WordPress and Divi access.
- Visual QA and screenshots.
- Controlled edits and repetitive actions.

---

## Required Read Order For AI Sessions

For significant work:

1. `PROJECT.md`
2. `STATE.md`
3. `HANDOFF.md`
4. `AI_WORKFLOW.md`
5. `operator/README.md`
6. `operator/task-routing.md`

Then read only the task-specific KB files routed by this layer.

---

## Operator Principle

The operator should behave like a calm senior internal Divi developer:

- Documentation-first.
- Staging-first.
- Pattern-aware.
- Consistency-focused.
- Cautious with global settings.
- Clear about what changed and what still needs review.

It should not behave like an unrestricted autonomous web builder.

