# Common Issues & Solutions - Divi 5 Troubleshooting

**Purpose:** Quick solutions to the most common Divi 5 problems
**Category:** Troubleshooting
**Priority:** Critical
**Last Updated:** March 2026
**Divi Version:** 5.x

---

## Overview

This guide covers the most common issues you'll encounter when building Divi 5 sites. Each problem includes:
- Symptoms (what you see)
- Likely causes
- Step-by-step fixes
- Prevention tips

**Quick Tip:** Use your browser's Find function (Cmd/Ctrl + F) to search for your specific issue.

---

## 🔴 Visual Builder Issues

### Issue: "My Changes Aren't Showing"

**Symptoms:**
- Made changes in Visual Builder
- Clicked Save
- Frontend looks the same
- Changes visible in Visual Builder but not on live site

**Likely Causes:**
- Cached CSS
- Browser cache
- CDN cache
- Caching plugin active

**Solutions (try in order):**

**1. Clear Divi Cache:**
```
WordPress Admin → Divi → Support Center → Clear Static CSS File Cache
OR
Visual Builder → Three-dot menu → Clear Divi Cache
```

**2. Hard Refresh Browser:**
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

**3. Clear Caching Plugin:**
```
If using WP Rocket: WP Rocket → Clear Cache
If using LiteSpeed: LiteSpeed Cache → Purge All
If using W3 Total Cache: Performance → Purge All Caches
```

**4. Disable Caching Temporarily:**
```
Deactivate caching plugin
Test changes
Reactivate plugin
Clear cache again
```

**5. Check for Preset Override:**
```
Use Inspector tool to see active styles
Preset might be overriding your manual changes
Either edit the preset or remove it from module
```

**Prevention:**
- Clear cache after every major change
- Disable caching plugins during development
- Use Incognito/Private browsing for testing

---

### Issue: "Visual Builder Won't Load"

**Symptoms:**
- Click "Use Visual Builder" → Blank screen
- Spinning loader never stops
- "Enable Visual Builder" doesn't work
- Error in browser console

**Solutions:**

**1. Check Browser Console:**
```
Open DevTools (F12)
Check Console tab for errors
Look for plugin conflicts or JavaScript errors
```

**2. Disable Plugins:**
```
Deactivate ALL plugins except Divi
Try Visual Builder again
If works: Reactivate one by one to find culprit
Common culprits: Security plugins, Page builders, Optimization plugins
```

**3. Clear Browser Data:**
```
Clear cookies for your site
Clear cached images/files
Try different browser (Chrome, Firefox, Safari)
```

**4. Increase PHP Memory:**
```
Edit wp-config.php:
define('WP_MEMORY_LIMIT', '256M');

Or add to .htaccess:
php_value memory_limit 256M
```

**5. Check File Permissions:**
```
wp-content/et-cache/ should be writable (755 or 777)
wp-content/uploads/ should be writable (755 or 777)
```

**6. Try Classic Editor:**
```
Edit page
Switch to "Use The Divi Builder" (backend)
If this works, issue is Visual Builder specific
```

**Prevention:**
- Keep WordPress, Divi, and plugins updated
- Test plugin compatibility before installing
- Use quality hosting with adequate PHP limits

---

### Issue: "Inspector Not Showing Settings"

**Symptoms:**
- Open Inspector panel
- Panel is empty or incomplete
- Can't see applied presets
- Missing variable information

**Solutions:**

**1. Refresh Visual Builder:**
```
Save and exit Visual Builder
Re-enter Visual Builder
Inspector should reload with full data
```

**2. Check Element Selection:**
```
Inspector only shows data for selected element
Make sure you've clicked the Section/Row/Column
Blue outline indicates selection
```

**3. Clear Divi Cache:**
```
Divi → Support → Clear Static CSS
Reload Visual Builder
```

**4. Browser Extension Conflict:**
```
Disable browser extensions (especially ad blockers)
Try in Incognito mode
If works: Find conflicting extension
```

---

## 🔴 Layout & Design Issues

### Issue: "Buttons Overlapping When Browser Resizes"

**Symptoms:**
- Two buttons side by side
- At ~600px width, buttons overlap
- Text gets cut off
- Buttons don't wrap to new line

