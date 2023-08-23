
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import Contact from "../contact/Contact";


function ContactComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
        <Nav currentNavItem="Contact"></Nav>
          <Banner title="contact" subtitle="à votre écoute" sliderOn={true} imageBanner="info8.png"></Banner>
          <Contact></Contact>
        
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default ContactComponentPage;
