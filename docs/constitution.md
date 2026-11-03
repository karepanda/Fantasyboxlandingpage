# FantasyBox Engineering Constitution

Every substantial spec, plan, task, implementation, and review must satisfy these principles.

1. **Scope is a contract:** implement only approved behavior, preserve unrelated work, and ask before adding dependencies, changing configuration, or migrating data.
2. **The spec leads substantial change:** medium, large, risky, or ambiguous features require an approved spec and plan; requirement changes update those artifacts before code.
3. **Architecture stays explicit:** use functional React, strict TypeScript without `any`, local state by default, and keep domain data separate from presentation concerns.
4. **The experience is bilingual and accessible:** all interface copy uses synchronized English and Spanish keys, and interactive flows work with keyboard, focus, semantic controls, and responsive layouts.
5. **The design system is authoritative:** reuse FantasyBox components, CSS classes, tokens, and imported assets before introducing new patterns or visual values.
6. **Evidence closes the work:** inspect the diff and run the relevant build, type, i18n, behavior, and visual checks; report any blocker exactly and never substitute assumptions for results.
