import {
  AestheticSection,
  CtaSection,
  EmotionalSection,
  FaqSection,
  Footer,
  HeroSection,
  HowItWorksSection,
  ProductsSection,
  WhatsInsideSection,
} from "./components/landing";
import { Header } from "./components/Header";
import { AnalyticsConsentBanner } from "./components/AnalyticsConsent";

export default function App() {
  const scrollToForm = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fantasy-page">
      <Header />
      <HeroSection />

      <HowItWorksSection />

      <ProductsSection onRequestBox={scrollToForm} />

      <AestheticSection />

      <WhatsInsideSection />

      <EmotionalSection />

      <FaqSection />

      <CtaSection />
      <Footer />
      <AnalyticsConsentBanner />
    </div>
  );
}
