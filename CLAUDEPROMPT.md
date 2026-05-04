# Internationalization Implementation for fantasyBox (English/Spanish)

## OBJECTIVE
Implement a clean, type-safe internationalization (i18n) system for fantasyBox supporting English and Spanish with minimal overhead and maximum maintainability.

## MANDATORY REQUIREMENTS

### ✅ Technology Stack
— **MUST use**: `i18next` + `react-i18next` (industry standard, lightweight)
— **MUST use**: `i18next-browser-languagedetector` for automatic language detection
— **Install with**: `pnpm add i18next react-i18next i18next-browser-languagedetector`
— **NO other i18n libraries** (no react-intl, no next-intl, no custom solutions)

### ✅ TypeScript Requirements (STRICT)
— **NO `any` types allowed** – all translation keys must be typed
— Define explicit interfaces for all translation resources
— Use `react-i18next` TypeScript module augmentation for type-safe keys
— All locale files must have matching structure (enforced by types)

### ✅ Project Structure
```

src/
├── i18n/
│   ├── config.ts              # i18next configuration
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.json    # Shared UI: buttons, labels, errors
│   │   │   ├── hero.json      # Hero section
│   │   │   ├── products.json  # Products section
│   │   │   ├── about.json     # About section
│   │   │   └── footer.json    # Footer section
│   │   └── es/
│   │       ├── common.json
│   │       ├── hero.json
│   │       ├── products.json
│   │       ├── about.json
│   │       └── footer.json
│   └── types.ts               # TypeScript definitions
```
### ✅ Code Quality Standards

#### 1. **Namespace Organization**
- **Split by component/section** (hero, products, about, footer, common)
- **NOT by page** (avoid massive JSON files)
- **Use namespaces** for lazy loading: `t('hero:title')`

#### 2. **Translation Key Naming**
- Use **camelCase** for keys: `welcomeMessage`, `ctaButtonText`
- Use **dot notation** for nesting: `form.email.placeholder`, `form.email.error`
- **NO dynamic keys**: ❌ `t(someVariable)` → ✅ `t('hero.title')`
- Keep keys semantic, not literal: ✅ `hero.ctaButton` ❌ `hero.learnMoreButton`

#### 3. **JSON Structure Pattern**
```
json
{
  "title": "Welcome to fantasyBox",
  "subtitle": "Discover your next magical reading experience",
  "cta": {
    "primary": "Get Started",
    "secondary": "Learn More"
  },
  "features": {
    "curated": {
      "title": "Curated Selection",
      "description": "Hand-picked books just for you"
    }
  }
}
```

#### 4. **Component Usage Pattern**
```
typescript
import { useTranslation } from 'react-i18next';

interface HeroProps {
  variant?: 'default' | 'minimal';
}

export const Hero: React.FC<HeroProps> = ({ variant = 'default' }) => {
  const { t } = useTranslation('hero'); // namespace
  
  return (
    <section>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <Button>{t('cta.primary')}</Button>
    </section>
  );
};
```


#### 5. **Language Switcher Component**
- **MUST be**: Radix UI Select or Toggle component (NOT custom dropdown)
- **Icons**: Use Lucide React `Languages` icon
- **Position**: Navigation bar (top right)
- **Persistence**: Store language in `localStorage`
- **Animation**: Use `motion` for smooth transitions

### ✅ i18n Configuration Rules

#### Required Features:
- ✅ Automatic language detection (browser + localStorage)
- ✅ Fallback to English if Spanish is unavailable
- ✅ Namespace support for lazy loading
- ✅ Type-safe translation keys
- ✅ Debug mode in development only

#### Forbidden Patterns:
- ❌ NO inline translations: `t('Login')` without namespace
- ❌ NO hardcoded strings outside JSON files
- ❌ NO `dangerouslySetInnerHTML` with translations (use interpolation)
- ❌ NO mixing Spanish/English in the same component

### ✅ Integration Requirements

