'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import '../styles/components/contact-form.css';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                reset();
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                console.error('Form submission error:', result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                    id="email"
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                    id="phone"
                    type="tel"
                    {...register('phone', {
                        required: 'Phone is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Please enter a valid 10-digit phone number'
                        }
                    })}
                    className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message.message}</span>}
            </div>


            {submitStatus === 'success' && (
                <div className="success-message">
                    Thank you for your message! We'll get back to you soon. 🌸
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="error-message">
                    Sorry, there was an error sending your message. Please try again.
                </div>
            )}


            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
