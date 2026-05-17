---
last_verified_version: 5.0.0
status: active
last_updated: December 2024
google_core_web_vitals: December 2024 standards
---

# LCP Optimization - Largest Contentful Paint

**Goal:** Get LCP under 2.5 seconds (ideally under 2.0s)  
**Impact:** Core Web Vital, affects SEO and user experience  
**Last Updated:** December 2024

---

## What is LCP?

**Largest Contentful Paint** = Time it takes for the largest visible element to load

**Usually the LCP element is:**
- Hero image
- Header background image
- Large text block
- Featured product image

**Google's Thresholds:**
- ✅ Good: < 2.5s
- ⚠️ Needs Improvement: 2.5s - 4.0s
- ❌ Poor: > 4.0s

---

## Diagnosing Your LCP

### Tools to Use

**1. PageSpeed Insights** (Primary Tool)
- URL: https://pagespeed.web.dev/
- Enter your site URL
- Check "Mobile" tab
- Look at "Largest Contentful Paint" metric

**2. Chrome DevTools**
- Open site
- F12 → Performance tab
- Record page load
- Look for LCP marker

**3. GTmetrix**
- URL: https://gtmetrix.com/
- More detailed breakdown

---

## Understanding LCP Breakdown

PageSpeed shows 4 components:

```
Total LCP: 5,960ms (example)
├─ TTFB (Time to First Byte): 1,500ms (25%)
├─ Load Delay: 3,780ms (63%) ← Usually the culprit
├─ Load Time: 560ms (10%)
└─ Render Delay: 120ms (2%)
```

**Focus on the largest percentage!**

---

## Fix 1: Optimize the Image Itself

### Step 1: Identify the LCP Element
- PageSpeed shows you the element (usually an image)
- Note the image URL

### Step 2: Optimize the Image File

**Compress:**
- Tool: TinyPNG, ShortPixel, or Imagify
- Target: Under 200KB (ideally under 100KB)

**Convert to WebP:**
- Better compression than JPG/PNG
- Most browsers support it
- Plugin: WebP Converter for Media

**Resize to Actual Display Size:**
```
❌ Bad: Serving 3000×2000px image, displayed at 800×533px
✅ Good: Serve 800×533px (or 1600×1066px for retina)
```

**How to find display size:**
- Right-click image → Inspect
- Check `width` and `height` in inspector
- Create image at 2x that size (for retina)

---

## Fix 2: Preload the LCP Image

**Location:** Divi → Theme Options → Integration → Add code to `<head>`

```html
<link rel="preload" as="image" href="https://yoursite.com/path-to-lcp-image.webp" fetchpriority="high">
```

**Replace with your actual image URL!**

**Result:** Browser loads this image FIRST, before other resources

---

## Fix 3: Disable Lazy Loading on LCP Image

**Critical:** Don't lazy load your hero image!

**In Divi:**
1. Select the Image/Section with LCP image
2. Advanced → Performance
3. Lazy Load: **OFF**

**Why:** Lazy loading delays the image until it's "needed" – but your hero is immediately visible!

---

## Fix 4: Reduce Load Delay (Render-Blocking Resources)

**Problem:** CSS/JS files block the page from rendering

### In Divi Settings

**Location:** Divi → Theme Options → Builder → Advanced → Performance

**Enable these:**
- ✅ Defer jQuery and jQuery Migrate
- ✅ Inline Critical CSS
- ✅ Minify and Combine CSS Files
- ✅ Minify and Combine JavaScript Files

**Also check:** Divi → Theme Options → Performance
- ✅ Remove Unused CSS
- ✅ Defer Render-Blocking CSS and JavaScript

---

## Fix 5: Optimize Google Fonts

**Problem:** Google Fonts block rendering (often 1-2 seconds)

### Option 1: Font Display Swap
**Location:** Divi → Theme Options → Performance

Find "Font Display" → Set to **Swap**

**Result:** Shows fallback font first, then swaps to Google Font

### Option 2: Self-Host Fonts (Best)
**Plugin:** OMGF (Optimize My Google Fonts) or "Local Google Fonts"

**Result:** Fonts load from your server, much faster

### Option 3: Use System Fonts
**Location:** Divi → Theme Options → General → Typography

