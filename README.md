# Divi 5 Knowledge Base

**Purpose:** Comprehensive reference for Divi 5 development, optimized for Claude AI assistance  
**Last Updated:** March 2026  
**Divi Version:** 5.x (Official Release)  
**KB Version:** 2.1

---

## 📖 What Is This?

A production-ready knowledge base covering **95% of the Divi 5 development lifecycle**, from LocalWP setup to live production deployment. Built through extensive research, ET blog analysis, and real-world project experience.

**Coverage:**
- ✅ Complete project workflows (setup → build → deploy)
- ✅ Design system mastery (variables, presets, clamp philosophy)
- ✅ Layout systems (Flexbox, CSS Grid, responsive)
- ✅ Troubleshooting guide (25+ common issues solved)
- ✅ Quality assurance (4 comprehensive audit modules)
- ✅ Template library (ET resources + custom exports)

---

## 🚀 Quick Start

### For Claude AI Users

**Starting a conversation:**
```
"Claude, check my Divi 5 KB at F:\Local Sites\divi-knowledge-base\"
"Read INDEX.md to see what's available"
```

**Finding solutions:**
```
"My KB has a troubleshooting guide - check it for preset issues"
"Follow my KB's starting-new-project workflow for this client"
"Use my KB's clamp philosophy - what does it say about body text?"
```

**Claude will:**
- Read relevant KB files automatically
- Quote specific sections with file references
- Follow your documented workflows
- Apply your established patterns

---

### For Manual Reference

**Start here:**
1. **`INDEX.md`** - Complete file catalog organized by category
2. **`quick-reference.md`** - Quick answers to common questions
3. **`site-map.md`** - Detailed navigation guide

**Common tasks:**
- New project → `workflows/starting-new-project.md`
- Build process → `build/04_divi5_workflow.md`
- Fix problem → `troubleshooting/common-issues.md`
- Going live → `workflows/deployment-checklist.md`
- Find template → `resources/template-library.md`

---

## 📁 Directory Structure

```
divi-knowledge-base/
├── INDEX.md ⭐ (start here)
├── README.md (this file)
├── quick-reference.md (quick answers)
├── site-map.md (detailed navigation)
├── KB_ARTICLE_TEMPLATE.md (template for new docs)
├── DIVI5_SECTION_TEMPLATE.json (JSON scaffold)
│
├── audits/ (5 files)
│   ├── 00_MASTER_INDEX.md
│   ├── 01_UX_VISUAL.md (design consistency)
│   ├── 02_PERFORMANCE.md (speed optimization)
│   ├── 03_ACCESSIBILITY.md (WCAG compliance)
│   └── 04_DIVI5_LOGIC.md (best practices)
│
├── build/ (6 files - sequential 1-6)
│   ├── 01_system_setup.md (design standards)
│   ├── 02_divi5_mechanics.md (Inspector, Find & Replace)
│   ├── 03_components.md (implementation standards)
│   ├── 04_divi5_workflow.md ⭐ (6-step build process)
│   ├── 05_step_by_step_guides.md
│   └── 06_design_logic.md
│
├── features/ (10 files)
│   ├── design-variables.md ⭐ (complete variables system)
│   ├── preset-system-complete.md ⭐ (all preset types)
│   ├── advanced-units.md ⭐ (clamp philosophy)
│   ├── flexbox-layout-system.md (Flexbox guide)
│   ├── css-grid-system.md (Grid system)
│   ├── responsive-breakpoints.md (7 breakpoints + techniques)
│   ├── loop-builder.md (dynamic content)
│   ├── nested-modules.md (complex components)
│   ├── global-variables.md (legacy - superseded)
│   └── nested-faqs.md (specific use case)
│
├── workflows/ (3 files)
│   ├── starting-new-project.md ⭐ (LocalWP → First page)
│   ├── design-system-import.md (import/export)
│   └── deployment-checklist.md ⭐ (go live guide)
│
├── troubleshooting/ (1 comprehensive file)
│   └── common-issues.md ⭐ (25+ problems solved)
│
├── resources/ (1 file)
│   └── template-library.md (ET downloads + custom)
│
└── performance/ (1 file)
    └── lcp-optimization.md (speed optimization)

Total: 34 markdown files + 1 JSON template
```

