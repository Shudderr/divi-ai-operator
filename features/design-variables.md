# Design Variables System

**Purpose:** Complete guide to Divi 5's Design Variables system for centralized design control
**Category:** Core Features
**Priority:** Critical
**Last Updated:** January 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Design Variables are reusable, globally editable values that centralize design control across an entire website. They replace and expand upon the old Theme Customizer global colors system, offering far more flexibility and power.

**Key Benefit:** Update one variable, change it everywhere instantly.

---

## Accessing Design Variables

**Location:** Variable Manager icon in Visual Builder left sidebar (database/stack icon)

**Using Variables:** Click dynamic content icon (ϟ) next to any field → Select variable

**Management:** Create, edit, delete, and organize all variables in one place

---

## Variable Types

### 1. Colors

**Purpose:** Define brand color palettes that can be used anywhere colors are accepted

**Benefits:**
- More robust than WordPress Customizer global colors
- Applied anywhere colors are used (backgrounds, text, borders, shadows)
- Update once, changes site-wide instantly

**Example:**
```
Primary Brand: #11435B
Secondary: #F4AA2C
Text Light: #FFFFFF
Text Dark: #000000
Success: #28a745
Warning: #ffc107
Error: #dc3545
```

**Best Practices:**
- Create 5-8 core brand colors
- Name descriptively (not "Color 1")
- Include semantic colors (success, warning, error)
- Test WCAG contrast ratios before implementing

### 2. Fonts

**Purpose:** Standardize typography site-wide

**Benefits:**
- Better than Theme Customizer (which only handles heading/body)
- Apply any font variable to any text element
- Easy to test different font combinations

**Example:**
```
Heading Font: "Prata"
Body Font: "IBM Plex Mono"
Accent Font: "Playfair Display"
Monospace Font: "Fira Code"
```

**Best Practices:**
- Limit to 2-3 font families maximum
- Test load times (Google Fonts can slow sites)
- Consider system font stacks for performance
- Document where each font should be used

### 3. Numbers

**Purpose:** Store sizing, spacing, margins, padding, border radius values

**Supports:** px, rem, em, vw, calc(), clamp() - any CSS unit

**This is the most powerful variable type in Divi 5**

**Example Values:**
```
Border Radius Standard: 10px
Border Radius Card: 15px
Border Width: 1px
Section Padding Desktop: 80px
Section Padding Mobile: 40px
```

**Advanced Examples (see sections below for when to use):**
```
Space MD: clamp(16px, 3vw, 48px)
Hero Heading: clamp(26px, 5vw, 90px)
Button Padding: 16px (static - NOT clamp)
Body Text: 18px (static - NOT clamp)
```

### 4. Text

**Purpose:** Store reusable text strings that appear multiple times

**Perfect For:**
- Company names
- Phone numbers
- Addresses
- Taglines
- Copyright years
- Email addresses
- CTAs that repeat

**Example:**
```
Company Name: "Simplicity Technologies"
Phone: "1300 XXX XXX"
Address: "123 Main St, Brisbane QLD"
Tagline: "IT Solutions Made Simple"
Copyright Year: "2026"
```

**Benefits:**
- Update phone number once, changes in header, footer, contact page
- Seasonal tagline updates in one place
- Client can easily update their own info

### 5. Images

**Purpose:** Store commonly used images for easy global swapping

**Use Cases:**
- Logos (header, footer, alternate versions)
- Background patterns
- Product images that appear multiple times
- Icon sets
- Social media profile images

**Example:**
```
Logo Main: /uploads/logo-main.svg
Logo Footer: /uploads/logo-footer-white.svg
Pattern Background: /uploads/dot-pattern.png
```

**Benefits:**
- Swap logo once, updates everywhere
- Seasonal graphics (holiday versions)
- A/B testing different images

### 6. URLs/Links

**Purpose:** Define reusable links that may change over time

**Use Cases:**
- Seasonal promotions
- CTA destinations
- Sign-up forms
- Booking systems
- Affiliate links
- Campaign landing pages

**Example:**
```
Primary CTA: /get-started/
Current Sale: /summer-sale-2026/
Booking Link: https://calendly.com/yourcompany
Newsletter Signup: /newsletter/
```

**Benefits:**
- Change promotional destination quarterly without editing every button
- Update booking system link once
- Manage affiliate links centrally

---

## Creating a Spacing System

### Recommended Approach: Use Clamp() Strategically

**Zac's Philosophy on clamp() usage:**

#### ✅ USE CLAMP() FOR:

**Spacing (Macro Level):**
- Section padding (top/bottom)
- Gap between cards/grid items
- Major layout spacing
- Margins between content blocks

**Display/Hero Typography:**
- Large hero headings (H1 on landing pages)
- Big promotional text
- Feature section headings
- Where visual impact > precise readability

**Non-Critical UI Elements:**
- Icon sizes in feature cards
- Decorative element sizing
- Button padding (within reason)

#### ❌ AVOID CLAMP() FOR:

**Body Text:**
- Blog post content
- Paragraph text users need to read
- Form labels
- Product descriptions
- Anything with >3 lines of text

**Small Text:**
- Metadata (dates, author names)
- Footer text
- Legal/fine print
- Mobile navigation text

**Critical UI Elements:**
- Button text
- Form field text
- Error messages
- Navigation menu items

### Fluid Spacing System (Using Clamp)

**For macro-level spacing that should adapt smoothly:**

