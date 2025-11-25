import FaqComponentPage from "../components/pages/FaqComponentPage";
import SEO from '../components/utilities/SEO';

function FaqPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [],
  };

  return (
    <>
      <SEO
        title="F.A.Q. - Questions fréquentes Frappadingue"
        description="Trouvez les réponses aux questions fréquentes sur les courses à obstacles Frappadingue : informations pratiques, inscriptions, matériel nécessaire, formats de course (S et L), organisation d'une Frappadingue et bien plus encore."
        url="/FaqPage"
        structuredData={structuredData}
      />
      <FaqComponentPage />
    </>
  );
}

export default FaqPage;
