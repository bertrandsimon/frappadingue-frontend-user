import PaymentCanceledComponentPage from "../components/pages/PaymentCanceledComponentPage";
import SEO from '../components/utilities/SEO';

function PaymentCanceledPage() {
  return (
    <>
      <SEO
        title="Paiement annulé - Frappadingue"
        description="Votre paiement a été annulé."
        url="/PaymentCanceledPage"
      />
      <PaymentCanceledComponentPage />
    </>
  );
}

export default PaymentCanceledPage;

