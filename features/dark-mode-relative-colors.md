# Dark Mode & Relative Colors

**Purpose:** Complete guide to building light/dark mode color systems using Divi 5's Relative Colors feature and Design Variables
**Category:** Core Features
**Priority:** High
**Last Updated:** March 2026
**Divi Version:** 5.x (Official Release)

---

## Overview

Divi 5's Relative Colors feature lets you define color variables that are mathematically derived from a base color using HSL (Hue, Saturation, Lightness) adjustments. Combined with Design Variables, this makes it possible to build a complete light/dark mode toggle system where swapping one variable cascades updated colors across every element on the site — backgrounds, text, borders, buttons, cards — all at once.

**The core idea:** Instead of maintaining two separate color palettes manually, you define your dark mode colors as *relative transformations* of your light mode colors. Change the base, and all derived shades update automatically.

---

## What Are Relative Colors?

### Standard Variables vs Relative Colors

**Standard color variable:**
```
--color-primary: #065cfe
```
A fixed hex value. Change it manually when you want a different color.

**Relative color variable:**
```
--color-primary-dark: relative to --color-primary
  Lightness: -20%
```
Derived automatically from `--color-primary`. If you change the base, the dark variant recalculates instantly.

### How HSL Works

HSL defines colors as three values:
- **H** (Hue) — the color on the wheel, 0–360°. Red = 0°, Green = 120°, Blue = 240°
- **S** (Saturation) — how vivid or washed out, 0–100%
- **L** (Lightness) — how light or dark, 0–100%. 0% = black, 100% = white, 50% = full color

```
#065cfe in HSL:
H: 220° (blue)
S: 99% (very vivid)
L: 51% (mid-brightness)

Relative: L -20% → HSL(220°, 99%, 31%) → darker blue
Relative: L +30% → HSL(220°, 99%, 81%) → lighter blue
Relative: S -60% → HSL(220°, 39%, 51%) → muted/desaturated blue
```

Divi 5's Relative Colors UI does all this maths — you just drag sliders.

---

## Where to Find It

**Variable Manager:**
- Visual Builder → Left Sidebar → Variable Manager icon (database/stack icon)
- Select any Color variable → Edit
- Toggle: **"Use Relative Color"**

**Or when creating a new Color variable:**
- Variable Manager → + Add Variable → Color
- After setting base color, enable: **"Use Relative Color"**

**Relative Color controls appear as sliders:**
```
Hue shift:        -180° ←——●——→ +180°
Saturation shift: -100% ←——●——→ +100%
Lightness shift:  -100% ←——●——→ +100%
Alpha shift:      -100% ←——●——→ +100%
```

---

## Building a Base Color System

Before dark mode, your color variables need to be structured in a way that makes toggling practical. The key is separating **brand colors** (fixed) from **semantic/contextual colors** (what elements actually reference).

### Step 1: Define Brand Colors (Fixed Base)

These never change between light and dark mode — they're your brand identity:

```
--brand-primary:   #065cfe   (Simplicity blue)
--brand-accent:    #3DD6C4   (teal)
--brand-dark:      #001533   (near-black navy)
--brand-white:     #ffffff
--brand-gray-mid:  #64748b
```

### Step 2: Define Relative Shade Variables

Derived from brand colors using HSL offsets:

```
--brand-primary-dark:  relative to --brand-primary, L -15%
--brand-primary-light: relative to --brand-primary, L +25%
--brand-primary-tint:  relative to --brand-primary, L +45%, S -20%
--brand-accent-dark:   relative to --brand-accent, L -15%
--brand-accent-light:  relative to --brand-accent, L +25%
```

### Step 3: Define Semantic Color Variables

These are what modules actually use. In light mode they point one way; in dark mode they swap:

```
Light Mode values:
--color-bg-primary:    #ffffff        (page background)
--color-bg-secondary:  #f8fafc        (card/section backgrounds)
--color-bg-inverse:    #001533        (dark section backgrounds)
--color-text-primary:  #001533        (headings, strong text)
--color-text-body:     #334155        (body copy)
--color-text-muted:    #64748b        (metadata, captions)
--color-text-inverse:  #ffffff        (text on dark backgrounds)
--color-border:        #e2e8f0        (card borders, dividers)
--color-surface:       #ffffff        (card surfaces)
```

**The key insight:** Modules reference `--color-bg-primary`, `--color-text-body`, etc. — not raw hex values. When you switch mode, you update the semantic variables. Everything that uses them updates automatically.

---

