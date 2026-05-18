# Case: Spacing and Padding Issues — Homepage

**Project:** Simplicity Tech Divi AI Operator  
**Case Name:** Test1
**Canonical Example:** Divi layout summarizer workflow

---

## Case ID

`CASE-001`

---

## Status

`investigating`

---

## Canonical Workflow Demonstrated

This case is the canonical example for the current Divi layout summarizer workflow:

```
home.json
  -> layout-summary.md
  -> operator reasoning
  -> safe fix plan
  -> QA expectations
```

- `home.json` is the raw Divi source artifact. Keep it for reproducibility, precise setting lookup, and LocalWP re-import.
- `layout-summary.md` is the preferred AI context. Start there before opening the raw JSON.
- Operator reasoning should use the summary first, then consult the raw JSON only when a setting needs exact confirmation.
- Live visual confirmation is still pending, so this case remains `investigating`.

---

## Problem Summary

The homepage of a LocalWP Divi test site has multiple spacing and padding inconsistencies. The primary symptoms are: a hero section with uncapped `vw` padding that scales to extreme values at wide viewports; slider columns with large vertical `vw` padding and no mobile/tablet breakpoint overrides; a heading with a `100px` fixed bottom margin that has no responsive adjustment; a testimonials slider with disproportionate bottom padding; and a blurb module mixing margin and padding on the same element. The page was built across at least two Divi versions (4.x and 5.x) and contains no design variable usage for spacing.

**Pending real operator analysis:** these symptoms are inferred from the exported layout data and summarizer output. They still need visual confirmation in LocalWP before any fix is applied.

---

## Environment

| Field | Value |
|---|---|
| Environment type | LocalWP |
| Divi version | Mixed — `4.25.2` and `5.0.0-public-beta.1` and `5.0.0-public-alpha.18.2` (see note) |
| WordPress version | Not confirmed from JSON — verify on site |
| Active theme | Divi |
| Relevant plugins | None identified in layout |
| Site URL | `http://sampleproblem-pages.local/?page_id=7&preview=true` |
| Page affected | Homepage (Page ID 7) |

**Note on Divi version:** The exported JSON contains `builderVersion` fields from three different Divi releases. This indicates the page was built or modified across at least two Divi versions. Spacing behaviour and defaults may differ between blocks. This is a risk factor for inconsistent spacing output.

---

## Symptoms

The following were identified from `layout-summary.md` with targeted confirmation in `home.json`. No screenshots are currently available to confirm visual presentation — see Assets section.

**Symptom 1 — Hero section uncapped `vw` top padding, no breakpoint variation:**
- `padding-top: 20vw` is set explicitly at desktop, tablet, and phone breakpoints as three identical values.
- At 375px (phone): 75px — acceptable.
- At 768px (tablet): 154px — large.
- At 1280px (desktop): 256px — very large.
- At 1920px (widescreen): 384px — extreme.
- There is no `clamp()` cap to prevent runaway scaling at wide viewports.
- `padding-bottom: 0px` at all breakpoints means the section below abuts directly.

**Symptom 2 — Slider columns: `14vw` vertical padding, desktop only, with incorrect hover states:**
- Four slide columns (`divi/column`) each have `padding-top: 14vw, padding-bottom: 14vw` at desktop only.
- No tablet or phone breakpoint overrides exist. Divi 5 inherits the desktop value down — these columns will have `14vw` at all screen sizes.
- At 1920px: 14vw = 268.8px per side = 537px total vertical padding per slide. This is extreme.
- Each column also has a hover state: `padding-top: 13vw, padding-bottom: 15vw`. Hover states that modify vertical padding on columns create layout shift when the user hovers. This is unlikely to be intentional — the hover effect was probably intended for the background overlay only.
- These columns have image backgrounds, which suggests the `14vw` padding was used to create visual height for the image — a common pattern, but one that needs breakpoint control.

**Symptom 3 — Heading with `100px` bottom margin, no breakpoint override:**
- A `divi/heading` element ("We're Dedicated to Helping You Check All The Boxes") has `margin-bottom: 100px` at desktop only.
- No tablet or phone overrides. At mobile, 100px of bottom spacing below a heading is excessive.
- This heading precedes an accordion component.

