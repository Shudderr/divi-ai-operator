# Advanced Units in Divi 5

**Purpose:** Complete guide to modern CSS units, calc(), clamp(), and when to use each
**Category:** Core Features
**Priority:** High
**Last Updated:** January 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Advanced Units enables the full range of modern CSS units, functions, and calculations directly in the Visual Builder without custom code. This is one of Divi 5's most powerful features for creating truly responsive, fluid designs.

**Key Benefit:** Build responsive designs that adapt smoothly across all device sizes without multiple breakpoint overrides.

---

## How to Use Advanced Units

### In the Visual Builder

1. Click into any numeric field (width, padding, margin, font size, etc.)
2. Unit dropdown appears on the right
3. Either:
   - Select unit from dropdown (px, rem, vw, etc.)
   - Type directly: `clamp(20px, 3vw, 40px)`
   - Type directly: `calc(100% - 60px)`
   - Type directly: `5rem`
4. See results in real-time as you type

**Supported everywhere:** Width, height, padding, margin, font size, line height, border radius, gaps, etc.

---

## Length Units

### px (Pixels)
**Type:** Static
**Use:** Precise control, UI elements, borders

```
Border Width: 1px
Icon Size: 24px
Button Min Height: 44px
```

**When to use:**
- Borders (1px, 2px)
- Small UI elements where precision matters
- Minimum touch targets (44px)
- Critical UI that shouldn't scale

**When NOT to use:**
- Large spacing (use clamp or rem instead)
- Typography (use rem for accessibility)
- Responsive layouts (use %, vw, or clamp)

### % (Percentage)
**Type:** Relative to parent
**Use:** Fluid layouts, responsive widths

```
Width: 50%
Padding: 5%
Left: 25%
```

**When to use:**
- Column widths in grids
- Responsive containers
- Positioning relative to parent

**When NOT to use:**
- Font sizes (use rem instead)
- Margins/padding (can cause unexpected scaling)

### rem (Root Em)
**Type:** Relative to root font size
**Use:** Accessible typography, consistent spacing

```
Font Size: 1.125rem (18px if root is 16px)
Padding: 2rem (32px)
Margin: 1.5rem (24px)
```

**When to use:**
- ✅ Body text and readable content
- ✅ Spacing that should scale with user preferences
- ✅ Accessibility-focused designs
- ✅ Consistent spacing systems

**Benefits:**
- Respects user browser font size settings
- Scales proportionally if user zooms
- Accessibility best practice

**Conversion (assuming default 16px root):**
```
0.75rem = 12px
0.875rem = 14px
1rem = 16px
1.125rem = 18px
1.25rem = 20px
1.5rem = 24px
2rem = 32px
```

### em (Em)
**Type:** Relative to parent element font size
**Use:** Proportional spacing within components

```
Padding: 0.5em (scales with element's font size)
Margin: 1em
```

**When to use:**
- Padding that should scale with text size
- Icons that should match text height
- Component-specific scaling

**Caution:** Can compound if nested (1.2em inside 1.2em = 1.44em)

### vw (Viewport Width)
**Type:** Relative to viewport width
**Use:** Viewport-based scaling, fluid typography

```
Font Size: 5vw (5% of viewport width)
Padding: 3vw
Width: 50vw (half of screen width)
```

**When to use:**
- Fluid typography in clamp()
- Responsive spacing in clamp()
- Full-width calculations

**When NOT to use alone:**
- Body text (too unpredictable)
- Critical UI (no min/max control)

### vh (Viewport Height)
**Type:** Relative to viewport height
**Use:** Full-height sections, vertical spacing

```
Min Height: 100vh (full screen height)
Padding Top: 10vh
Height: 80vh
```

**When to use:**
- Hero sections (min-height: 100vh)
- Full-screen overlays
- Vertical centering calculations

**Caution:** Mobile browsers with address bars can cause issues

### vmin / vmax
**Type:** Relative to smaller/larger viewport dimension
**Use:** Responsive elements that scale with either dimension

```
Font Size: 5vmin (5% of smaller dimension)
Width: 50vmax (50% of larger dimension)
```

