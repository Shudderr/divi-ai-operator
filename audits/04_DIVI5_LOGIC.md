---
last_verified_version: 5.0.0
status: active
last_updated: December 2024
module: Divi 5 Core Logic Audit
priority: critical
---

# Module 04: Divi 5 Core Logic Audit
**Focus:** Proper use of the D5 Inspector, Global Variables, Presets, and the new Migrator logic

---

## 🔍 The Inspector Check

### Using the Divi 5 Inspector

- [ ] Use the **Divi 5 Inspector** to identify "Modified Fields"
- [ ] **Action:** Any modified field that matches a Global Variable should be "Adopted" into that variable

**How to access:**
```
Visual Builder → Select Module → Inspector Panel (right side)
Or: Right-click module → "Inspect"
```

**What to look for:**
```
Modified Fields section shows:
- Local overrides
- Conflicting preset values
- Opportunities for global variables
```

**Example:**
```
Module: Button
Modified Fields:
- Background Color: #2c5530
- Border Radius: 5px
- Padding: 15px 30px

Analysis:
✓ #2c5530 appears in 6 places → Should be global color
✓ Button styling repeated → Should be preset
✗ Local values override global system
```

**Recommendation:**
```
1. Create global color "Brand Primary Green" (#2c5530)
2. Create button preset "Primary Button" with all settings
3. Apply preset to module
4. Remove local overrides
```

---

## 🎨 Global Variable Opportunities (Fonts & Presets)

### When to Suggest Global Fonts/Presets

**Decision Tree:**
```
All H1s same style → Global preset
All buttons same style → Global preset
Body text standard → Global preset
One-off special heading → Local style
```

**Common preset opportunities:**
- All headings (H1, H2, H3, H4, H5, H6)
- Body text default
- Primary buttons
- Secondary buttons
- Link styles
- Blockquote styles
- Card containers

---

### How to Suggest Global Presets

**Example:**
```
I notice all your H2 headings share the same style:
- Font: Montserrat
- Size: 39px
- Weight: 700
- Color: #2c5530
- Line height: 1.3

Recommendation: Create a stacked preset

Steps:
1. Style one H2 with all desired settings
2. Module Settings → Presets icon (bottom toolbar)
3. "Add New Preset"
4. Name: "H2 - Section Heading"
5. Enable "Stack with existing presets"
6. Save
7. Apply to all other H2s by clicking the preset

Benefits:
- Update once, changes all H2s
- Maintains consistency
- Speeds up future page building

Reference: features/preset-system-complete.md
```

---

## 🎛️ Presets & Inheritance

### Element Presets

- [ ] Are we using **Element Presets** for recurring modules (e.g., Primary Button)?
- [ ] Are presets named clearly and descriptively?
- [ ] Is the preset hierarchy logical?

**Best Practices:**
```
Naming convention:
- Descriptive: "btn-primary" not "button-1"
- Hierarchical: "card-base" + "card-shadow" + "card-hover"
- Purpose-based: "cta-hero" vs "cta-section"
```

**When to create presets:**
```
✓ Create when:
- Style appears 3+ times
- Style will be reused on new pages
- Client needs to apply consistently

✗ Don't create when:
- One-off unique design
- Experimental/temporary styling
- Too many variations (creates preset bloat)
```

---

### Option Group Presets (OGP)

- [ ] Are **Option Group Presets (OGP)** used for Typography and Spacing consistency?
- [ ] Do OGPs cover all common scenarios?

**What are OGPs?**
```
Option Group Presets group related settings:
- Typography OGP: font, size, weight, line-height, letter-spacing
- Spacing OGP: padding, margin
- Border OGP: width, style, color, radius
```

**Example:**
```
Typography OGP: "Body Text Default"
- Font Family: Open Sans
- Font Size: 18px (desktop), 16px (mobile)
- Font Weight: 400
- Line Height: 1.6
- Letter Spacing: 0em

Apply to all text modules for consistency
```

---

### Check for "Over-styling"

- [ ] If a Preset covers the design, local module settings should be empty

**What is over-styling?**
```
Over-styling = Local settings override preset values

Example:
Module has preset "Primary Button" applied:
  Preset sets: Background #2c5530, Padding 15px 30px, Radius 5px

But module also has local settings:
  Background: #2c5530 (duplicate!)
  Padding: 15px 30px (duplicate!)

↑ Unnecessary duplication
```

