---
last_verified_version: 5.0.0
status: active
last_updated: December 2024
module: UX & Visual Audit
priority: critical
---

# Module 01: UX & Visual Audit
**Focus:** Design System alignment, UI consistency, colors, typography, spacing

---

## 🎨 Global Variable Adoption

### When to Suggest Global Colors

**Decision Tree:**
```
Color appears once → Local is fine
Color appears 2 times → Consider global (depends on importance)
Color appears 3+ times → MUST be global
Brand color (primary, secondary) → ALWAYS global
One-off campaign/accent → Can be local
```

### What to Look For:
- [ ] Button colors (primary, secondary)
- [ ] Link colors
- [ ] Section backgrounds
- [ ] Accent colors
- [ ] Border colors
- [ ] Icon colors

### How to Suggest:
```
I notice you're using #2c5530 (green) in 4 places:
- Header background
- Button backgrounds (2 locations)
- Footer background

Recommendation: Create a global color
1. Divi → Theme Customizer → Global Styles → Colors
2. Click "Add New Color"
3. Name: "Brand Primary Green"
4. Color: #2c5530
5. Save
6. Replace all 4 instances with the global color

Benefits:
- Change once, updates everywhere
- Ensures consistency across site
- Easier client maintenance
```

---

## 🎯 Color Contrast Verification

### WCAG Standards

**AA Level (Minimum):**
- Normal text (< 18px): 4.5:1 ratio required
- Large text (≥ 18px or bold ≥ 14px): 3:1 ratio required

**AAA Level (Enhanced):**
- Normal text: 7:1 ratio required
- Large text: 4.5:1 ratio required

### Process

**For every text/background combination:**

1. **Identify the pairing**
   - Text color (including links, buttons)
   - Background color (including overlays on images)

2. **Calculate contrast ratio**
   - Using Browser DevTools: Inspect → Click color swatch → Look for contrast ratio
   - Manual: https://webaim.org/resources/contrastchecker/

3. **Check against WCAG standards**

4. **Flag if fails**

---

### Common Contrast Failures

❌ **Light text on light background**
```css
color: #f0f0f0; /* Very light gray */
background: #ffffff; /* White */
/* Ratio: 1.1:1 - FAILS */
```

❌ **Dark text on dark background**
```css
color: #333333; /* Dark gray */
background: #666666; /* Medium gray */
/* Ratio: 2.4:1 - FAILS for normal text */
```

❌ **Low opacity overlays on images**
```css
background-image: url(hero.jpg);
color: #ffffff;
/* If image is bright, white text may fail */
```

❌ **Colored text on colored backgrounds**
```css
color: #66fcf1; /* Cyan */
background: #ffffff; /* White */
/* Ratio: 2.9:1 - FAILS */
```

❌ **Divi common issue: Default link color on white**
```css
color: #2ea3f2; /* Divi default blue */
background: #ffffff;
/* Ratio: 3.1:1 - FAILS for normal text */
```

---

### How to Fix Contrast Issues

**Provide specific color alternatives:**

```
Problem: White text (#ffffff) on pink background (#e23a95)
Current ratio: 2.8:1
Required: 4.5:1 (WCAG AA)

Fix Options:

Option 1: Darken the background
background-color: #c21875;
New ratio: 4.6:1 ✓ Passes AA

Option 2: Change text to black
color: #000000;
New ratio: 5.2:1 ✓ Passes AA

Option 3: Add dark overlay (if background is an image)
.hero-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); /* 50% black overlay */
    z-index: 0;
}

Recommended: Option 1 (maintains white text, keeps design intent)

Where to apply:
Section → Design → Background → Background Color → #c21875
```

---

### Quick Reference: Safe Color Combinations

✅ **White text works on:**
- Backgrounds darker than #666666
- Black or very dark colors
- Brand colors with sufficient darkness

✅ **Black text works on:**
- Backgrounds lighter than #999999
- White or very light colors
- Pastels (test individually)

✅ **Colored text:**
- Always test with contrast checker
- Bright colors often fail on white
- Dark/saturated colors work better

**Tool for clients:** Share https://webaim.org/resources/contrastchecker/

---

## 📏 Typography Hierarchy Check

### Questions to Ask

1. **Is there a clear visual hierarchy?**
   - H1 should be largest, most prominent
   - H2 smaller than H1, larger than H3
   - H3 smaller than H2, larger than H4
   - Body text clearly distinguishable from headings
   - Visual weight decreases down the hierarchy

2. **Are sizes following a scale or random?**
   - Mathematical scale (1.2x, 1.25x, 1.333x, etc.)
   - Or random sizes (23px, 34px, 19px, 41px)
   - Scale indicates intentional design
   - Random suggests ad-hoc sizing

