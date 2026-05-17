# Nested Modules

**Purpose:** Complete guide to infinite module nesting in Divi 5
**Category:** Core Features
**Priority:** High
**Last Updated:** January 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Nested Modules allow placing modules inside other modules infinitely. Every module can become a container, enabling complex component building without multiple sections.

**Key Benefit:** Build complete card components, sliders, accordions, and tabs with full layout control inside single modules.

---

## How It Works

**Simple Process:**

1. Add module (e.g., Blurb, Accordion, Slider)
2. Open module settings → Content tab
3. Expand "Elements" dropdown
4. Click "+ Add Element"
5. Choose module to nest
6. Repeat infinitely (modules within modules within modules)

**Every module can nest other modules**

---

## Modules as Layout Containers

### Flexbox Container

**Make any module a flex container:**

```
Blurb Module Settings:
- Design > Layout > Layout Style: Flex
- Layout Direction: Column
- Vertical Gap: clamp(8px, 1.5vw, 24px)

Inside Blurb (nested):
- Icon module
- Heading module
- Text module
- Button module

Result: Perfectly spaced card component with consistent gaps
```

### Grid Container

```
Accordion Module Settings:
- Design > Layout > Layout Style: Grid
- Grid Template Columns: repeat(2, 1fr)
- Gap: clamp(16px, 3vw, 48px)

Inside Accordion Tab (nested):
- 4 Image modules
- Fill grid cells automatically

Result: 2-column gallery inside accordion
```

---

## Use Cases

### 1. Custom Cards

**Before Nested Modules:**
```
Section → Row → Column → 4 separate modules per card
4 cards = 16 modules total
Hard to manage, no grouping
```

**With Nested Modules:**
```
Section → Row → Column → 4 Blurbs
Each Blurb contains: Icon, Heading, Text, Button
4 cards = 4 parent modules (easier management)
```

**Benefits:**
- Group related content
- Move entire card at once
- Apply preset to parent = styles all children
- Cleaner outline panel

### 2. Enhanced Sliders

**Traditional Slider:**
- Limited to basic content per slide
- No complex layouts

**Nested Module Slider:**
```
Slider Module
├─ Slide 1
│  └─ Nested Row (inside slide)
│     ├─ Column 1: Image + Text
│     └─ Column 2: Form
├─ Slide 2
│  └─ Nested Row
│     ├─ Full-width hero content
│     └─ Buttons + CTAs

Result: Each slide = mini landing page
```

### 3. Tab Content Layouts

**Build complete sections per tab:**

```
Tab Module
├─ Tab 1: "Services"
│  └─ Nested Row
│     ├─ 3 columns with Blurbs (nested icons/text)
│     └─ CTA button at bottom
├─ Tab 2: "Portfolio"
│  └─ Nested Row (Grid layout)
│     └─ Image modules in grid
├─ Tab 3: "Contact"
│  └─ Nested Row
│     ├─ Contact Form module
│     └─ Map module

Result: Each tab = complete section
```

### 4. Accordion with Rich Content

```
Accordion Module
├─ FAQ Item 1
│  └─ Nested modules:
│     ├─ Text (answer)
│     ├─ Image (diagram)
│     └─ Button (learn more)
├─ FAQ Item 2
│  └─ Nested Row
│     ├─ Video module
│     └─ Text content

Result: Rich, interactive FAQ section
```

### 5. Inline CTAs in Blog Module

**Problem:** Blog module shows posts, need CTA between posts

**Solution:**
```
Blog Module (shows 6 posts)
├─ Nested Button module appears after post 3
└─ CTA: "Want to learn more? Book a call"

Result: CTA appears mid-grid, pagination works correctly
```

---

## Nested Modules + Presets

**Powerful Combination:**

1. Style parent module completely
2. Style nested modules
3. Save parent as Element Preset
4. Preset includes nested structure
5. Apply preset = complete component

**Example:**
```
Create "Feature Card" preset:
- Blurb module (parent) with flex layout
- Icon module (nested) - 48px, primary color
- Heading (nested) - 24px, semi-bold
- Text (nested) - 16px, line-height 1.6
- Button (nested) - primary button preset

Save as preset

Apply to new Blurb:
- Entire structure + styling appears
- Just change content
- Consistent cards across site
```

---

## Layout Control Inside Modules

### Setting Layout Style

**Any module can be:**
- Flex container (row or column direction)
- Grid container (define columns/rows)
- Default (block layout)

**Where to set:**
Module Settings → Design → Layout → Layout Style

### Gap Control

**Use fluid spacing inside nested modules:**
```
Parent Module:
- Vertical Gap: clamp(16px, 3vw, 48px)
- Horizontal Gap: clamp(16px, 3vw, 48px)

Result: Nested children space consistently
```

### Alignment Control