**When to use:**
- Responsive squares (width: 50vmin; height: 50vmin)
- Text that needs to scale with available space
- Responsive decorative elements

---

## CSS Functions

### calc() - Mathematical Calculations

**Syntax:**
```
calc(expression)
```

**Supports:** +, -, *, / operations

**Use Cases:**

#### Layout Calculations
```
// Sidebar + main content layout
Sidebar Width: 300px
Main Content Width: calc(100% - 350px)  // 50px gap

// Full height minus header
Min Height: calc(100vh - 80px)

// Center positioning
Left: calc(50% - 150px)  // Centers 300px wide element
```

#### Dynamic Spacing
```
// Add extra space to variable
Padding: calc(var(--space-md) + 10px)

// Responsive padding
Padding: calc(20px + 1vw)

// Proportional spacing
Margin: calc(1em + 5%)
```

#### Grid Calculations
```
// 3 columns with 20px gaps
Width: calc((100% - 40px) / 3)

// 4 columns with variable gaps
Width: calc((100% - (3 * var(--gap))) / 4)
```

**Best Practices:**
- Always include spaces around operators: `calc(100% - 60px)` not `calc(100%-60px)`
- Can mix units: `calc(100vw - 300px)`
- Can nest calculations: `calc(calc(100% / 3) - 20px)`

**When to use:**
- Fixed sidebar + fluid content
- Full height minus header/footer
- Complex grid calculations
- Combining different units

---

### clamp() - Fluid, Responsive Values

**Syntax:**
```
clamp(minimum, preferred, maximum)
```

**How it works:**
1. Browser calculates preferred value
2. If preferred < minimum → uses minimum
3. If preferred > maximum → uses maximum
4. Otherwise → uses preferred value

**Result:** Value that grows/shrinks smoothly between min and max

---

## Zac's Clamp() Philosophy

### ✅ USE CLAMP() FOR:

#### 1. Spacing (Macro Level)
**Section padding, gaps between cards, major layout spacing**

```
// Section top/bottom padding
Padding: clamp(32px, 5vw, 80px)

// Gap between grid cards
Gap: clamp(16px, 3vw, 48px)

// Margin between content sections
Margin Bottom: clamp(24px, 4vw, 64px)

// Hero section padding
Padding: clamp(48px, 8vw, 120px)
```

**Why it works:**
- Creates smooth scaling between devices
- Eliminates need for multiple breakpoint overrides
- Provides minimum (mobile) and maximum (desktop) protection
- Spacing feels natural across all screen sizes

#### 2. Display/Hero Typography
**Large headings where visual impact > precise readability**

```
// Hero H1 on landing page
Font Size: clamp(26px, 5vw, 90px)

// Feature section heading
Font Size: clamp(22px, 4vw, 64px)

// Big promotional text
Font Size: clamp(20px, 3.5vw, 52px)

// Tagline in hero
Font Size: clamp(18px, 3vw, 36px)
```

**Why it works:**
- Short text (1-2 lines max)
- Visual impact matters most
- Dramatic scaling effect enhances design
- User isn't reading paragraphs

#### 3. Non-Critical UI Elements
**Decorative elements, icons, supporting visuals**

```
// Icon size in feature cards
Width/Height: clamp(32px, 4vw, 64px)

// Decorative element sizing
Width: clamp(40px, 5vw, 80px)

// Button padding (use cautiously)
Padding: clamp(12px, 1.5vw, 20px) clamp(24px, 3vw, 40px)
```

**Why it works:**
- Not critical for usability
- Visual flourishes that enhance design
- Smooth scaling improves overall feel

---

### ❌ AVOID CLAMP() FOR:

#### 1. Body Text
**ANY text users need to read carefully**

```
❌ WRONG:
Paragraph Text: clamp(14px, 2vw, 20px)  // NO!
Article Content: clamp(16px, 2.5vw, 22px)  // NO!
Product Description: clamp(15px, 2.2vw, 19px)  // NO!

✅ CORRECT:
Body Text: 18px  // Static, predictable
Article Content: 1.125rem  // Static with rem
Blog Post: 18px  // Consistent reading experience
```

