# SDD Validation Guide

Read this file when reviewing an implementation against a live spec.

## Validate the contract, not just the build

1. Read the approved `spec.md`, `plan.md`, `tasks.md`, constitution, root instructions, and actual diff.
2. Run the relevant checks from `change-verification` without modifying files.
3. Build a requirement coverage table with one row per functional requirement.
4. Check every completion criterion and every non-functional requirement that applies.
5. Give a verdict based on executed evidence. A passing build alone is insufficient.

Use this shape:

| Requirement | Evidence | Result | Notes |
| --- | --- | --- | --- |
| FR-1 | Test name, command, or manual scenario | Pass / Fail / Blocked | Exact observation |

Automated evidence must name the command and relevant test. Manual UI evidence must name the viewport, interaction path, keyboard behavior, focus result, and console result. Inferred or unexecuted checks are `Blocked`, not `Pass`.

## Verdict rules

- `VERDICT: APPROVED` only when every requirement and completion criterion passes and no constitution conflict remains.
- `VERDICT: CHANGES REQUIRED` when behavior fails, coverage is missing, the diff exceeds the approved scope, or a project rule is violated.
- A toolchain or environment failure must be reported as a blocker with completed independent checks listed separately.

For each required correction, provide the tight file and line location when available, the violated requirement or principle, observed evidence, and expected behavior. Keep preferences that do not violate the approved contract under `Optional` and do not let them block approval.

After a correction, rerun the failed check and the smallest relevant regression set. Stop after two failed correction cycles and ask for the missing decision or additional evidence rather than looping indefinitely.
