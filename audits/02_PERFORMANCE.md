---
last_verified_version: 5.0.0
status: active
last_updated: December 2024
module: Performance Audit
priority: high
---

# Module 02: Performance Audit
**Focus:** Largest Contentful Paint (LCP), JSON efficiency, asset optimization

---

## ⚡ Asset Optimization

### Image Optimization
- [ ] Are images provided in **WebP/Avif** format?
  - WebP: 25-35% smaller than JPEG/PNG
  - Avif: Even better compression (when supported)
  - Fallback to JPEG/PNG for unsupported browsers

- [ ] Is **Lazy Loading** active for all below-the-fold modules?
  - Hero image: Lazy load OFF
  - Above-fold images: Lazy load OFF
  - Below-fold images: Lazy load ON
  - Module → Advanced → Performance → Lazy Load setting

- [ ] Image dimensions appropriate?
  - Not serving 3000px wide images for 400px display
  - Use responsive image sizes
  - Compress before uploading (aim for < 200KB per image)

### Hero Image Optimization (Critical for LCP)

**Problem:** Hero image is often the Largest Contentful Paint (LCP) element

**Checklist:**
```
□ Image < 200KB (compressed)
□ WebP format (or Avif)
□ Proper dimensions (not oversized)
□ Lazy load DISABLED on hero
□ Preload link in <head>
```

**Preload Code:**
Add to Divi → Theme Options → Integration → `<head>`
```html
<link rel="preload" as="image" href="your-hero-image.webp" fetchpriority="high">
```

**Module Settings:**
```
Hero Image Module:
→ Advanced
→ Performance
→ Lazy Load: OFF
→ fetchpriority: high (if available)
```

---

### JavaScript Execution

- [ ] Is the total JS execution for this section under 50KB?
  - Check DevTools → Performance tab
  - Look for long-running scripts
  - Defer non-critical JS

- [ ] Divi Performance Settings Optimized?
  ```
  Divi → Theme Options → Performance:
  ✓ Defer jQuery and jQuery Migrate
  ✓ Inline Critical CSS
  ✓ Minify and Combine CSS Files
  ✓ Minify and Combine JavaScript Files
  ✓ Remove Unused CSS (test carefully!)
  ```

---

## 📊 JSON Structure (Divi 5 Specific)

### Layout Efficiency Check

- [ ] Analyze the `.json` export: Are there redundant nested wrappers?
  - Export layout: Divi → Portability → Export
  - Open JSON file
  - Look for unnecessary nesting (Section → Row → Column → Row → Column)
  - Simplify where possible

**Red Flag:**
```json
{
  "section": {
    "row": {
      "column": {
        "row": {  ← Unnecessary nesting!
          "column": {
            "module": "text"
          }
        }
      }
    }
  }
}
```

**Better:**
```json
{
  "section": {
    "row": {
      "column": {
        "module": "text"  ← Direct, clean structure
      }
    }
  }
}
```

---

### Style Bloat Detection

- [ ] Check for "Style Bloat": Are multiple presets fighting each other on one module?

**How to check:**
1. Select module
2. Open Visual Builder Inspector (Divi 5)
3. Look at "Modified Fields"
4. If many fields are overridden, presets might be conflicting

**Example of bloat:**
```
Module has 3 presets applied:
1. "Card Base" (sets padding, background, border-radius)
2. "Card Shadow" (sets box-shadow)
3. "Card Override" (overrides padding from preset #1)

↑ Preset #3 is undoing preset #1 = bloat
```

**Solution:**
- Reduce to 2 stacked presets
- Or create one comprehensive preset
- Remove conflicting local overrides

---

### Critical CSS Generation

- [ ] Confirm "Critical CSS" is generating correctly for this section

**What is Critical CSS?**
- Above-the-fold styles loaded inline in `<head>`
- Rest of CSS deferred
- Improves First Contentful Paint (FCP)

**How to check:**
1. Divi → Theme Options → Performance → Inline Critical CSS: ON
2. View page source
3. Look for `<style id="et-critical-inline-css">` in `<head>`
4. Verify it contains styles for above-fold content

**If not working:**
- Clear Divi cache (Divi → Support Center → Clear Cache)
- Disable caching plugins temporarily
- Regenerate critical CSS

---

## 🚀 Core Web Vitals

### LCP (Largest Contentful Paint)
**Target:** < 2.5 seconds

**What it measures:** How long until main content loads

**Common LCP elements:**
- Hero images
- Large text blocks
- Video posters
- Background images

