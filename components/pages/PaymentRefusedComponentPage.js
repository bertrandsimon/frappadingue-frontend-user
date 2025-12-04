
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import PaymentRefused from "../PaymentRefused";


function PaymentRefusedComponentPage() {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
        <Nav></Nav>
          <Banner title="Paiement" subtitle="refusé" sliderOn={true} imageBanner="info8.png"></Banner>
          <PaymentRefused></PaymentRefused>
        
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default PaymentRefusedComponentPage;

