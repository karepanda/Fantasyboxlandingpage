import {
  AestheticSection,
  CtaSection,
  EmotionalSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  ProductsSection,
  StickyCta,
  WhatsInsideSection,
} from "./components/landing";

export default function App() {
  const scrollToForm = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fantasy-page">
      <HeroSection onRequestBox={scrollToForm} />

      <HowItWorksSection />

      <ProductsSection onRequestBox={scrollToForm} />

      <AestheticSection />

      <WhatsInsideSection />

      <EmotionalSection />

      <FaqSection />

      <CtaSection />

      <StickyCta onRequestBox={scrollToForm} />

      <div className="h-20" />
    </div>
  );
}
