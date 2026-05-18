# Divi 5 Builder Learning Plan

**Project:** Simplicity Tech Divi AI Operator
**Status:** Active learning gate before further Builder execution tests
**Last Updated:** 2026-05-18
**Primary Index:** `resources/external-sources/elegant-themes-index.md`

---

## Purpose

This plan stages the operator's Divi 5 Builder learning before any further LocalWP execution tests.

The goal is not to duplicate Elegant Themes documentation. The goal is to extract concise, operator-useful summaries from official sources, then map those summaries to safe capabilities and verification targets.

Official docs can inform the operator. A capability is not VERIFIED for execution until it has been tested locally and documented in `operator/divi-builder-capabilities.md`.

---

## Ground Rules

- Pause further Divi Builder execution tests until this plan reaches Stage 6.
- Do not perform LocalWP editing while working through Stages 1-5.
- Do not run browser automation during source ingestion.
- Do not modify `CASE-001` while completing this learning layer.
- Prefer official Elegant Themes / Divi Help Center and Documentation sources.
- Summaries must be concise and task-oriented; do not copy long article content.
- Any operational claim must be labelled as official-doc-backed, locally verified, or still unknown.

---

## Stage 1: Builder Interface Docs

**Objective:** Read and summarise official Builder interface docs.

**Primary sources:**

- `resources/external-sources/elegant-themes-index.md` -> Divi 5 Visual Builder
- `resources/external-sources/elegant-themes-index.md` -> Visual Builder Interface

**Summarise:**

- Builder entry concepts.
- Page structure concepts: sections, rows, columns, modules.
- Top bar, side bar, modal, and panel terminology.
- Save/exit concepts.
- Known interface affordances that may later become verification targets.

**Output:**

- A concise operator-facing summary, preferably in a future source-summary file or a scoped update to the capability matrix.
- A list of local verification targets for interface navigation.

**Completion gate:**

- Operator can explain the Builder interface using official terminology without claiming untested execution confidence.

---

## Stage 2: Responsive System Docs

**Objective:** Read and summarise official responsive system docs.

**Primary sources:**

- `resources/external-sources/elegant-themes-index.md` -> Responsive Editor
- `resources/external-sources/elegant-themes-index.md` -> Responsive Options And Breakpoints

**Summarise:**

- Default and optional Divi 5 breakpoints.
- Sitewide responsive breakpoint concepts.
- Responsive Editor purpose and field-level inheritance.
- Relationship between preview buttons, responsive field controls, and edited values.
- How responsive values should be verified locally.

**Output:**

- A concise responsive-system summary.
- A verification checklist for desktop/tablet/phone and optional breakpoint behaviour.

**Completion gate:**

- Operator can distinguish official breakpoint behaviour from locally measured breakpoint widths.

---

## Stage 3: Layout And Navigation Docs

**Objective:** Read and summarise official layout/navigation docs, including Wireframe and Layers if available.

**Primary sources:**

- `resources/external-sources/elegant-themes-index.md` -> Wireframe View
- `resources/external-sources/elegant-themes-index.md` -> Layers / Navigation
- `resources/external-sources/elegant-themes-index.md` -> Module Documentation

**Summarise:**

- Intended use of Wireframe View.
- Intended use of Layers View.
- Differences between visual canvas targeting, structural navigation, and command/search navigation.
- Module documentation patterns for common modules.
- Which navigation routes are promising but still need local verification.

**Output:**

- A compact navigation summary.
- Candidate updates to `operator/divi-builder-capabilities.md` under Unknown / Needs Verification.

**Completion gate:**

- Operator can name the safest official-doc-backed navigation candidates without treating them as verified execution workflows.

---

## Stage 4: Presets And Design Variable Docs

**Objective:** Read and summarise presets/design variable docs.

**Primary sources:**

- `resources/external-sources/elegant-themes-index.md` -> Presets And Design Variables
- `resources/external-sources/elegant-themes-index.md` -> Style Inspector

**Summarise:**

- Element Presets.
- Option Group Presets.
- Stacked and nested presets.
- Global Variables / Design Variables.
- Style Inspector's role in finding where styles, content, and presets are applied.
- Approval risks for presets and variables because they can affect more than one element.

**Output:**

- A compact design-system summary.
- A list of restricted or approval-required actions to compare with `operator/divi-builder-capabilities.md`.

**Completion gate:**

- Operator can recognise design-system controls and avoid changing global styling systems without approval.

---

## Stage 5: Map Official Docs To Operator Capabilities

**Objective:** Convert official-doc-backed knowledge into operator capability language without overstating execution readiness.

**Tasks:**

- Review Stage 1-4 summaries.
- Update `operator/divi-builder-capabilities.md` only where needed to add official-doc-backed references, unknowns, or future verification targets.
- Keep VERIFIED entries limited to behaviours already observed locally.
- Add cross-references from capability entries to official source topics when useful.
- Preserve the distinction between:
  - official-doc-backed knowledge,
  - locally verified execution knowledge,
  - assumptions,
  - unknowns.

**Output:**

- Capability matrix updates that improve decision-making before execution.
- A short list of what should be tested first when LocalWP execution resumes.

**Completion gate:**

- The capability matrix clearly tells the operator which actions are safe, which are official-doc-backed only, and which remain unknown.

---

## Stage 6: Resume Controlled LocalWP Execution Tests

**Objective:** Only after Stages 1-5 are complete, resume controlled LocalWP execution tests.

**Allowed scope when resumed:**

- Read-only Builder inspection first.
- One capability target per test.
- No CASE-001 edits unless explicitly re-approved.
- No global presets, variables, Theme Builder templates, Theme Options, database edits, or migrator actions without explicit approval.
- Document each verified capability with date, method, environment, caveats, and source relationship.

**Recommended first verification targets:**

- Layers panel internal structure.
- Wireframe View internal structure.
- Tablet and Phone canvas widths.
- Responsive Editor panel for a low-risk field.
- Style Inspector read-only behaviour.
- Module settings consistency for Text and Button modules.

**Completion gate:**

- Each successful local test is recorded in `operator/divi-builder-capabilities.md` as VERIFIED with caveats.

---

## Working Definition Of Done

This learning plan is complete when:

- Official source summaries exist for interface, responsive, navigation/layout, presets/design variables.
- `operator/divi-builder-capabilities.md` clearly distinguishes doc-backed knowledge from locally verified execution knowledge.
- The next LocalWP test has a narrow target, a no-edit inspection path, and a rollback-safe boundary.
