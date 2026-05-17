# Complete Site Editing

**Feature/Type:** Front-end editing of Theme Builder templates (header, body, footer) without leaving the Visual Builder  
**Since:** Divi 5 (released March 2026)  
**Use Case:** Edit page content and global templates in a single builder session  
**Last Updated:** 2026-03-10  
**Divi Version:** 5.x

---

## Overview

Complete Site Editing allows you to open the Divi Visual Builder on any page and edit not just that page's content, but also the Theme Builder templates (header, footer, body) assigned to it — all in one session. Previously you had to exit the page builder, navigate to `Divi → Theme Builder`, open the relevant template, and re-enter the builder separately.

This is a significant workflow change. The "Edit With Divi" button is now available on every page of the site (not just singular posts), and once inside the builder you can freely interact with, copy, paste, and drag-drop between all template areas and page content at once.

**ET Source:** https://www.elegantthemes.com/blog/theme-releases/complete-site-editing  
**Video:** https://www.youtube.com/watch?v=Z0ocaqqmPHw

---

## What Changed vs. Divi 4 / Earlier Divi 5

| Before | After |
|--------|-------|
| "Edit With Divi" only appeared on singular posts/pages | "Edit With Divi" appears on every part of the site |
| Editing the header required going to Theme Builder dashboard | Header editable directly from the front end |
| Template areas were activated one at a time | All areas (header, body, footer) are seamlessly editable together |
| No cross-area copy/paste | Can copy/paste and drag/drop between template areas and page content |

---

## How to Use

### Entering Complete Site Editing

**Option 1 — From the front end:**
1. While logged in, visit any page of the site in the browser
2. Click the **Edit With Divi** button (bottom of screen or WordPress admin bar)
3. The Visual Builder opens showing the page content AND any Theme Builder templates assigned to it

**Option 2 — From the WordPress admin:**
1. `Pages → Edit` on any page
2. Click **Use Divi Builder** or **Edit With Divi**
3. Same result — all template areas visible

### What You'll See in the Builder

Once inside, the builder canvas shows the full page from top to bottom:

```
┌─────────────────────────┐
│  HEADER (Theme Builder) │  ← editable
├─────────────────────────┤
│  BODY / PAGE CONTENT    │  ← editable
├─────────────────────────┤
│  FOOTER (Theme Builder) │  ← editable
└─────────────────────────┘
```

All three areas are independently editable. Sections, rows, and modules in the header and footer work exactly the same as on regular pages.

### Editing a Header or Footer

1. Click anywhere inside the header or footer region in the builder canvas
2. Use the standard hover controls (blue bar) to select sections, rows, or modules
3. Make your changes — settings panels work identically to page editing
4. Save — changes apply to the Template, not just this page

⚠️ **Important:** Edits to the header/footer save back to the Theme Builder template. They will affect every page that template is assigned to, not just the current page.

### Cross-Area Copy and Paste

You can copy a module or row from the page body and paste it into the header (or vice versa). The standard Divi copy/paste controls work across all areas:

- Right-click a module → **Copy**
- Click the paste target in a different area → **Paste**
- Drag-and-drop also works across area boundaries

---

## Disabling Complete Site Editing

### For Yourself (Builder Settings)

If you find the header/footer visible in the builder distracting during page editing:

1. Inside the Visual Builder → **Settings** (gear icon, bottom toolbar)
2. Find the **Theme Builder Areas** toggle
3. Disable to hide header/footer from the current editing session

The templates themselves are not affected — this is a display preference only.

### For Clients (Role Editor)

To prevent clients from accidentally editing global templates:

1. `Divi → Role Editor`
2. Select the client's user role (e.g., Editor, Author)
3. Locate **Theme Builder** permissions
4. Disable Theme Builder access for that role

With this restriction, the client can still use "Edit With Divi" on pages but the header/footer areas will not be editable by them. They'll only see and edit their own page content.

This is the recommended setup for all managed client sites.

---

## Workflow Impact

### Old Workflow (Header Edit)
1. Exit page editor
2. Navigate to `Divi → Theme Builder`
3. Find the relevant template
4. Click "Build Header"
5. Visual Builder opens (separate session)
6. Make change, save
7. Return to page to check result
8. Repeat if needed

### New Workflow (Header Edit)
1. Open "Edit With Divi" on any page
2. Click header, make change, save
3. Done

For iterative design work (tweaking header padding, adjusting footer columns, checking spacing against actual page content) this saves significant time and context-switching.

---

## Best Practices

1. **Lock clients out of Theme Builder immediately:** As soon as a site goes live, set Role Editor restrictions. Complete site editing makes it too easy for a client to accidentally break their global header.

2. **Use builder settings to hide template areas when doing page-only work:** If you're grinding through page content edits, hiding header/footer from the canvas reduces visual noise and accidental clicks.

3. **Remember: header/footer saves are global:** It's easy to muscle-memory save a "page" and not realise you also changed the header. Double-check what you've touched in a session before saving.

4. **Still export Theme Builder before major changes:** The shortcut of editing templates inline doesn't remove the need for a JSON backup before structural changes. `Divi → Theme Builder → Export` first.

5. **Use it for spacing/consistency checks:** The best use of complete site editing is checking how your page content looks in context of the actual header and footer — spacing gaps, colour transitions, section padding that only looks right (or wrong) when everything is visible together.

---

## Troubleshooting

### Header/Footer Not Appearing in Builder

**Symptoms:** The Visual Builder opens but only shows page content, no header or footer regions.

**Checks:**
1. Does this page have a Theme Builder template assigned to it? If no template is assigned, there's no header/footer to show.
2. Go to `Divi → Theme Builder` — confirm a template is assigned and enabled for this page/post type.
3. Check if the builder setting to hide template areas is toggled off (see Disabling section above).

### Changes to Header Affected Unexpected Pages

**Cause:** You edited the header template, which applies to all pages it's assigned to (e.g., "Entire Website"). This is expected behaviour — Theme Builder templates are global.

**Fix:** If you need a different header on specific pages, create a new more-specific template assigned to those pages (see `theme-builder.md` → Assignment Rules → Specificity Hierarchy).

### Client Edited the Header Accidentally

**Fix (immediate):** `Divi → Theme Builder → Export` the current (broken) version, then restore from your last JSON backup via Import.

**Prevention:** Set Role Editor restrictions immediately (see Disabling → For Clients above). Don't wait until it happens.

---

## Related Files

- `features/theme-builder.md` — Core Theme Builder guide; assignment rules, template structure, import/export
- `features/loop-builder.md` — Building dynamic archive body templates
- `../build/02_divi5_mechanics.md` — Visual Builder interface and settings panels
- `../workflows/deployment-checklist.md` — Role Editor setup is part of pre-launch checklist
- `../troubleshooting/common-issues.md` — General Theme Builder issues

---

**Last Updated:** 2026-03-10  
**Status:** Active  
**Divi Version:** 5.x  
**ET Source:** https://www.elegantthemes.com/blog/theme-releases/complete-site-editing
