import Nav from "../components/common/Nav";
import OrderSummary from "../components/shop/OrderSummary";
import Footer from "../components/common/Footer";

import { useRouter } from "next/router";

function Success() {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <div>
      <main className="container mx-auto sm:px-6 lg:px-8">
        <Nav currentNavItem="Courses" />
      
        <OrderSummary></OrderSummary>
        
      </main>
      <Footer />
    </div>
  );
}


export default Success;
