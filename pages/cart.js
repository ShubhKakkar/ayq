import React from "react";

const Cart = () => {
  return (
    <body className="bg-gray-100 max-w-7xl mx-auto mt-24">
      <div className="container mx-auto mt-10">
        <div className="flex my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="uppercase text-4xl font-bold leading-snug font-Roboto tracking-wider">Shopping Cart</h1>
              <h2 className="uppercase text-2xl font-bold leading-snug font-Roboto tracking-wider">1 Item</h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-dark text-sm uppercase w-2/5 font-Roboto tracking-wider">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-dark text-sm uppercase w-1/5 font-Roboto tracking-wider">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-dark text-sm uppercase w-1/5 font-Roboto tracking-wider">
                Price
              </h3>
              <h3 className="font-semibold text-center text-dark text-sm uppercase w-1/5 font-Roboto tracking-wider">
                Total
              </h3>
            </div>
            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 ease-in-out duration-300">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img
                    className="h-24"
                    src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="text-lg font-Roboto tracking-wider font-medium leading-loose mt-4 font-Roboto tracking-wider">Iphone 6S</span>
                  <span className="text-orange-400 text-xs font-Roboto tracking-wider">Apple</span>
                  <a
                    href="#"
                    className="font-semibold hover:text-red-500 text-xs tracking-widest leading-loose font-Roboto tracking-wider"
                  >
                    Remove
                  </a>
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-dark w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />

                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 text-md font-Roboto tracking-wider font-medium leading-loose mt-4 font-Roboto tracking-wider">
                $400.00
              </span>
              <span className="text-center w-1/5 text-md font-Roboto tracking-wider font-medium leading-loose mt-4 font-Roboto tracking-wider">
                $400.00
              </span>
            </div>
            <a
              href="#"
              className="flex font-semibold text-orange-400 text-sm mt-10 font-Roboto tracking-wider"
            >
              <svg
                className="fill-current mr-2 text-orange-400 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10 font-Roboto tracking-wider">
            <h1 className="font-semibold text-2xl border-b pb-8 font-Roboto tracking-wider">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase font-Roboto tracking-wider">Items 1</span>
              <span className="font-semibold text-sm font-Roboto tracking-wider">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase font-Roboto tracking-wider">
                Shipping
              </label>
              <select className="block p-2 text-dark w-full text-sm font-Roboto tracking-wider">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase font-Roboto tracking-wider">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-orange-400 font-semibold hover:bg-orange-500 py-3 text-sm text-white uppercase w-full font-Roboto tracking-wider">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Cart;
