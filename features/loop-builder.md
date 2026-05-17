# Loop Builder

**Purpose:** Complete guide to dynamic content display with Divi 5's Loop Builder
**Category:** Core Features
**Priority:** High
**Last Updated:** January 2026
**Divi Version:** 5.x (Public Beta 7+)

---

## Overview

Loop Builder dynamically displays content from WordPress database using any Divi element as template. Unlike Blog/Portfolio modules, you build the design completely custom.

**Key Concept:** Build one "card," Divi repeats it for all items automatically.

---

## What Can Be Looped

### Post Types
- Blog posts
- WooCommerce products
- Custom post types (Projects, Events, Team)
- Pages

### Terms (Taxonomy)
- Categories
- Tags
- Custom taxonomies

### Users
- Authors
- Member directories
- Team listings

### ACF Integration
- Custom fields
- Repeater fields
- Relationship fields

---

## How It Works

**5-Step Process:**

1. **Build Template:** Design one "card" using Divi modules
2. **Enable Loop:** Turn on Loop Element for container (Row/Column)
3. **Configure Query:** Choose what to loop (posts, products, users)
4. **Insert Dynamic Content:** Map fields to modules (title, image, excerpt)
5. **Divi Repeats:** Template repeats for each item automatically

---

## Loop Settings

### Query Type Options

**Post Type:**
- Posts, Pages, Products, Custom Post Types

**Term:**
- Categories, Tags, Custom Taxonomies

**User:**
- Authors, Roles, Specific Users

### Post Type Filters

**Categories/Tags:**
- Filter by specific categories
- Filter by tags
- Combine multiple filters

**Advanced Filters:**
- **Specific Posts:** Choose exact post IDs
- **Exclude:** Remove specific IDs
- **Post Status:** Published, draft, pending
- **Order By:** Date, title, random, meta field
- **Order:** Ascending/descending
- **Posts Per Page:** Limit results
- **Offset:** Skip first X posts

### Meta Queries (Advanced)

Filter by custom field values:

**Example:**
```
Show products where:
Meta Key: price
Meta Value: 50
Compare: Less than
Type: Numeric

Result: Shows only products under $50
```

**Compare Options:**
- Equals, Not equals
- Greater than, Less than
- Greater than or equal to
- Less than or equal to
- Contains, Does not contain

---

## Dynamic Content Mapping

**Click dynamic content icon (ϟ) next to any field**

### Common Mappings

- **Loop Title:** Post/product/term title
- **Loop Featured Image:** Featured image
- **Loop Excerpt:** Post excerpt
- **Loop Content:** Full content
- **Loop Link:** Permalink to item
- **Loop Date:** Publication date
- **Loop Author:** Author name
- **Loop Author Avatar:** Author image
- **Loop Categories:** Category list
- **Loop Tags:** Tag list
- **Loop Custom Field:** Any ACF field

### WooCommerce Specific

- **Loop Product Price:** Price
- **Loop Product Sale Price:** Sale price
- **Loop Product Rating:** Star rating
- **Loop Product Stock Status:** In stock/Out of stock
- **Loop Add to Cart Button:** Add to cart link

---

## Loop + Layout Systems

### Flexbox Loop

```
Row Settings:
- Layout Style: Flex
- Layout Wrapping: Wrap
- Horizontal Gap: clamp(16px, 3vw, 48px)
- Vertical Gap: clamp(16px, 3vw, 48px)

Column (Enable Loop):
- Flex item
- Build card design inside

Result: Responsive card grid
```

### Grid Loop

```
Row Settings:
- Layout Style: Grid
- Grid Template Columns: repeat(3, 1fr)
- Column Gap: clamp(16px, 3vw, 48px)
- Row Gap: clamp(16px, 3vw, 48px)

Column (Enable Loop):
- Grid item
- Build card design inside

Result: Perfect CSS Grid layout
```

---

## Loop + Pagination Module

**Adding Pagination:**

1. Add Loop (displays first X posts)
2. Below loop, add Pagination Module
3. Automatically connects to loop
4. Configure:
   - "Newer" and "Older" labels
   - Button styling
   - Alignment

**Posts per page:** Set in Loop settings

---

## Practical Examples

### Custom Blog Feed

```
1. Add 3-column row
2. Enable Loop on first column
3. Query Type: Post Type = Posts
4. Order By: Date, Descending
5. Posts Per Page: 9

Inside Looped Column:
- Image module → Loop Featured Image
- Heading module → Loop Title
- Text module → Loop Excerpt
- Button module → Loop Link

Style once, applies to all posts
```