**Flexbox alignment in parent:**
- Justify Content: Center nested items horizontally
- Align Items: Center nested items vertically

**Perfect for:**
- Centered card content
- Icon + text alignment
- Button positioning

---

## Complex Component Building

### Feature Card with Everything

```
Blurb Module (parent):
- Layout: Flex, Column direction
- Vertical Gap: var(--space-md)
- Padding: var(--space-lg)
- Background: var(--bg-light)
- Border Radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)

Nested inside:
1. Icon module
   - Size: 48px
   - Color: var(--color-primary)
   
2. Heading module
   - Text: Dynamic content (title)
   - Size: 24px, semi-bold
   
3. Text module
   - Text: Dynamic content (excerpt)
   - Size: 16px, line-height 1.6
   
4. Button module
   - Preset: btn-primary
   - Link: Dynamic content

Hover effect on parent:
- Transform: translateY(-4px)
- Shadow: 0 8px 16px rgba(0,0,0,0.12)

Save as "Feature Card Full" preset
```

### Testimonial Component

```
Blurb Module (parent):
- Layout: Flex, Column
- Background: var(--bg-dark)
- Padding: var(--space-lg)

Nested:
1. Image module (avatar)
   - Width: 80px
   - Border Radius: 50%
   
2. Text module (quote)
   - Size: 18px
   - Style: Italic
   - Color: var(--text-light)
   
3. Heading module (name)
   - Size: 16px
   - Weight: 600
   
4. Text module (position/company)
   - Size: 14px
   - Opacity: 0.8

Save as "Testimonial Card" preset
```

---

## Nested Modules in Loops

**Combine with Loop Builder:**

```
Row (Loop enabled):
- Query: Blog posts
- Layout: Grid, 3 columns

Column (looped, contains nested modules):
- Blurb module (parent)
  └─ Image → Loop Featured Image
  └─ Heading → Loop Title
  └─ Text → Loop Excerpt
  └─ Button → Loop Link

Result: Complete card design repeated for each post
Manage: Edit one card, all update
```

---

## Best Practices

**1. Use Parent Module as Container**
- Set flex/grid layout on parent
- Nested children become flex/grid items
- Consistent spacing with gaps

**2. Apply Presets to Parents**
- Saves entire nested structure
- Reuse complete components
- Update once, changes everywhere

**3. Keep Nesting Logical**
- Don't nest too deep (3-4 levels max)
- Group related content
- Use meaningful parent modules

**4. Use Design Variables**
- Reference variables in nested modules
- Change variable = entire component updates

**5. Test Responsive Behavior**
- Nested modules inherit parent breakpoints
- Set responsive gaps on parent
- Test direction changes (Row → Column on mobile)

---

## Nested Modules vs Traditional Approach

### Traditional (Divi 4 Style):
```
Section
└─ Row
   ├─ Column 1
   │  ├─ Image module
   │  ├─ Heading module
   │  ├─ Text module
   │  └─ Button module
   ├─ Column 2 (repeat)
   ├─ Column 3 (repeat)
   └─ Column 4 (repeat)

Problems:
- 16 modules for 4 cards
- Hard to move cards
- Can't group as unit
- No preset for complete card
```

### Nested Modules (Divi 5):
```
Section
└─ Row
   ├─ Blurb 1 (contains Icon, Heading, Text, Button nested)
   ├─ Blurb 2 (same structure)
   ├─ Blurb 3 (same structure)
   └─ Blurb 4 (same structure)

Benefits:
- 4 parent modules
- Easy to move/duplicate
- Group as unit
- Apply preset to all
- Cleaner management
```

---

## Troubleshooting

### Nested Module Not Showing

**Check:**
1. Parent module set to flex or grid layout
2. Nested module added correctly (Elements dropdown)
3. Nested module has content
4. Parent padding allows space

### Layout Not Working as Expected

**Check:**
1. Parent Layout Style set correctly
2. Gap values applied
3. Alignment properties set
4. No conflicting margin/padding

### Preset Not Including Nested Modules

**Solution:**
- When saving preset, ensure "Include Nested Elements" is checked
- Resave preset with nested structure

### Performance with Many Nested Modules

**Optimize:**
- Limit nesting depth (3-4 levels)
- Use presets to manage complexity
- Test page load speed
- Consider simpler structure if slow

---

## Related Files

**Prerequisites:**
- `preset-system-complete.md` - Saving nested structures
- `flexbox-layout-system.md` - Layout inside modules
- `design-variables.md` - Variables in nested modules

**Integration:**
- `loop-builder.md` - Nested modules in loops
- `nested-faqs.md` - Nested FAQ/accordion patterns
- `../build/02_divi5_mechanics.md` - Workflows
- `../workflows/starting-new-project.md` - Component planning

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
