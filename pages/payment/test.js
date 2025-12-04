import { useState } from 'react';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import SEO from '../../components/utilities/SEO';

export default function PaymentTestPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [amount, setAmount] = useState(null);
  const [orderId, setOrderId] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      // Générer un orderId de test
      const testOrderId = `TEST-${Date.now()}`;
      setOrderId(testOrderId);

      // Appeler l'API Next.js pour récupérer les données de la commande
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId: testOrderId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to get order');
      }

      const orderData = await response.json();
      setAmount(orderData.amount);

      // Passer l'orderId à la page PHP (le PHP appellera ensuite /api/order pour récupérer les données)
      const testUrl = `https://www.tonagotchi.com/paiement-uptopay-frappadingue/formulaire_HMAC.php?orderId=${testOrderId}`;
      
      // Ouvrir dans une nouvelle fenêtre
      window.open(testUrl, '_blank');
      
      setLoading(false);
      
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO
        title="Test de Paiement - Frappadingue"
        description="Page de test pour le paiement Up2Pay"
        url="/payment/test"
        noindex={true}
      />
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav />
        <div className="min-h-screen py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Test de Paiement Up2Pay</h1>
            {amount && (
              <p className="text-white mb-2">Montant: {amount.toFixed(2)}€</p>
            )}
            {orderId && (
              <p className="text-gray-400 text-sm mb-4">Order ID: {orderId}</p>
            )}
            
            {error && (
              <div className="bg-red-500 text-white p-4 rounded mb-4">
                Erreur: {error}
              </div>
            )}
            
            <button
              onClick={handlePayment}
              disabled={loading}
              className="bg-[#ffe500] hover:bg-[#e6ce00] text-black px-6 py-3 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Chargement...' : 'Payer (Test)'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

