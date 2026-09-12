import { BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import hero480 from "../../../imports/purpleAndGreenClassicFantasyBox2-480.webp";
import hero768 from "../../../imports/purpleAndGreenClassicFantasyBox2-768.webp";
import hero1024 from "../../../imports/purpleAndGreenClassicFantasyBox2-1024.webp";
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
                    <picture className="block">
                        <source
                            type="image/webp"
                            srcSet={`${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`}
                            sizes="(min-width: 34.5rem) 32rem, calc(100vw - 2.5rem)"
                        />
                        <img
                            src={hero1024}
                            srcSet={`${hero480} 480w, ${hero768} 768w, ${hero1024} 1024w`}
                            sizes="(min-width: 34.5rem) 32rem, calc(100vw - 2.5rem)"
                            width={3072}
                            height={4096}
                            alt={t("imageAlt")}
                            loading="eager"
                            fetchPriority="high"
                            className="h-auto w-full"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
