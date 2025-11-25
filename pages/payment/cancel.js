import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from '../../components/common/Nav';
import Footer from '../../components/common/Footer';
import SEO from '../../components/utilities/SEO';

export default function PaymentCancel() {
  const router = useRouter();
  const { orderId } = router.query;
  const isClient = typeof window !== 'undefined';

  return (
    <div>
      <SEO
        title="Paiement annulé"
        description="Votre paiement a été annulé. Aucun montant n'a été débité. Vous pouvez réessayer votre commande."
        url={isClient && orderId ? `/payment/cancel?orderId=${orderId}` : '/payment/cancel'}
        noindex={true}
      />
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav />
        <div className="min-h-screen py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-400 mb-4">
              Paiement annulé
            </h1>
            <p className="text-white mb-8">
              Votre paiement a été annulé. Aucun montant n'a été débité.
            </p>
            {orderId && (
              <p className="text-gray-400 text-sm mb-8">
                Numéro de commande: {orderId}
              </p>
            )}
            <Link 
              href="/CartPage"
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md inline-block"
            >
              Retour au panier
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

