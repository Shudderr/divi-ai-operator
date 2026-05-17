---
last_verified_version: 5.0.0
status: active  
last_updated: December 2024
---

# Global Variables in Divi 5

**Feature:** Centralized design system management  
**Since:** Divi 4.0 (expanded in 5.0)  
**Last Tested:** December 2024 - Divi 5.x

---

## Overview

Global Variables let you define colors, fonts, and spacing ONCE and use them throughout your entire site. Change one value, update everywhere instantly.

**Types:**
- Global Colors
- Global Fonts (Font Presets)
- Global Styles (coming soon)

---

## Global Colors

### Where to Access
**Location:** Any color picker → "Global Colors" tab

**Or Manage All:**
Divi → Theme Customizer → Global Styles → Colors

### Creating Global Colors

**Method 1: From Color Picker**
1. Open any module color setting
2. Click color picker
3. Select "Global Colors" tab
4. Click "+ Add Global Color"
5. Name it (e.g., "Primary Brand Color")
6. Choose color
7. Save

**Method 2: From Customizer**
1. Divi → Theme Customizer
2. Global Styles → Colors
3. Click "Add Custom Color"
4. Name and define

---

### Using Global Colors

**In Modules:**
1. Open color picker for any property (background, text, border, etc.)
2. Click "Global Colors" tab
3. Select your color

**Visual Indicator:** Global colors show a "globe" icon in the color picker

---

### Default Global Colors

Divi includes pre-defined global colors:
- **Primary:** Usually your brand color
- **Secondary:** Accent color
- **Accent:** Highlight color
- **Light:** Background/light elements
- **Dark:** Text/dark elements

**You can customize these!** Don't feel locked into the defaults.

---

### Custom Global Colors Best Practices

**Naming Convention:**
```
✅ Good:
- Brand Primary
- Brand Secondary
- Accent Pink
- Success Green
- Error Red
- Background Light
- Text Dark

❌ Avoid:
- Color 1
- Blue
- My Color
```

**Recommended Palette:**
```
Essential:
- Primary (main brand color)
- Secondary (complementary color)
- Accent (call-to-action)
- Success (green - confirmations)
- Warning (yellow - cautions)
- Error (red - errors)
- Background (site background)
- Text Primary (main text)
- Text Secondary (lighter text)
- Border (dividers, borders)

Optional:
- Header Background
- Footer Background
- Button Primary
- Button Secondary
```

---

### Managing Global Colors

**Edit Global Color:**
1. Divi → Theme Customizer → Global Styles → Colors
2. Click color to edit
3. Change value
4. **All instances update automatically**

**Delete Global Color:**
1. Same location
2. Click trash icon
3. **Warning:** Modules using this color revert to local colors

---

## Global Font Presets

### Where to Access
**Location:** Any text module → Design → Text → Font

**Or Manage All:**
Divi → Theme Customizer → Global Styles → Typography

### Creating Font Presets

1. Style text in a module (font, size, weight, spacing, etc.)
2. Click preset icon (folder with star)
3. "Add New Preset"
4. Name it (e.g., "H1 Heading")
5. Save

**Now you can apply "H1 Heading" to any text module!**

---

### Using Font Presets

1. Open Text module → Design → Text → Font
2. Click dropdown
3. Select your preset

**Changes apply:**
- Font family
- Font weight
- Font size (responsive)
- Line height
- Letter spacing
- Text transform

---

### Recommended Font Presets

```
Headings:
- H1 Main (hero titles)
- H2 Section (section headers)
- H3 Subsection
- H4 Small Heading

Body Text:
- Body Large (intro paragraphs)
- Body Default (regular text)
- Body Small (fine print)

Special:
- Button Text
- Navigation Link
- Quote Text
- Caption Text
```

---

## Stacked Presets (Advanced)

### What Are Stacked Presets?

Instead of ONE preset controlling everything, you can **layer** multiple presets on a single module.

