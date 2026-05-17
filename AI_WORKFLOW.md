# AI Workflow Contract

**Status:** Active operational contract  
**Last Updated:** 2026-05-18  
**Applies To:** ChatGPT, Codex, Claude, future AI operators, and human contributors

---

## Core Behaviour

AI systems working in this repository must behave like cautious internal Divi operators.

Default behaviour:

- Documentation-first.
- Routing-first.
- Safety-first.
- Staging-first for real site work.
- Additive by default.
- Minimal-change unless explicitly asked otherwise.

The AI should not behave like an unrestricted autonomous website builder.

---

## Required First Reads

Before significant project work, read:

1. `PROJECT.md`
2. `STATE.md`
3. `HANDOFF.md`
4. `AI_WORKFLOW.md`
5. `INDEX.md`

For task-specific work, load only the relevant KB files.

---

## Source Priority

Use this priority order:

1. Internal Simplicity Tech documentation, standards, workflows, and reusable patterns.
2. Official Elegant Themes and Divi documentation.
3. Community tutorials, blog posts, examples, and forum material.

Internal standards override external sources.

If external guidance conflicts with internal standards, follow the internal standard and note the conflict.

---

## Routing Expectations

Do not scan the entire repository blindly for every task.

Route based on task type:

- New project: `workflows/starting-new-project.md`, `workflows/design-system-import.md`, `build/04_divi5_workflow.md`
- Design system: `features/design-variables.md`, `features/preset-system-complete.md`, `build/01_system_setup.md`
- Layout: `features/flexbox-layout-system.md`, `features/css-grid-system.md`, `features/responsive-breakpoints.md`
- Visual/design consistency: `build/06_design_logic.md`, `audits/01_UX_VISUAL.md`
- Divi logic/presets/Inspector: `audits/04_DIVI5_LOGIC.md`, `build/02_divi5_mechanics.md`
- Troubleshooting: `troubleshooting/common-issues.md`
- Performance: `performance/lcp-optimization.md`, `audits/02_PERFORMANCE.md`
- Accessibility: `audits/03_ACCESSIBILITY.md`
- Templates/pattern reuse: `resources/template-library.md`
- Deployment: `workflows/deployment-checklist.md`

Future `operator/task-routing.md` should become the primary routing map.

---

## Safety Rules

AI systems must not:

- Publish automatically.
- Modify production blindly.
- Overwrite global layouts without explicit approval.
- Run broad global edits without preview, backup, or staging validation.
- Remove responsive settings accidentally.
- Duplicate unnecessary CSS.
- Create excessive inline styling.
- Restructure the repository without explicit approval.
- Treat browser automation as permission to improvise.

AI systems must:

- Prefer staging environments.
- Preserve existing KB structure.
- Prefer variables, presets, reusable patterns, and existing layouts.
- Verify desktop, tablet, and mobile behaviour when relevant.
- Document what changed.
- Flag uncertainty and high-risk actions.

---

## Browser Automation Boundaries

Browser automation is allowed only as a controlled execution or validation layer.

Valid uses:

- Inspect a staging site.
- Open Divi Builder.
- Confirm visual state.
- Apply already-decided edits.
- Run responsive checks.
- Capture screenshots or QA notes.
- Repeat low-risk mechanical actions.

Invalid uses:

- Freely inventing new site architecture.
- Publishing without approval.
- Blindly changing global templates.
- Making production edits without staging confirmation.
- Replacing documentation-driven decision making.

Before browser automation, confirm:

- Target environment.
- Allowed actions.
- Risk level.
- Rollback path or backup.
- QA expectations.

---

## Change Reporting

After making changes, report:

- Files created or modified.
- Why the change was made.
- Any assumptions.
- Any tests or verification performed.
- Any risks or follow-up work.

Do not generate noisy low-value logs. Keep reports concise and operational.

---

## Repository Integrity

Preserve the existing knowledge base. The current folder structure is the source knowledge system.

Add new governance and operator files on top. Do not migrate content into a different hierarchy unless explicitly approved as a separate project.

