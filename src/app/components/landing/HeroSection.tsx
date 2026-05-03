import { BookOpen } from "lucide-react";
import img1 from "../../../imports/IMG_20260429_180019.jpg";
import { FantasyButton } from "./FantasyButton";

export function HeroSection() {
    const scrollToProducts = () => {
        document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative fb-section-hero">
            <div className="fb-container text-center">
                <div className="mb-6">
                    <BookOpen className="fb-icon-brown mx-auto mb-4 h-12 w-12" />

                    <h1 className="fb-heading fb-title mb-2">
                        FantasyBox
                    </h1>
                </div>

                <h2 className="fb-heading fb-subtitle mb-4 text-[var(--fb-text)]">
                    Your next book deserves a ritual.
                </h2>

                <p className="fb-body-lg mb-8 opacity-90">
                    Choose your book. We curate the cozy, magical experience around it.
                </p>

                <div className="mb-8 flex flex-col gap-3">
                    <FantasyButton variant="secondary" onClick={scrollToProducts}>
                        Explore the boxes
                    </FantasyButton>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={img1}
                        alt="FantasyBox with cozy reading items"
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </section>
    );
}