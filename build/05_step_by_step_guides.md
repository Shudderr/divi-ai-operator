# Step-by-Step Build Guides - Divi 5

**Purpose:** Click-by-click instructions for building common Divi 5 components
**Category:** Build Guides
**Priority:** High
**Last Updated:** December 2024

---

## 📋 Guide Format Rules

Every guide in this file follows these 4 rules:

### 1. **Skeleton First**
Always start by telling which modules to place:
- Example: "Add Section → Add Row → 3 Columns → Text, Image, Button"

### 2. **Tabbed Instructions**
Settings organized by Divi's actual tabs:
- **Content Tab** - What content to add, module selection
- **Design Tab** - Visual styling, colors, spacing
- **Advanced Tab** - Custom CSS, classes, animations

### 3. **The "Simplicity" Math**
All spacing uses the 8px grid:
- **xs:** 8px
- **sm:** 16px
- **md:** 24px
- **lg:** 32px
- **xl:** 48px
- **2xl:** 64px
- **3xl:** 96px

All colors use Design Variables:
- `var(--et-global-color-primary)`
- `var(--et-global-color-accent)`
- `var(--et-global-color-text-primary)`

### 4. **Copy-Paste Helpers**
CSS snippets only for Custom CSS boxes in Advanced tab (where Divi's UI is limited)

---

## 🎯 Guide #1: 3-Column Pricing Cards

### The Skeleton

```
Section
└── Row (3 Columns: 1/3 + 1/3 + 1/3)
    ├── Column 1
    │   ├── Text Module (Plan Name)
    │   ├── Text Module (Price)
    │   ├── Text Module (Features List)
    │   └── Button Module (CTA)
    ├── Column 2 (Featured)
    │   ├── Text Module (Badge)
    │   ├── Text Module (Plan Name)
    │   ├── Text Module (Price)
    │   ├── Text Module (Features List)
    │   └── Button Module (CTA)
    └── Column 3
        ├── Text Module (Plan Name)
        ├── Text Module (Price)
        ├── Text Module (Features List)
        └── Button Module (CTA)
```

---

### Step 1: Add Section

**Content Tab:**
- Admin Label: `Section - Pricing`

**Design Tab:**
- Background → Background Color: `#f5f7fa`
- Spacing → Padding:
  - Desktop: `64px` top, `64px` bottom (8px × 8)
  - Tablet: `48px` top, `48px` bottom (8px × 6)
  - Phone: `32px` top, `32px` bottom (8px × 4)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-section pricing-section`

---

### Step 2: Add Row (3 Columns)

**Content Tab:**
- Column Structure: Select **1/3 + 1/3 + 1/3**
- Admin Label: `Row - Pricing Cards`

**Design Tab:**
- Sizing → Make Columns Equal Height: **ON** (Flexbox)
- Sizing → Gutter Width: `3`
- Spacing → Padding: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-row pricing-row`

---

### Step 3: Style All Columns (Repeat for Each)

**Design Tab:**
- Background → Background Color: `#ffffff`
- Border → Rounded Corners: `8px` all corners
- Box Shadow → Box Shadow:
  - Style: `Preset 1`
  - Blur: `16px` (standard columns)
  - Color: `rgba(0,0,0,0.08)`
- Spacing → Padding:
  - Standard columns (1 & 3): `32px` all sides (8px × 4)
  - Featured column (2): `40px` top/bottom, `32px` left/right

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-column pricing-column`
- Featured column also add: `pricing-featured`

---

### Step 4: Featured Column - Add Border

**Design Tab (Column 2 Only):**
- Border → Border:
  - Width: `2px` all sides
  - Color: Click color picker → **Use Global** → Select `Accent Color`

---

### Step 5: Add "Most Popular" Badge (Column 2 Only)

Add **Text Module** at top of featured column:

**Content Tab:**
- Content: `<p>Most Popular</p>`
- Admin Label: `Featured Badge`

**Design Tab:**
- Text → Text Alignment: `Center`
- Background → Background Color: Click → **Use Global** → `Accent Color`
- Spacing → Padding: `4px` top/bottom, `16px` left/right
- Border → Rounded Corners: `4px` all corners
- Text → Text Size: `12px`
- Text → Text Color: `#ffffff`
- Text → Font Weight: `Bold`
- Text → Text Transform: `Uppercase`
- Spacing → Margin: `0px` top, `16px` bottom

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `pricing-badge`

---

### Step 6: Add Plan Name (All Columns)

Add **Text Module**:

**Content Tab:**
- Content: `<h3>Starter</h3>` (or Professional, Enterprise)
- Admin Label: `Plan Name`

**Design Tab:**
- Heading Text → Heading 3 Font:
  - Click → **Use Global** → Select your H3 preset
- Text → Text Alignment: `Center`
- Text → Text Color: Click → **Use Global** → `Text Primary`
- Spacing → Margin: `0px` top, `16px` bottom (8px × 2)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `pricing-plan-name`

---

### Step 7: Add Price (All Columns)

Add **Text Module**:

**Content Tab:**
- Content: `<h2>$29<span style="font-size: 18px; color: #777;">/mo</span></h2>`
- Admin Label: `Price`

**Design Tab:**
- Heading Text → Heading 2 Font → Text Size: `48px`
- Text → Text Alignment: `Center`
- Text → Text Color: Click → **Use Global** → `Accent Color`
- Spacing → Margin: `0px` top, `24px` bottom (8px × 3)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `pricing-price`

---

### Step 8: Add Features List (All Columns)

Add **Text Module**:

**Content Tab:**
- Content (copy this):
```html
<ul style="list-style: none; padding: 0; margin: 0;">
<li style="padding: 8px 0; border-bottom: 1px solid #e8e8e8;">✓ 5 Projects</li>
<li style="padding: 8px 0; border-bottom: 1px solid #e8e8e8;">✓ 10GB Storage</li>
<li style="padding: 8px 0; border-bottom: 1px solid #e8e8e8;">✓ Email Support</li>
<li style="padding: 8px 0;">✓ Basic Analytics</li>
</ul>
```
- Admin Label: `Features List`

**Design Tab:**
- Text → Body Font → Text Size: `16px`
- Text → Text Color: Click → **Use Global** → `Text Secondary`
- Spacing → Margin: `0px` top, `32px` bottom (8px × 4)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `pricing-features`

---

### Step 9: Add CTA Button (All Columns)

Add **Button Module**:

**Content Tab:**
- Button Text: `Get Started` (or "Contact Sales" for Enterprise)
- Button Link URL: `#` (replace with actual URL)
- Admin Label: `CTA Button`

**Design Tab:**
- Button → Alignment: `Center`
- Button → Use Custom Styles: **ON**
- Button → Button Background Color: Click → **Use Global** → `Accent Color`
- Button → Button Text Color: `#ffffff`
- Button → Border → Rounded Corners: `4px`
- Text → Button Text Size: `16px`
- Text → Font Weight: `Semi Bold` or `Bold`
- Spacing → Custom Padding: `12px` top/bottom, `32px` left/right
- Spacing → Margin: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `pricing-cta`

---

## 🎯 Guide #2: Hero Section with Image Background

### The Skeleton

```
Section (Full Width)
└── Row (1 Column)
    └── Column
        ├── Text Module (Heading)
        ├── Text Module (Subheading)
        └── Button Module (CTA)
```

---

### Step 1: Add Section

**Content Tab:**
- Admin Label: `Section - Hero`

**Design Tab:**
- Background → Background Image: Upload your hero image
- Background → Background Image Position: `Center`
- Background → Background Image Size: `Cover`
- Spacing → Padding:
  - Desktop: `96px` top, `96px` bottom (8px × 12 = 3xl)
  - Tablet: `64px` top, `64px` bottom (8px × 8 = 2xl)
  - Phone: `48px` top, `48px` bottom (8px × 6 = xl)
- Spacing → Min Height: `70vh` (70% of viewport height)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-section hero-section`
- Visibility → Overflow → Horizontal: `Hidden`
- Visibility → Overflow → Vertical: `Hidden`

---

### Step 2: Add Dark Overlay for Text Contrast

Still in **Section Settings**:

**Design Tab:**
- Background → Background Gradient:
  - Start Color: `rgba(0,0,0,0.5)` (50% black)
  - End Color: `rgba(0,0,0,0.5)` (same = solid overlay)
  - Direction: Doesn't matter (solid color)

---

### Step 3: Add Row

**Content Tab:**
- Column Structure: **Full Width** (1 column)
- Admin Label: `Row - Hero Content`

**Design Tab:**
- Sizing → Width: `100%`
- Sizing → Max Width: `800px` (keeps content readable)
- Spacing → Padding: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-row hero-row`

---

### Step 4: Style Column

**Design Tab:**
- Spacing → Padding: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-column hero-content`
- Filters → CSS Filters → Z-Index: `10` (ensures text is above overlay)

---

### Step 5: Add Heading

Add **Text Module**:

**Content Tab:**
- Content: `<h1>Your Powerful Headline Here</h1>`
- Admin Label: `Hero Heading`

**Design Tab:**
- Heading Text → Heading 1 Font:
  - Text Size: `48px` desktop, `36px` tablet, `28px` phone
  - Text Color: `#ffffff`
  - Font Weight: `Bold`
- Text → Text Alignment: `Center`
- Text → Line Height: `1.3em`
- Spacing → Margin: `0px` top, `16px` bottom (8px × 2)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `hero-heading`

---

### Step 6: Add Subheading

Add **Text Module**:

**Content Tab:**
- Content: `<p>A compelling subheading that explains your value proposition in one clear sentence.</p>`
- Admin Label: `Hero Subheading`

**Design Tab:**
- Text → Body Font:
  - Text Size: `20px` desktop, `18px` tablet, `16px` phone
  - Text Color: `#f5f5f5` (slightly off-white for hierarchy)
  - Line Height: `1.6em`
- Text → Text Alignment: `Center`
- Spacing → Margin: `0px` top, `32px` bottom (8px × 4)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `hero-subheading`

---

### Step 7: Add CTA Button

Add **Button Module**:

**Content Tab:**
- Button Text: `Get Started Free`
- Button Link URL: `#contact` (or your URL)
- Admin Label: `Hero CTA`

**Design Tab:**
- Button → Alignment: `Center`
- Button → Use Custom Styles: **ON**
- Button → Button Background Color: Click → **Use Global** → `Accent Color`
- Button → Button Text Color: `#ffffff`
- Button → Border → Rounded Corners: `4px`
- Text → Button Text Size: `18px`
- Text → Font Weight: `Bold`
- Spacing → Custom Padding: `16px` top/bottom, `48px` left/right
- Box Shadow → Box Shadow:
  - Style: `Preset 1`
  - Blur: `16px`
  - Color: `rgba(0,0,0,0.3)`

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `hero-cta`

---

## 🎯 Guide #3: Testimonial Card

### The Skeleton

```
Section
└── Row (1 Column)
    └── Column
        └── Blurb Module
            ├── Icon/Image (Customer Photo)
            ├── Title (Customer Name)
            └── Content (Testimonial Quote)
```

---

### Step 1: Add Section

**Content Tab:**
- Admin Label: `Section - Testimonial`

**Design Tab:**
- Background → Background Color: `#ffffff`
- Spacing → Padding: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-section testimonial-section`

---

### Step 2: Add Row

**Content Tab:**
- Column Structure: **Full Width**
- Admin Label: `Row - Testimonial`

**Design Tab:**
- Sizing → Max Width: `800px`
- Spacing → Padding: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-row testimonial-row`

---

### Step 3: Add Blurb Module

Add **Blurb Module**:

**Content Tab:**
- Title: `John Smith`
- Content: `"This service completely transformed our business. The results exceeded our expectations in every way."`
- Image: Upload customer photo
- Admin Label: `Testimonial Card`

**Design Tab:**
- Image & Icon → Image Position: `Top`
- Image & Icon → Image Width: `80px`
- Image & Icon → Custom Margin: `0px` all sides, `24px` bottom
- Title Text → Title Font:
  - Text Size: `20px`
  - Text Color: Click → **Use Global** → `Text Primary`
  - Font Weight: `Semi Bold`
- Title Text → Title Margin: `0px` top, `8px` bottom
- Body → Body Font:
  - Text Size: `16px`
  - Text Color: Click → **Use Global** → `Text Secondary`
  - Font Style: `Italic`
  - Line Height: `1.6em`
- Background → Background Color: `#f9f9f9`
- Border → Rounded Corners: `8px` all corners
- Border → Border:
  - Left Width: `4px`
  - Left Color: Click → **Use Global** → `Accent Color`
- Spacing → Padding: `32px` all sides (8px × 4)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `testimonial-card`
- Custom CSS → Main Element (paste this):
```css
box-shadow: 0 2px 8px rgba(0,0,0,0.08);
transition: transform 0.3s ease, box-shadow 0.3s ease;
```
- Custom CSS → Main Element (Hover):
```css
transform: translateY(-4px);
box-shadow: 0 8px 16px rgba(0,0,0,0.12);
```

---

### Step 4: Make Customer Photo Circular

**Advanced Tab (Blurb Module):**
- Custom CSS → Image:
```css
border-radius: 50%;
object-fit: cover;
```

---

## 🎯 Guide #4: Feature Cards Grid (3 Columns)

### The Skeleton

```
Section
└── Row (3 Columns: 1/3 + 1/3 + 1/3)
    ├── Column 1
    │   └── Blurb Module (Icon, Title, Description)
    ├── Column 2
    │   └── Blurb Module (Icon, Title, Description)
    └── Column 3
        └── Blurb Module (Icon, Title, Description)
```

---

### Step 1: Add Section

**Content Tab:**
- Admin Label: `Section - Features`

**Design Tab:**
- Background → Background Color: `#ffffff`
- Spacing → Padding:
  - Desktop: `64px` top/bottom (8px × 8)
  - Tablet: `48px` top/bottom (8px × 6)
  - Phone: `32px` top/bottom (8px × 4)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-section features-section`

---

### Step 2: Add Row (3 Columns)

**Content Tab:**
- Column Structure: **1/3 + 1/3 + 1/3**
- Admin Label: `Row - Features`

**Design Tab:**
- Sizing → Gutter Width: `3`
- Spacing → Padding: `0px` all sides

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `ds-row features-row`

---

### Step 3: Add Blurb Modules (One in Each Column)

Add **Blurb Module** to each column:

**Content Tab:**
- Title: `Fast Performance`
- Content: `Optimized for speed with lightning-fast load times and smooth user experience.`
- Use Icon: **ON**
- Icon: Choose relevant icon (e.g., ⚡ lightning bolt)
- Admin Label: `Feature Card`

**Design Tab:**
- Image & Icon → Icon Placement: `Top`
- Image & Icon → Icon Color: Click → **Use Global** → `Accent Color`
- Image & Icon → Icon Font Size: `48px`
- Image & Icon → Custom Margin: `0px` all sides, `24px` bottom
- Title Text → Title Font:
  - Text Size: Click → **Use Global** → H3 preset size
  - Text Color: Click → **Use Global** → `Text Primary`
  - Font Weight: `Bold`
- Title Text → Title Margin: `0px` top, `16px` bottom
- Body → Body Font:
  - Text Size: `16px`
  - Text Color: Click → **Use Global** → `Text Secondary`
  - Line Height: `1.6em`
- Text → Text Alignment: `Center`
- Spacing → Padding: `24px` all sides (8px × 3)

**Advanced Tab:**
- CSS ID & Classes → CSS Class: `feature-card`

---

### Step 4: Add Hover Effect to Feature Cards

**Advanced Tab (Each Blurb Module):**
- Custom CSS → Main Element:
```css
transition: transform 0.3s ease;
```
- Custom CSS → Main Element (Hover):
```css
transform: translateY(-8px);
```

---

## 📐 The "Simplicity" Math Reference

**Always use these spacing values:**

| Name | Pixels | Usage |
|------|--------|-------|
| xs | 8px | Icon gaps, tight spacing |
| sm | 16px | Button padding, small gaps |
| md | 24px | Card padding, element spacing |
| lg | 32px | Section internal padding |
| xl | 48px | Section padding (desktop) |
| 2xl | 64px | Major section dividers |
| 3xl | 96px | Hero sections, major divisions |

**Global Color Variables:**
- `var(--et-global-color-primary)` - Main brand color
- `var(--et-global-color-secondary)` - Secondary brand color
- `var(--et-global-color-accent)` - Accent/CTA color
- `var(--et-global-color-text-primary)` - Headings, main text
- `var(--et-global-color-text-secondary)` - Body text, descriptions

---

## 🎨 Custom CSS Helpers

**Use these ONLY in Advanced Tab → Custom CSS when Divi's UI doesn't offer the setting:**

### Smooth Transitions
```css
transition: all 0.3s ease;
```

### Hover Lift Effect
```css
/* Main Element */
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Main Element (Hover) */
transform: translateY(-4px);
box-shadow: 0 8px 16px rgba(0,0,0,0.15);
```

### Circular Images
```css
/* Image or Icon */
border-radius: 50%;
object-fit: cover;
```

### Text Shadow for Readability on Images
```css
/* Title Text or Body Text */
text-shadow: 0 2px 4px rgba(0,0,0,0.3);
```

### Gradient Overlays
```css
/* Main Element */
position: relative;
```
```css
/* Main Element:before */
content: '';
position: absolute;
inset: 0;
background: linear-gradient(135deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2));
z-index: 0;
```

### Force Equal Height Cards
```css
/* Main Element */
display: flex;
flex-direction: column;
height: 100%;
```

---

## 📚 Related Files

**Design System:**
- `01_system_setup.md` - 8px grid system, color standards
- `../features/global-variables.md` - Global color setup

**Components:**
- `03_components.md` - Component design patterns
- `../design-patterns/` - Additional patterns

**Mechanics:**
- `02_divi5_mechanics.md` - How Divi 5 works

---

**Last Updated:** December 2024
**Status:** Active
**Divi Version:** 5.x
