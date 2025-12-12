import { Inter, Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/app/context/CartContext';
import { ToastProvider } from '@/app/context/ToastContext';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata = {
    title: {
        default: 'Sanaa Herbal Sanitary Napkins | 100% Cotton Chemical-Free',
        template: '%s | Sanaa Herbal Care'
    },
    description: 'Premium herbal sanitary napkins by Sharmila Enterprises. 100% cotton, chemical-free, skin-safe menstrual care products. Based in Ramanathapuram, Tamil Nadu.',
    keywords: ['herbal sanitary napkins', 'chemical-free pads', 'cotton sanitary pads', 'women health', 'menstrual care', 'Sharmila Enterprises', 'Ramanathapuram'],
    authors: [{ name: 'Sharmila Enterprises' }],
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        siteName: 'Sanaa Herbal Care',
        title: 'Sanaa Herbal Sanitary Napkins | 100% Cotton Chemical-Free',
        description: 'Premium herbal sanitary napkins. Chemical-free. Skin-safe. Comfort redefined.',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'LocalBusiness',
                            name: 'Sharmila Enterprises',
                            description: 'Herbal Sanitary Napkins Manufacturer',
                            image: 'https://sanaaherbal.com/logo.png',
                            '@id': 'https://sanaaherbal.com',
                            url: 'https://sanaaherbal.com',
                            telephone: '+919486612364',
                            address: {
                                '@type': 'PostalAddress',
                                streetAddress: 'No. 11, Vetrilaikara Street',
                                addressLocality: 'Ramanathapuram',
                                addressRegion: 'Tamil Nadu',
                                postalCode: '623501',
                                addressCountry: 'IN'
                            },
                            geo: {
                                '@type': 'GeoCoordinates',
                                latitude: 9.3639,
                                longitude: 78.8308
                            },
                            openingHoursSpecification: {
                                '@type': 'OpeningHoursSpecification',
                                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                                opens: '09:00',
                                closes: '18:00'
                            },
                            founder: {
                                '@type': 'Person',
                                name: 'Sharmila'
                            },
                            foundingDate: '2020'
                        })
                    }}
                />
            </head>
            <body>
                <CartProvider>
                    <ToastProvider>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                    </ToastProvider>
                </CartProvider>
            </body>
        </html>
    );
}
