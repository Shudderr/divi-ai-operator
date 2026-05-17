# Deployment Checklist - LocalWP to Production

**Purpose:** Complete checklist for deploying Divi 5 sites from development to live hosting
**Category:** Workflows
**Priority:** Critical
**Last Updated:** March 2026
**Estimated Time:** 2-3 hours

---

## Overview

This guide covers the complete process of taking a Divi 5 site from LocalWP development environment to a live production server. Follow these steps in order to ensure a smooth, error-free launch.

**Prerequisites:**
- Site fully built and tested in LocalWP
- Domain name registered and pointing to hosting
- Hosting account set up with WordPress installed
- Backup of LocalWP site created

---

## Phase 1: Pre-Launch Preparation (30 min)

### Content Review

**Final content check:**
- [ ] All pages have final, proofread copy
- [ ] No "Lorem ipsum" placeholder text
- [ ] All images optimized (WebP format, properly sized)
- [ ] Contact information is correct
- [ ] Phone numbers, emails, addresses verified
- [ ] Social media links working
- [ ] Privacy Policy page exists
- [ ] Terms of Service page exists (if needed)

### Technical Audit

**Run through audit checklists:**
- [ ] `audits/01_UX_VISUAL.md` - Design consistency
- [ ] `audits/02_PERFORMANCE.md` - Speed optimization
- [ ] `audits/03_ACCESSIBILITY.md` - WCAG compliance
- [ ] `audits/04_DIVI5_LOGIC.md` - Divi best practices

**Performance check:**
- [ ] Test with PageSpeed Insights (aim for >90 mobile)
- [ ] All images under 500KB
- [ ] LCP under 2.5 seconds
- [ ] No console errors in browser DevTools

**Responsive check:**
- [ ] Test all 7 breakpoints (or your active ones)
- [ ] Phone (375px) - most common mobile size
- [ ] Tablet (768px)
- [ ] Desktop (1440px)
- [ ] All CTAs above fold on mobile
- [ ] Touch targets 44px minimum on mobile

### Form Testing

**Test all forms:**
- [ ] Contact forms send emails correctly
- [ ] Form submissions reach correct email
- [ ] Spam protection working (reCAPTCHA if used)
- [ ] Confirmation messages display
- [ ] Required fields enforce validation
- [ ] Test on mobile devices

### Browser Testing

