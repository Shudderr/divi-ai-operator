# Divi 5 Mechanics & How-To Guide

**Purpose:** Step-by-step processes for auditing, building, and optimizing Divi 5 sites
**Category:** Workflows & Features
**Priority:** Critical
**Last Updated:** March 2026

---

## 🔍 How to Conduct a Divi 5 Site Audit

### Step 1: Understand Context
- Read site-map.md to know what standards to check against
- Ask user what they want reviewed (full site, specific page, specific aspect)
- Determine priority (quick review vs comprehensive audit)

### Step 2: Gather Information
- View current page HTML/CSS
- Check Divi settings if accessible
- Review responsive states
- Test accessibility

### Step 3: Compare Against Standards

**For each element, check:**
- `audits/01_UX_VISUAL.md` (contrast ratios)
- `build/01_system_setup.md` (font sizes in scale?)
- `build/01_system_setup.md` (consistent spacing?)
- `features/design-variables.md` (should be global?)
- `features/responsive-breakpoints.md` (responsive?)

### Step 4: Document Findings

**Categorize issues:**
- 🔴 **Critical** (accessibility failures, broken functionality)
- 🟡 **Important** (inconsistent design, missing globals)
- 🟢 **Enhancement** (nice-to-haves, optimizations)

### Step 5: Provide Solutions

**For each issue:**
1. Explain what's wrong
2. Explain why it matters
3. Provide specific fix (code if applicable)
4. Reference KB file with more info

---

## 🎨 Identifying Global Variable Opportunities

### Colors

**Ask:** "Is this color used more than once on the site?"
- YES → Should be global
- Appears 3+ times → Definitely global
- Brand colors → Always global
- One-off accent → Can be local

### Fonts

**Ask:** "Is this a recurring style?"
- All H1s same? → Global preset
- Body text standard? → Global preset
- One-off styling? → Local

### How to Suggest Design Variables

```
"I notice you're using #2c5530 in 3 places. Consider making this a global color:

1. Divi → Theme Customizer → Global Styles → Colors
2. Name it 'Brand Primary Green'
3. Replace local instances with the global

Benefits:
- Change once, updates everywhere
- Ensures consistency across site
- Easier client maintenance"
```

---

## ✅ Color Contrast Verification Process

### Process

1. **Identify all text/background combinations**
2. **Calculate contrast ratios** (or use DevTools)
3. **Check against WCAG standards:**
   - Normal text (< 18px): 4.5:1 minimum (AA)
   - Large text (≥ 18px): 3:1 minimum (AA)
   - AAA standards: 7:1 and 4.5:1 respectively

### Common Failures
- Light text on light background
- Dark text on dark background
- Low opacity overlays on images
- Colored text on colored backgrounds

### How to Fix

**Provide specific alternatives:**

```
"White text on #e23a95 (pink) fails WCAG AA (ratio: 2.8:1)

Options:
1. Darken background to #c21875 (ratio: 4.6:1) ✓
2. Change text to black #000000 (ratio: 5.2:1) ✓
3. Add dark overlay behind text

Recommended: Option 1 (maintains white text, keeps design intent)

Where to apply:
Section → Design → Background → Background Color → #c21875"
```

---

## 📝 Typography Hierarchy Review

### Questions to Ask

1. Is there a clear visual hierarchy? (H1 > H2 > H3 > body)
2. Are sizes following a scale or random?
3. Are sizes responsive (smaller on mobile)?
4. Is line-height appropriate? (1.5-1.7 for body, 1.2-1.4 for headings)

### Red Flags

- H2 larger than H1
- Random font sizes (23px, 19px, 34px with no pattern)
- Same size on all devices
- Line-height too tight (< 1.3 for body text)

### Suggest Scale

```
"Your heading sizes are inconsistent. Consider using a type scale:

- Base: 16px (mobile) / 18px (desktop)
- Scale: 1.25 (Major Third)
- H1: 49px, H2: 39px, H3: 31px, etc.

Benefits:
- Mathematical consistency
- Harmonious visual rhythm
- Easy to calculate new sizes

See: build/01_system_setup.md"
```

---

## 📐 Spacing System Review

### What to Look For