3. **Are sizes responsive?**
   - Do headings scale down on mobile?
   - Is mobile text readable (not too small)?
   - Is desktop text appropriately sized (not too large)?
   - Check all breakpoints

4. **Is line-height appropriate?**
   - Body text: 1.5-1.7 (optimal for readability)
   - Headings: 1.2-1.4 (tighter is fine)
   - Too tight: < 1.3 for body (hard to read)
   - Too loose: > 2.0 (disconnected lines)

5. **Is there sufficient contrast in weights?**
   - Headings bolder than body?
   - Clear differentiation between levels?

---

### Red Flags

❌ **Inverted hierarchy**
```
H2: 52px
H1: 48px
← H2 is larger than H1 (wrong!)
```

❌ **Random font sizes**
```
H1: 52px
H2: 38px (÷1.37)
H3: 29px (÷1.31)
H4: 23px (÷1.26)
← No consistent scale, random divisions
```

❌ **No responsive scaling**
```
Desktop: H1 = 60px
Mobile: H1 = 60px
← Too large for mobile screens
```

❌ **Line-height too tight**
```css
.body-text {
    font-size: 16px;
    line-height: 1.2; /* Too tight for body text */
}
```

❌ **Unclear hierarchy**
```
H1: 32px, weight 400
H2: 32px, weight 400
Body: 16px, weight 400
← H1 and H2 are identical
```

---

### Suggest Typography Scale

**When sizes are random, provide a mathematical scale:**

```
Current typography (inconsistent):
H1: 52px
H2: 38px
H3: 29px
H4: 23px
Body: 17px

Issues:
- No clear mathematical relationship
- Scale ratios vary (1.37x, 1.31x, 1.26x)
- Makes future scaling difficult

Recommendation: Use Major Third scale (1.25x)

Proposed scale:
Base: 16px (mobile) / 18px (desktop)

Mobile sizes:
- Body: 16px
- H6: 20px (16 × 1.25)
- H5: 25px (20 × 1.25)
- H4: 31px (25 × 1.25)
- H3: 39px (31 × 1.25)
- H2: 49px (39 × 1.25)
- H1: 61px (49 × 1.25)

Desktop sizes:
- Body: 18px
- H6: 23px (18 × 1.25)
- H5: 28px (23 × 1.25)
- H4: 35px (28 × 1.25)
- H3: 44px (35 × 1.25)
- H2: 55px (44 × 1.25)
- H1: 69px (55 × 1.25)

Benefits:
- Mathematical consistency
- Harmonious visual rhythm
- Easy to calculate new sizes
- Scales naturally to different screen sizes

Alternative scales:
- Minor Third (1.2x) - More subtle
- Perfect Fourth (1.333x) - More dramatic
- Golden Ratio (1.618x) - Maximum contrast

Reference: build/01_system_setup.md
```

---

### Additional Typography Checks

**Line Height:**
```
Body text line-height: 1.5-1.7 (recommend 1.6)
Heading line-height: 1.2-1.4 (recommend 1.3)

Current issues:
.content p {
    line-height: 1.2; /* Too tight - increase to 1.6 */
}
```

**Letter Spacing:**
```
Headings: -0.02em to 0em (slightly tighter is fine)
Body: 0em to 0.02em (normal to slightly loose)
All caps: 0.05em to 0.1em (always add spacing)

Current issues:
.uppercase-heading {
    letter-spacing: 0em; /* Too tight for all caps */
    /* Recommend: 0.08em */
}
```

**Heading Hierarchy Skipping:**
```
✓ Correct: H1 → H2 → H3 → H4
✗ Incorrect: H1 → H3 (skipped H2)

Accessibility impact: Screen readers use heading structure for navigation
```

---

## 📐 Spacing & Layout

### Spacing System Check

**What to Look For:**

1. **Inconsistent margins**
   ```css
   .section-1 { margin-bottom: 20px; }
   .section-2 { margin-bottom: 35px; }
   .section-3 { margin-bottom: 18px; }
   .section-4 { margin-bottom: 42px; }
   /* Random values - no system */
   ```

2. **Inconsistent padding**
   ```css
   .card-1 { padding: 25px; }
   .card-2 { padding: 30px; }
   .card-3 { padding: 22px; }
   /* Should all use same padding */
   ```

3. **No vertical rhythm**
4. **Cramped sections**
5. **Uneven component spacing**

---

### Red Flags

❌ **Random pixel values**
```css
margin: 23px;
padding: 37px;
gap: 19px;
/* Not based on any system */
```

