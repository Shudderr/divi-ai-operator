# Design System Import & Export Workflows

**Purpose:** Step-by-step guide for importing and exporting Divi 5 design systems
**Category:** Workflows
**Priority:** High
**Last Updated:** March 2026
**Divi Version:** 5.x

---

## Overview

Divi 5's design system is completely portable. Export your variables, presets, and templates to reuse across projects or share with team members. This guide covers the complete import/export workflow.

---

## The Correct Import Order

**ALWAYS import in this exact sequence:**

```
1. Theme Customizer Settings (global defaults)
   ↓
2. Design Variables (foundation)
   ↓
3. Presets (styles that use variables)
   ↓
4. Theme Builder Templates (header, footer, etc.)
   ↓
5. Divi Library Items (sections and layouts)
```

**Why this order matters:** Each layer depends on the previous. Presets reference variables, templates use presets, library items use both.

---

## Importing the Divi 5 Design System Freebie

**What's included:**
- Theme Customizer settings
- 100+ Design Variables
- 400+ Element and Option Group Presets
- Theme Builder templates (header, footer, blog, WooCommerce)
- 350+ section layouts
- 24 full page layouts

### Step 1: Import Theme Customizer Settings

**Navigate to:** Divi → Theme Customizer

1. Click **import/export icon** (top-left corner)
2. Click **Choose File**
3. Select: `Divi-5-Launch-Freebie_Theme-Customizer.json`
4. Click **Import Divi Customizer Settings**
5. Click **Publish** to save changes

### Step 2: Import Design Variables

**Navigate to:** Any page in Visual Builder

1. Click **Variable Manager** icon (left sidebar)
2. Click **import/export** icon (top-left of panel)
3. Select **Import** tab
4. Click **Choose File**
5. Select: `Divi-5-Launch-Freebie_Global-Variables.json`
6. Click **Import Variables**
7. **IMPORTANT:** Click **Save Variables**

### Step 3: Import Presets

1. Click **Preset Manager** icon (left sidebar)
2. Click **import/export** icon (top-left)
3. Select **Import** tab
4. Select: `Divi-5-Launch-Freebie_Presets.json`
5. Click **Import Presets**

### Step 4: Import Theme Builder Templates

**Navigate to:** Divi → Theme Builder

1. Click **import/export** icon
2. Select: `Divi-5-Launch-Freebie_Theme-Builder-Templates.json`
3. **UNCHECK "Import Presets"** (already imported)
4. Click **Import Divi Theme Builder Templates**
5. Click **Save Changes**

### Step 5: Import Library Items

**Navigate to:** Divi → Divi Library

Choose one import type:
- `All-Sections_Layouts.json` - Grouped sections
- `All-Individual-Sections.json` - 350+ individual sections
- `Pages.json` - 24 complete page layouts

**UNCHECK "Import Presets"** before importing

---

## Exporting Your Custom Design System

### Step 1: Export Design Variables

1. Variable Manager → Export
2. Save as: `YourBrand-Variables-v1.0.json`

### Step 2: Export Presets

1. Preset Manager → Export
2. Save as: `YourBrand-Presets-v1.0.json`

### Step 3: Export Theme Builder

1. Theme Builder → Export
2. Select templates to export
3. Save as: `YourBrand-Theme-Builder-v1.0.json`

### Step 4: Export Key Sections

1. Divi Library → Export
2. Select your custom sections
3. **UNCHECK "Include Presets"**
4. Save as: `YourBrand-Sections-v1.0.json`

---

## Rebranding the Freebie

### Method 1: Update Variables Manually

**Colors:**
- Variable Manager → Colors → Update primary/accent

**Typography:**
- Variable Manager → Numbers → Keep clamp(), adjust values

**Text Variables:**
- Variable Manager → Text → Replace company info

### Method 2: Find & Replace

```
Find: var(--their-primary)
Replace: var(--your-primary)
Scope: Entire site
```

### Method 3: Update Presets

1. Preset Manager → Edit preset
2. Change colors to your variables
3. Preview → Save
4. All instances update ✓

---

## Version Control

**Naming:**
```
Brand-Component-v1.0.json
Simplicity-Variables-v1.0.json
Simplicity-Presets-v1.1.json
```

**Changelog:**
```
v1.1 - Added service card animations
v1.0 - Initial export
```

---

## Troubleshooting

**Variables don't appear:**
- Did you click "Save Variables"? ← Most common

**Presets don't apply:**
- Import Variables BEFORE Presets

**Import failed:**
- Check file type (.json)
- Try different browser
- Clear cache

---

## Best Practices

**Before Importing:**
- [ ] Backup site
- [ ] Test on staging
- [ ] Read README

**After Importing:**
- [ ] Verify all loaded
- [ ] Test variables/presets
- [ ] Check frontend

**When Exporting:**
- [ ] Version number
- [ ] Include README
- [ ] Create CHANGELOG

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x
