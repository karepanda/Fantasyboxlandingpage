import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import img1 from "../../../imports/IMG_20260429_180019.jpg";
import { FantasyButton } from "./FantasyButton";

export function HeroSection() {
    const { t } = useTranslation("hero");

    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative fb-section-hero">
            <div className="fb-container text-center">
                <div className="mb-6">
                    <BookOpen className="fb-icon-brown mx-auto mb-4 h-12 w-12" />

                    <h1 className="fb-heading fb-title mb-2">
                        {t("title")}
                    </h1>
                </div>

                <h2 className="fb-heading fb-subtitle mb-4 text-[var(--fb-text)]">
                    {t("subtitle")}
                </h2>

                <p className="fb-body-lg mb-8 opacity-90">
                    {t("description")}
                </p>

                <div className="mb-8 flex flex-col gap-3">
                    <FantasyButton variant="secondary" onClick={scrollToProducts}>
                        {t("cta")}
                    </FantasyButton>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={img1}
                        alt={t("imageAlt")}
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </section>
    );
}