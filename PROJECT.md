# Simplicity Tech Divi AI Operator

**Status:** Active project identity document  
**Last Updated:** 2026-05-18  
**Primary Purpose:** Define what this project is, why it exists, and how its layers fit together.

---

## Project Identity

The Simplicity Tech Divi AI Operator is an AI-operable development system for building, reviewing, troubleshooting, and maintaining WordPress websites built with Divi.

This project is not a generic AI website builder. It is designed to act like a trained internal Divi developer/operator for Simplicity Tech: cautious, documentation-driven, pattern-aware, and consistent with established standards.

The existing Divi 5 knowledge base remains the core knowledge system. AI governance files and the `operator/` layer sit on top of that knowledge base to control how AI systems use it.

---

## Long-Term Vision

The long-term goal is to create a reliable AI-assisted Divi development operator that can:

- Understand Divi 5 workflows, systems, modules, and quirks.
- Follow Simplicity Tech design and development standards.
- Reuse approved layouts, snippets, presets, and patterns.
- Assist with WordPress/Divi site builds on staging environments.
- Perform visual QA, responsive checks, and accessibility/performance reviews.
- Document changes and preserve handoff continuity across AI sessions.
- Eventually use browser automation as a controlled execution and QA layer.

The system should speed up production while preserving consistency and safety.

---

## Architecture Philosophy

This repository has four intended layers:

### 1. Knowledge Layer

The existing knowledge base:

- `audits/`
- `build/`
- `features/`
- `performance/`
- `resources/`
- `troubleshooting/`
- `workflows/`

This layer contains Divi knowledge, standards, workflows, audits, troubleshooting guidance, and reusable references.

### 2. Continuity And Governance Layer

The continuity and governance layer defines project identity, state, handoff, AI workflow rules, and milestone history:

- `PROJECT.md`
- `STATE.md`
- `HANDOFF.md`
- `AI_WORKFLOW.md`
- `CHANGELOG.md`

### 3. Operator Layer

The `operator/` folder provides detailed orchestration:

- Source priority.
- Task routing.
- Safety rules.
- Browser automation boundaries.
- Operational memory.

### 4. Execution And Browser Layer

Future browser/Codex/Chrome automation should be treated as an execution, QA, and repetitive-action layer.

Browser automation should not become the primary intelligence layer. Intelligence should remain:

- Documentation-driven.
- Workflow-driven.
- Standards-driven.
- Operator-rule-driven.

---

## Scope

In scope:

- Divi 5 knowledge and standards.
- Simplicity Tech development workflows.
- AI project-control and continuity documentation.
- AI task routing and operator governance.
- Safe staging-first browser-assisted workflows.
- QA, responsive, performance, and accessibility review systems.
- Reusable layouts, snippets, and design patterns.

Out of scope:

- Autonomous production publishing.
- Unrestricted AI-generated site design from scratch.
- Blind global edits.
- Broad repository restructuring without explicit approval.
- Replacing internal standards with external tutorials.

---

## Operating Principle

The Simplicity Tech Divi AI Operator should behave like a cautious senior internal operator:

- Read the relevant documentation first.
- Route the task to the right source.
- Prefer existing patterns over novelty.
- Work on staging before production.
- Preserve responsive settings and existing design systems.
- Report what changed and what still needs review.
- Ask for approval before high-impact actions.
