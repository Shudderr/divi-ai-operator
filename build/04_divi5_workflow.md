# Divi 5 Build Workflow - Complete Process

**Purpose:** Step-by-step workflow for building sites with Divi 5's design system
**Category:** Build Process
**Priority:** Critical
**Last Updated:** March 2026
**Divi Version:** 5.x

---

## Overview

Divi 5's design system works best when you follow a specific build order. This workflow ensures consistency, scalability, and efficiency by building from foundation (variables) to structure (presets) to content.

**Core Principle:** Define systems once, apply everywhere, update globally.

---

## The Correct Build Order

**ALWAYS build in this sequence:**

```
1. Design Variables (foundation)
   ↓
2. Option Group Presets (reusable style groups)
   ↓
3. Element Presets (full module styles, with nested OGPs)
   ↓
4. Structure (layout using Flex/Grid)
   ↓
5. Customize & Revise (refinement)
   ↓
6. Optimize & Launch (final polish)
```

**Why this order matters:** Each layer builds on the previous. Variables feed into OGPs, OGPs nest into Element Presets. Change a Variable, everything updates automatically.

---

## Step 1: Design Variables First

**Foundation layer - define these BEFORE anything else.**

### What to Create:

#### Colors
```
Primary Color: #065cfe (your brand blue)
├─ Primary Dark (HSL relative: -10% lightness)
├─ Primary Light (HSL relative: +20% lightness)
└─ Primary Tint (HSL relative: +40% lightness)

Accent Color: #3DD6C4 (your teal)
├─ Accent Dark
├─ Accent Light
└─ Accent Tint

Neutrals:
├─ Dark: #001533
├─ Gray: #64748b
├─ Light Gray: #f5f5f5
└─ White: #ffffff
```

**How to create:**
1. Variable Manager → Colors tab
2. Create base colors first
3. Use Relative Colors feature for shades/tints
4. Test in light and dark contexts

#### Typography
```
Display Headings (with clamp):
├─ H1 Hero: clamp(32px, 4vw, 60px)
├─ H1 Interior: clamp(28px, 3.5vw, 48px)
└─ Hero Paragraph: clamp(16px, 1.8vw, 22px)

Content Headings (static with overrides):
├─ H1: 3.5rem (56px)
├─ H2: 2.5rem (40px)
├─ H3: 2rem (32px)
└─ Body: 1.1rem (17.6px)

Mobile Overrides:
├─ mobile-h1: 2.2rem (35.2px)
├─ mobile-h2: 1.6rem (25.6px)
└─ mobile-p: 1rem (16px)
```

**How to create:**
1. Variable Manager → Numbers tab
2. Use clamp() for display typography
3. Use rem for content typography
4. Create mobile-specific overrides

#### Spacing
```
Macro Spacing (clamp-based):
├─ space-xs: clamp(8px, 1vw, 16px)
├─ space-sm: clamp(16px, 2vw, 24px)
├─ space-md: clamp(24px, 3vw, 48px)
├─ space-lg: clamp(32px, 5vw, 80px)
├─ space-xl: clamp(48px, 6vw, 96px)
└─ space-2xl: clamp(64px, 8vw, 120px)

UI Spacing (static rem):
├─ ui-xs: 0.5rem (8px)
├─ ui-sm: 1rem (16px)
├─ ui-md: 1.5rem (24px)
├─ ui-lg: 2rem (32px)
└─ ui-xl: 3rem (48px)
```

#### Text Variables
```
Company Info:
├─ Company Name: "Simplicity Technologies"
├─ Address: "Brisbane, Queensland, Australia"
├─ Phone: "+61 X XXXX XXXX"
└─ Email: "info@simplicitytechnologies.com.au"

Marketing:
├─ Tagline: "Making IT Management Simple"
├─ Value Prop: "Trusted by 25+ Queensland businesses"
└─ CTA Text: "Start Your Project"
```

#### Images & URLs
```
Images:
├─ Logo Primary
├─ Logo White
├─ Logo Icon
└─ Favicon

URLs:
├─ Facebook URL
├─ LinkedIn URL
├─ Twitter URL
└─ Contact Form URL
```

### Testing Variables

**Before moving to Step 2:**
- [ ] All colors work on light and dark backgrounds
- [ ] Typography scales smoothly (resize browser)
- [ ] Spacing values feel consistent
- [ ] Text variables are accurate
- [ ] Images load correctly
- [ ] URLs are valid

---

## Step 2: Option Group Presets

**Reusable style groups that can be applied to any module.**

### What to Create:

#### Typography OGPs
```
Heading - Primary:
├─ Font: Montserrat
├─ Weight: 700
├─ Letter Spacing: -0.02em
├─ Color: var(--color-dark)
└─ Line Height: 1.2

Body Text - Default:
├─ Font: Inter
├─ Weight: 400
├─ Size: 1.1rem
├─ Color: var(--color-gray)
└─ Line Height: 1.7

Meta Text:
├─ Font: Inter
├─ Weight: 400
├─ Size: 14px
├─ Color: var(--color-gray-light)
└─ Line Height: 1.5
```

#### Spacing OGPs
```
Card Padding - Standard:
├─ Padding: var(--space-md)
└─ All sides

Section Spacing:
├─ Padding Top: var(--space-xl)
└─ Padding Bottom: var(--space-xl)

Button Spacing:
├─ Padding: 18px 48px (desktop)
├─ Padding: 16px 40px (tablet)
└─ Padding: 14px 32px (mobile)
```

#### Border OGPs
```
Card Border - Subtle:
├─ Border: 1px solid rgba(255,255,255,0.18)
├─ Border Radius: 32px
└─ No specific sides

Button Border - Secondary:
├─ Border: 2px solid white
├─ Border Radius: 50px
└─ All sides
```

#### Shadow OGPs
```
Card Shadow - Soft:
├─ Box Shadow: 0 4px 12px rgba(1,37,63,0.08)
└─ Secondary: 0 12px 32px rgba(1,37,63,0.12)

Card Shadow - Hover:
├─ Box Shadow: 0 20px 60px rgba(0,0,0,0.15)
└─ Transition: 0.3s ease
```

### How to Create OGPs:

1. **Style any module** with the settings you want
2. **Click Assign Preset icon** in the option group
3. **Select "New Preset From Current Styles"**
4. **Name it descriptively** (e.g., "Spacing - Card Standard")
5. **Save Preset**

**Best Practice:** Use Design Variables inside OGPs so they update globally.

---

## Step 3: Element Presets (with Nested OGPs)

**Full module styles with Option Group Presets nested inside.**

### Nesting Strategy:

```
Button Element Preset
├─ Typography OGP (nested)
├─ Spacing OGP (nested)
├─ Border OGP (nested)
└─ Custom settings (unique to this button)

Result: Change the Typography OGP → All buttons using it update
```

### What to Create:

#### Button Presets
```
Button - Primary:
├─ Nested: Typography OGP "Button Text"
├─ Nested: Spacing OGP "Button Padding"
├─ Background: var(--color-accent)
├─ Text Color: white
└─ Border Radius: 50px

Button - Secondary:
├─ Nested: Typography OGP "Button Text"
├─ Nested: Spacing OGP "Button Padding"
├─ Nested: Border OGP "Button Border"
├─ Background: transparent
└─ Text Color: white
```

#### Blurb Presets
```
Blurb - Service Card:
├─ Nested: Typography OGP "Heading Primary"
├─ Nested: Typography OGP "Body Text"
├─ Nested: Spacing OGP "Card Padding"
├─ Nested: Border OGP "Card Border"
├─ Nested: Shadow OGP "Card Shadow"
└─ Icon Color: var(--color-accent)
```

#### Text Module Presets
```
Text - Hero Heading:
├─ Nested: Typography OGP "Display Heading"
├─ Text Alignment: Center
├─ Max Width: clamp(320px, 85vw, 900px)
└─ Margin: 0 auto

Text - Body Content:
├─ Nested: Typography OGP "Body Text"
├─ Max Width: clamp(280px, 80ch, 720px)
└─ Line Height: 1.7
```

### How to Create Element Presets with Nested OGPs:

**Method 1: From Styled Module**
1. Style a module completely
2. Assign OGPs to relevant option groups
3. Click module's Assign Preset icon
4. Create new Element Preset
5. Save

**Method 2: From Preset Manager**
1. Preset Manager → Filter by element type
2. Click "+ Add New Preset"
3. Style in Preset Preview
4. Assign OGPs in option groups
5. Save Preset

### Stacked Presets for Variations:

Instead of creating 10 different button presets:

```
Base: Button - Primary (solid teal)
Stack: Button - Large (larger padding)
Stack: Button - Small (smaller padding)

Result: Primary + Large = Large teal button
        Primary + Small = Small teal button
```

**How to stack:**
1. Apply first preset (base)
2. Click Assign Preset again
3. Select second preset
4. Both stack, second overrides conflicting settings

---

## Step 4: Build Structure

**Now that your design system is ready, build layouts.**

### Choose Layout Style Per Container:

#### When to Use Flexbox:
```
✅ Hero sections (vertical centering)
✅ Navigation bars (horizontal alignment)
✅ Button groups (wrapping, spacing)
✅ Card grids (equal heights)
✅ Most everyday layouts
```

#### When to Use CSS Grid:
```
✅ Magazine layouts (complex grids)
✅ Galleries (precise placement)
✅ Dashboard layouts (row + column control)
✅ Overlapping elements
```

