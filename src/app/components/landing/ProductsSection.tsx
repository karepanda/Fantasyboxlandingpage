import { products } from "../../data/landing-data";
import { ProductCard } from "./ProductCard";
import { SectionTitle } from "./SectionTitle";

interface ProductsSectionProps {
    onRequestBox: () => void;
}

export function ProductsSection({ onRequestBox }: ProductsSectionProps) {
    return (
        <section id="products" className="fb-section fb-section-peach">
            <div className="fb-container">
                <SectionTitle>
                    Explore the boxes
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}