**Symptom 4 — Testimonials slider: `40px` top / `100px` bottom padding, no breakpoint override:**
- A `divi/slider` (testimonials section) has `padding-top: 40px, padding-bottom: 100px` at desktop only.
- No tablet or phone overrides. The `100px` bottom padding on mobile pushes content below the slider far down.

**Symptom 5 — Blurb module mixing margin and padding:**
- A `divi/blurb` module has both `margin-bottom: 20px` AND `padding-bottom: 50px` set at desktop.
- Total bottom space from this one element: 70px.
- Mixing margin and padding for spacing is fragile and creates difficulty when adjusting layout rhythm.
- This was built on `builderVersion: 4.25.2` — suggesting it was not recalibrated when the page moved to Divi 5.

**Symptom 6 — No design variables used for any spacing value:**
- All spacing values are hardcoded inline (`vw`, `px`).
- `global_variables` in the export is empty — no spacing tokens are used.
- This means no single point of control exists for spacing changes across the page.

---

## Expected Behaviour

When resolved:

- The hero section should have appropriate vertical padding that scales sensibly from mobile to widescreen, with a `clamp()` cap at the top end.
- Slider columns should have controlled vertical padding with breakpoint-specific values that prevent excessive height at wide viewports.
- Hover states on column spacing should be removed.
- The heading before the accordion should have a mobile-appropriate bottom margin (typically 40–60px at phone vs 100px at desktop).
- The testimonials slider bottom padding should be reduced or clamped at mobile.
- The blurb module should use one spacing approach (margin or padding, not both).
- Ideally, spacing values should reference design variables or use `clamp()` consistently, following KB standards.

---

## Related Assets

| Asset | File | Status |
|---|---|---|
| Raw Divi layout export | `home.json` | **Available** — source artifact for reproduction and exact setting lookup |
| Layout summary | `layout-summary.md` | **Available** — preferred AI context for operator reasoning |
| Custom CSS | `custom.css` | **Not available** — none applied per export |
| Desktop screenshot | `screenshots/desktop.png` | **Pending** — capture from LocalWP site |
| Tablet screenshot | `screenshots/tablet.png` | **Pending** |
| Mobile screenshot | `screenshots/mobile.png` | **Pending** |
| After-fix export | `home-fixed.json` | **Pending** — export after resolution |
| Outcome notes | `outcome.md` | **Pending** — complete after resolution |

Use `layout-summary.md` first when briefing the operator. Open `home.json` only to confirm exact values or unsupported structures.

Screenshots are pending. Screenshots should be captured at:

- Desktop: 1440px
- Tablet: 768px
- Phone: 375px

Capture before any fix is applied, then again after, to enable visual comparison.

---

## KB Docs To Consult

Routed via `operator/task-routing.md` — Responsive Issues and Build Workflow categories.

1. **`features/responsive-breakpoints.md`** — primary. Breakpoint system, `clamp()` strategy for spacing, vw padding recommendations, per-breakpoint override guidance.
2. **`troubleshooting/common-issues.md`** — secondary. "Content Touching Screen Edges on Mobile", "Layout Breaks at Specific Width", "Buttons Overlapping" patterns are relevant.
3. **`build/06_design_logic.md`** — Simplicity Tech spacing standards and design decisions.
4. **`features/design-variables.md`** — for evaluating whether to introduce spacing variables as part of the fix.
5. **`audits/01_UX_VISUAL.md`** — mobile overflow and visual rhythm checks relevant to post-fix QA.

---

## Safety Considerations

- This case is on a LocalWP site only. No staging or production access is required.
- The page appears to have been built across multiple Divi versions. Before fixing, verify the current Divi version on the LocalWP install matches the latest `builderVersion` in the export (`5.0.0-public-beta.1`). Do not apply Divi 5 spacing fixes to a Divi 4 install.
- The slider columns use a non-default preset (`09c39b1b-cf1e-46ea-8dec-4bd38eaeee3d`). This preset should be inspected in the Preset Manager before changing inline spacing on those columns — the preset may also define spacing, and a conflict would make the fix ineffective.
- One section uses a named preset: "Dark Gradient Overlay" — do not modify this preset; only change inline spacing on the specific elements listed in this case.
- Do not change global variables or site-wide presets. All fixes should be scoped to this page's specific elements.
- Capture before-screenshots before making any changes.

