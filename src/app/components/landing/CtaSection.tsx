import { useTranslation } from "react-i18next";
import { FantasyButton } from "./FantasyButton";

export function CtaSection() {
    const { t } = useTranslation("cta");

    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="cta-section" className="fb-section fb-section-cream py-20">
            <div className="fb-container-sm text-center">
                <h2 className="fb-heading mb-4 text-3xl">
                    {t("title")}
                </h2>

                <p className="fb-body-lg mb-8 opacity-80">
                    {t("subtitle")}
                </p>

                <FantasyButton className="shadow-lg" onClick={scrollToProducts}>
                    {t("buttonText")}
                </FantasyButton>

                <p className="mt-4 text-sm opacity-60">
                    {t("responseTime")}
                </p>
            </div>
        </section>
    );
}