**Solutions:**

**1. Enable Layout Wrapping:**
```
Row Settings (containing buttons):
- Layout Style: Flex
- Layout Direction: Row
- Layout Wrapping: Wrap ← CRITICAL
- Horizontal Gap: 24px
- Justify Content: Center

This allows buttons to wrap to new line when space runs out
```

**2. Add Max-Width Constraint:**
```
Row Settings:
- Max Width: clamp(320px, 90vw, 600px)
- Margin: 0 auto

Prevents overlap zone from occurring
```

**3. Mobile Override:**
```
Phone breakpoint (< 767px):
- Layout Direction: Column
- Buttons stack vertically
```

**4. Button Settings:**
```
Each Button Module:
- Custom CSS: white-space: nowrap
- This prevents text wrapping INSIDE button
```

**Prevention:**
- Always enable Layout Wrapping for button groups
- Test resize behavior during development
- Use responsive breakpoint overrides

📖 **Full guide:** `features/flexbox-layout-system.md` - Layout Wrapping section

---

### Issue: "Cards Have Different Heights"

**Symptoms:**
- Row of 3-4 cards
- Different content lengths
- Cards look uneven
- Bottom edges don't align

**Solutions:**

**1. Use CSS Grid (Best):**
```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: repeat(3, 1fr)
- Row Heights: Equal Height Rows
- Horizontal Gap: clamp(16px, 3vw, 48px)
- Vertical Gap: clamp(16px, 3vw, 48px)

Result: Perfect equal heights automatically
```

**2. Use Flexbox Alternative:**
```
Row Settings:
- Layout Style: Flex
- Layout Direction: Row
- Align Items: Stretch ← This equalizes heights
- Layout Wrapping: Wrap

Column Settings:
- Width: 33.33% (or appropriate %)
- No min-height or max-height set

Module Settings:
- Remove any fixed heights
```

**Prevention:**
- Use Grid for card layouts by default
- Don't set fixed heights on cards
- Let content determine height naturally

📖 **Full guide:** `quick-reference.md` - Equal Height Cards

---

### Issue: "Section Background Won't Change"

**Symptoms:**
- Change background color in settings
- Nothing happens
- Old background persists
- Can't see new color

**Solutions:**

**1. Check for Preset Override:**
```
Use Inspector tool:
- Select the Section
- Check "Applied Presets"
- Preset might have background color set
- Either edit the preset OR remove preset from section
```

**2. Check Background Image:**
```
Section Settings → Background:
- If background IMAGE is set, it covers background COLOR
- Remove image OR set Color on image overlay
```

**3. Check Z-Index Stacking:**
```
Section Settings → Advanced → Position:
- Check if another element is covering section
- Adjust z-index if needed
```

**4. Clear Divi Cache:**
```
Divi → Support → Clear Static CSS
Hard refresh browser (Cmd/Ctrl + Shift + R)
```

**Prevention:**
- Use Inspector to identify preset conflicts
- Edit presets instead of individual sections
- Document which sections use which presets

---

### Issue: "Text Too Small on Mobile"

**Symptoms:**
- Desktop looks fine
- Mobile text feels tiny
- Client complains about readability
- Tempted to use clamp() for body text

**Solutions:**

**1. Check Your KB Philosophy:**
```
Body text should be 18px STATIC on desktop
Mobile: 16px static (with breakpoint override)

DO NOT use clamp() for body text!
```

**2. Set Proper Mobile Override:**
```
Text Module → Design → Text:
Desktop (default): 18px
Phone (< 767px): 16px (override)
Line height: 1.7-1.8 for readability
```

**3. Increase Line Height Instead:**
```
Instead of increasing font size:
- Increase line-height to 1.8-2.0
- Increase paragraph spacing
- Add more padding around text blocks
```

**4. Check Font Choice:**
```
Some fonts appear smaller at same px size
Try: Inter, Open Sans, Lato (good readability)
Avoid: Ultra-thin weights on mobile
```

**Prevention:**
- Follow KB clamp() philosophy
- Body text = always static 18px/16px
- Use clamp() only for display headings
- Test on actual mobile devices

