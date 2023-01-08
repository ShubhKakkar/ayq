import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = ({products}) => {
  return (
    <div className="flex items-center gap-4 overflow-x-scroll product__scrollbar">
      {products.map((product) => {
        return (
          <div key={product._id}>
            <ProductCard data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductCarousel;
