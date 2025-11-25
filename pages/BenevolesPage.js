import BenevolesComponentPage from "../components/pages/BenevolesComponentPage";
import SEO from '../components/utilities/SEO';

function BenevolesPage() {
  return (
    <>
      <SEO
        title="Bénévoles - Rejoignez l'équipe Frappadingue"
        description="Devenez bénévole pour les courses à obstacles Frappadingue. Rejoignez une organisation expérimentée avec plus de 70 événements au compteur. Participez à l'organisation de la référence de la course à obstacles en France."
        url="/BenevolesPage"
      />
      <BenevolesComponentPage />
    </>
  );
}

export default BenevolesPage;
