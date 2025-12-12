'use client';

import { useCart } from '@/app/context/CartContext';
import '../styles/components/cart.css';

export default function Cart({ isOpen, onClose }) {
    const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

    if (!isOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={onClose}></div>
            <div className="cart-sidebar">
                <div className="cart-header">
                    <h2>Shopping Cart ({getCartCount()})</h2>
                    <button className="cart-close" onClick={onClose}>×</button>
                </div>

                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is empty</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p className="cart-item-price">{item.price}</p>
                                    <div className="cart-item-quantity">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="quantity-btn"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="quantity-btn"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="cart-item-remove"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    🗑️
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-total">
                            <span>Total:</span>
                            <span className="cart-total-amount">₹{getCartTotal().toFixed(2)}</span>
                        </div>
                        <a href="/checkout" className="cart-checkout-btn">
                            Proceed to Checkout
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}
