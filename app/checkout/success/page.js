import Section from '@/components/Section';
import Button from '@/components/Button';
import '../../../styles/pages/checkout.css';

export default function CheckoutSuccess() {
    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Order Confirmed!</h1>
                    <p>Thank you for your order</p>
                </div>
            </section>

            <Section>
                <div className="success-container">
                    <div className="success-icon">✅</div>
                    <h2>Your Order Has Been Placed Successfully!</h2>
                    <p className="success-message">
                        Thank you for choosing Sanaa Herbal Sanitary Napkins.
                        We've received your order and sent a confirmation email to your inbox.
                    </p>

                    <div className="success-info">
                        <h3>What's Next?</h3>
                        <ul>
                            <li>📧 Check your email for order confirmation</li>
                            <li>📞 Our team will contact you shortly to confirm your order</li>
                            <li>📦 We'll arrange delivery to your address</li>
                            <li>💚 Get ready to experience natural, chemical-free care!</li>
                        </ul>
                    </div>

                    <div className="success-actions">
                        <Button href="/products" variant="primary">
                            Continue Shopping
                        </Button>
                        <Button href="/" variant="secondary">
                            Back to Home
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
