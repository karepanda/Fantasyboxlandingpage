
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
      bookSleeve: string;
    };
  };
  cozyBox: {
    name: string;
    desc: string;
    includes: {
      everything: string;
      candle: string;
      journal: string;
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
    four: {
      title: string;
      desc: string;
    }
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
    bookSleeve: string;
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

export interface RequestFormTranslations {
  success: {
    title: string;
    message: string;
    close: string;
  };
  header: {
    title: string;
    closeAriaLabel: string;
  };
  sections: {
    shipmentDetails: string;
    bookSelection: string;
    readerType: string;
    chooseColor: string;
    doubtsOrComments: string;
  };
  fields: {
    fullName: {
      label: string;
      placeholder: string;
      required: string;
    };
    email: {
      label: string;
      placeholder: string;
      required: string;
      invalid: string;
    };
    shippingAddress: {
      label: string;
      placeholder: string;
      required: string;
    };
    city: {
      label: string;
      placeholder: string;
      required: string;
    };
    zipCode: {
      label: string;
      placeholder: string;
      required: string;
    };
    phoneNumber: {
      label: string;
      placeholder: string;
      required: string;
    };
    bookTitle: {
      label: string;
      placeholder: string;
      required: string;
    };
    readerType: {
      required: string;
      physical: string;
      electronic: string;
    };
    readerModel: {
      label: string;
      placeholder: string;
      required: string;
    };
    selectedColor: {
      required: string;
    };
    doubts: {
      placeholder: string;
    };
  };
  errors: {
    submit: string;
  };
  actions: {
    sending: string;
    submit: string;
  };
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
  requestForm: RequestFormTranslations;
}

// Declare module to enable type-safe useTranslation hook
declare module 'i18next' {
  interface i18n {
    t(key: string, defaultValue?: string, options?: any): string;
  }
}
