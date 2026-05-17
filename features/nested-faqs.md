---
last_verified_version: 5.0.0
status: active
last_updated: December 2024
---

# Nested FAQs (Accordion/Toggle) in Divi 5

**Feature:** Toggle modules inside Toggle modules  
**Since:** Divi 5.0 (Native Module Nesting)  
**Use Case:** Multi-level FAQ sections, nested menus, expandable content  
**Last Tested:** December 2024 - Divi 5.x

---

## Overview

**Divi 5 introduced native module nesting!** You can now drag and drop Toggle modules directly inside other Toggle modules without any code hacks or workarounds.

**What changed from Divi 4:**
- ❌ Old way: Had to paste HTML/code into Toggle content
- ✅ New way: Use Visual Builder to drag modules into modules

---

## Basic Setup (Divi 5 Method)

### Step 1: Create Parent Toggle
1. Add **Toggle Module** to your section
2. Give it a title (e.g., "Product Features")

### Step 2: Add Nested Toggles Visually
1. **Hover over the parent Toggle** in the Visual Builder
2. Look for the **blue "+ " button** inside the Toggle content area
3. Click it → **Add New Module**
4. Select **Toggle Module**
5. Configure the nested Toggle (title, content)
6. Repeat for more nested Toggles

**That's it!** No CSS required for basic functionality.

---

## Visual Structure

**What you'll see in Visual Builder:**

```
Toggle Module (Parent)
├─ Toggle Content Area
   ├─ Toggle Module (Child 1)
   │  └─ Toggle Content
   ├─ Toggle Module (Child 2)
   │  └─ Toggle Content
   └─ Text Module (optional)
```

**Modules you can nest inside Toggles:**
- Toggle Module ✅
- Accordion Module ✅
- Text Module ✅
- Image Module ✅
- Button Module ✅
- Any other module ✅

---

## How to Navigate Nested Structure

### In Visual Builder

**Expanding parent to see children:**
1. Click parent Toggle title bar
2. Children modules appear in content area

**Selecting nested modules:**
- Click directly on the nested module
- Or use **Layers panel** (bottom-left icon) to see hierarchy

**Moving nested modules:**
- Drag and drop like any module
- Can move between parent Toggles

### In Wireframe View

**Keyboard:** `Cmd/Ctrl + Shift + W`

Shows full structure clearly:
```
□ Section
  □ Row
    □ Column
      ⊟ Toggle (Parent)
        ⊟ Toggle (Child)
        ⊟ Toggle (Child)
```

---

## Optional CSS Styling

**Note:** CSS is now OPTIONAL for functionality. Use it only for visual customization.

### Visual Distinction (Parent vs Child)

Add this to differentiate nested levels:

**Location:** Divi → Theme Options → Custom CSS

```css
/* Style parent toggles */
.et_pb_toggle {
    background-color: #f5f5f5;
    border-left: 3px solid #2c5530;
    margin-bottom: 10px;
}

.et_pb_toggle .et_pb_toggle_title {
    font-size: 18px;
    font-weight: bold;
    color: #2c5530;
}

/* Style nested (child) toggles - increased specificity */
.et_pb_toggle .et_pb_toggle_content .et_pb_toggle {
    background-color: #ffffff;
    border-left: 2px solid #e23a95;
    margin: 10px 0 10px 20px; /* Indent child toggles */
}

.et_pb_toggle .et_pb_toggle_content .et_pb_toggle .et_pb_toggle_title {
    font-size: 16px;
    font-weight: normal;
    color: #666666;
}
```

---

## Advanced Customization (Optional)

### Auto-Close Children When Parent Closes

**Use Case:** When collapsing parent Toggle, automatically close all child Toggles

**Location:** Divi → Theme Options → Integration → Add code to `<body>`

```javascript
<script>
jQuery(document).ready(function($) {
    // When any toggle closes, close all nested toggles inside
    $('.et_pb_toggle').on('click', '.et_pb_toggle_title', function() {
        const parentToggle = $(this).closest('.et_pb_toggle');
        
        // Small delay to check if parent is closing
        setTimeout(function() {
            if (!parentToggle.hasClass('et_pb_toggle_open')) {
                // Parent closed - close all nested toggles
                parentToggle.find('.et_pb_toggle_open').removeClass('et_pb_toggle_open');
            }
        }, 50);
    });
});
</script>
```

### Smooth Animation Timing

Add smoother transitions to nested toggles:

```css
/* Smooth open/close animations */
.et_pb_toggle .et_pb_toggle_content {
    transition: all 0.4s ease-in-out;
}

.et_pb_toggle .et_pb_toggle_content .et_pb_toggle .et_pb_toggle_content {
    transition: all 0.3s ease-in-out;
}
```

---

## Common Issues & Fixes

### Issue 1: Can't Find "+ Add Module" Button Inside Toggle
**Cause:** Not hovering correctly or Toggle is closed

**Fix:**
1. Make sure Toggle is open (click title to open)
2. Hover over the **content area** (not the title bar)
3. Look for blue "+ " button
4. If still not visible, try Wireframe View (`Cmd/Ctrl + Shift + W`)

### Issue 2: Can't Drag Module Into Toggle
**Cause:** Trying to drag while Toggle is closed

**Fix:**
1. Open the parent Toggle first
2. Then drag module into the content area
3. Or use "+ Add Module" button method

