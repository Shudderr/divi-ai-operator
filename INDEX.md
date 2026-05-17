# 📚 Divi 5 Knowledge Base Index
**Core Objective:** Centralized standards for Divi 5 (D5) development in LocalWP.

**Last Updated:** March 10, 2026

---

## 🛠 Core Documentation
- [BUILD_STANDARDS](./build/): The modular "Bible" for Divi 5 mechanics
- [DIVI5_SECTION_TEMPLATE.json](./DIVI5_SECTION_TEMPLATE.json): JSON Scaffold for building sections
- [KB_ARTICLE_TEMPLATE.md](./KB_ARTICLE_TEMPLATE.md): Template for writing new KB articles
- [README.md](./README.md): Knowledge base overview and usage guide
- [quick-reference.md](./quick-reference.md): Quick lookup for common solutions

---

## 🎨 Core Features (`./features/`)
*Essential Divi 5 features and systems*

### Design System Foundation
| File | Description | Priority |
| :--- | :--- | :--- |
| **[design-variables.md](./features/design-variables.md)** | Complete Design Variables system (colors, fonts, numbers, text, images, URLs) | 🔴 Critical |
| **[advanced-units.md](./features/advanced-units.md)** | CSS units, calc(), clamp() with usage philosophy | 🔴 Critical |
| **[preset-system-complete.md](./features/preset-system-complete.md)** | Element, Option Group, Stacked, and Nested presets | 🔴 Critical |
| **[dark-mode-relative-colors.md](./features/dark-mode-relative-colors.md)** | HSL-based Relative Colors, semantic variable system, light/dark mode toggle | 🟡 High |

### Layout Systems
| File | Description | Priority |
| :--- | :--- | :--- |
| **[flexbox-layout-system.md](./features/flexbox-layout-system.md)** | Complete Flexbox guide with practical examples | 🔴 Critical |
| **[css-grid-system.md](./features/css-grid-system.md)** | Grid system and Grid vs Flexbox decision tree | 🟡 High |
| **[canvases.md](./features/canvases.md)** | Off-canvas layers, modals, slide-ins, and design sandbox | 🟡 High |

### Styling Tools
| File | Description | Priority |
| :--- | :--- | :--- |
| **[extend-attributes.md](./features/extend-attributes.md)** | Propagate style properties from one element across a defined scope | 🟡 High |

### Theme Builder & Site Editing
| File | Description | Priority |
| :--- | :--- | :--- |
| **[theme-builder.md](./features/theme-builder.md)** | Headers, footers, archive & single post templates | 🔴 Critical |
| **[complete-site-editing.md](./features/complete-site-editing.md)** | Edit header/footer/body in one builder session; client lockout via Role Editor | 🔴 Critical |

### Dynamic Content
| File | Description | Priority |
| :--- | :--- | :--- |
| **[loop-builder.md](./features/loop-builder.md)** | Dynamic content display with Loop Builder | 🟡 High |
| **[nested-modules.md](./features/nested-modules.md)** | Infinite module nesting capabilities | 🟡 High |

### Responsive Design
| File | Description | Priority |
| :--- | :--- | :--- |
| **[responsive-breakpoints.md](./features/responsive-breakpoints.md)** | 7 breakpoint system with strategies | 🟡 High |

### Legacy Files
| File | Description | Status |
| :--- | :--- | :--- |
| **[global-variables.md](./features/global-variables.md)** | Old global variables guide | ⚠️ Superseded by design-variables.md |
| **[nested-faqs.md](./features/nested-faqs.md)** | Nested FAQ implementation | ℹ️ Specific use case |

---

## 🔍 Audit Modules (`./audits/`)
*Load only the specific module required for the task to save tokens.*

| Module | Description | When to Use |
| :--- | :--- | :--- |
| **[01_UX_VISUAL.md](./audits/01_UX_VISUAL.md)** | Colors, Typography, Spacing | Design reviews / UI consistency checks |
| **[02_PERFORMANCE.md](./audits/02_PERFORMANCE.md)** | Speed, LCP, Asset weights | Optimization phase before delivery |
| **[03_ACCESSIBILITY.md](./audits/03_ACCESSIBILITY.md)** | ARIA, Contrast, Semantics | Legal/Accessibility compliance checks |
| **[04_DIVI5_LOGIC.md](./audits/04_DIVI5_LOGIC.md)** | Globals, Presets, Inspector | Every time a module is built or migrated |

---

## 🏗️ Build Standards (`./build/`)
*The "How-To" library for Divi 5 development*