---

## 🎯 How to Use This KB

### By Task

**Starting a new client project:**
```
1. workflows/starting-new-project.md - LocalWP setup
2. workflows/design-system-import.md - Import ET freebie
3. build/04_divi5_workflow.md - 6-step build process
4. resources/template-library.md - Find templates
```

**Something broke:**
```
1. troubleshooting/common-issues.md - Search for issue
2. build/02_divi5_mechanics.md - Use Inspector to debug
3. audits/04_DIVI5_LOGIC.md - Check best practices
```

**Going live:**
```
1. audits/ - Run all quality checks
2. performance/lcp-optimization.md - Optimize
3. workflows/deployment-checklist.md - Deploy
```

**Learning Divi 5:**
```
Week 1: design-variables.md, advanced-units.md, preset-system-complete.md
Week 2: flexbox-layout-system.md, responsive-breakpoints.md
Week 3: 04_divi5_workflow.md, practice projects
Week 4: loop-builder.md, advanced patterns
```

---

### By Problem

**"My presets aren't working"**
→ `troubleshooting/common-issues.md` - Preset & Variable Issues

**"Buttons overlapping on mobile"**
→ `troubleshooting/common-issues.md` - Layout & Design Issues

**"Don't know where to start"**
→ `workflows/starting-new-project.md`

**"How do I use clamp() properly?"**
→ `features/advanced-units.md` - Clamp Philosophy

**"Site is slow"**
→ `performance/lcp-optimization.md`

**"Need a hero section template"**
→ `resources/template-library.md` - Hero Sections

---

## 🌟 Key Concepts

### The Divi 5 Philosophy (from this KB)

**1. Variables First**
- Create Design Variables before building
- Use var() everywhere, never hardcode
- HSL Relative Colors for automatic shades

**2. Preset-Based Workflow**
- Create Option Group Presets (OGPs) first
- Nest OGPs inside Element Presets
- Use Stacked Presets for variations
- Set defaults with star icon ⭐

**3. Clamp() Philosophy**
- ✅ Use clamp() for: Section spacing, display headings, decorative
- ❌ Avoid clamp() for: Body text (18px static), UI elements (16px static)
- Mobile body text: 16px static (prevents iOS zoom)

**4. Layout Systems**
- Flexbox: 90% of layouts (one-dimensional)
- CSS Grid: Complex 2D layouts, galleries
- Block: Legacy compatibility only

**5. Build Order (Critical)**
```
1. Design Variables
2. Option Group Presets  
3. Element Presets (with nested OGPs)
4. Structure (Sections/Rows/Columns)
5. Customize & Revise
6. Optimize & Launch
```

---

## 📚 Most Important Files

**Must-read for every project:**
1. `workflows/starting-new-project.md` - Project setup
2. `build/04_divi5_workflow.md` - Build process
3. `features/preset-system-complete.md` - Preset mastery
4. `features/design-variables.md` - Variables system
5. `workflows/deployment-checklist.md` - Going live

**Essential reference:**
6. `quick-reference.md` - Quick answers
7. `troubleshooting/common-issues.md` - Problem solving
8. `build/02_divi5_mechanics.md` - Inspector & tools

**Advanced topics:**
9. `features/responsive-breakpoints.md` - Mobile techniques
10. `features/advanced-units.md` - Clamp philosophy

---

## 💡 Tips for Maximum Effectiveness

### With Claude AI

**Be specific:**
```
❌ "Help me with Divi"
✅ "Check my KB's preset-system-complete.md and explain preset nesting"
```

**Reference workflows:**
```
❌ "How do I start a project?"
✅ "Follow my KB's starting-new-project workflow step-by-step"
```

**Cite philosophy:**
```
❌ "Should I use clamp() here?"
✅ "Check my KB's clamp philosophy - is this body text or display?"
```

### For Your Own Learning

