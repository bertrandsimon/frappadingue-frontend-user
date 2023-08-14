import Product from "./Product";

import { products } from "../../data/productsOptionsData";


function ProductOptions() {

  console.log(products)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-4 place-center flex-wrap w-100 md:max-w-[1400px]">
      <h1>Product options</h1>

      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

    </div>
  );
}

export default ProductOptions;