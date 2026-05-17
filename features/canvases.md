# Canvases

**Purpose:** Complete guide to Divi 5's Canvas system — off-canvas layers, overlays, and design sandboxes
**Category:** Core Features
**Priority:** High
**Last Updated:** March 2026
**Divi Version:** 5.x (Official Release)

---

## Overview

Canvases are independent layout layers that exist outside the normal document flow. Unlike sections and rows which stack sequentially in the page structure, a Canvas operates as a separate container — used for overlays, modals, slide-in panels, mobile menus, and as a sandboxed prototyping space.

**The key architectural shift:** Page content and interface elements (pop-ups, drawers, menus) no longer have to live in the same structural container. Canvases separate them cleanly, making complex UI patterns maintainable without structural hacks.

---

## Where to Find It

**Creating a Canvas:**
- Visual Builder → Left Sidebar → Add Canvas (+ icon or Canvas tab)
- Visual Builder → Layers View → Add Canvas Layer

**Triggering a Canvas (via Interaction):**
- Module Settings → Interactions → On Click → Open Canvas

**Canvas Portal Module:**
- Add New Module → Search "Canvas Portal"
- Used to inject Canvas content into a specific location in page flow

**Canvas Settings:**
- Select Canvas in Layers View → Settings icon

---

## How Canvases Work

### The Two Layers

Every Divi 5 page has at minimum:

```
Main Canvas (always exists)
└─ Your page content (sections, rows, modules)

Off-Canvas Layers (optional, as many as needed)
├─ Canvas 1: Mobile Menu
├─ Canvas 2: Contact Modal
└─ Canvas 3: Cookie Banner
```

**The Off-Canvas layers:**
- Are invisible by default
- Triggered by Interactions (click, scroll, hover, state)
- Float above the Main Canvas when active
- Do not affect page flow when hidden

### Document Flow Independence

This is the critical difference from putting a modal inside a section:

```
❌ Old approach (modal inside page structure):
Section → Row → Column → Hidden Div (modal)
Problems:
- Affects page height when hidden
- Z-index battles
- Hard to position precisely
- Can't reuse across pages easily

✅ Canvas approach:
Main Canvas → Page content
Off-Canvas → Modal
Benefits:
- Zero impact on page flow when hidden
- Clean z-index (always on top)
- Positioned independently
- Reusable via Theme Builder
```

---

## Canvas Types & Use Cases

### 1. Overlay / Modal

**What it is:** Full or partial overlay that appears above page content

**Common uses:**
- Lightbox image viewer
- Lead capture pop-up
- Video player
- Terms & conditions before form submission
- Product quick-view

**Canvas Settings:**
```
Position: Fixed
Z-index: 9999
Background: rgba(0,0,0,0.7) (dark scrim)
Display on Trigger: Click
Animation: Fade In
```

### 2. Slide-In Panel (Drawer)

**What it is:** Panel slides in from an edge (left, right, top, bottom)

**Common uses:**
- Mobile navigation menu
- Shopping cart sidebar
- Filter panel for listings
- Contact/quote request form
- Cookie settings

**Canvas Settings:**
```
Position: Fixed
Enter from: Right (or Left)
Width: 320px (or 100% for mobile full-screen)
Animation: Slide In
```

### 3. Design Sandbox

**What it is:** A canvas you never trigger publicly — used purely for testing layouts and components

**Common uses:**
- Prototype a new section before adding to live page
- Test a responsive layout across breakpoints
- Build and compare component variations side by side
- Experiment with interaction patterns

**How to use:**
1. Create a canvas labeled "SANDBOX"
2. Build freely without touching main page
3. When satisfied, copy modules to main canvas
4. Delete or keep sandbox for reference

**Why this matters:** You can iterate destructively on the sandbox without any risk to the live layout underneath.

### 4. Persistent UI Layer

**What it is:** A canvas that stays visible (not toggle-based), positioned independently from page flow

**Common uses:**
- Cookie/GDPR banner (fixed bottom)
- Chat widget area
- Sticky promotional bar
- "Back to top" button group

---

## Triggering Canvases

Canvases are shown/hidden via Divi 5's Interactions system.

### Common Trigger Types

**On Click:**
```
1. Select any module (Button, Image, Icon, etc.)
2. Module Settings → Interactions tab
3. On Click → Action: Open Canvas
4. Select canvas from dropdown
5. Animation: Fade / Slide / Scale
```

**On Scroll (Enter Viewport):**
```
1. Select a section or module
2. Interactions → On Scroll → Element Enters Viewport
3. Action: Open Canvas
4. Delay: 500ms (optional)
```

