# Divi 5 Quick Reference Guide

**Last Updated:** March 3, 2026  
**Version:** 2.1

---

## 🚀 Starting a New Project

### Import Divi 5 Design System Freebie

**Order is CRITICAL - import in this exact sequence:**

1. **Theme Customizer** → `Divi-5-Launch-Freebie_Theme-Customizer.json`
2. **Variable Manager** → `Divi-5-Launch-Freebie_Global-Variables.json` → **SAVE VARIABLES**
3. **Preset Manager** → `Divi-5-Launch-Freebie_Presets.json`
4. **Theme Builder** → `Divi-5-Launch-Freebie_Theme-Builder-Templates.json` (UNCHECK "Import Presets")
5. **Divi Library** → Choose sections/layouts (UNCHECK "Import Presets")

📖 **Full Guide:** `workflows/design-system-import.md`

### Build Process (6 Steps)

```
1. Design Variables → Colors, typography, spacing, text/image/URLs
2. Option Group Presets → Typography, spacing, borders, shadows
3. Element Presets → Full modules (with nested OGPs)
4. Structure → Sections, rows, columns (Flex/Grid/Block)
5. Customize & Revise → Inspector, Find & Replace, stacking
6. Optimize & Launch → Defaults, accessibility, export
```

📖 **Full Workflow:** `build/04_divi5_workflow.md`

---

## 🎨 Design Variables

### Creating Variables

**Variable Manager (left sidebar in Visual Builder)**

**Colors:**
- Create base color
- Use Relative Colors for shades/tints (HSL-based)
- Result: Change one, all relatives update

**Typography (with clamp):**
```
Hero H1: clamp(32px, 4vw, 60px)
Body Text: 18px (static - NOT clamp!)
Button Text: 16px (static - prevents iOS zoom)
```

**Spacing:**
```
Macro (clamp): --space-md = clamp(24px, 3vw, 48px)
UI (static): --ui-md = 1.5rem (24px)
```

📖 **Full Guide:** `features/design-variables.md`

---

## 🎭 Presets System

### Preset Types

**Element Presets:** Complete module (Button, Text, Blurb, etc.)  
**Option Group Presets (OGPs):** Reusable style groups (Typography, Spacing, Borders)  
**Stacked Presets:** Layer multiple presets on one element  
**Nested Presets:** Embed OGPs inside Element Presets

### Nesting Workflow

```
1. Create OGPs first
   - Typography OGP
   - Spacing OGP
   - Border OGP

2. Create Element Preset
   - Nest the OGPs inside
   - Add unique styling

3. Update OGP later
   - All Element Presets using it update automatically
```

### Preset Manager

**Key Features:**
- Visual browser with previews
- Safe editing (Preset Preview before saving)
- Create presets without modules on page
- Set global defaults (star icon ⭐)
- Export/Import libraries
- See usage count

📖 **Full Guide:** `features/preset-system-complete.md`

---

## 🔧 Essential Tools

### Inspector Panel

**What it shows:**
- All modified settings for selected element
- Settings for all child elements
- Applied presets
- Design Variables in use

**Use it for:**
- Debugging ("Why isn't this centering?")
- Seeing what's customized
- Bulk editing multiple elements
- Converting Block → Flex

**Access:** Select element → Inspector icon (left sidebar)

### Find & Replace

**What it updates:**
- Static colors → Design Variables
- Static spacing → Design Variables  
- Text content, URLs, fonts
- Any field value site-wide

**Common uses:**
```
Find: #065cfe
Replace: var(--color-primary)
Scope: Entire Site
```

**Access:** Settings panel → Find & Replace icon

📖 **Full Guide:** `build/02_divi5_mechanics.md`

---

## 📐 Layout Systems

### When to Use Each

**Flexbox:** (Most common)
- Hero sections
- Navigation bars
- Button groups
- Card grids (equal heights)
- 90% of layouts

**CSS Grid:**
- Magazine layouts
- Galleries
- Dashboards
- Complex 2D layouts

**Block:**
- Simple stacking
- Blog content
- Legacy compatibility

