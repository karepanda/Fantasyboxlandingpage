import { FantasyButton } from "./FantasyButton";

export function CtaSection() {
    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section id="cta-section" className="fb-section fb-section-linen py-20">
            <div className="fb-container-sm text-center">
                <h2 className="fb-heading mb-4 text-3xl">
                    Ready to build your FantasyBox?
                </h2>

                <p className="fb-body-lg mb-8 opacity-80">
                    Tell us which book you want and where we should send it. We'll
                    calculate the final price for your personalized box.
                </p>

                <FantasyButton className="shadow-lg" onClick={scrollToProducts}>
                    Explore the boxes
                </FantasyButton>

                <p className="mt-4 text-sm opacity-60">
                    We'll respond within 24 hours with your personalized quote
                </p>
            </div>
        </section>
    );
}