import {
  AestheticSection,
  CtaSection,
  EmotionalSection,
  FaqSection,
  HeroSection,
  HowItWorksSection,
  ProductsSection,
  WhatsInsideSection,
} from "./components/landing";

export default function App() {
  const scrollToForm = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fantasy-page">
      <HeroSection />

      <HowItWorksSection />

      <ProductsSection onRequestBox={scrollToForm} />

      <AestheticSection />

      <WhatsInsideSection />

      <EmotionalSection />

      <FaqSection />

      <CtaSection />
    </div>
  );
}
