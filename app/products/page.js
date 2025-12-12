'use client';

import { useCart } from '@/app/context/CartContext';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import '../../styles/pages/products.css';

export default function Products() {
    const { addToCart } = useCart();

    const products = [
        {
            id: 'large-pad',
            name: 'Large Pads',
            price: '₹15',
            image: '/images/product-img1.png',
            description: 'Perfect for regular flow days',
            features: ['280mm Length', 'Regular Absorbency', 'Comfortable Fit'],
            detailedDescription: 'Our Large Pads are designed for regular flow days, providing optimal comfort and protection. Made with 100% pure cotton and infused with natural herbs, these pads ensure you stay fresh and comfortable throughout the day.'
        },
        {
            id: 'xl-pad',
            name: 'Extra Large Pads',
            price: '₹20',
            image: '/images/product-img1.png',
            description: 'Ideal for heavy flow days',
            features: ['320mm Length', 'High Absorbency', 'Extra Coverage'],
            detailedDescription: 'Extra Large Pads offer superior protection for heavy flow days. With enhanced absorbency and extra length, you can feel confident and secure all day long.'
        },
        {
            id: 'delivery-pad',
            name: 'Delivery Pads',
            price: '₹15',
            image: '/images/product-img1.png',
            description: 'Specially designed for post-delivery care',
            features: ['360mm Length', 'Maximum Absorbency', 'Gentle Healing'],
            detailedDescription: 'Our Delivery Pads are specially formulated for post-delivery care. Extra soft and gentle, with maximum absorbency and healing herbs to support your recovery.'
        },
    ];

    const herbs = [
        {
            name: 'Mistletoe Powder',
            benefit: 'Acts as an insecticide & helps dehydration',
            icon: '🌿'
        },
        {
            name: 'Basil Powder',
            benefit: 'Prevents stomach upset & infections',
            icon: '🌱'
        },
        {
            name: 'Aloe Vera Powder',
            benefit: 'Eliminates heat, improves skin',
            icon: '🪴'
        },
        {
            name: 'Musk Yellow Powder',
            benefit: 'Cures skin diseases',
            icon: '🌼'
        },
        {
            name: 'Citronella',
            benefit: 'Helps constipation & irritability',
            icon: '🍃'
        },
        {
            name: 'Measles Herb',
            benefit: 'Excellent disinfectant',
            icon: '🌿'
        },
        {
            name: 'Triphala',
            benefit: 'Controls cancer cells',
            icon: '🌾'
        },
        {
            name: 'Rose Petals',
            benefit: 'Vitamin C rich, protects skin',
            icon: '🌹'
        },
    ];

    const specifications = [
        { label: 'Material', value: '100% pure cotton' },
        { label: 'Comfort', value: 'Cool, fresh, hypoallergenic' },
        { label: 'pH Value', value: '6.5' },
        { label: 'Side Effects', value: 'None' },
        { label: 'Bleaching', value: 'All natural ingredients' },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fadeIn">Our Products</h1>
                    <p className="animate-fadeIn">Premium herbal sanitary napkins for every need</p>
                </div>
            </section>

            {/* Products Section */}
            <Section>
                <h2 className="text-center">Product Range</h2>
                <div className="products-showcase">
                    {products.map((product, index) => (
                        <Card key={index} className="product-showcase-card">
                            <div className="product-showcase-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p className="product-showcase-price">{product.price} <span>per piece</span></p>
                            <p className="product-description">{product.description}</p>
                            <ul className="product-features">
                                {product.features.map((feature, idx) => (
                                    <li key={idx}>✓ {feature}</li>
                                ))}
                            </ul>
                            <button
                                className="add-to-cart-btn"
                                onClick={() => {
                                    addToCart(product);
                                    alert(`${product.name} added to cart!`);
                                }}
                            >
                                Add to Cart
                            </button>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Herbs Section */}
            <Section background="light">
                <h2 className="text-center text-primary">Herbs Used & Their Benefits</h2>
                <p className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                    Our pads are infused with natural herbs that provide therapeutic benefits
                </p>
                <div className="herbs-grid">
                    {herbs.map((herb, index) => (
                        <div key={index} className="herb-card">
                            <div className="herb-icon">{herb.icon}</div>
                            <h4>{herb.name}</h4>
                            <p>{herb.benefit}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Specifications */}
            <Section>
                <h2 className="text-center">Product Specifications</h2>
                <div className="specifications-container">
                    <div className="specifications-grid">
                        {specifications.map((spec, index) => (
                            <div key={index} className="spec-item">
                                <span className="spec-label">{spec.label}</span>
                                <span className="spec-value">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="light">
                <div className="cta-box">
                    <h2>Ready to Make the Switch?</h2>
                    <p>
                        Experience the comfort and safety of herbal sanitary napkins.
                        Contact us today to place your order!
                    </p>
                    <Button href="/contact" variant="primary">
                        Contact Us Now
                    </Button>
                </div>
            </Section>
        </>
    );
}
