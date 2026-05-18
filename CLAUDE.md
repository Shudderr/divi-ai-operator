# CLAUDE.md

Operating instructions for Claude and Codex sessions working on this repository and its associated WordPress + Divi site.

---

## WordPress + Divi Operator Workflow

The following is based on a live browser discovery session conducted on 2026-05-18 against `sampleproblem-pages.local`. All facts were directly verified unless explicitly marked **[not verified]**.

---

### 1. Browser-First Rules

- **Divi layout and design tasks must start in the Divi Visual Builder.** Do not jump to custom CSS, theme file edits, or database changes until the Builder path has been checked and found insufficient.
- **CSS fallback is a last resort**, not a first option. See §6 for the conditions that permit it.
- **Every change must be visually verified in the browser** before being reported as complete — both in the Visual Builder canvas and in the live front-end (Exit builder → view page).
- **Do not edit theme PHP files, the database, or inject JavaScript** without explicit approval. See §7.
- **Do not use the WordPress Customizer to publish changes.** The Customizer link exists at `Appearance → Customize`; its publish behaviour was not verified during discovery.

---

### 2. Normal Divi Editing Path

Follow this sequence for any content, layout, or design change on an existing page.

#### Step 1 — Open WordPress admin

Navigate to: `http://sampleproblem-pages.local/wp-admin/`

Log in as `zacadmin` if not already authenticated.

#### Step 2 — Find the page

Go to: `http://sampleproblem-pages.local/wp-admin/edit.php?post_type=page`

Currently one page exists: **home** (post ID 7). The row action shows: Edit | Quick Edit | Trash | View | Edit With Divi.

#### Step 3 — Open the page in the Divi Visual Builder

Use the **"Edit With Divi"** row action from the Pages list. This is the recommended path.

- "Edit" opens the WP block editor, which only shows a placeholder and metadata. It does not open the Visual Builder.
- The "Edit With Divi" link contains a nonce and expires — always generate a fresh link from the Pages list or the front-end admin bar.
- The front-end admin bar also has an "Edit With Divi" link when viewing `http://sampleproblem-pages.local/home/` while logged in.

#### Step 4 — Locate the target section, row, column, or module

In the Visual Builder:

- Hover over an element on the canvas to select it. **[not verified — canvas interaction was not performed during discovery]**
- Use the **Layers panel** (Builder Bar → button with class `et-vb-builder-bar-button--divi-layers`) to find elements by structure. The Layers button was confirmed present; its panel contents were not opened during discovery.
- Use **Wireframe View** (Builder Bar → button with class `et-vb-builder-bar-button--divi-wireframe-view`) to view structural blocks. Button was confirmed present; panel was not opened.
- **Most reliable targeting method (verified 2026-05-18):** Use the right-panel element tree — Section → Row → Column → Module — clicking the pencil icon at each level to drill down. Clicking canvas overlays directly tends to select the wrong element level. Verified on the home page: hero section → 4-column row → "Rent A Home" Heading module.

The `home` page canvas iframe contains **9 sections** and **15 rows** (verified via DOM query). Module types present (verified via `et_pb_*` CSS classes): Heading, Icon, Text, Number Counter, Image, Button, Blurb, Accordion.

#### Step 5 — Make the change

In the element settings modal, three tabs are present (verified from the open Page Settings modal during discovery):

- **Content** — text, images, links, sub-items, background
- **Design** — colors, typography, spacing (padding/margin), borders, shadows, sizing
- **Advanced** — CSS ID, CSS classes, custom CSS per sub-element, animations, visibility

The Content/Design/Advanced tab structure was confirmed for the Page Settings modal and verified for a Heading module (2026-05-18). Content groups: Text, Link, Elements, Background, Loop, Meta. Design groups: Layout, Text, Heading Text, Sizing, Spacing, Border, Box Shadow, Filters, Transform, Animation. Advanced groups: Attributes, CSS, HTML, Conditions, Interactions, Visibility, Transitions, Position, Scroll Effects.

#### Step 6 — Save

Click **Save** in the top-right of the Page Bar (button confirmed present, label verified). A **Save Dropdown** button also exists next to Save; its sub-options were not opened during discovery — do not use it without knowing what it contains.

#### Step 7 — Verify the front-end result

