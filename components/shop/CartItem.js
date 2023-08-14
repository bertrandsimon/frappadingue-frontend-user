import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

import { TrashIcon } from '@heroicons/react/24/outline';

export default function CartItem({ item }) {
  const  { removeItem } = useShoppingCart();
  const { name, emoji, quantity, price } = item;
  
  const removeItemFromCart = () => { removeItem(item.id) }

  return (
    <div className="flex items-center gap-4 mb-3">
      <p className="text-1xl">{emoji}</p>
      <div className="text-xs">
        {name} <span >({quantity})</span>
      </div>
      {/* <div className="ml-auto">{price}</div> */}
      <div className="ml-auto text-xs" >{price * quantity} Eur</div>
    
      <TrashIcon onClick={ () => removeItemFromCart() } className="h-4 w-4 hover:text-red-500 cusror-pointer" aria-hidden="true" />
    </div>
  );
}
