# Specification Guide

Read this file only when drafting or clarifying a feature specification.

## Specification boundaries

`spec.md` defines what the feature must do and why it matters. It must not prescribe component names, file paths, algorithms, or implementation libraries. Use English throughout.

Ask only questions whose answers materially change behavior, scope, risk, or acceptance. Prefer one focused question at a time. Do not fill a consequential gap with an unstated assumption.

## Requirement rules

- Give each functional requirement a stable identifier: `FR-1`, `FR-2`, and so on.
- Make one requirement describe one observable behavior.
- Use measurable outcomes; avoid words such as "fast", "intuitive", or "beautiful" without a testable threshold or scenario.
- Include relevant error, empty, loading, disabled, responsive, accessibility, and localization behavior.
- Keep implementation choices out of functional requirements.

Use the EARS form that best matches the behavior:

- Ubiquitous: `THE SYSTEM SHALL <response>.`
- Event-driven: `WHEN <event>, THE SYSTEM SHALL <response>.`
- Unwanted behavior: `IF <condition>, THEN THE SYSTEM SHALL <response>.`
- State-driven: `WHILE <state>, THE SYSTEM SHALL <response>.`

## `spec.md` template

```markdown
# Spec NNN - Feature name

Status: draft | approved | implemented

## Context and objective
What problem this solves and why it matters.

## Users and actors
Who interacts with the behavior.

## User stories
- US-1: As a <role>, I want <action> so that <benefit>.

## Definitions
Include only terms that could be interpreted in more than one way.

## Functional requirements
- FR-1: WHEN <event>, THE SYSTEM SHALL <observable response>.
- FR-2: IF <unwanted condition>, THEN THE SYSTEM SHALL <observable response>.

## Non-functional requirements
Only applicable performance, accessibility, security, compatibility, or localization constraints.

## Edge cases
Relevant empty, duplicate, invalid, boundary, interruption, or concurrency cases.

## Out of scope
Behavior explicitly excluded from this iteration.

## Completion criteria
Executed evidence required before the feature can be accepted.

## Open questions
- [NEEDS CLARIFICATION] Decision that blocks approval.
```

## Clarification result

Review the draft in this order: unverifiable language, contradictions, missing edge cases, conflicts with the constitution, and hidden implementation assumptions. Detect problems before proposing solutions. A spec cannot be approved while a material `[NEEDS CLARIFICATION]` item remains.
