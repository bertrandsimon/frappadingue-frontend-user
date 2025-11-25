import PresentationComponentPage from "../components/pages/PresentationComponentPage";
import SEO from '../components/utilities/SEO';

function PresentationPage() {
  return (
    <>
      <SEO
        title="Présentation - L'histoire de Frappadingue"
        description="Découvrez l'histoire de Frappadingue : née en 2010, la référence de la course à obstacles en France. Une organisation expérimentée avec plus de 70 événements. Le sport plaisir, accessible à tous, souvent copiée, jamais égalée."
        url="/PresentationPage"
      />
      <PresentationComponentPage />
    </>
  );
}

export default PresentationPage;
