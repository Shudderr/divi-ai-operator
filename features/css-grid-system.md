# CSS Grid System

**Purpose:** Complete guide to when and how to use CSS Grid in Divi 5
**Category:** Core Features
**Priority:** Medium
**Last Updated:** January 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

CSS Grid provides two-dimensional layout control (rows AND columns simultaneously). Available alongside Flexbox as a Layout Style option in Divi 5.

**Key Difference from Flexbox:** Grid controls both dimensions at once, Flexbox controls one direction at a time.

---

## When to Use Grid vs Flexbox

### Use Grid When:

**✅ Two-dimensional control needed**
- Need to control rows AND columns simultaneously
- Magazine-style layouts
- Dashboard layouts
- Photo galleries with different sized items

**✅ Precise positioning required**
- Items need exact placement
- Overlapping elements
- Items span multiple rows/columns

**✅ Complex defined structures**
- Fixed grid patterns
- Asymmetric layouts
- Items of different sizes in structured pattern

---

### Use Flexbox When:

**✅ One-dimensional layouts**
- Content flows in single direction
- Navigation menus
- Button groups
- Simple card grids

**✅ Dynamic content length**
- Don't know how many items
- Content wraps naturally
- Equal-height cards

**✅ Simple alignment**
- Centering
- Space distribution
- Basic responsive layouts

---

## Grid Controls

### Grid Template Columns

**Defines number and size of columns**

**Syntax:**
```
1fr 1fr 1fr → 3 equal columns
200px 1fr 200px → Fixed sidebars, fluid center
repeat(4, 1fr) → 4 equal columns (shorthand)
repeat(auto-fit, minmax(250px, 1fr)) → Responsive columns
```

**Examples:**
```
3 Equal Columns:
Grid Template Columns: repeat(3, 1fr)

Sidebar Layout:
Grid Template Columns: 250px 1fr

4 Columns:
Grid Template Columns: repeat(4, 1fr)
```

---

### Grid Template Rows

**Defines number and size of rows**

**Syntax:**
```
auto 1fr auto → Header, content, footer
200px 200px → Two fixed-height rows
repeat(3, auto) → 3 rows, auto height
```

**Examples:**
```
Header/Content/Footer:
Grid Template Rows: auto 1fr auto

Fixed Height Rows:
Grid Template Rows: 300px 300px 300px
```

---

### Grid Gaps

**Space between grid items**

**Properties:**
- **Column Gap:** Space between columns
- **Row Gap:** Space between rows
- **Gap:** Shorthand for both

**Best Practice:**
```
Use clamp() for responsive gaps:
Column Gap: clamp(16px, 3vw, 48px)
Row Gap: clamp(16px, 3vw, 48px)

Or shorthand:
Gap: clamp(16px, 3vw, 48px)
```

---

## Grid Item Controls

### Grid Column Span

**Make item span multiple columns**

**Syntax:**
```
Grid Column: span 2 → Spans 2 columns
Grid Column: 1 / 3 → Starts column 1, ends before 3 (spans 2)
Grid Column: 1 / -1 → Spans all columns
```

**Use Cases:**
```
Feature item spans 2 columns in 4-column grid
Hero spans full width in sidebar layout
CTA card spans 3 columns
```

---

### Grid Row Span

**Make item span multiple rows**

**Syntax:**
```
Grid Row: span 2 → Spans 2 rows
Grid Row: 1 / 4 → Starts row 1, ends before 4 (spans 3)
```

**Use Cases:**
```
Sidebar spans 3 rows
Featured post spans 2 rows
Image gallery item spans 2×2
```

---

## Pre-built Grid Templates

**Divi 5 includes common patterns:**

- **Equal Columns:** Simple multi-column grids
- **Masonry Layouts:** Pinterest-style layouts
- **Multi-row Grids:** Complex structured grids
- **Offset Grids:** Staggered patterns
- **Magazine Layouts:** Editorial-style layouts

**Access:** Layout Style: Grid → Template dropdown

---

## Practical Examples

### Simple 3-Column Grid

```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: repeat(3, 1fr)
- Gap: clamp(16px, 3vw, 48px)

Columns (auto-placed):
- Column 1, 2, 3 fill first row
- Column 4, 5, 6 fill second row
- Continues automatically

Responsive (Tablet < 980px):
- Grid Template Columns: repeat(2, 1fr)

Responsive (Phone < 767px):
- Grid Template Columns: 1fr
```

---

### Magazine Layout

```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: repeat(4, 1fr)
- Grid Template Rows: repeat(3, 200px)
- Gap: clamp(16px, 3vw, 32px)

Column 1 (Featured):
- Grid Column: span 2
- Grid Row: span 2

Column 2, 3, 4, 5, 6:
- Auto-placed (1 column each)

Result: Large featured item, smaller items around it
```

---

### Sidebar + Main Layout

```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: 300px 1fr
- Gap: clamp(20px, 3vw, 40px)

Column 1 (Sidebar):
- Auto-placed in first column
- Grid Row: 1 / -1 (spans all rows)

Column 2 (Main):
- Auto-placed in second column
- Can have nested rows for complex content

Mobile (< 767px):
- Grid Template Columns: 1fr
- Both columns stack
```

---

### Product Grid with Featured Items

```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: repeat(4, 1fr)
- Gap: clamp(16px, 3vw, 48px)

Regular Products (Columns 1, 2, 4, 5):
- Auto-placed (1 column each)

Featured Product (Column 3):
- Grid Column: span 2
- Grid Row: span 2

Result: Mixed-size product grid
```

---

### Dashboard Layout

