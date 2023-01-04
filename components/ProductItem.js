import Link from "next/link";
import React from "react";

const ProductItem = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className="block overflow-hidden group">
      <img
        src={product.images[0]}
        alt={product.name}
        className="md:h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 h-[50vh]"
      />

      <div className="relative pt-4 bg-white flex items-center justify-between">
        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.name}
        </h3>
        <p className="tracking-wider text-gray-900"> $ {product.price}</p>
      </div>
    </Link>
  );
};

export default ProductItem;
