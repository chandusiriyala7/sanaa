import Section from '@/components/Section';
import Card from '@/components/Card';
import ContactForm from '@/components/ContactForm';
import '../../styles/pages/contact.css';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Sharmila Enterprises. Located in Ramanathapuram, Tamil Nadu. Call us at +91 9486612364 or email sanaaherbalnapkins@gmail.com',
};

export default function Contact() {
    return (
        <>
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-fadeIn">Contact Us</h1>
                    <p className="animate-fadeIn">We'd love to hear from you!</p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <Section>
                <div className="contact-container">
                    <div className="contact-info">
                        <h2>Get In Touch</h2>
                        <p>
                            Have questions about our products? Want to place an order?
                            We're here to help! Reach out to us through any of the following channels.
                        </p>

                        <Card className="info-card">
                            <h3>📍 Address</h3>
                            <p>
                                Sharmila Enterprises<br />
                                No. 11, Vetrilaikara Street<br />
                                Ramanathapuram, Tamil Nadu – 623501
                            </p>
                        </Card>

                        <Card className="info-card">
                            <h3>📞 Phone</h3>
                            <p>
                                <a href="tel:+919486612364">+91 9486612364</a><br />
                                <a href="tel:+917373455355">+91 7373455355</a>
                            </p>
                        </Card>

                        <Card className="info-card">
                            <h3>✉️ Email</h3>
                            <p>
                                <a href="mailto:sanaaherbalnapkins@gmail.com">
                                    sanaaherbalnapkins@gmail.com
                                </a>
                            </p>
                        </Card>

                        <Card className="info-card">
                            <h3>🕒 Business Hours</h3>
                            <p>
                                Monday - Saturday: 9:00 AM - 6:00 PM<br />
                                Sunday: Closed
                            </p>
                        </Card>
                    </div>

                    <div className="contact-form-container">
                        <h2>Send Us a Message</h2>
                        <p style={{ marginBottom: 'var(--spacing-md)' }}>
                            Fill out the form below and we'll get back to you as soon as possible.
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </Section>

            {/* Map Section */}
            <Section background="light">
                <h2 className="text-center">Find Us</h2>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.8!2d78.8308!3d9.3639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMjEnNTAuMCJOIDc4wrA0OSc1MC45IkU!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: 'var(--radius-md)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sharmila Enterprises Location"
                    ></iframe>
                </div>
                <p className="text-center" style={{ marginTop: 'var(--spacing-md)' }}>
                    📍 Ramanathapuram, Tamil Nadu – 623501
                </p>
            </Section>

            {/* FAQ Section */}
            <Section>
                <h2 className="text-center">Frequently Asked Questions</h2>
                <div className="faq-container">
                    <Card className="faq-card">
                        <h3>How can I place an order?</h3>
                        <p>
                            You can place an order by calling us directly at +91 9486612364 or
                            by sending us an email with your requirements.
                        </p>
                    </Card>

                    <Card className="faq-card">
                        <h3>Do you offer bulk orders?</h3>
                        <p>
                            Yes! We welcome bulk orders. Please contact us for special pricing
                            and delivery arrangements.
                        </p>
                    </Card>

                    <Card className="faq-card">
                        <h3>What are your delivery options?</h3>
                        <p>
                            We offer delivery across Tamil Nadu and other states. Delivery charges
                            may vary based on location. Contact us for details.
                        </p>
                    </Card>

                    <Card className="faq-card">
                        <h3>Can I visit your office?</h3>
                        <p>
                            Absolutely! We welcome visitors during our business hours (Mon-Sat, 9 AM - 6 PM).
                            Please call ahead to schedule a visit.
                        </p>
                    </Card>
                </div>
            </Section>
        </>
    );
}
