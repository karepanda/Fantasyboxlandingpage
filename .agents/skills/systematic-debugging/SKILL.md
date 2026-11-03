---
name: systematic-debugging
description: Diagnose and, when requested, fix a reproducible FantasyBox defect, regression, failing command, or unexpected runtime behavior. Use when the cause is unknown and evidence must distinguish symptoms from root cause. Do not use for ordinary feature work, speculative cleanup, or a read-only quality review unrelated to a concrete failure.
---

# Systematic Debugging

Read the root instructions and preserve the user's current worktree.

## Diagnose before editing

1. Restate the observed behavior, expected behavior, reproduction path, and affected environment.
2. Reproduce the failure with the smallest relevant command or interaction. If it cannot be reproduced, collect concrete evidence and report the gap instead of guessing.
3. Trace the failing data or event from its entry point to the symptom. Inspect recent relevant changes and the nearest working path.
4. Form one falsifiable root-cause hypothesis and test it. Do not edit several unrelated areas to see what happens.
5. Distinguish a project defect from a toolchain, permission, dependency, network, or environment failure.

If the user asked only for diagnosis, stop after presenting evidence and the most likely cause. Diagnosis alone does not authorize a fix.

## Apply a requested fix

- Make the smallest change that addresses the demonstrated cause.
- Preserve public behavior outside the reported defect and avoid opportunistic refactors.
- Add or identify a regression check that fails before the fix and passes after it when the toolchain supports that proof.
- For UI defects, reproduce the relevant viewport and keyboard path and inspect the browser console.
- If the correct fix requires a new dependency, configuration change, data migration, or broader redesign, stop and request approval.

## Verify and report

Use `change-verification` for the affected surfaces. Report reproduction evidence, root cause, fix, regression evidence, and any check that could not run. Stop after two unsuccessful fix-and-verify cycles and explain what new evidence or decision is needed.
