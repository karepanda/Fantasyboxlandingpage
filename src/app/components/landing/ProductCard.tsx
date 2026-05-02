import { CheckCircle } from "lucide-react";

import { FantasyButton } from "./FantasyButton";

interface ProductCardProps {
    name: string;
    desc: string;
    includes: string[];
    img: string;
    onRequestBox: () => void;
}

export function ProductCard({
                                name,
                                desc,
                                includes,
                                img,
                                onRequestBox,
                            }: ProductCardProps) {
    return (
        <div className="fb-card">
            <img src={img} alt={name} className="h-64 w-full object-cover" />

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
                    Final price depends on the selected book and shipping
                </p>

                <FantasyButton variant="coffee" onClick={onRequestBox}>
                    Request this box
                </FantasyButton>
            </div>
        </div>
    );
}