**Test in multiple browsers:**
- [ ] Chrome (latest)
- [ ] Safari (desktop + iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Check for layout breaks
- [ ] Check for JavaScript errors

---

## Phase 2: Backup & Export (20 min)

### Create LocalWP Backup

**Full site backup:**
```
1. LocalWP → Your site → Stop site
2. Right-click site → Export
3. Save .zip file to safe location
4. Name: ClientName-LocalWP-Backup-YYYYMMDD.zip
5. Store in multiple locations (external drive, cloud)
```

**Export Design System:**
```
1. Variable Manager → Export → Save
2. Preset Manager → Export → Save
3. Theme Builder → Export → Save
4. Divi Library → Export key sections
5. Name with version: ClientName-Design-System-v1.0.zip
```

**Database Backup:**
```
LocalWP → Your site → Database tab → Export
Save as: ClientName-DB-Pre-Migration-YYYYMMDD.sql
```

### Document Current Settings

**Create deployment notes:**
```
DEPLOYMENT NOTES - [Client Name]
Date: [YYYY-MM-DD]
LocalWP URL: http://clientname.local
Production URL: https://www.clientname.com

WORDPRESS VERSION: 6.x
DIVI VERSION: 5.x
PHP VERSION: 8.2

ACTIVE PLUGINS:
- Divi 5
- WP Rocket
- Contact Form 7
- Yoast SEO
- [list all]

DESIGN SYSTEM:
- Variables: 100+ 
- Presets: 400+
- Custom sections: 12

IMPORTANT PAGES:
- Homepage: ID #XX
- Contact: ID #XX
- [list key pages]

FORMS:
- Contact form emails to: email@client.com
- [list all forms]

NOTES:
- [any special configurations]
```

---

## Phase 3: Hosting Setup (30 min)

### WordPress Installation

**If not already installed:**
```
1. cPanel → WordPress (or hosting panel)
2. Install WordPress
3. PHP version: 8.2 or 8.3 (required for Divi 5)
4. Database name: Record this
5. Admin username: Different from 'admin'
6. Strong password: Use password manager
```

**Verify hosting requirements:**
- [ ] PHP 8.2 or higher
- [ ] MySQL 8.0 or higher
- [ ] 256MB PHP memory limit (minimum)
- [ ] HTTPS/SSL certificate active
- [ ] mod_rewrite enabled (for permalinks)

### Initial WordPress Setup

**Before importing site:**
```
1. Login to WordPress admin
2. Settings → General:
   - Site Title: [Client Name]
   - Tagline: [Clear or blank]
   - Site Address: https://www.clientname.com
   - Time Zone: Client's timezone
   
3. Settings → Permalinks:
   - Set to "Post name"
   - Save (important: do this BEFORE migration)

4. Delete default content:
   - Delete "Hello World" post
   - Delete "Sample Page"
   - Delete default plugins
```

### Install Migration Plugin

**Recommended: All-in-One WP Migration**

```
Production site:
1. Plugins → Add New
2. Search: "All-in-One WP Migration"
3. Install + Activate
4. Install "Unlimited Extension" if site > 512MB
```

**Alternative: WP Migrate DB (manual method)**

---

## Phase 4: Site Migration (45 min)

### Method A: All-in-One WP Migration (Easiest)

**On LocalWP (Export):**
```
1. WordPress Admin → All-in-One WP Migration → Export
2. Export to: File
3. Advanced options:
   - Check "Do not export spam comments"
   - Check "Do not export post revisions"
   - Leave other defaults
4. Click "Export"
5. Download .wpress file when ready
6. File name: clientname-export-YYYYMMDD.wpress
```

**On Production (Import):**
```
1. WordPress Admin → All-in-One WP Migration → Import
2. Import from: File
3. Upload .wpress file
4. Wait for upload (may take 10-30 min for large sites)
5. Click "Proceed" when asked about overwrite
6. DO NOT logout when complete
7. Permalinks will auto-reset
```

**Post-import steps:**
```
1. Settings → Permalinks → Save (re-save)
2. Test homepage loads
3. Login again (password may have changed to LocalWP version)
```

### Method B: Manual Migration (Advanced)

**Export database from LocalWP:**
```
1. LocalWP → Database tab → Open Adminer
2. Export → Quick export
3. Save: clientname-db-export.sql
```

**Import to production:**
```
1. cPanel → phpMyAdmin
2. Select production database
3. Import → Choose file
4. Upload .sql file
5. Execute
```

**Search & Replace URLs:**
```
Use Better Search Replace plugin:
1. Install Better Search Replace
2. Search for: http://clientname.local
3. Replace with: https://www.clientname.com
4. Select all tables
5. Run (not dry run)
6. Verify count of replacements
```

**Upload files via FTP:**
```
Upload these directories from LocalWP:
- wp-content/themes/Divi/
- wp-content/uploads/
- wp-content/et-cache/
- wp-content/plugins/ (active plugins only)
```

---

## Phase 5: Post-Migration Configuration (30 min)

### Verify Site Loads

**Initial checks:**
- [ ] Homepage loads without errors
- [ ] Login to WordPress admin works
- [ ] Visual Builder loads
- [ ] All pages accessible
- [ ] Images display correctly
- [ ] Menus working

### Update URLs & Settings

**Permalinks (CRITICAL):**
```
Settings → Permalinks
Click "Save Changes" (even if unchanged)
This regenerates .htaccess rules
```

**General Settings:**
```
Settings → General
Verify:
- WordPress Address URL: https://www.clientname.com
- Site Address URL: https://www.clientname.com
(No trailing slash)
```

### Fix Common Issues

**Broken images:**
```
If images don't load:
1. Check Settings → Media
2. Regenerate thumbnails (use plugin if needed)
3. Clear browser cache
4. Check file permissions on uploads folder
```

**Broken links:**
```
1. Install "Broken Link Checker" plugin
2. Run scan
3. Fix any broken internal links
4. Update old URLs
```

**Visual Builder issues:**
```
1. Divi → Theme Options → Builder → Performance
2. Clear Static CSS File Cache
3. Clear browser cache
4. Reload Visual Builder
```

---

## Phase 6: Performance Optimization (30 min)

### Install Caching Plugin

**WP Rocket (Premium - Recommended):**
```
1. Install WP Rocket
2. Basic settings:
   - Enable caching
   - Enable minification (CSS + JS)
   - Enable GZIP compression
   - Lazy load images
   - Defer JavaScript
3. Advanced:
   - Disable emoji
   - Remove query strings
4. Save changes
5. Clear cache
```

**LiteSpeed Cache (Free - If LiteSpeed hosting):**
```
1. Install LiteSpeed Cache
2. Wizard setup (recommended)
3. Enable basic optimizations
4. Test site after each change
```

### Image Optimization

**Install optimization plugin:**
```
Options:
- Imagify (recommended)
- ShortPixel
- EWWW Image Optimizer

Settings:
- Compression: Balanced or Aggressive
- Resize large images: Max 1920px width
- Convert to WebP: Yes
- Lazy loading: Yes (or use Divi's)
- Optimize existing images: Run bulk optimization
```

### CDN Setup (Optional)

**If using Cloudflare:**
```
1. Add site to Cloudflare
2. Update nameservers at domain registrar
3. Enable:
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
   - Rocket Loader
4. Set caching level: Standard
5. Enable Always Use HTTPS
```

### Database Optimization

```
1. Install WP-Optimize plugin
2. Run optimization:
   - Clean post revisions
   - Remove spam comments
   - Delete trashed posts
   - Optimize database tables
3. Schedule weekly auto-clean
```

---

## Phase 7: Security Hardening (20 min)

### SSL/HTTPS Verification

**Force HTTPS:**
```
1. Verify SSL certificate active
2. Really Simple SSL plugin (optional, easy)
   OR
3. Add to wp-config.php:
   define('FORCE_SSL_ADMIN', true);
   
4. Add to .htaccess (below # BEGIN WordPress):
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Security Plugin Setup

**Wordfence (Recommended):**
```
1. Install Wordfence Security
2. Run initial scan
3. Enable:
   - Firewall (learning mode first)
   - Login security
   - Two-factor authentication
4. Set notification email
5. Schedule regular scans
```

**Security checklist:**
- [ ] Strong admin password
- [ ] Different username than "admin"
- [ ] Two-factor authentication enabled
- [ ] Limit login attempts
- [ ] Hide WordPress version
- [ ] Disable file editing in admin
- [ ] Regular security scans scheduled

### File Permissions

**Correct permissions:**
```
Directories: 755
Files: 644
wp-config.php: 640 or 600

Via FTP:
- Right-click → File Permissions
- Or via SSH: chmod -R 755 directories
```

---

## Phase 8: Testing & QA (45 min)

### Functionality Testing

**Navigation:**
- [ ] All menu links work
- [ ] Logo links to homepage
- [ ] Footer links work
- [ ] Breadcrumbs (if used)
- [ ] Search functionality

**Forms:**
- [ ] Contact form sends to correct email
- [ ] Test submissions on mobile
- [ ] Spam protection working
- [ ] Confirmation messages display
- [ ] Form data arrives correctly formatted

**Interactive Elements:**
- [ ] Buttons/CTAs clickable
- [ ] Modals/popups work
- [ ] Sliders/carousels function
- [ ] Videos play
- [ ] Lightbox galleries work
- [ ] Scroll effects trigger correctly

### Cross-Browser Testing

**Test in each browser:**
- [ ] Chrome (desktop + mobile)
- [ ] Safari (desktop + iOS)
- [ ] Firefox
- [ ] Edge
- [ ] Test actual mobile devices (not just DevTools)

### Performance Testing

**Run PageSpeed Insights:**
```
1. Visit: https://pagespeed.web.dev/
2. Enter: https://www.clientname.com
3. Check mobile score (aim >90)
4. Check desktop score (aim >95)
5. Review suggestions
6. Implement critical fixes
```

**Monitor:**
- [ ] LCP under 2.5 seconds
- [ ] FID under 100ms
- [ ] CLS under 0.1
- [ ] Page load under 3 seconds

### SEO Verification

**Yoast/Rank Math setup:**
```
1. General settings configured
2. Homepage title & meta description
3. Social media integration
4. XML sitemap generated
5. Google Analytics connected
6. Google Search Console added
```

**Submit sitemap:**
```
1. Find sitemap: yoursite.com/sitemap.xml
2. Google Search Console → Sitemaps
3. Submit sitemap URL
4. Monitor indexing
```

---

## Phase 9: Analytics & Monitoring (15 min)

### Google Analytics Setup

**Install GA4:**
```
1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Install via:
   - Divi → Theme Options → Integrations → Google Analytics
   - OR use Google Site Kit plugin
4. Verify tracking (Real-Time report)
```

### Google Search Console

**Add property:**
```
1. Add property: https://www.clientname.com
2. Verify ownership:
   - HTML tag method (easiest)
   - OR DNS verification
3. Submit sitemap
4. Request indexing for key pages
```

### Uptime Monitoring

**Setup monitoring (free options):**
- UptimeRobot (free up to 50 monitors)
- StatusCake
- Pingdom (limited free)

**Configure:**
```
1. Add website URL
2. Check interval: 5 minutes
3. Notification email: Your email
4. Monitor: HTTP(s) status
```

---

## Phase 10: Client Handoff (30 min)

### Create Client Documentation

**Create guide document:**
```
WEBSITE GUIDE - [Client Name]
Login: https://www.clientname.com/wp-admin
Username: [provided separately]
Password: [use password manager]

UPDATING CONTENT:
1. Pages → Select page
2. Edit with Divi Builder
3. Click Save
4. Clear cache (see below)

CLEARING CACHE:
1. WP Rocket → Clear Cache
2. Always clear after changes

CONTACT FORM:
Forms send to: email@client.com
Check spam folder if not receiving

SUPPORT CONTACTS:
- Web Support: your@email.com
- Hosting: hosting@provider.com
- Domain: domain@registrar.com

IMPORTANT:
- Don't delete plugins
- Don't change theme
- Clear cache after updates
- Contact us before making structural changes
```

### Training Session

**Cover these topics:**
- [ ] Logging in securely
- [ ] Editing page content
- [ ] Adding new pages
- [ ] Updating images
- [ ] Managing blog posts (if applicable)
- [ ] Checking/responding to form submissions
- [ ] Clearing cache
- [ ] When to call for help

### Final Deliverables

**Provide to client:**
- [ ] Login credentials (via password manager)
- [ ] Website guide document
- [ ] Analytics access
- [ ] Domain registrar info
- [ ] Hosting account info
- [ ] Design system export files
- [ ] Source files (PSDs, logos, fonts)

---

## Phase 11: Post-Launch Monitoring (Ongoing)

### Week 1: Daily Checks

**Monitor closely:**
- [ ] Check uptime monitoring alerts
- [ ] Review Analytics (traffic, errors)
- [ ] Check contact form submissions
- [ ] Monitor Search Console for errors
- [ ] Review security scan results

### Week 2-4: Weekly Checks

**Regular monitoring:**
- [ ] PageSpeed scores
- [ ] Broken links
- [ ] Form functionality
- [ ] Plugin updates available
- [ ] Security scan results
- [ ] Backup verification

### Monthly Maintenance

**Regular tasks:**
- [ ] WordPress core updates
- [ ] Plugin updates
- [ ] Theme updates
- [ ] Database optimization
- [ ] Backup verification
- [ ] Security scan
- [ ] Performance review
- [ ] Analytics review with client

---

## Common Deployment Issues

### Issue: Site Shows "Database Connection Error"

**Solution:**
```
1. Check wp-config.php database credentials:
   - DB_NAME
   - DB_USER
   - DB_PASSWORD
   - DB_HOST
2. Verify database exists in hosting
3. Check database user has permissions
4. Contact hosting if still failing
```

### Issue: Pages Return 404 Error

**Solution:**
```
1. Settings → Permalinks
2. Click "Save Changes"
3. Check .htaccess file exists
4. Verify mod_rewrite enabled on server
5. Clear cache
```

### Issue: Images Not Loading

**Solution:**
```
1. Check URL in browser inspector
2. If URL shows http://clientname.local:
   - Search & Replace not complete
   - Use Better Search Replace plugin
3. If permissions error:
   - Set uploads folder to 755
4. Regenerate thumbnails
```

### Issue: Styles Not Applying

**Solution:**
```
1. Divi → Support → Clear Static CSS
2. Clear caching plugin cache
3. Clear browser cache (Cmd/Ctrl + Shift + R)
4. Check file permissions on et-cache folder
5. Disable other caching temporarily
```

### Issue: Forms Not Sending

**Solution:**
```
1. Install WP Mail SMTP plugin
2. Configure with Gmail or SMTP provider
3. Test email delivery
4. Check spam folder
5. Verify form settings correct
6. Check hosting allows mail() function
```

### Issue: Visual Builder Won't Load

**Solution:**
```
1. Clear all caches
2. Disable other plugins temporarily
3. Check browser console for errors
4. Increase PHP memory limit
5. Check file permissions
6. Try different browser
```

---

## Rollback Plan

**If deployment fails:**

### Option 1: Quick Rollback

```
1. Delete production site content
2. Reinstall WordPress
3. Re-import LocalWP backup
4. Troubleshoot issue offline
5. Try again
```

### Option 2: Restore from Backup

```
1. Access hosting cPanel
2. File Manager → Restore from backup
3. phpMyAdmin → Import old database
4. Verify site loads
5. Investigate failure cause
```

---

## Post-Launch Checklist

### Immediate (Day 1)

- [ ] Confirm site loads on production URL
- [ ] All pages accessible
- [ ] Forms sending emails
- [ ] Analytics tracking
- [ ] Uptime monitoring active
- [ ] Client can login
- [ ] SSL certificate working
- [ ] Cache working properly

### First Week

- [ ] Monitor error logs
- [ ] Check form submissions daily
- [ ] Review analytics for issues
- [ ] Check Search Console errors
- [ ] Verify backups running
- [ ] Performance scores stable

### First Month

- [ ] Review analytics with client
- [ ] Check all automated emails working
- [ ] Verify SEO indexing progress
- [ ] Update plugins/WordPress if needed
- [ ] Run security scan
- [ ] Optimize based on real traffic data

---

## Related Files

**Preparation:**
- `audits/` - Pre-launch quality checks
- `workflows/starting-new-project.md` - Initial setup reference
- `troubleshooting/common-issues.md` - Fix deployment problems

**Reference:**
- `quick-reference.md` - Quick commands
- `performance/lcp-optimization.md` - Speed optimization

**Client Training:**
- Create custom guide based on this checklist
- Include screenshots for client's specific setup

---

**Last Updated:** March 2026  
**Status:** Active  
**Divi Version:** 5.x

**IMPORTANT:** Always test deployment process on staging site first before live launch!
