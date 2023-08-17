import Product from "./Product";

import { products } from "../../data/productsOptionsData";



function ProductEventBuyZone( {product} ) {
  
    // >> product :
  // active: true
  // date: 2023-10-08
  // format_l_price: 48
  // format_l_stripe_paylink: price_1NfIgmKRe8hWIoUkt6FczGlf
  // format_s_price: 38
  // format_s_stripe_paylink: price_1NfIfZKRe8hWIoUkZVN2pxHq
  // location: Gravelines
  // max_capacity: 5000
  // name: Frappadingue
  // start_hour: 14 h 00
  // thumb_image: /images/event1.png
  // year: 2023
  // zip_code: 59
  // __v: 0
  // _id: 64db8865af6df4463b654a8a

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
  
  //console.log(productsWithPricesByDistance);

  //console.log ('product in ProductEventBuyZone', product)
  
  return (

    <div>
      
      <h1>ProductEventBuyZone</h1>
     
      <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[1400px]">
    
      
      {productsWithPricesByDistance.map((product) => (
          <Product product={product} key={product.id} />
        ))}
     

      </div>

    </div> 


  );
}

export default ProductEventBuyZone;