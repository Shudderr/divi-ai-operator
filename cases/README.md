# Divi Case Testing System

**Project:** Simplicity Tech Divi AI Operator  
**Status:** Active — foundational structure  
**Last Updated:** 2026-05-18

---

## Purpose

The `cases/` folder is the reproducible testing layer for the Simplicity Tech Divi AI Operator.

Cases are structured, versioned records of Divi problems, scenarios, and resolutions. They serve as:

- Reproducible problem descriptions for AI evaluation and training.
- Operator reasoning and routing practice material.
- Troubleshooting history and inputs to `operator/memory.md`.
- Future browser automation test targets.
- QA validation reference for recurring issue types.

---

## What A Case Is

A case is a documented Divi scenario with:

- A clear problem description.
- A defined environment (LocalWP, staging, or production snapshot).
- Structured assets (Divi JSON exports, screenshots, CSS).
- KB doc references.
- Safety considerations.
- Operator analysis, proposed fix, and confirmed outcome.

Cases are not informal notes. They follow `cases/case-template.md`.

---

## LocalWP As The Preferred Testing Environment

LocalWP is the preferred environment for creating and reproducing Divi test cases.

Reasons:

- Fully isolated — no production or staging risk.
- Fast to create and destroy sites.
- Supports Divi 5 and all Elegant Themes products.
- No server access, credentials, or hosting costs required.
- Reproducible: a case can be rebuilt on any LocalWP install from its assets.

### LocalWP Testing Workflow

1. Create a local site in LocalWP.
2. Install Divi 5.
3. Reproduce the issue or scenario described in the case.
4. Export the affected layout or section as a Divi JSON file.
5. Capture screenshots only if the issue is visual and the JSON export does not capture it.
6. Document the case using `cases/case-template.md`.
7. Resolve the issue on the local site before applying to staging.
8. Record lessons in `operator/memory.md` if the case reveals a reusable pattern.

Do not use production sites for case creation or testing.

---

## Asset Preference: JSON Exports First

Divi layout exports (`.json`) are preferred over screenshots wherever possible.

Reasons:

- Structured and machine-readable.
- Lightweight compared to image files.
- Contains the real module hierarchy.
- Exposes responsive settings.
- Exposes custom CSS classes and `extend_attributes`.
- Can be re-imported to reproduce the exact issue on any local site.
- Better for operator reasoning than a flat image.

Use screenshots to supplement, not replace, JSON exports.

When both exist, the JSON export is the authoritative asset.

---

## Preferred AI Workflow: Layout Summaries

Raw Divi JSON exports are the source artifact, but they should not usually be the primary AI reasoning artifact. Divi exports are noisy, repetitive, and token-heavy.

Preferred workflow:

```
raw-layout.json
  -> layout-summary.md
  -> operator reasoning
```

Use `layout-summary.md` as the first AI context for a case. The summary should expose layout structure, module hierarchy, responsive overrides, custom classes, custom CSS, likely risk areas, and complexity indicators without dumping the full Divi export.

Keep the raw JSON in the case folder for reference, debugging, reproducibility, and re-importing into LocalWP. Use it when the summary is ambiguous or when a precise setting needs to be confirmed.

Generate a summary with:

```
node scripts/summarize-divi-layout.js cases/example-case/raw-layout.json
```

By default, the script writes:

```
cases/example-case/layout-summary.md
```

Canonical example:

- `cases/spacing-and-padding/` demonstrates the complete workflow using `home.json` as the raw Divi source artifact and `layout-summary.md` as the preferred AI context before operator reasoning, fix planning, and QA definition.

Future possibilities, documented for later and not part of the current foundation:

- Risk scoring.
- Module-specific heuristics.
- Responsive diagnostics.
- Browser automation integration.
- Operator memory suggestions.

---

## Case Asset Structure

Each case lives in its own subfolder under `cases/`:

```
cases/
  case-template.md
  example-case/
    case.md          ← structured case document (required)
    raw-layout.json  ← Divi section/page export (source artifact)
    layout-summary.md ← preferred AI reasoning artifact
    custom.css       ← any custom CSS applied to the affected area
    screenshots/
      desktop.png
      mobile.png
    outcome.md       ← complete after resolution
```

At minimum, a case must have:

- `case.md` with the structured case document.
- A Divi JSON export, or a documented reason why one is not available.
- A `layout-summary.md` when a raw Divi JSON export is available.

---

## Case Lifecycle

```
open → investigating → resolved → archived
```

| Status | Meaning |
|---|---|
| open | Issue identified, not yet fully diagnosed. |
| investigating | Operator is actively working through the case. |
| resolved | Fix confirmed on LocalWP or staging, outcome documented. |
| archived | Case closed; lessons captured in `operator/memory.md` if relevant. |

---

## Connection To The Operator System

Cases connect to the operator system at three points:

1. **Routing** — each case references the KB docs that should be consulted via `operator/task-routing.md`.
2. **Memory** — resolved cases may produce candidate entries for `operator/memory.md`.
3. **Browser automation** — when browser automation is introduced, cases become the test targets and execution briefs.

---

## Browser Automation Positioning

Cases are the bridge between operator reasoning and eventual browser-based execution.

When browser automation is introduced, it should operate against a defined case:

- The case provides the problem definition, environment, expected outcome, and safety considerations.
- The browser session is the execution and verification layer only.
- The intelligence layer remains the KB, operator rules, task routing, and safety policy.

Browser automation in this system is:

- An execution layer.
- An inspection layer.
- A QA layer.
- A controlled implementation layer.

It is not:

- A source of truth.
- Unrestricted autonomous behaviour.
- Permission to improvise.
- Permission to publish.

---

## Readiness Gate

Before any case is used as a live browser automation target:

- The case must have status `resolved` on LocalWP or staging.
- The operator must have followed `operator/task-routing.md` correctly.
- Safety considerations must be documented and reviewed.
- The target environment must be explicitly confirmed as local or staging, not production.

Do not use an unresolved case as a live automation target.

---

## AI Evaluation Use

Cases are also AI training and evaluation material.

A well-formed case tests whether the operator can:

- Route correctly to the right KB docs.
- Reason through the symptoms to a plausible root cause.
- Propose a minimal, safe fix.
- Apply safety checks before acting.
- Produce a useful QA checklist.
- Recognise when a pattern is worth recording in `operator/memory.md`.

Cases with documented outcomes can be used to evaluate whether operator reasoning is improving or drifting.

---

## AI Readiness Principle

The AI must first demonstrate:

- Safe reasoning.
- Correct routing.
- Cautious behaviour.
- Minimal-change thinking.
- QA awareness.

Before:

- Direct Divi interaction on LocalWP.
- Browser-based editing on staging.
- Any form of automated publishing.

---

## Related Files

- `cases/case-template.md` — reusable case structure.
- `operator/task-routing.md` — routing map used to identify KB docs for each case.
- `operator/safety-rules.md` — safety policy all cases must follow.
- `operator/browser-automation.md` — browser automation governance.
- `operator/memory.md` — operational memory that resolved cases feed into.
