import Head from "next/head";
import React from "react";
import Card from "../../components/Card";
import NewsLetter from "../../components/NewsLetter";

const posts = [
  {
    _id: 1,
    slug:"slug1",
    banner: "https://source.unsplash.com/random/480x360?1",
    title: "In usu laoreet repudiare legendos",
    subTitle: "January 21, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    buttonText: "Read More",
  },
  {
    _id: 2,
    slug:"slug2",
    banner: "https://source.unsplash.com/random/480x360?1",
    title: "In usu laoreet repudiare legendos",
    subTitle: "January 21, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    buttonText: "Read More"
  },
  {
    _id: 3,
    slug:"slug3",
    banner: "https://source.unsplash.com/random/480x360?1",
    title: "In usu laoreet repudiare legendos",
    subTitle: "January 21, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    buttonText: "Read More"
  },
  {
    _id: 4,
    slug:"slug4",
    banner: "https://source.unsplash.com/random/480x360?1",
    title: "In usu laoreet repudiare legendos",
    subTitle: "January 21, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    buttonText: "Read More"
  },
  {
    _id: 5,
    slug:"slug5",
    banner: "https://source.unsplash.com/random/480x360?1",
    title: "In usu laoreet repudiare legendos",
    subTitle: "January 21, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.",
    buttonText: "Read More"
  },
]

export async function getServerSideProps() {
  let products;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/blog`);
    products = await res.json();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      blog,
    },
  };
}

const Blog = () => {
  return (
    <section>
      <Head>
        <title>AyQ-Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Blog" />
      </Head>
      <div className="container md:max-w-7xl pt-32 mx-auto space-y-6 sm:space-y-12 px-4 md:px-0">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-100 o text-dark"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 sm:h-96 lg:col-span-7"
          />
          <div className="py-8 pl-4 pr-4 md:pr-8 space-y-4 lg:col-span-5">
            <h2 className="uppercase text-3xl font-bold leading-snug">
              Noster tincidunt reprimique ad pro
            </h2>
            <span className="uppercase text-xs font-semibold text-orange-400 mt-12 tracking-widest leading-loose">
              February 19, 2021
            </span>
            <p className="text-md o font-medium leading-snug mt-4">
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </a>
        <div className="flex justify-between items-center flex-wrap gap-8">
          {
            posts.map((post) => {
              return <Card key={post._id} data={post} />
            })
          }
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
      <section className="mx-auto pt-12 md:pt-24">
        <NewsLetter />
      </section>
    </section>
  );
};

export default Blog;
