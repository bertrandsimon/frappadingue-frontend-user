import Product from "./Product";

import { products } from "../../data/productsOptionsData";



function ProductEventBuyZone( {product} ) {

  // new products array with price by distance and stripe link
  const productsWithPricesByDistance = [
    {
      ...product,
      price: product.format_s_price,
      id: product.format_s_stripe_paylink,
      format: 'S : 5-6 kms'
    },
    {
      ...product,
      price: product.format_l_price,
      id: product.format_l_stripe_paylink,
      format: 'L : 10-12 kms'
    }
  ];
  
  return (

    <div className="mt-20">
      
     
      <div className="grid sm:grid-cols-4 md:grid-cols-4 justify-center mx-auto gap-10 place-center flex-wrap w-100 md:max-w-[1400px]">
    
      <div className="col-span-2 justify-center items-center flex text-justify">
        {productsWithPricesByDistance[0].description}
      </div>
      
      {productsWithPricesByDistance.map((product) => (
          <Product product={product} key={product.id} />
        ))}
     

      </div>

    </div> 


  );
}

export default ProductEventBuyZone;