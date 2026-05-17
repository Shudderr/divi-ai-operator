# Preset System - Complete Guide

**Purpose:** Master Divi 5's preset system for scalable, maintainable designs
**Category:** Core Features  
**Priority:** Critical
**Last Updated:** March 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Presets are saved design configurations that can be reused and updated globally. Divi 5's preset system is class-based (not inline styles), resulting in smaller CSS, faster page loads, and instant site-wide updates.

**Key Philosophy:** Style once, apply everywhere, update globally.

---

## Preset Types

### 1. Default Presets

**What:** Baseline styles applied to all new elements automatically

**Two subtypes:**
- **Default Element Presets:** Complete module configurations
- **Default Option Group Presets:** Shared styles across elements

**Setting Defaults:**
1. Style an element perfectly
2. Preset dropdown → "Set as Default Preset"
3. Choose "This device" or "All devices"
4. All NEW elements of that type inherit these styles

---

### 2. Element Presets

**What:** Complete module configurations (content, design, advanced settings)
**Scope:** Module-specific (Button preset only works on Buttons)

**Examples:**
- Primary Button (color, size, shadow, hover, radius)
- Feature Card Blurb (layout, icon, spacing, colors)
- Hero Heading (typography, alignment, spacing)

**Creating:**
1. Style module completely
2. Preset dropdown → "New Preset From Current Styles"
3. Name descriptively
4. Save

**Updating:**
- Edit any module using preset
- Preset dropdown → "Update Preset"
- ALL modules using that preset update instantly

---

### 3. Option Group Presets

**What:** Individual style attributes that work across ALL compatible elements
**Power:** Most versatile preset type

**Examples:**
- Border styles (work on any module with borders)
- Box shadows (work on any module)
- Typography (work on any text)
- Background gradients
- Spacing patterns

**Creating:**
1. Style specific option group (e.g., Border settings)
2. In that option group, click preset icon
3. "New Preset From Current Styles"
4. Name it
5. Save

---

### 4. Stacked Presets (NEW)

**What:** Apply multiple presets to single element
**Power:** Mix and match combinations

**Example:**
```
Button Module applies:
1. "Button Base" (structure, padding)
2. "Primary Color" (brand colors)
3. "Shadow Hover" (interaction)

All three stack together
```

**Benefits:**
- Modular design approach
- No duplicate presets needed
- Example: 3 bases × 4 colors × 2 effects = 24 combinations from 9 presets

---

### 5. Nested Presets (NEW)

**What:** Embed Option Group Presets inside Element Presets
**Power:** Presets within presets - the most powerful pattern in Divi 5

**Example:**
```
"Feature Blurb" Element Preset contains:
├─ Light Background (Option Group)
├─ Standard Spacing (Option Group)
├─ Rounded Corners (Option Group)
└─ Icon Accent Color (Option Group)
```

**Benefit:** Update nested preset = updates all elements using it

**Complete Nesting Workflow:**

#### Step 1: Create Option Group Presets First

**Typography OGP:**
```
1. Style any text module
2. Design → Text settings
3. Configure: Font, size, weight, color, spacing
4. Click preset icon in Text option group
5. "New Preset From Current Styles"
6. Name: "Typography - Heading Primary"
7. Save
```

**Spacing OGP:**
```
1. Style any module
2. Design → Spacing settings
3. Configure padding/margins
4. Click preset icon in Spacing option group
5. "New Preset From Current Styles"
6. Name: "Spacing - Card Standard"
7. Save
```

**Border OGP:**
```
1. Style any module
2. Design → Border settings
3. Configure borders, radius
4. Click preset icon in Border option group
5. "New Preset From Current Styles"
6. Name: "Border - Rounded Accent"
7. Save
```

#### Step 2: Create Element Preset and Nest OGPs

