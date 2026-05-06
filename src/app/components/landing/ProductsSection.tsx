import { useTranslation } from "react-i18next";
import { products } from "../../data/landing-data";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

interface ProductsSectionProps {
    onRequestBox: () => void;
}

export function ProductsSection({ onRequestBox }: ProductsSectionProps) {
    const { t } = useTranslation("products");

    return (
        <section id="products" className="fb-section fb-section-linen">
            <div className="fb-container">
                <SectionTitle>
                    {t("title")}
                </SectionTitle>

                <div className="space-y-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.name}
                            name={product.name}
                            desc={product.desc}
                            includes={product.includes}
                            img={product.img}
                            onRequestBox={onRequestBox}
                            footerNote={product.footerNote}
                            buttonText={product.buttonText}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}