---
last_verified_version: 5.0.0
status: active
last_updated: December 2024
module: Accessibility Audit
priority: critical
---

# Module 03: Accessibility Audit
**Focus:** WCAG 2.2 Compliance, Keyboard Navigation, Screen Readers

---

## ♿ Critical Accessibility Checks

**Every audit should verify:**

### 1. Color Contrast
- [ ] All text meets WCAG AA contrast (4.5:1 normal, 3:1 large)
- [ ] Button text readable
- [ ] Links distinguishable from body text
- [ ] Focus indicators have sufficient contrast (3:1)
- [ ] Test: DevTools contrast checker

**Standards:**
```
WCAG AA (Minimum):
- Normal text (< 18px): 4.5:1 ratio
- Large text (≥ 18px or bold ≥ 14px): 3:1 ratio

WCAG AAA (Enhanced):
- Normal text: 7:1 ratio
- Large text: 4.5:1 ratio
```

**How to test:**
```
Chrome DevTools:
1. Inspect element
2. Click color swatch in Styles panel
3. Look for contrast ratio (shows ✓ or ✗)
```

---

### 2. Focus Indicators Visible
- [ ] Tab through page
- [ ] All interactive elements show focus
- [ ] Focus indicator sufficient contrast (3:1)
- [ ] Focus order is logical

**Test process:**
```
1. Press Tab key repeatedly
2. Verify focus moves through all interactive elements
3. Verify focus indicator is visible
4. Press Enter on links/buttons (should activate)
5. Press Escape on modals/popups (should close)
```

**Common issues:**
```
- No visible focus indicator
- Focus trapped in a section
- Focus order illogical
- Some elements not keyboard accessible
```

**Fix:**
```css
/* Add visible focus indicators */
a:focus,
button:focus,
input:focus {
    outline: 2px solid #2c5530;
    outline-offset: 2px;
}

/* Never remove outlines without replacement */
/* ❌ Bad: */
*:focus { outline: none; }

/* ✓ Good: */
*:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}
```

---

### 3. Images Have Alt Text
- [ ] All `<img>` tags have alt attribute
- [ ] Decorative images: `alt=""`
- [ ] Informative images: descriptive alt text
- [ ] No "image of" or "picture of" (redundant)

**Guidelines:**
```
Decorative image (no information):
<img src="divider.svg" alt="">

Informative image:
<img src="team.jpg" alt="Simplicity Technologies team members collaborating">

Functional image (link/button):
<img src="search-icon.svg" alt="Search">

NOT this:
<img src="team.jpg" alt="Image of team"> ← Redundant "Image of"
```

**Divi Settings:**
```
Image Module:
→ Image Settings
→ Image Alt Text: [Descriptive text]
```

---

### 4. Forms Have Labels
- [ ] All inputs have associated labels
- [ ] Placeholder is not a replacement for label
- [ ] Error messages are clear and associated
- [ ] Required fields indicated

**Guidelines:**
```html
✓ Good:
<label for="email">Email Address *</label>
<input id="email" type="email" required aria-required="true">

✗ Bad (placeholder as label):
<input type="email" placeholder="Email Address">
```

**Divi Contact Form:**
```
Each field should have:
- Field Label (visible)
- Required indicator (*)
- Proper input type (email, tel, etc.)
```

---

### 5. Heading Hierarchy Logical
- [ ] H1 → H2 → H3 (no skipped levels)
- [ ] Only one H1 per page
- [ ] Headings describe content structure

**Guidelines:**
```
✓ Correct:
H1: Page Title
  H2: Section 1
    H3: Subsection 1.1
    H3: Subsection 1.2
  H2: Section 2
    H3: Subsection 2.1

✗ Incorrect:
H1: Page Title
  H3: Section 1 ← Skipped H2!
    H4: Subsection
```

**Impact:**
```
Screen readers use heading structure for navigation.
Skipped levels confuse users relying on headings to understand page structure.
```

**How to fix:**
```
Divi Text Module:
→ Design
→ Heading Text
→ Heading Level: H2 (choose correct level)
```

---

### 6. Links Distinguishable
- [ ] Links visually different from body text
- [ ] Not relying on color alone
- [ ] Underlined or bold/different weight

**Guidelines:**
```
✓ Good:
Links are underlined and colored

✓ Good:
Links are bold and colored

✗ Bad:
Links only differ by color (fails for colorblind users)
```

**Fix:**
```css
/* Ensure links are distinguishable */
a {
    color: #2c5530;
    text-decoration: underline;
}

/* Or use bold: */
a {
    color: #2c5530;
    font-weight: 600;
}

/* Hover state should also be clear */
a:hover {
    text-decoration: none; /* or thicker underline */
    background-color: rgba(44, 85, 48, 0.1);
}
```

---

