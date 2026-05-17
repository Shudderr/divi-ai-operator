# Maintenance Schedule

**Purpose:** Ongoing maintenance workflow for live Divi 5 sites — weekly, monthly, quarterly, and annual tasks
**Category:** Workflows
**Priority:** 🔴 Critical
**Last Updated:** 2026-03-08
**Estimated Time:** 30 min/month per site (core tasks)

---

## Overview

This guide covers recurring maintenance for Divi 5 sites after they go live. It picks up where `deployment-checklist.md` leaves off (end of Week 1) and provides a structured schedule to keep sites fast, secure, backed up, and up-to-date.

**MSP context:** Simplicity Technologies manages multiple client sites. Batch the monthly tasks across all sites on a fixed day each month to build an efficient routine.

---

## Quick Reference: Maintenance Calendar

| Frequency | Tasks |
|-----------|-------|
| **Weekly** | Check uptime alerts · Review security scan · Verify backup ran · Test contact form |
| **Monthly** | Plugin updates · WordPress core update · Divi update · Database optimization · Performance check · Client analytics report · Design system backup |
| **Quarterly** | Full site audit · Accessibility check · Staging site refresh · Broken link scan · Design system integrity check · Hosting & SSL review |
| **Annual** | Rebuild assessment · Hosting & domain renewals · Plugin licence audit · Client relationship review · Archive old backups |
| Staging site refresh | | | ✅ | |
| Hosting/SSL review | | | | ✅ |
| Full rebuild assessment | | | | ✅ |

---

## Weekly Tasks (~15 min per site)

### Uptime & Availability

- [ ] Check UptimeRobot (or equivalent) — no unresolved alerts
- [ ] Visit site homepage — loads without error
- [ ] Check SSL badge — no "Not Secure" warning
- [ ] Verify admin login works

### Security

- [ ] Review Wordfence email digest — no critical alerts unresolved
- [ ] Check for failed login attempts — block IPs if brute-force pattern detected
- [ ] Confirm no malware scan warnings

### Backups

- [ ] Confirm automated backup ran (check plugin dashboard or hosting)
- [ ] Verify backup file exists and has a recent timestamp
- [ ] If backup failed: run manual backup immediately, investigate cause

### Forms

- [ ] Send a test submission through the main contact form
- [ ] Confirm email arrives at the correct address
- [ ] Check spam folder if not received — SMTP may need reconfiguration

---

## Monthly Tasks (~45 min per site)

Run these on a fixed day each month — e.g., first Tuesday. Batch across client sites.

### 1. Backup Before Anything

Always create a full backup before running any updates:

```
1. BackupBuddy / UpdraftPlus / Solid Backups → Run Now
2. Confirm backup completes successfully
3. Download a copy locally: ClientName-Backup-YYYYMM.zip
4. Also export design system (see Design System Backup below)
```

Never run plugin or core updates without a working backup from today.

### 2. WordPress Core Update

```
1. Dashboard → Updates
2. If update available: read changelog briefly
3. Click "Update Now"
4. Verify site loads after update
5. Clear all caches (WP Rocket → Clear Everything)
6. Test homepage + key pages
```

**If update breaks the site:**
```
1. Restore backup immediately
2. Check PHP compatibility for the new WP version
3. Identify conflicting plugin before retrying
```

### 3. Plugin Updates

Update plugins one at a time for easier rollback if something breaks:

```
For each plugin with an update:
1. Read changelog (click "View version X.X details")
2. Check plugin is still actively maintained
3. Update plugin
4. Test the area of the site the plugin affects
5. Clear cache if caching plugin was updated

Priority order:
1. Security plugins (Wordfence) — update first
2. SEO plugins (Yoast/RankMath)
3. Performance plugins (WP Rocket)
4. Form plugins (CF7/WPForms)
5. Everything else
```

**Plugins that need extra care when updating:**
- **WP Rocket** — always clear cache + test page speed after
- **Wordfence** — check firewall rules are still active post-update
- **Contact Form 7** — test form submissions after every major update
- **Divi** — see dedicated Divi Update Process section below

### 4. Divi Update Process

Divi updates require a few extra steps to protect the design system.