**From a Styled Module:**
```
1. Add Button module to page
2. Design → Text → Assign "Typography - Button Text" OGP
3. Design → Spacing → Assign "Spacing - Button Standard" OGP
4. Design → Border → Assign "Border - Rounded Full" OGP
5. Set unique settings (background color, icon, etc.)
6. Click module's Assign Preset icon (top right)
7. "New Preset From Current Styles"
8. Name: "Button - Primary"
9. Save
```

**From Preset Manager:**
```
1. Visual Builder → Preset Manager
2. Filter: Button (or desired module)
3. Click "+ Add New Preset"
4. Preset Preview window opens
5. Design → Text → Assign OGP "Typography - Button Text"
6. Design → Spacing → Assign OGP "Spacing - Button Standard"
7. Design → Border → Assign OGP "Border - Rounded Full"
8. Add unique styling (colors, etc.)
9. Name: "Button - Primary"
10. Save Preset
```

#### Step 3: Update Nested OGP = All Elements Update

**The Power of Nesting:**
```
You have 20 buttons using "Button - Primary" preset.

"Button - Primary" contains nested "Spacing - Button Standard" OGP.

To change ALL button padding site-wide:
1. Preset Manager → Option Group Presets
2. Find "Spacing - Button Standard"
3. Edit → Change padding from 16px to 18px
4. Preview (safe preview before saving)
5. Save

Result: All 20 buttons update instantly ✓
```

**Why This Matters:**
```
Without nesting:
- Edit "Button - Primary" preset
- 20 buttons update ✓

With nesting:
- Edit "Spacing - Button Standard" OGP
- ALL presets using it update
- Buttons, Blurbs, Cards, CTAs - everything ✓
```

#### Nesting Best Practices:

**1. Create Focused OGPs:**
```
✅ GOOD:
- "Typography - Heading Primary" (just text settings)
- "Spacing - Card Standard" (just spacing)
- "Border - Accent Left" (just borders)

❌ BAD:
- "Everything - Card Style" (mixes too much)
```

**2. Reuse OGPs Across Element Types:**
```
"Spacing - Standard" OGP used in:
- Button Element Presets
- Blurb Element Presets
- CTA Element Presets
- Text Element Presets

Change once → affects all ✓
```

**3. Layer Nesting Strategically:**
```
Element Preset: "Service Card"
├─ Typography OGP: "Heading Secondary" (nested)
│  └─ Uses Design Variable: var(--font-heading)
├─ Spacing OGP: "Card Standard" (nested)
│  └─ Uses Design Variable: var(--space-md)
└─ Unique styling: Icon color, background

Three-tier system:
1. Design Variables (foundation)
2. Option Group Presets (reusable groups)
3. Element Presets (complete modules)

Change variable → OGPs update → Element Presets update → All modules update
```

---

## Essential Preset Library

### Button System

**1. Button Base (Foundation)**
```
Padding: 16px 32px (NOT clamp - critical UI)
Border Radius: 8px
Font Weight: 600
Font Size: 16px (static - NOT clamp)
Transition: all 0.3s ease
```

**2. Color Variants (Stack on Base)**
```
Primary Button:
- Background: var(--color-primary)
- Text: #FFFFFF

Secondary Button:
- Background: transparent
- Text: var(--color-primary)
- Border: 2px solid var(--color-primary)
```

**3. Hover Effects (Option Group)**
```
Hover Lift:
- Transform: translateY(-2px)
- Shadow: 0 4px 8px rgba(0,0,0,0.15)

Hover Shadow:
- Shadow: 0 8px 16px rgba(0,0,0,0.2)
```

---

### Card System

**1. Card Base (Option Group Presets)**
```
"Card Background Light":
- Background: #FFFFFF
- Border: 1px solid #E0E0E0

"Card Spacing Standard":
- Padding: 32px (or var(--ui-lg))

"Card Corners Rounded":
- Border Radius: 12px

"Card Shadow Subtle":
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
```

