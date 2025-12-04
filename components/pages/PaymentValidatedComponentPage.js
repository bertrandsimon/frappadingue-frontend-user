
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import PaymentValidated from "../PaymentValidated";


function PaymentValidatedComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
        <Nav></Nav>
          <Banner title="Paiement" subtitle="validé" sliderOn={true} imageBanner="info8.png"></Banner>
          <PaymentValidated></PaymentValidated>
        
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default PaymentValidatedComponentPage;

