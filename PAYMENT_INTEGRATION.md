# Up2pay e-Transactions Integration Guide

## Overview

This document explains how to integrate Up2pay e-Transactions (PHP) with your Next.js application.

## Architecture

```
Next.js Frontend → Next.js API Route → PHP Payment Server → Up2pay Gateway
                      ↓
                  Database (optional)
```

## Implementation Steps

### 1. Environment Variables

**For Local Development:**
Add to your `.env` file in the project root:

```env
PHP_PAYMENT_SERVER_URL=https://your-php-server.com
NEXT_PUBLIC_URL=https://your-nextjs-app.com
```

**For Production (Vercel):**
Add these variables in Vercel Dashboard:

- Go to Project Settings → Environment Variables
- Add `PHP_PAYMENT_SERVER_URL` and `NEXT_PUBLIC_URL`

### 2. PHP Server Setup

On your PHP server, create a `payment.php` file that:

- Receives payment parameters from Next.js
- Integrates with Up2pay e-Transactions
- Handles payment processing
- Redirects back to Next.js with status

Example PHP structure:

```php
<?php
// payment.php
$orderId = $_GET['orderId'] ?? '';
$amount = $_GET['amount'] ?? '';
$returnUrl = $_GET['returnUrl'] ?? '';
$cancelUrl = $_GET['cancelUrl'] ?? '';

// Initialize Up2pay payment
// ... Up2pay integration code ...

// Redirect to Up2pay payment page
// After payment, Up2pay will redirect to $returnUrl or $cancelUrl
?>
```

### 3. Payment Flow

1. **User clicks "Paiement" button**

   - `CheckoutButton.js` collects cart data
   - Calls `/api/payment/initiate`

2. **Next.js API Route** (`/api/payment/initiate`)

   - Validates cart data
   - Generates unique order ID
   - Prepares payment parameters
   - Returns PHP payment URL

3. **Redirect to PHP Server**

   - User is redirected to PHP payment page
   - PHP handles Up2pay integration
   - User completes payment on Up2pay

4. **Return to Next.js**

   - Success: Redirects to `/payment/success?orderId=...`
   - Cancel: Redirects to `/payment/cancel?orderId=...`

5. **Webhook** (optional)
   - PHP server can notify Next.js via `/api/payment/webhook`
   - Updates order status in database

## Files Created

### API Routes

- `pages/api/payment/initiate.js` - Initiates payment and returns PHP URL
- `pages/api/payment/webhook.js` - Receives payment status updates

### Pages

- `pages/payment/success.js` - Payment success page
- `pages/payment/cancel.js` - Payment cancellation page

### Components

- `components/shop/CheckoutButton.js` - Updated to use new payment system

## Security Considerations

1. **Validate all inputs** in API routes
2. **Verify webhook signatures** from PHP server
3. **Use HTTPS** for all payment-related requests
4. **Store sensitive data** securely (never in client-side code)
5. **Implement rate limiting** on API routes

## Testing

1. Test with small amounts first
2. Test success and cancel flows
3. Verify webhook receives correct data
4. Test with different cart configurations

## Next Steps

1. **Set up PHP server** with Up2pay integration
2. **Configure environment variables**
3. **Test payment flow** end-to-end
4. **Add order tracking** (database integration)
5. **Implement email notifications**
6. **Add error handling** and logging

## Alternative Approaches

### Option A: Server-to-Server (Current)

- Next.js → PHP → Up2pay
- User redirected to PHP server
- **Pros**: Simple, PHP handles all payment logic
- **Cons**: User leaves your domain

### Option B: Iframe Integration

- Embed PHP payment form in iframe
- **Pros**: User stays on your site
- **Cons**: Security concerns, iframe limitations

### Option C: API Proxy

- Next.js API route proxies requests to PHP
- PHP returns payment form HTML
- **Pros**: More control
- **Cons**: More complex, security considerations

## Support

For Up2pay e-Transactions documentation, refer to their official documentation.
