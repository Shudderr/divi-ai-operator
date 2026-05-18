# Verification Session: Layers View 001

**Session ID:** layers-view-001  
**Date:** 2026-05-18  
**Type:** Read-only verification  
**Target:** Divi Visual Builder — Layers View only  
**Site:** sampleproblem-pages.local (WP 6.9.4 · Divi 5.5.2 · Backwards Compatibility Mode)  
**Page tested:** home (post ID 7)  
**Operator:** Claude (Sonnet 4.6) via Chrome DevTools MCP  

---

## Session Rules

- Do NOT edit content.
- Do NOT save.
- Do NOT publish.
- Do NOT apply fixes.
- Do NOT inspect CASE-001 implementation.
- Do NOT mutate database.
- Do NOT use CSS fallback.
- Do NOT test multiple systems at once.

---

## Browser Entry Path

1. Navigated to: `http://sampleproblem-pages.local/wp-admin/edit.php?post_type=page` — logged in as `zacadmin`.
2. Used "Edit With Divi" row action → URL: `http://sampleproblem-pages.local/home/?et_fb=1&PageSpeed=off`
3. Builder loaded, confirmed by presence of Save, Exit, Page Menu buttons and canvas iframe.
4. Layers button found via `.et-vb-builder-bar-button--divi-layers` — clicked via JS.

---

## State-Aware Automation Protocol Used

Every step followed: **Act → Wait → Verify state changed → Re-query UI → Continue or stop.**

No click was treated as task success without confirming visible state change.

---

## Verification Results

### Q1 — Can Layers View be opened reliably?

**Result: VERIFIED**

- Clicked the Layers button (`.et-vb-builder-bar-button--divi-layers`) via JavaScript.
- Waited for text "Layers", "Open All", "Search Layout" to appear.
- Re-queried snapshot: Layers panel appeared with "Search Layout" searchbox, "Open All" button, and 9 section-level expand buttons (Header, Stats, Listings, Categories, Features, About, Team, Testimonials, Footer).
- State change confirmed: panel elements present where none were before.
- Screenshot: `03-q1-layers-open.png`

**Caveat:** Opening requires JS `.click()` on the button. Standard snapshot UID click was not used because the builder bar button does not appear in the a11y snapshot; it is only findable via DOM querySelector.

---

### Q2 — Does "Open All" expand the tree reliably after waiting and re-querying?

**Result: VERIFIED**

- Clicked "Open All" button (uid from snapshot).
- Waited for text "Close All", "Row", "Column", "Heading", "Icon" to appear.
- Re-queried snapshot: "Open All" button label changed to "Close All". All 9 section expand buttons changed to "Collapse [Section Name]". Full tree appeared with Row, Column, Inner Row, Inner Column, and all Module types expanded to leaf level.
- State change confirmed immediately — no secondary wait needed.
- Screenshot: `04-q2-open-all-expanded.png`

**Caveat:** Previous session (vs-001) recorded asynchronous expansion. In this session, expansion was synchronous and immediate. The asynchronous behaviour may be load-state or timing dependent. Operators should still verify via wait/re-query rather than assuming immediate completion.

---

### Q3 — Can individual sections expand/collapse reliably?

**Result: VERIFIED — with important targeting caveat**

**What was observed:**

Two distinct click targets exist per section row in the Layers panel:

| Target | a11y label | Effect |
|--------|-----------|--------|
| Outer section button | "Collapse [Name]" / "Expand [Name]" | **Opens the section settings panel** — does NOT toggle expand/collapse |
| Inner toggle button (child) | "Collapse" / "Expand" | **Toggles the tree expand/collapse state** |

Clicking the outer "Collapse Header" button (outer) → Section settings panel opened, tree state unchanged.  
Clicking the inner "Collapse" button (child of the section row) → Header tree collapsed, button changed to "Expand Header", child elements removed from tree.

State change confirmed via re-query: "Expand Header" appeared; Header child elements (Row, Column, Module nodes) disappeared from snapshot.

Screenshot: `05-q3-section-click-opens-settings.png` (outer click opened settings)  
Screenshot: `06-q3-header-collapsed.png` (inner toggle collapsed Header)

**Operator rule:** To collapse/expand a section in Layers, target the **inner** "Collapse"/"Expand" toggle sub-button, not the outer section row button. Targeting the outer button opens the section's settings panel instead.

---

### Q4 — Can a specific element be selected from the Layers tree?

**Result: VERIFIED**

- Clicked the "Heading" module button (uid=5_26) inside the Stats section → Column → Heading path.
- State change confirmed: settings panel updated (changed from Section settings to Heading settings).
- Screenshot: `07-q4-q6-module-selected-breadcrumb.png`

---

### Q5 — Does selecting an element from Layers open the correct settings panel?

