import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { Fragment } from 'react';

import Button from '@mui/material/Button';


import ProductOptions from "./ProductOptions";

export default function Product({ product }) {

  //console.log('product props in Product.js : ', product)
  const { addItem } = useShoppingCart();
  
  const { name, price } = product;
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    addItem(product, { count:quantity })
    setQuantity(1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };



  return (
    <>

    <article className="flex flex-col gap-1 p-8 rounded-xl shadow-md text-center mb-6 bg-neutral-950 m-2">
      <div className="text-lg uppercase">{name}</div>
      <hr />
      { product.format && <div className="text-1xl cursor-default">Format {product.format}</div>}
      <div className="text-2xl text-normal mt-auto p-4 text-[#ffe500]">

        {price} <span> €</span>

      </div>
      <div className="flex justify-around items-center mt-4 mb-2 bg-neutral-950">
        <button
          onClick={decreaseQuantity}
          className="hover:text-black hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          -
        </button>
        <span className="w-8 text-center rounded-md mx-3 text-[#ffe500]">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="hover:text-black hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
     
      <Button onClick={ () => addToCart()} variant="outlined" className='whiteBtn'>
          Ajouter
      </Button>
    </article>


    </>
  );
}