## Building the Dark Mode Palette

### Light → Dark Transformations

For each semantic variable, define what it becomes in dark mode:

```
Semantic Variable      Light Mode        Dark Mode
─────────────────────────────────────────────────────
--color-bg-primary     #ffffff           #0f172a
--color-bg-secondary   #f8fafc           #1e293b
--color-bg-inverse     #001533           #f8fafc  (inverts!)
--color-text-primary   #001533           #f1f5f9
--color-text-body      #334155           #cbd5e1
--color-text-muted     #64748b           #64748b  (same — neutral)
--color-text-inverse   #ffffff           #001533  (inverts!)
--color-border         #e2e8f0           #334155
--color-surface        #ffffff           #1e293b
```

### Using Relative Colors for Dark Mode Shades

Rather than setting each dark mode value manually, use Relative Colors where the relationship is mathematical:

```
Dark mode backgrounds derived from --brand-dark (#001533):
--color-bg-primary:    relative to --brand-dark, L +5%   → very dark blue
--color-bg-secondary:  relative to --brand-dark, L +10%  → slightly lighter
--color-bg-card:       relative to --brand-dark, L +12%  → card surface

Dark mode text derived from --brand-white:
--color-text-primary:  relative to --brand-white, L -5%  → near white
--color-text-body:     relative to --brand-white, L -20% → light gray
--color-text-muted:    relative to --brand-white, L -45% → mid gray
```

**Practical result:** If you decide your dark background should be slightly warmer, you adjust `--brand-dark` hue by +10° and all dark mode background shades recalculate automatically.

---

## Implementation: Two Approaches

### Approach A: Manual Variable Swap (Simpler, Most Common)

Maintain two named variable sets and swap the semantic variables when switching modes. Best for most client sites.

**Setup:**
```
1. Create all semantic color variables with light mode values
2. Apply them to all modules (never use raw hex in modules)
3. To switch to dark mode: update semantic variables to dark values
4. Everything updates instantly
```

**When to use:** Sites where dark/light mode is a design choice made once during build, not a user-toggleable feature.

**Workflow for building both modes:**
```
Phase 1: Build in light mode
- All modules use semantic variables
- Site looks correct in light mode

Phase 2: Export light mode variable set
- Variable Manager → Export (saves current values)
- Name: client-light-mode.json

Phase 3: Update semantic variables to dark values
- --color-bg-primary: #0f172a
- --color-text-body: #cbd5e1
- etc.

Phase 4: Verify dark mode looks correct
- Check all pages
- Fix any contrast issues

Phase 5: Export dark mode variable set
- Name: client-dark-mode.json

To switch modes: import the relevant .json
```

---

### Approach B: CSS Class Toggle (User-Toggleable)

Implements a true user-facing toggle. More complex but gives visitors a preference control.

**How it works:**
```
Default (light):  <html class="light-mode">  or no class
Dark mode:        <html class="dark-mode">

CSS:
.dark-mode {
  --color-bg-primary: #0f172a;
  --color-text-body: #cbd5e1;
  /* etc. */
}
```

**Implementation in Divi 5:**

**Step 1: Define default (light) variables in Variable Manager**
```
--color-bg-primary:   #ffffff
--color-text-body:    #334155
--color-border:       #e2e8f0
(etc.)
```

**Step 2: Add dark mode overrides via Custom CSS**
```css
/* Divi → Theme Options → Custom CSS */
/* Or: Page Settings → Advanced → Custom CSS */

.dark-mode {
  --color-bg-primary:   #0f172a;
  --color-bg-secondary: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-body:    #cbd5e1;
  --color-text-muted:   #64748b;
  --color-border:       #334155;
  --color-surface:      #1e293b;
}
```

**Step 3: Add toggle button**
```html
<!-- Code Module or Custom HTML in header/footer -->
<button id="dark-mode-toggle" aria-label="Toggle dark mode">
  <span class="icon-light">☀️</span>
  <span class="icon-dark">🌙</span>
</button>
```

**Step 4: Add toggle JavaScript**
```javascript
/* Divi → Theme Options → Integration → Body (Bottom) */
<script>
(function() {
  // Restore preference on load
  const saved = localStorage.getItem('colorMode');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }

  // Wire up toggle button (waits for DOM)
  document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('dark-mode-toggle');
    if (!btn) return;

    btn.addEventListener('click', function() {
      const isDark = document.documentElement.classList.toggle('dark-mode');
      localStorage.setItem('colorMode', isDark ? 'dark' : 'light');
      btn.setAttribute('aria-pressed', isDark);
    });

    // Set initial aria state
    btn.setAttribute('aria-pressed', 
      document.documentElement.classList.contains('dark-mode'));
  });
})();
</script>
```

