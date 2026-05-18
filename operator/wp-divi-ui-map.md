# WordPress + Divi UI Operator Map

**Project:** Simplicity Tech Divi AI Operator  
**Site:** sampleproblem-pages.local  
**Environment:** Local (WP 6.9.4 · Divi 5.5.2 · Backwards Compatibility Mode)  
**Surveyed:** 2026-05-18  
**Status:** Active reference

---

## Quick Facts

| Item | Value |
|------|-------|
| WordPress version | 6.9.4 |
| Divi version | 5.5.2 |
| Active theme | Divi (Elegant Themes) |
| Divi mode | Divi 4 shortcodes (backwards compat, not yet migrated to Divi 5) |
| Plugins installed | None |
| Pages | 1 — `home` (post ID 7, real estate demo) |
| Theme Builder templates | None configured |
| Divi Library layouts | None saved |
| Menu locations | Primary / Secondary / Footer (none assigned) |
| Widget areas | Sidebar + Footer Areas #1–6 |
| Known warnings | PHP `display_errors = 1` (Support Center); orange admin bar "Backwards Compatibility Mode Enabled" |

---

## 1. WordPress Admin Navigation

All paths relative to `/wp-admin/`.

### Core Content

| Area | URL | Controls |
|------|-----|----------|
| Dashboard | `index.php` | Site overview, health, quick draft |
| Posts | `edit.php` | Blog posts |
| Media Library | `upload.php` | Images, video, files |
| Pages | `edit.php?post_type=page` | All pages; entry point for Divi editing |
| Projects (Divi CPT) | `edit.php?post_type=project` | Divi Portfolio custom post type |
| Comments | `edit-comments.php` | Comment moderation |

### Appearance

| Area | URL | Controls |
|------|-----|----------|
| Themes | `themes.php` | Active theme (Divi 5.5.2); switch/preview themes |
| Customize | `customize.php` | Live preview customizer (limited with Divi) |
| Widgets | `widgets.php` | Sidebar and Footer Areas #1–6 |
| Menus | `nav-menus.php` | Create and assign nav menus to Primary / Secondary / Footer locations |
| Background | `themes.php?page=custom-background` | Site background colour/image |
| **Theme File Editor** | `theme-editor.php` | **Direct PHP file editing — never touch without approval** |

### Divi Admin (under "Divi" sidebar menu)

| Area | URL | Controls |
|------|-----|----------|
| Divi Dashboard | `admin.php?page=et_onboarding` | Onboarding overview |
| **Divi 5 Migrator** | `admin.php?page=et_d5_readiness` | Convert Divi 4 shortcodes to Divi 5 — irreversible without backup |
| **Theme Options** | `admin.php?page=et_divi_options` | Site-wide Divi settings (see §5) |
| **Theme Builder** | `admin.php?page=et_theme_builder` | Global Header / Footer / Body templates (see §6) |
| Theme Customizer | `customize.php?et_customizer_option_set=theme` | Live preview of Divi-specific customizer |
| Role Editor | `admin.php?page=et_divi_role_editor` | Per-role access to Builder, Library, Presets, modules |
| Divi Library | `edit.php?post_type=et_pb_layout` | Saved sections, rows, and full layouts (currently empty) |
| Support Center | `admin.php?page=et_support_center_divi` | System status, Safe Mode, Remote Access, Logs |

### Settings

| Area | URL | Controls |
|------|-----|----------|
| General | `options-general.php` | Site title, tagline, URL, timezone, admin email |
| **Reading** | `options-reading.php` | **Homepage setting — which page is the front page** |
| Permalinks | `options-permalink.php` | URL structure |
| Discussion | `options-discussion.php` | Comments |

### Tools

| Area | URL | Controls |
|------|-----|----------|
| Site Health | `site-health.php` | PHP/server diagnostics |
| Import | `import.php` | Import content from other platforms |
| Export | `export.php` | Export WP content |

---

## 2. How Pages Are Opened and Edited

There are three paths into any Divi page:

### Path A — Standard WP Block Editor

**How:** WP Admin → Pages → click page title or "Edit"  
`/wp-admin/post.php?post=7&action=edit`

Shows the WP block editor with a placeholder reading "This Layout Is Built With Divi" and a button "Edit With The Divi Builder". Also exposes:
- **Divi Settings** button (top bar) — page-level Divi override settings
- Right sidebar: status, publish date, slug, author, template, page parent, featured image, excerpt

**When to use:** Change page status, slug, author, template, or page metadata without opening the Visual Builder.

### Path B — Divi Visual Builder (recommended for content/design work)

**How A:** WP Admin → Pages → row action "Edit With Divi" (uses a nonce — link expires)  
**How B:** Frontend admin bar → "Edit With Divi"  
**How C:** Navigate to the page frontend; URL receives `?et_fb=1` parameter

