---
name: sdd-workflow
description: Define, plan, implement, change, or validate medium-to-large, risky, cross-cutting, or ambiguous FantasyBox features with proportional Spec-Driven Development. Use when a request needs a durable contract or touches docs/constitution.md or specs/. Do not create a spec for a tiny, obvious, low-risk change.
---

# Proportional Spec-Driven Development

Read the root `../../AGENTS.md`, `../../MEMORY.md`, and `docs/constitution.md` before starting. The constitution and approved spec outrank implementation convenience.

## Decide whether SDD is warranted

Use the full workflow when at least one of these conditions is material:

- The behavior is ambiguous, cross-cutting, user-data-sensitive, or difficult to reverse.
- Several components, data contracts, form paths, or locale schemas must change together.
- Acceptance criteria, edge cases, exclusions, or rollout decisions need user agreement.
- The user asks for a spec, SDD, formal planning, or requirement traceability.

For a small, clear, low-risk change, use the lightweight flow in `feature-development` and do not create placeholder spec artifacts.

## Artifact contract

Each live feature uses `specs/NNN-kebab-name/` with exactly:

- `spec.md`: approved product behavior, constraints, and acceptance criteria.
- `plan.md`: implementation approach and requirement coverage.
- `tasks.md`: ordered, independently verifiable implementation units.

Choose the next unused three-digit number. Never reuse a number for a different feature.

## Workflow and approval gates

1. **Specify:** read [the specification guide](references/specification.md), resolve material ambiguity, and write `spec.md` without implementation details.
2. **Clarify:** review the draft for ambiguity, contradiction, missing edge cases, unverifiable language, and constitution conflicts. Mark unresolved decisions clearly.
3. **Approve the spec:** do not create the implementation plan until the user approves the requirements.
4. **Plan and task:** read [the planning and tasks guide](references/planning-and-tasks.md), map every requirement to an implementation area and verification method, and create `plan.md` and `tasks.md`.
5. **Approve the plan:** do not implement until the user approves the plan and task breakdown.
6. **Implement:** complete one task at a time in dependency order. Keep scope within the approved task, run its focused checks, update its checkbox, and stop when the requested task or approved batch is complete.
7. **Validate:** read [the validation guide](references/validation.md) and verify every functional requirement and completion criterion with executed evidence.

## Requirement changes

When requested behavior changes, update and approve `spec.md` first. Then update `plan.md` and `tasks.md`, and only then change code. Preserve requirement identifiers unless the original requirement is explicitly replaced; document removals instead of silently renumbering everything.

## Multi-agent use

When the active harness supports delegation and the user authorizes it, read [the portable role and handoff contracts](references/roles-and-handoffs.md). These are responsibilities, not tool-specific agent registrations. The coordinator must pass each worker the original request, user decisions, current phase, relevant paths, and prior results.

## Closeout

Use `change-verification`, update `../../MEMORY.md` only with durable state or lessons, and report requirement coverage, completed tasks, validation evidence, and unresolved blockers.
