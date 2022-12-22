import Head from "next/head";
import React from "react";
import Content from "../../components/Content";
import NewsLetter from "../../components/NewsLetter";
import ProductsGallery from "../../components/ProductsGallery";

const index = () => {
  const productsInfo = {
    url: "https://cdn.shopify.com/s/files/1/0669/2936/1146/files/PRIME_MetaMoon_group_shot_700x.jpg?v=1665671636",
    title: "PERFORMANCE ENERGY",
    subTitle: "CLINICALLY PROVEN TO FUNCTION",
    description:
      "With 2,000 mg of L-citrulline and 300 mg of caffeine, this great-tasting performance energy drink is designed to optimize performance and give you a powerful energy boost that'll help you break through any challenge.",
    direction: "rtl",
    imageType: "contain",
    buttonText: "Hydrate",
  };
  return (
    <div>
      <Head>
        <title>AyQ-Products</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-All Products" />
      </Head>
      <section>
        <div className="h-screen relative">
          <img
            src="https://cdn.dribbble.com/userupload/3731154/file/original-3c4ea806f48b7a657c2f3e68c327b3da.png?compress=1&resize=1200x900"
            alt="products"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full grid place-items-center bg-[rgba(12,12,12,0.20)]">
            <h2 className="text-8xl uppercase font-extrabold text-white font-Roboto">
              Drink Your AyQ
            </h2>
          </div>
        </div>
      </section>
      <section className="min-h-screen max-w-7xl mx-auto text-center py-24">
        <h2 className="uppercase text-6xl font-bold leading-snug">
          EXPLORE OUR DELICIOUS PRODUCT LINES
        </h2>
        <div className="mt-12">
          <ProductsGallery />
        </div>
      </section>
      <section className="pb-24">
        <Content data={productsInfo} />
      </section>
      <section>
        <NewsLetter />
      </section>
    </div>
  );
};

export default index;
