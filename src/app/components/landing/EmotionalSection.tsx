import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export function EmotionalSection() {
    const { t } = useTranslation("emotional");

    return (
        <section className="fb-section --fb-cream py-20">
            <div className="fb-container-sm text-center">
                <Sparkles className="fb-icon-dark mx-auto mb-6 h-12 w-12" />

                <p className="fb-heading text-2xl leading-normal text-[var(--fb-dark)]">
                    <span>{t("title")}</span>
                    <br />
                    <span className="text-amber-700">{t("tagline")}</span>
                </p>

                <p className="mt-6 text-base leading-relaxed opacity-80">
                    {t("description")}
                </p>

                <p className="mt-6 text-lg font-semibold text-amber-700">
                    {t("waiting")}
                </p>
            </div>
        </section>
    );
}