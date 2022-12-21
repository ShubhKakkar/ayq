import Link from "next/link";
import React from "react";
const BlogPosts = [
  {
    banner:
      "https://www.celsius.com/wp-content/uploads/2019/10/GM_Featured.jpg",
    title: "INTRODUCING GRAPEFRUIT MELON",
    slug: "slug1",
    _id: 1,
  },
  {
    banner:
      "https://www.celsius.com/wp-content/uploads/2021/01/CELSIUS-Can-Lineup.png",
    title: "CELSIUS IS WORTH THE HYPE - IDENTIFYLA.COM",
    slug: "slug2",
    _id: 2,
  },
  {
    banner:
      "https://www.celsius.com/wp-content/uploads/2019/07/LFT_Feature.jpg",
    title: "LIVE FIT TOUR",
    slug: "slug3",
    _id: 3,
  },
  {
    banner:
      "https://cdn.shopify.com/s/files/1/1628/8781/files/HOME_Cartons-100_900x.jpg?v=1649180029",
    title: "Still Spring Water.",
    slug: "slug4",
    _id: 4,
  },
  {
    banner:
      "https://cdn.shopify.com/s/files/1/1628/8781/files/HOME_Cans-100_900x.jpg?v=1649180065",
    title: "Blog5",
    slug: "slug5",
    _id: 5,
  },
];

const BlogWidget = () => {
  if (BlogPosts.length < 3) {
    return "";
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="my-8 flex items-center justify-between gap-16">
        {BlogPosts.slice(0, 3).map((blog, index) => {
          return (
            <Link href={`blog/${blog.slug}`} key={index} className="basis-1/3">
              <div className="h-72 bg-gray-100 relative cursor-pointer">
                <img
                  src={blog.banner}
                  alt={blog.slug}
                  className="object-cover object-center h-full w-full"
                />
                <p className="absolute top-0 left-0 h-full w-full grid place-items-center text-3xl text-center p-2 font-Roboto font-bold opacity-0 hover:opacity-100 ease-out duration-300 text-white z-20 bg-[rgba(12,12,12,0.40)] tracking-wide leading-wide">
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
            src={BlogPosts[3].banner}
            alt={BlogPosts[3].slug}
            className="object-cover object-center h-full w-full"
          />
          <p className="absolute top-0 left-0 h-full w-full grid place-items-center text-6xl font-Roboto font-bold opacity-0 hover:opacity-100 ease-out duration-300 text-white z-20 bg-[rgba(12,12,12,0.40)] text-center tracking-wid leading-wide">
            {BlogPosts[3].title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default BlogWidget;