**2. Feature Card (Element - Uses Option Groups Above)**
```
Nested Presets Applied:
- Card Background Light
- Card Spacing Standard
- Card Corners Rounded
- Card Shadow Subtle

Additional Styling:
- Icon: 48px (static)
- Icon color: var(--color-primary)
- Heading: 24px, semi-bold
- Text: 16px (static), line-height 1.6
```

---

### Typography System

**Display Typography (Uses Clamp)**
```
"Hero H1":
- Font Size: clamp(32px, 6vw, 90px)
- Line Height: 1.2
- Font Weight: 700

"Feature Heading":
- Font Size: clamp(24px, 4vw, 52px)
- Line Height: 1.3
- Font Weight: 600
```

**Content Typography (Static)**
```
"H1 Content":
- Font Size: 42px (or 2.625rem)
- Line Height: 1.3
- Font Weight: 700

"Body Default":
- Font Size: 18px (or 1.125rem)
- Line Height: 1.6

"UI Text":
- Font Size: 16px (or 1rem)
- Line Height: 1.5
```

---

### Spacing Presets

**Section Spacing (Uses Clamp)**
```
"Section Padding XL":
- Padding Top/Bottom: clamp(48px, 6vw, 96px)
- Padding Left/Right: clamp(20px, 3vw, 40px)

"Section Padding LG":
- Padding Top/Bottom: clamp(32px, 5vw, 80px)
- Padding Left/Right: 20px
```

**Module Spacing (Static)**
```
"Spacing Standard":
- Padding: 24px (or var(--ui-md))
- Margin Bottom: 24px

"Spacing Tight":
- Padding: 16px (or var(--ui-sm))
- Margin Bottom: 16px
```

---

## Preset Workflow

### Starting New Project

**Step 1: Plan Preset Library (15 min)**
```
Element Presets Needed:
- Primary/Secondary/Text Buttons
- Hero/Section/Content Headings
- Feature/Testimonial Cards

Option Group Presets Needed:
- Light/Dark Backgrounds
- Standard/Tight/Large Spacing
- Drop Shadow/Border variations
```

**Step 2: Create Option Group Presets First (30 min)**
- Spacing presets (3-4 variations)
- Background presets (3-4 variations)
- Border/shadow presets (2-3 variations)

**Step 3: Create Element Presets Using Option Groups (1 hour)**
- Style module
- Apply Option Group Presets
- Add element-specific styling
- Save as Element Preset

**Step 4: Set Default Presets (15 min)**
- Button → Primary Button
- Text → Body Text Style
- Headings → Respective presets

---

## Integration with Design Variables

**Always use variables in presets:**

**❌ Wrong:**
```
Background: #11435B (hard-coded)
Padding: 24px (hard-coded)
```

**✅ Correct:**
```
Background: var(--color-primary)
Padding: var(--spacing-standard)
```

**Benefits:**
1. Change variable = updates all presets using it
2. Change preset = updates all modules using it
3. Two-tier update system = maximum flexibility

---

## Stacked Presets Strategy

### Base + Variation Pattern

**Create modular system:**
```
Base Presets:
- Button Base (structure)
- Card Base (layout)

Color Variations:
- Primary Colors
- Secondary Colors
- Accent Colors

Effect Variations:
- Hover Lift
- Hover Shadow
- Hover Glow

Mix and match any combination
```

**Example:**
```
CTA Button = Button Base + Primary Colors + Hover Lift
Secondary Button = Button Base + Secondary Colors + Hover Shadow
```

---

## Nested Preset Hierarchies

**Build complex components from simple parts:**

```
Create Option Group Presets:
1. "Background Light"
2. "Spacing Standard"
3. "Border Accent"

Create Element Preset Using Above:
"Feature Card" nests:
- Background Light
- Spacing Standard
- Border Accent
- Plus icon/heading styling

Update "Background Light" globally:
- All Feature Cards update automatically
```

---

## Preset Naming Conventions