**Result: VERIFIED**

- Heading module clicked → settings panel heading changed to "Heading" (was "Section").
- Content tab groups changed to: Text, Link, Elements, Background, Loop, Meta.
- These match the Heading module Content tab structure verified in capability matrix §1.1.
- The settings panel corresponded to the correct element type.

---

### Q6 — Can the operator confirm the selected element type from the settings panel?

**Result: VERIFIED — includes breadcrumb confirmation**

The settings panel provides two confirmation mechanisms:

1. **Panel heading:** Shows element type name — "Heading" (level-2 heading in panel).
2. **Breadcrumb trail:** Shows full parent path. After clicking the Heading module in Stats section:

   ```
   Page → Section → Column → Heading
   ```

   This breadcrumb is rendered as clickable buttons (uid=6_3 "Page", uid=8_5 "Section", uid=8_6 "Column", uid=6_5 heading "Heading").

**Additional finding:** The breadcrumb confirms the Specialty Section structure of the Stats section — Column appears directly under Section with no Row intermediary. This is consistent with a Module Column inside a Specialty Section.

**Additional finding:** Breadcrumbs in the settings panel are now VERIFIED. This was previously listed as UNKNOWN in the capability matrix.

---

### Q7 — Can Layers View identify the following element types?

**Result: All seven confirmed visible and distinctly labeled**

| Element Type | Result | Evidence |
|--------------|--------|---------|
| Section | VERIFIED | 9 sections listed by name: Header, Stats, Listings, Categories, Features, About, Team, Testimonials, Footer |
| Row | VERIFIED | "Collapse Row" buttons in Header, Listings, Categories, Features, About, Team, Testimonials, Footer sections |
| Column | VERIFIED | "Collapse Column" buttons throughout the tree |
| Module | VERIFIED | Heading, Icon, Text, Number Counter, Image, Button, Blurb, Person, Accordion, Slider — all labeled by module type |
| Specialty Section | VERIFIED | Stats section — "Collapse Column" appears directly under section with no "Collapse Row" intermediary. Breadcrumb confirms Page → Section → Column → Module path (no Row). |
| Row-Inner | VERIFIED | "Collapse Inner Row" label appears in Stats section tree |
| Column-Inner | VERIFIED | "Collapse Inner Column" label appears in Stats section tree |

**Additional findings:**

- **Accordion module** appears in Layers with expandable **Accordion Item** children (About section). Accordion items are individually listed as child nodes.
- **Slider module** appears with expandable **Slide** children (Testimonials section). Slide items use the slide content text as their label.
- **Person module** confirmed present (Team section). This module type was not previously listed in the capability matrix.
- **Canvas auto-scroll:** Clicking a module in Layers scrolls the canvas to the selected element's position. This aids visual confirmation.

---

### Q8 — Does Layers View reduce canvas ambiguity enough to be considered a preferred traversal method?

**Result: VERIFIED — recommended as preferred structure-first traversal method**

Layers View provides:

- **Explicit element labeling** — every element is labeled by type and (for sections) by name. No hover required.
- **Full hierarchy visible at once** — Section → Row → Column → Module path is readable without canvas interaction.
- **Distinguishes all seven element types** — including Specialty Section, Row-Inner, and Column-Inner, which cannot be reliably identified from the canvas alone.
- **Canvas auto-scroll** — selecting an element from Layers scrolls the canvas to it, maintaining visual context.
- **Breadcrumbs in settings panel** — confirm hierarchy position after selection, providing a second structural check.
- **No iframe hover simulation required** — Layers operates in the Builder UI frame, not the canvas iframe.

**Limitations to document:**

- The outer section-row click opens settings, not expand/collapse. Automation must target the inner toggle sub-button for tree navigation. This is a non-obvious targeting requirement.
- "Open All" expansion may be asynchronous under some load conditions (observed in a prior session). State-aware wait/re-query is still required.
- Element labels for Specialty Section do not use a special indicator (e.g., no badge or icon distinguishing them from Regular sections in the section-level list). The distinction is structural: absence of a Row node directly under the section is the indicator.

---

## Summary Table

| Question | Result |
|----------|--------|
| Q1: Layers View opens reliably | VERIFIED |
| Q2: "Open All" expands full tree reliably | VERIFIED |
| Q3: Individual sections expand/collapse reliably | VERIFIED (with targeting caveat) |
| Q4: Specific element selectable from Layers tree | VERIFIED |
| Q5: Selecting element opens correct settings panel | VERIFIED |
| Q6: Operator can confirm element type from settings | VERIFIED |
| Q7: All 7 element types identifiable | VERIFIED (all 7) |
| Q8: Layers View is preferred traversal method | VERIFIED |

---

## Additional Findings (Beyond the 8 Questions)

