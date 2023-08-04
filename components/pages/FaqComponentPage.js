
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Pattern from "../common/Pattern";
import Banner from "../common/Banner";
import CardsArea from "../common/CardsArea";
import Stats from "../common/Stats";
import Pricing from "../common/Pricing";
import Editorial from "../homepage/Editorial";
import Arguments from "../common/Arguments";
import Faq from "../Faq";

function FaqComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
          <Nav></Nav>
          <Banner title="F.A.Q" subtitle="questions / réponses" sliderOn={false}></Banner>
          <div className="-mt-20"><Faq/></div>
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default FaqComponentPage;
