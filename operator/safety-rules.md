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

---

## Never Without Explicit Approval

- Publish automatically.
- Modify production blindly.
- Overwrite global layouts, headers, footers, presets, variables, or Theme Builder templates.
- Run destructive or broad global edits.
- Delete layouts, sections, presets, snippets, or documentation.
- Apply Find & Replace across a whole site without preview and backup.
- Treat browser automation as permission to improvise.
- Restructure this repository.

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

