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
import { Header } from "./components/Header";

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
    </div>
  );
}
