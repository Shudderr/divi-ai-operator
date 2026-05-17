# Extend Attributes

**Purpose:** Complete guide to Divi 5's Extend Attributes — propagating style changes from a source element across a defined scope
**Category:** Core Features
**Priority:** High
**Last Updated:** March 2026
**Divi Version:** 5.x (Official Release)

---

## Overview

Extend Attributes lets you take specific style properties from one element and push them outward to matching elements within a defined scope — a page, a section, or the entire site. It sits between two other tools in precision: broader than a preset update (which only affects modules using that preset) but more targeted than Find & Replace (which swaps raw values without understanding context).

**The core use case:** You refine spacing, typography, or borders on one element and want that exact change to propagate consistently across similar elements — without manually editing each one, and without touching properties you didn't intend to change.

---

## Where to Find It

**Primary access:**
- Select any module, row, or section in the Visual Builder
- Right-click the element → **Extend Attributes**

**Or:**
- Select element → Settings panel → Three-dot menu (⋯) → **Extend Attributes**

**Scope selector appears in the Extend Attributes panel:**
- Current Section
- Current Page
- Entire Site

---

## How It Works

### The Mental Model

Think of Extend Attributes as a selective copy-paste that understands structure:

```
You have this on your source element:
- Padding Top/Bottom: clamp(48px, 6vw, 96px)  ← you want to propagate this
- Background: var(--color-primary)              ← you want to keep this local
- Border Radius: 12px                           ← you want to keep this local

Extend Attributes lets you:
1. Select ONLY "Padding Top/Bottom"
2. Choose scope: All Sections on this page
3. Push ONLY that property to all matching elements

Result: All section padding updates. Nothing else changes.
```

This selectivity is what makes it powerful — you're not blasting all styles everywhere, you're surgically propagating one decision.

### What Gets Extended

You choose which properties to extend from a checklist in the panel. Properties are grouped by category:

```
Spacing
├─ Padding (Top, Right, Bottom, Left — individually selectable)
└─ Margin (Top, Right, Bottom, Left — individually selectable)

Typography
├─ Font Size
├─ Font Weight
├─ Line Height
├─ Letter Spacing
└─ Font Family

Border
├─ Border Width
├─ Border Style
├─ Border Color
└─ Border Radius

Background
├─ Background Color
└─ Background Gradient

Sizing
├─ Width
├─ Max Width
└─ Min Height
```

### Scope Options

| Scope | What it affects |
|---|---|
| **Current Section** | All matching elements within the same section |
| **Current Page** | All matching elements on the current page |
| **Entire Site** | All matching elements across all pages |

**"Matching elements"** means the same element type. Extending from a Button module only affects other Button modules. Extending from a Section only affects other Sections.

---

## Step-by-Step Usage

### Basic: Extend Spacing to All Sections

**Scenario:** You've tightened section padding on one section and want all sections on the page to match.

```
1. Select the section with your refined padding
2. Right-click → Extend Attributes
3. Panel opens showing all current styles
4. Check: ✅ Padding Top, ✅ Padding Bottom
5. Uncheck everything else
6. Scope: Current Page
7. Preview → confirm affected sections listed
8. Apply
```

### Intermediate: Extend Typography Across a Rebrand

**Scenario:** Client approved a heading size change. You updated one H2, now need it everywhere.

```
1. Select the Text module with your updated H2 style
2. Right-click → Extend Attributes
3. Check: ✅ Font Size, ✅ Line Height, ✅ Font Weight
4. Leave unchecked: color, spacing, alignment
5. Scope: Entire Site
6. Preview → review the list of affected modules
7. Apply
```

### Advanced: Propagate a Variable Adoption

**Scenario:** You've just changed a hard-coded padding value to use `var(--space-xl)` on one section. You want all sections to use the variable too.

```
1. Update source section padding to: var(--space-xl)
2. Right-click → Extend Attributes
3. Check: ✅ Padding Top, ✅ Padding Bottom
4. Scope: Entire Site
5. Apply

Result: All sections now reference var(--space-xl)
Bonus: Update the variable once → entire site spacing updates
```

---

## Extend Attributes vs Other Tools

Understanding when to reach for Extend Attributes vs the alternatives:

