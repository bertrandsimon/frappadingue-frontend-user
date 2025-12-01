import TeamBuildingComponentPage from "../components/pages/TeamBuildingComponentPage";
import SEO from '../components/utilities/SEO';

function TeamBuildingPage() {
  return (
    <>
      <SEO
        title="Team Building - Frappadingue"
        description="Organisez un événement team building avec Frappadingue. Course à obstacles pour entreprises et groupes. Contactez-nous pour plus d'informations."
        url="/TeamBuildingPage"
      />
      <TeamBuildingComponentPage />
    </>
  );
}

export default TeamBuildingPage;

