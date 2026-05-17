# Component Rules & Patterns - Divi 5

**Purpose:** Specific implementation guidelines for common UI components
**Category:** Design Patterns & Components
**Priority:** High
**Last Updated:** December 2024

---

## 🧭 Navigation Patterns

### Sticky vs Fixed vs Static

**Static Navigation:**
- Default position, scrolls with page
- Use when: Simple sites, minimal header content
- Pros: No JavaScript required, natural UX
- Cons: Navigation disappears on scroll

**Sticky Navigation:**
- Stays at top when scrolling down
- Use when: Multi-page sites, need persistent navigation
- Pros: Always accessible, native CSS support
- Cons: Takes up viewport space

**Fixed Navigation:**
- Always fixed to viewport
- Use when: Web apps, dashboards
- Pros: Completely fixed, z-index control
- Cons: Requires careful z-index management

### Transparent on Load, Solid on Scroll

**Common pattern for hero sections:**

```css
/* Initial state - transparent */
.et-l--header {
    background: transparent;
    transition: background 0.3s ease;
}

/* Scrolled state - solid */
.et-l--header.scrolled {
    background: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Where to apply in Divi:**
1. Theme Builder → Header → Design → Background
2. Set initial background to transparent
3. Add Custom CSS for scroll behavior
4. Use JavaScript to add `.scrolled` class on scroll

### Hamburger Menu Best Practices

**Mobile Menu Triggers:**
- Minimum 44x44px touch target
- Clear icon (☰ universally recognized)
- Visible focus state
- Smooth animation (< 300ms)

**Mobile Menu Panel:**
- Full-screen or slide-in drawer
- Close button (X) in top-right
- Links large enough to tap (min 44px height)
- Keyboard accessible (Tab navigation)

### Mega Menus

**When to use:**
- Sites with 20+ pages
- Multiple categories/services
- E-commerce with product categories

**Structure:**
```
Desktop: Full-width dropdown with columns
Mobile: Accordion or stacked list

Best practices:
- Max 4-5 columns
- Visual hierarchy (headings, icons)
- Featured items/images
- Keyboard navigation support
```

### Dropdown Styling

**Consistent dropdown design:**
```css
/* Dropdown container */
.et-menu-nav ul.sub-menu {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 8px 0;
}

/* Dropdown links */
.et-menu-nav ul.sub-menu li a {
    padding: 12px 24px;
    transition: background 0.2s ease;
}

.et-menu-nav ul.sub-menu li a:hover {
    background: #f5f5f5;
}
```

### Logo Sizing (Desktop vs Mobile)

**Desktop:**
- Max height: 60-80px
- Maintain aspect ratio
- Centered or left-aligned

**Mobile:**
- Max height: 40-50px
- Scale proportionally
- Consider simplified/icon version

**Code:**
```css
.site-logo {
    max-height: 70px;
    width: auto;
}

@media (max-width: 767px) {
    .site-logo {
        max-height: 45px;
    }
}
```

### Active State Indicators

**Show current page in navigation:**
```css
/* Active menu item */
.et-menu-nav li.current-menu-item a {
    color: var(--et-global-color-primary);
    font-weight: 600;
}

/* Or underline */
.et-menu-nav li.current-menu-item a {
    border-bottom: 2px solid var(--et-global-color-primary);
}
```

---

## 🎭 Hero Sections Library

### 10+ Hero Variations

**1. Full-Height with Centered Text**
```
Use: Landing pages, service pages
Height: 100vh
Content: Centered headline + CTA
Background: Image or gradient
```

**2. Partial Height (60-70vh)**
```
Use: Home pages with content below fold
Height: 60-70vh
Content: Left or center aligned
Background: Image with overlay
```

**3. Split Hero (Text + Image)**
```
Use: Product pages, about pages
Layout: 50/50 columns (desktop), stacked (mobile)
Content: Text left, image right (or reverse)
Background: Solid color or subtle gradient
```

**4. Video Background Hero**
```
Use: High-impact landing pages
Video: MP4, autoplay, muted, loop
Overlay: Dark overlay for text contrast
Fallback: Static image for mobile
```

**5. Animated Gradient Background**
```
Use: Modern, tech-focused sites
Animation: Subtle gradient shift
Content: Minimal text, strong CTA
Performance: Use CSS animations, not video
```

### Full-Height vs Partial

**Full-Height (100vh):**
- Use for: Single-page sites, focus landing pages
- Pros: Maximum impact, clear CTA
- Cons: Content below fold, mobile can be too tall

**Partial Height (60-70vh):**
- Use for: Multi-section pages, content-heavy sites
- Pros: Shows content below, better mobile experience
- Cons: Less dramatic impact

### Image Backgrounds vs Video

**Image Backgrounds:**
- Use for: Most sites, faster loading
- Format: WebP with JPG fallback
- Size: < 500KB optimized
- Responsive: Different images per breakpoint

**Video Backgrounds:**
- Use for: High-impact, modern sites
- Format: MP4, H.264 codec
- Size: < 5MB, short loop (10-15s)
- Fallback: Poster image for mobile

### Text Positioning

**Centered:**
```css
.hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}
```

**Left-Aligned:**
```css
.hero-content {
    text-align: left;
    max-width: 600px;
    padding-left: 5%;
}
```

**Right-Aligned:**
```css
.hero-content {
    text-align: right;
    max-width: 600px;
    padding-right: 5%;
    margin-left: auto;
}
```

### CTA Placement

**Best practices:**
- Below headline and subheadline
- 2 CTAs max (primary + secondary)
- Primary CTA: Solid button, brand color
- Secondary CTA: Outline button or text link
- Spacing: 24px gap between buttons

**Example:**
```html
<h1>Headline</h1>
<p>Subheadline text</p>
<div class="cta-group">
    <button class="btn-primary">Get Started</button>
    <button class="btn-secondary">Learn More</button>