### WooCommerce Product Grid

```
1. Add row, enable Grid layout
2. Grid Template Columns: repeat(4, 1fr)
3. Enable Loop on column
4. Query Type: Post Type = Products
5. Order By: Price, Ascending

Inside Looped Column:
- Image → Loop Featured Image
- Heading → Loop Title
- Text → Loop Product Price
- Button → "Add to Cart" link

Apply preset for consistent cards
```

### Team Directory with ACF

**Setup:**
1. Create custom post type "Team Members"
2. Add ACF fields:
   - Position (text)
   - Phone (text)
   - Email (email)
   - LinkedIn (URL)

**Build Loop:**
```
1. Add row, enable Loop
2. Query Type: Team Members
3. Order By: Menu Order

Inside Column:
- Image → Loop Featured Image
- Heading → Loop Title (Name)
- Text → Loop Custom Field (Position)
- Text → Loop Custom Field (Phone)
- Button → Loop Custom Field (Email)
- Button → Loop Custom Field (LinkedIn)

Apply "Team Card" preset
```

### Events Calendar

**Setup:**
1. Custom post type "Events"
2. ACF fields:
   - Event Date (date picker)
   - Event Location (text)
   - Ticket Price (number)

**Build Loop with Date Filter:**
```
Query Settings:
- Meta Key: event_date
- Compare: Greater than or equal to
- Meta Value: TODAY (dynamic)
- Order By: event_date
- Order: Ascending

Result: Shows only upcoming events
```

---

## Loop Builder vs Traditional Modules

### Use Blog Module When:
- Standard blog layout needed
- Quick setup priority
- Built-in features sufficient
- No custom fields

### Use Loop Builder When:
- Custom card design required
- Need custom fields display
- Complex layouts needed
- WooCommerce customization
- Non-standard content types
- Full control over design

---

## Advanced Techniques

### Conditional Display

**Using ACF Conditional Logic:**
```
Show "Featured" badge if:
- Custom field "is_featured" = true

Inside loop, add Text module:
- Content: "FEATURED"
- Visibility: Show if custom field is_featured equals 1
```

### Mixed Content Types

**Query Multiple Post Types:**
```
Query Type: Post Type
Post Types: Posts, Projects, Case Studies
Order By: Date

Result: Mixed content feed
```

### Related Posts

**Build "Related Posts" section:**
```
Query Type: Post Type
Categories: Same as current post (dynamic)
Exclude: Current post ID (dynamic)
Posts Per Page: 3

Result: Shows 3 related posts by category
```

---

## Loop + Presets

**Efficient Workflow:**

1. Build one perfect card in looped column
2. Style completely
3. Save as preset
4. Apply to other loops site-wide

**Example:**
```
Create "Blog Card" preset:
- Image sizing/spacing
- Title typography
- Excerpt styling
- Button design
- Card padding/shadow

Apply to:
- Blog archive loops
- Related posts loops
- Category archive loops

One update = all loops update
```

---

## Performance Considerations

### Optimize Queries

**Limit posts per page:**
- Don't load 100 posts at once
- Use pagination
- Recommended: 6-12 posts per page

**Use offsets carefully:**
- Offset can slow queries
- Better: Use pagination

**Cache queries:**
- WP caching plugins help
- Consider WP Rocket or similar

### Image Optimization

**In Loop Featured Images:**
- Use proper image sizes
- Enable lazy loading
- WebP format
- Compress images

---

## Troubleshooting

### Loop Not Showing Content

**Check:**
1. Posts exist in database
2. Post status = Published
3. Query filters not too restrictive
4. Dynamic content properly mapped
5. Loop enabled on correct element

### Dynamic Content Not Appearing

**Check:**
1. Dynamic content icon (ϟ) used
2. Correct field selected
3. Field has data in posts
4. ACF fields registered correctly

### Pagination Not Working

**Check:**
1. Pagination module below loop
2. Posts per page set in Loop settings
3. Enough posts to paginate
4. Permalink settings flushed

### Styling Issues

**Solutions:**
1. Apply preset to looped column
2. Check responsive settings
3. Test with single post first
4. Use Inspector to identify conflicts

---

## Related Files

**Prerequisites:**
- `design-variables.md` - Using variables in loop cards
- `preset-system-complete.md` - Creating card presets
- `flexbox-layout-system.md` - Layout options

**Integration:**
- `../build/02_divi5_mechanics.md` - Loop workflows
- `../workflows/starting-new-project.md` - Planning loops

---

**Last Updated:** January 2026
**Status:** Active
**Divi Version:** 5.x (Public Beta 7+)
