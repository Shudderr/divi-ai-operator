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

Pause further Divi Builder execution tests.

The next task is official Divi 5 source ingestion:

- Read `resources/external-sources/elegant-themes-index.md`.
- Follow `resources/external-sources/divi-5-builder-learning-plan.md`.
- Summarise official Builder interface, responsive, layout/navigation, Wireframe/Layers, presets, design variables, Style Inspector, Theme Builder, module, portability, and performance references.
- Map official-doc-backed knowledge into operator capabilities without marking it VERIFIED.

Before executing any Divi Builder interaction, check `operator/divi-builder-capabilities.md` first. All VERIFIED capabilities are documented there with date and method. UNKNOWN and OFFICIAL-DOC-BACKED capabilities must be locally verified before being used as a basis for execution.

Only after the staged learning plan is complete should controlled LocalWP execution tests resume. Do not automate Divi directly yet. Do not continue `cases/spacing-and-padding/`/CASE-001 until explicitly re-approved.

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
- Official source knowledge is not the same as locally verified execution knowledge.
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

If asked to resume Builder execution, first confirm that the official Divi 5 learning plan has been completed and that the target action is VERIFIED or explicitly approved for a narrow verification session.
