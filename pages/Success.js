import Nav from "../components/common/Nav";
import OrderSummary from "../components/shop/OrderSummary";
import Footer from "../components/common/Footer";

import { useShoppingCart } from "use-shopping-cart";
import { DebugCart } from "use-shopping-cart";

import { useEffect } from "react";

import { useRouter } from "next/router";

function Success() {
  // const router = useRouter();
  // const { id } = router.query;
  const cartDetails = useShoppingCart();

  

  const cartItems = cartDetails.cartDetails;
  console.log ('cartItems :', cartItems)

 
  console.log ('cartDetails :', cartDetails)
  const { clearCart } = useShoppingCart();

  // useEffect( () => {
  //   clearCart();
  // }, []) 

  return (
    <div>
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav currentNavItem="Courses" />
        <DebugCart className="bg-white text-black mt-40"></DebugCart>
        <OrderSummary cartItems={cartItems}></OrderSummary>
        
      </main>
      <Footer />
    </div>
  );
}


export default Success;
