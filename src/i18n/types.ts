
// Type-safe namespace declarations
export interface CommonTranslations {
  language: string;
  buttonExplore: string;
  buttonRequest: string;
  buttonLearnMore: string;
  ctaRequestBox: string;
  ctaRequestSet: string;
  ctaRequestSleeve: string;
  footerNote: string;
}

export interface HeroTranslations {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  imageAlt: string;
}

export interface ProductsTranslations {
  title: string;
  classicBox: {
    name: string;
    desc: string;
    footerNote: string;
    buttonText: string;
    includes: {
      book: string;
      bookmark: string;
      indexFlags: string;
      stickyNotes: string;
      pen: string;
      postcard: string;
    };
  };
  cozyBox: {
    name: string;
    desc: string;
    includes: {
      everything: string;
      sleeve: string;
      candle: string;
      stationery: string;
    };
  };
  bookmarks: {
    name: string;
    desc: string;
    includes: {
      collection: string;
      styles: string;
      packaging: string;
    };
  };
  sleeve: {
    name: string;
    desc: string;
    includes: {
      fit: string;
      material: string;
      colors: string;
    };
  };

}


export interface AestheticTranslations {
  title: string;
  subtitle: string;
  aesthetics: {
    cozyBeige: string;
    darkAcademy: string;
    vintageCoffee: string;
    softCream: string;
    oldLibrary: string;
  };
}

export interface HowItWorksTranslations {
  title: string;
  steps: {
    one: {
      title: string;
      desc: string;
    };
    two: {
      title: string;
      desc: string;
    };
    three: {
      title: string;
      desc: string;
    };
  };
}

export interface WhatsInsideTranslations {
  title: string;
  subtitle: string;
  items: {
    book: string;
    bookmark: string;
    flags: string;
    notes: string;
    pen: string;
    postcard: string;
    extras: string;
    packaging: string;
  };
}

export interface EmotionalTranslations {
  title: string;
  tagline: string;
  description: string;
  waiting: string;
}

export interface FaqTranslations {
  title: string;
  questions: {
    one: {
      q: string;
      a: string;
    };
    two: {
      q: string;
      a: string;
    };
    three: {
      q: string;
      a: string;
    };
    four: {
      q: string;
      a: string;
    };
  };
}

export interface CtaTranslations {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface FooterTranslations {
  copyright: string;
  tagline: string;
}

export interface Resources {
  common: CommonTranslations;
  hero: HeroTranslations;
  products: ProductsTranslations;
  aesthetic: AestheticTranslations;
  howItWorks: HowItWorksTranslations;
  whatsInside: WhatsInsideTranslations;
  emotional: EmotionalTranslations;
  faq: FaqTranslations;
  cta: CtaTranslations;
  footer: FooterTranslations;
}

// Declare module to enable type-safe useTranslation hook
declare module 'i18next' {
  interface i18n {
    t(key: string, defaultValue?: string, options?: any): string;
  }
}
