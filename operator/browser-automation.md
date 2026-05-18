# Browser Automation Governance

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Active policy  
**Last Updated:** 2026-05-18

---

## Purpose

This file defines how Codex, Chrome, browser automation, or future browser-based AI tools should be used with WordPress and Divi.

Browser automation is useful, but it is not the intelligence layer.

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
6. Apply the smallest safe change.
7. Verify desktop, tablet, and mobile if visual.
8. Report what changed, what was checked, and what still needs review.
9. Record recurring findings in `operator/memory.md` when useful.

---

## First Milestone

The first milestone is AI-guided safe operation with controlled staging workflows.

Do not attempt full autonomous Divi automation until task routing, safety rules, QA expectations, and memory practices are proven.

