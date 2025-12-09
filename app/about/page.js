import Section from '@/components/Section';
import Card from '@/components/Card';
import '../../styles/pages/about.css';

export const metadata = {
    title: 'About Us',
    description: 'Learn about Sharmila Enterprises and our journey in creating chemical-free herbal sanitary napkins for women\'s health.',
};

export default function About() {
    const companyInfo = [
        { label: 'Company Name', value: 'Sharmila Enterprises' },
        { label: 'Location', value: 'Ramnad, Tamil Nadu' },
        { label: 'Founded', value: '2020' },
        { label: 'Founder', value: 'Sharmila' },
        { label: 'Products', value: 'Herbal Sanitary Pads' },
        { label: 'Objective', value: 'Chemical-free, safe menstrual care solutions' },
    ];

    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fadeIn">About Us</h1>
                    <p className="animate-fadeIn">Promoting women's health through natural care</p>
                </div>
            </section>

            {/* Company Story */}
            <Section>
                <div className="about-content">
                    <div className="about-text">
                        <h2>Our Story</h2>
                        <p>
                            Sharmila Enterprises, based in Ramnad, is a family-owned business that's passionate about
                            promoting women's health and wellness. Founded in 2020 by Sharmila, our journey began with
                            a personal experience - facing uterus issues due to chemical-laden period products.
                        </p>
                        <p>
                            We discovered the risks associated with conventional sanitary pads and decided to take a stand.
                            That's when we turned to nature's goodness and started crafting herbal sanitary pads. Our products
                            are designed to provide comfort, safety, and peace of mind.
                        </p>
                        <p>
                            At Sharmila Enterprises, we're driven by a mission to make a difference. We believe every woman
                            deserves access to healthy, chemical-free menstrual care. Our herbal sanitary pads are a testament
                            to our commitment to quality and care.
                        </p>
                        <p className="highlight-text">
                            Join us in our journey towards a healthier, happier tomorrow! 🌸
                        </p>
                    </div>

                    <div className="founder-card">
                        <div className="founder-icon">👩‍💼</div>
                        <h3>Sharmila</h3>
                        <p className="founder-title">Founder & CEO</p>
                        <p>
                            Passionate about women's health and wellness, Sharmila founded the company in 2020
                            with a vision to provide safe, natural menstrual care products.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section background="light">
                <div className="vision-mission">
                    <Card className="vm-full-card">
                        <div className="vm-icon">🎯</div>
                        <h2>Our Vision</h2>
                        <p>
                            To promote health and wellness through natural and safe menstrual care products.
                        </p>
                    </Card>

                    <Card className="vm-full-card">
                        <div className="vm-icon">🚀</div>
                        <h2>Our Mission</h2>
                        <p>
                            To create awareness about the benefits of herbal sanitary pads and provide a reliable,
                            chemical-free alternative for women's health.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Company Overview */}
            <Section>
                <h2 className="text-center">Company Overview</h2>
                <div className="company-info-grid">
                    {companyInfo.map((item, index) => (
                        <div key={index} className="info-item">
                            <span className="info-label">{item.label}</span>
                            <span className="info-value">{item.value}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Values */}
            <Section background="light">
                <h2 className="text-center">Our Values</h2>
                <div className="values-grid">
                    <Card>
                        <h3>🌿 Natural</h3>
                        <p>We use only natural herbal ingredients in our products</p>
                    </Card>
                    <Card>
                        <h3>💚 Safe</h3>
                        <p>Chemical-free formulations for your safety and comfort</p>
                    </Card>
                    <Card>
                        <h3>🤝 Trustworthy</h3>
                        <p>Certified and tested products you can rely on</p>
                    </Card>
                    <Card>
                        <h3>🌸 Caring</h3>
                        <p>Dedicated to women's health and wellness</p>
                    </Card>
                </div>
            </Section>
        </>
    );
}