**How to fix:**
```
1. Open module settings
2. Check Modified Fields in Inspector
3. If field matches preset value, clear the local override
4. Let preset handle the styling
```

**Benefits:**
```
- Cleaner code
- Easier to update (change preset, not every module)
- Reduced JSON file size
- Better performance
```

---

## 🔄 Migration Integrity

### Divi 4 to Divi 5 Migration

- [ ] If this was a Divi 4 layout: Has it been run through the **D5 Migrator**?
- [ ] Are there any "Legacy Compatibility" messages appearing in the layers panel?

**Migration checklist:**
```
□ Layout exported from Divi 4
□ Migrator run (Divi → Portability → Migrate Layout)
□ No "legacy" warnings in Visual Builder
□ Flexbox/Grid settings reviewed
□ Global colors/fonts adopted where possible
□ Deprecated modules replaced
```

**Common migration issues:**
```
1. Old margin/padding system vs new spacing
   Fix: Convert to gap-based spacing

2. Float-based layouts vs Flexbox
   Fix: Update to Flexbox or Grid

3. Hardcoded colors vs Global Variables
   Fix: Adopt global colors

4. Old font system vs new Font Variables
   Fix: Create global font presets

5. Custom CSS targeting old classes
   Fix: Update selectors for Divi 5
```

---

## 📝 Response Style Guide

**How the Simplicity Tech Divi AI Operator should communicate audit findings:**

### ✅ DO:

**1. Be Specific**
```
✓ Good: "Change line 45 in style.css"
✗ Bad: "Change the header styles"

✓ Good: "Section → Design → Background → #c21875"
✗ Bad: "Make the background darker"
```

**2. Provide Code**
```
✓ Good:
.hero-section {
    background-color: #c21875 !important;
    padding: 48px 24px;
}

✗ Bad: "Add some padding and change the color"
```

**3. Explain Why**
```
✓ Good: "This fails WCAG AA because the contrast ratio is 2.8:1, which is below the required 4.5:1 for normal text. Users with low vision cannot read this text."

✗ Bad: "The contrast is bad"
```

**4. Prioritize Issues**
```
✓ Good:
🔴 Critical: Fix contrast (accessibility failure)
🟡 Important: Add global colors (maintenance)
🟢 Enhancement: Optimize images (performance)

✗ Bad: Long list of issues with no priority
```

**5. Reference Knowledge Base**
```
✓ Good: "See audits/01_UX_VISUAL.md for detailed contrast guidance"

✗ Bad: No reference to additional resources
```

**6. Be Encouraging**
```
✓ Good: "Great use of flexbox for the card layout! The spacing looks consistent here."

✗ Bad: Only pointing out negatives
```

---

### ❌ DON'T:

**1. Be Vague**
```
✗ Bad: "The colors could be better"
✓ Good: "White text on #e23a95 background fails WCAG AA (2.8:1 ratio, needs 4.5:1)"
```

**2. Point Out Problems Without Solutions**
```
✗ Bad: "Your typography is inconsistent"
✓ Good: "Your heading sizes are inconsistent. Use a Major Third scale (1.25x): H1: 49px, H2: 39px, H3: 31px"
```

**3. Overwhelm with Too Many Issues**
```
✗ Bad: List of 50 issues dumped at once
✓ Good: Prioritize and group issues, focus on critical first
```

**4. Use Jargon Without Explaining**
```
✗ Bad: "Your LCP is suboptimal due to CLS issues"
✓ Good: "Your Largest Contentful Paint (main content load time) is slow because elements shift during loading"
```

**5. Make Assumptions**
```
✗ Bad: "Just use this code" (without explaining where/how)
✓ Good: "Add this code to Divi → Theme Options → Custom CSS. This will..."
```

---

## 💡 Example Audit Response

**This is what a comprehensive Divi 5 audit looks like:**