**Why avoid clamp():**
- Users expect consistent text size
- Reading comfort matters more than design flourish
- Can cause eye strain if text keeps changing size
- Browser zoom should handle text scaling
- Accessibility best practice

**What counts as "body text":**
- Blog post content
- Product descriptions
- Form labels and instructions
- Terms and conditions
- About page paragraphs
- Service descriptions
- Any text >3 lines long

#### 2. Small Text
**Metadata, footer content, fine print**

```
❌ WRONG:
Post Date: clamp(10px, 1.5vw, 14px)  // NO!
Footer Links: clamp(12px, 2vw, 16px)  // NO!
Copyright: clamp(11px, 1.8vw, 15px)  // NO!

✅ CORRECT:
Metadata: 14px or 0.875rem
Footer Text: 14px or 0.875rem
Fine Print: 13px or 0.8125rem
```

**Why avoid clamp():**
- Already small - shrinking further harms readability
- Legal text must be readable (WCAG requirement)
- Footer navigation needs consistent tap targets
- Small text doesn't benefit from fluid scaling

#### 3. Critical UI Elements
**Buttons, forms, navigation, error messages**

```
❌ WRONG:
Button Text: clamp(14px, 2vw, 18px)  // NO!
Form Field Text: clamp(14px, 2vw, 18px)  // NO!
Nav Link: clamp(15px, 2.2vw, 17px)  // NO!
Error Message: clamp(13px, 1.8vw, 16px)  // NO!

✅ CORRECT:
Button Text: 16px or 1rem
Form Input Text: 16px (prevents iOS zoom!)
Navigation Links: 16px or 1rem
Error Messages: 14px or 0.875rem
```

**Why avoid clamp():**
- Usability depends on consistent sizing
- Mobile form inputs at 16px prevent iOS auto-zoom
- Button text must be instantly readable
- Error messages need immediate attention
- Navigation must be predictable size

**iOS Form Zoom Issue:**
```
// If input text < 16px, iOS zooms in automatically
// This is jarring and breaks UX

❌ WRONG: 
Input Text: clamp(14px, 2vw, 18px)  // Can drop below 16px!

✅ CORRECT:
Input Text: 16px  // Always 16px or larger
```

---

## Clamp() Examples by Use Case

### Perfect Use Cases

#### Hero Section
```
// Large hero heading
H1: clamp(32px, 6vw, 90px)

// Hero subheading  
H2: clamp(20px, 3.5vw, 48px)

// Hero section padding
Padding Top/Bottom: clamp(48px, 8vw, 120px)
Padding Left/Right: clamp(20px, 3vw, 40px)
```

#### Feature Cards Grid
```
// Gap between cards
Gap: clamp(16px, 3vw, 48px)

// Card padding
Padding: clamp(20px, 3vw, 40px)

// Feature icon size
Icon: clamp(32px, 4vw, 64px)

// Feature heading (short)
H3: clamp(18px, 3vw, 32px)

// Feature description (2-3 lines)
Text: 16px  // Static! It's readable content
```

#### Section Spacing
```
// Between major sections
Margin Bottom: clamp(32px, 5vw, 80px)

// Section internal padding
Padding: clamp(24px, 4vw, 64px)

// Content container max width
Max Width: clamp(300px, 90vw, 1200px)
```

### Avoid These Patterns

#### Blog Post (Don't Use Clamp)
```
❌ WRONG:
Post Title: clamp(24px, 4vw, 48px)  // NO! (unless it's purely decorative)
Post Content: clamp(16px, 2.5vw, 20px)  // NO! User needs to read
Post Meta: clamp(12px, 1.8vw, 14px)  // NO! Too small already
Sidebar Text: clamp(14px, 2vw, 16px)  // NO! Readable content

✅ CORRECT:
Post Title: 32px or 2rem (static)
Post Content: 18px or 1.125rem (static)
Post Meta: 14px or 0.875rem (static)
Sidebar Text: 16px or 1rem (static)
```