**On Page Load with Delay:**
```
1. Select body/section
2. Interactions → On Page Load
3. Action: Open Canvas
4. Delay: 3000ms (3 seconds)
```

**Close Triggers:**
```
Add a close button inside the canvas itself:
1. Add Button or Icon module inside Canvas
2. Interactions → On Click → Close Canvas
3. Or: Close All Canvases
```

### Canvas Portal Module

The Canvas Portal allows you to place a canvas trigger or canvas output at a specific point in document flow, even though the canvas itself is independent.

**Use case example:**
```
You have a "Get Quote" button mid-page.
The quote form Canvas needs to appear centered on screen.

Without Portal: The canvas floats above page regardless of where trigger is.
With Portal: You can control where the "slot" for the canvas renders in flow,
             while the canvas itself still positions independently.
```

---

## Building Inside a Canvas

A canvas is a full layout environment. You can use:
- Sections, Rows, Columns
- All modules (text, images, forms, video, etc.)
- Design Variables
- Presets
- Flexbox and CSS Grid
- Nested Rows
- Responsive settings per breakpoint

**Treat it exactly like building a page section** — the only difference is it starts hidden and is triggered programmatically.

### Recommended Canvas Structure

**Modal Canvas:**
```
Canvas (Fixed, Centered, max-width 600px)
└─ Section (padding: 40px)
   └─ Row (Flex, Column direction)
      ├─ Row (Flex, Space Between) ← Header
      │  ├─ Text Module (Heading)
      │  └─ Icon Module (✕ Close button)
      ├─ Content Modules
      └─ Button Module (CTA or Submit)
```

**Slide-In Panel:**
```
Canvas (Fixed, Right edge, width 360px, full height)
└─ Section (height: 100vh, overflow: scroll)
   └─ Row (Flex, Column direction)
      ├─ Header area + close icon
      ├─ Navigation links / Form / Content
      └─ Footer CTA
```

---

## Responsive Behavior

Canvases have their own responsive settings, independent of the main page.

### Desktop
- Modals typically centered, max-width constrained (500–800px)
- Panels typically 320–400px wide from edge

### Tablet
- Modals can go wider (80% viewport width)
- Panels can stay same width or go slightly narrower

### Mobile
- Modals: Full screen (100vw × 100vh) for usability
- Panels: Full screen slide-in (100vw)
- Always add generous padding inside for touch usability

**Mobile-First Canvas Pattern:**
```
Canvas Width:
- Desktop: 480px
- Tablet: 80vw
- Phone: 100vw

Canvas Height:
- Desktop: Auto (content)
- Phone: 100vh (full screen)

Close button:
- Min touch target: 44px × 44px
- Position: Top right, always visible
```

---

## Accessibility Considerations

Canvases used for interactive UI must follow accessibility best practices.

### Focus Management
```
When a modal opens:
- Focus should move to the first focusable element inside
- Focus should be trapped within the modal while open
- On close, focus should return to the trigger element

In Divi 5:
- Use Interactions to manage focus state
- Add tabindex="0" to canvas container if needed
- Test keyboard navigation (Tab, Shift+Tab, Escape to close)
```

### ARIA Attributes
```
Canvas container:
- role="dialog" (for modals)
- aria-modal="true"
- aria-labelledby="[heading id]"

Trigger button:
- aria-expanded="false/true" (reflects canvas state)
- aria-controls="[canvas id]"

Close button:
- aria-label="Close"
```

**Add via:** Module Settings → Advanced → HTML Attributes

### Escape Key to Close
Always allow Escape key to close modals and panels:
```
Interactions → On Keydown (Escape) → Close Canvas
```

---

## Troubleshooting

### Canvas Not Appearing on Trigger

**Symptoms:** Click trigger, nothing happens

**Causes & Fixes:**
1. Canvas not linked to trigger → Module → Interactions → On Click → confirm correct canvas selected
2. Canvas z-index too low → Canvas Settings → Z-index → set to 9999
3. Interaction not saved → Check Interactions tab has the action saved
4. Page cache serving old version → Clear Divi cache + browser cache

### Canvas Showing Behind Page Content

**Symptoms:** Canvas appears but is hidden behind header or other content

**Fix:**
```
Canvas Settings → Z-index: 99999
Header module (if sticky): Z-index: 9999 (lower than canvas)
```

### Canvas Affecting Page Layout When Hidden

**Symptoms:** Mysterious whitespace, page height wrong, layout shifts

**Cause:** Canvas is set to `display: block` or `visibility: visible` by default instead of hidden

**Fix:**
```
Canvas Settings → Default State: Hidden
Or: Advanced → Custom CSS → display: none (initial state)
```

### Canvas Not Closing