---

## Operator Analysis

**Analysis performed from `layout-summary.md` plus targeted raw JSON confirmation, without live browser access. No Divi editing has been performed.**

**Pending real operator analysis:** validate these findings in LocalWP before editing. The summary identifies likely risk areas, but the actual visual severity depends on the rendered page, viewport, presets, and current Divi version.

The export reveals six distinct spacing problems of varying severity.

### Root Cause 1: vw padding without clamp() cap (hero section)

The hero section uses `padding-top: 20vw`. The KB (`features/responsive-breakpoints.md`) recommends using `clamp()` for section padding: example `clamp(32px, 5vw, 80px)`. This layout uses `20vw` which is 4x the recommended `5vw` example, and without a max cap it grows to 384px at 1920px viewport. The padding is set explicitly at all three breakpoints with identical values rather than being a single fluid value — indicating either manual copy-paste across breakpoints or a Divi 4 migration artefact.

**Severity: Medium.** The page likely looks intentional at desktop but may have proportional issues at widescreen or inconsistent feel at tablet.

### Root Cause 2: Slide column padding — vw without breakpoints, incorrect hover states

The four slide columns use `14vw` top/bottom padding (desktop only) with a hover state that changes those values to `13vw`/`15vw`. This is a two-part problem:

- **Missing breakpoints:** Divi 5 applies desktop spacing to all breakpoints unless explicitly overridden. With no tablet or phone override, these columns will always have `14vw` padding. The columns use background images — a common technique to make image-backed columns taller. The intent is defensible, but it needs breakpoint control.
- **Incorrect hover padding:** Hover states that change vertical padding cause the column to visually jump in height when hovered. This is almost certainly unintended. The hover effect was likely meant to change the background image opacity or overlay — but was applied to spacing instead. This should be removed.

**Severity: High.** The hover layout-shift is an active bug. The uncapped `14vw` at widescreen (537px total vertical padding per slide) will make the slider extremely tall on large monitors.

### Root Cause 3: Fixed px spacing without breakpoint overrides

Both the heading (`margin-bottom: 100px`) and the testimonials slider (`padding-bottom: 100px`) use large fixed-pixel values with no phone or tablet overrides. On mobile, 100px of space below a heading or section is disproportionate.

**Severity: Medium.** These are likely visible and reported as "too much space" on mobile.

### Root Cause 4: Mixed margin + padding on blurb

The blurb module uses both `margin-bottom: 20px` and `padding-bottom: 50px`. This is a Divi 4-era block (version `4.25.2`) that was not recalibrated. It creates a 70px composite bottom spacing that is fragile — adjusting either value independently will produce unexpected results.

**Severity: Low-to-medium.** The spacing may look acceptable but is unmaintainable.

### Root Cause 5: No spacing design variables

All values are hardcoded. There is no single point of control. This means spacing changes require hunting individual modules rather than changing one variable. This is a systemic issue that the fix pass should note, even if full variable adoption is deferred.

**Severity: Systemic.** Not a visual bug, but a maintainability risk for future work.

---

## Proposed Fix

**Fix in this order to minimise risk:**

### Fix 1: Remove hover padding states from slider columns (highest priority — active bug)

- Open each of the four slide columns in Divi Builder.
- Navigate to Design → Spacing → Hover state.
- Clear `padding-top` and `padding-bottom` hover values (remove `13vw` and `15vw`).
- This removes the layout-shift-on-hover bug.
- Scope: Local to these four columns only. Does not affect other pages.

### Fix 2: Add tablet and phone breakpoint overrides to slider column padding

- For each of the four slide columns:
  - Desktop: keep `14vw` or reduce to `clamp(40px, 8vw, 160px)` (consider which is more appropriate after viewing at 1440px).
  - Tablet (768–980px): set `padding-top: 8vw, padding-bottom: 8vw` or `60px` — confirm visually.
  - Phone (< 767px): set `padding-top: 40px, padding-bottom: 40px` — avoids scaling issues on small screens.
