import { lazy, Suspense, useEffect, useState, type KeyboardEvent } from "react";
import { CheckCircle } from "lucide-react";
import { FantasyButton } from "./FantasyButton";
import { useTranslation } from "react-i18next";
import type { ProductContents, ResponsiveImage } from "../../data/landing-data";
import { BoxContentsDialog } from "./BoxContentsDialog";

const loadRequestForm = () => import("./RequestForm").then(({ RequestForm }) => ({ default: RequestForm }));
const LazyRequestForm = lazy(loadRequestForm);

interface ProductCardProps {
    name: string;
    productType?: string;
    desc: string;
    price?: string;
    originalPrice?: string;
    includes: string[];
    img: ResponsiveImage;
    onRequestBox: () => void;
    footerNote?: string;
    buttonText?: string;
    contents?: ProductContents;
}

export function ProductCard({
                                name,
                                productType,
                                desc,
                                price,
                                originalPrice,
                                includes,
                                img,
                                footerNote = "footerNote",
                                buttonText = "requestButton",
                                contents,
                            }: ProductCardProps) {
    const [isZoomed, setIsZoomed] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const { t } = useTranslation("products");

    const translatedName = t(name);

    useEffect(() => {
        if (!isZoomed) return;
        const handleKeyDown = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsZoomed(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isZoomed]);

    return (
        <div className="fb-card">
            {/* Image with hover overlay */}
            <div
                className="group relative cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={t("viewImage")}
                onClick={() => setIsZoomed(true)}
                onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setIsZoomed(true);
                    }
                }}
            >
                {price && (
                    <div className="fb-product-price-badge">
                        {originalPrice && (
                            <span className="fb-product-original-price">{t(originalPrice)}</span>
                        )}
                        <span>{t(price)}</span>
                    </div>
                )}
                <picture className="block">
                    <source type={img.mimeType ?? "image/webp"} srcSet={img.srcSet} sizes="(min-width: 34.5rem) 32rem, calc(100vw - 2.5rem)" />
                    <img
                        src={img.src}
                        srcSet={img.srcSet}
                        sizes="(min-width: 34.5rem) 32rem, calc(100vw - 2.5rem)"
                        width={img.width}
                        height={img.height}
                        alt={translatedName}
                        loading="lazy"
                        decoding="async"
                        className="h-64 w-full object-cover"
                    />
                </picture>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <p className="text-white text-center text-lg font-medium">{t("viewImage")}</p>
                </div>
            </div>

            <div className="p-6">
                <h3 className="fb-heading mb-2 text-2xl">
                    {translatedName}
                </h3>

                <p className="mb-4 opacity-80">
                    {t(desc)}
                </p>

                <div className="mb-4">

                    <ul className="space-y-1">
                        {includes.map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2 text-sm opacity-80"
                            >
                                <CheckCircle className="fb-icon-coffee h-4 w-4 flex-shrink-0" />
                                {t(item)}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="mb-4 text-sm italic opacity-70">
                    {t(footerNote)}
                </p>

                <div className="fb-card-actions">
                    {contents && <BoxContentsDialog contents={contents} />}

                    <FantasyButton
                        variant="coffee"
                        onPointerEnter={() => void loadRequestForm()}
                        onFocus={() => void loadRequestForm()}
                        onPointerDown={() => void loadRequestForm()}
                        onClick={() => setIsFormOpen(true)}
                    >
                        {t(buttonText)}
                    </FantasyButton>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isZoomed && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
                    onClick={() => setIsZoomed(false)}
                >
                    <img
                        src={img.fullSrc}
                        width={img.width}
                        height={img.height}
                        alt={translatedName}
                        className="max-h-screen max-w-screen object-contain"
                    />
                </div>
            )}

            {/* Request Form Modal */}
            {isFormOpen && (
                <Suspense fallback={null}>
                    <LazyRequestForm
                        productType={productType ?? t(name, { lng: "en" })}
                        productLabel={translatedName}
                        onClose={() => setIsFormOpen(false)}
                    />
                </Suspense>
            )}
        </div>
    );
}
