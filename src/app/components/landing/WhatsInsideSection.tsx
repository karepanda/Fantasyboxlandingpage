import { insideItems } from "../../data/landing-data";
import { SectionTitle } from "./SectionTitle";

export function WhatsInsideSection() {
    return (
        <section className="fb-section fb-section-linen">
            <div className="fb-container">
                <SectionTitle>
                    What's inside the box
                </SectionTitle>

                <div className="grid grid-cols-2 gap-4">
                    {insideItems.map((item) => (
                        <div
                            key={item.text}
                            className="rounded-xl bg-[var(--fb-cream)] p-4 text-center"
                        >
                            <item.icon className="fb-icon-brown mx-auto mb-2 h-8 w-8" />

                            <p className="text-sm">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}