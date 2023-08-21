import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";
import { Fragment } from 'react';
import Image from 'next/image';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import ProductOptions from "./ProductOptions";

export default function ProductEvents({ product }) {

  //console.log('product props in Product.js : ', product)
  const { addItem } = useShoppingCart();
  
  const { name, price } = product;
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    addItem(product, { count:quantity })
    setQuantity(1)
    setOpen(true)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    
    <div className="text-center mx-auto">
      <Image src={`/images/${product.topImg}`} width={241} height={126} />
      <article className="flex flex-col gap-1 p-8 rounded-xl shadow-md text-center mb-6 bg-zinc-900">
        <div className="text-lg uppercase">{name}</div>
        <hr />
        { product.format && <div className="text-1xl cursor-default">Format {product.format}</div>}
        <div className="text-2xl text-normal mt-auto p-4 text-yellow-400">

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
    </div>

    <Dialog open={open} onClose={handleClose} maxWidth="md">
  
        <DialogContent className='mb-10 bg-neutral-900'>

          <div className="text-1xl uppercase text-center m-4">
            <span >Choisissez vos options de course</span>
          </div>

          <ProductOptions></ProductOptions>
          {/* <Button onClick={handleClose}>Fermer</Button> */}
      </DialogContent> 
      
      </Dialog>
    </>
  );
}
