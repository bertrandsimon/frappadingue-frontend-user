
import CartSummary from '../shop/CartSummary';
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import Banner from "../common/Banner";


function CartComponentPage() {
  return (
    <div>
        
        
    <main className="container mx-auto sm:px-6 lg:px-8">
     
      <Nav></Nav>
      <Banner title="panier" subtitle="lorem ipsum" sliderOn={false}></Banner>
      <CartSummary></CartSummary>
    
    </main>
   
    <Footer></Footer>
</div>

  );
}

export default CartComponentPage;
