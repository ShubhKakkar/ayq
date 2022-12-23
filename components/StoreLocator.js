import React from "react";

function StoreLocator() {
  const position = [51.505, -0.09];
  return (
    <div className="h-[50vh] w-full grid place-items-center bg-gray-100">
      <div>
        <h2 className="uppercase text-7xl font-bold leading-snug">
          FIND AYQ NEAR YOU
        </h2>
        <div className="flex items-center justify-center mt-6">
          <input
            type="text"
            placeholder="Your Location, USA"
            className="pl-4 px-6 py-2 w-72 outline-none border border-dark text-dark placeholder-dark font-Roboto placeholder:font-Roboto placeholder:text-[#b3b5b8] font-semibold placeholder:font-semibold text-sm placeholder:text-sm uppercase tracking-wider"
          />
          <button className="ml-1 px-3 py-2 bg-dark text-white uppercase tracking-wider hover:bg-orange-400 ease-in-out duration-300">Find</button>
        </div>
      </div>
    </div>
  );
}

export default StoreLocator;
