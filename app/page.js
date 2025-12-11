import Section from '@/components/Section';
import Button from '@/components/Button';
import Card from '@/components/Card';
import '../styles/pages/home.css';

export const metadata = {
    title: 'Home',
    description: '100% Cotton Premium Herbal Sanitary Napkins. Chemical-free, skin-safe, comfort redefined.',
};

export default function Home() {
    const highlights = [
        { icon: '🌿', title: 'Herbal', description: 'Natural herbal ingredients' },
        { icon: '✨', title: 'No Itching', description: 'Gentle on sensitive skin' },
        { icon: '💨', title: 'Air Flow', description: 'Breathable design' },
        { icon: '🌸', title: 'Softness', description: '100% cotton soft' },
        { icon: '☁️', title: 'Drop-in Softness', description: 'Cloud-like comfort' },
    ];

    const prevents = [
        { icon: '🛡️', title: 'White Discharge' },
        { icon: '🚫', title: 'Itching' },
        { icon: '💚', title: 'Uterus Infection' },
        { icon: '😌', title: 'Stress' },
        { icon: '🌺', title: 'Body Odour' },
        { icon: '🦠', title: 'Bacteria' },
        { icon: '💪', title: 'Provides Immunity' },
        { icon: '❄️', title: 'Heals & Provides Coolness' },
        { icon: '🩺', title: 'Polycystic Ovary Disease (PCOD)' },
    ];

    const products = [
        { name: 'Large Pads', price: '₹15', image: '/images/large-pad.png', description: 'Perfect for regular flow' },
        { name: 'Extra Large Pads', price: '₹20', image: '/images/xl-pad.png', description: 'For heavy flow days' },
        { name: 'Delivery Pads', price: '₹15', image: '/images/delivery-pad.png', description: 'Post-delivery care' },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="animate-slideInLeft">
                                100% Cotton Premium Herbal Sanitary Napkins
                            </h1>
                            <p className="hero-subtitle animate-slideInLeft">
                                Chemical-free. Skin-safe. Comfort redefined.
                            </p>
                            <div className="hero-buttons animate-slideInLeft">
                                <Button href="/products" variant="primary">
                                    Explore Products
                                </Button>
                                <Button href="/contact" variant="secondary">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                        <div className="hero-image animate-slideInRight">
                            <img src="/images/hero-product.png" alt="Sanaa Herbal Sanitary Napkin" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <Section background="light">
                <h2 className="text-center">Why Choose Sanaa?</h2>
                <div className="highlights-grid">
                    {highlights.map((item, index) => (
                        <Card key={index} className="highlight-card">
                            <div className="highlight-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Prevents Section */}
            <Section>
                <h2 className="text-center text-primary">Health Benefits</h2>
                <p className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                    Our herbal sanitary napkins help prevent and protect against:
                </p>
                <div className="prevents-grid">
                    {prevents.map((item, index) => (
                        <div key={index} className="prevent-item">
                            <span className="prevent-icon">{item.icon}</span>
                            <span className="prevent-title">{item.title}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Product Preview */}
            <Section background="light">
                <h2 className="text-center">Our Products</h2>
                <div className="products-grid">
                    {products.map((product, index) => (
                        <Card key={index} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <h3>{product.name}</h3>
                            <p className="product-price">{product.price} <span>per piece</span></p>
                            <p>{product.description}</p>
                        </Card>
                    ))}
                </div>
                <div className="text-center" style={{ marginTop: 'var(--spacing-md)' }}>
                    <Button href="/products" variant="primary">
                        View All Products
                    </Button>
                </div>
            </Section>

            {/* Vision & Mission Preview */}
            <Section>
                <div className="vision-mission-preview">
                    <div className="vm-card">
                        <h3>Our Vision</h3>
                        <p>
                            To promote health and wellness through natural and safe menstrual care products.
                        </p>
                    </div>
                    <div className="vm-card">
                        <h3>Our Mission</h3>
                        <p>
                            To create awareness about the benefits of herbal sanitary pads and provide a reliable,
                            chemical-free alternative for women's health.
                        </p>
                    </div>
                </div>
                <div className="text-center" style={{ marginTop: 'var(--spacing-md)' }}>
                    <Button href="/about" variant="secondary">
                        Read More About Us
                    </Button>
                </div>
            </Section>
        </>
    );
}
