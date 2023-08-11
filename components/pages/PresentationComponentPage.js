
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Pattern from "../common/Pattern";
import Banner from "../common/Banner";
import CardsArea from "../common/CardsArea";
import Stats from "../common/Stats";
import Pricing from "../common/Pricing";
import Editorial from "../homepage/Editorial";
import Arguments from "../common/Arguments";

function PresentationComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          <Nav currentNavItem="Présentation"></Nav>
          <Banner title="la frappadingue c'est" subtitle="la référence de la course à obstacles" sliderOn={false}></Banner>
          <Stats></Stats>
          <Pricing></Pricing>
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default PresentationComponentPage;
