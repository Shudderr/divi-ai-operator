# Operator Memory

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Living operational memory  
**Last Updated:** 2026-05-18

---

## Purpose

This file preserves operational lessons that should survive across AI sessions.

Use it for:

- Recurring Divi issues.
- Plugin conflicts.
- Failed experiments.
- Styling decisions.
- "Never do this again" lessons.
- Useful fixes.
- Browser automation findings.
- Divi 5 quirks.

Do not use this file for generic Divi tutorials. Link to KB files instead.

---

## Memory Entry Format

```markdown
### YYYY-MM-DD - Short Title

**Context:** What was being worked on.
**Observation:** What happened.
**Decision/Fix:** What should be done.
**Related Files:** Relevant KB or operator files.
```

---

## Active Operational Notes

### 2026-05-18 - Existing KB Is Authoritative

**Context:** Project baseline and operator layer creation.
**Observation:** The repository already contains a mature Divi 5 KB with strong architecture.
**Decision/Fix:** Add governance and operator files on top. Do not restructure the KB into a new hierarchy.
**Related Files:** `PROJECT.md`, `STATE.md`, `AI_WORKFLOW.md`

### 2026-05-18 - Browser Automation Is Not The Intelligence Layer

**Context:** Future Codex/Chrome/Divi operation planning.
**Observation:** Browser tools will be useful for inspection, QA, and controlled edits.
**Decision/Fix:** Keep intelligence in internal docs, task routing, safety rules, and standards.
**Related Files:** `operator/browser-automation.md`, `operator/safety-rules.md`

### 2026-05-18 - Stale Reference Cleanup Completed

**Context:** Initial repo analysis found stale references to older planned folders.
**Observation:** Some docs mentioned paths such as `design-system/`, `accessibility/`, `design-patterns/`, and `client-work/`.
**Decision/Fix:** Replaced clear stale references with current KB equivalents. Keep future cleanup narrow and avoid rewriting technical guidance.
**Related Files:** `STATE.md`, `HANDOFF.md`

---

## Recurring Divi Issues

No project-specific recurring issue entries yet.

---

## Plugin Conflicts

No plugin conflict entries yet.

---

## Failed Experiments

No failed experiment entries yet.

---

## Styling Decisions

No additional styling decision entries yet.

---

## Browser Automation Findings

No browser automation findings yet.

---

## Process / Safety

### 2026-05-18 - Direct Database Mutation Is Not An Approved Execution Path

**Context:** CASE-001 Stats responsive fix implementation. Operator was instructed to prefer Divi Builder setting-level fixes first, use scoped CSS only as fallback.
**Observation:** Operator skipped Divi Builder inspection entirely and injected CSS directly into the MySQL database via Node.js scripts. The database approach was not approved and was not part of the agreed implementation plan. The Divi 4 `_et_pb_custom_css` post meta field was also used first — it is not rendered by Divi 5's CSS pipeline. WordPress custom CSS must be stored in `wp_posts` with `post_type = 'custom_css'` and `post_name` matching the active theme slug (`'divi'`). All database changes were rolled back.
**Decision/Fix:** Direct database mutation (wp_posts, wp_postmeta, wp_options, cache files) requires explicit user approval before execution. The required execution order is: (1) Open page in browser, (2) Open Divi Builder, (3) Inspect responsive controls in the relevant section/row/column, (4) Apply Builder setting-level fix if controls exist, (5) Document finding and seek approval before using CSS fallback, (6) If CSS fallback is approved, document it as fallback — not first-line execution.
**Related Files:** `cases/spacing-and-padding/case.md`, `operator/safety-rules.md`, `operator/browser-automation.md`
