# Starting a New Divi 5 Project

**Purpose:** Complete project kickoff workflow from client brief to first page
**Category:** Workflows
**Priority:** Critical
**Last Updated:** March 2026
**Estimated Time:** 3-4 hours for setup

---

## Overview

This guide covers everything BEFORE you start building in Divi - from project planning to environment setup to importing your design system. Once complete, proceed to `build/04_divi5_workflow.md` for the actual build process.

**This workflow assumes:**
- You have the Divi 5 Design System freebie (or your custom export)
- Client has provided brand assets (logo, colors, fonts)
- You're working in LocalWP for development

---

## Phase 1: Project Planning (30 min)

### Gather Client Information

**Brand Assets Checklist:**
- [ ] Logo files (PNG, SVG, different sizes)
- [ ] Brand colors (hex codes)
- [ ] Font choices (Google Fonts or custom)
- [ ] Existing brand guidelines (if any)
- [ ] Competitor websites they like
- [ ] Website goal (leads, sales, information)

**Content Inventory:**
- [ ] Page structure (sitemap)
- [ ] Written content (copy, about, services)
- [ ] Images/photos (professional or stock needed?)
- [ ] Contact information
- [ ] Social media links

**Technical Requirements:**
- [ ] Domain name (purchased or needed?)
- [ ] Hosting plan (recommended specs)
- [ ] Email hosting
- [ ] SSL certificate
- [ ] Third-party integrations (CRM, email marketing, etc.)

### Create Project Brief Document

**Document should include:**
```
Project Name: [Client Name] Website
Domain: www.clientsite.com
Timeline: [Start Date] to [Launch Date]

Brand Colors:
- Primary: #065cfe
- Accent: #3DD6C4
- Dark: #001533

Typography:
- Headings: Montserrat
- Body: Inter

Pages Needed:
1. Home
2. About
3. Services (list them)
4. Contact
5. Blog (optional)

Key Features:
- Contact form
- Service showcase
- Testimonials
- Photo gallery
- etc.

Third-Party Tools:
- Google Analytics
- Mailchimp
- etc.
```

---

## Phase 2: LocalWP Setup (30 min)

### Step 1: Create New Site in LocalWP

1. Open LocalWP
2. Click "+" (Create a new site)
3. **Site name:** `client-name-divi5` (lowercase, hyphens)
4. **Environment:**
   - PHP: 8.2 or 8.3
   - Web Server: Nginx
   - MySQL: 8.0+
5. WordPress Username/Password: Save in password manager
6. Click "Add Site"

### Step 2: Install Divi 5

**Download Divi:**
1. Go to https://www.elegantthemes.com/members-area/
2. Download Divi Theme (latest version)
3. Download Divi Builder Plugin (if using with another theme)

**Install in LocalWP:**
1. LocalWP → Your site → Admin
2. Appearance → Themes → Add New → Upload Theme
3. Choose divi.zip → Install → Activate
4. Verify Divi loads (purple "Divi" menu appears)

### Step 3: Essential WordPress Setup

**Settings → General:**
- [ ] Site Title: Client Name
- [ ] Tagline: (leave blank or set appropriately)
- [ ] WordPress Address/Site Address: (LocalWP sets automatically)

**Settings → Reading:**
- [ ] Set homepage to "A static page" (not posts)
- [ ] Select homepage (create blank page first)

**Settings → Permalinks:**
- [ ] Set to "Post name" (SEO-friendly URLs)

**Users → Add New:**
- [ ] Create client user account (if needed for review)
- [ ] Role: Editor or Administrator
- [ ] Send credentials securely

### Step 4: Install Essential Plugins

**Recommended plugins:**
```
Performance:
- WP Rocket (caching - premium)
OR
- LiteSpeed Cache (free alternative)

SEO:
- Yoast SEO OR Rank Math

Security:
- Wordfence Security (free)

Forms:
- Contact Form 7 OR WPForms

Backups:
- UpdraftPlus

Utilities:
- Safe SVG (upload SVG files)
- Duplicate Page (clone pages/posts)
```

