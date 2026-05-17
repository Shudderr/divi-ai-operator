# Theme Builder

**Purpose:** Complete guide to Divi 5's Theme Builder — custom headers, footers, and dynamic templates
**Category:** Core Features
**Priority:** 🔴 Critical
**Last Updated:** 2026-03-08
**Divi Version:** 5.x

---

## Overview

Theme Builder lets you design every global and conditional template on your site using the Visual Builder: headers, footers, archive pages, single post layouts, WooCommerce pages, 404 pages, and search results. Instead of editing PHP theme files, you build templates visually and assign them to any combination of pages, post types, or conditions.

**Key concept:** A template is a layout + an assignment rule. One template can power every blog post on the site; another can override just the "Shop" page.

---

## Where to Find It

**WordPress Admin:** `Divi → Theme Builder`

The Theme Builder dashboard shows all active templates in a list. Each template displays its name, its assigned locations, and Enable/Disable toggles.

---

## Template Types

Each Divi 5 theme template has up to three layout areas:

| Area | What it controls | Required? |
|------|-----------------|-----------|
| **Header** | Top of every assigned page | No |
| **Body** | The main content area | No |
| **Footer** | Bottom of every assigned page | No |

You can assign any combination — e.g., a template that only overrides the footer on WooCommerce pages, leaving the header from a different template.

---

## Assignment Rules

After building a template, you define **where it applies** using the Assignments panel.

### Scope Options

**Entire Website**
- Applies globally as the default template
- Lowest specificity — any more specific rule overrides it

**All Posts / All Pages**
- Scopes to every item of that post type

**Specific Posts or Pages**
- Select individual posts, pages, or custom post type entries by name

**Post Type Archives**
- Blog archive, custom post type archive pages

**Taxonomy Archives**
- Category pages, tag pages, custom taxonomy term pages

**Search Results**
- The page rendered when a visitor searches

**404 Page**
- The not-found error page

**Front Page / Home**
- The static front page or posts page

**WooCommerce (if active)**
- Shop page, product archives, single product pages, cart, checkout, account

### Specificity Hierarchy

More specific assignments override broader ones:

```
Entire Website (lowest)
  └── All Posts
        └── Specific Post Type
              └── Individual Post/Page (highest)
```

If two templates could apply to the same page, the more specific one wins.

---

## How to Build a Template

### Step 1: Create the Template

1. `Divi → Theme Builder → Add New Template`
2. Name it clearly (e.g., "Blog Single", "Global Default", "WooCommerce")
3. Click **Build Header**, **Build Body**, or **Build Footer** to open the Visual Builder

### Step 2: Design in Visual Builder

Theme Builder layouts are normal Divi pages — every module, section type, preset, and design variable works the same way.

**Unique to Theme Builder:** Dynamic content tags are available everywhere. Click the dynamic content icon (ϟ) on any field to bind it to:
- Post title, excerpt, content, featured image
- Author name, avatar, bio
- Published date, category, tags
- Site title, site URL, custom fields

### Step 3: Assign Locations

1. Back in the Theme Builder dashboard, click **Assign Template** (or "Edit Assignments")
2. Add one or more location rules
3. Click **Save Changes** — templates are live immediately

### Step 4: Save & Publish

Click **Save Divi Theme Builder Templates** at the top of the dashboard. Without saving here, changes to assignments don't apply even if the Visual Builder showed them saved.

---

## Building a Site Header

### Recommended Structure

```
Section (Fullwidth, Sticky)
└── Row (no padding, full-width inner)
    ├── Column: Logo (Image module → Site Logo dynamic tag)
    └── Column: Navigation (Divi Menu module)
```

### Header Settings

**Sticky Header (scrolls with page):**
- Section → Advanced → Sticky → Make This Element Sticky
- Sticky Top: 0px
- Sticky Bottom Limit: None

**Transparent on Load → Solid on Scroll:**

```
Section Settings:
- Background: Transparent (rgba(0,0,0,0))
- Sticky Background: var(--et-global-color-dark) or white

Advanced → Custom CSS (Sticky State):
- Box Shadow: 0 2px 12px rgba(0,0,0,0.12)
```

