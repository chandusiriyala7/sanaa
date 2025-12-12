import nodemailer from 'nodemailer';

// Create transporter with explicit SMTP configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD?.replace(/\s/g, ''), // Remove any spaces from password
    },
});

// Order confirmation email template
export function getOrderConfirmationHTML(orderData) {
    const { customer, items, total, orderDate } = orderData;

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Order Confirmation - Sanaa Herbal Care</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f9f9f9;
                }
                .container {
                    background: white;
                    border-radius: 10px;
                    padding: 30px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    overflow: hidden;
                    word-wrap: break-word;
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                    border-bottom: 3px solid #ec4899;
                }
                .header h1 {
                    color: #ec4899;
                    margin: 0;
                    word-wrap: break-word;
                }
                .success-icon {
                    font-size: 48px;
                    margin: 20px 0;
                }
                .order-details {
                    margin: 30px 0;
                }
                .order-details h2 {
                    color: #ec4899;
                    border-bottom: 2px solid #fce7f3;
                    padding-bottom: 10px;
                }
                .customer-info {
                    background: #fce7f3;
                    padding: 15px;
                    border-radius: 5px;
                    margin: 20px 0;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .customer-info p {
                    margin: 5px 0;
                    word-wrap: break-word;
                }
                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    table-layout: fixed;
                }
                .items-table th {
                    background: #ec4899;
                    color: white;
                    padding: 12px;
                    text-align: left;
                    word-wrap: break-word;
                }
                .items-table td {
                    padding: 12px;
                    border-bottom: 1px solid #fce7f3;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .total-row {
                    background: #fce7f3;
                    font-weight: bold;
                    font-size: 1.2em;
                }
                .next-steps {
                    background: #fef3c7;
                    border-left: 4px solid #f59e0b;
                    padding: 15px;
                    margin: 20px 0;
                    word-wrap: break-word;
                }
                .next-steps h3 {
                    color: #f59e0b;
                    margin-top: 0;
                }
                .next-steps ul {
                    margin: 10px 0;
                    padding-left: 20px;
                }
                .next-steps li {
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .footer {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #fce7f3;
                    color: #666;
                    word-wrap: break-word;
                }
                .contact-info {
                    background: #f3f4f6;
                    padding: 15px;
                    border-radius: 5px;
                    margin: 20px 0;
                    word-wrap: break-word;
                }
                .contact-info p {
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                /* Mobile responsiveness */
                @media only screen and (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .container {
                        padding: 20px;
                    }
                    .items-table {
                        font-size: 14px;
                    }
                    .items-table th,
                    .items-table td {
                        padding: 8px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="success-icon">✅</div>
                    <h1>Order Confirmed!</h1>
                    <p>Thank you for choosing Sanaa Herbal Care</p>
                </div>

                <div class="order-details">
                    <h2>Order Details</h2>
                    <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleDateString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}</p>

                    <div class="customer-info">
                        <h3>Shipping Information</h3>
                        <p><strong>Name:</strong> ${customer.fullName}</p>
                        <p><strong>Email:</strong> ${customer.email}</p>
                        <p><strong>Phone:</strong> ${customer.phone}</p>
                        <p><strong>Address:</strong> ${customer.street}, ${customer.city}, ${customer.state} - ${customer.pincode}</p>
                        ${customer.notes ? `<p><strong>Notes:</strong> ${customer.notes}</p>` : ''}
                    </div>

                    <h3>Items Ordered</h3>
                    <table class="items-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${items.map(item => `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>${item.quantity}</td>
                                    <td>${item.price}</td>
                                    <td>₹${(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</td>
                                </tr>
                            `).join('')}
                            <tr class="total-row">
                                <td colspan="3">Total Amount</td>
                                <td>₹${total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="next-steps">
                    <h3>📞 What Happens Next?</h3>
                    <ul>
                        <li>Our team will contact you shortly to confirm your order</li>
                        <li>We'll arrange delivery to your address</li>
                        <li>Get ready to experience natural, chemical-free menstrual care!</li>
                    </ul>
                </div>

                <div class="contact-info">
                    <h3>Need Help?</h3>
                    <p>📧 Email: contact@sanaaherbal.com</p>
                    <p>📞 Phone: +91 9486612364</p>
                    <p>📍 Address: No. 11, Vetrilaikara Street, Ramanathapuram, Tamil Nadu - 623501</p>
                </div>

                <div class="footer">
                    <p><strong>Sanaa Herbal Care</strong></p>
                    <p>100% Cotton Premium Herbal Sanitary Napkins</p>
                    <p>Chemical-free. Skin-safe. Comfort redefined.</p>
                    <p style="font-size: 0.9em; color: #999; margin-top: 20px;">
                        This is an automated email. Please do not reply to this email.
                    </p>
                </div>
            </div>
        </body>
        </html>
    `;
}

// Admin notification email template
export function getAdminNotificationHTML(orderData) {
    const { customer, items, total, orderDate } = orderData;

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>New Order Received</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .alert {
                    background: #fef3c7;
                    border-left: 4px solid #f59e0b;
                    padding: 15px;
                    margin-bottom: 20px;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                    table-layout: fixed;
                }
                th, td {
                    padding: 10px;
                    border: 1px solid #ddd;
                    text-align: left;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                th {
                    background: #ec4899;
                    color: white;
                }
                .total {
                    background: #fce7f3;
                    font-weight: bold;
                }
                @media only screen and (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    table {
                        font-size: 14px;
                    }
                    th, td {
                        padding: 8px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="alert">
                <h2>🔔 New Order Received!</h2>
                <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>

            <h3>Customer Information</h3>
            <table>
                <tr><th>Name</th><td>${customer.fullName}</td></tr>
                <tr><th>Email</th><td>${customer.email}</td></tr>
                <tr><th>Phone</th><td>${customer.phone}</td></tr>
                <tr><th>Address</th><td>${customer.street}, ${customer.city}, ${customer.state} - ${customer.pincode}</td></tr>
                ${customer.notes ? `<tr><th>Notes</th><td>${customer.notes}</td></tr>` : ''}
            </table>

            <h3>Order Items</h3>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${items.map(item => `
                        <tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>${item.price}</td>
                            <td>₹${(parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2)}</td>
                        </tr>
                    `).join('')}
                    <tr class="total">
                        <td colspan="3">Total Amount</td>
                        <td>₹${total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Action Required:</strong> Please contact the customer to confirm the order and arrange delivery.</p>
        </body>
        </html>
    `;
}

// Contact form email template
export function getContactFormHTML(formData) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>New Contact Form Submission</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: #ec4899;
                    color: white;
                    padding: 20px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    word-wrap: break-word;
                }
                .content {
                    background: #f9f9f9;
                    padding: 20px;
                    border-radius: 5px;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .field {
                    margin: 15px 0;
                    word-wrap: break-word;
                    overflow-wrap: break-word;
                }
                .field strong {
                    color: #ec4899;
                }
                @media only screen and (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .header, .content {
                        padding: 15px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>📧 New Contact Form Submission</h2>
            </div>
            <div class="content">
                <div class="field">
                    <strong>Name:</strong> ${formData.name}
                </div>
                <div class="field">
                    <strong>Email:</strong> ${formData.email}
                </div>
                <div class="field">
                    <strong>Phone:</strong> ${formData.phone}
                </div>
                <div class="field">
                    <strong>Message:</strong><br>
                    ${formData.message}
                </div>
                <div class="field">
                    <strong>Submitted:</strong> ${new Date().toLocaleString('en-IN')}
                </div>
            </div>
        </body>
        </html>
    `;
}

// Send email function
export async function sendEmail({ to, subject, html }) {
    try {
        const info = await transporter.sendMail({
            from: `"Sanaa Herbal Care" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html,
        });

        console.log('Email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
}
