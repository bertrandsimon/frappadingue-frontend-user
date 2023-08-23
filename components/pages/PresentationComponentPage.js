
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
          <Banner title="la frappadingue c'est" subtitle="la référence de la course à obstacles" sliderOn={true} imageBanner="info7.png"></Banner>
          <Stats></Stats>
          <div className='m-10'><Pricing ></Pricing></div>
        </main>

        <div className='-mt-40'><Footer ></Footer></div>
        
    </div>

  );
}

export default PresentationComponentPage;
