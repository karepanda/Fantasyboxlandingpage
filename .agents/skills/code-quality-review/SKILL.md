---
name: code-quality-review
description: Review or deliberately refactor existing FantasyBox code for correctness, maintainability, type safety, accessibility, and performance. Use for review, audit, cleanup, or behavior-preserving refactor requests. Do not use to invent new product behavior or to diagnose a concrete unexplained failure.
---

# FantasyBox Code Quality Review

Read the root instructions and inspect the requested diff or code path before forming conclusions.

## Select the requested mode

- **Review:** remain read-only. Return actionable findings ordered by severity; do not edit because a better implementation is possible.
- **Refactor or improve:** preserve observable behavior, define the invariant being protected, and make only scoped edits authorized by the user.

## Review priorities

1. Correctness: state transitions, stale values, conditional rendering, form contracts, error paths, and cleanup of effects or listeners.
2. Type safety: explicit domain interfaces, safe narrowing, stable optional values, and no `any` or suppression hiding a real mismatch.
3. React design: clear component responsibilities, derived values instead of duplicated state, stable keys, and no unnecessary effects.
4. Accessibility: semantic controls, labels, focus behavior, keyboard operation, meaningful alternative text, and appropriate dialog semantics.
5. Performance: responsive images, lazy loading below the fold, avoidable rerenders, duplicated work, and bundle impact supported by evidence.
6. Project integrity: i18n parity, `FantasyButton`, design tokens, local state, imported assets, and the protected `src/dev/` boundary.

Avoid speculative findings. A comment is actionable only when it identifies an actual failure mode, violated rule, or measurable maintenance cost.

## Output and refactoring

For reviews, give each finding a severity, tight file and line reference, impact, and expected correction. Put non-blocking preferences in a separate optional section.

For authorized refactors, keep the diff narrow, retain existing contracts, and use `change-verification`. If preserving behavior cannot be demonstrated with the available checks, state that limitation explicitly.
