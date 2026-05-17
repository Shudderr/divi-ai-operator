# Responsive Breakpoints - 7 Breakpoint System

**Purpose:** Master Divi 5's expanded responsive breakpoint system
**Category:** Core Features
**Priority:** High
**Last Updated:** March 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Divi 5 expands from 3 breakpoints (Divi 4) to 7 customizable breakpoints, providing precise control over responsive design across all device sizes.

**Key Benefit:** Design for exact device sizes without compromising any screen.

---

## Default Breakpoints

| Breakpoint | Range | Typical Devices |
|------------|-------|-----------------|
| **Phone** | 0-479px | Small phones, portrait |
| **Phone Wide** | 480-767px | Large phones, portrait |
| **Tablet** | 768-980px | Tablets, portrait |
| **Tablet Wide** | 981-1279px | Tablets, landscape / Small laptops |
| **Desktop** | 1280-1919px | Standard desktops, laptops |
| **Widescreen** | 1920-2559px | Large monitors |
| **Ultra Wide** | 2560px+ | Ultra-wide monitors, 4K displays |

---

## Customizing Breakpoints

**Access:** Three-dot menu in Visual Builder toolbar → Responsive Settings

**Options:**
- Enable/disable any breakpoint
- Adjust pixel values for each
- Match specific device resolutions
- Create custom breakpoints for target audiences

**Example Custom Setup:**
```
Client has analytics showing:
- 30% mobile (375px most common)
- 45% desktop (1440px most common)
- 25% large desktop (1920px+)

Adjust breakpoints:
- Phone: 0-375px
- Phone Wide: 376-768px
- Tablet: 769-1024px
- Desktop: 1025-1440px
- Widescreen: 1441px+
(Disable Ultra Wide, not needed)
```

---

## Per-Breakpoint Controls

**Available at every breakpoint:**

### Layout Controls
- Layout Direction (Row/Column)
- Justify Content
- Align Items
- Layout Wrapping
- Gap sizes (horizontal/vertical)

### Sizing
- Width/Height
- Max-width/Max-height
- Padding (all sides independently)
- Margin (all sides independently)

### Typography
- Font sizes (static or clamp)
- Line height
- Letter spacing
- Text alignment

### Visibility
- Show/Hide elements
- Display property
- Opacity

### Positioning
- Column order
- Z-index
- Position values

### Images
- Image sizes
- Background images
- Background position/size

---

## Responsive Mode Editor

**Access:** Design tab → Responsive Mode toggle

**Features:**
- Preview all breakpoints in one view
- Make adjustments on the fly
- Real-time preview
- Side-by-side comparison

**Keyboard Shortcut:** 
- **Alt+R** (Windows) / **Option+R** (Mac): Cycle through breakpoints

---

## Responsive Preview

**Toolbar Device Icons:**
- Click to preview exact breakpoint
- Drag canvas edge to see between breakpoints
- Auto-zoom when canvas too small

**Testing:**
- Desktop icon → Desktop view
- Tablet icon → Tablet view
- Phone icon → Mobile view

---

## Design Strategies

### Strategy 1: Desktop-First with Clamp()

**Best for:** Marketing sites, landing pages

**Approach:**
```
1. Design for desktop (1440px)
2. Use clamp() for spacing and display typography
3. Test mobile - clamp() handles most scaling
4. Fine-tune only problem areas

Result: Minimal breakpoint overrides needed
```

**Example:**
```
Desktop design:
- Hero padding: clamp(48px, 6vw, 96px)
- Hero H1: clamp(32px, 6vw, 90px)
- Card gap: clamp(16px, 3vw, 48px)

Mobile automatically scales smoothly
Only override: Column direction (Row → Column)
```

### Strategy 2: Mobile-First

**Best for:** Content-heavy sites, blogs, e-commerce

**Approach:**
```
1. Design for mobile (375px)
2. Add complexity as screen grows
3. Progressive enhancement
4. Test at each breakpoint

Result: Fast mobile, enhanced desktop
```

**Example:**
```
Mobile:
- Single column layout
- Stacked content
- Large touch targets (44px min)
- Simple navigation

Desktop:
- Multi-column layout
- Complex grids
- Hover effects
- Expanded navigation
```

### Strategy 3: Content-Driven

**Best for:** Apps, dashboards, data displays

