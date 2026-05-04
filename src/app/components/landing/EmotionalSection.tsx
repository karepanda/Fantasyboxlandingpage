import { Sparkles } from "lucide-react";

export function EmotionalSection() {
    return (
        <section className="fb-section --fb-cream py-20">
            <div className="fb-container-sm text-center">
                <Sparkles className="fb-icon-dark mx-auto mb-6 h-12 w-12" />

                <p className="fb-heading text-2xl leading-normal text-[var(--fb-dark)]">
                    This is not just a box. It is your moment to disconnect from the world
                    and enter another.
                </p>
            </div>
        </section>
    );
}