</div>
```

### Mobile Considerations

**Common issues:**
- Text too large on mobile
- Hero too tall (> 100vh)
- Buttons too close together
- Background image not optimized

**Fixes:**
```css
@media (max-width: 767px) {
    .hero-section {
        min-height: 70vh; /* Not 100vh */
        padding: 48px 24px;
    }

    .hero-h1 {
        font-size: 36px; /* Smaller than desktop 60px */
        line-height: 1.2;
    }

    .cta-group {
        flex-direction: column;
        gap: 16px; /* Vertical spacing */
    }

    .cta-group button {
        width: 100%; /* Full width on mobile */
    }
}
```

---

## 🔘 Button Components

### Button Hierarchy

**Primary Button:**
- Most important action
- Solid background, brand color
- High contrast text
- Use once per section

**Secondary Button:**
- Alternative action
- Outline style or subtle background
- Less visual weight than primary
- Can use multiple times

**Tertiary Button:**
- Least important action
- Text link style
- Minimal visual weight
- Use for "Learn more", "Cancel"

### Button Styling Standards

```css
/* Primary Button */
.btn-primary {
    background: var(--et-global-color-primary);
    color: #ffffff;
    padding: 14px 32px;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-primary:hover {
    background: var(--et-global-color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

/* Secondary Button */
.btn-secondary {
    background: transparent;
    color: var(--et-global-color-primary);
    padding: 14px 32px;
    border: 2px solid var(--et-global-color-primary);
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.btn-secondary:hover {
    background: var(--et-global-color-primary);
    color: #ffffff;
}

/* Tertiary Button */
.btn-tertiary {
    background: transparent;
    color: var(--et-global-color-text-secondary);
    padding: 14px 24px;
    font-weight: 500;
    text-decoration: underline;
    transition: color 0.2s ease;
}

.btn-tertiary:hover {
    color: var(--et-global-color-primary);
}
```

### Button States

**Required states:**
1. Default
2. Hover
3. Focus (keyboard navigation)
4. Active (click/press)
5. Disabled

**Example focus state:**
```css
.btn:focus {
    outline: 2px solid var(--et-global-color-primary);
    outline-offset: 2px;
}
```

### Button Sizing

**Size variants:**
```css
/* Small */
.btn-sm {
    padding: 8px 20px;
    font-size: 14px;
}

/* Medium (default) */
.btn-md {
    padding: 14px 32px;
    font-size: 16px;
}

/* Large */
.btn-lg {
    padding: 18px 48px;
    font-size: 18px;
}
```

### Touch Target Requirements

**Minimum size:**
- 44x44px for mobile (WCAG guideline)
- Use padding to increase touch area if needed

```css
@media (max-width: 767px) {
    .btn {
        min-height: 44px;
        min-width: 44px;
        padding: 12px 24px;
    }
}
```

---

## 📋 Form Patterns

### Form Layout Best Practices

**Single-column layout:**
- Best for mobile
- Easier to scan and complete
- Use for most forms

**Multi-column layout:**
- Desktop only
- Group related fields (First Name | Last Name)
- Stack on mobile

### Input Field Styling

```css
.form-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #d0d0d0;
    border-radius: 4px;
    font-size: 16px; /* Prevents zoom on iOS */
    transition: border-color 0.2s ease;
}

.form-input:focus {
    border-color: var(--et-global-color-primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(46, 162, 204, 0.1);
}

.form-input::placeholder {
    color: #999999;
}
```

### Label Requirements

**Always include labels:**
- Accessibility requirement
- Can be visually hidden but must exist
- Position above or beside input

```html
<!-- Good -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email">

<!-- Bad -->
<input type="email" placeholder="Email Address">
<!-- Missing label - accessibility fail -->
```

### Error States

```css
.form-input.error {
    border-color: #dc3545;
}

.error-message {
    color: #dc3545;
    font-size: 14px;
    margin-top: 4px;
    display: none;
}

.form-input.error + .error-message {
    display: block;
}
```

### Submit Button Placement

**Best practices:**
- Left-aligned with form fields
- Full width on mobile
- Clear action label ("Submit", "Send Message", "Get Started")
- Loading state for async submissions

---

## 🃏 Card Designs

### Card Component Structure

**Basic card:**
```html
<div class="card">
    <img src="image.jpg" alt="Description">
    <div class="card-content">
        <h3>Card Title</h3>
        <p>Card description text</p>
        <a href="#" class="btn-secondary">Learn More</a>
    </div>
</div>
```

### Card Styling

```css
.card {
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}

.card-content {
    padding: 24px;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
```

### Card Grid Layout

**Using Divi 5 Grid:**
```
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column

Gap: 24px (md spacing)
```

**Using CSS Grid:**
```css
.card-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

@media (max-width: 980px) {
    .card-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 767px) {
    .card-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 💬 Testimonial Sections

### Testimonial Layout Options

**1. Single Testimonial (Centered)**
```
Use: High-impact quote, landing pages
Layout: Centered text, large quote
Image: Customer photo, centered
```

**2. Slider/Carousel**
```
Use: Multiple testimonials, limited space
Layout: One testimonial at a time, navigation arrows
Features: Auto-rotate, pause on hover
```

**3. Grid of Testimonials**
```
Use: Social proof, showcase volume
Layout: 2-3 columns, card-based
Content: Shorter quotes, star ratings
```

### Testimonial Component Structure

```html
<div class="testimonial">
    <div class="testimonial-quote">
        <p>"This is the testimonial text from a happy customer."</p>
    </div>
    <div class="testimonial-author">
        <img src="customer.jpg" alt="Customer Name">
        <div class="author-info">
            <strong>Customer Name</strong>
            <span>Company, Role</span>
        </div>
    </div>
</div>
```

### Styling Best Practices

```css
.testimonial {
    background: #f9f9f9;
    padding: 32px;
    border-radius: 8px;
    border-left: 4px solid var(--et-global-color-primary);
}

.testimonial-quote {
    font-size: 18px;
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 24px;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
}

.testimonial-author img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
}
```

---

## 🦶 Footer Layouts

### Footer Patterns

**1. Simple Footer**
```
Use: Small sites, minimal content
Content: Copyright, 2-3 links
Layout: Single row, centered or split
```

**2. Multi-Column Footer**
```
Use: Larger sites, multiple link categories
Content: 3-4 columns (About, Services, Contact, Social)
Layout: Grid on desktop, stacked on mobile
```

**3. Mega Footer**
```
Use: E-commerce, large sites
Content: 4+ columns, newsletter signup, badges
Layout: Complex grid, multiple sections
```

### Footer Structure Example

```html
<footer class="site-footer">
    <div class="footer-main">
        <div class="footer-column">
            <h4>Company</h4>
            <nav>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </nav>
        </div>
        <div class="footer-column">
            <h4>Resources</h4>
            <nav>
                <a href="#">Blog</a>
                <a href="#">FAQs</a>
                <a href="#">Support</a>
            </nav>
        </div>
        <div class="footer-column">
            <h4>Contact</h4>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
    </div>
</footer>
```

---

## 🏢 MSP/Tech Template Patterns

### Patterns Specific to MSP/Tech Sites

**Service Page Layout:**
- Hero with service overview
- Feature grid (icon + title + description)
- Process steps (numbered timeline)
- CTA section (demo, consultation)
- FAQ accordion

**Technology Showcase:**
- Logo grid of technologies/partners
- Grayscale on default, color on hover
- Responsive grid (6 cols → 3 cols → 2 cols)

**Trust Indicators:**
- Certifications and badges
- Security compliance logos
- Industry awards
- Client testimonials with logos

### B2B Design Considerations

**Professional, not flashy:**
- Clean, minimal design
- Ample whitespace
- Professional typography
- Conservative color palette

**Focus on credibility:**
- Case studies prominent
- Client logos visible
- Certifications displayed
- Clear contact information

**Clear value proposition:**
- Above-the-fold messaging
- Benefit-focused copy
- Strong CTAs
- Easy navigation to key services

---

## 📚 Related Files

**Design System:**
- `01_system_setup.md` - Color, typography, spacing standards
- `../design-system/global-variable-strategy.md` - Global colors

**Mechanics:**
- `02_divi5_mechanics.md` - How to implement and audit
- `../features/stacked-presets-advanced.md` - Reusable component presets

**Workflows:**
- `../workflows/site-audit-process.md` - Full audit workflow
- `../workflows/client-handoff-checklist.md` - Pre-launch checklist

**Patterns:**
- `../design-patterns/hero-sections-library.md` - More hero variations
- `../design-patterns/navigation-patterns.md` - Advanced navigation

---

**Last Updated:** December 2024
**Status:** Active
**Divi Version:** 5.x