**Format:** `[Type]-[Variant]-[State]`

**Element Presets:**
```
btn-primary
btn-secondary-outline
card-feature-light
heading-hero-gradient
```

**Option Group Presets:**
```
bg-light-subtle
bg-dark-solid
spacing-standard
spacing-tight
shadow-subtle
shadow-hover
border-accent-left
corners-rounded-md
```

---

## Preset Manager (Public Beta 7+)

**Centralized command center for all your presets.**

### Accessing Preset Manager:
```
Visual Builder → Preset Manager icon (left sidebar)
Or: Keyboard shortcut (check Visual Builder for current)
```

### Key Features:

#### 1. Visual Preset Browser
**What you see:**
- All Element Presets with visual previews
- All Option Group Presets organized by category
- Filter by module type (Button, Text, Blurb, etc.)
- Search by preset name
- Sort options (alphabetical, recent, etc.)

**Navigation:**
```
Left Sidebar:
- Element Presets (by module type)
  ├─ Button (12 presets)
  ├─ Text (8 presets)
  ├─ Blurb (15 presets)
  └─ etc.

- Option Group Presets (by category)
  ├─ Typography (20 presets)
  ├─ Spacing (15 presets)
  ├─ Border (10 presets)
  └─ etc.
```

#### 2. Preset Preview (Safe Editing)
**Critical feature - preview before applying changes site-wide!**

**How to use:**
```
1. Preset Manager → Select any preset
2. Click "Edit" or preset name
3. Preset Preview window opens
4. Make changes in preview
5. See real-time preview of changes
6. Click "Preview" to test without saving
7. Only click "Save" when satisfied
```

**What you can edit:**
- All Content settings
- All Design settings
- All Advanced settings
- Nested Option Group Presets
- Device-specific overrides

**Why this matters:**
```
❌ WITHOUT Preview:
Edit preset → Save → Entire site changes → Hope it looks good

✅ WITH Preview:
Edit preset → Preview → Test → Adjust → Preview → Perfect → Save
```

#### 3. Create Presets Directly
**Don't need a module on the page to create presets:**

```
1. Preset Manager → Filter by module type
2. Click "+ Add New Preset"
3. Preset Preview opens with blank module
4. Style the module
5. Assign Option Group Presets
6. Add Design Variables
7. Name the preset
8. Save

No need to add module to page first!
```

#### 4. Manage Preset Relationships
**See what's nested where:**

```
Click any Element Preset → Shows:
- Which Option Group Presets are nested
- Which Design Variables are used
- Where this preset is applied (module count)
- Related presets
```

**Edit nested relationships:**
```
1. Open Element Preset in Preset Manager
2. Navigate to option group (Text, Spacing, etc.)
3. Change assigned Option Group Preset
4. Or remove nested preset
5. Save

All modules using Element Preset update with new relationship
```

#### 5. Set Global Defaults
**Star icon = Default Preset:**

```
1. Preset Manager → Find preset
2. Click star icon ⭐
3. Preset becomes default for that module type

Result: Every NEW module added uses this preset automatically
```

**Strategic defaults to set:**
- Button → Your primary button style
- Text → Your body text style
- Heading (H1, H2, H3) → Your heading hierarchy
- Blurb → Your standard card style

**Saves hours:** No need to apply presets to every new module.

#### 6. Export & Import
**Portable preset libraries:**

**Export All Presets:**
```
1. Preset Manager → Import/Export icon
2. Export tab
3. Click "Export Presets"
4. Saves: YourSite-Presets.json
```

**Export Selective:**
```
Currently: Exports all presets (no selective export yet)
Workaround: Clean up presets before exporting
```

**Import Presets:**
```
1. Preset Manager → Import/Export icon
2. Import tab
3. Choose file: YourSite-Presets.json
4. Click "Import Presets"
5. All presets load into current site
```