| Module | Purpose | Priority |
| :--- | :--- | :--- |
| **[01_system_setup.md](./build/01_system_setup.md)** | Color contrast, Typography scales, 8px spacing system | 🔴 Critical |
| **[02_divi5_mechanics.md](./build/02_divi5_mechanics.md)** | Site audits, Inspector, Find & Replace workflows | 🔴 Critical |
| **[03_components.md](./build/03_components.md)** | Component implementation standards | 🟡 High |
| **[04_divi5_workflow.md](./build/04_divi5_workflow.md)** | Complete 6-step build process (Variables → Launch) | 🔴 Critical |
| **[05_step_by_step_guides.md](./build/05_step_by_step_guides.md)** | Step-by-step implementation guides | 🟡 High |
| **[06_design_logic.md](./build/06_design_logic.md)** | Design decision frameworks | 🟡 High |

---

## 🚀 Workflows (`./workflows/`)
*Step-by-step processes and workflows*

| Workflow | Description | Priority |
| :--- | :--- | :--- |
| **[starting-new-project.md](./workflows/starting-new-project.md)** | Complete project setup workflow (7-8 hours) | 🔴 Critical |
| **[design-system-import.md](./workflows/design-system-import.md)** | Import/Export Divi 5 Design System (Freebie & Custom) | 🔴 Critical |
| **[deployment-checklist.md](./workflows/deployment-checklist.md)** | LocalWP to production deployment (complete guide) | 🔴 Critical |
| **[maintenance-schedule.md](./workflows/maintenance-schedule.md)** | Ongoing maintenance — weekly, monthly, quarterly, annual | 🔴 Critical |

---

## ⚡ Performance (`./performance/`)
*Performance optimization guides*

| File | Description |
| :--- | :--- |
| **[lcp-optimization.md](./performance/lcp-optimization.md)** | Largest Contentful Paint optimization |

---

## 🔧 Troubleshooting (`./troubleshooting/`)
*Quick solutions to common problems*

| File | Description | Priority |
| :--- | :--- | :--- |
| **[common-issues.md](./troubleshooting/common-issues.md)** | Solutions to most common Divi 5 problems | 🔴 Critical |

---

## 📦 Resources (`./resources/`)
*Templates, downloads, and reusable assets*

| File | Description | Priority |
| :--- | :--- | :--- |
| **[template-library.md](./resources/template-library.md)** | Curated ET blog templates and downloadable resources | 🟡 High |

---

## 📋 Standard Procedures

### Creating New Content
1. Reference relevant module in [./build/](./build/)
2. Follow [KB_ARTICLE_TEMPLATE.md](./KB_ARTICLE_TEMPLATE.md) structure
3. Apply design standards from [./features/](./features/)

### Reviewing Sites
1. Load appropriate audit module from [./audits/](./audits/)
2. Run systematic review
3. Reference [./build/](./build/) for fixes
4. Document findings

### Building Components
1. Start with [design-variables.md](./features/design-variables.md)
2. Create presets using [preset-system-complete.md](./features/preset-system-complete.md)
3. Apply layout using [flexbox-layout-system.md](./features/flexbox-layout-system.md) or [css-grid-system.md](./features/css-grid-system.md)
4. Ensure responsive with [responsive-breakpoints.md](./features/responsive-breakpoints.md)

---

## 🎯 Quick Reference by Task

### Starting a New Site
1. [04_divi5_workflow.md](./build/04_divi5_workflow.md) - 6-step build process
2. [design-system-import.md](./workflows/design-system-import.md) - Import ET freebie or custom system
3. [design-variables.md](./features/design-variables.md) - Set up design system
4. [preset-system-complete.md](./features/preset-system-complete.md) - Build preset library

### Building a Color System
1. [design-variables.md](./features/design-variables.md) - Create brand and semantic variables
2. [dark-mode-relative-colors.md](./features/dark-mode-relative-colors.md) - Relative Colors, shades, dark mode

### Launching a Site
1. [deployment-checklist.md](./workflows/deployment-checklist.md) - Complete deployment workflow

### Implementing Layouts
1. [flexbox-layout-system.md](./features/flexbox-layout-system.md) - Single-direction layouts
2. [css-grid-system.md](./features/css-grid-system.md) - Two-dimensional layouts
3. [responsive-breakpoints.md](./features/responsive-breakpoints.md) - Make it responsive