#### When to Use Block:
```
✅ Simple stacking
✅ Blog post content
✅ Linear flow layouts
✅ Legacy compatibility
```

### Building Process:

**1. Start with Sections**
- Set Layout Style (usually Flex)
- Add background colors/images
- Set padding using var(--space-xl)

**2. Add Rows**
- Set Layout Style (Flex or Grid)
- Define gaps using variables
- Set max-width: clamp(320px, 90vw, 1200px)

**3. Add Columns**
- Width: Auto (for Flex)
- Or define Grid columns
- Set column-specific settings

**4. Add Modules**
- Apply Element Presets immediately
- Adjust content
- Fine-tune if needed

**5. Use Module Groups**
```
Column
└─ Module Group (can have layout, background, borders)
   ├─ Icon Module
   ├─ Text Module
   └─ Button Module
```

Treat as a reusable component.

**6. Leverage Canvases**
```
Main Canvas: Your visible page
Off Canvas: Pop-ups, menus, overlays

Use Canvas Portal Module to inject off-canvas content
```

### Organization with Layers View:

```
Section (label: "Hero")
└─ Row (label: "Hero Content")
   ├─ Column (label: "Text Block")
   │  ├─ Text (label: "Eyebrow")
   │  ├─ Text (label: "Heading")
   │  └─ Text (label: "Paragraph")
   └─ Column (label: "Buttons")
      ├─ Button (label: "Primary CTA")
      └─ Button (label: "Secondary CTA")
```

Label everything in Layers View for easy navigation.

---

## Step 5: Customize & Revise

**Refinement phase using Divi 5's smart tools.**

### Use the Inspector:

**What it shows:**
- All modified settings for selected element
- Settings for all child elements
- Applied presets
- Variable usage

**How to use it:**
1. Select any section/row/column
2. Open Inspector panel (left sidebar)
3. See all active styles
4. Click any setting to edit directly
5. Changes apply immediately

**Perfect for:**
- Converting Block to Flex layouts
- Finding which preset is applied
- Seeing all spacing at once
- Identifying overrides

### Stack Presets for Variations:

**Instead of creating duplicates:**

```
❌ BAD:
Button - Primary Teal
Button - Primary Teal Large
Button - Primary Teal Small
Button - Secondary White
Button - Secondary White Large
Button - Secondary White Small
= 6 presets to maintain

✅ GOOD:
Button - Primary Teal
Button - Secondary White
Button - Size Large
Button - Size Small
= 4 presets, mix and match
```

### Use Find & Replace:

**Common scenarios:**

**Adopt Design Variables:**
```
Find: Static color #065cfe
Replace: var(--color-primary)
Scope: Entire page

Result: All instances now use variable
```

**Update spacing:**
```
Find: Padding 32px
Replace: var(--space-lg)
Scope: All sections

Result: Spacing now responsive via clamp()
```

**Bulk content update:**
```
Find: "Company Name Here"
Replace: var(--company-name)
Scope: Entire site

Result: Update variable once, changes everywhere
```

### Responsive Testing:

**Use Responsive Editor:**
1. Select module
2. Open Responsive Editor (panel icon)
3. View all 7 breakpoints side-by-side
4. Adjust settings per breakpoint
5. Changes apply in real-time

**Breakpoints to test:**
- Phone (< 479px)
- Phone Wide (480-767px)
- Tablet (768-980px) ← iPad portrait
- Tablet Wide (981-1279px) ← iPad landscape
- Desktop (1280-1919px)
- Widescreen (1920-2559px)
- Ultra Wide (2560px+)

**Enable/disable breakpoints:**
Visual Builder → Three-dot menu → Responsive Settings

### Preview Changes Safely:

**Before applying preset changes site-wide:**

1. Open Preset Manager
2. Select preset to modify
3. Click Edit
4. Preset Preview opens
5. Make changes
6. See preview before saving
7. Save only when satisfied

This prevents breaking your site with bad changes.

---

## Step 6: Optimize & Launch

**Final polish before going live.**

### Set Global Defaults:

**For each frequently-used preset:**

1. Preset Manager
2. Find your Button - Primary preset
3. Click the **star icon** (Set as Default)
4. Now every new button automatically uses this style

**Set defaults for:**
- Button modules
- Text modules
- Blurb modules
- Image modules
- Any module used throughout site

Result: New pages inherit your design system automatically.

### Accessibility Pass:

**Semantic Elements:**
```
Header Section → <header>
Navigation Row → <nav>
Main Content Section → <main>
Footer Section → <footer>
Article Section → <article>
Sidebar Column → <aside>
```

**How to set:**
Module Settings → Advanced → HTML → HTML Element Tag

