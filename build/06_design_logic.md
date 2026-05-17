# Design Logic & Universal Constants - Simplicity Template

**Purpose:** This file acts as the "Decision Engine" for Claude Code. It provides the exact mathematical values for all UI elements to ensure 100% design consistency.

---

## 💎 1. The Elevation System (Shadows)
Never guess on shadow values. Use these exact presets for all components:

| Level | Usage | Blur | Spread | Color |
| :--- | :--- | :--- | :--- | :--- |
| **Flat** | Basic sections | 0px | 0px | N/A |
| **Low** | Standard Cards | 16px | 0px | `rgba(0,0,0,0.08)` |
| **Medium** | Featured/Active Cards | 40px | -10px | `rgba(0,0,0,0.12)` |
| **High** | Popups / Floating CTAs | 60px | -15px | `rgba(0,0,0,0.15)` |

---

## 📐 2. The Radius & Border Logic
- **Component Cards**: `12px` (Standard for containers).
- **Buttons**: `4px` (Gives a professional, "SaaS" look).
- **Input Fields**: `4px`.
- **Featured Borders**: Always `2px` solid using `var(--et-global-color-accent)`.

---

## ✍️ 3. Typography Rhythm
To maintain vertical rhythm, always use these Line Height and Weight constants:

- **H1 - H3**: Line Height `1.3em` | Weight `Bold (700)`
- **H4 - H6**: Line Height `1.4em` | Weight `Semi-Bold (600)`
- **Body Text**: Line Height `1.6em` | Weight `Regular (400)`
- **Letter Spacing**: Headers should be `-0.02em` for a modern "tight" feel.

---

## ⚡ 4. Interaction Logic (Transitions)
When directing the user to the **Advanced Tab > Custom CSS**, use these timing constants for consistency:

- **Speed**: `0.3s`
- **Easing**: `ease-in-out`
- **Standard Hover Lift**: `transform: translateY(-8px);`

---

## 📏 5. Spacing Constants (The 8px Grid)
Always choose from this scale when the user asks for padding/margin:

- **Tight (xs)**: `8px`
- **Small (sm)**: `16px`
- **Comfortable (md)**: `24px`
- **Standard Card (lg)**: `32px`
- **Section Default (xl)**: `64px`
- **Hero/Landing (2xl)**: `96px`

---

## 🛑 6. Implementation Guardrails
- **No Hardcoded Hex**: Always ask the user to use the **Global Color Picker** or provide the `var(--et-global-color-X)` variable.
- **Mobile First**: When giving values, always specify the "Tablet" and "Phone" reduction (typically 20% smaller than desktop).