**Symptoms:** Can open canvas but can't close it

**Fix:**
1. Ensure close button exists inside canvas
2. Close button → Interactions → On Click → Close Canvas (or Close All Canvases)
3. Add Escape key close: Interactions → On Keydown → Escape → Close Canvas

### Canvas Scrolling Issues on Mobile

**Symptoms:** Content inside canvas not scrollable on iOS

**Fix:**
```
Canvas container → Advanced → Custom CSS:
-webkit-overflow-scrolling: touch;
overflow-y: scroll;
```

---

## Best Practices

1. **Always include a close mechanism** — Close button inside canvas, plus Escape key trigger. Never trap users.

2. **Label canvases descriptively in Layers View** — "Mobile Nav", "Quote Modal", "Cookie Banner", not "Canvas 1".

3. **Use a SANDBOX canvas on complex builds** — Before adding a new section to the live page, prototype it in a sandbox canvas first. When satisfied, copy to main.

4. **Keep modal content focused** — A modal should do one thing: capture a lead, show a video, present a form. Don't cram multiple purposes into one canvas.

5. **Set default state to hidden** — Verify the canvas is invisible on page load unless you intentionally want it visible (e.g., a persistent cookie banner).

6. **Test close behavior on mobile** — Touch users won't have an Escape key. The close button must be large (44px+), clearly visible, and always reachable without scrolling.

7. **Match canvas design system** — Use the same Design Variables and Presets inside canvases. They're still part of your site's design system.

8. **Avoid nesting canvases inside sections** — A canvas triggered from inside another canvas gets complicated. Keep canvas triggers on main page elements.

---

## When NOT to Use Canvases

- **Simple accordion/toggle content** → Use Toggle or Accordion module instead. Canvases are overkill for show/hide within a section.
- **Tooltips** → Too heavy. Use a CSS hover solution or a dedicated tooltip module.
- **Sticky header/footer bars** → These belong in Theme Builder as actual sticky elements, not canvases.
- **Tab interfaces** → Use Tab module. Canvases are for content that truly layers above the page.

---

## Canvas vs Other Approaches

| Situation | Use Canvas | Use Instead |
|---|---|---|
| Full-screen modal | ✅ Yes | — |
| Slide-in mobile nav | ✅ Yes | — |
| Tooltip on hover | ❌ | CSS :hover or Tooltip module |
| Show/hide FAQ | ❌ | Toggle/Accordion module |
| Sticky promo bar | ❌ | Theme Builder sticky section |
| Tab content panels | ❌ | Tab module |
| Lightbox image | ✅ Yes | — |
| Cookie banner | ✅ Yes | — |
| Prototype/sandbox | ✅ Yes | — |

---

## Advanced Usage

### Multi-Step Canvas (Wizard Pattern)

Build a multi-step form or wizard inside a single canvas:

```
Canvas
└─ Section
   ├─ Step 1 Row (visible by default)
   ├─ Step 2 Row (hidden by default)
   └─ Step 3 Row (hidden by default)

Interactions:
- "Next" button → Hide Step 1 Row → Show Step 2 Row
- "Back" button → Hide Step 2 Row → Show Step 1 Row
- "Submit" on Step 3 → Close Canvas + Trigger success message
```

### Canvas as Reusable Component via Theme Builder

If the same modal appears across many pages (e.g., a lead capture form):

1. Build it once as a Canvas in Theme Builder
2. Assign to "All Pages" template
3. Trigger it from any page with a button using Interactions
4. Update the canvas once → updates everywhere

**This is the most scalable pattern for site-wide modals.**

### Combine with Design Sandbox for Client Reviews

```
Workflow for presenting design options to clients:
1. Main Canvas: Approved, live design
2. Sandbox Canvas A: Variation 1 (different hero layout)
3. Sandbox Canvas B: Variation 2 (different color treatment)

During review:
- Toggle canvases to walk client through options
- No risk to the live design
- Accepted variation → copy to Main Canvas
- Delete sandbox canvases
```

---

## Related Files

**Prerequisites:**
- `../build/04_divi5_workflow.md` — Build order context (structure before interactions)
- `flexbox-layout-system.md` — Building layouts inside canvases

**Integration:**
- `../build/02_divi5_mechanics.md` — Interactions system (triggers for canvases)
- `../audits/04_DIVI5_LOGIC.md` — Checking canvas accessibility in audits
- `theme-builder.md` — Deploying canvases site-wide via templates

**Related Concepts:**
- `nested-modules.md` — Complex module structures inside canvases
- `responsive-breakpoints.md` — Responsive canvas sizing

---

**Last Updated:** March 2026
**Status:** Active
**Divi Version:** 5.x (Official Release)