**Approach:**
```
1. Let content determine breakpoints
2. Test with real content
3. Break when design breaks
4. Adjust breakpoints to match

Result: Natural feeling responsive design
```

---

## Column Reordering

**Powerful Feature:** Change visual order without changing HTML

**How it works:**
```
Desktop order:
Column 1: Text content (Order: 1)
Column 2: Image (Order: 2)

Mobile order:
Column 1: Text content (Order: 2) ← Changed
Column 2: Image (Order: 1) ← Changed

Result: Image appears above text on mobile
No duplicate sections needed
```

**Use cases:**
- Mobile: Show CTA before content
- Mobile: Feature image first
- Mobile: Contact form at top

---

## Breakpoint-Specific Settings

### Typography Responsive Strategy

**Display Headings (Clamp):**
```
H1 Hero: clamp(32px, 6vw, 90px)
// Scales smoothly across all breakpoints
// No overrides needed
```

**Content Headings (Static with Overrides):**
```
H1 Content:
- Desktop: 42px
- Tablet: 36px
- Phone: 28px
// Predictable, readable
```

**Body Text (Static):**
```
Body: 18px across all breakpoints
// Never change readable text size
```

**UI Text (Static):**
```
Button text: 16px
Form inputs: 16px (prevents iOS zoom!)
Navigation: 16px
// Critical UI stays consistent
```

### Spacing Responsive Strategy

**Macro Spacing (Clamp):**
```
Section padding: clamp(32px, 5vw, 80px)
Card gaps: clamp(16px, 3vw, 48px)
// Scales smoothly
```

**UI Spacing (Static or Override):**
```
Button padding: 16px 32px
// Or override per breakpoint:
Desktop: 16px 32px
Tablet: 14px 28px
Phone: 12px 24px
```

### Layout Direction Changes

**Common Pattern:**
```
Desktop (> 980px):
- Layout Direction: Row
- Justify Content: Space Between

Tablet (< 980px):
- Layout Direction: Column
- Align Items: Center

Phone (< 767px):
- Layout Direction: Column
- Align Items: Stretch
```

---

## Best Practices

### 1. Use Fluid Values to Reduce Overrides

**Good:**
```
Padding: clamp(32px, 5vw, 80px)
// Works at all breakpoints
// Zero overrides needed
```

**Less Good:**
```
Padding:
- Desktop: 80px
- Tablet Wide: 64px
- Tablet: 48px
- Phone Wide: 40px
- Phone: 32px
// 5 manual overrides
```

### 2. Test Real Devices

**Don't rely only on Visual Builder:**
- Preview on actual phones
- Test tablets in landscape
- Check desktop monitors
- Verify touch targets (44px min mobile)

### 3. Focus on Critical Breakpoints

**Most sites only need:**
- Phone (< 767px)
- Tablet (768-980px)
- Desktop (> 980px)

**Disable unused breakpoints for simpler management**

### 4. Use Column Reordering

**Instead of duplicating sections:**
```
❌ Bad: Two hero sections (one for desktop, one for mobile)
✅ Good: One hero, column order changes per breakpoint
```

### 5. Check Horizontal Scroll

**Common issue on mobile:**
- Fixed widths break out
- Images too large
- Padding pushes content out

**Solutions:**
- Max-width: 100%
- Box-sizing: border-box
- Check padding on containers

---

## Testing Checklist

### Per Breakpoint:

**Layout:**
- [ ] No horizontal scroll
- [ ] Content readable
- [ ] No awkward gaps
- [ ] Proper alignment
- [ ] Elements not overlapping

**Typography:**
- [ ] Headings appropriate size
- [ ] Body text readable (16px+ min)
- [ ] Line length comfortable (45-75 chars)
- [ ] Line height sufficient

**Interaction:**
- [ ] Buttons large enough (44px min mobile)
- [ ] Form inputs 16px+ text (iOS zoom fix)
- [ ] Links tappable
- [ ] Navigation accessible
- [ ] Hover states work (desktop)
- [ ] Touch states work (mobile)

**Images:**
- [ ] Scale properly
- [ ] Not pixelated
- [ ] Load quickly
- [ ] Proper aspect ratios

**Performance:**
- [ ] Fast load time
- [ ] Smooth scrolling
- [ ] No layout shift
- [ ] Images optimized

---

## Common Responsive Patterns

### Stacked to Side-by-Side

