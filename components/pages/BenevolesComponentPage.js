
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Pattern from "../common/Pattern";
import Banner from "../common/Banner";
import CardsArea from "../common/CardsArea";
import Stats from "../common/Stats";
import Pricing from "../common/Pricing";
import Editorial from "../homepage/Editorial";
import Arguments from "../common/Arguments";
import Volunteer from "../Volunteer";

function BenevolesComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          <Nav currentNavItem="Bénévoles"></Nav>
          <Banner title="bénévoles" subtitle="Intègre la team Frappadingue" sliderOn={true} imageBanner="info4.png"></Banner>
          <Volunteer></Volunteer>
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default BenevolesComponentPage;
