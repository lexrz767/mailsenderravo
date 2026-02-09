# BREVO EMAIL SERVICE SETUP GUIDE

This project now uses Brevo (formerly Sendinblue) instead of Resend.

## Why Brevo?
- ✅ 300 emails/day FREE FOREVER (vs Resend's 100/day)
- ✅ No credit card required
- ✅ No time limits
- ✅ Easy API setup
- ✅ Good deliverability

## STEP 1: Create Brevo Account

1. Go to https://www.brevo.com/
2. Click "Sign up free"
3. Complete registration with your email
4. Verify your email address
5. Complete the quick onboarding survey (select "Transactional emails")

## STEP 2: Get Your API Key

1. Log into your Brevo account
2. Click your name in the top right corner
3. Click "SMTP & API"
4. Under "API Keys" section, click "Generate a new API key"
5. Give it a name like "Vercel Email Sender"
6. Copy the API key (it starts with "xkeysib-...")
7. IMPORTANT: Save this key somewhere safe - you can't see it again!

## STEP 3: Verify Sender Email (IMPORTANT!)

Before you can send emails, you need to verify at least one sender email:

### Option A: Use a Single Sender Email (Easiest)
1. In Brevo dashboard, go to "Senders, Domains & Dedicated IPs"
2. Click "Add a new sender"
3. Enter your email address (the one you want emails to come from)
4. Brevo will send you a verification email
5. Click the verification link in that email

### Option B: Verify a Domain (For custom domains)
1. Go to "Senders, Domains & Dedicated IPs" > "Domains"
2. Click "Add a domain"
3. Follow the DNS configuration steps
4. Wait for verification (usually takes a few minutes)

## STEP 4: Configure Vercel Environment Variables

1. Go to your Vercel project dashboard
2. Click on "Settings" tab
3. Click "Environment Variables" in the left sidebar
4. Add these variables:

   Variable Name: BREVO_API_KEY
   Value: [Paste your Brevo API key here]
   
   Variable Name: SENDER_EMAIL
   Value: [Your verified sender email, e.g., noreply@yourdomain.com]
   
   Variable Name: SENDER_NAME
   Value: [Display name, e.g., "Payment Notifications"]

5. Make sure to add them for all environments (Production, Preview, Development)
6. Click "Save"

## STEP 5: Deploy to Vercel

### If you're deploying for the first time:
```bash
vercel --prod
```

### If you're updating an existing deployment:
```bash
vercel --prod
```

The deployment will automatically pick up the new environment variables.

## STEP 6: Test Your Email

After deployment, test your email endpoint:

```bash
curl -X POST https://your-project.vercel.app/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "to_email": "test@example.com",
    "template_name": "Test Payment",
    "template_html": "<h1>Test Email</h1><p>This is a test.</p>"
  }'
```

## Important Notes

1. **Free Tier Limits**: 300 emails/day (9,000/month) - completely free forever
2. **Sender Verification**: MUST verify sender email before sending (this is required by law)
3. **Daily Limit Reset**: Resets at midnight UTC
4. **Deliverability**: Brevo has excellent deliverability rates
5. **No Credit Card**: Free tier never expires and doesn't require payment info

## Troubleshooting

### Error: "Sender email not verified"
- Make sure you've completed Step 3 above
- Check that SENDER_EMAIL matches exactly with the verified email

### Error: "API key invalid"
- Double-check your BREVO_API_KEY in Vercel environment variables
- Make sure there are no extra spaces
- Try regenerating the API key in Brevo

### Error: "Daily sending limit exceeded"
- Free tier allows 300 emails/day
- Wait until midnight UTC for the limit to reset
- Consider upgrading if you need more

### Emails going to spam
- Make sure sender email is verified
- Add SPF and DKIM records if using custom domain
- Brevo provides these in the domain verification process

## API Response Format

Success:
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "unique-message-id"
}
```

Error:
```json
{
  "error": "Error message here"
}
```

## Additional Resources

- Brevo API Docs: https://developers.brevo.com/
- Brevo Support: https://help.brevo.com/
- Rate Limits: https://developers.brevo.com/docs/api-limits

## Need Help?

If you run into issues:
1. Check the Vercel function logs
2. Verify all environment variables are set correctly
3. Make sure sender email is verified in Brevo
4. Check Brevo's status page for any outages