📖 **Full philosophy:** `features/advanced-units.md` - Clamp Philosophy

---

### Issue: "Elements Not Centering"

**Symptoms:**
- Set Justify Content: Center
- Elements don't center
- Stuck on left or right
- Centering works on one axis but not other

**Solutions:**

**1. Check Layout Direction:**
```
For HORIZONTAL centering:
- Layout Direction: Row
- Justify Content: Center ← Centers horizontally

For VERTICAL centering:
- Layout Direction: Column  
- Justify Content: Center ← Centers vertically
```

**2. Use Both Properties:**
```
To center both ways:
- Justify Content: Center (main axis)
- Align Items: Center (cross axis)

Example for Row direction:
- Justify Content: Center (horizontal)
- Align Items: Center (vertical)
```

**3. Check Parent Container:**
```
Parent must have Layout Style: Flex
Child won't center if parent is Block layout
```

**4. Text Alignment (Different):**
```
Text alignment ≠ Flexbox centering

For text centering:
- Design → Text → Alignment → Center
```

**5. Max-Width + Margin Auto:**
```
Alternative for content blocks:
- Max Width: clamp(320px, 90vw, 800px)
- Margin: 0 auto
- This centers the element within parent
```

**Prevention:**
- Understand main axis vs cross axis
- Row = horizontal main, Column = vertical main
- Use Inspector to verify Layout Style = Flex

📖 **Full guide:** `features/flexbox-layout-system.md`

---

## 🔴 Preset & Variable Issues

### Issue: "Preset Not Applying to Module"

**Symptoms:**
- Assign preset to module
- No visual change
- Preset appears in dropdown
- Manual styling works fine

**Solutions:**

**1. Variables Must Exist First:**
```
Problem: Preset references var(--color-primary)
If variable doesn't exist: Preset won't work

Solution:
- Variable Manager → Verify all referenced variables exist
- Create missing variables
- Re-apply preset
```

**2. Manual Overrides Block Preset:**
```
Problem: Manual styles override preset

Solution:
- Use Inspector to see manual overrides
- Remove manual styling
- Apply preset
- Preset should now work
```

**3. Clear Divi Cache:**
```
Divi → Support → Clear Static CSS
Visual Builder → Clear Divi Cache
Hard refresh browser
```

**4. Re-Save Preset:**
```
Preset Manager → Find preset → Edit → Save
Sometimes just re-saving fixes the issue
```

**5. Check Nested OGPs:**
```
If Element Preset uses nested OGPs:
- Verify OGPs exist
- Verify OGPs reference valid variables
- One broken OGP can break entire Element Preset
```

**Prevention:**
- Import variables BEFORE importing presets
- Test presets after import
- Don't manually override preset-based modules

📖 **Full guide:** `features/preset-system-complete.md`

---

### Issue: "Variable Changes Don't Update Site"

**Symptoms:**
- Change variable value
- Click Save
- Site doesn't reflect changes
- Old values persist

**Solutions:**

**1. Save Variables (Critical):**
```
Variable Manager:
- Make changes
- Click "Save Variables" button ← REQUIRED
- Not auto-saved!

Common mistake: Edit variables, close panel without saving
```

**2. Clear All Caches:**
```
1. Divi → Support → Clear Static CSS
2. Clear browser cache (Cmd/Ctrl + Shift + R)
3. Clear caching plugin
4. If using CDN: Purge CDN cache
```

**3. Check Variable Syntax:**
```
Correct: var(--color-primary)
Wrong: var(color-primary)
Wrong: --color-primary (missing var())
```

**4. Verify Variable References:**
```
Use Inspector to see if modules actually use the variable
If hardcoded color: Find & Replace to adopt variable
```

**Prevention:**
- Always click "Save Variables" after editing
- Clear cache immediately after variable changes
- Use Inspector to verify variable usage

📖 **Full guide:** `features/design-variables.md`

---

### Issue: "Can't Find My Preset"

**Symptoms:**
- Created preset earlier
- Now can't find it
- Not in Preset Manager
- Not in module dropdown

**Solutions:**