- Inconsistent margins (20px here, 35px there, 18px somewhere else)
- No vertical rhythm
- Cramped sections
- Uneven padding

### Suggest System

```
"I notice inconsistent spacing. Consider an 8px system:

- xs (8px), sm (16px), md (24px), lg (32px), xl (48px)
- Section padding: xl on desktop, lg on mobile
- Card padding: md consistently
- Button padding: sm

Benefits:
- Consistent visual rhythm
- Easier to maintain
- Scales predictably

See: build/01_system_setup.md"
```

---

## 📱 Responsive Design Review

### Check All 7 Breakpoints

1. **Desktop** (> 1024px)
2. **Tablet Wide** (< 1024px)
3. **Tablet** (< 980px)
4. **Phone Wide** (< 860px)
5. **Phone** (< 767px)
6. **Custom 1** (user-defined)
7. **Custom 2** (user-defined)

### Common Issues

- Text too large on mobile
- Images not scaling
- Horizontal scroll
- Overlapping elements
- Hidden content
- Buttons too small (< 44px touch target)

### How to Report

```
"On mobile (< 767px):

Issues found:
- H1 is 49px (too large) → Reduce to 31px
- Logo width 250px (overflows) → Set max-width: 150px
- Button height 32px (too small) → Increase to 44px minimum

Where to apply:
Module → Design → Sizing → Responsive toggle → Phone (< 767px)"
```

---

## ♿ Accessibility Quick Checks

### Critical Checks

1. Color contrast (all text)
2. Focus indicators visible
3. Images have alt text
4. Forms have labels
5. Heading hierarchy logical (no skipped levels)
6. Links distinguishable
7. Touch targets ≥ 44px

### How to Test

- Tab through page (keyboard only)
- Use browser DevTools contrast checker
- View with images disabled

### Report Format

```
"Accessibility issues found:

🔴 Critical:
- Login button has no focus indicator
- Image missing alt text (decorative? use alt='')

🟡 Important:
- Link color (#66fcf1) vs background (#ffffff) ratio 2.9:1 (fails)

Fixes:
1. Add focus state: Button → Advanced → Custom CSS:
   .button:focus { outline: 2px solid #000; }
2. Add alt text: Image → Settings → Alternative Text
3. Darken link color to #0092cc (4.5:1 ratio)

See: audits/03_ACCESSIBILITY.md"
```

---

## 🎯 Stacked Presets - Advanced Usage

### What Are Stacked Presets?

Divi 5 allows you to apply multiple presets to a single module. Each preset adds or overrides styles in the order they're applied.

### When to Use vs Single Presets

**Use single preset:**
- Simple, one-off styling
- Completely unique modules

**Use stacked presets:**
- Consistent base styling + variations
- Reusable component patterns
- Complex multi-state modules

### How to Structure Preset Stacks

**Base → Specifics**
1. Start with foundational styles (layout, structure)
2. Add color/brand styling
3. Add interactive states (hover, animations)

### Order Matters

```
Correct order:
1. "btn-base" (padding, radius, display)
2. "btn-primary-color" (background, text color)
3. "btn-hover-lift" (transform on hover)

Wrong order:
1. "btn-hover-lift" (applied first, may be overridden)
2. "btn-primary-color" (could override hover states)
3. "btn-base" (overrides everything - wrong!)
```

### Example Stacks

**Button Stack:**
```
1. "btn-base" (padding, radius, display)
2. "btn-primary-color" (background, text color)
3. "btn-hover-lift" (transform on hover)

Result: Consistent button styling with reusable hover effect
```

**Card Stack:**
```
1. "card-container" (background, padding, shadow)
2. "card-border-accent" (left border)
3. "card-fade-in" (entrance animation)

Result: Branded card with animation, reusable across site
```

### Naming Conventions

- **Base styles:** `component-base` (e.g., `btn-base`, `card-base`)
- **Color variants:** `component-colorname` (e.g., `btn-primary`, `btn-secondary`)
- **Interactive states:** `component-effect` (e.g., `btn-hover-lift`, `card-fade-in`)

### Troubleshooting Conflicts

