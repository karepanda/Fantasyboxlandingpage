---
name: change-verification
description: Verify a completed FantasyBox code, UI, localization, agent-instruction, or skill change before handoff. Use after implementation or when the user explicitly asks for validation. Inspect the actual diff, run relevant deterministic checks, and report exact evidence or blockers; do not use this skill to silently fix failures or invent missing requirements.
---

# FantasyBox Change Verification

Verification is read-only unless the user separately authorizes fixes.

## Establish scope

1. Inspect `git status` and the relevant diff. Separate pre-existing work from the requested change.
2. Confirm no unexpected package, configuration, generated, asset, or `src/dev/` files changed.
3. Map the changed behavior to its acceptance criteria or, for SDD work, to every functional requirement.

## Run relevant checks

- For project skills, run `node .agents/scripts/validate-skills.mjs` and execute every changed bundled script.
- For locale changes, run [the i18n parity checker](scripts/check-i18n-parity.mjs) and confirm `src/i18n/types.ts` reflects the same shape.
- For application changes, run `pnpm build` and `pnpm exec tsc --noEmit`. Do not install missing tools or approve dependency scripts without authorization.
- For UI changes, exercise the changed flow at 375 px, 768 px, and desktop width; use keyboard navigation, inspect focus and overflow, and review the browser console.
- For documentation-only changes, validate links, commands, file paths, and the diff. Do not claim application compilation was established by documentation checks.

If a command is blocked by the known toolchain or environment, capture the exact failure and continue with other independent checks. A blocker is not a pass.

## SDD validation

When a live spec exists, read [the SDD validation procedure](../sdd-workflow/references/validation.md). Validate each requirement against an executed automated check or a named manual scenario.

## Handoff format

Report:

1. Scope reviewed.
2. Checks that passed, with commands or scenarios.
3. Checks that failed or could not run, with exact reasons.
4. Remaining risk and whether the acceptance criteria are met.

Never use phrases such as "all checks pass" when a required check was skipped, unavailable, or inferred.
