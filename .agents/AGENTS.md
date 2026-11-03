# Portable Skill Maintenance Rules

These rules apply to everything under `.agents/`.

- Write all skill instructions, references, scripts, and evaluations in English.
- Follow the open Agent Skills layout: `.agents/skills/<name>/SKILL.md` with optional `references/`, `scripts/`, or `assets/` only when they add concrete value.
- Keep folder names and frontmatter `name` values identical, lowercase, hyphenated, and no longer than 64 characters.
- Make every `description` specific enough to route relevant prompts and reject nearby non-matches.
- Keep each `SKILL.md` concise and below 500 lines. Move conditional detail to linked references and state when to read each one.
- Do not create platform-specific agent metadata, duplicated command files, embedded secret values, or shell commands that mutate state during skill loading.
- Scripts must use existing runtimes and standard libraries, accept predictable inputs, emit actionable errors, and require no new package.
- Preserve user authorization boundaries. A workflow skill never grants permission to edit, install, publish, deploy, or contact external systems.
- Validate changes with `node .agents/scripts/validate-skills.mjs` and run every changed skill script against a representative case.
