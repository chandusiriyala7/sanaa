'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';
import Section from '@/components/Section';
import '../../styles/pages/checkout.css';

export default function Checkout() {
    const { cart, getCartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        street: '',
        city: '',
        state: '',
        pincode: '',
        notes: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const orderData = {
                customer: formData,
                items: cart,
                total: getCartTotal(),
                orderDate: new Date().toISOString()
            };

            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const result = await response.json();

            if (response.ok) {
                clearCart();
                router.push('/checkout/success');
            } else {
                alert('Error placing order: ' + result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to place order. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (cart.length === 0) {
        return (
            <Section>
                <div className="checkout-empty">
                    <h2>Your cart is empty</h2>
                    <p>Add some products to your cart before checking out.</p>
                    <a href="/products" className="btn-primary">Browse Products</a>
                </div>
            </Section>
        );
    }

    return (
        <>
            <section className="page-header">
                <div className="container">
                    <h1>Checkout</h1>
                    <p>Complete your order</p>
                </div>
            </section>

            <Section>
                <div className="checkout-container">
                    <div className="checkout-form-section">
                        <h2>Shipping Information</h2>
                        <form onSubmit={handleSubmit} className="checkout-form">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        pattern="[0-9]{10}"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="street">Street Address *</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    value={formData.street}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="state">State *</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="pincode">Pincode *</label>
                                    <input
                                        type="text"
                                        id="pincode"
                                        name="pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        pattern="[0-9]{6}"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Additional Notes (Optional)</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Any special instructions or preferences..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="checkout-submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Processing...' : 'Place Order'}
                            </button>
                        </form>
                    </div>

                    <div className="order-summary-section">
                        <h2>Order Summary</h2>
                        <div className="order-items">
                            {cart.map((item) => (
                                <div key={item.id} className="order-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="order-item-details">
                                        <h4>{item.name}</h4>
                                        <p>Quantity: {item.quantity}</p>
                                        <p className="order-item-price">
                                            {item.price} × {item.quantity} = ₹{(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-total">
                            <span>Total Amount:</span>
                            <span className="total-amount">₹{getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="order-note">
                            <p>📧 You will receive an email confirmation shortly</p>
                            <p>📞 Our team will contact you to confirm your order</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