### Working with Dynamic Content
1. [loop-builder.md](./features/loop-builder.md) - Display posts/products/custom content
2. [nested-modules.md](./features/nested-modules.md) - Build complex components

### Building & Editing Global Templates
1. [theme-builder.md](./features/theme-builder.md) - Create headers, footers, archive templates
2. [complete-site-editing.md](./features/complete-site-editing.md) - Edit templates inline from the front end

### Building Overlays, Modals & Menus
1. [canvases.md](./features/canvases.md) - Off-canvas layers and triggers
2. [02_divi5_mechanics.md](./build/02_divi5_mechanics.md) - Interactions system

### Fixing Inconsistency Across a Site
1. [extend-attributes.md](./features/extend-attributes.md) - Propagate a style fix across scope
2. [02_divi5_mechanics.md](./build/02_divi5_mechanics.md) - Find & Replace for value-level fixes

### Rebranding a Client Site
1. [extend-attributes.md](./features/extend-attributes.md) - Bulk propagate updated styles
2. [design-variables.md](./features/design-variables.md) - Update variables first
3. [dark-mode-relative-colors.md](./features/dark-mode-relative-colors.md) - Relative shades auto-update from base
4. [02_divi5_mechanics.md](./build/02_divi5_mechanics.md) - Find & Replace residual hard-coded values

### Using Advanced Features
1. [advanced-units.md](./features/advanced-units.md) - clamp(), calc(), rem, vw
2. [design-variables.md](./features/design-variables.md) - Create reusable values
3. [02_divi5_mechanics.md](./build/02_divi5_mechanics.md) - Inspector & Find & Replace tools

### Auditing Sites
1. [01_UX_VISUAL.md](./audits/01_UX_VISUAL.md) - Visual design audit
2. [02_PERFORMANCE.md](./audits/02_PERFORMANCE.md) - Performance audit
3. [03_ACCESSIBILITY.md](./audits/03_ACCESSIBILITY.md) - Accessibility audit
4. [04_DIVI5_LOGIC.md](./audits/04_DIVI5_LOGIC.md) - Divi 5 best practices audit

### Troubleshooting Problems
1. [common-issues.md](./troubleshooting/common-issues.md) - Quick solutions to common issues

### Finding Templates & Resources
1. [template-library.md](./resources/template-library.md) - ET blog downloads and freebies

---

## 🎓 Learning Path

### Week 1: Foundations
1. [design-variables.md](./features/design-variables.md) - Understand design system
2. [advanced-units.md](./features/advanced-units.md) - Master clamp() philosophy
3. [01_system_setup.md](./build/01_system_setup.md) - Design system standards

### Week 2: Core Systems
4. [preset-system-complete.md](./features/preset-system-complete.md) - Master presets
5. [flexbox-layout-system.md](./features/flexbox-layout-system.md) - Layout fundamentals
6. [responsive-breakpoints.md](./features/responsive-breakpoints.md) - Responsive design

### Week 3: Advanced Features
7. [loop-builder.md](./features/loop-builder.md) - Dynamic content
8. [nested-modules.md](./features/nested-modules.md) - Complex components
9. [css-grid-system.md](./features/css-grid-system.md) - Advanced layouts

### Week 4: Workflows & Practice
10. [starting-new-project.md](./workflows/starting-new-project.md) - Apply everything
11. Build practice projects
12. Audit and refine

---

## 📂 Project Directory
- `../simplicity-template/`: Main active development template
- `../professional-services-template/`: Professional services template
- `../tradiediviaitemplate/`: Tradie-focused template

---

## 🔑 Key Principles

### Clamp() Philosophy
**✅ Use clamp() for:**
- Section padding/spacing
- Display/hero typography (short text, 1-2 lines)
- Non-critical UI elements (icons, decorative)

**❌ Avoid clamp() for:**
- Body text (always static 18px)
- Small text (metadata, footer - 14px)
- Critical UI (buttons, forms, navigation - 16px)

### Design Variables First
Always create Design Variables before building:
1. Colors (5-8 core colors)
2. Fonts (2-3 maximum)
3. Spacing (fluid clamp + static rem)
4. Typography (display clamp + content static)

### Color Variable Architecture
Two-layer color system for maintainability:
1. **Brand colors** (fixed) — `--brand-primary`, `--brand-accent`, `--brand-dark`
2. **Semantic colors** (contextual) — `--color-bg-primary`, `--color-text-body`, `--color-border`
- Modules always reference semantic variables, never raw hex or brand variables directly
- Dark mode = update semantic variables only; brand colors stay unchanged
- See `dark-mode-relative-colors.md` for full implementation

