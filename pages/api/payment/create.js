// API Route: /api/payment/create
// Handles payment creation and calls PHP Up2Pay API on OVH

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    const { amount, orderId, email } = body;

    // Validate required fields
    if (!amount || !orderId || !email) {
      return res.status(400).json({ error: 'Missing required fields: amount, orderId, email' });
    }

    // Get PHP payment server URL from environment variable
    // Format: https://votre-domaine-ovh.com/paiement-uptopay-frappadingue/api/create-payment.php
    const phpPaymentUrl = process.env.PHP_PAYMENT_SERVER_URL || 'https://votre-domaine-ovh.com/paiement-uptopay-frappadingue/api/create-payment.php';

    // Appeler votre API PHP sur OVH
    // Le script PHP attend amount en euros (il convertira en centimes lui-même)
    const response = await fetch(phpPaymentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: parseFloat(amount), // Montant en euros (le PHP convertira en centimes)
        orderId,
        email,
        // Pour le test, on n'envoie pas billing et nbProducts (optionnels)
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('PHP API error:', errorText);
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { error: errorText };
      }
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Payment creation error:', error);
    return res.status(500).json({ 
      error: 'Failed to create payment',
      details: error.message 
    });
  }
}

