import { aesthetics } from "../../data/landing-data";
import { SectionTitle } from "./SectionTitle";

export function AestheticSection() {
    return (
        <section className="fb-section">
            <div className="fb-container">
                <SectionTitle className="mb-4">
                    Choose your aesthetic
                </SectionTitle>

                <p className="mb-12 text-center opacity-80">
                    Each box can be customized to match your reading mood
                </p>

                <div className="grid grid-cols-2 gap-4">
                    {aesthetics.map((style) => (
                        <div
                            key={style.name}
                            className="overflow-hidden rounded-xl shadow"
                            style={{ backgroundColor: "var(--fb-tan)" }}
                        >
                            <div
                                className="aspect-square"
                                style={{ backgroundColor: style.color }}
                            >
                                <img
                                    src={style.img}
                                    alt={style.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="p-3 text-center">
                                <p className="text-sm text-[var(--fb-text)]">
                                    {style.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}