### Preset-Based Workflow
1. Create Option Group Presets (reusable styles)
2. Create Element Presets (complete modules)
3. Use Stacked Presets (mix and match)
4. Use Nested Presets (presets within presets)

### Style Propagation Hierarchy
When you need to push a change across a site, choose the right tool:
- **Variable update** → everything referencing that variable updates instantly
- **Preset update** → all modules using that preset update
- **Extend Attributes** → push a specific property from one element to similar elements in a scope
- **Find & Replace** → swap a raw value across all element types
- **Copy/Paste Attributes** → one-to-one transfer between two elements

---

## 📊 File Status Legend
- 🔴 **Critical** - Essential for all projects
- 🟡 **High** - Important for most projects
- 🟢 **Medium** - Useful for specific scenarios
- ℹ️ **Info** - Reference material
- ⚠️ **Superseded** - Replaced by newer file

---

**Knowledge Base Version:** 2.5
**Divi Version:** 5.x (Official Release)
**Last Updated:** March 10, 2026

---

## 🆕 What's New in Version 2.5 (March 2026)

**New Files:**
- `features/complete-site-editing.md` — Front-end editing of Theme Builder templates (header, body, footer) in a single builder session. Covers the workflow difference vs. earlier Divi, cross-area copy/paste, disabling via builder settings, and client lockout via Role Editor. Source: ET blog March 9, 2026.

**Index Updates:**
- Renamed "Dynamic Content" section to "Theme Builder & Site Editing" and added `complete-site-editing.md`
- Added "Building & Editing Global Templates" Quick Reference section
- Updated `kb-gaps.md` command to fetch last 5 ET Theme Releases posts (down from 10)

---

## 🆕 What's New in Version 2.4 (March 2026)

**New Files:**
- `features/dark-mode-relative-colors.md` — HSL-based Relative Colors, two-layer semantic color architecture, Approach A (variable swap) vs Approach B (CSS class toggle), `prefers-color-scheme` support, flash prevention, Simplicity Technologies dark palette example, and seasonal theming

**Index Updates:**
- `dark-mode-relative-colors.md` added to Design System Foundation table
- Added "Building a Color System" Quick Reference section
- Added "Rebranding a Client Site" section now references dark mode article for relative shade auto-update
- Added "Color Variable Architecture" to Key Principles

---

## 🆕 What's New in Version 2.3 (March 2026)

**New Files:**
- `features/extend-attributes.md` - Complete guide to Extend Attributes: propagating style properties across a scope, rebrand workflows, comparison with Find & Replace and Preset updates, and the two-step normalise → variablise pattern

**Index Updates:**
- Added "Styling Tools" section to Core Features table
- Added "Fixing Inconsistency Across a Site" Quick Reference section
- Added "Rebranding a Client Site" Quick Reference section
- Added "Style Propagation Hierarchy" to Key Principles

---

## 🆕 What's New in Version 2.2 (March 2026)

**New Files:**
- `features/canvases.md` - Complete guide to Canvases: off-canvas layers, modals, slide-ins, design sandbox, accessibility, and Theme Builder integration

**Index Updates:**
- Added "Building Overlays, Modals & Menus" Quick Reference section
- canvases.md added to Layout Systems table

---

## 🆕 What's New in Version 2.1 (March 2026)

**New Files:**
- `build/04_divi5_workflow.md` - Complete 6-step build workflow from ET blog
- `workflows/design-system-import.md` - Import/export procedures for Divi 5 Design System
- `workflows/starting-new-project.md` - Complete project kickoff from LocalWP to first page
- `workflows/deployment-checklist.md` - LocalWP to production deployment guide
- `troubleshooting/common-issues.md` - Solutions to most common Divi 5 problems
- `resources/template-library.md` - Curated ET templates and downloadable resources

**Major Updates:**
- `preset-system-complete.md` - Added comprehensive preset nesting workflow & Preset Manager guide
- `02_divi5_mechanics.md` - Added Inspector panel and Find & Replace tool workflows
- `INDEX.md` - Added troubleshooting section
- `quick-reference.md` - Complete rewrite with all new workflows

**New Concepts Covered:**
- Preset nesting strategy (OGPs inside Element Presets)
- Stacked presets for variations
- Preset Manager 9 key features
- Inspector panel for debugging & bulk edits
- Find & Replace for adopting variables site-wide
- Import order for design systems (critical!)
- Version control for exported systems
- Troubleshooting workflows for common problems
