import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation namespaces
import commonEn from './locales/en/common.json';
import heroEn from './locales/en/hero.json';
import productsEn from './locales/en/products.json';
import aestheticEn from './locales/en/aesthetic.json';
import howItWorksEn from './locales/en/how-it-works.json';
import whatsInsideEn from './locales/en/whats-inside.json';
import emotionalEn from './locales/en/emotional.json';
import faqEn from './locales/en/faq.json';
import ctaEn from './locales/en/cta.json';
import footerEn from './locales/en/footer.json';
import requestFormEn from './locales/en/request-form.json';

import commonEs from './locales/es/common.json';
import heroEs from './locales/es/hero.json';
import productsEs from './locales/es/products.json';
import aestheticEs from './locales/es/aesthetic.json';
import howItWorksEs from './locales/es/how-it-works.json';
import whatsInsideEs from './locales/es/whats-inside.json';
import emotionalEs from './locales/es/emotional.json';
import faqEs from './locales/es/faq.json';
import ctaEs from './locales/es/cta.json';
import footerEs from './locales/es/footer.json';
import requestFormEs from './locales/es/request-form.json';


const resources = {
  en: {
    common: commonEn,
    hero: heroEn,
    products: productsEn,
    aesthetic: aestheticEn,
    howItWorks: howItWorksEn,
    whatsInside: whatsInsideEn,
    emotional: emotionalEn,
    faq: faqEn,
    cta: ctaEn,
    footer: footerEn,
    requestForm: requestFormEn,
  },
  es: {
    common: commonEs,
    hero: heroEs,
    products: productsEs,
    aesthetic: aestheticEs,
    howItWorks: howItWorksEs,
    whatsInside: whatsInsideEs,
    emotional: emotionalEs,
    faq: faqEs,
    cta: ctaEs,
    footer: footerEs,
    requestForm: requestFormEs,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    ns: Object.keys(resources.en),
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    debug: false, // Set to true for development
  });
