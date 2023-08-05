import { CheckIcon, ClockIcon } from '@heroicons/react/20/solid'

function CartSummary() {
  
  const products = [
    {
      id: 1,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35.00',
      color: 'White',
      inStock: true,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
      imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      price: '$32.00',
      color: 'Sienna',
      inStock: true,
      size: 'Large',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in sienna.",
    },
   
  ]

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-0 sm:py-24 lg:px-0">
        <h1 className="text-3xl font-light tracking-tight text-white ">Votre panier</h1>

        <form className="mt-12 ">
          <div>
            <h2 className="sr-only text-white">Items in your shopping cart</h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-500">
              {products.map((product, productIdx) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                    />
                  </div>

                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div>
                      <div className="flex justify-between sm:grid sm:grid-cols-2">
                        <div className="pr-6">
                          <h3 className="text-sm">
                            <a href={product.href} className="font-medium text-yellow-300 hover:text-yellow-400">
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                          {product.size ? <p className="mt-1 text-sm text-gray-300">{product.size}</p> : null}
                        </div>

                        <p className="text-right text-sm font-medium text-white">{product.price}</p>
                      </div>

                      <div className="mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                        <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                          Quantity, {product.name}
                        </label>
                        <select
                          id={`quantity-${productIdx}`}
                          name={`quantity-${productIdx}`}
                          className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                        </select>

                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-yellow-400 hover:text-yellow-500 sm:ml-0 sm:mt-3"
                        >
                          <span>Supprimer</span>
                        </button>
                      </div>
                    </div>

            
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order summary */}
          <div className="mt-10 sm:ml-0 sm:pl-0">
            <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
              <h2 className="sr-only">Order summary</h2>

              <div className="flow-root">
                <dl className="-my-4 divide-y divide-gray-200 text-sm">
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">Sous total</dt>
                    <dd className="font-medium text-gray-900">$99.00</dd>
                  </div>
              
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-gray-600">TVA</dt>
                    <dd className="font-medium text-gray-900">$8.32</dd>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <dt className="text-base font-medium text-gray-900">Total</dt>
                    <dd className="text-base font-medium text-gray-900">$112.32</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-yellow-400 px-4 py-3 text-base font-medium text-black shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Payer
              </button>
            </div>

            <div className="mt-6 text-center text-sm text-white">
              <p>
                ou 
                <a href="#" className="font-medium text-yellow-300 hover:text-yellow-500 pl-2">
                  Continuer les achats
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CartSummary;