**If presets conflict:**
1. Check order (base → specifics)
2. Review specificity (later presets override earlier)
3. Use CSS Custom Properties for flexibility
4. Consider breaking apart complex presets

---

## 💬 Response Style Guide for Audits

### When Auditing, You Should:

**✅ DO:**
- Be specific: "Change line 45" not "change the header"
- Provide code: Give exact CSS/settings to change
- Explain why: "This fails WCAG because..."
- Prioritize: Critical → Important → Nice-to-have
- Reference KB: "See features/design-variables.md for more"
- Be encouraging: "Good use of flexbox here"

**❌ DON'T:**
- Be vague: "Colors could be better"
- Just point out problems without solutions
- Overwhelm with 50 issues at once
- Use jargon without explaining
- Criticize without being constructive

### Example Good Audit Response:

```
I've reviewed your hero section. Here's what I found:

🔴 Critical Issues:

1. Color Contrast Failure
   Problem: White text (#ffffff) on pink background (#e23a95)
   Ratio: 2.8:1 (needs 4.5:1 for WCAG AA)

   Fix: Darken background to #c21875
   Code: Section → Design → Background → Color: #c21875

   Why: Users with visual impairments can't read the text
   Reference: audits/01_UX_VISUAL.md

🟡 Important:

2. Missing Global Variable
   Problem: You're using #2c5530 in 4 places on this page

   Fix: Create global color "Brand Primary Green"
   Steps:
   1. Divi → Customizer → Global Styles → Colors → Add
   2. Name: "Brand Primary Green", Color: #2c5530
   3. Update all 4 instances to use global

   Why: Easier to maintain, consistent across site
   Reference: features/design-variables.md

🟢 Enhancements:

3. Typography Scale
   Observation: H1 (52px), H2 (38px), H3 (29px) - close to a scale

   Suggestion: Use exact Major Third scale (1.25x)
   - H1: 49px, H2: 39px, H3: 31px

   Why: More mathematical consistency, easier to scale
   Reference: build/01_system_setup.md

Overall: Strong layout, good use of spacing. Main focus should be
fixing the contrast issue (#1) and considering global variables (#2).
```

---

## 🔗 File Cross-Referencing Strategy

### How to Reference Files in Documentation

**In "Related Files" section:**
```markdown
## Related Files

**Prerequisites** (read these first):
- `audits/01_UX_VISUAL.md` - Understanding contrast
- `features/global-variables.md` - Global color system

**Related Topics:**
- `resources/template-library.md` - Applying these principles
- `audits/00_MASTER_INDEX.md` - Full audit routing

**Troubleshooting:**
- `troubleshooting/common-issues.md` - If changes don't work
```

**Within content, reference like this:**
```markdown
For more on when to use global vs local colors, see
[Design Variables](../features/design-variables.md).
```

---

## 🚀 Build Sequence for Knowledge Base

### Recommended Build Order:

**Session 1: Critical Foundation**
1. audits/00_MASTER_INDEX.md
2. features/design-variables.md
3. audits/01_UX_VISUAL.md
4. build/01_system_setup.md
5. build/01_system_setup.md

**Session 2: Workflows & Patterns**
6. audits/00_MASTER_INDEX.md
7. features/preset-system-complete.md
8. resources/template-library.md
9. resources/template-library.md

**Session 3: Performance & Accessibility**
10. performance/lcp-optimization.md
11. audits/03_ACCESSIBILITY.md
12. features/responsive-breakpoints.md

**Session 4: Troubleshooting & Client Work**
13. troubleshooting/common-issues.md
14. resources/template-library.md
15. workflows/deployment-checklist.md

---

## 📊 Progress Tracking

### After Creating Each File:

1. **Update site-map.md** - add file to appropriate section
2. **Test the file** - can the Simplicity Tech Divi AI Operator read and use it?
3. **Cross-reference** - add links from related files
4. **Verify metadata** - all fields complete
5. **Check against template** - follows structure

### How to Track What's Built:

Keep a checklist in `site-map.md` or create `BUILD_PROGRESS.md`:

```markdown
## Build Progress

### Priority 1 (Critical) - 8 files
- [x] audits/00_MASTER_INDEX.md
- [x] features/design-variables.md
- [x] audits/01_UX_VISUAL.md
- [ ] build/01_system_setup.md
- [ ] build/01_system_setup.md
- [ ] audits/00_MASTER_INDEX.md
- [ ] features/preset-system-complete.md
- [ ] resources/template-library.md

### Priority 2 (High Value) - 7 files
- [ ] features/responsive-breakpoints.md
- [ ] resources/template-library.md
...
```

---

## 🎯 Special Instructions for the Simplicity Tech Divi AI Operator

### When Building Knowledge Base Files:

1. **Read KB_ARTICLE_TEMPLATE.md first** - follow that structure
2. **Include ALL required sections** from template
3. **Add metadata block** at top of every file
4. **Use real examples** - not generic placeholder text
5. **Code must be copy-paste ready** - no pseudo-code
6. **Think like Zac** - MSP/tech client focus
7. **Reference other KB files** liberally
8. **Update site-map.md** after creating files

### Quality Checklist for Each File:

```
□ Metadata block present and complete
□ Purpose statement clear
□ Practical examples included
□ Code snippets are real and tested
□ Decision trees where relevant
□ Common mistakes section
□ Related files referenced
□ Responsive considerations
□ Accessibility notes
□ Status set correctly
□ Added to site-map.md
```

---

## 💡 Build Philosophy Tips

### Every file should:

1. Follow KB_ARTICLE_TEMPLATE.md structure
2. Include metadata block at top
3. Have practical, actionable content
4. Include code examples
5. Reference related files
6. Be immediately useful
7. Focus on Zac's MSP/tech client work

### Voice & Style:

- Direct and practical
- Real examples from actual work
- No fluff - just what works
- Include decision trees ("when to use X vs Y")
- Think like a consultant reviewing a site

### Include:

- Specific Divi locations (Module → Design → Tab)
- Keyboard shortcuts where relevant
- Common client objections and how to respond
- Before/after examples
- "Quick win" callouts

### Avoid:

- Generic advice that applies to all websites
- Theoretical concepts without practical application
- Assumptions about what Zac knows
- Incomplete code snippets

---

## 🔍 Using the Inspector Panel

**Purpose:** Centralized view of all settings for selected element and its children

### What the Inspector Shows:

**When you select a Section, Row, or Column:**
- All modified settings for that element
- All settings for child elements
- Applied presets (Element + Option Group)
- Design Variables in use
- Responsive overrides per breakpoint

**Benefits:**
- See everything in one place
- No hunting through tabs
- Quick edits without navigating settings
- Identify what's been customized vs default

### Accessing the Inspector:

```
1. Visual Builder (editing any page)
2. Select Section, Row, or Column
3. Click Inspector icon (left sidebar)
   OR look for Inspector panel auto-opening
4. Panel shows all active settings
```

### Inspector Use Cases:

#### Use Case 1: Find What's Modified

**Scenario:** Section looks different than expected, need to know why

**Workflow:**
```
1. Select the Section
2. Open Inspector
3. Inspector shows ONLY modified settings
4. Scroll through list:
   - Background: Custom gradient
   - Padding: 80px top/bottom
   - Border: 1px bottom
5. Identify the culprit
6. Click setting to edit directly
```

**Without Inspector:** Click through Content, Design, Advanced tabs hoping to find it.

#### Use Case 2: Check Applied Presets

**Scenario:** Need to know which preset a module is using

**Workflow:**
```
1. Select module (or parent row/section)
2. Open Inspector
3. Look for "Presets" section
4. Shows:
   - Element Preset: "Button - Primary"
   - OGPs nested: "Typography - Button", "Spacing - Standard"
5. Click preset name to edit in Preset Manager
```

#### Use Case 3: View Design Variables Usage

**Scenario:** Want to see which variables are being used

**Workflow:**
```
1. Select element
2. Open Inspector
3. Scroll through settings
4. Variables shown in purple/highlighted:
   - Background: var(--color-primary)
   - Padding: var(--space-lg)
   - Font: var(--font-heading)
5. Click variable to edit in Variable Manager
```

#### Use Case 4: Quick Multi-Element Editing

**Scenario:** Need to change spacing on section and all child elements