**Before updating Divi:**
```
1. Export design system:
   - Variable Manager → Export → ClientName-Variables-YYYYMM.json
   - Preset Manager → Export → ClientName-Presets-YYYYMM.json
   - Theme Builder → Export → ClientName-ThemeBuilder-YYYYMM.json
2. Read Divi changelog at elegantthemes.com/blog/changelog/divi
   - Look for: breaking changes, deprecated features, layout changes
3. Full site backup (if not done already today)
```

**Update Divi:**
```
1. Dashboard → Updates → Update Divi
2. Wait for completion
3. Divi → Support → Clear Static CSS File Cache
4. Divi → Support → Clear Divi Builder Assets
5. Clear WP Rocket / caching plugin cache
6. Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
```

**After updating Divi — verify:**
```
- [ ] Homepage renders correctly
- [ ] Theme Builder header/footer still displaying
- [ ] Open Visual Builder on one page — loads without errors
- [ ] Check a page that uses the preset system
- [ ] Check a page with Loop Builder
- [ ] Run PageSpeed Insights — scores unchanged or better
- [ ] Test contact form
```

**If Divi update breaks the design:**
```
1. Restore full backup (fastest path)
2. OR: Divi → Support → Clear all caches, re-save Theme Builder
3. If presets are missing: re-import from today's export
4. Report issue to Elegant Themes support with details
```

### 5. Design System Backup

Export versioned copies of the full design system monthly:

```
Files to export:
1. Divi → Variable Manager → Export
   Save as: ClientName-Variables-YYYYMM.json

2. Divi → Preset Manager → Export
   Save as: ClientName-Presets-YYYYMM.json

3. Divi → Theme Builder → Export
   Save as: ClientName-ThemeBuilder-YYYYMM.json

4. Divi → Library → Export (key sections)
   Save as: ClientName-Library-YYYYMM.json

Store in:
- Client folder on local drive
- Cloud backup (Google Drive / Dropbox)
Keep last 3 monthly exports, then archive annually
```

### 6. Database Optimization

```
1. Install/open WP-Optimize (or similar)
2. Run optimization:
   - [ ] Delete post revisions (keep last 5)
   - [ ] Remove auto-draft posts
   - [ ] Clear expired transients
   - [ ] Remove spam comments
   - [ ] Optimize database tables
3. Clear cache after optimization
```

> Don't run database optimization without a backup. If WP-Optimize removes something unexpected, you need a restore point.

### 7. Performance Check

```
1. Visit pagespeed.web.dev
2. Test: https://www.clientname.com (mobile + desktop)
3. Record scores:
   - Mobile: [ ] LCP __ CLS __ INP __ Score __
   - Desktop: [ ] LCP __ CLS __ INP __ Score __
4. Compare to last month
5. Investigate if any score drops by 10+ points
```

**Flag for investigation:**
- Mobile score drops below 80
- LCP exceeds 2.5s
- CLS exceeds 0.1

**Quick fixes if score dropped:**
```
- Clear WP Rocket cache → re-test
- Check new images added this month (are they too large/not WebP?)
- Check if a new plugin added render-blocking scripts
- WP Rocket → Re-save settings to regenerate critical CSS
```

### 8. Client Analytics Report

Prepare a brief monthly summary for the client:

```
Google Analytics → Last 30 days vs previous 30 days:
- [ ] Total sessions (up/down %)
- [ ] Top 3 pages by visits
- [ ] Average session duration
- [ ] Contact form conversions (if tracked as goal)
- [ ] Mobile vs desktop split
- [ ] Top traffic sources

Google Search Console → Last 28 days:
- [ ] Total clicks (up/down %)
- [ ] Total impressions
- [ ] Average position
- [ ] Any manual action / security issues
- [ ] Any new crawl errors
```

Send a 5-sentence summary email. Don't overwhelm clients with data — focus on what changed and why.

---

## Quarterly Tasks (~2 hours per site)

Run these every 3 months — January, April, July, October.

### Full Site Audit

Run through all four audit modules:

```
1. audits/01_UX_VISUAL.md — design consistency, typography, spacing
2. audits/02_PERFORMANCE.md — Core Web Vitals, image optimization
3. audits/03_ACCESSIBILITY.md — WCAG AA compliance
4. audits/04_DIVI5_LOGIC.md — Divi best practices, Design Variables usage
```

Document any new issues found. Create a prioritised fix list and either resolve now or schedule with client.

### Design System Integrity Check

Verify the design system hasn't drifted:

