# Design System Setup - Colors, Typography, Spacing

**Purpose:** Foundational design system rules for consistent Divi 5 implementations
**Category:** Design System
**Priority:** Critical
**Last Updated:** December 2024

---

## 🎨 Color System Standards

### WCAG Color Contrast Requirements

**AA Level (Minimum):**
- Normal text (< 18px): 4.5:1 ratio required
- Large text (≥ 18px or bold ≥ 14px): 3:1 ratio required

**AAA Level (Enhanced):**
- Normal text: 7:1 ratio required
- Large text: 4.5:1 ratio required

### How to Calculate Contrast

**Use browser DevTools:**
1. Inspect element
2. Click color swatch in Styles panel
3. Look for contrast ratio (shows pass/fail)

**Or calculate manually:**
- Formula: (L1 + 0.05) / (L2 + 0.05)
- Where L = relative luminance

### Common Divi Color Scenarios

**Text on solid background:**
```css
/* Good: White on dark green */
color: #ffffff;
background: #2c5530;
/* Ratio: 8.2:1 ✓ Passes AAA */

/* Bad: White on pink */
color: #ffffff;
background: #e23a95;
/* Ratio: 2.8:1 ✗ Fails AA */

/* Fix: Darken pink */
background: #c21875;
/* Ratio: 4.6:1 ✓ Passes AA */
```

**Text on image with overlay:**
```css
/* Add dark overlay for readability */
.hero-section::before {
    content: '';
    background: rgba(0, 0, 0, 0.5); /* 50% black overlay */
}
```

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

❌ **Divi common issue: Default link color on white**
```css
color: #2ea3f2; /* Divi default blue */
background: #ffffff;
/* Ratio: 3.1:1 - FAILS for normal text */
```

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

### Safe Color Combinations

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

### Testing Tools

- **Chrome DevTools**: Built-in contrast checker
- **WAVE**: Browser extension
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Divi**: No built-in checker - use external tools

---

## 📐 Typography System

### Responsive Type Scale

**Base: 1rem / 16px (mobile) | 1.125rem / 18px (desktop)**
**Scale: 1.25 (Major Third)**
**Units: rem (with px reference)**

**Mobile sizes:**
- Body: **1rem** (16px)
- H6: **1.25rem** (20px) - 16 × 1.25
- H5: **1.5625rem** (25px) - 20 × 1.25
- H4: **1.9375rem** (31px) - 25 × 1.25
- H3: **2.4375rem** (39px) - 31 × 1.25
- H2: **3.0625rem** (49px) - 39 × 1.25
- H1: **3.8125rem** (61px) - 49 × 1.25

**Desktop sizes:**
- Body: **1.125rem** (18px)
- H6: **1.4375rem** (23px) - 18 × 1.25
- H5: **1.75rem** (28px) - 23 × 1.25
- H4: **2.1875rem** (35px) - 28 × 1.25
- H3: **2.75rem** (44px) - 35 × 1.25
- H2: **3.4375rem** (55px) - 44 × 1.25
- H1: **4.3125rem** (69px) - 55 × 1.25

**Why rem?**
- Respects user browser font size preferences (accessibility)
- Scales proportionally across all breakpoints
- Industry best practice for responsive typography
- Divi 5 supports rem values directly in module settings

### Benefits:
- Mathematical consistency
- Harmonious visual rhythm
- Easy to calculate new sizes
- Scales naturally to different screen sizes

### Alternative Scales:
- **Minor Third (1.2x)** - More subtle
- **Perfect Fourth (1.333x)** - More dramatic
- **Golden Ratio (1.618x)** - Maximum contrast

### Line Height Guidelines

**Body text:** 1.5-1.7 (recommend 1.6)
**Heading text:** 1.2-1.4 (recommend 1.3)

**Current issues example:**
```css
.content p {
    line-height: 1.2; /* Too tight - increase to 1.6 */
}
```

### Letter Spacing Guidelines

**Headings:** -0.02em to 0em (slightly tighter is fine)
**Body:** 0em to 0.02em (normal to slightly loose)
**All caps:** 0.05em to 0.1em (always add spacing)

**Current issues example:**
```css
.uppercase-heading {
    letter-spacing: 0em; /* Too tight for all caps */
    /* Recommend: 0.08em */
}
```

### Typography Red Flags

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

---

## 📏 Spacing System

### 8px Base Spacing System

**Base unit: 8px**

**Scale:**
- **xs:** 8px (0.5rem) - Micro spacing (icon gaps, tight spacing)
- **sm:** 16px (1rem) - Small spacing (button padding, small gaps)
- **md:** 24px (1.5rem) - Medium spacing (card padding, element spacing)
- **lg:** 32px (2rem) - Large spacing (section internal padding)
- **xl:** 48px (3rem) - XL spacing (section padding desktop)
- **2xl:** 64px (4rem) - 2XL spacing (major section dividers)
- **3xl:** 96px (6rem) - 3XL spacing (hero sections, major divisions)

