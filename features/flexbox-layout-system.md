# Flexbox Layout System

**Purpose:** Complete guide to Divi 5's Flexbox-based layout system
**Category:** Core Features
**Priority:** Critical
**Last Updated:** January 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Flexbox is the foundation of Divi 5's layout system, replacing Divi 4's float-based blocks. It provides powerful one-dimensional layout control (rows OR columns) with minimal code.

**Available at:** Section, Row, Column, and Module levels

---

## Key Concepts

### Flex Container (Parent)
- **Sections** = Flex containers
- **Rows** = Flex containers
- **Columns** = Flex items (become containers when containing modules)
- **Modules** = Can be flex containers via Layout Style setting

### Flex Items (Children)
- Elements inside flex containers
- Automatically receive flex properties
- Can be individually controlled

---

## Core Flex Controls

### Layout Direction

**Row:** Horizontal, left to right (→)
**Row Reverse:** Horizontal, right to left (←)
**Column:** Vertical, top to bottom (↓)
**Column Reverse:** Vertical, bottom to top (↑)

**Common Uses:**
```
Row: Navigation menus, button groups, card grids
Column: Stacked content, vertical lists, mobile layouts
Row Reverse: RTL languages, design variations
Column Reverse: Footer content, reversed order
```

---

### Justify Content (Main Axis)

**Controls spacing along main direction**

**Options:**
- **Flex Start:** Items align to start (default)
- **Flex End:** Items align to end
- **Center:** Items centered
- **Space Between:** Even space between items (no space at edges)
- **Space Around:** Even space around items (half space at edges)
- **Space Evenly:** Equal space everywhere (including edges)

**Examples:**
```
Navigation (Row direction):
- Justify Content: Flex End
Result: Nav items align right

Hero Content (Column direction):
- Justify Content: Center
Result: Content vertically centered

Button Group (Row direction):
- Justify Content: Space Between
Result: Buttons spread across width
```

---

### Align Items (Cross Axis)

**Controls alignment perpendicular to main direction**

**Options:**
- **Stretch:** Fill container height/width (default)
- **Flex Start:** Align to top/left
- **Flex End:** Align to bottom/right
- **Center:** Center vertically/horizontally
- **Baseline:** Align text baselines

**Examples:**
```
Equal Height Cards (Row direction):
- Align Items: Stretch
Result: All cards same height automatically

Centered Icon + Text (Row direction):
- Align Items: Center
Result: Icon and text vertically centered

Top-Aligned Content (Column direction):
- Align Items: Flex Start
Result: Content aligns to top
```

---

### Layout Wrapping

**Controls whether items stay on one line or wrap**

**Options:**
- **No Wrap:** Items stay on one line (may overflow/shrink)
- **Wrap:** Items flow to next line when space runs out
- **Wrap Reverse:** New lines appear above/before

**Use Cases:**
```
Card Grid (needs wrapping):
- Layout Wrapping: Wrap
- Column width: 300px
Result: Cards wrap to new rows automatically

Navigation (no wrapping):
- Layout Wrapping: No Wrap
Result: Nav items stay on one line
```

---

### Gap Controls

**Space between flex items (replaces margin-based spacing)**

**Options:**
- **Horizontal Gap:** Space between items horizontally
- **Vertical Gap:** Space between rows/stacked items

**Best Practice - Use Clamp:**
```
Card Grid:
- Horizontal Gap: clamp(16px, 3vw, 48px)
- Vertical Gap: clamp(16px, 3vw, 48px)
Result: Responsive spacing without breakpoint overrides

Button Group:
- Horizontal Gap: 16px (static - UI element)
Result: Consistent button spacing
```

---

## When to Use Flexbox

### Best For:

**✅ Single-direction layouts**
- Content flows in one direction (row OR column)
- Navigation bars
- Button groups
- Icon lists

**✅ Equal-height cards**
- Cards automatically match height
- Align Items: Stretch

**✅ Wrapping content**
- Product grids
- Blog cards
- Gallery items

**✅ Simple alignment**
- Center content vertically/horizontally
- Distribute space between items
- Align items to start/end

**✅ Responsive layouts**
- Change direction per breakpoint
- Row on desktop → Column on mobile

---

### NOT Best For:

**❌ Two-dimensional grids**
- Need control of both rows AND columns simultaneously
- Magazine layouts
- Complex positioning
→ Use CSS Grid instead

**❌ Precise positioning**
- Elements need exact placement
- Overlapping elements
→ Use CSS Grid or absolute positioning

---

## Practical Examples

### Equal Height Cards

```
Row Settings:
- Layout Style: Flex
- Layout Direction: Row
- Layout Wrapping: Wrap
- Align Items: Stretch
- Horizontal Gap: clamp(16px, 3vw, 48px)
- Vertical Gap: clamp(16px, 3vw, 48px)

Column Settings:
- Width: 300px (or use percentage)

Result: 
- Cards automatically equal height
- Wraps to new rows when needed
- Responsive gaps
```

### Centered Hero Content

```
Section Settings:
- Layout Style: Flex
- Layout Direction: Column
- Justify Content: Center
- Align Items: Center
- Min Height: 100vh
- Padding: clamp(32px, 5vw, 80px)

Result:
- Content perfectly centered vertically and horizontally
- Full viewport height
- Responsive padding
```

### Navigation Bar

```
Row Settings:
- Layout Style: Flex
- Layout Direction: Row
- Justify Content: Space Between
- Align Items: Center
- Padding: 20px 40px

Column 1 (Logo):
- Width: Auto

Column 2 (Menu):
- Layout Style: Flex
- Layout Direction: Row
- Horizontal Gap: 32px
- Justify Content: Flex End

Result: Logo left, menu right, vertically centered
```

