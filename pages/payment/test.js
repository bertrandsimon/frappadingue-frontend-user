import { useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import SEO from '../../components/utilities/SEO';

export default function PaymentTestPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/payment/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: 100, // 100 EUR
          orderId: `TEST-${Date.now()}`,
          email: 'test@example.com',
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          const errorText = await response.text();
          throw new Error(`Erreur ${response.status}: ${errorText.substring(0, 200)}`);
        }
        const errorMessage = errorData.error || errorData.details || 'Failed to create payment';
        throw new Error(errorMessage);
      }

      const { paymentUrl, formData } = await response.json();

      // Créer et soumettre le formulaire automatiquement
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = paymentUrl;

      if (formData) {
        Object.entries(formData).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });
      }

      document.body.appendChild(form);
      form.submit();
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
              {loading ? 'Redirection...' : 'Payer 100€ (Test)'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