```
Variable Manager audit:
- [ ] All Design Variables are still in use (no orphaned variables)
- [ ] No hardcoded hex colors in recent edits (use Find & Replace to check)
- [ ] Color contrast still passing WCAG AA (check primary on white, etc.)
- [ ] Typography variables match brand spec

Preset Manager audit:
- [ ] No duplicate presets created (check for similar names)
- [ ] Unused presets pruned
- [ ] Preset naming convention still consistent

Theme Builder audit:
- [ ] Header/footer templates rendering on all page types
- [ ] Archive templates correctly assigned
- [ ] No orphaned/disabled templates cluttering the list
```

### Accessibility Review

```
Run on homepage + 3 key pages:
1. axe DevTools browser extension → Run full scan
2. Manual keyboard navigation test:
   - Tab through all interactive elements in order
   - Confirm focus ring visible at all times
   - Confirm modal/menu opens and closes via keyboard
3. Screen reader spot check (NVDA or VoiceOver):
   - Heading hierarchy reads correctly
   - Images have appropriate alt text
   - Form labels are announced correctly
```

### Broken Link Scan

```
1. Install/run Broken Link Checker plugin (or use online tool)
2. Fix all internal broken links immediately
3. For broken external links: remove, redirect, or update URL
4. Deactivate Broken Link Checker after scan (resource-intensive)
```

### Staging Site Refresh

Keep the LocalWP development environment in sync:

```
1. Export live site via All-in-One WP Migration
2. Import into LocalWP instance
3. Verify LocalWP version mirrors live
4. Update LocalWP PHP version to match hosting if different
5. Test any pending changes or experiments in LocalWP before pushing to live
```

### Hosting & Security Review

```
- [ ] Hosting account — no invoices overdue, account active
- [ ] PHP version — check against hosting panel (upgrade if below 8.2)
- [ ] SSL certificate — check expiry date (flag if < 60 days remaining)
- [ ] Wordfence — review blocked IPs, update firewall rules
- [ ] Check hosting plan storage usage (flag if > 80%)
- [ ] Review server response time (TTFB) — aim < 200ms
```

---

## Annual Tasks (~half day per site)

Run in January or at the site's annual anniversary.

### Full Rebuild Assessment

Evaluate whether the site architecture still meets the client's needs:

```
Review questions:
- Is the site still meeting its original goals?
- Have business needs changed (new services, rebranding)?
- Is the Divi 5 version still current (not end-of-life)?
- Are there performance limits that require structural changes?
- Is the template/design system still coherent or has it drifted?
- Is WordPress + Divi still the right technology for this client?

Outputs:
- Keep as-is (minor updates only)
- Refresh (rebrand, new pages, updated design)
- Rebuild (significant structural changes)
```

### Hosting & Domain Renewal Review

```
- [ ] Hosting plan renewal date — upcoming?
- [ ] Domain name renewal date — upcoming?
- [ ] SSL certificate covered by hosting or separate renewal?
- [ ] Confirm registrar contact details are current
- [ ] Review hosting plan — is the tier still appropriate for traffic?
- [ ] Consider upgrading PHP version proactively
- [ ] Review CDN contract if using paid Cloudflare plan
```

### Plugin Licence Renewals

```
Audit all premium plugin licences:
- [ ] Divi (Elegant Themes) — annual or lifetime?
- [ ] WP Rocket — renewal date?
- [ ] Wordfence Premium — renewal date?
- [ ] Any other premium plugins?

Consolidate renewal dates where possible.
Warn client at least 30 days before any licence expiry.
```

### Client Relationship Review

```
- [ ] Is the client happy with site performance?
- [ ] Any new business requirements to plan for?
- [ ] Has the client's team changed (new admin users, removed old ones)?
- [ ] Review and update client's login credentials if needed
- [ ] Update emergency contact information
- [ ] Review and update the client's Website Guide document
- [ ] Confirm support hours and SLA still match agreement
```

### Archive Old Backups

```
Keep:
- Last 3 monthly design system exports
- Last 3 site backups
- The original launch backup (forever)
- Any backup taken before a major change

Archive (move to cold storage, don't delete):
- Monthly backups older than 3 months
- Design system exports older than 6 months

Delete:
- Failed backup files
- Duplicate exports with same date
```

---

## Divi-Specific Maintenance Notes