**1. Filter by Correct Module Type:**
```
Preset Manager → Filter dropdown
- Make sure you're filtering by correct module
- Button presets won't show when filtering "Text"
```

**2. Check Preset Type:**
```
Element Presets: Appear in module dropdowns
Option Group Presets: Appear in option group sections only

Looking in wrong place?
```

**3. Search by Name:**
```
Preset Manager → Search box
Type preset name
Results show all matching presets
```

**4. Preset Might Be Deleted:**
```
Check if accidentally deleted
No undo for deleted presets
Restore from backup/export if available
```

**Prevention:**
- Name presets clearly and consistently
- Export preset library regularly
- Use versioned naming (Button-Primary-v1)

---

## 🔴 Performance Issues

### Issue: "Site Loading Slowly"

**Symptoms:**
- PageSpeed Insights shows red scores
- LCP > 4 seconds
- Images take forever to load
- Client complains about speed

**Solutions:**

**1. Optimize Images FIRST:**
```
Most common cause: Huge image files

Fix:
- Use WebP format (not JPG/PNG)
- Resize images before upload
- Desktop hero: 1920px wide max
- Mobile images: 800px wide max
- Use Imagify or ShortPixel plugin
```

**2. Enable Caching:**
```
Install WP Rocket or LiteSpeed Cache
Enable:
- Page caching
- Browser caching
- GZIP compression
- Minify CSS/JS
```

**3. Lazy Load Images:**
```
Divi → Theme Options → Builder → Performance:
- Enable lazy loading
- Defer jQuery
- Reduce HTTP requests
```

**4. Check LCP Element:**
```
PageSpeed Insights → Diagnostics
Find Largest Contentful Paint element
Usually: Hero image

Fix:
- Optimize that image specifically
- Consider CSS background instead
- Preload critical images
```

**5. Limit Custom CSS:**
```
Too much custom CSS slows rendering
Use presets instead of custom CSS where possible
Consolidate repeated styles into presets
```

**Prevention:**
- Optimize images BEFORE uploading
- Use WebP format by default
- Enable caching from day one
- Monitor PageSpeed regularly

📖 **Full guide:** `performance/lcp-optimization.md`

---

### Issue: "Mobile Site Extremely Slow"

**Symptoms:**
- Desktop loads fine
- Mobile takes 10+ seconds
- Mobile PageSpeed: Red
- Desktop PageSpeed: Green

**Solutions:**

**1. Mobile Images Too Large:**
```
Divi loads SAME images on mobile
2MB hero image kills mobile

Fix:
- Use responsive image srcset
- Upload multiple sizes
- Divi auto-generates responsive versions
- Verify in DevTools Network tab
```

**2. Too Many Animations:**
```
Scroll effects kill mobile performance

Fix:
- Disable scroll effects on mobile breakpoint
- Use simpler animations
- Reduce animated elements
```

**3. Excessive Sections:**
```
20+ sections on one page = slow mobile

Fix:
- Split into multiple pages
- Use "Load More" for blog
- Lazy load sections below fold
```

**Prevention:**
- Test on actual mobile device (not just DevTools)
- Optimize for mobile FIRST
- Use Mobile-First design approach

---

## 🔴 Form Issues

### Issue: "Contact Form Not Sending"

**Symptoms:**
- Fill out form
- Click submit
- Nothing happens OR error message
- No email received

**Solutions:**

**1. Check SMTP Settings:**
```
Default PHP mail() often fails

Fix:
- Install WP Mail SMTP plugin
- Configure with Gmail or email provider
- Test with "Send Test Email" feature
```

**2. Check Form Settings:**
```
Divi Form Module:
- Verify email address is correct
- Check Success/Error messages configured
- Ensure all required fields marked
```

**3. Check Spam Folder:**
```
Form emails often go to spam
Add sender address to safe list
Use proper FROM address (not noreply@)
```

**4. Plugin Conflict:**
```
Try Contact Form 7 or WPForms instead
If those work: Issue is with Divi form module
If those fail too: Server email issue
```

**5. Server Configuration:**
```
Check with hosting provider:
- Is mail() function enabled?
- Any email sending limits?
- Port 25 blocked? (use 587 with SMTP)
```

