import Head from "next/head";
import React from "react";
import NewsLetter from "../../components/NewsLetter";

const Blog = () => {
  return (
    <section>
      <Head>
        <title>AyQ-Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Blog" />
      </Head>
      <div className="container max-w-7xl pt-32 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-100 font-Roboto text-dark"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 sm:h-96 lg:col-span-7"
          />
          <div className="py-8 pl-4 pr-8 space-y-4 lg:col-span-5">
            <h3 className="uppercase text-3xl font-bold leading-snug group-hover:underline">
              Noster tincidunt reprimique ad pro
            </h3>
            <span className="uppercase text-xs font-semibold text-orange-400 mt-12 tracking-widest leading-loose">
              February 19, 2021
            </span>
            <p className="text-md font-Roboto font-medium leading-snug mt-4">
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a>
        <div className="flex justify-between items-center flex-wrap gap-8">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex-1 group hover:no-underline focus:no-underline bg-gray-100 text-dark font-Roboto"
          >
            <img
              role="presentation"
              className="object-cover w-full h-64"
              src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="px-4 pt-4 pb-8 space-y-4 font-Roboto">
              <h3 className="uppercase text-2xl font-semibold leading-snug group-hover:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="uppercase text-xs font-semibold text-orange-400 mt-12 tracking-widest leading-loose">
                January 21, 2021
              </span>
              <p className="text-md font-Roboto font-medium leading-relaxed mt-4">
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex-1 group hover:no-underline focus:no-underline bg-gray-100 text-dark font-Roboto"
          >
            <img
              role="presentation"
              className="object-cover w-full h-64"
              src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="px-4 pt-4 pb-8 space-y-4 font-Roboto">
              <h3 className="uppercase text-2xl font-semibold leading-snug group-hover:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="uppercase text-xs font-semibold text-orange-400 mt-12 tracking-widest leading-loose">
                January 21, 2021
              </span>
              <p className="text-md font-Roboto font-medium leading-relaxed mt-4">
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex-1 group hover:no-underline focus:no-underline bg-gray-100 text-dark font-Roboto"
          >
            <img
              role="presentation"
              className="object-cover w-full h-64"
              src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="px-4 pt-4 pb-8 space-y-4 font-Roboto">
              <h3 className="uppercase text-2xl font-semibold leading-snug group-hover:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="uppercase text-xs font-semibold text-orange-400 mt-12 tracking-widest leading-loose">
                January 21, 2021
              </span>
              <p className="text-md font-Roboto font-medium leading-relaxed mt-4">
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-orange-400 hover:bg-orange-500 ease-in-out duration-300 px-6 py-3 font-bold text-sm tracking-widest text-white uppercase mt-12"
          >
            Load more posts
          </button>
        </div>
      </div>
      <section className="mx-auto pt-24">
        <NewsLetter />
      </section>
    </section>
  );
};

export default Blog;
