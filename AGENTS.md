# Agent Instructions & Constraints

This document defines strict operational rules, constraints, and validation checklists that AI coding agents **MUST** follow without exception when working in this codebase.

## Guiding Principles
- **Minimalist Changes**: Keep changes surgical and focused. Do not refactor unrelated code.
- **Single Source of Truth**: Refer to [CLAUDE.md](file:///E:/fantasyBox%20landing/CLAUDE.md) for full commands, layout structures, and technical design system specs.
- **Maintain Integrity**: Preserve all existing comments, docstrings, and formatting unless instructed otherwise.

##  Prohibitions (Do NOT)
- **Do NOT use npm or yarn**: Use `pnpm` exclusively for all package operations.
- **Do NOT install new npm packages**: Do not add packages unless absolutely necessary and explicitly approved by the user.
- **Do NOT bypass the Custom Design System**: Do not use arbitrary inline Tailwind utility classes when equivalent custom classes in `fantasybox.css` are available.
- **Do NOT hardcode text**: Never write user-facing English or Spanish text directly in JSX. Use i18n keys and translate both `en` and `es` files.
- **Do NOT use global state managers**: Use local hooks (`useState`, `useContext`, `useCallback`) and props. Do not introduce Redux, Zustand, etc.
- **Do NOT place assets in the public folder**: Place all images/media in `src/imports/` and import them via ES6 module syntax.
- **Do NOT use `any` type**: Maintain strict TypeScript typing.
**Do NOT modify `src/dev/`**: This directory is reserved for dev utility configurations.

## Requirements (Do)
- **Config files**: Keep configs minimal and clean.
- **Code style**: Use functional components, explicit TS interfaces, and clear naming.
- **Multi-language sync**: Whenever adding a key in `src/i18n/locales/en/{ns}.json`, add the exact same key in `src/i18n/locales/es/{ns}.json`, and update the namespace interface in `src/i18n/types.ts`.
- **Buttons**: Always use `<FantasyButton>` for interactive clicks.

## Post-Development Checklist
Before declaring a task done, you must verify:
1. **Compilation**: `pnpm build` finishes successfully without warnings or errors.
2. **Type Safety**: `tsc --noEmit` returns zero compilation errors.
3. **i18n Integration**: Check that translation keys exist in both locales and `types.ts`, and there are no missing translation warnings.
4. **Style Consistency**: Custom design variables are used instead of ad-hoc colors.