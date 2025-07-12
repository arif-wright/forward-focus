import { Handler } from '@netlify/functions';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { name, email, company, service, message } = JSON.parse(event.body || '{}');

        const formattedHTML = `
      <div style="font-family: 'Segoe UI', sans-serif; color: #333; line-height: 1.5; max-width: 600px; margin: auto; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
        <h2 style="color: #0072CE; font-size: 20px; margin-bottom: 12px;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Name:</td>
            <td>${name}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Email:</td>
            <td><a href="mailto:${email}" style="color: #0072CE;">${email}</a></td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Company:</td>
            <td>${company || '—'}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px 0;">Service Interest:</td>
            <td>${formatService(service)}</td>
          </tr>
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
            from: 'Forward Focus <no-reply@forwardfocus.ai>',
            to: 'your-email@yourdomain.com', // Replace with your recipient address
            subject: `New Contact: ${name}`,
            reply_to: email,
            html: formattedHTML
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully' })
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
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\n/g, '<br/>');
}

// Human-readable service interest
function formatService(value: string): string {
    switch (value) {
        case 'strategic-consulting':
            return 'Strategic Consulting';
        case 'sustainability-consulting':
            return 'Sustainability Consulting';
        case 'both-services':
            return 'Strategic & Sustainability Consulting';
        case 'general-inquiry':
            return 'General Inquiry';
        default:
            return '—';
    }
}

