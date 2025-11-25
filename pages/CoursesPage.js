import CoursesComponentPage from "../components/pages/CoursesComponentPage";
import SEO from '../components/utilities/SEO';

function CoursesPage() {
  return (
    <>
      <SEO
        title="Nos évènements - Courses à obstacles Frappadingue"
        description="Découvrez tous nos évènements Frappadingue. 1 course, 2 challenges, 1 départ commun. Format S : 5 à 6 km, Format L : 10 à 12 km. Inscrivez-vous à la référence de la course à obstacles en France."
        url="/CoursesPage"
      />
      <CoursesComponentPage />
    </>
  );
}

export default CoursesPage;
