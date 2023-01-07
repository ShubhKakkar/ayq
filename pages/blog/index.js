import Head from "next/head";
import React from "react";
import Card from "../../components/Card";
import NewsLetter from "../../components/NewsLetter";
import parse from "html-react-parser";
import moment from "moment";
import Link from "next/link";

export async function getServerSideProps() {
  let blog;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/blog`);
    blog = await res.json();
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      blog,
    },
  };
}

const Blog = ({ blog }) => {
  return (
    <section>
      <Head>
        <title>AyQ-Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Blog" />
      </Head>
      <div className="container md:max-w-7xl pt-32 mx-auto space-y-6 sm:space-y-12 px-4 md:px-0">
        <Link
          rel="noopener noreferrer"
          href={`/blog/${blog[0].slug}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline md:flex bg-gray-100 text-dark"
        >
          <img
            src={blog[0].thumbnail}
            alt=""
            className="object-cover w-full h-64 md:h-[400px] lg:col-span-7"
          />
          <div className="py-8 pl-4 pr-4 md:pr-8 space-y-4 lg:col-span-5">
            <h2 className="uppercase text-lg md:text-3xl font-bold leading-snug">
              {blog[0].title}
            </h2>
            <div className="flex-[1] mt-2">
              <p className="text-sm font-semibold text-gray-800">
                {blog[0]?.author}
              </p>
              <p className="text-xs text-orange-400 font-semibold">
                {moment.utc(blog[0]?.createdAt).format("DD-MM-YY")}
              </p>
            </div>
            <div className="text-md h-[150px] font-medium leading-snug mt-4 text-ellipsis overflow-hidden">
              {parse(blog[0].description)}
            </div>
          </div>
        </Link>
        {blog.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blog.slice(1).map((post) => {
              return <Card key={post._id} data={post} />;
            })}
          </div>
        )}
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