#### Contact Form (Don't Use Clamp)
```
❌ WRONG:
Label: clamp(14px, 2vw, 16px)  // NO!
Input Text: clamp(14px, 2vw, 18px)  // NO! iOS zoom issue
Button Text: clamp(15px, 2.2vw, 17px)  // NO!
Error Text: clamp(13px, 1.8vw, 15px)  // NO!

✅ CORRECT:
Label: 16px or 1rem
Input Text: 16px (exactly, for iOS)
Button Text: 16px or 1rem  
Error Text: 14px or 0.875rem
```

---

## Building a Spacing System

### Fluid Spacing (Clamp-Based)

**For macro-level layout spacing:**

```
// Micro spacing - tight relationships
space-xs: clamp(4px, 0.5vw, 12px)

// Small spacing - icons, tight gaps
space-sm: clamp(8px, 1.5vw, 24px)

// Medium spacing - most common gaps
space-md: clamp(16px, 3vw, 48px)

// Large spacing - section internal spacing
space-lg: clamp(32px, 5vw, 80px)

// XL spacing - major sections
space-xl: clamp(48px, 6vw, 96px)

// 2XL spacing - hero areas, maximum impact
space-2xl: clamp(64px, 8vw, 120px)
```

**Usage:**
```
Section Padding: var(--space-lg)
Card Gap: var(--space-md)
Hero Padding: var(--space-xl)
Icon Spacing: var(--space-sm)
```

### Static Spacing (REM-Based)

**For UI elements, buttons, forms:**

```
// Based on 1rem = 16px
ui-xs: 0.5rem    (8px)   // Tiny gaps
ui-sm: 1rem      (16px)  // Button padding, small gaps
ui-md: 1.5rem    (24px)  // Card padding
ui-lg: 2rem      (32px)  // Container padding
ui-xl: 3rem      (48px)  // Section internal padding
```

**Usage:**
```
Button Padding: var(--ui-sm) var(--ui-md)
Form Field Padding: var(--ui-sm)
Card Padding: var(--ui-md)
Modal Padding: var(--ui-lg)
```

---

## Decision Tree: Which Unit to Use?

```
Is this spacing between major sections?
├─ Yes → clamp(min, vw, max)
└─ No ↓

Is this hero/display typography? (1-2 lines)
├─ Yes → clamp(min, vw, max)
└─ No ↓

Is this readable body text? (>3 lines)
├─ Yes → 18px or 1.125rem (static)
└─ No ↓

Is this a button, form, or navigation?
├─ Yes → 16px or 1rem (static)
└─ No ↓

Is this metadata or small text?
├─ Yes → 14px or 0.875rem (static)
└─ No ↓

Is this decorative/non-critical?
├─ Yes → clamp(min, vw, max) or static rem
└─ No → Default to static rem for safety
```

---

## Max-Width Pattern (Content Containers)

**Use clamp() for responsive max-width that maintains consistent margins across all screen sizes:**

### Standard Max-Width Values
```
// Standard content container
Max Width: clamp(320px, 90vw, 1200px)
Margin: 0 auto  // Centers container

// Narrow reading width (blog posts, articles)
Max Width: clamp(280px, 85vw, 800px)

// Wide layout (portfolios, galleries)
Max Width: clamp(320px, 95vw, 1400px)

// Hero content block
Max Width: clamp(320px, 90vw, 900px)

// Full-width sections (landing pages)
Max Width: clamp(320px, 92vw, 1600px)
```

### How It Works

**Anatomy of the pattern:**
```
Max Width: clamp(320px, 90vw, 1200px)
                 │      │     │
                 │      │     └─ Maximum: Desktop cap (1200px)
                 │      └─────── Preferred: 90% of viewport (leaves 5% margin each side)
                 └────────────── Minimum: Prevents too-narrow on small phones (320px)
```

**Why 90vw?**
- Leaves ~5% margin on left + 5% margin on right
- Content never touches viewport edges
- Comfortable reading experience at all sizes
- No horizontal scroll risk

**Why this works better than alternatives:**
```
❌ Width: 90%
   Problem: No minimum protection (too narrow on 320px phones)
   Result: Content gets squeezed on small devices

❌ Max-width: 1200px
   Problem: No margin on screens < 1200px
   Result: Content touches edges on mobile/tablet

✅ Max-width: clamp(320px, 90vw, 1200px)
   Result: Perfect at all sizes - minimum protection + automatic margins + desktop cap
```

