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

Use the operator and case layers as the working system for AI-assisted Divi work:

- Source priority and task routing.
- Safety rules and browser automation boundaries.
- Operational memory.
- Reproducible Divi test cases via `cases/`.

The operator layer is fully documented with eight task examples. The `cases/` system is now in place as the reproducible testing and AI evaluation layer.

The Divi layout summarizer foundation is also in place. `cases/spacing-and-padding/` is the canonical example showing the preferred flow from raw Divi export to `layout-summary.md`, operator reasoning, safe fix plan, and QA expectations.

---

## Recommended Next Task

Continue `cases/spacing-and-padding/` through real LocalWP operator analysis: capture screenshots, verify the spacing symptoms visually, apply only the staged safe fix plan if approved, then record the resolved outcome.

Each resolved case should be evaluated for a candidate `operator/memory.md` entry.

When operator reasoning and LocalWP workflows are proven stable, browser automation (Playwright MCP or equivalent) can be introduced as the execution layer against defined cases.

Do not automate Divi directly yet. Do not add snippets, layouts, or QA folders until there is a concrete need.

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

- Snippets/layouts/QA supporting libraries.
- Any further naming cleanup should be limited to clear project/operator references, not tool-specific mentions.

---

## Warnings For Future AI Sessions

This project is not an empty scaffold. Read `PROJECT.md`, `STATE.md`, and `AI_WORKFLOW.md` before suggesting major changes.

The existing KB architecture is intentional. Add governance on top; do not replace it.

If asked to implement browser automation, first confirm that safety rules, staging context, target URL, and allowed actions are clear.