```
I've reviewed your homepage using the Divi 5 Inspector. Here's what I found:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔴 CRITICAL ISSUES (Fix Immediately)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Color Contrast Failure - Hero Section

   Problem: White text (#ffffff) on pink background (#e23a95)
   Current ratio: 2.8:1
   Required: 4.5:1 (WCAG AA)

   Why this matters:
   Users with low vision, color blindness, or viewing in bright
   sunlight cannot read your headline. This is a WCAG accessibility
   failure that could expose your client to legal risk.

   Fix: Darken the background color

   Where: Hero Section → Design → Background → Background Color
   Change: #e23a95 → #c21875

   Code (if using Custom CSS):
   .hero-section {
       background-color: #c21875 !important;
   }

   Result: New ratio 4.6:1 ✓ Passes WCAG AA

   Reference: audits/01_UX_VISUAL.md
   Related: audits/01_UX_VISUAL.md

2. Mobile Touch Targets Too Small

   Problem: All buttons are 32px height on mobile
   Required: 44px minimum (Apple & Google guidelines)

   Why this matters:
   Users on phones struggle to tap small buttons accurately,
   leading to frustration and missed conversions.

   Fix: Increase button padding

   Where: Button Module → Design → Button → Use Custom Padding
   Set: 12px top, 24px right, 12px bottom, 24px left

   This creates ~44px height with text

   Apply to: All buttons site-wide (use global preset - see #7)

   Reference: audits/03_ACCESSIBILITY.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟡 IMPORTANT ISSUES (Should Fix)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. Missing Global Variables (Divi 5 Inspector Check)

   Observation: Using Divi 5 Inspector, I found #2c5530 (green) in 6 modules:
   - Header background (Section)
   - Primary button backgrounds (3 Button modules)
   - Section accent background (Section)
   - Footer background (Section)

   Inspector shows: All 6 have local "Background Color" modified field

   Why this matters:
   If client wants to change brand color, you'll need to
   update 6 places. Easy to miss one and create inconsistency.

   Fix: Create global color and adopt in Inspector

   Steps:
   1. Divi → Theme Customizer → Global Styles → Colors
   2. Click "Add New Color"
   3. Name: "Brand Primary Green"
   4. Color: #2c5530
   5. Save
   6. For each of the 6 modules:
      - Select module
      - Open Inspector
      - Find "Background Color" in Modified Fields
      - Click "Adopt Global Color"
      - Select "Brand Primary Green"
   7. Verify all 6 modules now use global color

   Benefits:
   - Change once in Global Styles, updates everywhere
   - Inspector shows "Using global color" (not modified field)
   - Guaranteed consistency
   - Easier client handoffs

   Reference: features/design-variables.md
   Related: audits/04_DIVI5_LOGIC.md

4. Typography Scale Inconsistent

   Current sizes:
   H1: 52px
   H2: 38px (÷1.37)
   H3: 29px (÷1.31)
   Body: 17px

   Issue: No mathematical relationship between sizes

   Why this matters:
   Random sizes make it hard to maintain visual harmony
   and scale to new pages consistently.

   Suggestion: Use Major Third scale (1.25x)

   Proposed:
   H1: 61px (desktop) / 39px (mobile)
   H2: 49px (desktop) / 31px (mobile)
   H3: 39px (desktop) / 25px (mobile)
   Body: 18px (desktop) / 16px (mobile)

   Benefits:
   - Mathematical consistency
   - Easier to add new heading levels
   - More harmonious visual rhythm

   Implementation:
   Create global presets for each heading level

   Reference: build/01_system_setup.md
   Related: audits/01_UX_VISUAL.md

5. Spacing Values Not Systematic

   Found 18 different spacing values:
   8px, 12px, 15px, 20px, 23px, 25px, 28px, 30px, 32px...

   Why this matters:
   Inconsistent spacing creates visual chaos and makes
   the site feel less polished and professional.

   Suggestion: Implement 8px spacing system

   System:
   xs: 8px, sm: 16px, md: 24px, lg: 32px, xl: 48px, 2xl: 64px

   Quick wins:
   - Section padding: xl (48px) consistently
   - Card padding: md (24px) consistently
   - Button padding: sm (16px) consistently

   Reference: build/01_system_setup.md
   Related: audits/01_UX_VISUAL.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟢 ENHANCEMENTS (Nice to Have)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. Image Optimization Opportunity

   Observation: Hero image is 2.4MB PNG

   Opportunity:
   - Convert to WebP: ~400KB (83% reduction)
   - Improve LCP (Largest Contentful Paint)
   - Faster page load

   How to implement:
   1. Convert image using Squoosh.app or Photoshop
   2. Upload WebP version
   3. Divi serves WebP to supported browsers
   4. Preload in <head>:
      <link rel="preload" as="image" href="hero.webp" fetchpriority="high">

   Expected improvement: ~2 second faster load

   Reference: performance/lcp-optimization.md
   Related: audits/02_PERFORMANCE.md

7. Stacked Preset Opportunity (Divi 5 Feature)

   Observation: All your primary buttons have identical styles:
   - Background: #2c5530
   - Border radius: 5px
   - Padding: 15px 30px
   - Font weight: 600
   - Box shadow on hover

   Inspector shows: All 8 button modules have these same modified fields

   Opportunity:
   Create a stacked button preset for easy reuse

   Steps:
   1. Style one button with all desired settings
   2. Click Presets icon (bottom toolbar)
   3. "Add New Preset"
   4. Name: "btn-primary"
   5. Enable "Stack with existing presets"
   6. Save
   7. Apply preset to all 8 buttons
   8. Inspector should show "Preset: btn-primary" (not modified fields)

   Benefits:
   - Apply to new buttons in 1 click
   - Update all buttons by changing preset
   - Inspector shows clean state (no local overrides)
   - Train client to use the preset
   - Smaller JSON file size

   Reference: features/preset-system-complete.md
   Related: audits/04_DIVI5_LOGIC.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ WHAT'S WORKING WELL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Great work on:
- Clean, modern layout
- Good use of whitespace in hero section
- Flexbox implementation for card grid (perfect! Using gap correctly)
- Mobile menu works smoothly
- Images have alt text (accessibility ✓)
- Using Divi 5 features (Inspector, modern spacing)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 RECOMMENDED ACTION PLAN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Priority order:
1. Fix hero contrast (#1) - 2 minutes
2. Increase button touch targets (#2) - 5 minutes
3. Create global color (#3) - 10 minutes
4. Create button preset (#7) - 10 minutes
5. Implement spacing system (#5) - 15 minutes
6. Consider typography scale (#4) - 20 minutes

Total time: ~60 minutes for all priority fixes

Would you like me to help implement any of these fixes?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 RELATED KNOWLEDGE BASE FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For detailed guidance:
- audits/01_UX_VISUAL.md (Colors, typography, spacing)
- audits/02_PERFORMANCE.md (LCP, image optimization)
- audits/03_ACCESSIBILITY.md (WCAG, keyboard nav)
- audits/04_DIVI5_LOGIC.md (Inspector, presets, globals)
- audits/01_UX_VISUAL.md
- features/design-variables.md
- features/preset-system-complete.md
```