Click **Exit** (Page Bar, top-left, confirmed present) then navigate to `http://sampleproblem-pages.local/home/`. Confirm the rendered output matches the intended change.

---

### 3. Inspecting Page Structure

#### Via the Layers panel

Builder Bar → button with class `et-vb-builder-bar-button--divi-layers`. Confirmed present. Panel contents not opened during discovery.

#### Via Wireframe View

Builder Bar → button with class `et-vb-builder-bar-button--divi-wireframe-view`. Confirmed present. Panel contents not opened during discovery.

#### Canvas structure (verified via DOM)

The `home` page (post ID 7) contains 9 sections and 15 rows. The page renders inside an iframe with ID `et-vb-app-frame`.

#### Section types

Three section types exist in Divi (Regular, Fullwidth, Specialty). Which types are used on the `home` page was not broken down during discovery.

#### Global sections/modules

The Divi Library is currently empty — no global sections, rows, or modules are saved on this site. Global element behaviour (visual indicators, etc.) was not verified.

#### Theme Builder templates

`http://sampleproblem-pages.local/wp-admin/admin.php?page=et_theme_builder`

**No Theme Builder templates are configured.** No Global Header, Body, or Footer template exists. The site uses the default Divi theme header and footer.

#### Page inventory (verified)

| Page | Post ID | URL slug | Builder |
|------|---------|----------|---------|
| home | 7 | `/home/` | Divi (backwards compat mode) |

No other pages were found during discovery.

---

### 4. Responsive Controls

**Location:** Page Bar → centre-top of the Visual Builder interface (verified).

Three breakpoint buttons confirmed present:

| Button | CSS class suffix | Canvas width observed |
|--------|-----------------|----------------------|
| Desktop | `--desktop` | 1580px (read from width input field) |
| Tablet | `--tablet` | Not verified on this site |
| Phone | `--phone` | Not verified on this site |

A **custom width input** field was present and showed `1580px` on desktop. A **zoom input** field was also present and showed `100%`.

**Per-element responsive icons in settings fields:** Verified 2026-05-18. In the Heading module Design tab, hovering the Margin row inside Spacing reveals three inline icons beside the field label: info (ⓘ), a responsive/breakpoint toggle, and an overflow menu (⋮). The breakpoint toggle is the per-field responsive control.

**Testing order:** Desktop → Tablet → Phone. Check for horizontal overflow at Phone width.

---

### 5. Custom CSS Locations

All locations listed below were verified during the discovery session unless marked **[not verified]**.

| Location | Path | Scope | Status |
|----------|------|-------|--------|
| Module Advanced tab | Visual Builder → module settings → Advanced | Single module | Tab confirmed present; field contents not inspected |
| Row Advanced tab | Visual Builder → row settings → Advanced | Single row | Tab confirmed present; field contents not inspected |
| Section Advanced tab | Visual Builder → section settings → Advanced | Single section | Tab confirmed present; field contents not inspected |
| Page-level CSS | Visual Builder → Page Menu (top-left) → Advanced tab | Single page | Tab confirmed present in Page Settings modal |
| Divi Theme Options — Custom CSS | WP Admin → Divi → Theme Options → General tab → Custom CSS field | Site-wide | Field label confirmed; content not inspected |
| Divi Theme Options — Integration | WP Admin → Divi → Theme Options → Integration tab | Site-wide (injected) | Head/body/post code field labels confirmed |
| Theme Builder templates | WP Admin → Divi → Theme Builder | Site-wide | No templates exist on this site |
| WordPress Customizer — Additional CSS | WP Admin → Appearance → Customize | Site-wide | Not verified |
| Child theme files | n/a | Site-wide | No child theme — only Divi 5.5.2 listed as active theme |
| Plugins / snippets | n/a | Varies | No plugins installed |

**Do not use the Theme File Editor** (`/wp-admin/theme-editor.php`) to add CSS. It was confirmed present in the Appearance menu.

---

### 6. CSS Fallback Rules

CSS fallback is permitted only when:

1. The relevant Divi Builder Design or Advanced setting does not expose the needed control.
2. Using the Builder setting produces an unwanted side effect.
3. The required behaviour cannot be achieved through Divi's native controls.
4. Or: the change must apply consistently across multiple modules/pages and a scoped CSS rule is the only maintainable approach.