**Step 5: Hide/show toggle icons with CSS**
```css
/* Add to Custom CSS */
.icon-dark { display: none; }
.dark-mode .icon-light { display: none; }
.dark-mode .icon-dark { display: inline; }

#dark-mode-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 8px;
  border-radius: 50%;
}
```

---

## Respect System Preference (prefers-color-scheme)

For Approach B, you can also detect the user's OS preference as a default:

```css
/* Add to Custom CSS — applies dark mode if OS is set to dark */
@media (prefers-color-scheme: dark) {
  :root:not(.light-mode) {
    --color-bg-primary:   #0f172a;
    --color-bg-secondary: #1e293b;
    --color-text-primary: #f1f5f9;
    --color-text-body:    #cbd5e1;
    --color-text-muted:   #64748b;
    --color-border:       #334155;
    --color-surface:      #1e293b;
  }
}
```

Updated JS to handle three states (system / forced light / forced dark):
```javascript
<script>
(function() {
  const saved = localStorage.getItem('colorMode');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark-mode');
  } else if (saved === 'light') {
    document.documentElement.classList.add('light-mode');
  }
  // If no saved preference, CSS media query handles it
})();
</script>
```

---

## Contrast Checking for Both Modes

Every text/background combination must pass WCAG AA in **both** modes. Don't just check light mode.

### Light Mode Checks
```
--color-text-body (#334155) on --color-bg-primary (#ffffff)
Ratio: 10.7:1 ✅ Passes AA and AAA

--color-text-muted (#64748b) on --color-bg-primary (#ffffff)
Ratio: 4.6:1 ✅ Passes AA (borderline — watch this)

--brand-primary (#065cfe) on #ffffff
Ratio: 3.6:1 ⚠️ Fails AA for normal text (ok for large text only)
```

### Dark Mode Checks
```
--color-text-body (#cbd5e1) on --color-bg-primary (#0f172a)
Ratio: 11.2:1 ✅ Passes AA and AAA

--color-text-muted (#64748b) on --color-bg-primary (#0f172a)
Ratio: 3.5:1 ⚠️ Borderline — may need to lighten in dark mode

--brand-accent (#3DD6C4) on --color-bg-primary (#0f172a)
Ratio: 9.8:1 ✅ Passes — teal works well on dark backgrounds
```

**Rule:** If a color passes in light but fails in dark, create a dark-mode-specific variable override:

```css
.dark-mode {
  --color-text-muted: #94a3b8; /* Lightened for dark bg contrast */
}
```

---

## Applying Semantic Variables in Divi

Modules must use semantic variable references, not raw hex. This is what enables the mode switch to work.

### In the Visual Builder

For any color field:
```
1. Click the color swatch to open the color picker
2. Look for the dynamic content / variable icon (ϟ or chain link)
3. Click it → Variable picker appears
4. Select your semantic variable (e.g. --color-bg-primary)
5. Done — the field now shows "var(--color-bg-primary)"
```

### Common Module Assignments

```
Section background     → var(--color-bg-primary) or var(--color-bg-secondary)
Card background        → var(--color-surface)
Heading text           → var(--color-text-primary)
Body text              → var(--color-text-body)
Caption/meta text      → var(--color-text-muted)
Border/divider         → var(--color-border)
Primary button bg      → var(--brand-primary)  [stays fixed]
Primary button text    → var(--color-text-inverse)
Icon accent color      → var(--brand-accent)   [stays fixed]
```

### What Stays Fixed vs What Swaps

```
FIXED (brand identity — same in both modes):
├─ --brand-primary      (your blue)
├─ --brand-accent       (your teal)
└─ --brand-dark         (your navy)

SWAPS (contextual — different per mode):
├─ --color-bg-primary   (page background)
├─ --color-bg-secondary (subtle background)
├─ --color-surface      (card surfaces)
├─ --color-text-primary (heading text)
├─ --color-text-body    (body text)
├─ --color-text-muted   (meta text)
├─ --color-text-inverse (text on colored bg)
└─ --color-border       (borders, dividers)
```

---

## Simplicity Technologies Color System Example

Applying this framework to the actual ST brand:

### Base Brand Colors (Fixed)
```
--brand-primary:  #065cfe   (blue)
--brand-accent:   #3DD6C4   (teal)
--brand-dark:     #001533   (navy)
--brand-white:    #ffffff
```

### Relative Shade Variables
```
--brand-primary-dark:   relative to --brand-primary, L -12%  → #0047cc
--brand-primary-light:  relative to --brand-primary, L +35%  → #a0beff
--brand-accent-dark:    relative to --brand-accent,  L -15%  → #25a896
--brand-accent-light:   relative to --brand-accent,  L +25%  → #8eeee6
--brand-dark-light:     relative to --brand-dark,    L +8%   → #001e4d
```

### Semantic Variables — Light Mode
```
--color-bg-primary:   #ffffff
--color-bg-secondary: #f0f4ff   (blue-tinted off-white)
--color-surface:      #ffffff
--color-text-primary: #001533   (--brand-dark)
--color-text-body:    #1e3a5f   (slightly softer navy)
--color-text-muted:   #64748b
--color-text-inverse: #ffffff
--color-border:       #d1dbe8
```

### Semantic Variables — Dark Mode
```
--color-bg-primary:   #0a1628   (deep navy, not pure black)
--color-bg-secondary: #0f1f3d   (mid-deep navy)
--color-surface:      #132040   (card surface)
--color-text-primary: #e8f0fe   (near white with blue tint)
--color-text-body:    #b8cce8   (soft blue-gray)
--color-text-muted:   #6b8cb8   (muted blue)
--color-text-inverse: #001533
--color-border:       #1e3a5f
```

**Design note:** The ST dark mode uses deep navy tones rather than generic grays, which keeps the brand identity consistent across both modes.

---

## Common Patterns

### Pattern 1: Dark Section on Light-Mode Page

Even without a full dark mode toggle, you often need sections with dark backgrounds:

```
Section uses: var(--color-bg-inverse)
Text uses:    var(--color-text-inverse)

Light mode: dark navy section with white text ✅
Dark mode:  light section with dark text (auto-inverts) ✅

This works for free because you've set the inverse variables correctly.
```

### Pattern 2: Cards That Adapt

```
Card background: var(--color-surface)
Card border:     var(--color-border)
Card heading:    var(--color-text-primary)
Card body text:  var(--color-text-body)

Light: white card, subtle border, dark text
Dark:  dark card, mid border, light text
```

### Pattern 3: Glassmorphism That Works in Both Modes

```css
/* Light mode glass */
:root {
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.3);
  --glass-blur: blur(12px);
}

/* Dark mode glass */
.dark-mode {
  --glass-bg: rgba(15, 31, 61, 0.7);
  --glass-border: rgba(255, 255, 255, 0.08);
}

/* Applied via Custom CSS on card */
.glass-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-blur);
}
```

---

## Troubleshooting

### Mode Toggle Not Persisting on Page Reload

**Cause:** JavaScript runs after page load, causing a flash of wrong mode

**Fix:** Add inline script to `<head>` (before any CSS) to set class immediately:
```html
<!-- Divi → Theme Options → Integration → Head -->
<script>
  (function() {
    var saved = localStorage.getItem('colorMode');
    if (saved === 'dark') document.documentElement.classList.add('dark-mode');
    if (saved === 'light') document.documentElement.classList.add('light-mode');
  })();
</script>
```
This runs synchronously before rendering, preventing flash.

### Some Elements Not Switching

**Cause:** Those modules are using hard-coded hex values instead of semantic variables

**Diagnosis:**
```
1. Inspector panel → select the non-switching element
2. Look for Modified Fields showing raw hex values
3. Those are the culprits
```

**Fix:** Use Find & Replace to convert:
```
Find: #001533 (or whatever hard-coded value)
Replace: var(--color-text-primary)
Scope: Entire Site
```

### Contrast Failing in Dark Mode Only

**Cause:** A color that works on white fails on the dark background

**Fix:** Create a dark-mode-specific override:
```css
.dark-mode {
  --color-text-muted: #94a3b8; /* Lighter than default #64748b */
}
```

### Images Look Wrong in Dark Mode

**Cause:** Images with white backgrounds or light-only design language look jarring on dark backgrounds

**Options:**
```
1. Use images with transparent backgrounds (PNG/SVG) where possible
2. Add a subtle border/shadow in dark mode:
   .dark-mode .et_pb_image img {
     border-radius: 8px;
     box-shadow: 0 0 0 1px var(--color-border);
   }
3. For logos with white backgrounds, offer a dark-mode logo variant:
   Light mode logo: --logo-main  (dark logo on transparent)
   Dark mode logo:  .dark-mode --logo-main (white logo)
   Via Design Variable image swap
```