### Usage Examples

| Component | Desktop | Mobile |
|-----------|---------|--------|
| Button padding | sm (16px) | sm (16px) |
| Card padding | md (24px) | md (24px) |
| Section padding | xl (48px) | lg (32px) |
| Element gaps | md (24px) | sm (16px) |
| Paragraph margin | sm (16px) | sm (16px) |
| Hero padding | 3xl (96px) | xl (48px) |

### Spacing Red Flags

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
```

---

## 🌐 Global Variable Strategy

### Decision Tree: Should This Be a Global Variable?

**Colors:**
```
Color appears once → Local is fine
Color appears 2 times → Consider global (depends on importance)
Color appears 3+ times → MUST be global
Brand color (primary, secondary) → ALWAYS global
One-off campaign/accent → Can be local
```

**Fonts:**
```
All H1s same? → Global preset
Body text standard? → Global preset
One-off styling? → Local
```

### What to Look For:
- Button colors (primary, secondary)
- Link colors
- Section backgrounds
- Accent colors
- Border colors
- Icon colors

### How to Suggest Global Colors

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

### Real Scenarios:
- **Button colors** → Always global
- **One-off accent** → Maybe local
- **Brand colors** → Always global
- **Client-specific campaign color** → Local

---

## 📱 Responsive Sizing Formulas

### Divi 5 has 7 breakpoints:

1. **Desktop** (> 1024px)
2. **Tablet Wide** (< 1024px)
3. **Tablet** (< 980px)
4. **Phone Wide** (< 860px)
5. **Phone** (< 767px)
6. **Custom 1** (user-defined)
7. **Custom 2** (user-defined)

### Responsive Design Checks:

- Verify content stacking order on Mobile vs. Desktop
- Check Hover/Active states—do they use HSL-based relative color variables?
- Ensure touch targets ≥ 44px on mobile
- No horizontal scroll on mobile
- Text readable at all sizes
- Images scale properly

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

## 🎨 Presets Best Practices

### What Are Presets?

Presets in Divi 5 are reusable style configurations that can be applied to modules. They save time and ensure consistency across your site.

### When to Use Presets vs Inline Styling

**Use Presets when:**
- Style will be reused 3+ times
- Creating consistent components (buttons, cards, headings)
- Building a design system
- Need to maintain brand consistency
- Working with a team or client who will make updates

**Use Inline Styling when:**
- One-off, unique designs
- Quick prototyping
- Experimental layouts
- Element is truly unique and won't be repeated

### Stacked Presets Strategy

Divi 5's most powerful feature is **stacked presets** - applying multiple presets to a single module.

**Order matters:** Base → Variant → Effect

**Example structure:**
```
1. btn-base (padding, radius, typography)
2. btn-primary (brand colors)
3. btn-hover-lift (interaction effects)

Result: Consistent, reusable, maintainable button system
```

### Preset Naming Conventions

Use clear, consistent naming:

**Base Components:**
- `btn-base`, `card-base`, `heading-base`

**Color Variants:**
- `btn-primary`, `btn-secondary`, `btn-accent`
- `card-light`, `card-dark`

**Effects/States:**
- `btn-hover-lift`, `card-fade-in`, `heading-gradient`

**Size Variants:**
- `btn-sm`, `btn-md`, `btn-lg`
- `card-compact`, `card-expanded`

### Common Preset Libraries

**Essential presets to create for every project:**

**Buttons:**
- `btn-base` (foundation: padding, radius, font)
- `btn-primary` (brand primary color)
- `btn-secondary` (outline or subtle style)
- `btn-hover-lift` (elevation on hover)

**Cards:**
- `card-base` (padding, shadow, radius)
- `card-border-accent` (colored left border)
- `card-hover-scale` (slight zoom on hover)

**Headings:**
- `h1-base`, `h2-base`, `h3-base` (type scale sizes)
- `heading-gradient` (gradient text effect)
- `heading-fade-in` (entrance animation)

**Sections:**
- `section-padding-xl` (consistent section spacing)
- `section-bg-light`, `section-bg-dark` (background variants)

### Preset Organization Tips

**Keep presets organized:**
1. Create base styles first
2. Then variants (colors, sizes)
3. Then effects (animations, hovers)
4. Document your preset library in project notes

**Audit your presets regularly:**
- Remove unused presets
- Consolidate duplicates
- Update outdated styles

### How to Apply Stacked Presets

**Location:** Module Settings → Bottom Toolbar → Presets Icon (star)

**Steps:**
1. Open module settings
2. Click presets icon
3. Select base preset (e.g., `btn-base`)
4. Click additional presets to stack (e.g., `btn-primary`, `btn-hover-lift`)
5. Presets apply in order clicked

**Pro tip:** Enable "Stack with existing presets" when creating presets to allow stacking

### Real-World Preset Stack Examples

**Professional Button:**
```
1. btn-base
   - Padding: 14px 32px (sm spacing)
   - Border radius: 4px
   - Font weight: 600
   - Transition: all 0.3s ease-in-out

