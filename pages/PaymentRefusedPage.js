import { useRouter } from 'next/router';
import PaymentRefusedComponentPage from "../components/pages/PaymentRefusedComponentPage";
import SEO from '../components/utilities/SEO';

function PaymentRefusedPage() {
  const router = useRouter();
  const { ref, amount } = router.query;

  return (
    <>
      <SEO
        title="Paiement refusé - Frappadingue"
        description="Votre paiement a été refusé."
        url="/PaymentRefusedPage"
      />
      <PaymentRefusedComponentPage ref={ref} amount={amount} />
    </>
  );
}

export default PaymentRefusedPage;

