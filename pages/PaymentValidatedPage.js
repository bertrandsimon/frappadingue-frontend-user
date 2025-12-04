import { useRouter } from 'next/router';
import PaymentValidatedComponentPage from "../components/pages/PaymentValidatedComponentPage";
import SEO from '../components/utilities/SEO';

function PaymentValidatedPage() {
  const router = useRouter();
  const { ref, amount } = router.query;

  return (
    <>
      <SEO
        title="Paiement validé - Frappadingue"
        description="Votre paiement a été validé avec succès."
        url="/PaymentValidatedPage"
      />
      <PaymentValidatedComponentPage ref={ref} amount={amount} />
    </>
  );
}

export default PaymentValidatedPage;

