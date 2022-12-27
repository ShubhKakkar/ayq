import Link from "next/link";
import React from "react";

const Products = [
  {
    _id: 1,
    title: "The Original",
    price: 18.49,
    src: "https://www.datocms-assets.com/74813/1655824133-pr-original-compressed.png",
    slug: "the-original"
  },
  {
    _id: 2,
    title: "Sugar Free Original",
    price: 18.49,
    src: "https://www.datocms-assets.com/74813/1655909182-pr-sugar-free-compressed.webp",
    slug: "sugar-free-original"
  },
  {
    _id: 3,
    title: "BERRY SANGRIA PUNCHED",
    price: 18.49,
    src: "https://www.datocms-assets.com/74813/1669731402-punched_berry-sangria_image1.png",
    slug: "berry-sangria-punched"
  },
  {
    _id: 4,
    title: "ZERO CARB PURE ZERO",
    price: 18.49,
    src: "https://www.datocms-assets.com/74813/1655908976-pr-zero-carb-compressed.webp",
    slug: "zero-carb-pure-zero"
  },
  {
    _id: 5,
    title: "SILVER ICE PURE ZERO",
    price: 18.49,
    src: "https://www.datocms-assets.com/74813/1655908794-pr-silver-ice-compressed.webp",
    slug: "silver-ice-pure-zero"
  },
];

const ProductsGallery = () => {
  return (
    <div className="md:flex flex-wrap items-center justify-between gap-y-6">
      {Products.map((product) => {
        return (
          <div key={product._id} className="basis-1/3 md:p-4 mb-12 md:mb-0">
            <Link href={`products/${product.slug}`}>
              <div className="relative w-full bg-gray-100 h-96 grid place-items-center">
                <img
                  src={product.src}
                  alt={product.title}
                  className="object-contain h-[75%] w-[75%] hover:scale-110 ease-out duration-300 cursor-pointer"
                />
              </div>
            </Link>
            <div className="flex items-center justify-between p-2">
              <h2 className="text-sm o font-semibold leading-loose border border-dark px-3 py-1 uppercase">
                {product.title}
              </h2>
              <p className="text-sm o leading-loose text-orange-400 font-bold">
                $ {product.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGallery;