### Relative Color Not Updating When Base Changes

**Cause:** Divi cache serving old generated CSS

**Fix:**
```
Divi → Theme Options → Builder → Clear CSS Cache
+ Clear browser cache (Ctrl+Shift+R)
```

---

## Best Practices

1. **Always use semantic variable names in modules** — Never apply `--brand-primary` directly to text or backgrounds. Always go through the semantic layer (`--color-text-primary`, `--color-bg-primary`). This is what makes the toggle work.

2. **Design the dark palette as navy/deep blue, not just gray** — Generic dark modes use `#121212` gray. For the ST brand, deep navy tones keep the blue identity intact and look more intentional.

3. **Check contrast in both modes before delivery** — Use browser DevTools or WebAIM checker. It's easy to pass in light and fail in dark (or vice versa for muted colors).

4. **Keep brand colors fixed** — `--brand-primary`, `--brand-accent` don't change between modes. Only contextual/semantic colors swap. Buttons, links, and accent elements stay the same — only backgrounds and text adapt.

5. **Prevent flash of wrong mode** — If building a toggleable system, always add the inline `<head>` script to restore saved preference before the page renders.

6. **Export variable sets** — After finalising both palettes, export each as a separate JSON file. This makes it easy to hand off to a client or restore if variables get accidentally changed.

7. **Use Relative Colors for shades, fixed values for the core palette** — Relative Colors shine for hover states, tints, and shade variations. The base palette (8–10 colors) is better defined with explicit hex values you've consciously chosen and contrast-tested.

---

## When NOT to Use a Full Toggle System

- **Most client sites don't need it** — Building a user-facing light/dark toggle adds JavaScript complexity and doubles your QA surface. Many sites are fine with a single carefully designed mode. Build the toggle only if the client explicitly requests it or the site has a strong UI/app identity.
- **When the design only works in one mode** — Some designs are inherently light (e.g. professional services with lots of white space and photography) or dark (e.g. tech SaaS dashboards). Forcing both modes can dilute the design intent.
- **As a substitute for good contrast** — Offering a dark mode doesn't excuse failing WCAG contrast in the default mode. Fix the default first.

---

## Advanced Usage

### Auto-Generate a Full Palette from One Color

Using Relative Colors, a single brand primary can generate a complete 9-shade scale:

```
--color-50:   relative to --brand-primary, L +40%, S -30%  (lightest tint)
--color-100:  relative to --brand-primary, L +32%, S -20%
--color-200:  relative to --brand-primary, L +22%, S -10%
--color-300:  relative to --brand-primary, L +14%
--color-400:  relative to --brand-primary, L +6%
--color-500:  --brand-primary  (base)
--color-600:  relative to --brand-primary, L -8%
--color-700:  relative to --brand-primary, L -18%
--color-800:  relative to --brand-primary, L -28%
--color-900:  relative to --brand-primary, L -38%, S -10%  (darkest shade)
```

Change `--brand-primary` and all 9 shades recalculate. This pattern mirrors how Tailwind CSS generates its color scales.

### Hover States Using Relative Colors

Instead of manually defining hover colors:

```
Button background:       var(--brand-primary)
Button hover background: relative to --brand-primary, L -10%

Defined as: --brand-primary-hover
```

Now if the client changes their brand color, the hover state automatically darkens correctly.

### Seasonal or Campaign Theming

Relative Colors make seasonal swaps trivial:

```
January (default): --brand-primary: #065cfe
December (festive): --brand-primary: #c41e3a  (red)

All relative shades — hover states, tints, dark variants — 
recalculate automatically for the seasonal palette.

Export each seasonal set as a .json file.
Import the relevant one to switch themes.
```

---

## Related Files

**Prerequisites:**
- `design-variables.md` — Full guide to Design Variables (read first)
- `../build/01_system_setup.md` — Color contrast and WCAG standards

**Integration:**
- `preset-system-complete.md` — Ensuring presets use semantic variables, not raw hex
- `extend-attributes.md` — Propagating semantic variable adoption across a site
- `../build/02_divi5_mechanics.md` — Find & Replace for converting hard-coded values to variables

**Auditing:**
- `../audits/01_UX_VISUAL.md` — Contrast checking (run in both modes)
- `../audits/04_DIVI5_LOGIC.md` — Inspector for finding hard-coded color values

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x (Official Release)