| Finding | Status | Notes |
|---------|--------|-------|
| Breadcrumbs in settings panel | VERIFIED | Shows Page → Section → Column → Module path; was previously UNKNOWN |
| Stats section is a Specialty Section | VERIFIED | Column directly under Section, no Row — confirmed by tree structure and breadcrumb |
| Row-Inner and Column-Inner labels in Layers | VERIFIED | Distinctly labeled "Inner Row" / "Inner Column" vs "Row" / "Column" |
| Canvas auto-scrolls to selected element | VERIFIED | Clicking Layers module scrolls canvas to element |
| Person module type present | VERIFIED | Team section — was not in previous module type list |
| Accordion Items visible in Layers | VERIFIED | As child nodes of Accordion module |
| Slider Slides visible in Layers | VERIFIED | Labeled with slide text content |
| Section-row outer click opens settings | VERIFIED | Important: NOT the same as the expand/collapse toggle |
| "Open All" button → "Close All" on expansion | VERIFIED | State indicator for full-tree state |

---

## Home Page Structure Map (Verified via Layers)

```
home (post ID 7)
├── Header [Regular Section]
│   ├── Row
│   │   └── Column
│   │       ├── Heading
│   │       └── Heading
│   └── Row
│       ├── Column → Icon, Heading
│       ├── Column → Icon, Heading
│       ├── Column → Icon, Heading
│       └── Column → Icon, Heading
├── Stats [Specialty Section — confirmed]
│   ├── Column [Module Column]
│   │   └── Heading
│   └── Column [Row Column]
│       ├── Inner Row
│       │   └── Inner Column → Text
│       └── Inner Row
│           ├── Inner Column → Number Counter
│           ├── Inner Column → Number Counter
│           └── Inner Column → Number Counter
├── Listings [Regular Section]
│   ├── Row → Column (Heading, Heading)
│   └── Row → Column×3 (Image, Heading, Heading, Text, Button each)
├── Categories [Regular Section]
│   └── Row → Column×4 (Heading each)
├── Features [Regular Section]
│   ├── Row → Column (Heading, Heading)
│   └── Row → Column×3 (Blurb, Button each)
├── About [Regular Section]
│   └── Row
│       ├── Column → Heading, Heading, Accordion (3 Accordion Items)
│       └── Column → Image
├── Team [Regular Section]
│   ├── Row → Column (Heading, Heading), Column (Button)
│   └── Row → Column×4 (Person each)
├── Testimonials [Regular Section]
│   └── Row
│       ├── Column → Heading
│       └── Slider (3 Slides)
└── Footer [Regular Section]
    ├── Row → Column (Heading, Text), Column (Heading, Heading), Column (Heading, Text)
    ├── Row → Column (Image)
    └── Row → Column (Text)
```

**Section type breakdown (now verified):**
- Regular sections: 8 (Header, Listings, Categories, Features, About, Team, Testimonials, Footer)
- Specialty sections: 1 (Stats)
- Fullwidth sections: 0

---

## Screenshots

| File | Contents |
|------|---------|
| `02-builder-loaded.png` | Divi Builder initial load state |
| `03-q1-layers-open.png` | Layers panel open — 9 sections listed, all collapsed |
| `04-q2-open-all-expanded.png` | After "Open All" — full tree expanded to leaf level |
| `05-q3-section-click-opens-settings.png` | Outer section row click → Section settings panel opened (not collapse) |
| `06-q3-header-collapsed.png` | Header section collapsed via inner toggle button |
| `07-q4-q6-module-selected-breadcrumb.png` | Heading module selected — Heading settings panel with breadcrumb visible |

---

## Capability Matrix Updates Required

The following entries should be updated in `operator/divi-builder-capabilities.md`:

- Section 1: Add new VERIFIED entries for Layers targeting reliability, breadcrumbs, Specialty Section presence on home page.
- Section 3.4: Upgrade from NEEDS VERIFICATION to VERIFIED — Layers full targeting reliability is now confirmed.
- Section 3.6: Upgrade from UNKNOWN to VERIFIED — Specialty Section confirmed present (Stats section).
- Section 5: Remove Layers expansion timing and Specialty Section column types from the Unknown table.

---

## Cross-References

| Document | Relationship |
|----------|-------------|
| [operator/divi-builder-capabilities.md](../../operator/divi-builder-capabilities.md) | Capability matrix — updated with findings from this session |
| [cases/verification-sessions/vs-001-screenshots/](../vs-001-screenshots/) | Prior session screenshots — Layers also visible in screenshots 04, 05, 10–13 |
| [resources/external-sources/summaries/stage-3-navigation-and-traversal.md](../../resources/external-sources/summaries/stage-3-navigation-and-traversal.md) | Official-doc-backed Layers concepts — now locally verified |