**Check for:**
- [ ] All links have descriptive text
- [ ] Images have alt text
- [ ] Form inputs have labels
- [ ] Minimum 16px font for mobile
- [ ] 44px minimum touch targets
- [ ] Sufficient color contrast

### Performance Check:

**Before launch:**
- [ ] Images optimized (WebP format)
- [ ] No excessive animations
- [ ] Clean unused CSS (Divi 5 handles this)
- [ ] Minimal custom CSS
- [ ] Test on mobile data connection

### Export Your Design System:

**Create reusable template for future projects:**

**Export these:**
1. **Variable Manager → Export**
   - Saves all Design Variables as JSON
   - File: `YourBrand-Variables.json`

2. **Preset Manager → Export**
   - Saves all Element + Option Group Presets
   - File: `YourBrand-Presets.json`

3. **Theme Builder → Export**
   - Saves header, footer, templates
   - File: `YourBrand-Theme-Builder.json`

4. **Divi Library → Export**
   - Select key sections
   - File: `YourBrand-Library-Sections.json`

**Store all in:**
```
YourBrand-Design-System/
├─ YourBrand-Variables.json
├─ YourBrand-Presets.json
├─ YourBrand-Theme-Builder.json
├─ YourBrand-Library-Sections.json
└─ README.txt (import order instructions)
```

**For next project:**
Import in this exact order:
1. Variables
2. Presets
3. Theme Builder
4. Library items

---

## Workflow Checklist

**Use this for every new build:**

### Foundation
- [ ] Design Variables created
- [ ] Colors (with HSL relatives)
- [ ] Typography (with clamp)
- [ ] Spacing system
- [ ] Text/Image/URL variables

### Style System
- [ ] Option Group Presets created
- [ ] Typography OGPs
- [ ] Spacing OGPs
- [ ] Border/Shadow OGPs
- [ ] Element Presets created
- [ ] OGPs nested inside Element Presets
- [ ] Stacked variations created

### Structure
- [ ] Layout style chosen (Flex/Grid/Block)
- [ ] Sections organized
- [ ] Rows configured
- [ ] Modules added
- [ ] Presets applied
- [ ] Layers labeled
- [ ] Module Groups used where appropriate

### Refinement
- [ ] Inspector used for targeted edits
- [ ] Stacked presets for variations
- [ ] Find & Replace for bulk updates
- [ ] Responsive Editor tested all breakpoints
- [ ] Preview checked before applying changes

### Launch
- [ ] Global defaults set
- [ ] Semantic elements assigned
- [ ] Accessibility checked
- [ ] Performance optimized
- [ ] Design system exported

---

## Common Workflow Mistakes

### Mistake 1: Building Without Variables First
```
❌ WRONG ORDER:
Create modules → Style them → Try to convert to variables later

✅ CORRECT ORDER:
Create variables → Create presets → Apply to modules

Why: Converting after the fact is tedious and error-prone
```

### Mistake 2: Not Nesting OGPs
```
❌ WRONG:
Create Element Presets with all settings hardcoded

✅ CORRECT:
Create OGPs → Nest them in Element Presets

Why: Changing nested OGP updates all Element Presets using it
```

### Mistake 3: Too Many Unique Presets
```
❌ WRONG:
Button Primary Large
Button Primary Medium
Button Primary Small
Button Secondary Large
Button Secondary Medium
Button Secondary Small
= 6 presets

✅ CORRECT:
Button Primary
Button Secondary
Button Size Large
Button Size Medium
Button Size Small
= 5 presets, stackable

Why: Fewer presets to maintain, more flexible combinations
```

### Mistake 4: Skipping Layers View Organization
```
❌ WRONG:
Default labels: "Section", "Row", "Column", "Text"

✅ CORRECT:
Custom labels: "Hero", "Hero Content", "CTA Buttons", "Headline"

Why: Easy navigation in complex builds
```

### Mistake 5: Not Testing Responsive
```
❌ WRONG:
Build on desktop, assume it works on mobile

✅ CORRECT:
Use Responsive Editor to test all breakpoints as you build

Why: Catch issues early, not at launch
```

### Mistake 6: Forgetting to Export
```
❌ WRONG:
Build amazing site, lose all work when starting new project

✅ CORRECT:
Export design system after every major project

Why: Reuse your work across all future projects
```

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Variable creation and management
- `preset-system-complete.md` - Preset nesting and stacking
- `advanced-units.md` - Using clamp() in variables

**Integration:**
- `01_system_setup.md` - Initial design system setup
- `02_divi5_mechanics.md` - Tools and features reference
- `design-system-import.md` - Import/export workflows

**Workflows:**
- `starting-new-project.md` - Project kickoff process
- `audits/00_MASTER_INDEX.md` - Auditing existing sites

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x