Opens the full frontend Visual Builder in an iframe with live editing.

**When to use:** All layout, content, styling, spacing, and responsive work.

### Path C — Frontend View

**How:** Admin bar → site name link → any frontend page  
**When to use:** Visual QA; checking live appearance before/after changes.

---

## 3. Divi Visual Builder Interface

The Visual Builder has three zones: the **Page Bar** (top), the **Builder Bar** (left side), and the **Canvas** (the page itself, rendered in an iframe).

### Page Bar (Top)

| Control | Function |
|---------|----------|
| Page Menu / Page Settings | Opens a modal: Content (title, excerpt, featured image, background), Design (page-level background), Advanced (custom CSS for the page) |
| Marker / Selector | Switches between select-element and marker annotation modes |
| Canvas Grid View | Overlays a grid on the canvas |
| Responsive buttons: Desktop / Tablet / Phone | Switches the canvas preview to that breakpoint; custom width input available |
| Width input (1580px) | Sets the canvas preview width |
| Zoom input (100%) | Sets canvas zoom level |
| Exit | Returns to WP admin (with save/discard prompt if unsaved) |
| Preview | Opens a preview without saving |
| Save / Save Dropdown | Saves the page (Save, Save to Library, Enable/Disable Builder) |

### Builder Bar (Left Side)

| Button | Icon class | Function |
|--------|-----------|----------|
| Load Layout | `divi-load-layout` | Import a saved layout from the Divi Library or Divi's premade layout packs |
| Layers | `divi-layers` | Opens the Layer Panel — tree view of all sections, rows, columns, modules |
| Inspector | `divi-inspector` | Inspect computed styles on a hovered element |
| Global Variables | `divi-manage-global-variable` | **Manage global color, font, spacing tokens** (design system layer) |
| Preset Manager | `divi-manage-presets` | **Manage module style presets** — create, edit, apply presets |
| Page Manager | `divi-page-manager` | Multi-page management within the builder |
| Command Center | `divi-command-center` | Keyboard shortcut search and command palette |
| Wireframe View | `divi-wireframe-view` | Shows all elements as structural blocks (no visual styling) |
| Hover Interactions | `divi-interaction-action-on-hover` | Configure element hover interactions |
| Parent Hover | `divi-interaction-parent-action-on-hover` | Parent-triggered hover logic |
| X-Ray Mode | `divi-interaction-x-ray` | Reveals hidden/stacked layers on the canvas |
| Builder Settings | `divi-builder-settings` | General builder preferences |
| Help | `divi-help` | Divi documentation links |

### Canvas (Page Structure)

The canvas renders the page in an iframe. The live page (`home`) contains:

- **9 sections**, **15 rows**
- Module types in use: Heading, Icon, Text, Number Counter, Image, Button, Blurb, Accordion

**Hierarchy:** Section → Row → Column → Module

**To select an element:** Hover over it on the canvas → a blue overlay appears → click to open its settings modal.

**To add a new element:** Click the `+` (Insert) button that appears when hovering between/below elements.

---

## 4. Module Settings Modal

Every module, row, section, and column shares the same three-tab settings modal.

| Tab | Controls |
|-----|----------|
| **Content** | Module-specific content: text, images, links, button labels, sub-items. Also: background, visibility |
| **Design** | Visual styling: colors, typography, spacing (padding/margin), borders, shadows, filters, transforms, sizing |
| **Advanced** | CSS ID, CSS classes, custom CSS (field per sub-element), animations, overflow, z-index, transitions, display conditions |

**Section-level modal** adds: Section type (Regular / Fullwidth / Specialty), column layout picker, gutter width, equalize column heights.

**Row-level modal** adds: Row layout (column structure), max-width, padding.

---

## 5. Responsive Controls

**Location:** Page Bar → Responsive buttons (top center of the Visual Builder)

| Control | What it does |
|---------|-------------|
| Desktop button | Preview at desktop width (default: 1580px or full canvas) |
| Tablet button | Preview at tablet breakpoint (default: ~980px) |
| Phone button | Preview at phone breakpoint (default: ~480px) |
| Width input field | Type any custom pixel width for testing |

**Per-element responsive settings:** In the module settings modal (Content/Design/Advanced tabs), most fields show a **responsive toggle** (desktop/tablet/phone icon) next to each value. Click it to set a different value per breakpoint without affecting others.

**Where responsive breakpoints are configured globally:** Divi Theme Options → Builder tab → responsive breakpoint values.

---

## 6. Global Colors, Fonts, Presets, and Design Variables

These live in the **Builder Bar** (left side of the Visual Builder) — not in any admin page.

### Global Variables (Design Tokens)