### After Any Major Divi Release (X.0)

Major releases may include structural changes to how presets, variables, or modules work:

```
1. Do NOT update on the day of release — wait 1-2 weeks
2. Read full changelog and Elegant Themes blog post
3. Check Elegant Themes community/forums for reports of issues
4. Test update on LocalWP clone before applying to live site
5. Schedule update during low-traffic hours
6. Keep previous Divi version backup accessible for 30 days
```

### Static CSS Cache — Clear After Any Content Change

Divi generates optimised per-page CSS. Clear after:
- Changing Design Variables
- Adding or deleting presets
- Making Theme Builder structural changes
- Any time styles "seem wrong" after an edit

```
Divi → Support → Clear Static CSS File Cache
Then: Clear caching plugin cache
Then: Hard refresh (Ctrl+Shift+R)
```

### Preset System — Watch for Drift

Over time, clients or their staff editing with Divi can accidentally create local overrides or duplicate presets:

```
Monthly spot-check:
1. Open Inspector on homepage
2. Check a heading — is it using the expected preset?
3. Check a button — is it using the expected preset?
4. If "Local Override" badges appear frequently: audit and clean up
```

---

## Troubleshooting Common Maintenance Issues

### Update Breaks Site Visually

```
1. Clear all caches immediately (WP Rocket + browser)
2. Divi → Support → Clear Static CSS + Divi Builder Assets
3. If still broken: restore backup
4. Identify the update that caused the problem
5. Roll back that plugin/WP version until fix is confirmed
```

### Backup Plugin Failing Silently

```
Signs: Timestamp on last backup is old, no recent file in backup destination
Fix:
1. Check backup plugin log for errors
2. Increase PHP max_execution_time if large site timing out
3. Check backup destination (cloud storage full? credentials expired?)
4. Run manual backup to confirm plugin works
5. Set up a second backup method as redundancy (e.g., hosting-level backup)
```

### Performance Score Drops Month-Over-Month

```
Common causes:
- New images added at full resolution (fix: compress + convert to WebP)
- New plugin adding render-blocking scripts (fix: defer/async via WP Rocket)
- Third-party embeds (videos, maps, chat widgets) slowing page
- Server response time increased (contact hosting)
- WP Rocket critical CSS stale (fix: clear cache + regenerate)
```

### Wordfence Blocking Legitimate Traffic

```
1. Wordfence → Firewall → Allowlisted IPs
2. Add client's office IP if they're getting blocked
3. Check if a rate-limiting rule is too aggressive
4. Review blocked requests log to confirm the block is legitimate
5. If false positive: adjust the specific rule, don't disable entire firewall
```

---

## Maintenance Log Template

Keep a brief log for each client site:

```
## ClientName - Maintenance Log

### YYYY-MM (Month Year)
Date: YYYY-MM-DD
Time spent: X min

WordPress: X.X.X → X.X.X ✅
Divi: X.X.X → X.X.X ✅
Plugins updated: WP Rocket, Wordfence, CF7

Performance scores:
- Mobile: 91 (prev: 93) — minor drop, investigated, no action needed
- Desktop: 98 (prev: 97) — stable

Backup: ✅ 2.1GB — ClientName-Backup-YYYYMM.zip
Design system export: ✅

Issues found:
- Contact form SMTP had expired token — renewed and tested ✅

Client report sent: ✅

Notes:
- Client mentioned wanting to add a new services page next month
```

---

## Related Files

**Precedes this workflow:**
- `workflows/deployment-checklist.md` - Launch process (Week 1 monitoring)

**Used during maintenance:**
- `audits/01_UX_VISUAL.md` - Quarterly UX audit
- `audits/02_PERFORMANCE.md` - Quarterly performance audit
- `audits/03_ACCESSIBILITY.md` - Quarterly accessibility check
- `audits/04_DIVI5_LOGIC.md` - Quarterly Divi logic audit
- `performance/lcp-optimization.md` - Performance troubleshooting
- `troubleshooting/common-issues.md` - Fixing issues found during audits

**Reference:**
- `features/design-variables.md` - Design system integrity checks
- `features/preset-system-complete.md` - Preset drift diagnosis
- `features/theme-builder.md` - Theme Builder verification after Divi updates

---

**Last Updated:** 2026-03-08
**Status:** Active
**Divi Version:** 5.x
