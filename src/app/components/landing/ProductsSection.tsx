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
            <div className="fb-container-products">
                <SectionTitle>
                    {t("title")}
                </SectionTitle>

                <div className="fb-product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.name}
                            analyticsProductId={product.analyticsId}
                            name={product.name}
                            productType={product.productType}
                            desc={product.desc}
                            price={product.price}
                            originalPrice={product.originalPrice}
                            includes={product.includes}
                            img={product.img}
                            onRequestBox={onRequestBox}
                            footerNote={product.footerNote}
                            buttonText={product.buttonText}
                            contents={product.contents}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