```
space-xs:  clamp(4px, 0.5vw, 12px)   // Tight relationships
space-sm:  clamp(8px, 1.5vw, 24px)   // Small gaps, icon spacing
space-md:  clamp(16px, 3vw, 48px)    // Most common gaps, card spacing
space-lg:  clamp(32px, 5vw, 80px)    // Section spacing, major divisions
space-xl:  clamp(48px, 6vw, 96px)    // Hero areas, large sections
space-2xl: clamp(64px, 8vw, 120px)   // Maximum impact spacing
```

**How clamp() works:**
```
clamp(minimum, preferred, maximum)

clamp(16px, 3vw, 48px) means:
- Never smaller than 16px (mobile protection)
- Grows at 3% of viewport width (fluid scaling)
- Never larger than 48px (desktop limit)
```

### Static Spacing System (8-Point Grid)

**For precise, predictable spacing using REM:**

Based on browser default 1rem = 16px:
```
gap-xs:   0.75rem  (~12px)  // Tight spacing
gap-s:    1.25rem  (~20px)  // Button internal padding
gap-m:    2rem     (~32px)  // Card padding, element spacing
gap-l:    3rem     (~48px)  // Section internal spacing
gap-xl:   4rem     (~64px)  // Major section dividers
gap-2xl:  5rem     (~80px)  // Hero sections
```

**When to use static vs fluid:**
- Static (rem/px): UI elements, buttons, forms, navigation, body text
- Fluid (clamp): Hero sections, feature areas, marketing content, display type

### Practical Usage Examples

**Section Padding:**
```
// Top/Bottom padding that scales with viewport
Padding Top/Bottom: var(--space-lg)
// Result: clamp(32px, 5vw, 80px)

// Left/Right padding can be fixed
Padding Left/Right: 20px
```

**Card Grid Gaps:**
```
// Gap between cards that grows on larger screens
Gap: var(--space-md)
// Result: clamp(16px, 3vw, 48px)
```

**Button Padding:**
```
// Fixed padding for consistent button size
Padding: 16px 32px (static, NOT a variable)
// Or use: var(--gap-m) if you want it tied to system
```

---

## Typography System

### Responsive Display Typography (Using Clamp)

**For hero headings and large promotional text:**

```
Hero H1: clamp(26px, 5vw, 90px)
Hero H2: clamp(22px, 4vw, 64px)
Feature Heading: clamp(20px, 3.5vw, 48px)
Display Text: clamp(18px, 3vw, 36px)
```

**Why clamp() works here:**
- Visual impact matters more than precise readability
- Text is short (1-2 lines max)
- Creates dramatic scaling effect
- Eliminates need for multiple breakpoint overrides

### Static Body Typography (Avoid Clamp)

**For readable, comfortable body text:**

```
Body Text: 18px (static)
Small Text: 16px (static)
Metadata: 14px (static)
Fine Print: 13px (static)

// Or using rem for accessibility:
Body Text: 1.125rem (18px)
Small Text: 1rem (16px)
Metadata: 0.875rem (14px)
```

**Why static sizing for body text:**
- Predictable reading experience
- Users expect consistent text size
- Browser zoom works correctly
- Accessibility best practice
- No jarring size changes between viewports

### Critical UI Text (Always Static)

**Never use clamp() for:**

```
Button Text: 16px or 1rem
Form Labels: 16px or 1rem
Form Input Text: 16px or 1rem (prevents iOS zoom)
Navigation Links: 16px or 1rem
Error Messages: 14px or 0.875rem
```

### Typography Variables Example

```
// Display Typography (can use clamp)
H1 Hero: clamp(26px, 5vw, 90px)
H2 Hero: clamp(22px, 4vw, 64px)

// Content Typography (static)
H1 Content: 42px
H2 Content: 32px
H3 Content: 24px
Body Large: 20px
Body Default: 18px
Body Small: 16px

// UI Typography (static)
Button Text: 16px
Nav Link: 16px
Form Label: 16px
Form Input: 16px
Metadata: 14px
Footer Text: 14px
```

---

## Integration with Presets

### Recommended Workflow

**Step 1: Create Design Variables First**
```
1. Open Variable Manager
2. Create all colors, fonts, spacing, typography
3. Document your system
```

**Step 2: Create Presets Using Variables**
```
1. Style a button
2. Use color variables (not hard-coded colors)
3. Use spacing variables (not hard-coded padding)
4. Save as preset
```

**Step 3: Update = Instant Site-Wide Changes**
```
1. Change variable value
2. All presets using that variable update
3. All modules using those presets update
Result: Change entire site in seconds
```

### Example: Button with Variables

**Traditional approach (bad):**
```
Background: #11435B (hard-coded)
Padding: 16px 32px (hard-coded)
Border Radius: 8px (hard-coded)
```

**Design Variables approach (good):**
```
Background: var(--color-primary)
Padding: var(--space-sm) var(--space-md)
Border Radius: var(--radius-standard)
```

**Benefits:**
- Change primary color variable = all buttons update
- Adjust spacing variable = consistent across site
- Most scalable workflow in Divi 5

---

## Related Files

**Prerequisites:**
- `../build/01_system_setup.md` - Color, typography, spacing standards
- `advanced-units.md` - Understanding clamp(), calc(), rem, vw

**Integration:**
- `preset-system-complete.md` - Using variables in presets
- `../build/02_divi5_mechanics.md` - Variables in workflows

**Advanced:**
- `../workflows/starting-new-project.md` - Setting up variables first
- `../workflows/design-system-import.md` - Exporting and importing variable systems
- `global-variables.md` - ⚠️ Legacy reference (superseded by Design Variables)

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
