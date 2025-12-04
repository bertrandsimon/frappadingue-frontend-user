// API Route: /api/payment/create
// Handles payment creation and calls PHP Up2Pay API on OVH

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    const { amount, orderId, email, billing, nbProducts } = body;

    // Validate required fields
    if (!amount || !orderId || !email) {
      return res.status(400).json({ error: 'Missing required fields: amount, orderId, email' });
    }

    // Get PHP payment server URL from environment variable
    // Format: https://votre-domaine-ovh.com/paiement-uptopay-frappadingue/api/create-payment.php
    //const phpPaymentUrl = process.env.PHP_PAYMENT_SERVER_URL || 'https://www.tonagotchi.com/paiement-uptopay-frappadingue/api/create-payment.php';
    const phpPaymentUrl = 'https://www.tonagotchi.com/paiement-uptopay-frappadingue/api/create-payment.php';
    
    console.log('Calling PHP API:', phpPaymentUrl);
    console.log('Request data:', { amount, orderId, email });

    // Appeler votre API PHP sur OVH
    // Le script PHP attend amount en euros (il convertira en centimes lui-même)
    let response;
    try {
      response = await fetch(phpPaymentUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount), // Montant en euros (le PHP convertira en centimes)
          orderId,
          email,
          billing: billing || {}, // Informations de facturation (optionnel)
          nbProducts: nbProducts || 1, // Nombre de produits (défaut: 1)
        }),
        // Timeout de 30 secondes (si disponible)
        ...(typeof AbortSignal !== 'undefined' && AbortSignal.timeout ? { signal: AbortSignal.timeout(30000) } : {}),
      });
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      if (fetchError.name === 'AbortError' || fetchError.name === 'TimeoutError') {
        return res.status(500).json({ 
          error: 'Timeout lors de l\'appel au serveur PHP',
          details: 'Le serveur PHP n\'a pas répondu dans les 30 secondes',
          url: phpPaymentUrl
        });
      }
      if (fetchError.code === 'ENOTFOUND' || fetchError.code === 'ECONNREFUSED') {
        return res.status(500).json({ 
          error: 'Impossible de se connecter au serveur PHP',
          details: `Erreur réseau: ${fetchError.message}`,
          url: phpPaymentUrl
        });
      }
      throw fetchError;
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error('PHP API error status:', response.status);
      console.error('PHP API error response:', errorText);
      let errorData;
      try {
        errorData = JSON.parse(errorText);
      } catch (e) {
        errorData = { 
          error: `Erreur ${response.status} du serveur PHP`,
          details: errorText.substring(0, 500),
          url: phpPaymentUrl
        };
      }
      return res.status(500).json(errorData);
    }

    const data = await response.json();
    console.log('PHP API success response received');
    return res.status(200).json(data);

  } catch (error) {
    console.error('Payment creation error:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'Failed to create payment',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}

