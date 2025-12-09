import Link from 'next/link';
import '../styles/components/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Sanaa Herbal Care</h3>
                        <p>100% Cotton Premium Herbal Sanitary Napkins</p>
                        <p className="footer-tagline">Chemical-free. Skin-safe. Comfort redefined.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/research">Research</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-info">
                            <li>📍 No. 11, Vetrilaikara Street</li>
                            <li>Ramanathapuram, Tamil Nadu – 623501</li>
                            <li>📞 +91 9486612364</li>
                            <li>📞 +91 7373455355</li>
                            <li>✉️ sanaaherbalnapkins@gmail.com</li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Business Hours</h4>
                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sharmila Enterprises. All rights reserved.</p>
                    <p>Promoting women's health through natural care 🌸</p>
                </div>
            </div>
        </footer>
    );
}