```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: repeat(12, 1fr)
- Gap: 24px (static - UI layout)

Header (Column 1):
- Grid Column: 1 / -1 (span all 12)

Sidebar (Column 2):
- Grid Column: span 2
- Grid Row: span 10

Main Content (Column 3):
- Grid Column: span 7
- Grid Row: span 10

Widget Area (Column 4):
- Grid Column: span 3
- Grid Row: span 10

Result: Complex dashboard layout
```

---

## Responsive Grid Strategies

### Strategy 1: Column Count Change

**Most common responsive pattern**

```
Desktop: 4 columns
Tablet: 2 columns
Mobile: 1 column

Row Settings:
Desktop (> 980px):
- Grid Template Columns: repeat(4, 1fr)

Tablet (768-980px):
- Grid Template Columns: repeat(2, 1fr)

Phone (< 767px):
- Grid Template Columns: 1fr
```

---

### Strategy 2: Auto-Fit (Automatic Responsive)

**Grid automatically adjusts columns**

```
Grid Template Columns: repeat(auto-fit, minmax(250px, 1fr))

How it works:
- Fits as many 250px+ columns as possible
- Columns grow to fill space (1fr)
- Automatically responsive without breakpoints

Result: 4 columns on wide screen, 1 on narrow, automatic
```

---

### Strategy 3: Layout Change

**Different structure per breakpoint**

```
Desktop:
- Grid Template Columns: 300px 1fr (sidebar + main)

Mobile:
- Grid Template Columns: 1fr (single column)
- Sidebar and main stack

Common for: Sidebar layouts, dashboards
```

---

## Nested Grids

**Grid inside grid cell:**

```
Parent Row:
- Layout Style: Grid
- Grid Template Columns: repeat(2, 1fr)

Column 1 (nested grid):
- Layout Style: Grid
- Grid Template Columns: repeat(3, 1fr)
- Gap: 16px (independent gaps)

Result: 2 main columns, left column has 3-column grid inside
```

---

## Grid vs Flexbox Decision Tree

```
Need control of rows AND columns?
├─ Yes → Use Grid
└─ No ↓

Items of different sizes in structured pattern?
├─ Yes → Use Grid
└─ No ↓

Need items to span multiple rows/columns?
├─ Yes → Use Grid
└─ No ↓

Simple one-direction layout?
├─ Yes → Use Flexbox
└─ No ↓

Equal-height cards that wrap?
├─ Yes → Use Flexbox
└─ No ↓

Default choice → Use Flexbox (simpler for most cases)
```

---

## Real-World Examples

### Portfolio Grid (Mixed Sizes)

**Use Grid:**
```
Why: Some items span 2 columns, precise placement needed
Grid: repeat(3, 1fr)
Featured items: span 2
Regular items: span 1
```

### Blog Card Grid (Equal Sizes)

**Use Flexbox:**
```
Why: All cards same size, just need wrapping
Flex: Wrap enabled
Cards: 300px wide, auto height (stretch)
```

### Magazine Homepage

**Use Grid:**
```
Why: Complex layout, items of different sizes
Grid: repeat(12, 1fr)
Hero: span 8
Sidebar: span 4
Featured posts: span 4 each
```

### Navigation Menu

**Use Flexbox:**
```
Why: Single row, simple spacing
Flex: Row direction
Items: Auto width
Justify: Space Between
```

---

## Common Grid Patterns

### Pattern 1: Holy Grail Layout

```
Grid Template:
- Columns: auto 1fr auto (left, main, right)
- Rows: auto 1fr auto (header, content, footer)

Header: Grid Column: 1 / -1 (span all)
Main: Grid Column: 2 (center)
Sidebar Left: Grid Column: 1
Sidebar Right: Grid Column: 3
Footer: Grid Column: 1 / -1 (span all)
```

### Pattern 2: Pinterest-Style Masonry

```
Grid Template Columns: repeat(4, 1fr)
Grid Auto Rows: 20px (small row height)

Items: Grid Row: span X (X = item height / 20)

Result: Items stack tightly, no gaps
```

### Pattern 3: Card Grid with CTA

```
Grid: repeat(3, 1fr)
Cards 1-5: Auto-placed
CTA (Card 6): Grid Column: 1 / -1 (full width)

Result: 3-column cards, CTA spans bottom
```

---

## Troubleshooting

### Items Overlapping

**Cause:** Not enough columns defined

**Solution:**
- Increase Grid Template Columns
- Or use Grid Column placement

### Items Not Spanning

**Check:**
- Grid Column: span X set correctly
- Grid Row: span Y set correctly
- Parent has grid enabled

### Gaps Not Working

**Check:**
- Layout Style: Grid enabled
- Gap values set (not margin)
- Items not using absolute positioning

### Responsive Not Working

**Check:**
- Grid Template Columns set per breakpoint
- Items adjust span per breakpoint
- Consider auto-fit for automatic responsive

---

## Grid Best Practices

**1. Start Simple**
- Begin with equal columns: repeat(3, 1fr)
- Add complexity as needed
- Test responsive behavior

**2. Use Gaps, Not Margins**
- Gap for spacing between items
- Padding for internal spacing
- Avoid margin-based layouts

**3. Plan Your Grid**
- Sketch layout first
- Determine column/row structure
- Identify spanning items

**4. Test Responsive Early**
- Desktop grid may not work on mobile
- Plan column count per breakpoint
- Consider auto-fit for simple cases

**5. Use Flexbox for Simple Cases**
- Don't over-engineer
- Flexbox is simpler for basic layouts
- Grid for complex structures only

---

## Related Files

**Prerequisites:**
- `flexbox-layout-system.md` - When to use Flexbox vs Grid
- `design-variables.md` - Gap variables
- `advanced-units.md` - Using clamp() for gaps

**Integration:**
- `responsive-breakpoints.md` - Responsive grid strategies
- `loop-builder.md` - Grid with dynamic content
- `../build/02_divi5_mechanics.md` - Grid workflows

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
