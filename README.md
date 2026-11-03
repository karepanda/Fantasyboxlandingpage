# fantasyBox Landing Page

A modern, interactive single-page landing site designed to create a cozy, magical reading subscription box experience. 

**Figma Design Reference**: [fantasyBox Design](https://www.figma.com/design/Hh2ifAaI3JIUyMrlMYFvCO/fantasyBox)

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- **pnpm** (preferred package manager)

### Installation
Install project dependencies using `pnpm`:
```bash
pnpm install
```

### Development
Start the local Vite development server:
```bash
pnpm dev
```
Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the page.

---

## Main Build Commands
- `pnpm build` — Build the application for production (files are written to `/dist`).
- `pnpm preview` — Run a local web server to preview the production build.
- `pnpm deploy` — Deploy the built production assets to GitHub Pages.

## Optional GA4 analytics

The landing page supports consent-gated Google Analytics 4 measurement through `VITE_GA4_MEASUREMENT_ID`. Copy `.env.example` to `.env.local`, provide the deployment's `G-...` Measurement ID, and never commit the local environment file. Without a valid ID, analytics and its consent banner remain disabled while the rest of the site continues to work.

See [docs/analytics.md](./docs/analytics.md) for the consent model, event definitions, prohibited data, production configuration, and verification checklist.

---

## Project Structure
- `src/app/App.tsx` — Main application root and layout.
- `src/app/components/landing/` — Section components (Hero, How It Works, Products, Faq, etc.).
- `src/styles/fantasybox.css` — Core custom CSS design system.
- `src/i18n/` — Internationalization config and English/Spanish translation files.
- `docs/` — Additional project documentation and tools.

For technical details, standards, and rules for agents, please refer to:
- [CLAUDE.md](./CLAUDE.md) — Technical Reference & Design System
- [AGENTS.md](.agents/AGENTS.md) — AI Coding Agent Rules & Constraints
