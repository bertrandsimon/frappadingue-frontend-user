// API Route: /api/payment/webhook
// This route receives payment status updates from your PHP server

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { orderId, status, transactionId, amount } = req.body;

    // Verify the webhook (add security checks here)
    // - Verify signature/token from PHP server
    // - Validate the request is from your PHP server

    // Update order status in your database
    // await updateOrderStatus(orderId, status, transactionId);

    // Handle different payment statuses
    switch (status) {
      case 'success':
      case 'completed':
        // Payment successful - update order, send confirmation email, etc.
        console.log(`Payment successful for order ${orderId}`);
        break;
      case 'failed':
      case 'cancelled':
        // Payment failed - handle accordingly
        console.log(`Payment failed for order ${orderId}`);
        break;
      default:
        console.log(`Payment status: ${status} for order ${orderId}`);
    }

    return res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}

