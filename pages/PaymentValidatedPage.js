import PaymentValidatedComponentPage from "../components/pages/PaymentValidatedComponentPage";
import SEO from '../components/utilities/SEO';

function PaymentValidatedPage() {
  return (
    <>
      <SEO
        title="Paiement validé - Frappadingue"
        description="Votre paiement a été validé avec succès."
        url="/PaymentValidatedPage"
      />
      <PaymentValidatedComponentPage />
    </>
  );
}

export default PaymentValidatedPage;