Before writing any CSS fallback, document:

- Which Builder control was checked and where it lives (tab, field name)
- Why that control was insufficient or caused side effects
- The smallest CSS rule needed
- Where the CSS will be placed (prefer module Advanced tab → page-level → Theme Options Custom CSS)
- How the change was visually verified (breakpoints checked)

---

### 7. Actions Requiring Explicit Approval

Claude must stop and ask for explicit user approval before:

- Editing the WordPress database directly
- Installing, updating, or deleting plugins or themes
- Editing theme PHP files (including via Theme File Editor)
- Adding or modifying JavaScript anywhere on the site
- Making any change in the Divi Theme Builder — affects every page
- Changing navigation menus, or assigning menus to locations
- Modifying Divi Theme Options and clicking Save Changes
- Deleting sections, rows, modules, pages, or templates
- Changing the WordPress front page setting (Settings → Reading)
- Changing site URL or permalink structure
- Changing SEO meta settings (Divi Theme Options → SEO tab)
- Running the Divi 5 Migrator — converts Divi 4 shortcodes, irreversible without a database backup restore
- Running any destructive WP-CLI or database command

---

### 8. Site-Specific Notes from Discovery

#### Environment

- Local URL: `http://sampleproblem-pages.local/`
- WP Admin: `http://sampleproblem-pages.local/wp-admin/`
- Admin user: `zacadmin`
- Environment type: Local (`.local` domain)

#### WordPress

- Version: 6.9.4
- Pages: 1 — `home` (post ID 7, slug `/home/`)
- Posts: 1 — "Hello world!" (seen in dashboard Activity widget)
- Plugins: None installed

#### Theme

- Active theme: Divi, Version 5.5.2 (Elegant Themes)
- Child theme: None — only Divi 5.5.2 was listed on the Themes page
- Divi mode: **Backwards Compatibility Mode** — the `home` page uses Divi 4 shortcodes, not yet migrated to Divi 5. The front-end admin bar shows the text "Backwards Compatibility Mode Enabled" in orange.

#### Divi 5 Migrator

- Available at: `http://sampleproblem-pages.local/wp-admin/admin.php?page=et_d5_readiness`
- Has not been run. **Requires explicit approval before running.**

#### Theme Builder

- No Global Header, Body, or Footer templates configured.

#### Divi Library

- Empty — no saved sections, rows, or full layouts.

#### Menus

- Three registered locations: Primary Menu, Secondary Menu, Footer Menu.
- No menus have been created or assigned.

#### Widgets

- Available widget areas (verified from Widgets page): Sidebar, Footer Area #1, #2, #3, #4, #5, #6.
- Widget contents were not inspected.

#### Known warnings (verified)

| Warning | Location |
|---------|----------|
| "Backwards Compatibility Mode Enabled" (orange) | Front-end admin bar |
| PHP `display_errors = 1` | Divi Support Center → System Status |

#### Custom CSS locations confirmed on this site

- Divi Theme Options → General → Custom CSS field (label confirmed; contents not inspected)
- Module/Row/Section → Advanced tab (tab confirmed present; contents not audited)
- Page Settings → Advanced tab (confirmed in open Page Settings modal)
- No child theme, no plugins — no other injection points found

#### Divi Theme Options tabs verified (labels only, contents not audited)

General, Navigation, Builder, Layout, Ads, SEO, Integration, Updates.

---

### 9. Future-Session Checklist

Run through this before making any Divi change:

1. **Confirm the target** — page name, section/row/column/module, and the specific setting to change.
2. **Open the page in the browser** — WP Admin → Pages → Edit With Divi.
3. **Inspect the current Divi structure** — use the Layers panel or Wireframe View to identify the exact element.
4. **Try Builder controls first** — check Content, Design, and Advanced tabs before reaching for CSS.
5. **Test all three breakpoints** — Desktop → Tablet → Phone using the Page Bar responsive buttons.
6. **Save only when confident** — use Save (top-right Page Bar button). Do not use the Save Dropdown without knowing its options.
7. **Verify the front-end result** — exit the builder and view `http://sampleproblem-pages.local/home/`.
8. **Document what changed** — element, setting, value before/after, any CSS fallback used and why.