**Install process:**
1. Plugins → Add New
2. Search for plugin name
3. Install → Activate
4. Configure as needed

---

## Phase 3: Import Design System (30-45 min)

### Step 1: Import Divi 5 Design System Freebie

**CRITICAL: Import in this exact order!**

#### 1. Theme Customizer Settings

Navigate to: **Divi → Theme Customizer**

1. Click import/export icon (top-left)
2. Choose file: `Divi-5-Launch-Freebie_Theme-Customizer.json`
3. Click "Import Divi Customizer Settings"
4. Click "Publish"

**What this imports:**
- Global typography defaults
- Site-wide colors
- Layout defaults

#### 2. Design Variables

Navigate to: **Any page in Visual Builder**

1. Click "Variable Manager" icon (left sidebar)
2. Click import/export icon
3. Import tab → Choose file: `Divi-5-Launch-Freebie_Global-Variables.json`
4. Click "Import Variables"
5. **CRITICAL:** Click "Save Variables" ← Don't forget!

**What this imports:**
- Brand colors with HSL relatives
- Typography variables (clamp-based)
- Spacing system
- Text/Image/URL variables

#### 3. Presets

Still in Visual Builder:

1. Click "Preset Manager" icon (left sidebar)
2. Click import/export icon
3. Import tab → Choose file: `Divi-5-Launch-Freebie_Presets.json`
4. Click "Import Presets"
5. Wait 30-60 seconds (400+ presets)

**What this imports:**
- Element Presets (buttons, text, blurbs, etc.)
- Option Group Presets (typography, spacing, borders)
- Nested preset relationships

#### 4. Theme Builder Templates

Navigate to: **Divi → Theme Builder**

1. Click import/export icon
2. Import tab → Choose file: `Divi-5-Launch-Freebie_Theme-Builder-Templates.json`
3. **UNCHECK "Import Presets"** (already imported!)
4. Click "Import Divi Theme Builder Templates"
5. Click "Save Changes"

**What this imports:**
- Global header template
- Global footer template
- Blog post template
- Archive templates

#### 5. Library Sections (Optional)

Navigate to: **Divi → Divi Library**

Choose ONE of these files to import:
- `All-Sections_Layouts.json` - Grouped sections (recommended)
- `All-Individual-Sections.json` - 350+ individual sections
- `Pages.json` - 24 complete page layouts

1. Click import/export icon
2. Choose your file
3. **UNCHECK "Import Presets"**
4. Click "Import Divi Builder Layouts"

**Verify import:**
- Visual Builder → Add section → "Add From Library"
- Should see imported sections

📖 **Full import guide:** `workflows/design-system-import.md`

### Step 2: Rebrand with Client Assets

**Update Design Variables:**

**Colors:**
1. Variable Manager → Colors tab
2. Find `primary-color` → Change to client's primary color
3. Find `accent-color` → Change to client's accent
4. Relative colors update automatically ✓

**Typography:**
1. Variable Manager → Text/Numbers
2. Update font families:
   - Headings → Client's heading font
   - Body → Client's body font
3. Keep clamp() formulas, adjust if needed

**Text Variables:**
1. Variable Manager → Text
2. Update:
   - Company name
   - Address
   - Phone
   - Email
   - Taglines

**Images:**
1. Variable Manager → Images
2. Upload client logo (replace default)
3. Upload favicon
4. Upload any brand imagery

**URLs:**
1. Variable Manager → URLs
2. Update social media links
3. Update contact form URL

📖 **Rebranding guide:** `workflows/design-system-import.md` (Method 1, 2, or 3)

---

## Phase 4: Initial Setup in Divi (45 min)

### Step 1: Configure Divi Theme Options

Navigate to: **Divi → Theme Options**

**General Tab:**
- [ ] Logo: Upload client logo
- [ ] Favicon: Upload (32x32px PNG or ICO)

**Navigation:**
- [ ] Menu: Set primary menu location
- [ ] Enable fixed navigation: Yes (for sticky header)

**Layout:**
- [ ] Enable responsive images: Yes
- [ ] Website maximum width: 1200px (or per design)

