---
name: feature-development
description: Implement new or extended FantasyBox behavior in the existing React application. Use for feature work that changes components, product data, forms, localization, or assets. Combine with sdd-workflow when the feature is medium-to-large, risky, or ambiguous; do not use for pure bug diagnosis or read-only review.
---

# FantasyBox Feature Development

Read the root `AGENTS.md`, `CLAUDE.md`, and `MEMORY.md` before changing code.

## Choose the workflow

- For a small, clear change, inspect the affected path, state a short plan, implement only that behavior, and verify it.
- For a medium, large, risky, cross-cutting, or ambiguous feature, use `sdd-workflow` before implementation.
- If the request changes an approved requirement, update the spec, plan, and tasks before code.

## Preserve project patterns

1. Find the nearest working example and extend its structure instead of introducing a parallel pattern.
2. Keep components functional and strictly typed. Use explicit interfaces, local hooks and props, and never `any`.
3. Keep catalog and static product configuration in `src/app/data/landing-data.ts`; do not bury product data in JSX.
4. Put user-facing text in the relevant i18n namespace. Add identical keys to `en` and `es`, update `src/i18n/types.ts`, and keep namespace registration consistent.
5. Use `<FantasyButton>` for button actions. Reuse `fb-*` classes and `--fb-*` tokens before adding new styles.
6. Store media in `src/imports/` and import it as a module. Follow the existing `ResponsiveImage` and `<picture>` patterns when variants exist.
7. Preserve local-state architecture and existing form submission contracts. Do not add a state manager, dependency, or data-format migration without explicit approval.
8. Never modify `src/dev/`.

## UI and form behavior

When a feature changes the interface, use `ux-ui-design` for responsive and accessibility requirements. Cover loading, success, error, empty, disabled, and keyboard states that are relevant to the requested flow. Keep internal values stable when translated labels change.

## Completion

Use `change-verification` before handoff. Report the behavior delivered, files changed, checks run, and any unresolved blocker. Do not describe a check as passing unless it actually ran and passed.