### Benefits

- ✅ No media query overrides needed
- ✅ Automatic margins at all screen sizes
- ✅ Content never touches viewport edges
- ✅ Smooth scaling from mobile to desktop
- ✅ Prevents overly-narrow layouts on small phones
- ✅ Caps width on ultra-wide monitors
- ✅ One value works across all breakpoints

### In Divi 5

**For Sections/Rows/Columns:**
1. Select element → Design → Sizing
2. Max Width field: `clamp(320px, 90vw, 1200px)`
3. Spacing → Margin: Set to `0 auto` (centers the container)

**For Modules (Text, Image, etc.):**
1. Select module → Design → Sizing
2. Max Width: `clamp(280px, 85vw, 800px)` (narrower for readability)
3. Module Alignment: Center

### Example Use Cases

#### Use Case 1: Reading Content (Optimal Line Length)
```
// Blog post content, article text
Text Module Max Width: clamp(280px, 80ch, 720px)

// 'ch' = character width
// Maintains optimal 45-75 character line length
// Best for readability
```

**Why `ch` units?**
- 1ch = width of the "0" character in current font
- 65ch ≈ 65 characters per line
- Optimal reading: 45-75 characters
- Better than px for reading content

#### Use Case 2: Service Page Content
```
Row Settings:
- Max Width: clamp(320px, 90vw, 1140px)
- Margin: 0 auto

Result: Professional content width with automatic margins
```

#### Use Case 3: Hero Text Block
```
Text Module (Hero headline + description):
- Max Width: clamp(280px, 85vw, 800px)
- Module Alignment: Center
- Text Alignment: Center

Result: Centered hero content that never gets too wide or too narrow
```

#### Use Case 4: Full-Width Section with Inner Container
```
Section:
- Width: 100% (full-width background color/image)
- Padding: 0

  └─ Row:
     - Max Width: clamp(320px, 90vw, 1200px)
     - Margin: 0 auto
     - Padding: clamp(48px, 6vw, 96px) clamp(20px, 3vw, 40px)

Result: Full bleed background with properly constrained content
```

#### Use Case 5: Card Grid Container
```
Row (containing card columns):
- Max Width: clamp(320px, 92vw, 1400px)
- Margin: 0 auto
- Gap: clamp(24px, 3vw, 48px)

Result: Cards spread nicely on desktop, stack on mobile
```

### Common Max-Width Patterns by Content Type

**Blog/Article Content:**
```
Max Width: clamp(280px, 80ch, 720px)
// Optimal for reading long-form content
```

**Service Pages:**
```
Max Width: clamp(320px, 90vw, 1140px)
// Standard content width
```

**Landing Pages:**
```
Max Width: clamp(320px, 92vw, 1600px)
// Wider for more visual impact
```

**Hero Sections:**
```
Max Width: clamp(320px, 85vw, 900px)
// Narrower for focused content
```

**Sidebar Layouts:**
```
Main Content: clamp(320px, 65vw, 800px)
Sidebar: clamp(280px, 30vw, 350px)
// Proportional widths that scale together
```

**Contact Forms:**
```
Max Width: clamp(320px, 90vw, 600px)
// Narrow forms are easier to complete
```

**Image Galleries:**
```
Max Width: clamp(320px, 95vw, 1600px)
// Wide to showcase images
```

### Combining with Other Units

**Max-Width + Padding:**
```
Row Settings:
- Max Width: clamp(320px, 90vw, 1200px)
- Padding: clamp(32px, 5vw, 80px)
- Margin: 0 auto

Result: Content width AND internal spacing both scale fluidly
```

**Max-Width + Gap (Grid/Flex):**
```
Row Settings:
- Layout: Grid
- Max Width: clamp(320px, 90vw, 1400px)
- Gap: clamp(24px, 3vw, 48px)
- Margin: 0 auto

Result: Container width and item spacing both responsive
```

### When to Use Each Pattern