- Scope: These four columns only. Verify the column preset is not also setting spacing before editing.

### Fix 3: Add phone/tablet override to the heading 100px bottom margin

- Locate the heading "We're Dedicated to Helping You Check All The Boxes".
- At phone breakpoint: set `margin-bottom: 40px`.
- At tablet breakpoint: set `margin-bottom: 60px`.
- Desktop: leave at `100px`.
- Scope: This one heading module only.

### Fix 4: Add phone/tablet override to testimonials slider bottom padding

- Locate the testimonials `divi/slider`.
- At phone breakpoint: set `padding-bottom: 40px`.
- At tablet breakpoint: set `padding-bottom: 60px`.
- Desktop: leave at `100px`.
- Scope: This one slider module only.

### Fix 5: Resolve blurb mixed margin + padding

- Locate the blurb module (Discover Your Home's Value section).
- Remove `padding-bottom: 50px` — retain `margin-bottom: 20px`.
- Or remove `margin-bottom: 20px` and increase `padding-bottom` to `70px` if padding is the preferred approach for this context.
- Confirm which other blurb modules in the same row are affected before choosing direction.
- Scope: This one blurb module (and potentially its row siblings for consistency).

### Fix 6 (Optional — deferred): Hero section padding clamp()

- The `20vw` hero top padding may be intentional for a full-height visual effect. Verify on the live LocalWP site at desktop before changing.
- If it is causing visual problems at widescreen, replace with `clamp(80px, 12vw, 280px)` at desktop only and remove the tablet/phone copies (let Divi inherit).
- Do not change unless there is a confirmed visual problem. The hero intent is ambiguous from the JSON alone.

---

## QA Checklist

Complete after applying each fix. All items are pending.

- [ ] Desktop (1440px) — slider columns no longer create layout shift on hover.
- [ ] Desktop (1440px) — slider slides at appropriate height, not disproportionately tall.
- [ ] Tablet (768px) — slider columns have readable padding, columns not too tall.
- [ ] Phone (375px) — slider columns at 40px top/bottom padding, no overflow.
- [ ] Desktop (1440px) — heading margin-bottom appears appropriately spaced above accordion.
- [ ] Tablet (768px) — heading margin reduced to 60px, rhythm preserved.
- [ ] Phone (375px) — heading margin reduced to 40px, accordion not pushed far down.
- [ ] Phone (375px) — testimonials slider bottom padding reduced, next section visible without excessive scroll.
- [ ] Blurb — no unexpected spacing above or below compared to adjacent blurbs in the same row.
- [ ] Horizontal overflow — cleared at all breakpoints.
- [ ] No preset or global variable was changed.
- [ ] Screenshots captured at desktop, tablet, and phone before and after fixes.
- [ ] Post-fix JSON export saved as `home-fixed.json`.

---

## Outcome

**Pending** — no changes have been made yet.

---

## Lessons Learned

**Pending** — to be completed after resolution.

Likely lessons anticipated from this case:

- `vw` spacing without `clamp()` caps causes runaway scaling at wide viewports.
- Hover states on column spacing cause layout shift — hover states should be applied to background or overlay properties only.
- Divi 4 to Divi 5 migrations should include a spacing recalibration pass.
- Pages built without design variable spacing tokens are harder to maintain — even one or two spacing variables for major section padding would reduce this type of issue.

---

## Candidate memory.md Entry

This case likely produces two candidate memory entries. Confirm after resolution.

**Candidate 1:**

> **Pattern:** Slider columns using `vw` background-image padding technique have hover states applied to `padding` instead of background/overlay. This causes visible layout shift on hover.  
> **Fix:** Remove hover padding overrides from column spacing. Apply hover effects to background colour, overlay, or opacity — not padding.  
> **Source:** CASE-001.

**Candidate 2:**

> **Pattern:** `vw` padding values on sections and columns without `clamp()` caps or breakpoint-specific overrides scale to extreme sizes at widescreen (1920px+). Always add a phone/tablet override or use `clamp()` with a max cap when using `vw` for major spacing.  
> **Fix:** Add phone and tablet breakpoint overrides, or replace with `clamp(min, vw, max)`.  
> **Source:** CASE-001.