### 7. Touch Targets Adequate
- [ ] Minimum 44x44px on mobile
- [ ] Sufficient spacing between targets
- [ ] Easy to tap without zoom

**Guidelines:**
```
Apple & Google recommendation: 44x44px minimum

Buttons should be:
- Desktop: 40px height minimum
- Mobile: 44px height minimum
```

**Fix:**
```
Divi Button Module:
→ Design
→ Button
→ Use Custom Padding: ON
→ Padding: 12px top, 24px right, 12px bottom, 24px left

This creates ~44px height with text
```

---

## 🎯 Semantic Structure

### ARIA Roles & Labels

- [ ] Do headers (H1-H6) follow a logical descending order?
- [ ] Are interactive elements (Toggles, Tabs) using **ARIA Roles**?
- [ ] Are landmark roles used correctly?

**Common ARIA patterns:**
```html
<!-- Navigation -->
<nav role="navigation" aria-label="Main navigation">
  <ul>...</ul>
</nav>

<!-- Main content -->
<main role="main">
  ...content...
</main>

<!-- Search -->
<div role="search">
  <input type="search" aria-label="Search site">
</div>

<!-- Buttons with icons only -->
<button aria-label="Close dialog">
  <span aria-hidden="true">×</span>
</button>

<!-- Toggles/Accordions -->
<button aria-expanded="false" aria-controls="panel-1">
  Section Title
</button>
<div id="panel-1" aria-hidden="true">
  Panel content
</div>
```

---

## 👁️ Screen Reader Support

### ARIA Labels for Icon-Only Buttons

- [ ] Is the `aria-label` descriptive for all Icon-only buttons?
- [ ] Are decorative icons/images set to `aria-hidden="true"`?
- [ ] Does the **Tab Index** allow full keyboard navigation of the section?

**Examples:**
```html
<!-- Icon-only button -->
<button aria-label="Menu">
  <span class="icon-menu" aria-hidden="true"></span>
</button>

<!-- Social media links -->
<a href="..." aria-label="Follow us on Twitter">
  <i class="fab fa-twitter" aria-hidden="true"></i>
</a>

<!-- Decorative icon next to text -->
<button>
  <i class="icon-save" aria-hidden="true"></i>
  Save Document
</button>
<!-- No aria-label needed - button text is sufficient -->
```

**Divi Settings:**
```
For icon-only buttons:
Button Module → Advanced → Attributes
Add: aria-label="Descriptive text"

For decorative images:
Image Module → Advanced → Attributes
Add: aria-hidden="true"
```

---

### Tab Index

**Rules:**
```
tabindex="0"   - Element in natural tab order (good)
tabindex="-1"  - Remove from tab order (use sparingly)
tabindex="1+"  - Custom tab order (avoid - breaks expected flow)
```

**Use cases:**
```html
<!-- Make a div focusable (not normally focusable) -->
<div tabindex="0" role="button">
  Click me
</div>

<!-- Remove from tab order (decorative or duplicate) -->
<a href="#" tabindex="-1">
  Duplicate link
</a>
```

---

## 🧪 How to Test Accessibility

### Keyboard Navigation Test

**Process:**
```
1. Press Tab key repeatedly
2. Verify focus moves through all interactive elements:
   - Links
   - Buttons
   - Form fields
   - Custom controls
3. Verify focus indicator is visible
4. Press Enter on links/buttons (should activate)
5. Press Escape on modals/popups (should close)
6. Press Space on buttons/checkboxes (should toggle)
7. Arrow keys on radio buttons/selects (should navigate)
```

**Common failures:**
```
❌ No visible focus indicator
❌ Focus trapped in a modal
❌ Focus order doesn't match visual order
❌ Some interactive elements skipped
❌ Keyboard shortcuts conflict with browser/screen reader
```

---

### Contrast Checking

**Using Chrome DevTools:**
```
1. Inspect element (Right-click → Inspect)
2. Click color swatch in Styles panel
3. Look for contrast ratio indicator
4. Shows ✓ or ✗ for WCAG AA/AAA
```

**Using WAVE extension:**
```
1. Install WAVE browser extension
2. Click WAVE icon on page
3. View contrast errors highlighted in red
4. Review detailed error list
```

**Manual tool:**
```
WebAIM Contrast Checker:
https://webaim.org/resources/contrastchecker/

Enter foreground and background colors
See if it passes WCAG AA/AAA
```

---

### Screen Reader Testing

**Basic test (without screen reader):**
```
1. Disable CSS in browser DevTools
2. View page content order
3. Verify logical reading order
4. Check that all content is accessible
5. Ensure images have alt text
```

