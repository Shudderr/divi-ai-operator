# AI Handoff

**Status:** Active continuity handoff  
**Last Updated:** 2026-05-18  
**Project:** Simplicity Tech Divi AI Operator

---

## Continue From Here

The current objective is to evolve the existing Divi 5 knowledge base into the Simplicity Tech Divi AI Operator without disrupting the mature KB architecture.

The immediate continuity/governance phase is complete, and the initial `operator/` executive layer has been added.

---

## Current Active Objective

Use the new operator layer as the executive system for future AI-assisted work:

- Source priority.
- Task routing.
- Safety rules.
- Browser automation boundaries.
- Operational memory.

---

## Recommended Next Task

Review the new `operator/` docs, then run a focused cleanup pass for stale references and naming drift if approved.

Do not automate Divi directly yet.

---

## Important Constraints

Do not:

- Restructure the repository.
- Move existing KB files.
- Rename existing folders.
- Migrate content into a new `knowledge/` folder.
- Perform broad cleanup/refactoring during this phase.
- Make browser automation the intelligence layer.
- Publish automatically or modify production blindly.

Do:

- Keep changes additive.
- Preserve existing links where possible.
- Reference existing KB docs instead of duplicating Divi knowledge.
- Use the unified project identity: "Simplicity Tech Divi AI Operator".
- Treat staging-first workflows as mandatory for real site work.
- Report changes clearly after each implementation step.

---

## Current Assumptions

- The existing KB is valuable and remains authoritative.
- Internal Simplicity Tech standards should override external sources.
- Official Elegant Themes/Divi documentation is trusted as a secondary source.
- Community tutorials and blog posts are lower-trust and require validation.
- Future browser automation will be useful, but it must follow `operator/browser-automation.md` and `operator/safety-rules.md`.

---

## Unfinished Work

Not yet completed:

- Cleanup of stale references.
- Naming consistency pass from "Claude/Claude Code" to "Simplicity Tech Divi AI Operator".
- Snippets/layouts/QA supporting libraries.

---

## Warnings For Future AI Sessions

This project is not an empty scaffold. Read `PROJECT.md`, `STATE.md`, and `AI_WORKFLOW.md` before suggesting major changes.

The existing KB architecture is intentional. Add governance on top; do not replace it.

If asked to implement browser automation, first confirm that safety rules, staging context, target URL, and allowed actions are clear.
