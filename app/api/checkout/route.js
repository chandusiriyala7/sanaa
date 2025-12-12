import { NextResponse } from 'next/server';
import { sendEmail, getOrderConfirmationHTML, getAdminNotificationHTML } from '@/lib/email';

export async function POST(request) {
    try {
        const orderData = await request.json();

        // Validate required fields
        if (!orderData.customer || !orderData.items || !orderData.total) {
            return NextResponse.json(
                { error: 'Missing required order data' },
                { status: 400 }
            );
        }

        // Send confirmation email to customer
        const customerEmail = await sendEmail({
            to: orderData.customer.email,
            subject: 'Order Confirmation - Sanaa Herbal Care',
            html: getOrderConfirmationHTML(orderData),
        });

        // Send notification email to admin
        const adminEmail = await sendEmail({
            to: process.env.EMAIL_TO || process.env.EMAIL_USER,
            subject: `New Order from ${orderData.customer.fullName}`,
            html: getAdminNotificationHTML(orderData),
        });

        if (!customerEmail.success || !adminEmail.success) {
            console.error('Email sending failed:', { customerEmail, adminEmail });
            return NextResponse.json(
                {
                    error: 'Failed to send confirmation emails',
                    details: {
                        customerEmail: customerEmail.success,
                        adminEmail: adminEmail.success
                    }
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Order placed successfully',
            orderId: Date.now().toString(),
        });

    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message },
            { status: 500 }
        );
    }
}
