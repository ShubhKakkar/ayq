import Link from "next/link";
import React from "react";

const BlogWidget = ({ blog }) => {
  const BlogPosts = blog;
  if (BlogPosts.length < 3) {
    return "";
  }
  return (
    <div className="md:max-w-7xl md:mx-auto">
      <div className="my-8 md:flex items-center justify-between gap-16">
        {BlogPosts.slice(0, 3).map((blog, index) => {
          return (
            <Link href={`blog/${blog.slug}`} key={index} className="basis-1/3">
              <div className="h-72 my-6 md:my-0 bg-gray-100 relative cursor-pointer">
                <img
                  src={blog.thumbnail}
                  alt={blog.slug}
                  className="object-cover object-center h-full w-full"
                />
                <p className="absolute top-0 left-0 h-full w-full grid place-items-center text-3xl text-center p-2 o font-bold opacity-0 hover:opacity-100 ease-out duration-300 text-white bg-[rgba(12,12,12,0.40)] tracking-wide leading-wide">
                  {blog.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="h-96 bg-gray-100 my-8 relative">
        <Link href={`blog/${BlogPosts[3].slug}`}>
          <img
            src={BlogPosts[3].thumbnail}
            alt={BlogPosts[3].slug}
            className="object-cover object-center h-full w-full"
          />
          <p className="absolute top-0 left-0 h-full w-full grid place-items-center text-6xl font-bold opacity-0 hover:opacity-100 ease-out duration-300 text-white z-10 bg-[rgba(12,12,12,0.40)] text-center tracking-wid leading-wide">
            {BlogPosts[3].title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogWidget;
