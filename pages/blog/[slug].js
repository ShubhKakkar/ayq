import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { toast } from "react-toastify";
import moment from "moment";
import parse from "html-react-parser";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  const { slug } = context.params;
  let post;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/blog/${slug}`);
    post = await res.json();
  } catch (err) {
    toast.error(err);
  }
  if (!post) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      post,
    },
  };
}

const SingleBlog = ({ post }) => {
  const router = useRouter();
  console.log(post);
  return (
    <>
      <Head>
        <title>AyQ-Blog/{post?.slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={`AyQ Beverages-Blog/${post?.slug}`} />
      </Head>
      <article
        className="px-4 pt-24 pb-4 md:py-24 mx-auto max-w-7xl o"
        itemid="#"
        itemscope
        itemtype="http://schema.org/BlogPosting"
      >
        <div className="w-full mx-auto mb-6 text-left md:w-3/4">
          <img src={post?.thumbnail} alt={post?.slug} className="h-72 w-full object-cover" />
          <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
            {post?.slug}
          </p>
          <h1
            className="mb-3 uppercase text-3xl font-bold tracking-wide text-dark"
            itemprop="headline"
            title="Rise of Tailwind - A Utility First CSS Framework"
          >
            {post?.title}
          </h1>
          <div className="flex space-x-2 mb-4">
            {post?.category?.map((e, index) => {
              return (
                <a
                  key={index}
                  className="t-dark bg-white badge hover:bg-gray-100 ease-in-out duration-300"
                  href="#"
                >
                  {e}
                </a>
              );
            })}
          </div>
          <a className="flex items-center text-gray-700" href="#">
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {post?.author}
              </p>
              <p className="text-sm text-orange-400 font-semibold">
                {moment.utc(post?.createdAt).format("DD-MM-YY")}
              </p>
            </div>
          </a>
        </div>
        <div className="w-full mx-auto text-md md:text-lg font-medium leading-loose md:w-3/4">
          {parse(post?.description)}
        </div>
      </article>
    </>
  );
};

export default SingleBlog;
