'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/app/context/CartContext';
import Cart from './Cart';
import '../styles/components/navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const pathname = usePathname();
    const { getCartCount } = useCart();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Us' },
        { href: '/products', label: 'Products' },
        { href: '/research', label: 'Research' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (href) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-content">
                        <Link href="/" className="navbar-logo">
                            <img src="/images/logo.png" alt="Sanaa Herbal Care" className="logo-image" />
                        </Link>

                        <button
                            className={`navbar-toggle ${isOpen ? 'active' : ''}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`navbar-link ${isActive(link.href) ? 'active' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <div className="cart-icon-wrapper" onClick={() => setIsCartOpen(true)}>
                                    <span className="cart-icon">🛒</span>
                                    {getCartCount() > 0 && (
                                        <span className="cart-badge">{getCartCount()}</span>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
    );
}