❌ **Too many different values**
```
Site uses: 8px, 12px, 15px, 18px, 20px, 22px, 25px, 28px, 30px, 32px, 35px...
← Too many variations, no clear system
```

---

### Suggest 8px Spacing System

```
Recommendation: Implement 8px spacing system

Base unit: 8px

Scale:
- xs: 8px (0.5rem)   - Micro spacing (icon gaps, tight spacing)
- sm: 16px (1rem)    - Small spacing (button padding, small gaps)
- md: 24px (1.5rem)  - Medium spacing (card padding, element spacing)
- lg: 32px (2rem)    - Large spacing (section internal padding)
- xl: 48px (3rem)    - XL spacing (section padding desktop)
- 2xl: 64px (4rem)   - 2XL spacing (major section dividers)
- 3xl: 96px (6rem)   - 3XL spacing (hero sections, major divisions)

Usage examples:
Component          Desktop    Mobile
─────────────────────────────────────
Button padding     sm (16px)  sm (16px)
Card padding       md (24px)  md (24px)
Section padding    xl (48px)  lg (32px)
Element gaps       md (24px)  sm (16px)
Paragraph margin   sm (16px)  sm (16px)
Hero padding       3xl (96px) xl (48px)

Reference: build/01_system_setup.md
```

---

### Flexbox vs Grid Check

- [ ] Does the section use **Flexbox** (1D) or **CSS Grid** (2D) correctly?
  - Flexbox: For single-direction layouts (row or column)
  - Grid: For two-dimensional layouts (rows AND columns)

- [ ] Are gaps handled via the **Gap setting** rather than margin/padding?
  - Use `gap` property instead of margin hacks
  - Cleaner, more maintainable code

- [ ] Is the "Bento Grid" logic following the 8n+ pattern if applicable?
  - Spacing follows 8px multiples
  - Grid gaps are consistent

---

## 📱 Responsive States

### Divi 5 has 7 breakpoints:

1. **Desktop** (> 1024px)
2. **Tablet Wide** (< 1024px)
3. **Tablet** (< 980px)
4. **Phone Wide** (< 860px)
5. **Phone** (< 767px)
6. **Custom 1** (user-defined)
7. **Custom 2** (user-defined)

### Check:

- [ ] Verify content stacking order on Mobile vs. Desktop
- [ ] Check Hover/Active states—do they use HSL-based relative color variables?
- [ ] Ensure touch targets ≥ 44px on mobile
- [ ] No horizontal scroll on mobile
- [ ] Text readable at all sizes
- [ ] Images scale properly

---

### Common Responsive Issues

❌ **Text too large on mobile**
```
Desktop H1: 60px
Mobile H1: 60px
← Overwhelming on small screens

Fix: Scale down to 36-40px on mobile
```

❌ **Images not scaling**
```css
.logo {
    width: 250px; /* Fixed width */
}

Fix:
.logo {
    max-width: 150px;
    width: 100%;
    height: auto;
}

@media (max-width: 767px) {
    .logo {
        max-width: 120px;
    }
}
```

❌ **Touch targets too small**
```
Buttons < 44px height/width on mobile

Fix: Minimum 44x44px for all interactive elements
Button → Design → Button → Padding: 12px vertical, 24px horizontal
```

---

## ✅ UX/Visual Audit Checklist

**Before submitting findings:**

### Colors
□ All text meets WCAG AA contrast (4.5:1 normal, 3:1 large)
□ Button text readable
□ Links distinguishable from body text
□ Text on images has sufficient contrast
□ Repeated colors are global
□ Brand colors defined globally

### Typography
□ Clear visual hierarchy (H1 > H2 > H3 > body)
□ Font sizes follow a mathematical scale (not random)
□ Line-height appropriate (1.5-1.7 body, 1.2-1.4 headings)
□ Sizes are responsive (smaller on mobile)
□ No skipped heading levels (H1 → H2 → H3, not H1 → H3)
□ Typography styles use global presets

### Spacing
□ Consistent spacing values (not random px values)
□ Follows a system (4px or 8px base)
□ Vertical rhythm maintained
□ Section padding appropriate
□ Component spacing consistent

### Responsive
□ Layout works at all breakpoints
□ No horizontal scroll on mobile
□ Touch targets ≥ 44px on mobile
□ Text readable at all sizes
□ Images scale properly
□ Navigation usable on mobile

---

**Related Files:**
- `audits/01_UX_VISUAL.md`
- `build/01_system_setup.md`
- `features/design-variables.md`
- `features/responsive-breakpoints.md`

---

**Last Updated:** December 2024
**Divi Version:** 5.x
