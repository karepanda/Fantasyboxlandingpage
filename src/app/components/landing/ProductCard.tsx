import { useState } from "react";
import { CheckCircle } from "lucide-react";

import { FantasyButton } from "./FantasyButton";
import { RequestForm } from "./RequestForm";

interface ProductCardProps {
    name: string;
    desc: string;
    includes: string[];
    img: string;
    onRequestBox: () => void;
    footerNote?: string;
    buttonText?: string;
}

export function ProductCard({
                                name,
                                desc,
                                includes,
                                img,
                                onRequestBox,
                                footerNote = "Final price depends on the selected book and shipping",
                                buttonText = "Request this box",
                            }: ProductCardProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div className="fb-card">
            {/* Image with hover overlay */}
            <div className="group relative cursor-pointer" onClick={() => setIsZoomed(true)}>
                <img src={img} alt={name} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <p className="text-white text-center text-lg font-medium">View image</p>
                </div>
            </div>

            <div className="p-6">
                <h3 className="fb-heading mb-2 text-2xl">
                    {name}
                </h3>

                <p className="mb-4 opacity-80">
                    {desc}
                </p>

                <div className="mb-4">
                    <p className="mb-2 text-sm opacity-70">
                        Includes:
                    </p>

                    <ul className="space-y-1">
                        {includes.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2 text-sm opacity-80"
                            >
                                <CheckCircle className="fb-icon-coffee h-4 w-4 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mb-4 text-sm italic opacity-70">
                    {footerNote}
                </p>

                <FantasyButton variant="coffee" onClick={() => setIsFormOpen(true)}>
                    {buttonText}
                </FantasyButton>
            </div>

            {/* Lightbox Modal */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
                    onClick={() => setIsZoomed(false)}
                >
                    <img
                        src={img}
                        alt={name}
                        className="max-h-screen max-w-screen object-contain"
                    />
                </div>
            )}

            {/* Request Form Modal */}
            {isFormOpen && (
                <RequestForm
                    productType={name}
                    onClose={() => setIsFormOpen(false)}
                />
            )}
        </div>
    );
}