import { useShoppingCart } from "use-shopping-cart";

import { useState } from "react";

export default function CheckoutButton() {

  const { cartCount, totalPrice, cartDetails } = useShoppingCart();

  const [status, setStatus] = useState("idle");

  async function handleClick(event) {
    event.preventDefault();
    if (cartCount > 0) {
      setStatus("loading");
      try {
        // Prepare cart items for payment
        const cartItems = Object.values(cartDetails ?? {}).map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        }));

        // TODO: Collect customer information (email, billing address)
        // For now, using placeholder - you should collect this from a form
        const customerInfo = {
          email: prompt('Veuillez entrer votre email:') || '', // TODO: Replace with form input
          // billing: {
          //   firstName: '',
          //   lastName: '',
          //   address1: '',
          //   zipCode: '',
          //   city: '',
          //   country: '250',
          //   phone: '',
          //   phoneCountryCode: '+33',
          // }
        };

        if (!customerInfo.email) {
          alert('L\'email est requis pour le paiement');
          setStatus("idle");
          return;
        }

        // Call Next.js API route to initiate payment
        const response = await fetch('/api/payment/initiate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartItems,
            totalPrice: totalPrice,
            customerInfo: customerInfo,
          }),
        });

        if (response.ok) {
          // API returns paymentUrl and formData from Up2Pay
          const data = await response.json();
          
          if (data.paymentUrl && data.formData) {
            // Create and submit form to Up2Pay
            const form = document.createElement('form');
            form.method = 'POST';
            form.action = data.paymentUrl;
            form.style.display = 'none';

            // Add all form fields
            Object.entries(data.formData).forEach(([key, value]) => {
              const input = document.createElement('input');
              input.type = 'hidden';
              input.name = key;
              input.value = value;
              form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();
          } else if (data.paymentUrl) {
            // Fallback: direct redirect if only URL is provided
            window.location.href = data.paymentUrl;
          }
        } else {
          const error = await response.json();
          console.error('Payment error:', error);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error('Payment initiation error:', error);
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
        className="bg-[#ffe500] hover:bg-[#e6ce00] text-xs hover:text-black transition-colors duration-500 text-gray-500 py-3 px-5 rounded-md w-100 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white"
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