**Mobile:** Stack vertically
**Desktop:** Side-by-side

```
Mobile (< 767px):
- Column 1 (100% width)
- Column 2 (100% width)

Desktop (> 980px):
- Column 1 (50% width)
- Column 2 (50% width)
```

### Grid Collapse

**Mobile:** 1 column
**Tablet:** 2 columns
**Desktop:** 3-4 columns

```
Row Settings:
- Layout: Grid

Breakpoints:
- Desktop: repeat(4, 1fr)
- Tablet: repeat(2, 1fr)
- Phone: 1fr
```

### Hidden on Mobile

**Show complex features only on desktop:**

```
Element Settings:
- Desktop: Display: Block
- Phone: Display: None

// Or use Visibility toggle in settings
```

### Mobile Menu

**Desktop:** Horizontal navigation
**Mobile:** Hamburger menu

```
Navigation:
- Desktop: Layout Direction: Row
- Phone: Hidden, replaced with mobile menu module
```

---

## Troubleshooting

### Text Too Large on Mobile

**Problem:** clamp() min value too high

**Solution:**
```
❌ Wrong: clamp(24px, 5vw, 60px)
✅ Fixed: clamp(18px, 5vw, 60px)
```

### Content Overflowing

**Problem:** Fixed widths

**Solution:**
```
❌ Wrong: Width: 1200px
✅ Fixed: Max-width: 1200px, Width: 100%
```

### iOS Zoom on Form Focus

**Problem:** Input text < 16px

**Solution:**
```
❌ Wrong: Input font: 14px
✅ Fixed: Input font: 16px (exactly)
```

### Columns Not Stacking

**Problem:** Column width not set for mobile

**Solution:**
- Set column width: 100% on mobile breakpoint
- Or change row direction to Column

### Images Breaking Layout

**Problem:** Images not responsive

**Solution:**
```
Image module:
- Width: 100%
- Height: auto
- Max-width: [original size]
```

---

## Advanced Responsive Techniques (Divi 5)

**Source:** Elegant Themes Mobile Responsive Design Blog (March 2026)

### Technique 1: Hide/Show Content by Breakpoint

**Use case:** Reduce mobile clutter while keeping content accessible

**Example:**
- Desktop: Full text block + detailed list
- Mobile: Text hidden, replaced with compact Toggle module

**How to implement:**
```
1. Create two versions of content:
   - Text module (desktop version)
   - Toggle module (mobile version, same content)

2. Text module visibility:
   Advanced → Visibility
   - Check: Tablet, Phone Wide, Phone
   - Result: Hidden on smaller screens

3. Toggle module visibility:
   Advanced → Visibility
   - Check: Ultra Wide, Widescreen, Desktop
   - Result: Hidden on larger screens

Both modules in same position, only one shows per device
```

**Benefits:**
- Shorter mobile scroll
- Faster mobile loading
- Better mobile UX
- Content still available (in Toggle)

---

### Technique 2: Column Class System

**Use case:** Precise column widths in Flexbox layouts

**Available classes:**
```
- No Column Class (content-based width)
- 1/6 (16.67%)
- 1/4 (25%)
- 1/3 (33.33%)
- 1/2 (50%)
- 2/3 (66.67%)
- 3/4 (75%)
- 5/6 (83.33%)
- Fullwidth (100%)
```

**Example - Sidebar Layout:**
```
Row: Flex, Direction: Row

Column 1 (sidebar):
- Column Class: 1/3
- Fixed at 33.33% all breakpoints

Column 2 (main content):
- Column Class: 2/3
- Size → Grow to Fill: Enabled
- Takes remaining space

Mobile (Phone breakpoint):
- Both columns: Fullwidth
- Stacks vertically
```

**When to use:**
- Fixed sidebar + expanding content
- Asymmetric two-column layouts
- Content that should maintain width ratios

---

### Technique 3: Equal Minimum Width Columns (Breakpoint-Free)

**Use case:** Natural column wrapping without breakpoint overrides

**The problem it solves:**
```
❌ Traditional approach:
- Desktop: 4 columns
- Tablet: 2 columns (manual override)
- Phone: 1 column (manual override)
= 3 breakpoint settings to manage

✅ Equal Minimum Width:
- Set once: Column Minimum Width: 300px
- Columns wrap automatically when container < 300px
- No breakpoint overrides needed
```