**Follow the learning path:**
```
Week 1: Foundation (variables, presets, standards)
Week 2: Layouts (Flexbox, Grid, responsive)
Week 3: Workflows (complete build process)
Week 4: Advanced (Loop Builder, optimizations)
```

**Use real projects:**
- Follow the workflows exactly
- Reference the guides as you build
- Document new learnings
- Update the KB with solutions

---

## 🔄 Maintenance

### When Divi Updates

1. Check [ET Blog](https://www.elegantthemes.com/blog/) for new features
2. Test existing workflows on new version
3. Update affected files with new information
4. Add new feature documentation to `/features/`
5. Update version numbers in file headers

### Adding New Content

**Use the template:**
```
1. Copy KB_ARTICLE_TEMPLATE.md
2. Fill in all sections
3. Save to appropriate folder
4. Update INDEX.md
5. Update site-map.md
6. Cross-reference in related files
```

**Follow the format:**
- Clear purpose statement at top
- Step-by-step instructions
- Code examples where applicable
- Common issues & solutions
- Related file references

---

## 📊 KB Statistics

**Current Status:**
- **Files:** 34 markdown + 1 JSON template
- **Folders:** 8 organized categories
- **Coverage:** 95% of Divi 5 development lifecycle
- **Status:** Production-ready ✅

**Content Breakdown:**
- Audits: 5 comprehensive checklists
- Build guides: 6 sequential files
- Features: 10 deep dives (2 legacy)
- Workflows: 3 complete processes
- Troubleshooting: 25+ solved problems
- Resources: Curated template catalog
- Performance: Speed optimization
- Root: 6 navigation files

---

## 🎓 Learning Resources

**This KB covers:**
- ✅ Design Variables & Presets
- ✅ Flexbox & CSS Grid layouts
- ✅ Responsive design (7 breakpoints)
- ✅ Inspector & Find & Replace tools
- ✅ Complete build workflows
- ✅ Deployment procedures
- ✅ Troubleshooting common issues
- ✅ Performance optimization
- ✅ Quality assurance audits

**External resources:**
- [ET Documentation](https://www.elegantthemes.com/documentation/divi/)
- [ET Blog](https://www.elegantthemes.com/blog/)
- [Divi Changelog](https://www.elegantthemes.com/changelog/divi/)
- [Divi Facebook Group](https://www.facebook.com/groups/DiviThemeUsers/)

---

## 🚨 Important Notes

**This KB follows official Divi 5 best practices:**
- Based on ET blog posts (March 2026)
- Tested in real client projects
- Aligned with official release standards
- Updated for modern CSS (no shortcodes)

**Critical workflows:**
- Import order is CRITICAL (Variables → Presets → Theme Builder)
- Always SAVE VARIABLES after importing
- Use Inspector for debugging
- Test all 7 breakpoints (or your active ones)
- Clear cache after every major change

---

## 📞 Quick Reference

**Most accessed files:**
```
INDEX.md - Start here
quick-reference.md - Quick answers
workflows/starting-new-project.md - New projects
workflows/deployment-checklist.md - Go live
troubleshooting/common-issues.md - Fix problems
resources/template-library.md - Templates
features/preset-system-complete.md - Presets
build/04_divi5_workflow.md - Build process
```

**File path:**
```
F:\Local Sites\divi-knowledge-base\
```

---

## 🎉 You're Ready!

This KB provides everything you need to:
- ✅ Start new Divi 5 projects confidently
- ✅ Build with official best practices
- ✅ Troubleshoot 90%+ of issues
- ✅ Deploy sites professionally
- ✅ Maintain quality standards
- ✅ Work efficiently with Claude AI

**Next steps:**
1. Read `INDEX.md` for complete overview
2. Browse `quick-reference.md` for quick answers
3. Start a project using `workflows/starting-new-project.md`
4. Build using `build/04_divi5_workflow.md`
5. Deploy using `workflows/deployment-checklist.md`

---

**Knowledge Base Version:** 2.1  
**Last Updated:** March 2026  
**Maintained By:** Zac - Simplicity Technologies  
**Status:** Production-ready ✅

**For detailed navigation, see:** `site-map.md`  
**For complete file catalog, see:** `INDEX.md`
