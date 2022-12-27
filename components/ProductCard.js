import Link from "next/link";
import React from "react";

const ProductCard = ({ data }) => {
  if (!data) {
    return;
  }
  return (
    <div className="w-[250px]">
      <Link href={`/products/${data._id ? data._id : ""}`}>
        <img src={data.banner ? data.banner : ""} alt="" />
      </Link>
      <div className="pt-6 px-2">
        <h5 className="text-dark o text-xs font-semibold uppercase">
          {data.title ? data.title : ""}
        </h5>
        <span className="text-sm font-semibold text-gray-600 tracking-widest leading-loose">
          $ {data.price ? data.price : ""}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
