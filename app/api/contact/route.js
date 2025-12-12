import { NextResponse } from 'next/server';
import { sendEmail, getContactFormHTML } from '@/lib/email';

export async function POST(request) {
    try {
        const formData = await request.json();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Send notification email to admin
        const adminEmail = await sendEmail({
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${formData.name}`,
            html: getContactFormHTML(formData),
        });

        // Send confirmation email to user
        const userConfirmation = await sendEmail({
            to: formData.email,
            subject: 'Thank you for contacting Sanaa Herbal Care',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .container {
                            background: white;
                            border-radius: 10px;
                            padding: 30px;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        }
                        .header {
                            text-align: center;
                            color: #ec4899;
                            border-bottom: 3px solid #ec4899;
                            padding-bottom: 20px;
                            margin-bottom: 20px;
                        }
                        .content {
                            margin: 20px 0;
                        }
                        .footer {
                            margin-top: 30px;
                            padding-top: 20px;
                            border-top: 2px solid #fce7f3;
                            text-align: center;
                            color: #666;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Thank You for Reaching Out!</h1>
                        </div>
                        <div class="content">
                            <p>Dear ${formData.name},</p>
                            <p>Thank you for contacting Sanaa Herbal Care. We have received your message and our team will get back to you shortly.</p>
                            <p>We appreciate your interest in our 100% cotton premium herbal sanitary napkins.</p>
                            <p><strong>Your message:</strong></p>
                            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #ec4899;">
                                ${formData.message}
                            </p>
                        </div>
                        <div class="footer">
                            <p><strong>Sanaa Herbal Care</strong></p>
                            <p>📧 Email: contact@sanaaherbal.com</p>
                            <p>📞 Phone: +91 9486612364</p>
                            <p>📍 No. 11, Vetrilaikara Street, Ramanathapuram, Tamil Nadu - 623501</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        });

        if (!adminEmail.success || !userConfirmation.success) {
            console.error('Email sending failed:', { adminEmail, userConfirmation });
            return NextResponse.json(
                {
                    error: 'Failed to send emails',
                    details: {
                        adminEmail: adminEmail.success,
                        userConfirmation: userConfirmation.success
                    }
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Contact form submitted successfully',
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}
