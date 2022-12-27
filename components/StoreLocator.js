import React from "react";

function StoreLocator() {
  const position = [51.505, -0.09];
  return (
    <div className="px-4 md:px-0 h-[50vh] w-full grid place-items-center bg-[url('https://cdn.shopify.com/s/files/1/0079/4289/7737/files/store-locator-map-LA_2048x_6037a122-8c99-4c9c-8191-eae6c6207202_2048x.jpg?v=1641399242')] relative">
      <div className="z-40">
        <h2 className="uppercase text-3xl md:text-5xl font-bold leading-snug text-dark">
          FIND AYQ NEAR YOU
        </h2>
        <div className="flex items-center justify-center md:mt-6 z-40">
          <input
            type="text"
            placeholder="Your Location, USA"
            className="pl-4 md:px-6 py-2 w-56 md:w-72 outline-none border border-dark text-dark placeholder-dark font-Roboto placeholder:font-Roboto placeholder:text-[#b3b5b8] font-semibold placeholder:font-semibold text-sm placeholder:text-sm uppercase tracking-wider"
          />
          <button className="ml-1 px-3 py-2 bg-dark text-white uppercase tracking-wider hover:bg-orange-400 ease-in-out duration-300">
            Find
          </button>
        </div>
      </div>
      {/* <div className="h-full w-full bg-gradient-to-b from-[#121212f8] to-[#12121246] absolute top-0 left-0 opacity-70"></div> */}
    </div>
  );
}

export default StoreLocator;
