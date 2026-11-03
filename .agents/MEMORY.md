# FantasyBox Project Memory

Keep this file short and limited to durable project state. Do not store credentials, personal data, temporary task notes, or full command logs.

## Current State
- The project is a React 18 and TypeScript single-page landing site built with Vite.
- The landing page contains bilingual product presentation, product detail dialogs, and a request form.
- Product definitions live in `../src/app/data/landing-data.ts`; interface copy lives in the English and Spanish locale trees.
- The custom visual language is defined in `../src/styles/fantasybox.css` and exposed through `fb-*` classes and `--fb-*` tokens.

## Durable Decisions
- Use pnpm exclusively and do not add dependencies without explicit approval.
- Keep state local to components unless the existing architecture establishes a shared context.
- Preserve exact key parity between English and Spanish locales and update `../src/i18n/types.ts` with every schema change.
- Store imported media under `../src/imports`; use responsive image sources when suitable variants exist.
- Use proportional SDD: full specs for substantial or risky work, lightweight planning for small changes.
- Keep portable project skills under `skills`; do not duplicate them in tool-specific directories.

## Known Validation Constraints
- `pnpm build` currently stops before Vite runs because pnpm rejects ignored build scripts for `@tailwindcss/oxide` and `esbuild`.
- The installed pnpm version warns that the `pnpm.overrides` field in `../package.json` is ignored and should live in workspace configuration.
- The project does not currently expose a local TypeScript executable, so `pnpm exec tsc --noEmit` cannot complete without a toolchain decision.
- `../package.json` still defines `predeploy` with `npm run build`, which conflicts with the pnpm-only policy.
- These are pre-existing toolchain issues. Do not repair them without explicit approval; report them when they block validation.

## Maintenance
- Update this file after substantive work only when project state, a durable decision, a recurring mistake, or a known blocker changes.
- Move permanent behavioral rules to `AGENTS.md` instead of accumulating them here.
- Remove stale entries when they no longer affect future work.