📖 **Flexbox Guide:** `features/flexbox-layout-system.md`  
📖 **Grid Guide:** `features/css-grid-system.md`

---

## 📏 Clamp() Philosophy

### ✅ Use clamp() for:

- **Section spacing** → `clamp(32px, 5vw, 80px)`
- **Display/Hero headings** → `clamp(32px, 4vw, 60px)`
- **Max-width containers** → `clamp(320px, 90vw, 1200px)`
- **Decorative elements** → Icons, non-critical UI

### ❌ Avoid clamp() for:

- **Body text** → Always 18px static
- **Small text** → Footer/meta 14px static
- **Critical UI** → Buttons/forms/nav 16px static
- **Touch targets** → 44px minimum on mobile

📖 **Full Philosophy:** `features/advanced-units.md`

---

## 🎯 Typography System

### Standard Sizes

**Display (uses clamp):**
```
Hero H1: clamp(32px, 4vw, 60px)
Hero p: clamp(16px, 1.8vw, 22px)
Brand intro: clamp(24px, 3vw, 38px)
```

**Content (static with overrides):**
```
H1: 3.5rem (56px) → Mobile: 2.2rem (35px)
H2: 2.5rem (40px) → Mobile: 1.6rem (26px)
H3: 2rem (32px)
Body: 1.1rem (18px) → Mobile: 1rem (16px)
```

**UI (static all devices):**
```
Buttons: 16-18px
Forms: 16px (prevents iOS zoom!)
Nav: 16px
Footer: 14px
Eyebrows: 15px
```

📖 **Full System:** `build/01_system_setup.md`

---

## 📱 Responsive Breakpoints

### 7-Point System

```
Phone: 0-479px
Phone Wide: 480-767px
Tablet: 768-980px
Tablet Wide: 981-1279px
Desktop: 1280-1919px
Widescreen: 1920-2559px
Ultra Wide: 2560px+
```

### Most Sites Need 3-5

```
Mobile (< 767px)
Tablet (768-980px)
Desktop (1280px+)
```

📖 **Full Guide:** `features/responsive-breakpoints.md`

---

## 🎨 Color System

### WCAG Contrast Requirements

**Normal text (< 18px):** 4.5:1 minimum (AA), 7:1 (AAA)  
**Large text (≥ 18px):** 3:1 minimum (AA), 4.5:1 (AAA)

### Your Colors

```
Primary: #065cfe (Blue)
Accent: #3DD6C4 (Teal)
Dark: #001533
Gray: #64748b
Light: #f5f5f5
White: #ffffff
```

Use HSL Relative Colors for shades/tints.

---

## 📦 Export Your Design System

### What to Export

1. **Variable Manager** → Export → `YourBrand-Variables-v1.0.json`
2. **Preset Manager** → Export → `YourBrand-Presets-v1.0.json`
3. **Theme Builder** → Export → `YourBrand-Theme-Builder-v1.0.json`
4. **Divi Library** → Export → `YourBrand-Sections-v1.0.json`

### Version Control

```
Naming: Brand-Component-v1.0.json

Changelog:
v1.1 - Added service card animations
v1.0 - Initial export

Store in organized folder structure
```

📖 **Full Guide:** `workflows/design-system-import.md`

---

## 🚀 Deployment

### Going Live Checklist

**Full deployment guide:**
```
1. Pre-launch preparation (content, audits, testing)
2. Backup & export (LocalWP backup, design system)
3. Hosting setup (WordPress, PHP requirements)
4. Site migration (All-in-One WP Migration)
5. Post-migration config (permalinks, URLs)
6. Performance optimization (caching, images)
7. Security hardening (SSL, Wordfence)
8. Testing & QA (all browsers, devices)
9. Analytics & monitoring (GA4, Search Console)
10. Client handoff (training, documentation)
11. Post-launch monitoring (daily/weekly checks)
```

📖 **Complete Guide:** `workflows/deployment-checklist.md`

### Quick Deployment Steps

**Export from LocalWP:**
```
1. All-in-One WP Migration → Export to File
2. Download .wpress file
3. Keep under 512MB (or use Unlimited Extension)
```

