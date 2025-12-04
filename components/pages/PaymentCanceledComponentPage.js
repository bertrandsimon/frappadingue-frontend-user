
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import PaymentCanceled from "../PaymentCanceled";


function PaymentCanceledComponentPage({ ref, amount }) {
  return (
    <div>
        
        
        <main className="container mx-auto sm:px-6 lg:px-8">
         
        <Nav></Nav>
          <Banner title="Paiement" subtitle="annulé" sliderOn={true} imageBanner="info8.png"></Banner>
          <PaymentCanceled ref={ref} amount={amount}></PaymentCanceled>
        
        </main>
       
        <div className='-mt-40'><Footer ></Footer></div>
    </div>

  );
}

export default PaymentCanceledComponentPage;

