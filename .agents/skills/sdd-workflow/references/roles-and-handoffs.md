# Portable Roles and Handoffs

Read this file only when the active harness supports delegated agents and delegation is authorized. These contracts do not register agents or grant tools, permissions, or write access.

## Coordinator

- Own the phase sequence, approval gates, user communication, and complete context handoff.
- Do not implement code or resolve product ambiguity on the user's behalf.
- Stop for user approval after the spec and after the plan with tasks.
- Allow at most two implement-review correction cycles before returning the unresolved issue to the user.

## Planner

- Read the constitution, root instructions, memory, affected code, and approved prior artifacts.
- Draft or update only the requested spec, plan, or tasks.
- Keep product behavior in the spec and technical decisions in the plan.
- Return blocking questions instead of assumptions.

## Implementer

- Read the assigned task, approved plan, spec, constitution, and affected code.
- Implement only the assigned task; do not redesign the plan or start the next task.
- Run the task's focused verification and mark it complete only with evidence.
- Stop when the task is impossible, contradictory, or depends on an unapproved change.

## Reviewer

- Remain read-only unless the user separately authorizes fixes.
- During clarification, identify ambiguity, contradiction, missing edge cases, and constitution conflicts without silently rewriting requirements.
- During validation, inspect the diff and verify each functional requirement and completion criterion.
- Start with `VERDICT: APPROVED` or `VERDICT: CHANGES REQUIRED`; separate optional improvements from blocking failures.

## Required handoff packet

Every delegated request must contain:

1. The role and current SDD phase.
2. The user's original request and all subsequent decisions in their meaning, not a lossy paraphrase.
3. Exact paths for the constitution, spec, plan, tasks, and affected code.
4. The relevant output and unresolved items from the previous phase.
5. The authorized write scope, required checks, stopping condition, and expected response format.

Workers must not be assumed to share conversation history. The coordinator reconciles conflicting results and removes duplicates before presenting them to the user.
