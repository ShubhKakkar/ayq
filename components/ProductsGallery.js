import Link from "next/link";
import React from "react";
const ProductsGallery = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-3 my-6">
      {data.map((product) => {
        return (
          <div key={product.slug} className="relative">
            <Link
              href={`/products/${product.slug}`}
              className="block overflow-hidden group"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="md:h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 h-[50vh]"
              />
            </Link>

            <div className="absolute top-2 right-2">
              <h3 className="bg-orange-400 text-white px-4 py-1  text-sm hover:underline cursor-pointer batch rounded-sm">
                20% off
              </h3>
            </div>

            <div className="relative pt-4 bg-white flex items-center justify-between">
              <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {product.name}
              </h3>
              <p className="tracking-wider text-gray-900"> $ {product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGallery;
