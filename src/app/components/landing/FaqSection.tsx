import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqs } from "../../data/landing-data";
import { SectionTitle } from "./SectionTitle";

export function FaqSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section className="fb-section fb-section-peach">
            <div className="fb-container">
                <SectionTitle>
                    Frequently Asked Questions
                </SectionTitle>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.q}
                            className="overflow-hidden rounded-xl bg-[var(--fb-cream)]"
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                className="flex w-full items-center justify-between p-5 text-left"
                            >
                <span className="fb-heading text-lg text-[var(--fb-text)]">
                  {faq.q}
                </span>

                                <ChevronDown
                                    className={`h-5 w-5 text-[var(--fb-brown)] transition-transform ${
                                        openFaq === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {openFaq === index && (
                                <div className="px-5 pb-5 opacity-80">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}