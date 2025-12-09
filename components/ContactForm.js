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

        // Simulate form submission
        setTimeout(() => {
            console.log('Form data:', data);
            setSubmitStatus('success');
            setIsSubmitting(false);
            reset();

            // Clear success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 1000);
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

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}