**Use clamp(320px, 90vw, 1200px) when:**
- Standard page content
- Most sections on most pages
- Service pages, about pages
- Default choice for content containers

**Use clamp(280px, 80ch, 720px) when:**
- Blog posts
- Article content
- Long-form reading
- Typography-focused pages

**Use clamp(320px, 85vw, 900px) when:**
- Hero content blocks
- Centered promotional content
- CTAs with headline + description

**Use clamp(320px, 95vw, 1600px) when:**
- Portfolio/gallery pages
- Full-width landing pages
- Image-heavy layouts
- Maximum visual impact needed

### Testing Your Max-Width Values

**Test at these viewport widths:**
1. **320px** (iPhone SE) - Should use minimum (320px)
2. **375px** (iPhone) - Should use ~337px (90% of 375)
3. **768px** (iPad portrait) - Should use ~691px (90% of 768)
4. **1024px** (iPad landscape) - Should use ~922px (90% of 1024)
5. **1440px** (Laptop) - Should hit maximum (1200px)
6. **1920px** (Desktop) - Should stay at maximum (1200px)

**Red Flags:**
- Content touching edges on mobile → Increase vw% or decrease minimum
- Content too narrow on phone → Increase minimum
- Content too wide on desktop → Decrease maximum
- Margins inconsistent → Check if margin: 0 auto is set

---

## Testing Your Units

### How to Test Clamp Values

**Method 1: Browser DevTools**
1. Inspect element
2. Resize browser window
3. Watch computed value update
4. Verify min/max are respected

**Method 2: Real Devices**
1. Test on actual phone (320px viewport)
2. Test on tablet (768px viewport)
3. Test on desktop (1440px+ viewport)
4. Verify comfortable reading/spacing at all sizes

**Method 3: Responsive Mode**
1. Visual Builder responsive toggle
2. Cycle through breakpoints (Alt+R)
3. Verify design works at each breakpoint

### Red Flags

**Text is jumping sizes dramatically:**
- Preferred value (vw) too aggressive
- Reduce vw percentage: `5vw` → `3vw`

**Text too small on mobile:**
- Minimum too low
- Increase minimum: `clamp(14px, ...)` → `clamp(16px, ...)`

**Text too large on desktop:**
- Maximum too high
- Reduce maximum: `clamp(..., 90px)` → `clamp(..., 72px)`

**Body text hard to read:**
- ❌ Remove clamp() entirely
- ✅ Use static: 18px or 1.125rem

---

## Common Mistakes

### Mistake 1: Clamp on Body Text
```
❌ WRONG:
Body Text: clamp(14px, 2.5vw, 20px)

Problem: Text size constantly changing as user scrolls/resizes
Solution: Use static size - 18px or 1.125rem
```

### Mistake 2: Too Aggressive Preferred Value
```
❌ WRONG:
Heading: clamp(20px, 10vw, 60px)

Problem: On 1920px screen = 192px (way over max)
Solution: Lower vw - clamp(20px, 4vw, 60px)
```

### Mistake 3: Min Larger Than Max
```
❌ WRONG:
Padding: clamp(40px, 5vw, 30px)

Problem: Min (40px) > Max (30px) = broken
Solution: clamp(20px, 5vw, 40px)
```

### Mistake 4: Clamp on Critical UI
```
❌ WRONG:
Button Text: clamp(14px, 2vw, 18px)
Form Input: clamp(14px, 2vw, 18px)

Problem: Can drop below 16px (iOS zoom issue), unpredictable UI
Solution: Static 16px or 1rem
```

### Mistake 5: Missing Units
```
❌ WRONG:
clamp(20, 5vw, 40)

Problem: No units on min/max
Solution: clamp(20px, 5vw, 40px)
```

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Creating spacing/typography variables
- `../build/01_system_setup.md` - Design system foundations

**Integration:**
- `preset-system-complete.md` - Using advanced units in presets
- `flexbox-layout-system.md` - Combining with flexbox gaps

**Workflows:**
- `../workflows/starting-new-project.md` - Setting up spacing system
- `../build/02_divi5_mechanics.md` - Applying units in practice

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