**Logo in header:**
- Image module → Content → Image → Click ϟ → Site Logo
- Set max-width (typically 140–180px) via Design → Width

**Navigation:**
- Add Divi Menu module
- Design tab: configure text color for both default and sticky states
- Hamburger at tablet/mobile breakpoints → Menu module → Mobile Menu settings

### Logo + Navigation Layout (Two-Column)

```
Row Settings:
- Column Structure: 1/4 | 3/4
- Equalize Column Heights: On
- Align Content: Center (cross axis)
- Padding: 0

Left Column (Logo):
- Align: Left (flex-start)

Right Column (Nav):
- Align: Right (flex-end)
- Vertical align: Center
```

---

## Building a Site Footer

### Recommended Structure

```
Section (Regular, no sticky)
├── Row: Footer widgets / info columns
│   ├── Column: Logo + tagline
│   ├── Column: Navigation links
│   ├── Column: Contact info
│   └── Column: Social icons
└── Row: Copyright bar
    ├── Column: Copyright text (dynamic: current year)
    └── Column: Legal links
```

### Dynamic Copyright Year

Text module content:
```
© ϟ[Current Year] Company Name. All rights reserved.
```

Click ϟ → Date → Current Year — never needs manual updating.

---

## Building a Blog Single Template (Post Body)

### Recommended Structure

```
Section (Narrow, centered)
└── Row (single column, max-width ~860px, margin: auto)
    ├── Heading module → ϟ Post Title
    ├── Text module → ϟ Post Date | ϟ Post Author | ϟ Post Categories
    ├── Image module → ϟ Featured Image (width: 100%)
    └── Text module → ϟ Post Content
```

**Post meta bar (date/author/categories):**

```
Text module content:
Published ϟ[Post Date] by ϟ[Post Author] in ϟ[Post Categories]
```

### Adjacent Post Navigation

Add below post content:
- Button module → ϟ Previous Post Link + dynamic label
- Button module → ϟ Next Post Link + dynamic label

---

## Building an Archive Template

Archive templates render category pages, tag pages, and custom post type archives. The body area typically uses a Loop Builder layout.

### Pattern: Archive with Loop

```
Section
└── Row (Loop enabled on Column)
    └── Column (Loop: Query = current archive's post type, auto-filtered)
        ├── Image → ϟ Loop Featured Image
        ├── Heading → ϟ Loop Title
        ├── Text → ϟ Loop Excerpt
        └── Button → ϟ Loop Link (Read More)
```

**Key setting:** In Loop Builder query settings, set `Query Type = Current Query` — this automatically inherits the archive's native WP_Query (category filter, tag filter, etc.) without you manually configuring it.

---

## Import & Export

### Export Templates

`Divi → Theme Builder → Export (top menu) → Save JSON file`

File naming convention: `ClientName-Theme-Builder-v1.0.json`

### Import Templates

`Divi → Theme Builder → Import → Select JSON file`

⚠️ **Critical:** When importing a full design system, uncheck **"Import Presets"** in the import dialog. Presets should already be imported separately at the correct step. Importing presets via Theme Builder will overwrite your configured preset set.

### Import Order (Never Skip)

1. Theme Customizer settings
2. Design Variables ← **Save after this step**
3. Presets (Layout and Element)
4. **Theme Builder** ← this step
5. Library items

---

## Common Patterns

### Pattern: Global Default Template

One template covering the whole site with a shared header and footer:

```
Template: "Global Default"
Header: Main navigation header
Footer: Full-width footer with copyright
Body: (empty — page content comes from individual pages)
Assigned to: Entire Website
```

### Pattern: Blog Single Override

A narrower reading layout for posts only:

```
Template: "Blog Single"
Header: (inherit from Global — leave blank)
Body: Single-column post layout
Footer: (inherit from Global — leave blank)
Assigned to: All Posts (or specific post types)
```

### Pattern: WooCommerce Product Override

Custom product page layout:

```
Template: "WooCommerce Product"
Body: Custom product layout with gallery, price, add-to-cart
Assigned to: WooCommerce → Single Product
```

### Pattern: Landing Page (No Header/Footer)

Remove header and footer for a dedicated landing page:

```
Template: "Landing Page"
Header: (empty section — effectively removes header)
Footer: (empty section — effectively removes footer)
Body: Custom landing page design
Assigned to: Specific Page → [Your Landing Page]
```

---

## Troubleshooting

### Template Not Showing on Page

**Symptoms:** Changes in Theme Builder don't appear on the live page.

**Check:**
1. `Divi → Theme Builder → Save Divi Theme Builder Templates` — must click the top-level save, not just the Visual Builder save
2. Assignment rules — is the template actually assigned to that page/post type?
3. More specific template overriding this one? (check specificity hierarchy above)
4. Clear any page/server cache (WP Rocket, Cloudflare, browser cache)

### Header Appears Twice

**Cause:** Your active WordPress theme also outputs its own header, and Theme Builder is adding a second one on top.

**Fix:** The theme must declare `remove_action('wp_head', ...)` support for Divi to fully take over, or you're using a non-Divi-native theme. Use Divi as the active WordPress theme (not a child theme of another parent) to avoid this.

### Sticky Header Flickers on Scroll

**Cause:** Transition not set on the section.

**Fix:** Section → Design → Transform → Transition Duration: 300ms, Easing: ease.

### Dynamic Content Shows Placeholder Text

**Symptoms:** `[Post Title]` or similar placeholder visible in browser.

**Cause:** Preview mode vs. live view, or the template is assigned to a page with no matching dynamic data.

**Fix:** Test the template on an actual post/page matching its assignment. Dynamic tags only resolve in the assigned context (a post title tag won't resolve on a static page).

### Template Body Conflicts with Page Content

**Cause:** A Body layout in a template AND content in the page editor both try to render.

**Fix:** If you're using a custom Body layout in the template, leave the page editor blank (or vice versa). Don't double-up.

---

## Best Practices

1. **Always name templates clearly:** "Global Default", "Blog Single", "Shop Archive" — not "Template 1"
2. **Start with one global template:** Header + Footer only, Assigned to Entire Website. Add override templates for specific post types on top.
3. **Keep headers in Theme Builder, not page builder:** Headers built as sections on individual pages break consistency. Always use Theme Builder for site-wide header/footer.
4. **Save at the dashboard level:** After every session in Theme Builder, click "Save Divi Theme Builder Templates" at the dashboard — not just Save inside the Visual Builder.
5. **Export before major changes:** Keep a dated JSON backup: `ClientName-Theme-Builder-v1.1.json` before any structural edits.
6. **Use Design Variables in templates:** Header/footer templates inherit the same Design Variables as the rest of the site. Use `var(--et-global-color-primary)` etc. — never hardcode hex values in Theme Builder layouts.
7. **Test assignment conflicts:** After adding a new template, visit pages it should NOT affect to confirm specificity rules are working as expected.

---

## When NOT to Use Theme Builder

- **For one-off page layouts** — build those directly in the Visual Builder on the page itself
- **For admin-area styling** — Theme Builder only affects front-end templates
- **For plugin output you can't override** — some plugins (WooCommerce payment pages, membership portals) have hardcoded templates that ignore Divi

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Variables used in header/footer templates
- `preset-system-complete.md` - Applying presets to template layouts
- `../build/03_components.md` - Navigation patterns for headers

**Integration:**
- `loop-builder.md` - Use Loop Builder inside archive body templates
- `../workflows/design-system-import.md` - Correct import order for Theme Builder JSON
- `../workflows/starting-new-project.md` - Where Theme Builder fits in project setup
- `../workflows/deployment-checklist.md` - Exporting Theme Builder before launch

**Troubleshooting:**
- `../troubleshooting/common-issues.md` - Template-specific issues and fixes

---

**Last Updated:** 2026-03-08
**Status:** Active
**Divi Version:** 5.x
