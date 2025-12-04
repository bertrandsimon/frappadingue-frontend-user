import PaymentRefusedComponentPage from "../components/pages/PaymentRefusedComponentPage";
import SEO from '../components/utilities/SEO';

function PaymentRefusedPage() {
  return (
    <>
      <SEO
        title="Paiement refusé - Frappadingue"
        description="Votre paiement a été refusé."
        url="/PaymentRefusedPage"
      />
      <PaymentRefusedComponentPage />
    </>
  );
}

export default PaymentRefusedPage;

