# Safety Rules

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Active policy  
**Last Updated:** 2026-05-18

---

## Core Safety Principle

The operator protects site quality, client work, and Simplicity Tech standards.

When unsure, slow down, route to the right documentation, work on staging, and ask for approval before high-impact actions.

---

## Always

- Work on staging first for real site changes.
- Prefer existing patterns before creating new ones.
- Preserve existing KB structure and links.
- Preserve responsive behaviour.
- Verify desktop, tablet, and mobile when relevant.
- Use variables, presets, and reusable systems where possible.
- Document all changes.
- Report assumptions, risks, and verification.
- Keep changes scoped to the requested task.
- For browser automation, act, wait, verify state changed, re-query UI, then continue or stop.

---

## Never Without Explicit Approval

- Publish automatically.
- Modify production blindly.
- Overwrite global layouts, headers, footers, presets, variables, or Theme Builder templates.
- Run destructive or broad global edits.
- Delete layouts, sections, presets, snippets, or documentation.
- Apply Find & Replace across a whole site without preview and backup.
- Treat browser automation as permission to improvise.
- Treat a successful click or selector match as proof that the intended UI state changed.
- Restructure this repository.
- Write directly to the WordPress database (wp_posts, wp_postmeta, wp_options, or any table) for any reason, including local environments.

---

## Implementation Execution Order

For any Divi layout or styling fix, the required execution order is:

1. Open the page in a browser (LocalWP or staging).
2. Open Divi Builder.
3. Check `operator/divi-builder-capabilities.md` — confirm the target interaction is VERIFIED. Do not proceed on ASSUMED or UNKNOWN capabilities without a verification step.
4. Confirm the target element's full parent chain (Section type → Row → Column → Module) using structure-first navigation — right-panel hierarchy (VERIFIED), Layers View (full targeting still needs verification), or breadcrumbs in an open settings modal (verify locally first). Do not rely on canvas-only selection.
5. If the target field has visual styling, confirm whether the value is local, preset-controlled, or variable-referenced before editing. Use the Style Inspector when locally verified. If the value is preset-controlled or variable-referenced, assess propagation scope before deciding whether to apply a local override or edit the global source.
6. Inspect the relevant section, row, or column for existing responsive controls using verified targeting methods (right-panel hierarchy preferred).
7. For each browser interaction, act, wait, verify visible/state change, re-query the relevant UI surface, then continue or stop. Do not treat click success as task success.
8. Apply a Builder setting-level fix if the control exists. Document the setting changed.
9. If Builder controls are insufficient, document that finding explicitly and seek approval before writing any CSS.
10. If CSS fallback is approved: use WordPress Additional CSS or page-level CSS — not direct database mutation. Document it as a fallback, not first-line execution.
11. Never skip steps 1–8 to go directly to CSS or database mutation.

Operator note: Direct database mutation (via mysql2, wp-cli, or any script) is not an approved path unless explicitly authorised for that specific task. See `operator/memory.md` — Process / Safety for the incident record.

---

## High-Risk Actions

Treat these as high-risk:

- Theme Builder changes.
- Global preset changes.
- Global variable changes.
- Whole-site Find & Replace.
- Extend Attributes across an entire site.
- Production database changes.
- Deployment, migration, or rollback actions.
- Plugin updates on production.
- Browser automation that modifies live content.

High-risk actions require clear context, staging validation, and explicit approval.

---

## QA Minimums

For visual or layout work, check:

- Desktop.
- Tablet.
- Mobile.
- Horizontal overflow.
- Button and form usability.
- Text readability.
- Basic accessibility risks.
- Performance impact if animations, media, or scripts are involved.

For deployment or production work, use `workflows/deployment-checklist.md`.

---

## Repository Safety

This repository is a mature KB plus governance system.

Do not:

- Move existing KB files.
- Rename existing folders.
- Rewrite large docs casually.
- Clean stale links during unrelated tasks.
- Add new libraries unless requested.

Additive changes are preferred.