**Prevention:**
- Use SMTP plugin from start
- Test forms before launching
- Set up form submission notifications
- Keep backup of form data (plugin)

---

### Issue: "Form Inputs Too Small on Mobile (iOS Zoom)"

**Symptoms:**
- User taps input on iPhone
- Screen zooms in automatically
- Annoying user experience
- Client complains

**Solutions:**

**1. Minimum 16px Font Size:**
```
iOS zooms if input font < 16px

Fix:
Form Module → Design → Fields:
- Font Size: 16px (minimum)
- Never use 14px or 15px on forms
```

**2. Check Line Height:**
```
Tall line-height can trigger zoom too

Set:
- Line Height: 1.4-1.6
- Not too tall, not too short
```

**Prevention:**
- Always 16px minimum for form inputs
- Test on actual iPhone
- This is in your KB clamp() philosophy!

📖 **Reference:** `features/advanced-units.md` - Clamp Philosophy

---

## 🔴 Responsive Issues

### Issue: "Layout Breaks at Specific Width"

**Symptoms:**
- Works on mobile (375px)
- Works on desktop (1440px)
- Breaks at 850px or random size
- Elements overlap or stack wrong

**Solutions:**

**1. Identify Breakpoint:**
```
850px falls in Tablet range (768-980px)

Fix:
- Open Responsive Editor
- Target Tablet breakpoint
- Adjust settings for that range
- Add responsive overrides
```

**2. Check Layout Wrapping:**
```
Row Settings:
- Layout Wrapping: Wrap
- Allows content to flow naturally
```

**3. Adjust Column Widths:**
```
Desktop: 33.33% (3 columns)
Tablet: 50% (2 columns) ← Add this breakpoint
Mobile: 100% (1 column)
```

**4. Test All 7 Breakpoints:**
```
Use Responsive Editor to view:
- Phone (< 479px)
- Phone Wide (480-767px)
- Tablet (768-980px) ← Your problem zone
- Tablet Wide (981-1279px)
- Desktop (1280-1919px)
- Widescreen (1920-2559px)
- Ultra Wide (2560px+)
```

**Prevention:**
- Test responsive during build (not after)
- Use Responsive Editor frequently
- Check all major breakpoints

📖 **Full guide:** `features/responsive-breakpoints.md`

---

### Issue: "Content Touching Screen Edges on Mobile"

**Symptoms:**
- Text right against screen edge
- No breathing room
- Looks cramped
- Client says "too tight"

**Solutions:**

**1. Add Section Padding:**
```
Section Settings:
- Padding Left/Right: clamp(20px, 5vw, 40px)

This adds responsive padding
```

**2. Add Row Max-Width:**
```
Row Settings:
- Max Width: clamp(320px, 90vw, 1200px)
- Margin: 0 auto

90vw leaves 5% space on each side
```

**3. Add Module Margins:**
```
Module Settings:
- Margin Left: var(--ui-sm)
- Margin Right: var(--ui-sm)
```

**Prevention:**
- Use clamp() for section padding
- Default row max-width with 90vw
- Never use 100% width without padding

📖 **Pattern:** `features/advanced-units.md` - Max-Width section

---

## 🔴 Browser Compatibility Issues

### Issue: "Works in Chrome, Broken in Safari"

**Symptoms:**
- Perfect in Chrome
- Safari shows layout issues
- Specifically Flexbox problems
- iPhone users report issues

**Solutions:**

**1. Add Vendor Prefixes:**
```
Custom CSS:
display: -webkit-flex;
display: flex;

Safari needs -webkit- prefix sometimes
```

**2. Check Flex Properties:**
```
Safari is strict about flex syntax

Instead of: flex: 1
Use explicitly: flex-grow: 1; flex-shrink: 1; flex-basis: 0;
```

**3. Test on Actual Safari:**
```
Don't trust Chrome DevTools "Safari mode"
Test on real Safari browser
Or use BrowserStack
```

**4. Check CSS Grid Compatibility:**
```
Old Safari versions have limited Grid support
Use Flexbox for older iOS support
```

**Prevention:**
- Test in Safari early
- Use standard CSS (avoid cutting-edge features)
- Check caniuse.com for compatibility

