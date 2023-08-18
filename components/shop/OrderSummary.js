import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

import { useEffect } from "react";

function OrderSummary( {cartItems} ) {


const [products, setProducts] = useState(cartItems);


const totalPrice = Object.values(products).reduce((total, product) => {
  return total + product.value;
}, 0)
  
console.log('products:', products)

const { clearCart } = useShoppingCart();
useEffect( () => {
    clearCart();
  }, []) 

  return (
    <div className="bg-black">
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="max-w-xl">
        <h1 className="text-base font-medium text-yellow-400">Merci !</h1>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Commande validée !</p>
        <p className="mt-2 text-base text-gray-400">Inscription valide pour la Frappadingue</p>

     
      </div>

      <div className="mt-10 border-t border-gray-500">
        <h2 className="sr-only">Votre commande</h2>

       
        {Object.values(products ?? {}).map((product) => (
          <div key={product.id} className="flex space-x-6 border-b border-gray-500 py-10">
            {/* <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
            /> */}
            <div className="flex flex-auto flex-col">
              <div>
                <h4 className="font-medium text-yellow-400">
                  <a href={product.href}>{product.name}</a>
                </h4>
                {product.format && <p className="mt-2 text-sm text-gray-400">{product.format}</p>}
              </div>
              <div className="mt-6 flex flex-1 items-end">
                <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                  <div className="flex">
                    <dt className="font-medium text-gray-400">Quantité</dt>
                    <dd className="ml-2 text-gray-400">{product.quantity}</dd>
                  </div>
                  <div className="flex pl-4 sm:pl-6">
                    <dt className="font-medium text-gray-400">Prix</dt>
                    <dd className="ml-2 text-gray-400">{product.price} €</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        ))}

        <div className="sm:ml-40 sm:pl-6">
        

          
       

          <h3 className="sr-only">Total</h3>

          <dl className="space-y-6  pt-10 text-sm">
            <div className="flex justify-between">
              <dt className="font-medium text-gray-400">Sous total</dt>
              <dd className="text-gray-400">$36.00</dd>
            </div>
        
          
            <div className="flex justify-between">
              <dt className="font-medium text-yellow-400">Total</dt>
              <dd className="text-yellow-400">{totalPrice}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
  );
}

export default OrderSummary;