**How to fix slow LCP:**
```
1. Optimize hero image (WebP, compress, proper size)
2. Preload LCP element
3. Disable lazy load on above-fold images
4. Minimize render-blocking resources
5. Use CDN for images
6. Enable caching

Reference: performance/lcp-optimization.md
```

---

### CLS (Cumulative Layout Shift)
**Target:** < 0.1

**What it measures:** Visual stability (elements shifting during load)

**Common causes in Divi:**
- Images without width/height attributes
- Web fonts loading late (FOIT/FOUT)
- Ads or embeds without reserved space
- Animations/transitions on load

**How to fix:**
```
1. Set explicit width/height on images
   Image Module → Design → Sizing → Width/Height

2. Preload web fonts
   Add to <head>:
   <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

3. Reserve space for embeds
   Use aspect-ratio CSS or fixed dimensions

4. Avoid layout-shifting animations
   Use opacity/transform, not width/height
```

---

### FID/INP (First Input Delay / Interaction to Next Paint)
**Target:** < 100ms (FID) / < 200ms (INP)

**What it measures:** Responsiveness to user interactions

**Common issues:**
- Heavy JavaScript blocking main thread
- Too many event listeners
- Large DOM size

**How to fix:**
```
1. Defer non-critical JavaScript
   Divi → Theme Options → Performance → Defer jQuery: ON

2. Reduce JavaScript execution time
   - Minimize plugins
   - Remove unused scripts
   - Split long tasks

3. Optimize event listeners
   - Use event delegation
   - Remove unnecessary listeners
   - Throttle/debounce where appropriate
```

---

## 📦 Caching & Delivery

### Caching Strategy
- [ ] Browser caching enabled?
- [ ] CDN in use for static assets?
- [ ] Object caching (Redis/Memcached)?
- [ ] Page caching plugin installed?

**Recommended plugins:**
- WP Rocket (premium, comprehensive)
- W3 Total Cache (free)
- LiteSpeed Cache (free, for LiteSpeed servers)

**Divi-specific caching:**
```
Divi → Support Center:
- Clear both "Static CSS File Generation" caches
- Clear "Dynamic CSS" cache after style changes
```

---

### Content Delivery

**Font Loading:**
- [ ] Google Fonts optimized?
  - Use `&display=swap` parameter
  - Preload critical fonts
  - Consider self-hosting fonts

- [ ] Font files compressed? (WOFF2 preferred)

**Reference:** `performance/font-loading-strategies.md`

**CSS/JS Delivery:**
- [ ] CSS minified?
- [ ] JavaScript minified?
- [ ] Files combined where beneficial?
- [ ] Inline critical CSS?
- [ ] Defer non-critical CSS?

---

## 🔍 Performance Testing Tools

### Recommended Tools:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Tests mobile & desktop
   - Provides Core Web Vitals data

2. **Chrome DevTools**
   - Lighthouse tab (comprehensive audit)
   - Performance tab (detailed timeline)
   - Network tab (asset loading)

3. **WebPageTest**
   - https://www.webpagetest.org/
   - Multiple locations
   - Detailed waterfall charts

4. **GTmetrix**
   - https://gtmetrix.com/
   - Performance score
   - Recommendations

---

## ✅ Performance Audit Checklist

**Before submitting findings:**

### Images
□ Hero image < 200KB, WebP format
□ Hero image lazy load disabled
□ Hero image preloaded in <head>
□ Below-fold images lazy loaded
□ Images properly sized (not oversized)
□ Responsive image sizes configured

### JavaScript
□ Total JS execution < 50KB per section
□ jQuery deferred
□ Non-critical scripts deferred
□ No render-blocking JavaScript

### CSS
□ Critical CSS inlined
□ Non-critical CSS deferred
□ CSS minified and combined
□ Unused CSS removed (if safe)

### Divi 5 Specific
□ No redundant nested wrappers in JSON
□ No preset conflicts/style bloat
□ Critical CSS generating correctly
□ Static CSS files enabled

### Core Web Vitals
□ LCP < 2.5s
□ CLS < 0.1
□ FID/INP < 200ms
□ All above-fold optimized

### Caching
□ Browser caching enabled
□ Page caching active
□ CDN configured (if applicable)
□ Object caching (if applicable)

---

**Related Files:**
- `performance/lcp-optimization.md`
- `performance/image-optimization-guide.md`
- `performance/font-loading-strategies.md`
- `performance/css-js-optimization.md`
- `performance/caching-configurations.md`

---

**Last Updated:** December 2024
**Divi Version:** 5.x