---

### Issue: "Looks Different in Firefox"

**Symptoms:**
- Chrome/Safari look identical
- Firefox renders differently
- Usually spacing or alignment off

**Solutions:**

**1. Check Box Model:**
```
Firefox calculates box model differently

Fix:
Use box-sizing: border-box (Divi default)
Avoid mixing padding + width percentages
```

**2. Verify Flexbox Direction:**
```
Firefox sometimes needs explicit direction

Add:
- Flex Direction: Row (be explicit)
```

**3. Clear Firefox Cache:**
```
Cmd/Ctrl + Shift + Delete
Clear everything
Hard refresh
```

**Prevention:**
- Test in Firefox during build
- Use Divi's built-in styles (they're tested)
- Avoid complex custom CSS

---

## 🔴 Module-Specific Issues

### Issue: "Slider/Carousel Not Working"

**Symptoms:**
- Slider module added
- Images show but don't slide
- Navigation arrows don't work
- Autoplay doesn't start

**Solutions:**

**1. Check JavaScript Errors:**
```
Open browser console (F12)
Look for red errors
Usually plugin conflict
```

**2. Disable Conflicting Plugins:**
```
Common culprits:
- Other slider plugins
- Lazy load plugins (except Divi's)
- JavaScript minification plugins

Disable one by one
```

**3. Re-save Slider Settings:**
```
Slider Module → Settings
Toggle Autoplay off/on
Save
Often fixes stuck sliders
```

**4. Check if jQuery Loaded:**
```
Console: type "jQuery"
Should return function
If undefined: jQuery not loading
```

**Prevention:**
- Test sliders immediately after adding
- Disable lazy load for slider images
- Keep jQuery in header (not footer)

---

### Issue: "Menu Module Links Not Working"

**Symptoms:**
- Added Menu module
- Menu displays
- Links don't navigate
- Clicks do nothing

**Solutions:**

**1. Check Menu Assignment:**
```
Appearance → Menus
Menu module is set to "Primary Menu"?
Is "Primary Menu" actually assigned?
Verify menu items have URLs
```

**2. Check for Overlay Blocking:**
```
Another element might be covering menu

DevTools → Inspect menu
Check z-index values
Adjust z-index if needed
```

**3. JavaScript Conflict:**
```
Disable plugins one by one
Find conflicting plugin
Usually page builder or menu plugins
```

**Prevention:**
- Create menu BEFORE adding Menu module
- Test menu links immediately
- Use Theme Builder for header (more reliable)

---

## 🔴 Import/Export Issues

### Issue: "Imported Design System Not Working"

**Symptoms:**
- Imported Variables/Presets
- Nothing changed
- Presets don't show
- Variables missing

**Solutions:**

**1. Check Import Order (CRITICAL):**
```
MUST import in this exact order:
1. Theme Customizer settings
2. Design Variables ← SAVE VARIABLES after!
3. Presets
4. Theme Builder
5. Library items

Wrong order = broken imports
```

**2. Did You Click "Save Variables"?:**
```
Most common mistake!

Variable Manager:
- Import variables
- Click "Save Variables" ← REQUIRED
- Not auto-saved!
```

**3. Clear All Caches:**
```
After importing:
- Clear Divi cache
- Clear browser cache
- Clear caching plugin
- Reload Visual Builder
```

**4. Verify Files Imported:**
```
Variable Manager → Check variables exist
Preset Manager → Check presets exist
Theme Builder → Check templates exist
```

**Prevention:**
- Follow import order religiously
- Always click "Save Variables"
- Clear cache after every import
- Verify each step before continuing

📖 **Full guide:** `workflows/design-system-import.md`

---

### Issue: "Export File Won't Import"

**Symptoms:**
- Export from one site
- Try to import on another
- "Import Failed" error
- File seems corrupted

**Solutions:**

**1. Check File Size:**
```
If > 10MB: Too large

Fix:
- Export in smaller chunks
- Export presets separately
- Don't include images in export
```

**2. Check File Extension:**
```
Must be .json
If .txt or other: Rename to .json
```

**3. Try Different Browser:**
```
Sometimes browser blocks large uploads
Try Chrome if using Safari
Try Firefox if using Chrome
```