**Builder:**
- [ ] Enable Classic Editor: Your preference
- [ ] Enable Code Module: Yes (if needed)

**Updates:**
- [ ] Enter Elegant Themes username and API key
- [ ] Enable automatic updates: Recommended

### Step 2: Create Homepage

**Create blank page:**
1. Pages → Add New
2. Title: "Home"
3. Click "Use The Divi Builder"
4. "Build From Scratch"

**Add hero section:**
1. Add Section → Add Row → Add Module
2. Import from Library OR build custom using presets
3. Apply your rebranded variables and presets

**Set as homepage:**
1. Settings → Reading
2. Static page → Select "Home"
3. Save

### Step 3: Create Header & Footer

**Header (if customizing Theme Builder template):**
1. Divi → Theme Builder
2. Edit Global Header template
3. Rebrand with client logo, colors
4. Save

**Footer:**
1. Divi → Theme Builder
2. Edit Global Footer template
3. Update:
   - Company info
   - Social links
   - Copyright year
   - Contact details
4. Save

### Step 4: Create Primary Navigation

**Create menu:**
1. Appearance → Menus
2. Create Menu → Name: "Primary Menu"
3. Add pages:
   - Home
   - About
   - Services
   - Contact
4. Assign to "Primary Menu" location
5. Save

---

## Phase 5: Set Defaults & Standards (30 min)

### Step 1: Set Default Presets

**In Preset Manager:**

1. Buttons → Find "Button - Primary" → Click star ⭐ (Set as Default)
2. Text → Find "Body Text" → Set as Default
3. Heading → Set H1, H2, H3 defaults
4. Blurb → Set default card style

**Result:** Every new module auto-uses your presets

### Step 2: Create Color Palette

**Divi → Theme Customizer → Colors:**
- Add your 5-8 brand colors to palette
- These appear in color pickers site-wide

### Step 3: Configure Responsive Breakpoints

**If needed (usually defaults are fine):**

1. Visual Builder → Settings → Responsive Breakpoints
2. Verify 7-point system
3. Adjust if client has specific needs
4. Most sites use: Mobile (< 767px), Tablet (768-980px), Desktop (1280px+)

### Step 4: Document Your Setup

**Create README.txt in project folder:**
```
PROJECT: Client Name Website
STARTED: [Date]
DESIGNER: Your Name

BRAND COLORS:
Primary: #065cfe
Accent: #3DD6C4
Dark: #001533

FONTS:
Headings: Montserrat
Body: Inter

DESIGN SYSTEM:
Based on: Divi 5 Design System Freebie v1.0
Customized: [Date]
Export: [Your-Client-Design-System-v1.0.json]

NOTES:
- Hero uses clamp() for responsive scaling
- Buttons are 16px static (iOS zoom prevention)
- Footer text is 14px all devices
- Primary CTA color: Accent teal
```

---

## Phase 6: Quality Checks (30 min)

### Verify Import Success

**Check Variables:**
- [ ] Variable Manager shows all colors
- [ ] Typography variables exist
- [ ] Spacing system present
- [ ] Test one variable in a module

**Check Presets:**
- [ ] Preset Manager shows 400+ presets
- [ ] Apply preset to module - works?
- [ ] Default presets set (star icons visible)

**Check Theme Builder:**
- [ ] Header shows on frontend
- [ ] Footer shows on frontend
- [ ] Blog template exists

**Check Library:**
- [ ] Visual Builder → Add From Library shows sections
- [ ] Can preview sections
- [ ] Sections use your variables/presets

### Test Responsive

**View homepage at different sizes:**
- [ ] Desktop (1440px) - looks good
- [ ] Tablet (768px) - no breaking
- [ ] Mobile (375px) - readable, functional
- [ ] Very small (320px) - minimum test

**Use Responsive Editor:**
- [ ] Visual Builder → Responsive toggle
- [ ] Check all 7 breakpoints
- [ ] Verify text scales properly
- [ ] Buttons are 44px min on mobile

### Accessibility Check