#### 1. **Initialize in `main.tsx`**
```
typescript
import './i18n/config'; // Initialize i18next BEFORE React renders
import { createRoot } from 'react-dom/client';

// ... rest of setup
```


#### 2. **Wrap App with Suspense**
```
typescript
import { Suspense } from 'react';

<Suspense fallback={<LoadingSpinner />}>
  <App />
</Suspense>
```


#### 3. **Handle Loading States**
- Show spinner while translations load
- Use Radix UI Skeleton for layout preservation

### ✅ Accessibility Requirements
- Language switcher MUST have `aria-label="Change language"`
- Page `lang` attribute MUST update on language change
- Screen readers MUST announce language changes

### ✅ Performance Requirements
- Lazy load translation namespaces (load hero.json only on a hero section)
- NO full locale import: ❌ `import en from './locales/en'`
- Use code splitting with React Router 7
- Translation files MUST be < 50KB each

### ✅ Testing & Validation
Before considering done:
1. All text in app uses `t()` function (no hardcoded English)
2. Both English and Spanish JSONs have matching keys
3. Language switcher persists across page reloads
4. TypeScript compiles with no errors
5. `pnpm build` succeeds without warnings

---

## STRICT RESTRICTIONS

### 🚫 DO NOT:
1. Create a single massive `translations.json` file
2. Use `any` type for translation keys
3. Mix i18n libraries (only i18next)
4. Put translations in component files
5. Use inline styles for language switcher (use Tailwind)
6. Create custom language detection (use i18next-browser-languagedetector)
7. Hardcode language in URL routes (keep URLs language-agnostic)
8. Use emojis as language identifiers (use proper ISO codes: `en`, `es`)

### ✅ DO:
1. Use TypeScript module augmentation for type safety
2. Organize it by namespace (hero, products, etc.)
3. Follow fantasyBox coding standards (Tailwind, Radix UI, Motion)
4. Use `useTranslation` hook in functional components
5. Keep JSON files flat (max three levels deep)
6. Provide meaningful context in key names
7. Use interpolation for dynamic values: `t('greeting', { name: userName })`
8. Test both languages in every component

---

## SUCCESS CRITERIA
- ✅ Zero hardcoded English strings in components
- ✅ TypeScript autocomplete works for all translation keys
- ✅ Language switcher in navigation works smoothly
- ✅ Both languages display correctly across all sections
- ✅ No console errors or missing translation warnings
- ✅ Bundle size increases < 30KB
- ✅ First paint time impact < 100 ms
- ✅ Code follows all fantasyBox conventions from CLAUDE.md

---

## IMPLEMENTATION ORDER
1. Install dependencies (`pnpm add i18next react-i18next i18next-browser-languagedetector`)
2. Create `src/i18n/` folder structure
3. Set up TypeScript types (`types.ts`)
4. Configure i18next (`config.ts`)
5. Create English translation files (all namespaces)
6. Create Spanish translation files (matching structure)
7. Initialize i18n in `main.tsx`
8. Create a LanguageSwitcher component (Radix UI)
9. Replace hardcoded strings with `t()` function
10. Test both languages thoroughly
11. Verify TypeScript types work
12. Run `pnpm build` and verify bundle size

---

## EXAMPLE VALIDATION CHECKLIST
Before submitting:
- [ ] `pnpm build` succeeds
- [ ] No TypeScript errors
- [ ] Language switcher renders in navigation
- [ ] All sections display in both languages
- [ ] Translations stored in `/i18n/locales/{lang}/{namespace}.json`
- [ ] No `any` types in i18n code
- [ ] Follows Tailwind plus Radix UI patterns
- [ ] Language persists across page reloads
- [ ] No hardcoded English text in components
- [ ] Translation keys are semantically named

---

**Alignment**: This implementation MUST follow ALL standards in CLAUDE.md, including:
- pnpm for package management
- Radix UI for language switcher
- Tailwind CSS for styling
- Motion for transitions
- Lucide icons for language icon
- Strict TypeScript (no `any`)
```
