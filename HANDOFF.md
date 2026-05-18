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

The **Layers View verification session (layers-view-001)** is complete. All 8 verification questions returned VERIFIED. `operator/divi-builder-capabilities.md` has been updated with new entries §1.10–§1.14.

**Remaining Priority 1 items from `stage-5-operator-mapping.md` §8 — still unverified:**

1. Style Inspector access and read-only behaviour.
2. Wireframe View structural blocks.
3. Responsive Editor panel for a low-risk field (Tablet and Phone canvas widths).

The next browser session should target **one of these three items** as a narrow, read-only verification pass. Each verified item should be recorded in `operator/divi-builder-capabilities.md` with date, method, and caveats.

Before executing any Divi Builder interaction, check `operator/divi-builder-capabilities.md` first. All VERIFIED capabilities are documented there with date and method. UNKNOWN and OFFICIAL-DOC-BACKED capabilities must be locally verified before being used as a basis for execution.

Official Divi 5 source ingestion (Stages 1–5) is complete. The staged learning plan is fully done.

Do not continue `cases/spacing-and-padding/`/CASE-001 until Priority 1 verification targets are complete.

---

## Locally VERIFIED Browser Automation Behaviours (as of layers-view-001)

- Canvas content lives inside iframe `#et-vb-app-frame`.
- Canvas hover controls may be absent from DOM-at-rest and dynamically injected after hover/mouseover.
- Layers "Open All" expands the full tree synchronously (in layers-view-001); prior session showed asynchronous behaviour — always wait and verify via re-query.
- Multiple Builder panels can coexist, including Layers plus settings panels.
- **Layers panel is VERIFIED as the preferred structure-first traversal method.** See §1.10–§1.14 in `operator/divi-builder-capabilities.md`.
- Outer section-row button in Layers opens settings — inner toggle sub-button toggles expand/collapse.
- Stats section is a Specialty Section — confirmed via Layers tree structure and breadcrumb.
- Breadcrumbs in settings panel show full parent chain (Page → Section → Column → Module).
- Canvas auto-scrolls to the element selected from Layers.

---

## Remaining Unknowns (after layers-view-001)

- Style Inspector access and read-only behaviour.
- Wireframe View internal structure.
- Tablet and Phone canvas widths.
- Inner Row / Inner Column settings panel controls.
- Save Dropdown sub-options.
- Canvas hover-to-select reliability.

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

If asked to resume Builder execution, first confirm that the official Divi 5 learning plan has been completed and that the target action is VERIFIED or explicitly approved for a narrow verification session. During any browser session, verify state after every interaction before proceeding.