**Basic checks:**
- [ ] Color contrast passes (use Inspector)
- [ ] Headings in proper order (H1 → H2 → H3)
- [ ] Links have descriptive text
- [ ] Images have alt text
- [ ] Form inputs have labels

---

## Phase 7: Export Your Customized System (15 min)

**Now that you've rebranded the freebie, export YOUR version:**

### Export All Components

**1. Design Variables:**
- Variable Manager → Export → Save as: `ClientName-Variables-v1.0.json`

**2. Presets:**
- Preset Manager → Export → Save as: `ClientName-Presets-v1.0.json`

**3. Theme Builder:**
- Theme Builder → Export → Save as: `ClientName-Theme-Builder-v1.0.json`

**4. Key Sections:**
- Divi Library → Select your customized sections
- Export → Save as: `ClientName-Sections-v1.0.json`

### Create README

**Include in export folder:**
```
CLIENT NAME - DIVI 5 DESIGN SYSTEM
Version 1.0 - [Date]

IMPORT ORDER:
1. ClientName-Variables-v1.0.json → Variable Manager
2. ClientName-Presets-v1.0.json → Preset Manager
3. ClientName-Theme-Builder-v1.0.json → Theme Builder
4. ClientName-Sections-v1.0.json → Divi Library

BRAND COLORS:
- Primary: #065cfe
- Accent: #3DD6C4
- Dark: #001533

TYPOGRAPHY:
- Headings: Montserrat
- Body: Inter

USAGE NOTES:
- All spacing uses clamp() for responsiveness
- Button font size is static 16px
- Footer text is 14px all devices
- Body text is 18px static (no clamp)
```

**Store everything in:**
```
ClientName-Design-System-v1.0/
├─ ClientName-Variables-v1.0.json
├─ ClientName-Presets-v1.0.json
├─ ClientName-Theme-Builder-v1.0.json
├─ ClientName-Sections-v1.0.json
└─ README.txt
```

---

## Next Steps

✅ **Project is now set up!**

**Proceed to actual building:**

1. **Read:** `build/04_divi5_workflow.md` - Complete 6-step build process
2. **Reference:** `quick-reference.md` - Common tasks
3. **Use:** `features/preset-system-complete.md` - Preset workflows
4. **Check:** `audits/` - Quality audits before delivery

**Your checklist before building pages:**
- [x] LocalWP site created
- [x] Divi 5 installed
- [x] Design system imported
- [x] Rebranded with client assets
- [x] Default presets set
- [x] Homepage created
- [x] Header/footer configured
- [x] Navigation menu created
- [x] Responsive tested
- [x] Customized system exported

**Estimated time so far: 3-4 hours**

**Time to build pages: See `04_divi5_workflow.md`**

---

## Troubleshooting

### Variables Don't Show After Import

**Solution:**
1. Did you click "Save Variables" after import?
2. Refresh Visual Builder
3. Clear browser cache (Cmd/Ctrl + Shift + R)
4. Re-import if needed

### Presets Import But Don't Apply

**Solution:**
1. Variables must be imported BEFORE presets
2. If presets reference missing variables, won't work fully
3. Import variables first, then presets
4. Re-apply presets to modules

### LocalWP Site Won't Start

**Solution:**
1. Restart LocalWP
2. Check port conflicts (80, 443)
3. Verify LocalWP has file permissions
4. Check system resources (RAM, disk space)

### Theme Builder Templates Don't Show

**Solution:**
1. Divi → Theme Builder → Save Changes
2. Clear Divi cache (Divi → Divi → Clear Cache)
3. Verify templates are "enabled" not just created

---

## Related Files

**Prerequisites:**
- `workflows/design-system-import.md` - Detailed import steps
- `build/01_system_setup.md` - Design system standards

**Next Steps:**
- `build/04_divi5_workflow.md` - Building pages workflow
- `features/preset-system-complete.md` - Using presets
- `features/design-variables.md` - Working with variables
- `resources/template-library.md` - Reusable layouts and components

**Reference:**
- `quick-reference.md` - Common tasks lookup
- `audits/` - Quality checks before launch

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x (Official Release)
