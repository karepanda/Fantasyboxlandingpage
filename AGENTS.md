# Agent Instructions

## Project Overview

**FantasyBox** is a single-page React application serving as a landing page for a book subscription box product. The codebase is built with:

- **React 18.3.1** + **TypeScript**
- **Vite 6.3.5** (build tool)
- **Tailwind CSS v4** (utility layer)
- **Custom CSS design system** (`src/styles/fantasybox.css`)
- **i18next** (internationalization: English/Spanish)

**Package Manager:** `pnpm` exclusively. Do not use `npm` or `yarn`.

## Package Manager
Use pnpm only.

## Styling
Prefer existing classes in src/styles/fantasybox.css.
Use FantasyButton for buttons.

## i18n
Languages: en and es.
When adding text, update both locale files and src/i18n/types.ts.

## Structure
Landing sections are in src/app/components/landing/.
Static data is in src/app/data/landing-data.ts.

## Rules
Do not introduce new libraries unless necessary.
Keep changes small and consistent with the existing design system.
Run pnpm build after meaningful changes.

## Core Commands

```bash
pnpm dev        # Start Vite dev server (http://localhost:5173)
pnpm build      # Production build → dist/
pnpm preview    # Preview production build locally
pnpm deploy     # Build + publish to gh-pages branch
```

Always run `pnpm build` after completing feature work to validate production readiness.

## Architecture & File Structure
### Entry Points
- `src/main.tsx` → `src/app/App.tsx` (root component)
- `index.html` (Vite entry point)

### Page Composition
`App.tsx` renders a vertical stack of landing sections in this exact order:
1. `Header` (sticky navigation)
2. `HeroSection`
3. `HowItWorksSection`
4. `ProductsSection`
5. `AestheticSection`
6. `WhatsInsideSection`
7. `EmotionalSection`
8. `FaqSection`
9. `CtaSection` (call-to-action form)
10. `StickyCta` (floating bottom bar, separate render)

**Section Components:** All live in `src/app/components/landing/`.
**Cross-section Communication:** `ProductsSection` and `CtaSection` communicate via a `scrollToForm` callback passed from `App`. Do not introduce global state managers (Redux, Zustand, etc.) without explicit approval.
### Static Data
- **Location:** `src/app/data/landing-data.ts`
- **Contents:** Product catalog (`products`), aesthetic palette (`aesthetics`), how-it-works steps (`steps`)
- **i18n Integration:** Product fields use translation keys (e.g., `"classicBox.name"`), resolved at render via `useTranslation("products")`

### Assets
All images are stored in `src/imports/`. Reference them via ES6 imports:
```
import heroImage from '@/imports/classicFantasyBoxOrange.jpg';
```

Do not use public folder URL references or external CDNs for project assets.
## Design System & Styling
### CSS Class Hierarchy
**Primary styling source:** `src/styles/fantasybox.css`
**Fallback:** Tailwind utilities (v4 syntax)
Always prefer existing custom classes over writing inline Tailwind. The design system includes:
#### Layout Classes
- `.fantasy-page` – full-page wrapper
- `.fb-section` – standard section container
- `.fb-section-hero` – hero-specific full-height section
- `.fb-container` – centered content container (max-width)
- `.fb-container-sm` – narrow content container

#### Background Variants
- `.fb-section-linen` – light beige background
- `.fb-section-peach` – soft peach background
- `.fb-section-tan` – warm tan background

#### Typography
- `.fb-heading` – large display headings (serif)
- `.fb-title` – section titles
- `.fb-subtitle` – section subtitles
- `.fb-section-title` – alternative section heading style
- `.fb-body-lg` – large body text

#### Components
- `.fb-card` – card/box styling
- `.fb-icon-circle` – circular icon container
- `.fb-icon-brown` / `.fb-icon-dark` / `.fb-icon-coffee` – icon color variants
- `.fb-sticky-cta` – sticky CTA bar styling

### Buttons
**Always use the `<FantasyButton>` component** instead of raw `<button>` elements.
**Available variants:**
- `"primary"` – main CTA (brown)
- `"secondary"` – secondary actions (outlined)
- `"coffee"` – dark coffee color
- `"sticky"` – sticky bar variant

```
<FantasyButton variant="primary" onClick={handleClick}>
  {t("buttonText")}
</FantasyButton>
```
### CSS Custom Properties
All color tokens are defined as CSS variables in `fantasybox.css`:
- `--fb-cream`, `--fb-linen`, `--fb-peach`, `--fb-tan`
- `--fb-brown`, `--fb-coffee`, `--fb-dark`
- `--fb-text` (default text color)