**4. Increase Upload Limit:**
```
WordPress Admin → Divi → Theme Options
Check max upload size
Or add to wp-config.php:
@ini_set('upload_max_size', '64M');
```

**Prevention:**
- Keep exports under 10MB
- Export components separately
- Test exports by importing on staging

---

## 🔴 Database & Server Issues

### Issue: "Error Establishing Database Connection"

**Symptoms:**
- Site shows database error
- Can't access WordPress admin
- White screen with error message

**Solutions (LocalWP):**

**1. Restart LocalWP Site:**
```
LocalWP → Your site → Stop
Wait 5 seconds
Start
```

**2. Check MySQL Running:**
```
LocalWP → Your site → Database tab
If not running: Start MySQL service
```

**3. Verify Database Credentials:**
```
Right-click site → Reveal in Finder/Explorer
Edit wp-config.php
Check DB_NAME, DB_USER, DB_PASSWORD match LocalWP
```

**Solutions (Production):**

**1. Check with Hosting:**
```
MySQL server might be down
Contact hosting support
Check cPanel for MySQL status
```

**2. Repair Database:**
```
Add to wp-config.php:
define('WP_ALLOW_REPAIR', true);

Visit: yourdomain.com/wp-admin/maint/repair.php
Run repair
REMOVE line from wp-config after!
```

**Prevention:**
- Regular database backups
- Monitor server uptime
- Keep WordPress updated

---

### Issue: "500 Internal Server Error"

**Symptoms:**
- Blank white screen
- "500 Internal Server Error" message
- No other details

**Solutions:**

**1. Enable Debug Mode:**
```
Edit wp-config.php:
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

Check wp-content/debug.log for errors
```

**2. Check .htaccess:**
```
Rename .htaccess to .htaccess.old
If site works: .htaccess was corrupted
Regenerate: Settings → Permalinks → Save
```

**3. Increase PHP Memory:**
```
Add to wp-config.php:
define('WP_MEMORY_LIMIT', '256M');

Or contact hosting to increase limit
```

**4. Disable Plugins via FTP:**
```
Connect via FTP
Rename wp-content/plugins to plugins-old
If site works: Plugin conflict
Rename back, disable one by one
```

**Prevention:**
- Keep plugins updated
- Don't install too many plugins
- Test on staging before production

---

## 🔴 Quick Diagnostic Checklist

**When something breaks, run through this:**

### General Checklist:
- [ ] Clear Divi cache
- [ ] Clear browser cache (hard refresh)
- [ ] Clear caching plugin
- [ ] Disable all plugins except Divi
- [ ] Switch to default Divi theme
- [ ] Check browser console for errors
- [ ] Try different browser
- [ ] Test in Incognito mode

### Visual Builder Specific:
- [ ] Exit and re-enter Visual Builder
- [ ] Use Classic Builder instead
- [ ] Check PHP memory limit
- [ ] Verify file permissions

### Design System:
- [ ] Check variables exist (Variable Manager)
- [ ] Verify presets exist (Preset Manager)
- [ ] Use Inspector to see applied styles
- [ ] Check for manual overrides

### Performance:
- [ ] Check PageSpeed Insights
- [ ] Optimize images
- [ ] Enable caching
- [ ] Disable unused plugins

---

## Related Files

**For specific issues:**
- `features/flexbox-layout-system.md` - Layout problems
- `features/preset-system-complete.md` - Preset issues
- `features/design-variables.md` - Variable problems
- `workflows/design-system-import.md` - Import/export issues
- `performance/lcp-optimization.md` - Speed issues

**Tools & mechanics:**
- `build/02_divi5_mechanics.md` - Inspector, Find & Replace
- `quick-reference.md` - Quick solutions

---

## When to Ask for Help

**Try these resources before asking:**
1. This troubleshooting guide (you're here!)
2. Your KB quick-reference
3. Elegant Themes documentation
4. Divi Facebook groups
5. Elegant Themes support ticket

**Include in support requests:**
- WordPress version
- Divi version
- PHP version
- Active plugins list
- Browser console errors
- Screenshots of issue
- What you've tried already

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x
