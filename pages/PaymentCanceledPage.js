import { useRouter } from 'next/router';
import PaymentCanceledComponentPage from "../components/pages/PaymentCanceledComponentPage";
import SEO from '../components/utilities/SEO';

function PaymentCanceledPage() {
  const router = useRouter();
  const { ref, amount } = router.query;

  return (
    <>
      <SEO
        title="Paiement annulé - Frappadingue"
        description="Votre paiement a été annulé."
        url="/PaymentCanceledPage"
      />
      <PaymentCanceledComponentPage ref={ref} amount={amount} />
    </>
  );
}

export default PaymentCanceledPage;

