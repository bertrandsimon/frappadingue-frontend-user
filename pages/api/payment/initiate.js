// API Route: /api/payment/initiate
// This route prepares payment data and redirects to your PHP payment server

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cartItems, totalPrice, customerInfo } = req.body;

    // Validate required data
    if (!cartItems || !totalPrice) {
      return res.status(400).json({ error: 'Missing required payment data' });
    }

    // Generate a unique order ID
    const orderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Prepare payment data for Up2pay
    const paymentData = {
      orderId: orderId,
      amount: totalPrice,
      currency: 'EUR',
      items: cartItems,
      customer: customerInfo || {},
      // Add any other required fields for Up2pay
      returnUrl: `${process.env.NEXT_PUBLIC_URL}/payment/success?orderId=${orderId}`,
      cancelUrl: `${process.env.NEXT_PUBLIC_URL}/payment/cancel?orderId=${orderId}`,
      notifyUrl: `${process.env.NEXT_PUBLIC_URL}/api/payment/webhook`,
    };

    // Build PHP payment URL with parameters
    const phpPaymentUrl = `${process.env.PHP_PAYMENT_SERVER_URL}/payment.php`;
    const params = new URLSearchParams({
      orderId: paymentData.orderId,
      amount: paymentData.amount,
      currency: paymentData.currency,
      returnUrl: paymentData.returnUrl,
      cancelUrl: paymentData.cancelUrl,
      notifyUrl: paymentData.notifyUrl,
      // Add any other required parameters for Up2pay
      // ...paymentData.customer,
    });

    // Store order in database (recommended for tracking)
    // TODO: Save order to database here before redirecting
    // await saveOrderToDatabase(paymentData);

    // Return payment URL for frontend to handle redirect
    return res.status(200).json({ 
      paymentUrl: `${phpPaymentUrl}?${params.toString()}`,
      orderId: paymentData.orderId
    });

    // Alternative: Server-side redirect (uncomment if preferred)
    // return res.redirect(302, `${phpPaymentUrl}?${params.toString()}`);

  } catch (error) {
    console.error('Payment initiation error:', error);
    return res.status(500).json({ error: 'Failed to initiate payment' });
  }
}

