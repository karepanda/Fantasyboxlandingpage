import { steps } from "../../data/landing-data";
import { SectionTitle } from "./SectionTitle";

export function HowItWorksSection() {
    return (
        <section className="fb-section">
            <div className="fb-container">
                <SectionTitle>
                    How it works
                </SectionTitle>

                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.title} className="flex items-start gap-4">
                            <div className="fb-icon-circle">
                                <step.icon className="fb-icon-dark h-6 w-6" />
                            </div>

                            <div>
                                <h3 className="fb-heading mb-1 text-xl text-[var(--fb-text)]">
                                    {step.title}
                                </h3>

                                <p className="opacity-80">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}