import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

import { SectionTitle } from "./SectionTitle";

export function FaqSection() {
    const { t } = useTranslation("faq");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        { qKey: "questions.one.q", aKey: "questions.one.a" },
        { qKey: "questions.two.q", aKey: "questions.two.a" },
        { qKey: "questions.three.q", aKey: "questions.three.a" },
        { qKey: "questions.four.q", aKey: "questions.four.a" },
    ];

    return (
        <section className="fb-section fb-section-linen">
            <div className="fb-container">
                <SectionTitle>
                    {t("title")}
                </SectionTitle>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.qKey}
                            className="overflow-hidden rounded-xl bg-[var(--fb-cream)]"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="flex w-full items-center justify-between p-5 text-left"
                                style={{cursor: 'pointer'}}
                            >
                <span className="fb-heading text-lg text-[var(--fb-text)]">
                  {t(faq.qKey)}
                </span>

                                <ChevronDown
                                    className={`h-5 w-5 text-[var(--fb-brown)] transition-transform ${
                                        openFaq === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {openFaq === index && (
                                <div className="px-5 pb-5 opacity-80">
                                    {t(faq.aKey)}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}