**Example:**
```
Module applies:
1. "Card Background" preset (background color, padding, shadow)
2. "Hover Lift" preset (hover animation)
3. "Primary Button" preset (text styling)

Result: All three presets work together!
```

### How to Create Stackable Presets

1. Style your module
2. Click preset icon
3. "Add New Preset"
4. Name it
5. **✅ Check: "Allow this preset to be combined with others"**
6. Save

### Using Stacked Presets

1. Apply first preset
2. Apply second preset
3. Apply third preset
4. They layer on top of each other!

**Order matters:** Later presets override earlier ones if properties conflict.

---

### Stacked Preset Examples

**Example 1: Button System**
```
Preset Stack:
1. "Button Base" (padding, border-radius, display: inline-block)
2. "Primary Color" (background: brand color)
3. "Hover Grow" (transform: scale on hover)

Apply all three → Consistent, animated button
```

**Example 2: Card System**
```
Preset Stack:
1. "Card Container" (background, padding, shadow)
2. "Border Accent" (left border color)
3. "Fade In Animation" (entrance animation)
```

---

## CSS Variables (Advanced)

Divi uses CSS custom properties for global colors:

```css
/* Access global colors in custom CSS */
.my-element {
    background-color: var(--et-global-color-primary);
    color: var(--et-global-color-text-dark);
    border: 2px solid var(--et-global-color-accent);
}
```

**Available Variables:**
- `--et-global-color-primary`
- `--et-global-color-secondary`
- `--et-global-color-accent`
- etc. (inspect to find exact names)

**Why use this?**
- Keeps custom CSS tied to global system
- Changes when you update global colors
- Maintains consistency

---

## Best Practices

### 1. Define Global System FIRST
Before building pages:
1. Set global colors (6-10 colors)
2. Create font presets (4-6 presets)
3. Document your system

### 2. Use Everywhere
Don't mix global and local:
- ❌ Some buttons use global, some use local colors
- ✅ All buttons use global colors

### 3. Name Descriptively
- ✅ "CTA Button Background"
- ❌ "Color 7"

### 4. Limit Your Palette
- Too many colors = inconsistent design
- Aim for 8-12 global colors max

### 5. Export Your Globals
**Location:** Divi → Theme Customizer → Import/Export

**Why:**
- Backup your design system
- Reuse across client sites
- Share with team members

---

## Common Issues

### Global Color Not Updating
**Cause:** Browser cache

**Fix:**
1. Clear Divi cache (Divi → Divi → Clear Cache)
2. Clear browser cache (Cmd+Shift+R)

### Can't Find My Global Color
**Cause:** Too many colors, poor naming

**Fix:**
- Delete unused globals
- Rename for clarity
- Organize by type (Brand, UI, Text, etc.)

### Preset Not Applying Fully
**Cause:** Module settings override preset

**Fix:**
- Reset module to default first
- Then apply preset

---

## Migration from Local to Global

**Already built a site with local colors?**

**Option 1: Manual Update**
1. Create global colors
2. Go through modules, replace local with global

**Option 2: Find & Replace (CSS)**
```css
/* Replace all instances of #e23a95 with global color */
/* Then update modules to use global picker */
```

**Time Investment:** Worth it for long-term sites!

---

## Client Handoff

When handing off to clients:

1. **Document your global system:**
   ```
   Brand Colors:
   - Primary: #2c5530 (Dark Green)
   - Secondary: #e23a95 (Pink)
   - Accent: #ffcc00 (Yellow)
   
   Usage:
   - Primary: Headers, CTA buttons
   - Secondary: Accent sections, hover states
   - Accent: Highlights, icons
   ```

2. **Train them:** "Always use global colors, never local"

3. **Lock down if needed:** Some themes allow restricting color picker

---

## [ADD YOUR NOTES]

```
Date:
Project:
Global Colors Used:
Global Fonts Created:
Learnings:
```

---

**Related Files:**
- `features/preset-system-complete.md` for more on preset stacking
- `customization/css-snippets.md` for using CSS variables

---

**Last Updated:** December 2024  
**Divi Version:** 5.x
