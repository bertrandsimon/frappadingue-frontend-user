// API Route: /api/order
// Returns order data (for now, just returns a test price)
// This will be called by PHP to get order details

export default async function handler(req, res) {
  // Gérer les requêtes OPTIONS (preflight CORS)
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Définir les headers CORS pour permettre les requêtes depuis PHP
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  try {
    const { orderId } = req.body;

    console.log('Order API called with orderId:', orderId);
    console.log('Request headers:', req.headers);

    if (!orderId) {
      console.error('Order API: orderId is missing');
      return res.status(400).json({ error: 'orderId is required' });
    }

    // Pour l'instant, on retourne juste un prix de test
    // Plus tard, on récupérera les données depuis MongoDB
    const order = {
      orderId: orderId,
      amount: 200.50,  // Prix de test en euros
      email: 'test@example.com',
      // Autres données à ajouter plus tard
    };

    console.log('Order API: returning order data:', order);
    return res.status(200).json(order);

  } catch (error) {
    console.error('Order API error:', error);
    return res.status(500).json({ 
      error: 'Failed to get order',
      details: error.message 
    });
  }
}