2. btn-primary
   - Background: var(--et-global-color-primary)
   - Text: #ffffff
   - Border: none

3. btn-hover-lift
   - Hover transform: translateY(-2px)
   - Hover shadow: 0 4px 12px rgba(0,0,0,0.15)
```

**Feature Card:**
```
1. card-base
   - Padding: 32px (lg spacing)
   - Background: #ffffff
   - Border radius: 12px
   - Box shadow: 0 2px 8px rgba(0,0,0,0.08)

2. card-border-accent
   - Border left: 4px solid var(--et-global-color-accent)

3. card-hover-scale
   - Hover transform: scale(1.02)
   - Hover shadow: 0 8px 16px rgba(0,0,0,0.12)
```

**Hero Heading:**
```
1. h1-base
   - Font size: 4.3125rem (69px desktop)
   - Line height: 1.3
   - Letter spacing: -0.02em
   - Font weight: 700

2. heading-gradient
   - Background: linear-gradient(to right, primary, accent)
   - -webkit-background-clip: text
   - -webkit-text-fill-color: transparent

3. heading-fade-in
   - Animation: fadeInUp 0.8s ease-out
```

### Benefits of Preset System

✅ **Consistency:** All buttons/cards look the same
✅ **Speed:** Apply complex styling in 2 clicks
✅ **Maintainability:** Update preset once, changes everywhere
✅ **Scalability:** Easy to add new variants
✅ **Collaboration:** Team members use same styles
✅ **Client-friendly:** Easy for clients to apply branded styles

### Common Preset Mistakes to Avoid

❌ **Creating presets for one-off elements**
- Only create presets for reusable components

❌ **Wrong stacking order**
- Base styles should be applied first, effects last

❌ **Too many presets**
- Keep it simple: 10-15 presets per project is plenty

❌ **Not documenting presets**
- Keep a list of what each preset does

❌ **Forgetting to enable "Stack with existing presets"**
- This is required for stacking to work

### Preset Checklist for New Projects

□ Create base button preset (`btn-base`)
□ Create color variants (`btn-primary`, `btn-secondary`)
□ Create hover effects preset (`btn-hover-lift`)
□ Create card base preset (`card-base`)
□ Create heading presets for H1-H3
□ Create section spacing presets
□ Document all presets in project notes
□ Test stacking order works correctly
□ Train client on how to apply presets

---

## 🎯 System Setup Checklist

**Before starting a new Divi 5 project:**

### Colors
□ Define 3-5 brand colors as globals
□ All text meets WCAG AA contrast (4.5:1 normal, 3:1 large)
□ Test all color combinations
□ Create hover states with HSL variants

### Typography
□ Define type scale (1.25x or 1.333x)
□ Set base sizes for mobile and desktop
□ Configure line-heights (1.6 body, 1.3 headings)
□ Create global text presets for H1-H6, body, buttons

### Spacing
□ Implement 8px spacing system
□ Define spacing tokens (xs through 3xl)
□ Set responsive spacing rules (desktop vs mobile)
□ Document spacing usage for team

### Responsive
□ Test all 7 breakpoints
□ Ensure 44px minimum touch targets on mobile
□ Verify text scales appropriately
□ Check images scale properly

### Presets (Recommended)
□ Create base button preset (`btn-base`)
□ Create primary/secondary button variants
□ Create card base preset for consistent cards
□ Create heading presets (H1-H3) based on type scale
□ Consider hover/animation effect presets
□ Document preset library for team/client use

---

## 📚 Related Files

**Prerequisites:**
- `../features/global-variables.md` - Global color system
- `../audits/01_UX_VISUAL.md` - Visual audit checklist

**Related Topics:**
- `02_divi5_mechanics.md` - How to implement these systems
- `03_components.md` - Applying systems to components
- `../workflows/site-audit-process.md` - Full audit process

**Troubleshooting:**
- `../troubleshooting/css-not-applying.md` - If changes don't work
- `../accessibility/wcag-compliance-checklist.md` - Complete accessibility guide

---

**Last Updated:** December 2024
**Status:** Active
**Divi Version:** 5.x
