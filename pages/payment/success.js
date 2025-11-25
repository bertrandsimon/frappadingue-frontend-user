import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import OrderSummary from '../../components/shop/OrderSummary';
import SEO from '../../components/utilities/SEO';

export default function PaymentSuccess() {
  const router = useRouter();
  const { orderId } = router.query;
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    // Verify payment status with your backend if needed
    // You can fetch order details using orderId
  }, [orderId]);

  return (
    <div>
      <SEO
        title="Paiement réussi"
        description="Votre paiement a été traité avec succès. Merci pour votre inscription aux courses à obstacles Frappadingue."
        url={isClient && orderId ? `/payment/success?orderId=${orderId}` : '/payment/success'}
        noindex={true}
      />
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav />
        <div className="min-h-screen py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              Paiement réussi !
            </h1>
            <p className="text-white mb-8">
              Votre commande a été traitée avec succès.
            </p>
            {orderId && (
              <p className="text-gray-400 text-sm">
                Numéro de commande: {orderId}
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

