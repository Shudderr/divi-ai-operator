# Divi 5 Knowledge Base - Site Map

**Purpose:** Master navigation for the complete Divi 5 knowledge base  
**Last Updated:** March 2026  
**Divi Version:** 5.x (Official Release)  
**KB Version:** 2.1

---

## 📁 Quick Navigation

**Location:** `F:\Local Sites\divi-knowledge-base\`

Use this file to quickly navigate the knowledge base. When starting a Claude session, reference this to understand the complete structure.

---

## 📄 Root Level Files

| File | Purpose | Status |
|------|---------|--------|
| `INDEX.md` | Complete KB index with all files organized by category | ✅ Current |
| `README.md` | Overview, how to use the KB, quick start guide | ✅ Updated |
| `quick-reference.md` | Most common solutions, quick lookups, code snippets | ✅ Current |
| `site-map.md` | This file - navigation and structure overview | ✅ Current |
| `KB_ARTICLE_TEMPLATE.md` | Template for creating new documentation files | ✅ Active |
| `DIVI5_SECTION_TEMPLATE.json` | JSON scaffold for building new sections | ✅ Active |
| `PROJECT.md` | Canonical project identity for the Simplicity Tech Divi AI Operator | Active |
| `STATE.md` | Living project state and current priorities | Active |
| `HANDOFF.md` | Continuity notes for future AI sessions and contributors | Active |
| `AI_WORKFLOW.md` | Operational contract for AI systems | Active |
| `CHANGELOG.md` | Meaningful project milestone history | Active |

---

## 📂 Directory Structure
y
### `/operator/` - AI Operator Governance

**Purpose:** Executive layer for the Simplicity Tech Divi AI Operator

**Files:**
- `README.md` - Operator layer overview
- `operator-system.md` - Core identity and behaviour
- `source-priority.md` - Source hierarchy
- `safety-rules.md` - Staging, approval, global edit, and QA rules
- `task-routing.md` - Route request types to existing KB docs
- `browser-automation.md` - Browser/Codex/Chrome governance
- `memory.md` - Living operational memory

**When to use:**
- Before AI-assisted project work
- When deciding which KB files to read
- Before browser automation
- Before high-risk edits or publish workflows

---

### `/audits/` - Quality Assurance Checklists

**Purpose:** Modular audit system for reviewing Divi 5 sites

**Files:**
- `00_MASTER_INDEX.md` - Audit selection guide
- `01_UX_VISUAL.md` - Colors, fonts, spacing, UI consistency
- `02_PERFORMANCE.md` - LCP, Core Web Vitals, optimization
- `03_ACCESSIBILITY.md` - WCAG 2.2, ARIA, keyboard navigation
- `04_DIVI5_LOGIC.md` - Variables, presets, Inspector, best practices

**When to use:**
- Before launching a client site
- During mid-project quality checks
- When troubleshooting design inconsistencies
- For performance optimization reviews

**How to use:**
```
General audit: Read 00_MASTER_INDEX.md first
Specific aspect: Jump to the appropriate module (01-04)
Divi 5 specific: Always use 04_DIVI5_LOGIC.md
```

---

### `/build/` - Build Standards & Workflows

**Purpose:** The "How-To" library for Divi 5 development

**Files:**
1. `01_system_setup.md` - Design standards (color contrast, typography scales, 8px spacing)
2. `02_divi5_mechanics.md` - Tools & workflows (Inspector, Find & Replace, audits)
3. `03_components.md` - Component implementation standards
4. `04_divi5_workflow.md` - Complete 6-step build process (Variables → Launch)
5. `05_step_by_step_guides.md` - Step-by-step implementation guides
6. `06_design_logic.md` - Design decision frameworks

**When to use:**
- Starting any new Divi 5 project
- Setting up design systems
- Learning the proper build workflow
- Making design decisions

**Recommended reading order:**
```
Beginners: 01 → 04 → 02 → 05
Experienced: 04 (workflow) → 02 (tools) as needed
Reference: 03, 05, 06 for specific tasks
```

---

### `/features/` - Divi 5 Core Features

**Purpose:** Deep dives into specific Divi 5 features and systems

**Active Files:**
- `design-variables.md` - Complete Design Variables system (colors, fonts, numbers, text, images, URLs)
- `advanced-units.md` - CSS units, calc(), clamp() with usage philosophy
- `preset-system-complete.md` - Element, Option Group, Stacked, and Nested presets
- `flexbox-layout-system.md` - Complete Flexbox guide with practical examples
- `css-grid-system.md` - Grid system and Grid vs Flexbox decision tree
- `responsive-breakpoints.md` - 7 breakpoint system with advanced responsive techniques
- `theme-builder.md` - Headers, footers, archive & single post templates
- `loop-builder.md` - Dynamic content display with Loop Builder
- `nested-modules.md` - Infinite module nesting capabilities

**Legacy Files (superseded):**
- `global-variables.md` - Superseded by design-variables.md
- `nested-faqs.md` - Specific use case reference

**When to use:**
- Learning a specific Divi 5 feature
- Implementing advanced layouts
- Understanding the design system
- Reference during builds

---

### `/workflows/` - Step-by-Step Processes

**Purpose:** Complete workflows from start to finish

**Files:**
- `starting-new-project.md` - Complete project setup (LocalWP → First page, 3-4 hours)
- `design-system-import.md` - Import/Export Divi 5 Design System
- `deployment-checklist.md` - LocalWP to production deployment (complete guide)
- `maintenance-schedule.md` - Ongoing maintenance — weekly, monthly, quarterly, annual

**When to use:**
- Beginning a new client project
- Importing ET Design System Freebie
- Launching a site to production
- Setting up team workflows

**Critical workflows:**
```
New project: starting-new-project.md
Import system: design-system-import.md
Go live: deployment-checklist.md
```

---

### `/troubleshooting/` - Problem Solving

**Purpose:** Quick solutions to common Divi 5 problems

**Files:**
- `common-issues.md` - Solutions to 25+ most common Divi 5 problems

**Covers:**
- Visual Builder issues
- Layout & design problems
- Preset & variable issues
- Performance problems
- Form issues
- Responsive issues
- Browser compatibility
- Module-specific issues
- Import/export problems
- Database & server issues

**When to use:**
- Something broke and you need a fix NOW
- Visual Builder won't load
- Presets not applying
- Forms not sending
- Images not loading
- Deployment issues

**How to use:**
```
Use browser Find (Cmd/Ctrl + F) to search for your specific issue
Each problem includes:
- Symptoms
- Likely causes
- Step-by-step solutions
- Prevention tips
```

---

### `/resources/` - Templates & Downloads

**Purpose:** Curated collection of downloadable templates and resources

**Files:**
- `template-library.md` - Catalog of ET blog templates and downloadable resources

**Includes:**
- Divi 5 Design System Freebie (350+ sections, 400+ presets)
- Mobile Responsive Layout Pack (12 best practice sections)
- Quick Sites (Professional Services, E-commerce)
- Layout categories (Heroes, CTAs, Features, Pricing, Team, Contact, Footers)
- Custom template library (your exports)

**When to use:**
- Starting a new project (grab freebie)
- Need a specific pattern (hero, pricing, etc.)
- Learning responsive techniques
- Building template library

**Your custom templates:**
```
Storage: F:\Divi-Templates\Custom\
Documented in template-library.md under "My Custom Template Library"
```

---

### `/performance/` - Speed Optimization

**Purpose:** Performance optimization guides

**Files:**
- `lcp-optimization.md` - Largest Contentful Paint optimization

**When to use:**
- Site loading slowly
- PageSpeed scores low
- Client complains about speed
- Pre-launch optimization

**Future additions:**
- General optimization guide
- Image optimization
- Caching setup
- CDN configuration

---

## 🎯 Finding Information by Task

### Starting a New Project
```
1. workflows/starting-new-project.md - Setup
2. workflows/design-system-import.md - Import freebie
3. build/04_divi5_workflow.md - Build process
4. resources/template-library.md - Find templates
```

### Learning Divi 5
```
1. INDEX.md - Overview of everything
2. quick-reference.md - Quick answers
3. features/design-variables.md - Understand variables
4. features/preset-system-complete.md - Master presets
5. build/04_divi5_workflow.md - Complete workflow
```

### Troubleshooting Problems
```
1. troubleshooting/common-issues.md - Quick fixes
2. build/02_divi5_mechanics.md - Inspector debugging
3. audits/04_DIVI5_LOGIC.md - Check best practices
```

### Launching a Site
```
1. audits/ - Run all audit modules
2. performance/lcp-optimization.md - Optimize speed
3. workflows/deployment-checklist.md - Deploy to production
```

### Finding Templates
```
1. resources/template-library.md - Browse catalog
2. Download from ET blog
3. Import following design-system-import.md order
```

---

## 🔍 Finding Information by Feature

### Design System
```
- features/design-variables.md - Variables system
- features/preset-system-complete.md - All preset types
- features/advanced-units.md - Clamp philosophy
- build/01_system_setup.md - Design standards
```

### Layouts
```
- features/flexbox-layout-system.md - Most layouts
- features/css-grid-system.md - Complex 2D layouts
- features/responsive-breakpoints.md - Breakpoints + techniques
```

### Tools
```
- build/02_divi5_mechanics.md - Inspector & Find & Replace
- quick-reference.md - Quick commands
```

### Dynamic Content
```
- features/loop-builder.md - Posts, products, custom content
- features/nested-modules.md - Complex components
```

---

## 📊 KB Statistics

**Total Files:** 34 markdown + 1 JSON template  
**Total Folders:** 8 categories  
**Coverage:** 95% of Divi 5 development lifecycle  
**Status:** Production-ready ✅

**Files by Category:**
- Audits: 5 files
- Build: 6 files
- Features: 10 files (2 legacy)
- Workflows: 3 files
- Troubleshooting: 1 file (comprehensive)
- Resources: 1 file (catalog)
- Performance: 1 file
- Root: 6 files

---

## 🚀 Quick Start Scenarios

### Scenario 1: "I'm building a law firm website"
```
1. Read: workflows/starting-new-project.md
2. Import: Divi 5 Design System Freebie
3. Find template: resources/template-library.md → Professional Services
4. Build: build/04_divi5_workflow.md
5. Deploy: workflows/deployment-checklist.md
```

### Scenario 2: "My buttons are overlapping on mobile"
```
1. Search: troubleshooting/common-issues.md
2. Find: "Buttons Overlapping When Browser Resizes"
3. Solution: Enable Layout Wrapping in Flexbox
4. Reference: features/flexbox-layout-system.md if needed
```

### Scenario 3: "How do I use clamp() properly?"
```
1. Read: features/advanced-units.md - Clamp Philosophy
2. Quick lookup: quick-reference.md - Clamp section
3. Examples: build/01_system_setup.md - Typography
```

### Scenario 4: "Site is slow, client complaining"
```
1. Run: audits/02_PERFORMANCE.md
2. Optimize: performance/lcp-optimization.md
3. Check: troubleshooting/common-issues.md - Performance section
```

---

## 💡 Using This KB with Claude

### Effective Prompts

**For finding information:**
```
"Check my KB for responsive breakpoints"
"Look in my KB troubleshooting for preset issues"
"Find the deployment checklist in my KB"
```

**For building:**
```
"Follow my KB's starting-new-project workflow"
"Use my KB's 6-step build process"
"Apply my KB's clamp philosophy"
```

**For debugging:**
```
"Search my KB for 'buttons overlapping'"
"Check my KB troubleshooting for form issues"
"Use my KB's Inspector workflow to debug this"
```

**Claude will:**
- Read the relevant KB files
- Quote specific sections
- Follow your documented processes
- Apply your established patterns
- Reference file names for traceability

---

## 📝 Adding New Content

### When You Learn Something New

**Update existing file:**
```
1. Find the relevant file in this site-map
2. Add new section with proper formatting
3. Update "Last Updated" date
4. Cross-reference related files
```

**Create new file:**
```
1. Use KB_ARTICLE_TEMPLATE.md as starting point
2. Add to appropriate folder
3. Update INDEX.md
4. Update this site-map.md
5. Cross-reference in related files
```

---

## 🔄 Maintenance

### Regular Updates

**When Divi updates:**
- Check ET blog for new features
- Test existing workflows
- Update affected files
- Add new feature documentation

**Monthly review:**
- Verify file paths still accurate
- Update "Last Updated" dates
- Add new learnings from projects
- Archive outdated information

---

## 📞 File Path Quick Reference

**Most accessed files:**
```
INDEX.md - Start here for overview
quick-reference.md - Quick answers
workflows/starting-new-project.md - New projects
workflows/deployment-checklist.md - Going live
troubleshooting/common-issues.md - Fix problems
resources/template-library.md - Find templates
features/preset-system-complete.md - Master presets
build/04_divi5_workflow.md - Build process
```

---

## 🎓 Learning Paths

### Week 1: Foundations
```
1. INDEX.md - Overview
2. features/design-variables.md - Variables
3. features/advanced-units.md - Clamp philosophy
4. build/01_system_setup.md - Standards
```

### Week 2: Core Systems
```
1. features/preset-system-complete.md - Presets
2. features/flexbox-layout-system.md - Layouts
3. features/responsive-breakpoints.md - Responsive
4. build/02_divi5_mechanics.md - Tools
```

### Week 3: Workflows
```
1. workflows/starting-new-project.md - Setup
2. build/04_divi5_workflow.md - Build
3. workflows/deployment-checklist.md - Deploy
4. Complete practice project
```

### Week 4: Advanced
```
1. features/loop-builder.md - Dynamic content
2. features/css-grid-system.md - Advanced layouts
3. audits/ - Quality assurance
4. Build real client project
```

---

**Last Updated:** March 2026  
**Maintained By:** Zac - Simplicity Technologies  
**KB Version:** 2.1  
**Status:** Production-ready ✅
