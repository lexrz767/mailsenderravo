# Email Template Sender - Brevo Edition

Email template showcase with Vercel serverless backend, now using **Brevo** for completely free email sending.

## 🎉 What Changed?

**OLD:** Resend (100 emails/day free)  
**NEW:** Brevo (300 emails/day free FOREVER)

## 🚀 Quick Setup

1. Create free Brevo account at https://www.brevo.com/
2. Get your API key from Brevo dashboard
3. Verify your sender email
4. Add to Vercel environment variables:
   - `BREVO_API_KEY` - Your Brevo API key
   - `SENDER_EMAIL` - Your verified sender email
   - `SENDER_NAME` - Display name (optional)
5. Deploy to Vercel

📖 **Full setup guide:** See `BREVO_SETUP_GUIDE.md`

## ✨ Features

- ✅ 300 free emails per day (forever)
- ✅ No credit card required
- ✅ Easy Vercel integration
- ✅ CORS enabled
- ✅ HTML email templates
- ✅ Serverless function

## 📝 API Usage

```javascript
POST /api/send-email

{
  "to_email": "recipient@example.com",
  "template_name": "Payment Confirmation",
  "template_html": "<h1>Thank you!</h1>"
}
```

## 📦 Files

- `api/send-email.js` - Vercel serverless function (updated for Brevo)
- `email-template-showcase.html` - Demo HTML templates
- `BREVO_SETUP_GUIDE.md` - Complete setup instructions
- `vercel.json` - Vercel configuration

## 🔧 Development

```bash
# Install Vercel CLI
npm i -g vercel

# Run locally
vercel dev

# Deploy
vercel --prod
```

## 📊 Brevo Free Tier

- **Daily Limit:** 300 emails
- **Monthly Limit:** 9,000 emails
- **Cost:** FREE forever
- **No expiration:** Unlike other services

## 🆚 Comparison

| Service | Free Emails/Day | Time Limit |
|---------|----------------|------------|
| Brevo | 300 | None ✅ |
| Resend | 100 | None |
| SendGrid | 100 | None |
| Mailgun | ~166 | 3 months |

## 🤝 Support

Issues? Check `BREVO_SETUP_GUIDE.md` for troubleshooting.