**Workflow:**
```
1. Select Section
2. Open Inspector
3. Inspector shows Section + all Rows + all Columns + all Modules
4. Find padding settings across all elements
5. Edit directly in Inspector
6. No need to select each element individually
```

#### Use Case 5: Converting Block to Flex

**Scenario:** Have a Block layout, want to convert to Flexbox

**Workflow:**
```
1. Select Row with Block layout
2. Open Inspector
3. Look for "Layout Style" setting
4. See current: Block
5. Click → Change to Flex
6. Inspector immediately shows new Flex options:
   - Layout Direction
   - Justify Content
   - Align Items
   - Gaps
7. Configure Flex settings in Inspector
8. Done!
```

**Why this is powerful:** See before/after settings side-by-side.

### Inspector Best Practices:

**1. Use for Debugging:**
```
Problem: "Why is this button not centering?"

Inspector shows:
- Parent Column: Align Items = Start (not Center!)
- Fix: Change to Center
```

**2. Use for Audit Trail:**
```
Question: "What's different about this section?"

Inspector shows:
- 12 modified settings
- 3 presets applied
- 5 design variables used

Full picture of customizations
```

**3. Use for Bulk Updates:**
```
Task: "Change all card padding in this section"

Inspector shows all cards:
- Card 1: Padding 24px
- Card 2: Padding 24px
- Card 3: Padding 32px (inconsistent!)

Fix all three in Inspector view
```

**4. Use Before Manual Overrides:**
```
Before adding custom CSS:
1. Check Inspector for existing settings
2. See if setting already exists in UI
3. Modify in Inspector instead of CSS

Result: Cleaner code, easier maintenance
```

---

## 🔍 Using Find & Replace

**Purpose:** Bulk updates across page or site for values, variables, and content

### What Find & Replace Can Update:

**Values:**
- Static colors → Design Variables
- Static spacing → Design Variables
- Font names
- Any numeric value

**Content:**
- Text strings
- URLs
- Company names

**Settings:**
- Module settings
- Preset applications
- Any field value

### Accessing Find & Replace:

```
1. Visual Builder (editing any page)
2. Select any module/row/section
3. Open settings panel
4. Look for Find & Replace icon/button
   OR use keyboard shortcut (check VB for current)
5. Find & Replace modal opens
```

### Find & Replace Use Cases:

#### Use Case 1: Adopt Design Variables Site-Wide

**Scenario:** Built site with static #065cfe blue, now want to use variable

**Workflow:**
```
1. Create Design Variable: --color-primary = #065cfe
2. Open Find & Replace
3. Find: #065cfe
4. Replace: var(--color-primary)
5. Scope: Entire Site (or Current Page)
6. Preview changes (shows affected elements)
7. Execute Replace

Result: All instances now use variable
Bonus: Change variable once, entire site updates
```

#### Use Case 2: Update Spacing to Variables

**Scenario:** Sections use 32px padding, want to use --space-lg variable

**Workflow:**
```
1. Create variable: --space-lg = clamp(32px, 5vw, 80px)
2. Find & Replace
3. Find: Padding = 32px
4. Replace: var(--space-lg)
5. Scope: All Sections
6. Execute

Result: Spacing now responsive via clamp()
```

#### Use Case 3: Bulk Content Update

**Scenario:** Company name changed from "ABC Corp" to "ABC Technologies"

**Workflow:**
```
1. Find & Replace
2. Find: "ABC Corp"
3. Replace: "ABC Technologies"
4. Scope: Entire Site
5. Preview (shows 47 instances found)
6. Execute

Done in seconds vs manual editing
```

#### Use Case 4: Font Family Change

**Scenario:** Changed from Roboto to Montserrat, need to update existing modules

**Workflow:**
```
1. Find & Replace
2. Find: Font Family = Roboto
3. Replace: Montserrat
4. Scope: All Text Modules
5. Execute

All headings/text update instantly
```

#### Use Case 5: URL Updates

**Scenario:** Migrated from staging to production, need to update URLs

**Workflow:**
```
1. Find & Replace
2. Find: "staging.yoursite.com"
3. Replace: "yoursite.com"
4. Scope: Entire Site
5. Execute

All links, images, references updated
```

