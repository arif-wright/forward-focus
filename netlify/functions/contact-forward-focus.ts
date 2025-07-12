import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, company, service, message } = JSON.parse(event.body || '{}');

        // Internal notification to team
        const internalHTML = `
      <div style="font-family: 'Segoe UI', sans-serif; color: #333; line-height: 1.5; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
        <h2 style="color: #0072CE; font-size: 20px; margin-bottom: 12px;">New Contact Form Submission</h2>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr><td style="font-weight: bold; padding: 6px 0;">Name:</td><td>${name}</td></tr>
          <tr><td style="font-weight: bold; padding: 6px 0;">Email:</td><td><a href="mailto:${email}" style="color: #0072CE;">${email}</a></td></tr>
          <tr><td style="font-weight: bold; padding: 6px 0;">Company:</td><td>${company || '—'}</td></tr>
          <tr><td style="font-weight: bold; padding: 6px 0;">Service Interest:</td><td>${formatService(service)}</td></tr>
        </table>

        <div style="margin-bottom: 8px; font-weight: bold;">Message:</div>
        <div style="background: #f9fafb; border-left: 4px solid #F2C300; padding: 12px; border-radius: 4px; white-space: pre-line;">
          ${sanitize(message)}
        </div>

        <footer style="margin-top: 32px; font-size: 12px; color: #999; text-align: center;">
          This message was submitted from the Forward Focus website contact form.
        </footer>
      </div>
    `;

        await resend.emails.send({
            from: 'Forward Focus <hello@fwdfocus.com>',
            to: [
                'awright@ecofocusworldwide.com',
                'jcroft@fwdfocus.com'
            ],
            subject: `New Contact: ${name}`,
            replyTo: email,
            html: internalHTML
        });

        // Confirmation email to the user
        const thankYouHTML = `
      <div style="font-family: 'Segoe UI', sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 32px;">
        <h1 style="color: #0072CE; font-size: 22px; margin-bottom: 12px;">Thank You for Reaching Out</h1>
        <p style="margin-bottom: 16px;">Hi ${name},</p>
        <p style="margin-bottom: 16px;">
          Thank you for contacting <strong>Forward Focus</strong>. We’ve received your message and will follow up within 24 hours.
        </p>
        <p style="margin-bottom: 16px;">
          If your inquiry is urgent or you'd like to speak with someone sooner, feel free to reply to this email directly.
        </p>

        <hr style="border: none; border-top: 1px solid #ddd; margin: 32px 0;" />

        <p style="font-size: 14px; color: #555; margin-bottom: 8px;"><strong>What You Sent:</strong></p>
        <table style="font-size: 14px; color: #555; width: 100%; margin-bottom: 16px;">
          <tr><td style="padding: 4px 0;"><strong>Company:</strong></td><td>${company || '—'}</td></tr>
          <tr><td style="padding: 4px 0;"><strong>Service Interest:</strong></td><td>${formatService(service)}</td></tr>
        </table>

        <div style="background: #f9fafb; border-left: 4px solid #F2C300; padding: 12px; border-radius: 4px; white-space: pre-line; font-size: 14px;">
          ${sanitize(message)}
        </div>

        <footer style="margin-top: 48px; font-size: 13px; color: #888; text-align: center;">
          — The Forward Focus Team<br />
          Strategic & Sustainability Consulting<br />
          <a href="https://fwdfocus.com" style="color: #0072CE; text-decoration: none;">fwdfocus.com</a>
        </footer>
      </div>
    `;

        await resend.emails.send({
            from: 'Forward Focus <hello@fwdfocus.com>',
            replyTo: 'jcroft@fwdfocus.com ',
            to: email,
            subject: `Thanks for contacting Forward Focus`,
            html: thankYouHTML
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message and confirmation sent successfully' })
        };
    } catch (error) {
        console.error('Email send error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

// Utility to sanitize message (basic)
function sanitize(input: string): string {
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>');
}

function formatService(value: string): string {
    switch (value) {
        case 'strategic-consulting': return 'Strategic Consulting';
        case 'sustainability-consulting': return 'Sustainability Consulting';
        case 'both-services': return 'Strategic & Sustainability Consulting';
        case 'general-inquiry': return 'General Inquiry';
        default: return '—';
    }
}


