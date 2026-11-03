---
name: ux-ui-design
description: Design, implement, or audit FantasyBox user-interface changes for brand consistency, responsive behavior, accessibility, and clear interaction states. Use for layout, component styling, forms, dialogs, visual hierarchy, or UX review. Do not use for logic-only changes with no user-interface impact.
---

# FantasyBox UX and UI Design

Read `CLAUDE.md`, inspect `src/styles/fantasybox.css`, and study the nearest existing section or component before proposing a new visual pattern.

## Design direction

- Preserve the warm, book-focused FantasyBox identity: restrained hierarchy, comfortable spacing, rounded surfaces, and the existing cream, linen, peach, tan, brown, coffee, and dark tokens.
- Reuse `fb-*` components and `--fb-*` variables. Add a new project class only when the behavior is reusable; avoid arbitrary inline colors and one-off styling systems.
- Use `<FantasyButton>` for button actions and preserve clear primary-versus-secondary action hierarchy.
- Keep all visible text and accessibility labels in i18n with synchronized English and Spanish keys.

## Interaction quality

- Start mobile-first and verify layouts at 375 px, 768 px, and a desktop width near 1440 px.
- Use semantic elements. Every control needs an accessible name, visible focus, keyboard operation, and an adequate target size.
- Dialogs and overlays need an explicit title, close control, Escape behavior, predictable focus entry and return, background interaction protection, and scroll behavior that works on small screens.
- Forms need associated labels, field-level validation, clear required and disabled states, useful error recovery, and distinct sending, success, and failure feedback.
- Do not rely on hover, color, or animation alone to convey meaning. Respect reduced-motion expectations when adding motion.

## Images and content

- Import assets from `src/imports/`. Use responsive sources and accurate `sizes`, intrinsic dimensions, useful alt text, and lazy loading below the fold.
- Preserve content hierarchy across languages; allow translated strings to wrap without clipping or pushing actions off-screen.

## Verification

Exercise the primary flow with pointer and keyboard, inspect browser console output, and check the three target widths. Use `change-verification` before handoff and describe what was visually inspected rather than claiming general polish.