**With screen reader (comprehensive):**
```
Mac: VoiceOver (Cmd+F5)
- Navigate with VO+arrow keys
- Interact with VO+Space
- Read headings: VO+Cmd+H

Windows: NVDA (free download)
- Navigate with arrow keys
- Interact with Enter
- Read headings: H key

Test:
- Navigate page
- Verify all content announced
- Check heading structure makes sense
- Ensure forms are labeled
- Test interactive elements
```

---

## 📋 Accessibility Report Format

**Structure findings clearly:**

```
Accessibility Audit Results:

🔴 Critical Issues (WCAG Failures):

1. Insufficient Color Contrast
   Location: Hero section heading
   Issue: White text (#ffffff) on pink background (#e23a95)
   Current ratio: 2.8:1
   Required: 4.5:1 (WCAG AA)

   Impact: Users with low vision or color blindness cannot read text

   Fix: Darken background to #c21875
   Section → Design → Background → Color: #c21875
   New ratio: 4.6:1 ✓

   WCAG Criteria: 1.4.3 Contrast (Minimum) - Level AA

2. Missing Alt Text
   Location: About section, team photo
   Issue: <img src="team.jpg" alt="">

   Impact: Screen reader users don't know what image shows

   Fix: Add descriptive alt text
   Image Module → Image Settings → Image Alt Text
   Suggested: "Simplicity Technologies team members at office"

   WCAG Criteria: 1.1.1 Non-text Content - Level A

3. No Focus Indicator
   Location: Primary navigation links
   Issue: outline: none applied, no alternative focus style

   Impact: Keyboard users can't see where they are on page

   Fix: Add visible focus indicator
   Code:
   .main-menu a:focus {
       outline: 2px solid #2c5530;
       outline-offset: 2px;
   }

   WCAG Criteria: 2.4.7 Focus Visible - Level AA

🟡 Important Issues (Best Practices):

4. Skipped Heading Level
   Location: Services section
   Issue: H1 → H3 (no H2)

   Impact: Screen reader users lose document structure

   Fix: Change H3 to H2
   Text Module → Design → Heading Level → H2

   WCAG Criteria: Not a failure, but best practice

5. Link Not Distinguishable
   Location: Body text links
   Issue: Links same color as text, no underline

   Impact: Users may not recognize links

   Fix: Add underline or distinct color
   Code:
   .entry-content a {
       text-decoration: underline;
       color: #2c5530;
   }

🟢 Enhancements (AAA Level):

6. Contrast Could Be Higher
   Location: Footer links
   Issue: Gray text (#777777) on darker gray (#666666)
   Current ratio: 1.5:1
   Passes AA for large text but not AAA

   Suggestion: Lighten text to #cccccc for 5.5:1 ratio

   WCAG Criteria: 1.4.6 Contrast (Enhanced) - Level AAA

Summary:
- 3 critical WCAG AA failures (must fix)
- 2 important best practice issues (should fix)
- 1 enhancement opportunity (nice to have)

Next steps:
1. Fix critical contrast issues immediately
2. Add alt text to all images
3. Implement focus indicators
4. Review and fix heading hierarchy
5. Make links distinguishable

Testing tools used:
- Chrome DevTools Contrast Checker
- Keyboard navigation testing
- WAVE browser extension
```

---

## ✅ Accessibility Audit Checklist

**Before submitting findings:**

### Color & Contrast
□ All text meets WCAG AA contrast (4.5:1 normal, 3:1 large)
□ Button text readable
□ Links distinguishable (not color alone)
□ Focus indicators visible and sufficient contrast (3:1)

### Keyboard Navigation
□ All interactive elements keyboard accessible
□ Focus indicators visible
□ Focus order logical
□ No keyboard traps
□ Skip links present (if needed)

### Images & Media
□ All images have alt text
□ Decorative images have alt=""
□ Complex images have long descriptions
□ Videos have captions (if applicable)

### Structure & Semantics
□ Heading hierarchy logical (no skipped levels)
□ Only one H1 per page
□ Landmarks used correctly (nav, main, footer)
□ ARIA roles used appropriately

### Forms
□ All inputs have labels
□ Required fields indicated
□ Error messages clear and associated
□ Proper input types used

### Interactive Elements
□ Buttons/links have descriptive text/labels
□ Touch targets ≥ 44px on mobile
□ Icon-only elements have aria-labels
□ Toggles/tabs use proper ARIA

### Testing
□ Keyboard navigation tested
□ Contrast checked (DevTools or WAVE)
□ Screen reader tested (at least basic)
□ No reliance on color alone

---

**Related Files:**
- `accessibility/wcag-compliance-checklist.md`
- `accessibility/keyboard-navigation.md`
- `accessibility/screen-reader-optimization.md`
- `accessibility/accessible-color-combinations.md`
- `design-system/color-contrast-wcag.md`

---

**Last Updated:** December 2024
**Divi Version:** 5.x
**WCAG Version:** 2.2 Level AA
