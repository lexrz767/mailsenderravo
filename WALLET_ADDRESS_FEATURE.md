# Wallet Address Feature - Quick Guide

## What's New?

You can now add a **custom wallet address** that will appear in crypto-related email templates (Binance, Coinbase, etc.)

## How to Use

### In the Web Interface:

1. Open `email-template-showcase.html`
2. Find the "Wallet Address" input field
3. Enter your wallet address (e.g., `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`)
4. The address will automatically appear in the email template preview
5. When you send the email, your custom wallet address will be included

### Via API:

When calling the `/api/send-email` endpoint, add the `wallet_address` parameter:

```javascript
POST /api/send-email

{
  "to_email": "recipient@example.com",
  "template_name": "Binance",
  "template_html": "...",
  "amount": "500.00",
  "currency": "USD",
  "wallet_address": "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
}
```

## Where It Appears

The wallet address shows up in the **"Withdrawal Address"** section of crypto templates like:
- Binance
- Coinbase
- OKX
- Bybit
- MetaMask
- Trust Wallet

## Example

**Before:** Random wallet address generated
```
Withdrawal Address: 0x7a8f3d2c1b9e...
```

**After:** Your custom wallet address
```
Withdrawal Address: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
```

## Notes

- If you don't provide a wallet address, a random one will be generated (for demo purposes)
- The wallet address field is optional
- Works with all crypto templates
- Address is displayed in monospace font for better readability