---

## ✅ Divi 5 Logic Audit Checklist

**Before submitting findings:**

### Inspector & Modified Fields
□ Used Inspector to check all modules
□ Identified modified fields that should be global
□ Suggested global color adoption where appropriate
□ Suggested global font adoption where appropriate
□ Checked for local overrides of preset values

### Presets
□ Identified opportunities for Element Presets
□ Suggested stacked presets for recurring styles
□ Checked for over-styling (local + preset duplication)
□ Verified preset naming is clear and consistent
□ Recommended Option Group Presets (OGPs) where helpful

### Global Variables
□ All repeated colors suggested as globals
□ All repeated font styles suggested as presets
□ Brand colors identified and suggested as globals
□ Spacing system recommended (with global values)

### Migration (if applicable)
□ Checked if layout was migrated from Divi 4
□ No "legacy compatibility" warnings present
□ Float-based layouts converted to Flexbox/Grid
□ Old spacing system updated to gap-based
□ Deprecated modules replaced

### JSON Structure
□ No unnecessary nesting in layout structure
□ Preset conflicts identified and resolved
□ Critical CSS generating correctly
□ File size reasonable (not bloated with local overrides)

---

**Related Files:**
- `features/preset-system-complete.md`
- `features/design-variables.md`
- `audits/01_UX_VISUAL.md`
- `audits/02_PERFORMANCE.md`
- `audits/03_ACCESSIBILITY.md`

---

**Last Updated:** December 2024
**Divi Version:** 5.x
**Note:** The Inspector is a Divi 5-specific feature. For Divi 4 audits, use manual inspection.
