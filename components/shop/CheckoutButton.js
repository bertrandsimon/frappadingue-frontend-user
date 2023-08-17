import { useShoppingCart } from "use-shopping-cart";

import { useState } from "react";

export default function CheckoutButton() {

  const { redirectToCheckout, cartCount, totalPrice } = useShoppingCart();

  const [status, setStatus] = useState("idle");

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return (
    <article className="mt-3 flex flex-col">
      <div className="text-red-700 text-xs mb-3 h-5 text-center">
        {/* {totalPrice && totalPrice < 30
          ? "Minimum de commande : 30 Euros"
          : cartCount && cartCount > 20
          ? "Pas plus de 20 articles"
          : status === "redirect-error"
          ? "Problème de redirection stripe"
          : status === "no-items"
          ? "Ajoutez des produits au panier"
          : null} */}
      </div>
      <button
        onClick={handleClick}
        className="bg-yellow-300 hover:bg-yellow-400 text-xs hover:text-black transition-colors duration-500 text-gray-500 py-3 px-5 rounded-md w-100 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white"
        disabled={
          (totalPrice && totalPrice < 30) ||
          (cartCount && cartCount > 20) ||
          status == "no-items"
            ? true
            : false
        }
      >
        {status !== "Chargement" ? "Paiement" : "Chargement..."}
      </button>
    </article>
  );
}
