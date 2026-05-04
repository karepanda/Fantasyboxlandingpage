import { useTranslation } from "react-i18next";
import { BookOpen, Sparkles, Heart, Package } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

export function WhatsInsideSection() {
    const { t } = useTranslation("whatsInside");

    const insideItems = [
        { icon: BookOpen, textKey: "items.book" },
        { icon: Sparkles, textKey: "items.bookmark" },
        { icon: Heart, textKey: "items.flags" },
        { icon: Package, textKey: "items.notes" },
        { icon: BookOpen, textKey: "items.pen" },
        { icon: Heart, textKey: "items.postcard" },
        { icon: Sparkles, textKey: "items.extras" },
        { icon: Package, textKey: "items.packaging" },
    ];

    return (
        <section className="fb-section fb-section-linen">
            <div className="fb-container">
                <SectionTitle>
                    {t("title")}
                </SectionTitle>

                <p className="text-center opacity-80 mb-8">
                    {t("subtitle")}
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {insideItems.map((item) => (
                        <div
                            key={item.textKey}
                            className="rounded-xl bg-[var(--fb-cream)] p-4 text-center"
                        >
                            <item.icon className="fb-icon-brown mx-auto mb-2 h-8 w-8" />

                            <p className="text-sm">
                                {t(item.textKey)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}