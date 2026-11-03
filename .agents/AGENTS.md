# FantasyBox Landing Agent Guide

FantasyBox is a bilingual React landing page for book subscription products. Keep every change focused, reviewable, and consistent with the existing experience.

## Read First
- Read [CLAUDE.md](../CLAUDE.md) for commands, architecture, and design-system details.
- Read [MEMORY.md](MEMORY.md) for durable decisions and known project constraints.
- For substantial features, read [docs/constitution.md](../docs/constitution.md) and use the `sdd-workflow` skill.
- Load the matching project skill from `skills` when its description clearly applies.

## Commands
- Use `pnpm` only: `pnpm dev`, `pnpm build`, `pnpm preview`, and `pnpm deploy`.
- Type-check with `pnpm exec tsc --noEmit` when TypeScript is available in the project toolchain.
- Known baseline blockers are recorded in `MEMORY.md`; report them honestly and do not install or reconfigure dependencies without approval.

## Non-Negotiable Rules
- Preserve unrelated work, existing comments, and formatting. Never modify `../src/dev`.
- Do not add packages, change package-manager configuration, or alter data formats without explicit approval.
- Use functional React components, explicit TypeScript interfaces, local hooks/props, and no `any`.
- Put media in `../src/imports` and import it through ES modules; never add assets to `public/`.
- Use existing classes and tokens from `../src/styles/fantasybox.css`; avoid ad-hoc colors when a project token exists.
- Use `<FantasyButton>` for button actions.
- Put all user-facing copy in i18n. Keep `en` and `es` keys identical and update `../src/i18n/types.ts`.

## Working Method
- Handle small, obvious changes with a short inspect-plan-implement-verify loop.
- Use proportional SDD for medium, large, risky, or ambiguous features. Do not implement before the spec and plan are approved.
- Change requirements in the spec before changing its plan, tasks, or code.
- Update `MEMORY.md` only with durable state, decisions, or lessons from substantive work.

## Skill Maintenance
- Keep portable skills in `.agents/skills/<name>/SKILL.md` and write their instructions, references, scripts, and evaluations in English.
- Match each lowercase hyphenated folder name to its frontmatter `name`; use a precise `description` that distinguishes relevant prompts from nearby non-matches.
- Keep `SKILL.md` below 500 lines and move conditional detail into linked `references/`, `scripts/`, or `assets/` only when they add concrete value.
- Do not add platform-specific metadata, duplicated commands, secrets, or load-time shell mutations. Skill scripts must use existing runtimes and require no new package.
- Preserve authorization boundaries and validate skill changes with `node .agents/scripts/validate-skills.mjs` plus a representative run of every changed script.

## Completion Gate
- Inspect the final diff and confirm only requested files changed.
- Run relevant checks from the `change-verification` skill, including i18n parity when applicable.
- Require `pnpm build` and `pnpm exec tsc --noEmit` for application changes; if the existing toolchain prevents either command, provide the exact blocker and never claim success.
- For UI changes, verify keyboard behavior, browser console, and mobile and desktop layouts.