**Import to Production:**
```
1. Install WordPress on hosting
2. Install All-in-One WP Migration
3. Import .wpress file
4. Settings → Permalinks → Save (critical!)
5. Clear all caches
6. Test site
```

**Post-Launch:**
```
✓ SSL certificate active
✓ Google Analytics tracking
✓ Search Console sitemap submitted
✓ Uptime monitoring configured
✓ Backups scheduled
✓ Client training completed
```

---

## 🔍 Common Tasks

### Center Content

**Flexbox:**
```
Row → Layout Style: Flex
Justify Content: Center
Align Items: Center
```

**CSS:**
```
max-width: clamp(320px, 90vw, 1200px);
margin: 0 auto;
```

### Equal Height Cards

**Use CSS Grid:**
```
Row → Layout Style: Grid
Grid Template Columns: repeat(4, 1fr)
Row Heights: Equal Height Rows
```

### Reverse Column Order on Mobile

**Layout Direction:**
```
Desktop: Row
Mobile: Column-Reverse
```

Or use Display Order field.

### Adopt Variables Site-Wide

**Find & Replace:**
```
Find: #065cfe
Replace: var(--color-primary)
Scope: Entire Site
```

### Check What's Applied

**Inspector:**
```
Select element
Open Inspector
See all presets, variables, settings
```

---

## 🚨 Common Mistakes

### 1. Wrong Build Order
```
❌ Build modules → Try to add variables later
✅ Variables → OGPs → Element Presets → Modules
```

### 2. Not Nesting OGPs
```
❌ Hardcode all settings in Element Preset
✅ Create OGPs → Nest in Element Presets
```

### 3. Clamp on Body Text
```
❌ Body: clamp(14px, 2vw, 20px)
✅ Body: 18px static
```

### 4. Forgetting Layout Wrapping
```
❌ Buttons overlap when browser resizes
✅ Layout Wrapping: Wrap
```

### 5. Not Setting Defaults
```
❌ Apply presets manually every time
✅ Preset Manager → Star icon → Set as Default
```

---

## 📚 Key Files by Task

**Starting new project:**
- `build/04_divi5_workflow.md`
- `workflows/design-system-import.md`

**Design system:**
- `features/design-variables.md`
- `features/advanced-units.md`
- `features/preset-system-complete.md`

**Layouts:**
- `features/flexbox-layout-system.md`
- `features/css-grid-system.md`

**Tools & mechanics:**
- `build/02_divi5_mechanics.md` (Inspector, Find & Replace)

**Responsive:**
- `features/responsive-breakpoints.md`

---

## 🎓 Learning Path

1. **Week 1:** Variables, clamp() philosophy, system setup
2. **Week 2:** Presets (nesting, stacking), Preset Manager
3. **Week 3:** Layouts (Flexbox, Grid), responsive design
4. **Week 4:** Complete workflow, practice projects

---

**For complete documentation, see:** `INDEX.md`  
**Knowledge Base Version:** 2.1  
**Divi Version:** 5.x (Official Release)  
**Last Updated:** March 2026

---

## 📚 Complete File Reference

**Core Workflows:**
- `workflows/starting-new-project.md` - LocalWP setup to first page
- `workflows/deployment-checklist.md` - Go live procedure
- `workflows/design-system-import.md` - Import/export systems

**Build Guides:**
- `build/04_divi5_workflow.md` - 6-step build process
- `build/02_divi5_mechanics.md` - Inspector & Find & Replace
- `build/01_system_setup.md` - Design standards

**Features:**
- `features/preset-system-complete.md` - All preset types
- `features/design-variables.md` - Variables system
- `features/responsive-breakpoints.md` - 7 breakpoints + techniques
- `features/flexbox-layout-system.md` - Flexbox complete
- `features/css-grid-system.md` - Grid system
- `features/advanced-units.md` - Clamp philosophy

**Help:**
- `troubleshooting/common-issues.md` - 25+ problems solved
- `resources/template-library.md` - ET templates catalog

**For complete navigation, see:** `INDEX.md`