Switch to system fonts (Arial, Helvetica, etc.)

**Result:** Instant loading, no external requests

---

## Fix 6: Improve Server Response Time (TTFB)

**Target:** TTFB under 600ms (ideally under 200ms)

### Quick Fixes

**1. Enable Page Caching**
- Plugin: WP Rocket, W3 Total Cache, or LiteSpeed Cache
- Result: Pages load from cache, not rebuilt every time

**2. Object Caching**
- Use Redis or Memcached (ask your host)
- Reduces database queries

**3. Upgrade Hosting**
- Shared hosting often has slow TTFB
- Consider: Managed WordPress hosting (Kinsta, WP Engine, Cloudways)

**4. Use a CDN**
- Cloudflare (free tier)
- BunnyCDN
- Result: Content served from servers closer to users

---

## Fix 7: Remove Unnecessary Plugins

**Each plugin = more code to load**

**Audit your plugins:**
1. Deactivate plugins one by one
2. Test PageSpeed after each
3. Keep only essential ones

**Common culprits:**
- Social media widgets
- Popup plugins
- Live chat widgets
- Unnecessary sliders

---

## Complete Optimization Checklist

```
☐ Identify LCP element (usually hero image)
☐ Compress image (under 200KB)
☐ Convert to WebP
☐ Resize to actual display size
☐ Preload LCP image in <head>
☐ Disable lazy loading on LCP image
☐ Enable Divi performance settings
☐ Defer jQuery
☐ Inline Critical CSS
☐ Minify CSS/JS
☐ Optimize Google Fonts (swap or self-host)
☐ Enable page caching
☐ Enable object caching (if available)
☐ Use CDN
☐ Remove unused plugins
☐ Test on PageSpeed Insights
☐ Aim for < 2.5s LCP
```

---

## Real Example: Before & After

### Before Optimization
```
LCP: 5,960ms
├─ TTFB: 1,200ms
├─ Load Delay: 3,780ms (63%) ← Render-blocking CSS/JS
├─ Load Time: 860ms ← Large image file
└─ Render Delay: 120ms
```

### After Optimization
```
LCP: 1,800ms ✅
├─ TTFB: 400ms (Caching + better hosting)
├─ Load Delay: 200ms (Deferred CSS/JS)
├─ Load Time: 1,100ms (Preloaded, but still large)
└─ Render Delay: 100ms
```

**Further improvement needed:** Image still takes 1.1s to load
**Next step:** Compress image more, convert to WebP

---

## Mobile vs Desktop

**Important:** Optimize for MOBILE first!

- Mobile users have slower connections
- Google uses mobile scores for ranking
- LCP on mobile is often 2-3x slower than desktop

**Always test:** Mobile AND Desktop on PageSpeed

---

## Common Mistakes

### ❌ Lazy loading the hero image
**Result:** Image doesn't load until after page renders → slow LCP

### ❌ Not compressing images
**Result:** 2MB hero image takes 5+ seconds to download

### ❌ Using all Divi performance settings
**Result:** Some settings conflict, site breaks

**Instead:** Enable settings one at a time, test after each

### ❌ Ignoring TTFB
**Result:** Even with perfect image optimization, slow server = slow LCP

---

## Advanced: CSS Background Images

**If your LCP is a CSS background image:**

### Problem
```css
.hero-section {
    background-image: url('hero.jpg'); /* Not preloaded */
}
```

### Solution
Preload the background image:
```html
<link rel="preload" as="image" href="path/to/hero.jpg">
```

**Better:** Use `<img>` tag instead of CSS background for LCP element

---

## Monitoring Over Time

**LCP can change when:**
- New content added
- Plugins updated
- Divi updated
- Hosting performance varies

**Best practice:** Check PageSpeed monthly

---

## [ADD YOUR NOTES]

```
Date:
Site/Project:
Before LCP:
After LCP:
What worked:
What didn't:
```

---

**Related Files:**
- `performance/image-optimization.md` for detailed image techniques
- `performance/caching-setup.md` for caching configurations
- `troubleshooting/divi-5-specific.md` for Divi performance issues

---

**Last Updated:** December 2024  
**Google Core Web Vitals:** https://web.dev/vitals/
