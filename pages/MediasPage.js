import MediasComponentPage from "../components/pages/MediasComponentPage";
import SEO from '../components/utilities/SEO';

function MediasPage() {
  return (
    <>
      <SEO
        title="Médias Frappadingue - Photos, Vidéos, Obstacles"
        description="Découvrez les médias Frappadingue : photos, vidéos, obstacles et contenus insolites de nos courses à obstacles. Revivez les moments forts, l'ambiance festive et les défis de nos événements."
        url="/MediasPage"
      />
      <MediasComponentPage />
    </>
  );
}

export default MediasPage;
