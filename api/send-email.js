// Vercel Serverless Function to send emails using Brevo (formerly Sendinblue)
// File: api/send-email.js

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { to_email, template_name, template_html, amount, currency, wallet_address } = req.body;

    // Validate input
    if (!to_email || !template_html) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Use Brevo API (free tier: 300 emails/day forever)
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@yourdomain.com';
    const SENDER_NAME = process.env.SENDER_NAME || 'Payment Templates';

    if (!BREVO_API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: SENDER_NAME,
          email: SENDER_EMAIL
        },
        to: [
          {
            email: to_email
          }
        ],
        subject: `Payment Notification - ${template_name}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
            ${template_html}
          </body>
          </html>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Brevo API error:', data);
      return res.status(response.status).json({ 
        error: data.message || 'Failed to send email',
        details: data
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      messageId: data.messageId 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
