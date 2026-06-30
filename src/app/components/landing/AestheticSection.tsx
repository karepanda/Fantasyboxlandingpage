import { useState } from "react";
import { useTranslation } from "react-i18next";
import { finishedProducts, type FinishedProduct } from "../../data/landing-data";
import { FantasyButton } from "./FantasyButton";
import { RequestForm } from "./RequestForm";
import { SectionTitle } from "./SectionTitle";

export function AestheticSection() {
    const { t } = useTranslation("aesthetic");
    const [selectedProduct, setSelectedProduct] = useState<FinishedProduct | null>(null);

    const handleOrder = (product: FinishedProduct) => {
        document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
        setSelectedProduct(product);
    };

    return (
        <section className="fb-section">
            <div className="fb-container">
                <SectionTitle className="mb-4">
                    {t("title")}
                </SectionTitle>

                <p className="mb-12 text-center opacity-80">
                    {t("subtitle")}
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {finishedProducts.map((product) => {
                        const productName = t(product.name);

                        return (
                        <div
                            key={product.name}
                            className="flex h-full flex-col overflow-hidden rounded-xl shadow"
                            style={{ backgroundColor: "var(--fb-tan)" }}
                        >
                            <div className="relative aspect-square">
                                <img
                                    src={product.img}
                                    alt={productName}
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute right-3 top-3 rounded-full bg-[var(--fb-cream)] px-3 py-1 text-sm font-semibold text-[var(--fb-dark)] shadow">
                                    {t(product.price)}
                                </div>
                            </div>

                            <div className="flex flex-grow flex-col justify-between gap-3 p-4 text-center">
                                <p className="text-sm font-medium text-[var(--fb-text)]">
                                    {productName}
                                </p>
                                <FantasyButton
                                    variant="coffee"
                                    onClick={() => handleOrder(product)}
                                >
                                    {t("finishedProducts.orderButton")}
                                </FantasyButton>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>

            {selectedProduct && (
                <RequestForm
                    productType={t(selectedProduct.productType, { lng: "en" })}
                    productLabel={t(selectedProduct.name)}
                    initialSelectedColor={{
                        name: t(selectedProduct.colorName, { lng: "en" }),
                        value: selectedProduct.colorValue,
                    }}
                    hideColorSelector
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
}
