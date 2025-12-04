
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import PaymentValidated from "../PaymentValidated";


function PaymentValidatedComponentPage({ ref, amount }) {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
        <Nav></Nav>
          <Banner title="Paiement" subtitle="validé" sliderOn={true} imageBanner="info8.png"></Banner>
          <PaymentValidated ref={ref} amount={amount}></PaymentValidated>
        
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default PaymentValidatedComponentPage;