### Find & Replace Strategies:

#### Strategy 1: Test on Single Page First

```
❌ RISKY:
Find & Replace across entire site without testing

✅ SAFE:
1. Test on one page first
2. Verify results
3. Then apply site-wide
```

#### Strategy 2: Use Preview Feature

```
Before executing:
1. Enter Find and Replace values
2. Click "Preview" or "Find"
3. Review list of affected elements
4. Check if results make sense
5. Only then click "Replace All"
```

#### Strategy 3: Backup Before Major Changes

```
Before bulk replacing:
1. Export page/site layout
2. Or save revision
3. Then execute Find & Replace
4. If something breaks, restore backup
```

#### Strategy 4: Replace in Stages

```
Instead of:
- Find all static colors, replace all at once

Do:
1. Replace primary color first
2. Check site
3. Replace accent color
4. Check site
5. Continue one at a time

Easier to identify issues
```

### Common Find & Replace Workflows:

#### Workflow: Migrate to Design System

**Goal:** Convert hard-coded values to variables

```
Step 1: Create all Design Variables
- Colors, spacing, typography

Step 2: Find & Replace Colors
- Find: #065cfe → Replace: var(--color-primary)
- Find: #3DD6C4 → Replace: var(--color-accent)
- etc.

Step 3: Find & Replace Spacing
- Find: 32px padding → Replace: var(--space-lg)
- Find: 24px gap → Replace: var(--space-md)
- etc.

Step 4: Find & Replace Fonts
- Find: Montserrat → Replace: var(--font-heading)
- Find: Inter → Replace: var(--font-body)

Step 5: Verify and Test
- Check all pages
- Test responsive
- Confirm variables working
```

#### Workflow: Rebrand Site

**Goal:** Update all brand-specific content and colors

```
Step 1: Update Design Variables
- Change color values in Variable Manager
- Change font families
- Update logos in Image Variables

Step 2: Find & Replace Content
- Find: "Old Company Name" → Replace: var(--company-name)
- Find: "old-tagline" → Replace: var(--tagline)
- Find: old-email@domain.com → Replace: var(--email)

Step 3: Find & Replace URLs
- Social media links
- Contact form URLs
- Footer links

Result: Full rebrand executed in minutes
```

### Find & Replace Limitations:

**Cannot replace:**
- Image files (must re-upload)
- Preset names (must rename in Preset Manager)
- Module types (can't change Button to Text)
- Layout structures (Flexbox to Grid)

**Workarounds:**
- Images: Use Image Design Variables
- Presets: Edit preset content instead
- Structures: Manual conversion or Inspector

### Find & Replace + Inspector Combo:

**Power workflow:**
```
1. Inspector: Identify what needs changing
   - "Section uses 5 different spacing values"

2. Find & Replace: Standardize them
   - Replace all with var(--space-md)

3. Inspector: Verify consistency
   - All sections now show same variable

Two tools working together = clean, maintainable site
```

---

## ✅ Success Criteria

**The knowledge base is "complete" when:**

Zac can say to the Simplicity Tech Divi AI Operator:
```
"Read audits/00_MASTER_INDEX.md and review this page for improvements"
```

**And the Simplicity Tech Divi AI Operator:**
- ✅ Identifies global variable opportunities
- ✅ Checks color contrast and flags failures
- ✅ Verifies typography hierarchy
- ✅ Reviews spacing consistency
- ✅ Tests responsive behavior
- ✅ Checks accessibility
- ✅ Provides specific fixes with code
- ✅ Explains reasoning
- ✅ References relevant KB files
- ✅ Prioritizes issues appropriately

**That's the goal!**

---

## 📚 Related Files

**Design System:**
- `01_system_setup.md` - Color, typography, spacing standards
- `../features/design-variables.md` - Global vs local decisions

**Components:**
- `03_components.md` - Specific component implementation
- `../resources/template-library.md` - Pattern library

**Workflows:**
- `../audits/00_MASTER_INDEX.md` - Complete audit routing
- `../workflows/deployment-checklist.md` - Pre-launch checklist

---

**Last Updated:** December 2024
**Status:** Active
**Divi Version:** 5.x
