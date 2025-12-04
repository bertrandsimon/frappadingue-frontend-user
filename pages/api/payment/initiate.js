// API Route: /api/payment/initiate
// This route prepares payment data and calls the Up2Pay API via /api/payment/create

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

    // Extract customer email (required for Up2Pay)
    const email = customerInfo?.email || customerInfo?.emailAddress || '';

    if (!email) {
      return res.status(400).json({ error: 'Customer email is required for payment' });
    }

    // Prepare billing information from customerInfo
    const billing = customerInfo?.billing || {
      firstName: customerInfo?.firstName || customerInfo?.first_name || '',
      lastName: customerInfo?.lastName || customerInfo?.last_name || '',
      address1: customerInfo?.address1 || customerInfo?.address || '',
      address2: customerInfo?.address2 || '',
      zipCode: customerInfo?.zipCode || customerInfo?.zip_code || customerInfo?.postalCode || '',
      city: customerInfo?.city || '',
      country: customerInfo?.country || '250', // 250 = France par défaut
      phone: customerInfo?.phone || customerInfo?.phoneNumber || '',
      phoneCountryCode: customerInfo?.phoneCountryCode || '+33',
    };

    // Calculate number of products
    const nbProducts = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

    // Call the create payment API
    const createPaymentResponse = await fetch(`${req.headers.origin || process.env.NEXT_PUBLIC_URL || 'http://localhost:3001'}/api/payment/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: totalPrice,
        orderId: orderId,
        email: email,
        billing: billing,
        nbProducts: nbProducts,
      }),
    });

    if (!createPaymentResponse.ok) {
      const error = await createPaymentResponse.json();
      console.error('Payment creation error:', error);
      return res.status(500).json({ 
        error: 'Failed to create payment',
        details: error.error || error.message
      });
    }

    const paymentData = await createPaymentResponse.json();

    // Return payment URL and form data for frontend to handle
    return res.status(200).json({ 
      paymentUrl: paymentData.paymentUrl,
      formData: paymentData.formData,
      orderId: orderId
    });

  } catch (error) {
    console.error('Payment initiation error:', error);
    return res.status(500).json({ 
      error: 'Failed to initiate payment',
      details: error.message 
    });
  }
}

