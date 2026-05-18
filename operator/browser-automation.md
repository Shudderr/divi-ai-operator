# Browser Automation Governance

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Active policy  
**Last Updated:** 2026-05-18

---

## Purpose

This file defines how Codex, Chrome, browser automation, or future browser-based AI tools should be used with WordPress and Divi.

Browser automation is useful, but it is not the intelligence layer.

Browser automation must also be state-aware. A clicked button, completed tool call, or successful selector match is not proof that Divi changed state.

---

## Browser Automation Is

- An execution layer.
- A QA layer.
- An inspection layer.
- A repetitive edit layer.
- A screenshot and validation layer.

It can help apply, inspect, and verify decisions already made through documentation, standards, and task routing.

---

## Browser Automation Is Not

- The source of truth.
- Permission to improvise.
- A substitute for task routing.
- A substitute for QA.
- A substitute for internal standards.
- Permission to publish live changes.
- Permission to overwrite global layouts or settings.

---

## Before Using Browser Automation

Confirm:

- Target site URL.
- Environment type: local, staging, or production.
- Login/access expectations.
- Allowed actions.
- Disallowed actions.
- Whether edits are read-only, draft, staging, or production.
- Backup or rollback path for high-risk work.
- QA requirements.

If the environment is production, default to read-only inspection unless explicit approval is given.

---

## Allowed Uses

Good browser automation tasks:

- Inspect a staging site.
- Open Divi Builder.
- Check module settings.
- Confirm whether presets or variables are being used.
- Apply a narrowly defined edit on staging.
- Duplicate approved sections.
- Add approved CSS classes.
- Test desktop, tablet, and mobile views.
- Capture screenshots for QA.
- Verify form behaviour.
- Check visual regressions after changes.

---

## Restricted Uses

Do not use browser automation to:

- Publish automatically.
- Make production edits without explicit approval.
- Invent new page architecture without routing.
- Apply broad global edits without staging validation.
- Overwrite Theme Builder templates without approval.
- Change global presets or variables without approval.
- Ignore the KB because the browser is available.

---

## Required Workflow

For browser-assisted changes:

1. Route the task using `operator/task-routing.md`.
2. Read the relevant KB files.
3. Confirm the intended change.
4. Confirm environment and allowed actions.
5. Check `operator/divi-builder-capabilities.md` — confirm the target interaction is VERIFIED before executing it. Do not proceed on ASSUMED or UNKNOWN capabilities.
6. Confirm the target element's full parent chain (Section type → Row → Column → Module) via structure-first navigation before attempting any canvas interaction or settings edit.
7. If the target field has visual styling, confirm whether the value is local, preset-controlled, or variable-referenced (use Style Inspector when locally verified) before editing. Do not edit a preset or variable without explicit approval.
8. Apply the smallest safe change.
9. Verify desktop, tablet, and mobile if visual.
10. Report what changed, what was checked, and what still needs review.
11. Record recurring findings in `operator/memory.md` when useful.

---

## State-Aware Interaction Rule

Every browser automation interaction with Divi must follow this flow:

1. Act.
2. Wait.
3. Verify state changed.
4. Re-query UI.
5. Continue or stop.

Do not treat click success as task success.

For Divi specifically:

- Verify visible panel, modal, tree, field, breakpoint, or canvas state after each interaction.
- Re-query the DOM after state changes; do not reuse stale element assumptions.
- Distinguish **DOM-at-rest** from **DOM-after-interaction**. Some controls do not exist until hover, mouseover, focus, expansion, or another interaction injects them.
- Do not conclude a control is missing from a pre-hover DOM query if the control is known or suspected to be hover-injected.
- Stop and report when visible state does not match the expected state after an interaction.

Known state-aware cases from the 2026-05-18 read-only verification session:

| Behaviour | Status | Operator rule |
|-----------|--------|---------------|
| Layers "Open All" can appear not to expand immediately | VERIFIED | Wait, then verify the Layers tree state before proceeding |
| Layers panel state can update asynchronously | VERIFIED | Re-query panel state after interaction |
| Multiple panels can coexist, such as Layers plus Section settings | VERIFIED | Confirm the active target panel before clicking |
| Canvas content is separated into iframe `#et-vb-app-frame` | VERIFIED | Query canvas content inside the iframe, not from the parent document |
| Canvas hover controls may not exist in the DOM at rest | VERIFIED | Hover/mouseover before searching for hover controls |
| Hover controls are dynamically injected after hover/mouseover | VERIFIED | Treat pre-hover and post-hover DOM as different states |

---

## First Milestone

The first milestone is AI-guided safe operation with controlled staging workflows.

Do not attempt full autonomous Divi automation until task routing, safety rules, QA expectations, and memory practices are proven.
