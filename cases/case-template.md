# Case Template

**Project:** Simplicity Tech Divi AI Operator  
**Template Version:** 1.0  
**Usage:** Copy this file to `cases/<case-id>/case.md` and complete each section.

---

## Case ID

`CASE-XXX`

Use a sequential number. Examples: `CASE-001`, `CASE-002`.

---

## Status

`open` / `investigating` / `resolved` / `archived`

---

## Problem Summary

One or two sentences describing the issue clearly. Write this as if briefing someone who has not seen the site.

Example: *The hero section on the homepage causes horizontal overflow on mobile screens narrower than 375px. The row padding pushes content outside the column boundary.*

---

## Environment

| Field | Value |
|---|---|
| Environment type | LocalWP / Staging / Production (read-only) |
| Divi version | e.g. 5.x |
| WordPress version | e.g. 6.x |
| Active theme | Divi / child theme name |
| Relevant plugins | e.g. WooCommerce, Gravity Forms |
| Site URL | LocalWP: `http://sitename.local` or staging URL |
| Page affected | e.g. Homepage — hero section |

---

## Symptoms

Describe what is observed. Be specific.

- What breaks or appears incorrectly.
- On which device or breakpoint.
- What the user sees.
- Any console errors or relevant browser inspection findings.

---

## Expected Behaviour

Describe what should happen when the issue is resolved.

---

## Related Assets

List the assets available for this case. Add rows as needed.

| Asset | File | Notes |
|---|---|---|
| Divi layout export | `layout.json` | Preferred. Export section or page from Divi Builder. |
| Custom CSS | `custom.css` | Custom CSS applied to the affected area, if any. |
| Desktop screenshot | `screenshots/desktop.png` | Optional — supplement to JSON export. |
| Mobile screenshot | `screenshots/mobile.png` | Optional — supplement to JSON export. |
| Outcome notes | `outcome.md` | Complete after resolution. |

Prefer JSON exports over screenshots wherever possible. See `cases/README.md` for the asset preference rationale.

---

## KB Docs To Consult

List internal KB files relevant to this case, in read order. Use `operator/task-routing.md` to identify the correct routing for this task type.

1. (primary doc)
2. (support doc)
3. (additional support if needed)

---

## Safety Considerations

State any risks or constraints relevant to this case before the operator acts.

Examples:

- Test on LocalWP only. Do not reproduce on a live staging site without explicit approval.
- The affected section uses a global preset — any change may affect other pages.
- A plugin conflict is suspected — do not update plugins before isolating the cause.
- This page is client-facing — do not modify without a confirmed staging snapshot.

---

## Operator Analysis

Document the operator's reasoning process. Update this section as the investigation progresses.

- Root cause hypothesis.
- Diagnostic steps taken.
- Docs consulted and what they revealed.
- Assumptions made and why.

---

## Proposed Fix

Describe the planned fix before applying it.

- What will be changed.
- Where (module, row, section, preset, variable, CSS).
- Why this fix was chosen over alternatives.
- Scope: is this fix local to this section, or does it risk affecting other pages?

---

## QA Checklist

Complete after applying the fix. Check all that apply to this case.

- [ ] Desktop — no regression.
- [ ] Tablet — no regression.
- [ ] Mobile — issue resolved.
- [ ] Horizontal overflow — cleared.
- [ ] Button and form usability — unaffected.
- [ ] Text readability — unaffected.
- [ ] Preset or variable changes — reviewed for global impact.
- [ ] Screenshots or visual comparison captured.
- [ ] JSON export updated to reflect final state.

---

## Outcome

Complete after resolution.

- Environment fix was confirmed on (LocalWP / staging).
- What was actually changed (may differ from proposed fix).
- Whether the fix applied cleanly or required adjustment.
- Any remaining concerns or follow-up needed.

---

## Lessons Learned

What this case reveals about the system, Divi behaviour, or operator workflow that is worth noting.

---

## Candidate memory.md Entry

If this case reveals a recurring pattern, draft a candidate entry for `operator/memory.md` here.

Format:

> **Pattern:** Brief description of the recurring issue.  
> **Fix:** What resolves it.  
> **Source:** Case ID.
