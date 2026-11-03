# Planning and Task Guide

Read this file only after `spec.md` is approved.

## `plan.md` contract

The plan explains how the approved behavior will be built without changing its scope. It must be decision-complete for the implementer and must cover every functional requirement.

```markdown
# Implementation plan - Spec NNN

## Summary
Implementation intent and boundaries.

## Change map
- Area or file: responsibility and behavior change. Covers FR-x.

## Interfaces and data flow
Props, types, state transitions, i18n keys, form payloads, and external boundaries that change.

## Implementation approach
Ordered technical approach, including pseudocode only where logic would otherwise be ambiguous.

## Decisions and tradeoffs
- Decision: chosen approach and why.
- Rejected alternative: why it is not appropriate here.

## Verification strategy
- FR-x: automated command or named manual scenario.

## Risks and compatibility
Migration, rollback, browser, localization, accessibility, or data-preservation concerns that actually apply.
```

Do not invent a migration, fallback, schema, or compatibility policy when the feature does not require one. Identify the exact existing project pattern that each new pattern extends.

## `tasks.md` contract

Tasks must be small enough for one focused implementation pass, ordered by dependency, and independently verifiable. Prefer no more than ten tasks; split the spec when the plan cannot be made reviewable at that size.

```markdown
# Tasks - Spec NNN

- [ ] **T1. Short action-oriented description.** Covers FR-x.
  - Done when: observable check or command result.
- [ ] **T2. Short action-oriented description.** Covers FR-y, FR-z.
  - Depends on: T1.
  - Done when: observable check or command result.
```

Every functional requirement must appear in at least one task and in the verification strategy. Do not create tasks for unrelated cleanup. If an implementation task exposes a missing decision, stop and return to clarification instead of redesigning the feature inside the task.
