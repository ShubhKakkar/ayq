import Head from "next/head";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Content from "../../../components/Content";
import NewsLetter from "../../../components/NewsLetter";
import ProductsGallery from "../../../components/ProductsGallery";
import { toast } from "react-toastify";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session || !session.user.isAdmin) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/products`);
  const products = await response.json();
  return {
    props: {
      session,
      products,
    },
  };
}

const Index = ({ products }) => {
  return (
    <div>
      <Head>
        <title>AyQ-Admin/products-all</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-All Products" />
      </Head>
      <section className="min-h-screen md:max-w-7xl md:mx-auto text-center pt-12 md:py-24 px-4 md:px-0">
        <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => {
            return (
              <div key={product.slug}>
                <Link
                  href={`/admin/products/${product.slug}`}
                  className="block overflow-hidden group"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="md:h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 h-[50vh]"
                  />

                  <div className="relative pt-4 bg-white flex items-center justify-between">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      {product.name}
                    </h3>
                    <p className="tracking-wider text-gray-900">
                      {" "}
                      $ {product.price}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;
