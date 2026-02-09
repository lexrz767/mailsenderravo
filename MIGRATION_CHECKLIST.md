# Migration Checklist - Resend to Brevo

## ✅ Pre-Migration
- [ ] Backup your current code
- [ ] Note down your current email volume

## ✅ Brevo Setup (15 minutes)
- [ ] Create Brevo account at https://www.brevo.com/
- [ ] Verify your email address
- [ ] Go to SMTP & API settings
- [ ] Generate new API key
- [ ] Save API key securely
- [ ] Add and verify sender email address
- [ ] Wait for sender email verification (check inbox)

## ✅ Vercel Configuration (5 minutes)
- [ ] Go to Vercel project settings
- [ ] Navigate to Environment Variables
- [ ] Remove old RESEND_API_KEY variable
- [ ] Add BREVO_API_KEY with your new key
- [ ] Add SENDER_EMAIL with verified email
- [ ] Add SENDER_NAME (optional)
- [ ] Save changes

## ✅ Code Update (2 minutes)
- [ ] Replace api/send-email.js with new version
- [ ] Review the code changes (optional)
- [ ] Deploy to Vercel

## ✅ Testing (5 minutes)
- [ ] Send test email using the API
- [ ] Check if email arrives in inbox
- [ ] Verify sender name appears correctly
- [ ] Check spam folder if not in inbox
- [ ] Test with different recipient email

## ✅ Post-Migration
- [ ] Monitor email delivery for first few sends
- [ ] Update any documentation
- [ ] Remove Resend account (optional)
- [ ] Celebrate 3x email capacity! 🎉

## Rollback Plan (if needed)
If something goes wrong:
1. Restore old api/send-email.js
2. Re-add RESEND_API_KEY to Vercel
3. Redeploy
4. Debug issue with new setup offline

## Notes
- Brevo free tier: 300 emails/day (vs Resend's 100)
- No credit card required
- No expiration
- Better deliverability rates