### Responsive Product Grid

```
Row Settings:
- Layout Style: Flex
- Layout Wrapping: Wrap
- Horizontal Gap: clamp(16px, 3vw, 48px)
- Vertical Gap: clamp(16px, 3vw, 48px)

Column Settings:
Desktop (> 980px):
- Width: 25% (4 columns)

Tablet (768-980px):
- Width: 50% (2 columns)

Phone (< 767px):
- Width: 100% (1 column)

Result: Automatic responsive grid
```

### Button Group

```
Module Settings (any module):
- Layout Style: Flex
- Layout Direction: Row
- Justify Content: Center
- Horizontal Gap: 16px (static - UI element)

Inside (nested):
- Button 1
- Button 2
- Button 3

Result: Buttons centered with consistent spacing
```

### Sidebar + Main Content

```
Row Settings:
- Layout Style: Flex
- Layout Direction: Row
- Horizontal Gap: clamp(20px, 3vw, 40px)

Column 1 (Sidebar):
- Width: 300px (fixed)

Column 2 (Main):
- Flex Grow: 1 (fills remaining space)

Mobile (< 767px):
- Layout Direction: Column
- Column 1: Width: 100%
- Column 2: Width: 100%

Result: Sidebar + fluid main on desktop, stacked on mobile
```

---

## Flexbox + Nested Rows

**Build complex layouts:**

```
Section
└─ Row (Flex, Column direction)
   ├─ Row 1 (Flex, Row direction - 3 columns)
   ├─ Row 2 (Flex, Row direction - 2 columns)
   └─ Row 3 (Flex, Row direction - 4 columns)

Result: Grid-like structure with full flex control
More flexible than CSS Grid for some layouts
```

---

## Responsive Flexbox Strategies

### Strategy 1: Direction Change

**Desktop: Horizontal**
**Mobile: Vertical**

```
Row Settings:
Desktop (> 767px):
- Layout Direction: Row
- Justify Content: Space Between

Phone (< 767px):
- Layout Direction: Column
- Align Items: Center

Common use: Feature sections, team members, pricing tables
```

### Strategy 2: Wrapping Control

**Desktop: Multiple rows**
**Mobile: Single column**

```
Row Settings:
Desktop:
- Layout Wrapping: Wrap
- Column width: 33.33%

Phone:
- Layout Wrapping: Wrap
- Column width: 100%

Result: 3 columns → 1 column automatically
```

### Strategy 3: Justify Content Change

**Desktop: Spread out**
**Mobile: Centered**

```
Row Settings:
Desktop:
- Justify Content: Space Between

Phone:
- Justify Content: Center

Common use: Button groups, icon lists
```

---

## Column Reordering with Flexbox

**Change visual order without changing HTML:**

```
Column Settings → Advanced → Order

Desktop order:
- Column 1: Order: 1 (Text)
- Column 2: Order: 2 (Image)

Mobile order:
- Column 1: Order: 2 (Text)
- Column 2: Order: 1 (Image)

Result: Image appears first on mobile
```

---

## Flexbox + Gap vs Margin

### Use Gap (Modern, Better)

**Advantages:**
- No margin collapsing issues
- Works with wrapping
- One setting controls all spacing
- Responsive with clamp()

```
Row Settings:
- Horizontal Gap: clamp(16px, 3vw, 48px)
- Vertical Gap: clamp(16px, 3vw, 48px)

Result: Perfect spacing, no margin hacks needed
```

### Avoid Margin (Old Way)

**Problems:**
- Margin collapsing
- Extra margin at edges
- Doesn't work with wrapping
- Need negative margins on parent

```
❌ Old way:
- Add margin to columns
- Negative margin on row
- Edge cases everywhere
```

---

## Common Flexbox Patterns

### Pattern 1: Icon + Text

```
Module (Flex, Row):
- Align Items: Center
- Horizontal Gap: 12px

Inside:
- Icon (24px)
- Text (16px)

Result: Icon and text perfectly aligned
```

### Pattern 2: Card with Button at Bottom

```
Module (Flex, Column):
- Justify Content: Space Between
- Min Height: 300px

Inside:
- Content (Heading + Text)
- Button

Result: Button always at bottom, regardless of content length
```

### Pattern 3: Image + Overlay Text

```
Module (Flex, Column):
- Justify Content: Center
- Align Items: Center
- Min Height: 400px
- Background: Image

Inside:
- Heading
- Button

Result: Content centered over image
```

---

## Troubleshooting

### Items Not Wrapping

**Check:**
1. Layout Wrapping: Wrap enabled
2. Items have defined width/basis
3. Container has enough space

### Items Not Equal Height

**Solution:**
- Align Items: Stretch (default)
- Remove fixed heights on items

### Gaps Not Working

**Check:**
1. Layout Style: Flex enabled
2. Gap values set
3. Not using margin instead

### Content Not Centered

**For vertical centering:**
- Justify Content: Center (if Column direction)
- Align Items: Center (if Row direction)

**For horizontal centering:**
- Justify Content: Center (if Row direction)
- Align Items: Center (if Column direction)

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Gap variables with clamp()
- `advanced-units.md` - Understanding clamp() for gaps
- `responsive-breakpoints.md` - Breakpoint strategies

**Comparison:**
- `css-grid-system.md` - When to use Grid vs Flexbox

**Integration:**
- `loop-builder.md` - Flexbox with loops
- `nested-modules.md` - Flexbox inside modules
- `../build/02_divi5_mechanics.md` - Flexbox workflows

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