| Situation | Best Tool | Why |
|---|---|---|
| Update all modules using a specific preset | **Preset update** | Preset is already the source of truth |
| Swap a specific value everywhere (e.g. all #065cfe → var(--color-primary)) | **Find & Replace** | Value-level substitution across all element types |
| Push a refined style from one element to similar elements in a defined scope | **Extend Attributes** | Selective property propagation, scope-controlled |
| Make a global spacing change that should affect everything | **Design Variable update** | Change the variable, all elements using it update automatically |
| Copy styling from one element to a single other element | **Copy/Paste Attributes** | One-to-one, no scope needed |

### The Precision Spectrum

```
← Most targeted                                    Most broad →

Copy/Paste    Extend Attributes    Preset Update    Find & Replace    Variable Update
Attributes
(1 → 1)       (1 → scope)          (preset → all    (value → all      (variable → all
                                    using preset)    matching values)  referencing it)
```

---

## Common Workflows

### Workflow 1: Pre-Launch Spacing Audit

**Problem:** You built the site and spacing drifted across pages. Some sections have 80px padding, others 60px, others 72px — all inconsistent.

**Fix with Extend Attributes:**
```
1. Pick one section with the correct padding (e.g. clamp(48px, 6vw, 96px))
2. Extend Attributes → Padding Top + Padding Bottom
3. Scope: Entire Site
4. Apply

Done. All sections now consistent.
```

**Then lock it in permanently:**
```
5. Create Design Variable: --space-section = clamp(48px, 6vw, 96px)
6. Find & Replace: clamp(48px, 6vw, 96px) → var(--space-section)
7. Future changes: edit the variable only
```

### Workflow 2: Rebrand Typography in Minutes

**Problem:** Client wants to increase all body text from 17px to 18px and tighten line-height from 1.8 to 1.65 across the whole site.

**Fix:**
```
1. Find one Text module, update to: 18px, line-height 1.65
2. Extend Attributes → Font Size + Line Height
3. Scope: Entire Site
4. Preview (confirm ~40 text modules listed)
5. Apply

What used to be 30+ manual edits: done in 60 seconds.
```

### Workflow 3: Card Border Consistency

**Problem:** Service cards on the homepage have a refined border treatment. You want the same border on all Blurb modules across the site.

**Fix:**
```
1. Select the polished Blurb module
2. Extend Attributes → Border Width + Border Style + Border Color + Border Radius
3. Scope: Entire Site
4. Apply
```

### Workflow 4: Section Max-Width Standardisation

**Problem:** After reviewing the site on ultrawide screens, you want to cap all row max-widths at 1200px consistently.

**Fix:**
```
1. Select a row with correct max-width: 1200px
2. Extend Attributes → Max Width
3. Scope: Entire Site
4. Apply
```

---

## The Preview Step — Don't Skip It

Before applying, always use the Preview function:

```
What Preview shows you:
- A list of every element that will be affected
- The current value → new value for each property
- Any elements that will be skipped (e.g. manual overrides)

Why this matters:
- You might have intentional exceptions (a hero section with
  deliberately large padding)
- Preview lets you identify and exclude those before committing
```

**If Preview shows an element you don't want to change:**
- Cancel the extension
- Add a custom CSS class to that element (e.g. `.padding-exception`)
- Re-run Extend Attributes — elements with manual overrides are typically skipped

---

## Relationship with Design Variables

Extend Attributes and Design Variables work best together as a two-step system:

### Step 1: Extend Attributes to Normalise

Use Extend Attributes to push consistent values across the site first — getting everything to the same value.

### Step 2: Find & Replace to Variablise

Then use Find & Replace to convert those raw values into variable references.

```
Example: Standardising section padding

Step 1 — Extend Attributes:
Source section: padding 80px top/bottom
Extend to: All sections, Entire Site
Result: Every section now has padding: 80px

Step 2 — Find & Replace:
Find: Padding = 80px (on sections)
Replace: var(--space-section)
Result: Every section now references the variable

Step 3 — going forward:
Edit var(--space-section) once → everything updates
```

This two-step approach converts a messy inconsistent site into a fully variable-driven system efficiently.

---

## Troubleshooting

### Changes Not Applying to Some Elements

**Symptoms:** Extension ran but a handful of elements didn't update

**Cause:** Elements with manually overridden styles are protected — Extend Attributes won't overwrite deliberate local overrides

**Fix:**
```
1. Select the skipped element
2. Check for manual overrides (Inspector panel shows these in orange/flagged)
3. Clear the manual override: right-click property → Reset to Default
4. Re-run Extend Attributes
```

### Extension Applied Wrong Values

**Symptoms:** Values propagated but they're not what you intended

**Cause:** You selected the wrong source element, or had responsive overrides on the source that also propagated

**Fix:**
```
1. Ctrl+Z to undo (Extend Attributes is undoable)
2. Verify source element has the correct values on all breakpoints
3. Check responsive tab — if source has mobile overrides, those propagate too
4. Re-run from correct source
```

### Scope "Entire Site" Didn't Affect Other Pages

**Symptoms:** Ran with Entire Site scope but only current page updated

**Cause:** Other pages may be cached, or the extension requires a save + page refresh cycle per page

**Fix:**
```
1. Save current page
2. Clear Divi cache: Divi → Divi → Clear Cache
3. Open another affected page in Visual Builder
4. Verify the change applied
5. If not: re-run Extend Attributes on that page with Current Page scope
```

### Accidentally Extended to Wrong Elements

**Symptoms:** Unintended elements changed

**Fix:**
```
Immediate: Ctrl+Z to undo before saving

If already saved:
1. Use Find & Replace to revert the specific value
2. Or manually reset affected elements via Inspector
3. Or restore from a page revision (WordPress revisions)
```

**Prevention:** Always use Preview before applying. Start with smaller scopes (Current Section → Current Page → Entire Site) to test impact.

---

## Best Practices

1. **Always preview before applying** — The preview list tells you exactly what will change. A 10-second check prevents a 10-minute undo.

2. **Work from small scope to large** — Test with Current Section first. If it looks right, re-run at Current Page, then Entire Site. Easier to catch mistakes early.

3. **Extend Attributes first, then variablise** — Normalise values across the site with Extend Attributes, then convert to Design Variables with Find & Replace. Don't try to do both at once.

4. **Use it during pre-launch polish, not mid-build** — Extend Attributes shines when structure is stable and you're refining consistency. Running it mid-build when layouts are still changing creates noise.

5. **Check responsive breakpoints on your source element first** — If your source has breakpoint-specific overrides, those propagate too. Make sure all breakpoints on the source are correct before extending.

6. **Keep a note of intentional exceptions** — If a hero section deliberately has larger padding than the rest, add a CSS class to it or note it somewhere. This prevents future Extend Attribute runs from accidentally normalising it.

7. **Pair with the Inspector** — Use the Inspector panel to verify styles after extending. It clearly shows which properties came from a propagation vs manual setting vs preset.

---

## When NOT to Use Extend Attributes

- **When elements use a shared preset** — Update the preset instead. That's already the source of truth; don't bypass it.
- **When you need to change a value type** (e.g. px → clamp()) — Use Find & Replace, which handles value transformation.
- **When only one or two elements need updating** — Just edit them manually. Extend Attributes is for bulk consistency work.
- **On a site with no design system yet** — Set up Design Variables and Presets first. Extend Attributes is a refinement tool, not a substitute for a proper design system.

---

## Advanced Usage

### Extend Attributes as a Design Audit Tool

You can use Extend Attributes in read-only Preview mode as a diagnostic — without applying changes:

```
1. Set a known-correct value on a source element
2. Open Extend Attributes → select properties → set scope
3. Click Preview (don't Apply)
4. Review the list: any element showing a DIFFERENT current value
   is inconsistent with your standard

This gives you a live inconsistency report across the site.
```

### Combining with Copy/Paste Attributes for One-Off Fixes

For elements that shouldn't be included in a site-wide extension:

```
Main workflow:
1. Extend Attributes across Entire Site (normalises most elements)
2. Identify exceptions from Preview list
3. Use Copy/Paste Attributes to manually apply to exceptions
   with fine-tuned values

Result: Systematic consistency + controlled exceptions
```

### Rebrand Workflow (Full Process)

Complete rebrand using all relevant tools in sequence:

```
Phase 1 — Update Design Variables
- Change color values in Variable Manager
- Change font variables
- All modules already using variables update instantly

Phase 2 — Extend Attributes (for non-variablised styles)
- Extend updated spacing from source section → Entire Site
- Extend updated heading scale from source text → Entire Site
- Extend updated border treatment from source card → Entire Site

Phase 3 — Find & Replace (convert residual hard-coded values)
- Find old brand color hex → Replace with var(--color-primary)
- Find old font name → Replace with var(--font-heading)

Phase 4 — Inspector verification
- Spot-check key pages
- Confirm no orphaned hard-coded values remain

Total time for a 10-page site: 15–30 minutes vs hours of manual editing
```

---

## Related Files

**Prerequisites:**
- `design-variables.md` — Design Variables are the foundation; Extend Attributes is a complement
- `preset-system-complete.md` — Understand presets before reaching for Extend Attributes

**Used alongside:**
- `../build/02_divi5_mechanics.md` — Find & Replace and Inspector workflows
- `../build/04_divi5_workflow.md` — Where Extend Attributes fits in the build sequence (Step 5: Refine)

**Auditing:**
- `../audits/04_DIVI5_LOGIC.md` — Identifying inconsistencies that Extend Attributes can fix

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x (Official Release)