### Issue 3: Nested Toggles Look the Same as Parent
**Cause:** No visual distinction set

**Fix:** Use CSS styling from "Optional CSS Styling" section above

### Issue 4: Lost in Deep Nesting
**Cause:** Too many levels of nesting

**Fix:**
- Use **Layers panel** (bottom-left icon) to see structure
- Or switch to **Wireframe View** for clarity
- Consider limiting to 2 levels max

---

## Responsive Behavior

### Mobile Adjustments

```css
@media (max-width: 767px) {
    /* Reduce padding on mobile */
    .custom-toggle .et_pb_toggle_content .et_pb_toggle.et_pb_toggle_open .et_pb_toggle_content {
        padding: 15px 10px !important;
    }
    
    /* Smaller font sizes */
    .custom-toggle .et_pb_toggle_title {
        font-size: 16px !important;
    }
    
    .custom-toggle .et_pb_toggle_content .et_pb_toggle_title {
        font-size: 14px !important;
    }
}
```

---

## Divi 5 Specific Features

### Copy/Paste Between Toggles
- Select nested Toggle
- `Cmd/Ctrl + C` to copy
- Open different parent Toggle
- `Cmd/Ctrl + V` to paste

### Global Styles for Nested Toggles
You can create global presets for parent and child Toggles:

1. Style parent Toggle
2. Save as preset: "Parent Toggle Style"
3. Style child Toggle differently  
4. Save as preset: "Child Toggle Style"
5. Apply presets consistently across site

### Undo/Redo Works Properly
- Divi 5 tracks nested module changes
- `Cmd/Ctrl + Z` to undo adding nested modules
- Full history maintained

---

## Advanced: Three Levels Deep

**Structure:**
```
Toggle (Level 1: Main Category)
└─ Toggle (Level 2: Subcategory)
   └─ Toggle (Level 3: Specific Item)
```

**Visual hierarchy CSS:**
```css
/* Level 1: Parent */
.et_pb_toggle {
    border-left: 4px solid #2c5530;
    background: #f5f5f5;
    padding: 15px;
}

/* Level 2: Child */
.et_pb_toggle .et_pb_toggle_content .et_pb_toggle {
    border-left: 3px solid #e23a95;
    background: #ffffff;
    margin-left: 20px;
    padding: 12px;
}

/* Level 3: Grandchild */
.et_pb_toggle .et_pb_toggle_content .et_pb_toggle .et_pb_toggle_content .et_pb_toggle {
    border-left: 2px solid #999999;
    background: #fafafa;
    margin-left: 40px;
    padding: 10px;
    font-size: 14px;
}
```

**Warning:** 3 levels can be overwhelming on mobile. Test carefully!

---

## Best Practices

1. **Limit nesting to 2 levels** for usability
   - Parent → Child is ideal
   - Parent → Child → Grandchild is max
   - Beyond that, users get lost

2. **Use visual hierarchy** with CSS
   - Different colors for each level
   - Indent nested toggles
   - Different font sizes/weights

3. **Keep parent titles clear**
   - Parent: "Product Features"
   - Child: "Technical Specifications"
   - Grandchild: "Processor Details"

4. **Use Layers panel** when editing
   - Easier to navigate structure
   - See all nested modules at once

5. **Test on mobile**
   - Nested toggles can feel cramped on small screens
   - Consider using Accordion Module instead for mobile

6. **Consider accessibility**
   - Screen readers need clear hierarchy
   - Use semantic heading levels in titles
   - Test keyboard navigation (Tab through toggles)

---

## Alternative: Accordion Module

**When to use Accordion instead:**
- Only need 1 level of expansion
- Want only one section open at a time
- Cleaner mobile experience
- FAQ schema markup needed

**Accordion Advantages:**
- Auto-closes other sections when opening one
- Native schema markup support
- Simpler user experience
- Better for long lists

**Toggle Advantages (with nesting):**
- Multiple sections can be open
- True multi-level structure
- More flexible content organization

---

## Divi 4 vs Divi 5 Method

### Old Method (Divi 4)
```
❌ Switch to Text tab
❌ Paste HTML code manually
❌ Required custom CSS to make it work
❌ Hard to edit once created
❌ Breaking changes with updates
```

### New Method (Divi 5)
```
✅ Drag and drop in Visual Builder
✅ No code required for basic functionality
✅ CSS only for styling (optional)
✅ Easy to edit and rearrange
✅ Native Divi feature, fully supported
```

**Migration Tip:** If you have old Divi 4 nested toggles:
1. Create new parent Toggle
2. Recreate nested structure using drag-and-drop
3. Copy content from old toggles
4. Delete old code-based version
5. Remove old CSS if no longer needed

---

## Use Cases

**Good for:**
- Multi-level product specifications
- Detailed service breakdowns
- Nested documentation
- FAQ sections with subsections

**Not good for:**
- Simple one-level FAQs (use regular Toggle)
- More than 3 levels (use different structure)
- Mobile-heavy sites (can be overwhelming)

---

## [ADD YOUR NOTES]

```
Date:
Client/Project:
Problem:
Solution:
Code Used:
Gotchas:
```

---

**Related Files:**
- See `troubleshooting/common-issues.md` for toggle-specific problems

---

**Last Updated:** December 2024  
**Divi Version:** 5.x
