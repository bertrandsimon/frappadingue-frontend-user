import { useShoppingCart } from "use-shopping-cart";

import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";

// const items = [];


export default function ShoppingCart() {

  const { shouldDisplayCart, cartCount, cartDetails } = useShoppingCart();

  return (
    <div
      className={`bg-white text-black flex flex-col absolute right-3 md:right-9 top-20 w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${
        shouldDisplayCart ? "opacity-100" : "opacity-0"
      }`}
    >
      {cartCount && cartCount > 0 ? (
        <>
          {/* map an object method / only arrays can be map  */}
          { Object.values(cartDetails ?? {}).map( (entry) => (<CartItem key={entry.id} item={entry} />) )}

  
          <CheckoutButton />
        </>
      ) : (
        <div className="p-5">Panier vide</div>
      )}
    </div>
  );
}
