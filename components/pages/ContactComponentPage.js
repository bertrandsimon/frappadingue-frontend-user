
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Pattern from "../common/Pattern";
import Banner from "../common/Banner";
import CardsArea from "../common/CardsArea";
import Stats from "../common/Stats";
import Pricing from "../common/Pricing";
import Editorial from "../homepage/Editorial";
import Arguments from "../common/Arguments";


function ContactComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
          <Nav></Nav>
          <Banner title="contact" subtitle="à votre écoute" sliderOn={false}></Banner>
         
        
        </main>
       
        <Footer></Footer>
    </div>

  );
}

export default ContactComponentPage;
