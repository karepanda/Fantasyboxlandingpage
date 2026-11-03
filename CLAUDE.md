# CLAUDE.md

This file provides reference information and technical guidelines for working in the fantasyBox codebase.

## Core Commands

```bash
pnpm dev          # Start Vite dev server (http://localhost:5173)
pnpm build        # Production build (output: dist/)
pnpm preview      # Preview production build locally
pnpm deploy       # Build + publish to gh-pages branch
```

Package manager is **pnpm** exclusively. Never use npm or yarn.

## Technology Stack & Libraries
- **Frontend Framework**: React 18.3.1 + TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4 + Custom CSS design system (`src/styles/fantasybox.css`)
- **Animations**: `motion/react` (Framer Motion)
- **Forms**: `react-hook-form`
- **i18n**: `i18next` + `react-i18next` + `i18next-browser-languagedetector`

## Project Architecture
Single-page landing site for FantasyBox (book subscription box).

### Page Layout Structure
`src/app/App.tsx` composes the full page in this exact vertical stack order:
1. `Header` (Sticky navigation & language switcher)
2. `HeroSection`
3. `HowItWorksSection`
4. `ProductsSection`
5. `AestheticSection`
6. `WhatsInsideSection`
7. `EmotionalSection`
8. `FaqSection`
9. `CtaSection` (Call to action form)
10. `StickyCta` (Floating bottom bar, separate render)

All sections live in `src/app/components/landing/`.

### Static Data
- Located in `src/app/data/landing-data.ts`.
- Holds the product catalog (`products`), finished products (`finishedProducts`), etc.
- Text fields use translation keys resolved at render via `useTranslation("products")`.

### Assets
All images must be placed in `src/imports/` and referenced via ES6 imports:
```typescript
import heroImage from '@/imports/classicFantasyBoxOrange.jpg';
```
Do not use raw public URL references or external CDNs for assets.

## Design System & Styling
Always prefer custom classes from `src/styles/fantasybox.css` over inline Tailwind classes.

### Custom Classes
- **Layout**: `.fantasy-page` (page wrap), `.fb-section` (section container), `.fb-container` (centered max-width container), `.fb-container-sm`
- **Backgrounds**: `.fb-section-linen`, `.fb-section-peach`, `.fb-section-tan`
- **Typography**: `.fb-heading` (Crimson Pro serif), `.fb-title`, `.fb-subtitle`, `.fb-body-lg`
- **Components**: `.fb-card`, `.fb-icon-circle`, `.fb-sticky-cta`

### Buttons
Always use the `<FantasyButton>` component from `src/app/components/landing/FantasyButton.tsx`.
- **Variants**: `"primary"` (brown), `"secondary"` (outlined), `"coffee"` (dark), `"sticky"`

### Theme Tokens (CSS Variables)
- **Colors**: `--fb-cream`, `--fb-linen`, `--fb-peach`, `--fb-tan`, `--fb-brown`, `--fb-coffee`, `--fb-dark`, `--fb-text`
- **Fonts**: `--fb-font-body` (Inter), `--fb-font-heading` (Crimson Pro)

## Internationalization (i18n)
- **Languages**: English (`en`) and Spanish (`es`).
- **Translation files**: Located in `src/i18n/locales/{en,es}/{namespace}.json`.
- **Adding/Modifying text**:
  1. Add the key and value to both language files (matching key structure).
  2. Update the TypeScript interface definition in `src/i18n/types.ts`.
  3. Use inside components via hook: `const { t } = useTranslation('namespace')`.
- **Namespaces**: Use camelCase for multi-word files (`howItWorks`, `whatsInside`, `requestForm`).

## Code Validation Checklist
Before completion, verify:
1. `pnpm build` completes with zero errors.
2. `tsc --noEmit` runs successfully (no TypeScript errors).
3. No hardcoded text in components (all text flows through i18n).
4. English and Spanish JSON files have matching keys.
5. Custom CSS classes and `<FantasyButton>` are used where possible.
