# Case: Hero Section Mobile Horizontal Overflow

**Project:** Simplicity Tech Divi AI Operator  
**Note:** This is a demonstration case showing a correctly completed `case.md`. The assets listed below (layout.json, screenshots) are placeholders — they would be present in a real case.

---

## Case ID

`CASE-EXAMPLE-001`

---

## Status

`resolved`

---

## Problem Summary

The homepage hero section causes horizontal overflow on mobile screens at 375px and below. A horizontal scrollbar appears, and the heading text extends beyond the viewport edge.

---

## Environment

| Field | Value |
|---|---|
| Environment type | LocalWP |
| Divi version | 5.x |
| WordPress version | 6.x |
| Active theme | Divi |
| Relevant plugins | None relevant |
| Site URL | `http://simplicity-test.local` |
| Page affected | Homepage — hero section (Section 1, Row 1) |

---

## Symptoms

- Horizontal scrollbar appears on mobile (375px viewport width).
- The `<h1>` heading text overflows the right edge of the screen.
- The CTA button is partially clipped.
- The issue does not appear at tablet (768px) or desktop (1080px+).
- No console errors observed.
- Browser inspection shows the inner Row has a fixed left/right padding of `80px` at all breakpoints — not overridden at mobile.

---

## Expected Behaviour

The hero section should fit within the mobile viewport with no horizontal overflow. Heading and button should remain fully visible and readable at 375px.

---

## Related Assets

| Asset | File | Notes |
|---|---|---|
| Divi layout export | `layout.json` | Section export from Divi Builder covering Section 1, Row 1. |
| Custom CSS | `custom.css` | No custom CSS applied to this section. |
| Desktop screenshot | `screenshots/desktop.png` | Baseline — no issues at desktop. |
| Mobile screenshot | `screenshots/mobile.png` | Captured at 375px showing overflow. |
| Outcome notes | `outcome.md` | See for confirmed resolution. |

---

## KB Docs To Consult

Routed via `operator/task-routing.md` — Responsive Issues category.

1. `features/responsive-breakpoints.md` — primary: breakpoint system, how Divi 5 applies responsive overrides.
2. `troubleshooting/common-issues.md` — check for documented mobile overflow patterns.
3. `audits/01_UX_VISUAL.md` — mobile overflow and horizontal scroll checks.

---

## Safety Considerations

- Testing on LocalWP only. No staging or production access required.
- The row padding is set via a direct style value, not a global preset. Changing it affects only this row.
- Confirmed no global variables are tied to this padding value.

---

## Operator Analysis

`features/responsive-breakpoints.md` confirms that Divi 5 applies desktop styles at all breakpoints unless a breakpoint-specific override is set.

`troubleshooting/common-issues.md` lists fixed horizontal padding on rows as a known cause of mobile overflow — confirmed match.

Root cause: The Row inside the hero section has `padding-left: 80px; padding-right: 80px` set at the default (desktop) breakpoint with no mobile override. At 375px, 160px of horizontal padding on a narrow viewport causes the content to exceed the column width, triggering overflow.

Diagnostic steps:

1. Opened the page in Divi Builder on LocalWP.
2. Inspected Row 1 padding settings — confirmed `80px` left and right at default with no mobile breakpoint override.
3. Temporarily set row padding to `0` on mobile to confirm this was the cause — overflow resolved immediately.

---

## Proposed Fix

Set the Row padding to a smaller value at the mobile breakpoint only. Do not change desktop or tablet values.

- **Where:** Section 1 → Row 1 → Padding → Mobile breakpoint.
- **Change:** Set left and right padding to `20px` at mobile (≤767px).
- **Why:** Reduces total horizontal padding from 160px to 40px on a 375px viewport, allowing content to fit within the column.
- **Scope:** Local to this row only. No global preset or variable is involved.

---

## QA Checklist

- [x] Desktop — no regression. Padding unchanged at 1080px+.
- [x] Tablet — no regression. Padding unchanged at 768px.
- [x] Mobile — issue resolved. No overflow at 375px.
- [x] Horizontal overflow — cleared. No horizontal scrollbar.
- [x] Button and form usability — button fully visible and tappable.
- [x] Text readability — heading fully visible within viewport.
- [x] Preset or variable changes — none made.
- [x] Screenshots captured at desktop, tablet, and mobile after fix.
- [x] JSON export updated to reflect the corrected row padding.

---

## Outcome

Fix confirmed on LocalWP.

The mobile breakpoint padding override (`20px` left and right) resolved the overflow completely at 375px. Desktop and tablet remained unchanged. No regressions observed. The updated layout was exported as a new `layout.json`.

---

## Lessons Learned

Fixed horizontal padding on Divi rows does not automatically scale at smaller breakpoints. Any row with large desktop padding values needs an explicit mobile override — Divi 5 does not reduce these automatically. This should be checked in the `audits/01_UX_VISUAL.md` mobile pass as a standard item.

---

## Candidate memory.md Entry

> **Pattern:** Hero section mobile overflow caused by fixed row padding with no mobile breakpoint override.  
> **Fix:** Add a mobile breakpoint padding override on the row (typically 16–24px left/right). Do not change desktop or tablet values.  
> **Source:** CASE-EXAMPLE-001.