**Best practice:**
```
Export after every major project:
- Simplicity-MSP-Presets-v1.0.json
- Simplicity-MSP-Presets-v1.1.json
- etc.

Reuse across all client sites
```

#### 7. Search & Filter
**Find presets fast:**

**Search by name:**
```
Search box: Type "primary"
Results: All presets with "primary" in name
- Button - Primary
- Primary Colors
- Primary Heading
```

**Filter by type:**
```
Dropdown: Select "Button"
Results: Only Button Element Presets
```

**Filter Option Group Presets:**
```
Option Group tab → Select category
- Typography
- Spacing
- Border
- Shadows
- etc.
```

#### 8. Duplicate & Variations
**Create variations quickly:**

```
1. Find existing preset (e.g., "Button - Primary")
2. Hover → Click duplicate icon
3. Creates "Button - Primary (Copy)"
4. Edit the copy
5. Rename to "Button - Secondary"
6. Save

Faster than creating from scratch
```

#### 9. Delete Presets
**Clean up unused presets:**

```
1. Preset Manager → Find preset
2. Hover → Click delete icon (trash)
3. Confirm deletion

Warning: Check where preset is used first!
Preset Manager shows usage count
```

**Safe deletion workflow:**
```
1. Check usage count (should be 0)
2. Search site for preset name
3. Confirm no modules use it
4. Delete
5. Clear Divi cache
```

### Preset Manager Workflow:

**Daily use:**
```
1. Open Preset Manager
2. Apply presets to modules (drag or click)
3. Quick edits in Preset Preview
4. Check usage/relationships
5. Set new defaults as needed
```

**Project setup:**
```
1. Import base preset library
2. Create project-specific presets
3. Set defaults
4. Export customized library
5. Use for all pages in project
```

**Maintenance:**
```
1. Review unused presets (low/zero usage)
2. Consolidate duplicates
3. Update outdated naming
4. Export current state
5. Document changes in CHANGELOG
```

---

## Exporting & Importing

**Exporting:**
1. Divi → Divi Options → Import/Export
2. Export "Presets"
3. Saves JSON file

**Importing:**
1. Divi → Divi Options → Import/Export
2. Select "Presets"
3. Upload JSON file

**Template Best Practice:**
```
Include in packages:
1. design-variables.json
2. presets.json
3. README.md
```

---

## Troubleshooting

### Preset Not Applying
**Solutions:**
1. Check module type compatibility
2. Reset module to default first
3. Clear Divi cache
4. Remove manual overrides

### Preset Updates Not Showing
**Solutions:**
1. Clear Divi cache (Divi → Divi → Clear Cache)
2. Clear browser cache (Cmd/Ctrl + Shift + R)
3. Verify module uses preset
4. Check for manual overrides

### Stacked Presets Conflicting
**Solutions:**
1. Check application order (last wins)
2. Review property overlaps
3. Create more focused presets
4. Remove conflicting preset

---

## Best Practices

**1. Create Design Variables First**
- Then reference in presets
- Never hard-code values

**2. Use Descriptive Names**
- "Hero Section - Dark Background" not "Section 2"
- "Primary CTA Button" not "Button Style"

**3. Start with Defaults**
- Set Default Presets early
- Creates baseline for entire site

**4. Keep Presets Focused**
- One purpose per Option Group Preset
- Combine with stacking for variations

**5. Test Before Editing**
- Editing updates EVERYWHERE
- Test on staging if unsure

**6. Follow Clamp() Philosophy**
- Display headings: use clamp()
- Body text: static sizes
- UI elements: static 16px
- Section spacing: use clamp()

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Using variables in presets
- `advanced-units.md` - Understanding clamp()
- `../build/01_system_setup.md` - Design foundations

**Workflows:**
- `../workflows/starting-new-project.md` - Preset workflow
- `../workflows/design-system-import.md` - Export and import preset libraries
- `../build/02_divi5_mechanics.md` - Applying presets

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