**How to reach:** Visual Builder → Builder Bar → `divi-manage-global-variable` (Global Variables button)

Controls:
- Global color palette (named color tokens used across all modules)
- Global font selections
- Global spacing tokens (if configured)

**Do not edit without approval.** Changes here cascade to every element using that variable.

### Preset Manager

**How to reach:** Visual Builder → Builder Bar → `divi-manage-presets` (Preset Manager button)

Controls:
- Module-specific style presets (e.g., "Primary Button", "Section Hero")
- Create, edit, rename, delete, or apply presets to modules
- Presets can be stacked (multiple presets applied per module)

**Do not delete or rename presets without confirming nothing else depends on them.**

### Divi Library (Saved Layouts)

**How to reach (admin):** Divi → Divi Library (`edit.php?post_type=et_pb_layout`)  
**How to reach (builder):** Builder Bar → Load Layout button

Types: Global Modules, Rows, Sections, Full Layouts. Currently empty on this site.

---

## 7. Theme Builder (Global Header/Footer/Body Templates)

**How to reach:** Divi → Theme Builder (`admin.php?page=et_theme_builder`)

This is where global site-wide layout templates live. Currently no templates are configured.

| Template Type | What it controls |
|---------------|-----------------|
| Global Header | Site header that appears on every page (logo, nav, top bar) |
| Global Body | Default body layout template for all pages |
| Global Footer | Site footer (links, copyright, social icons) |
| Custom Template | Targeted templates for specific post types, pages, categories, or archive views |

**How templates are built:** Each template uses the Divi Visual Builder. Clicking "Add Global Header" etc. opens a builder instance for that template.

**Editing scope:** Global Header/Footer changes affect the entire site. Test on staging. Do not edit without approval.

---

## 8. Divi Theme Options

**How to reach:** Divi → Theme Options (`admin.php?page=et_divi_options`)

Eight tabs:

| Tab | Key settings |
|-----|-------------|
| **General** | Logo upload, fixed navigation bar, blog style, sidebar layout, Google Fonts, Google API key, social icons/URLs, post count per archive, date format, custom CSS field, smooth scrolling, back-to-top button |
| **Performance** | (Sub-section of General) Dynamic module framework, dynamic icons, critical CSS, disable WP emojis, defer jQuery, improve Google Fonts loading |
| **Navigation** | Exclude pages/categories from nav, dropdown depth, sort order, disable top-tier dropdown links |
| **Builder** | Enable Divi Builder on post types, output styles inline, product tour, enable classic editor, force Divi 4 shortcode framework |
| **Layout** | Post info section items, thumbnails on posts/pages, show comments |
| **Ads** | 468×60 banner ad slots |
| **SEO** | Custom titles, meta descriptions, meta keywords, canonical URLs for homepage/posts/archives |
| **Integration** | **Code injection**: `<head>` code, `<body>` code, single post top/bottom code — use for analytics, tracking pixels |
| **Updates** | Elegant Themes API key, version rollback, import/export Theme Options and layouts |

**Custom CSS field** (General tab, bottom): Site-wide CSS appended to the theme. Use for global overrides that cannot be done through the builder. Less preferred than variables/presets.

**Do not click Save Changes unless a specific setting change has been approved.**

---

## 9. Menu and Header/Footer Management

### Menus (Navigation)

**How to reach:** Appearance → Menus (`nav-menus.php`)  
Or: Customize → Menus

Three registered menu locations: **Primary Menu**, **Secondary Menu**, **Footer Menu**.  
Currently no menus exist — the site shows the default auto-generated WordPress pages list in the nav.

**To create:** Name the menu → add items (pages, posts, custom links, categories) → assign to a location → Save Menu.

### Header/Footer via Theme Builder

If a global Header or Footer template exists in the Theme Builder, that template controls the rendered header/footer. The Theme Builder template can include a Divi Menu module linked to the Primary Menu.

### Header/Footer via Theme Options

If no Theme Builder template exists, the default Divi theme header renders. Its logo, nav style, and social icons are configured in **Divi Theme Options → General** and **Theme Options → Navigation**.

### Widgets

**How to reach:** Appearance → Widgets (`widgets.php`)

Available widget areas:
- **Sidebar** — used on archive/blog pages with a sidebar layout
- **Footer Area #1–6** — used in the default Divi footer if no Theme Builder footer template exists

---

## 10. Plugin Areas

No plugins are currently installed. When plugins are present, the key areas to understand are:

| Category | Where it appears in WP admin |
|----------|------------------------------|
| Caching | Separate top-level or Settings submenu (e.g., WP Rocket, W3 Total Cache) |
| Forms | Separate top-level menu (e.g., Gravity Forms, WPForms, Contact Form 7) |
| SEO | Separate top-level or Settings submenu (e.g., Yoast, RankMath) — can conflict with Divi Theme Options SEO settings |
| Security | Separate top-level menu (e.g., Wordfence, iThemes Security) |
| Performance/Images | Media or separate menu (e.g., Smush, Imagify) |
| Page builders (third-party) | Would add modules to the Divi Role Editor and may require backwards compat mode |

**Note:** Divi's own SEO settings in Theme Options become redundant if a dedicated SEO plugin (Yoast/RankMath) is installed. Disable Divi SEO settings to avoid conflicts.

---

## 11. Known Issues and Notices

| Issue | Location | Severity | Action |
|-------|----------|----------|--------|
| Backwards Compatibility Mode Enabled | Frontend admin bar (orange warning) | Medium | Site uses Divi 4 shortcodes. Run Divi 5 Migrator after backup on staging. Do not run on production without a tested restore path. |
| PHP `display_errors = 1` | Divi Support Center → System Status | Low (local env) | Acceptable for local development; set to `0` before any staging or production deployment. |
| No Theme Builder templates | Theme Builder | Informational | Header/footer use default Divi theme rendering. Set up Theme Builder templates before any client-facing work. |
| No menus configured | Appearance → Menus | Informational | Nav bar shows auto-generated pages list. Create and assign menus before client review. |
| No Divi Library layouts | Divi → Divi Library | Informational | Nothing saved yet. Save approved sections/layouts here as the site grows. |
| No plugins | Plugins | Informational | Site is bare. Add caching, SEO, forms, and security plugins as needed. |

---

## 12. Recommended Browser-First Workflow for Divi Tasks

Use this order of operations for any task on this site.

### Step 1 — Identify the scope

- Is this a content change (text/image only)?
- Is this a layout or design change?
- Is this a site-wide global change (colors, fonts, presets, Theme Builder)?
- Is this a settings change (Theme Options, Reading, Menus)?

### Step 2 — Route to the right UI

| Task type | UI path |
|-----------|---------|
| Change text or image in a module | Visual Builder → click module on canvas → Content tab |
| Change spacing, padding, or color on a module | Visual Builder → click module → Design tab |
| Add CSS class or custom CSS to a module | Visual Builder → click module → Advanced tab |
| Add a new section or module | Visual Builder → hover canvas → click `+` insert control |
| View page structure | Visual Builder → Builder Bar → Layers panel |
| Change a global design token | Visual Builder → Builder Bar → Global Variables |
| Apply or edit a module preset | Visual Builder → Builder Bar → Preset Manager |
| Add/edit the site header or footer | Divi → Theme Builder → Global Header / Global Footer |
| Change site logo | Divi → Theme Options → General → Logo |
| Add tracking code (GA, GTM, etc.) | Divi → Theme Options → Integration → Head code or Body code |
| Configure site navigation | Appearance → Menus |
| Set homepage | Settings → Reading |
| Add site-wide custom CSS (last resort) | Divi → Theme Options → General → Custom CSS |
| Check responsive layout | Visual Builder → Page Bar → Tablet / Phone buttons |
| Save a section for reuse | Visual Builder → section settings → Save to Library |
| Import a layout | Visual Builder → Builder Bar → Load Layout |
| Migrate from Divi 4 to Divi 5 | Divi → Divi 5 Migrator (staging only, with backup) |

### Step 3 — Safety checks before any change

- Confirm you are on the **correct environment** (local vs staging vs production).
- For global changes (variables, presets, Theme Builder): **do not edit without explicit approval**.
- For Theme Options: **do not click Save Changes** without confirming the specific setting to change.
- For Theme Builder templates: changes affect **every page** — always test on staging first.
- For the Divi 5 Migrator: **take a full backup first** — migration converts shortcodes and cannot be undone without restoring the backup.

### Step 4 — Verify

- Check Desktop, Tablet, and Phone views in the Visual Builder after any layout or design change.
- Check the frontend (Exit builder → View Page) to confirm rendered output matches builder view.
- Check admin notices and browser console for new errors after changes.

---

## What Not to Touch Without Approval

| Area | Risk |
|------|------|
| Theme File Editor | Direct PHP editing — can break the site |
| Divi 5 Migrator | Converts all shortcodes — irreversible without a backup restore |
| Theme Builder Global Header/Footer | Affects every page on the site |
| Global Variables (colors/fonts) | Cascades to every element using those tokens |
| Presets | Cascading style changes across all modules using that preset |
| Divi Theme Options → Save Changes | Saves all tab settings at once — easy to accidentally change unrelated settings |
| Settings → Reading (homepage) | Can break the site's front page routing |
| Plugins → Deactivate/Delete | Can remove functionality relied on by pages |
| Theme Customizer → Publish | Publishes live — no staging isolation |
