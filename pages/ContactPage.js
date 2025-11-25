import ContactComponentPage from "../components/pages/ContactComponentPage";
import SEO from '../components/utilities/SEO';

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact - Frappadingue"
        description="Contactez Frappadingue. Téléphone : 06 28 93 10 50, Email : contact@frappadingue.fr. Le Touquet (62). Questions sur nos courses à obstacles, inscriptions, organisation d'une Frappadingue ou partenariats."
        url="/ContactPage"
      />
      <ContactComponentPage />
    </>
  );
}

export default ContactPage;
