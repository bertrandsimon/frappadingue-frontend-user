import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import Button from '@mui/material/Button';


export default function Product({ product }) {

  const { addItem } = useShoppingCart();
  
  const { name, price, emoji } = product;
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
    <article className="flex flex-col gap-1  p-8 rounded-xl shadow-md text-center mb-6 bg-zinc-900">
      <div className="text-4xl cursor-default">{emoji}</div>
      <div className="text-lg">{name}</div>
      <div className="text-2xl text-normal mt-auto">

        {price} <span> €</span>

      </div>
      <div className="flex justify-around items-center mt-4 mb-2 ">
        <button
          onClick={decreaseQuantity}
          className="hover:text-black hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          -
        </button>
        <span className="w-8 text-center rounded-md mx-3 text-yellow-400">{quantity}</span>
        <button
          onClick={increaseQuantity}
          className="hover:text-black hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
        >
          +
        </button>
      </div>
     
      <Button onClick={ () => addToCart()} variant="outlined" className='whiteBtn'>
          Ajouter au panier
      </Button>
    </article>
  );
}
