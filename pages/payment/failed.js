import { useRouter } from 'next/router';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import SEO from '../../components/utilities/SEO';

export default function PaymentFailed() {
  const router = useRouter();
  const { ref, amount } = router.query;
  const isClient = typeof window !== 'undefined';

  const formattedAmount = amount ? (parseInt(amount) / 100).toFixed(2) : null;

  return (
    <div>
      <SEO
        title="Paiement échoué"
        description="Votre paiement a échoué. Aucun montant n'a été débité. Vous pouvez réessayer votre commande."
        url={isClient && ref ? `/payment/failed?ref=${ref}` : '/payment/failed'}
        noindex={true}
      />
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav />
        <div className="min-h-screen py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">
              ❌ Paiement échoué
            </h1>
            <p className="text-white mb-8">
              Votre paiement a échoué. Aucun montant n'a été débité.
            </p>
            {ref && (
              <p className="text-gray-400 text-sm mb-2">
                Référence: {ref}
              </p>
            )}
            {formattedAmount && (
              <p className="text-gray-400 text-sm mb-8">
                Montant: {formattedAmount} €
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

