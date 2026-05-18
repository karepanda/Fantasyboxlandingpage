import { BookOpen, Package, CheckCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "./SectionTitle";

export function HowItWorksSection() {
    const { t } = useTranslation("howItWorks");

    const steps = [
        { icon: BookOpen, titleKey: "steps.one.title", descKey: "steps.one.desc" },
        { icon: Package, titleKey: "steps.two.title", descKey: "steps.two.desc" },
        { icon: CheckCircle, titleKey: "steps.three.title", descKey: "steps.three.desc" },
        { icon: Clock, titleKey: "steps.four.title", descKey: "steps.four.desc" },
    ];

    return (
        <section className="fb-section">
            <div className="fb-container">
                <SectionTitle>
                    {t("title")}
                </SectionTitle>

                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.titleKey} className="flex items-start gap-4">
                            <div className="fb-icon-circle">
                                <step.icon className="fb-icon-dark h-6 w-6" />
                            </div>

                            <div>
                                <h3 className="fb-heading mb-1 text-xl text-[var(--fb-text)]">
                                    {t(step.titleKey)}
                                </h3>

                                <p className="opacity-80">
                                    {t(step.descKey)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}