**Fonts:**
- `--fb-font-body` → Inter (sans-serif)
- `--fb-font-heading` → Crimson Pro (serif)

When extending styles, use these variables to maintain consistency.
## Internationalization (i18n)
### Supported Languages
- **English:** `en` (default)
- **Spanish:** `es`

### File Structure
src/i18n/
├── config.ts              # i18next configuration
├── types.ts               # TypeScript interfaces for all namespaces
└── locales/
├── en/                # English translations
│   ├── hero.json
│   ├── howItWorks.json
│   ├── products.json
│   ├── aesthetic.json
│   ├── whatsInside.json
│   ├── emotional.json
│   ├── faq.json
│   ├── cta.json
│   ├── requestForm.json
│   └── header.json
└── es/                # Spanish translations (mirrored structure)
└── ...

### Workflow for Adding/Modifying Text
**MANDATORY STEPS:**
1. **Add translation key to both locale files:**
    - `src/i18n/locales/en/{namespace}.json`
    - `src/i18n/locales/es/{namespace}.json`

2. **Update TypeScript interface in `src/i18n/types.ts`:**
```typescript
   interface HeroTranslation {
     title: string;
     subtitle: string;
     newKey: string; // Add new key here
   }
```
3. **Use in component via hook:**
```
   import { useTranslation } from 'react-i18next';

   function HeroSection() {
     const { t } = useTranslation('hero');
     return <h1>{t('newKey')}</h1>;
   }
```
### Namespace Naming Convention
- Namespace names are **camelCase** and match JSON filenames
- Multi-word namespaces: `howItWorks`, `whatsInside`, `requestForm`
- Single-word namespaces: `hero`, `products`, `cta`, `faq`

**Never** hardcode user-facing strings in JSX. All text must flow through i18n.
## Component Development Standards
### TypeScript Usage
- All components must be **typed** (no `any` unless absolutely necessary)
- Props interfaces should be declared inline or at file top
- Use `React.FC` sparingly; prefer explicit function signatures
```
interface SectionProps {
  title: string;
  onAction?: () => void;
}

function Section({ title, onAction }: SectionProps) {
  // ...
}
```
### Hooks & State Management
- Use React hooks (`useState`, `useEffect`, `useCallback`) for local state
- Do **not** introduce external state libraries (Redux, MobX, Zustand) without approval
- Keep state as local as possible; lift only when necessary

### File Organization
- **Landing sections:** `src/app/components/landing/`
- **Reusable UI components:** `src/components/ui/` (Shadcn components)
- **App-level components:** `src/app/components/`
- **Utilities:** `src/lib/utils.ts`

## Validation & Testing Checklist
Before marking work as complete, verify:
### 1. **Build Success**
- `pnpm build` should pass without errors
### 2. i18n Completeness
Both en and es locale files updated
src/i18n/types.ts interface updated
No missing translation keys in browser console
3. Design System Compliance
   Custom CSS classes used where available
   <FantasyButton> used instead of raw buttons
   No inline color values (use CSS variables)
   Fonts loaded via src/styles/fonts.css (Inter, Crimson Pro)
4. TypeScript & Linting
   No TypeScript errors (tsc --noEmit)
   No linting errors (if ESLint configured)
5. Cross-browser Functionality
   Test in Chrome, Firefox, Safari (minimum)
   Responsive breakpoints validated (mobile, tablet, desktop)

### Constraints & Prohibitions
## Do Not:
* Install new npm packages without explicit justification
* Use npm or yarn commands (only pnpm)
* Bypass the custom CSS design system with arbitrary Tailwind classes
* Hardcode English text in JSX (use i18n keys)
* Introduce global state management libraries
* Place assets outside src/imports/
* Modify src/dev/ (development preview components only)
## Do:
* Keep changes surgical and focused
* Maintain consistency with existing code patterns
* Document non-obvious architectural decisions in code comments
* Run pnpm build before requesting code review
* Update AGENTS.md if new conventions are established

### Reference Files
* CLAUDE.md – Technical architecture, design system details (source of truth)
* src/styles/fantasybox.css – Complete CSS design system
* src/i18n/types.ts – i18n namespace TypeScript interfaces
* src/app/data/landing-data.ts – Static content definitions
When in doubt, defer to CLAUDE.md for implementation specifics.

### Tone & Communication
Maintain a professional, senior-engineer perspective in all code and documentation. Avoid:
* Generic boilerplate comments
* Over-explaining obvious patterns
* Apologetic language in commit messages
Write code that speaks for itself; add comments only for non-obvious business logic or architectural constraints.