**How to implement:**
```
Row Settings:
- Layout Style: Grid
- Column Widths: Equal Minimum Width Columns
- Column Minimum Width: 300px
- Horizontal/Vertical Gap: clamp(16px, 2.5vw, 30px)

Behavior:
- Ultra-wide (2560px): 8 columns
- Widescreen (1920px): 6 columns
- Desktop (1440px): 4 columns
- Tablet (768px): 2 columns
- Phone (375px): 1 column

All automatic based on available space!
```

**Benefits:**
- One setting, works everywhere
- Content-first approach
- Future-proof for new screen sizes
- Easier to maintain

**When to use:**
- Product grids
- Team member cards
- Portfolio galleries
- Any uniform card layout

---

### Technique 4: Content-Fixed + Expanding Pattern

**Use case:** Fixed sidebar, fluid main content

**Setup:**
```
Row: Flex, Direction: Row

Column 1 (fixed):
- Column Class: No Column Class
- Width: Auto (content-based)
- Flex Grow: 0 (doesn't expand)

Column 2 (expanding):
- Column Class: 2/3 (starting width)
- Size → Grow to Fill: Enabled
- Fills remaining space

Mobile:
- Column 2: Column Class: Fullwidth
- Stacks below Column 1
```

**Real-world example:**
```
Column 1: Author photo + bio (fixed 300px)
Column 2: Article content (expands)

On 1920px screen: Photo 300px, Content 1620px
On 1440px screen: Photo 300px, Content 1140px
On mobile: Both fullwidth, stacked
```

**Benefits:**
- No layout shift during resize
- Content always readable
- Natural proportions maintained

---

### Technique 5: Simplified Mobile Backgrounds

**Use case:** Heavy backgrounds on desktop, light on mobile for performance

**Strategy:**
```
Desktop + Tablet Wide:
- Background Image: Full hero image
- Background Gradient: Overlay for contrast
- Rich, immersive design

Tablet + Phone:
- Background Image: Removed
- Background Color: Solid color
- Background Mask: Subtle pattern (9% opacity)
- Faster load, less distraction
```

**How to implement:**
```
1. Desktop Breakpoint:
   Background → Image → Upload hero image
   Background → Gradient → Add overlay
   Enable: Place Gradient Above Background Image

2. Tablet Breakpoint:
   Background → Image → Remove (clear field)
   Background → Color → Add solid color
   Background → Mask → Select pattern
   Mask Color + 9% Opacity
   Mask Transform: Invert
   Mask Aspect Ratio: Landscape
```

**Performance impact:**
```
Desktop:
- Background image: 800KB
- Gradient: <1KB
- Total: ~800KB

Mobile:
- Solid color: <1KB
- SVG mask: ~2KB
- Total: ~3KB

Result: 99.6% smaller on mobile!
```

**When to use:**
- Hero sections
- Feature sections with images
- Any section with heavy backgrounds
- Mobile-first performance optimization

---

### Technique 6: Display Order for Mobile Flow

**Use case:** Reorder content priority on smaller screens

**Common scenarios:**
```
Desktop order:
1. Heading
2. Image
3. Text
4. CTA Button

Mobile order (improved):
1. Heading
2. CTA Button (moved up!)
3. Text (shortened)
4. Image (moved down)

Why: CTA above fold, text condensed, image secondary
```

**How to implement:**
```
Phone Breakpoint:

Column 4 (Button):
- Order → Display Order: 0 (first)

Column 1 (Heading):
- Order → Display Order: 1 (second)

Column 3 (Text):
- Order → Display Order: 2 (third)

Column 2 (Image):
- Order → Display Order: 3 (last)
```

**Also works on modules:**
```
Within a column:

CTA Button module:
- Display Order: 0

Text module:
- Display Order: 1

Button appears above text in same column
```

**Best practices:**
- Start from Tablet breakpoint for baseline
- Adjust Phone separately if needed
- Test actual mobile devices
- Consider thumb-reach for CTAs

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Responsive spacing variables
- `advanced-units.md` - clamp() for responsive values
- `flexbox-layout-system.md` - Responsive layouts

**Integration:**
- `../build/01_system_setup.md` - Responsive typography system
- `../workflows/starting-new-project.md` - Responsive planning
- `../build/02_divi5_mechanics.md` - Responsive workflows

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
