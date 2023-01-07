import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { getSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import parse from 'html-react-parser';

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
  const response = await fetch(`${process.env.NEXT_AUTH_URL}/api/blog`);
  const blogs = await response.json();
  return {
    props: {
      session,
      blogs,
    },
  };
}

const index = ({ session, blogs }) => {
  return (
    <div className="pt-24 md:pt-24 min-h-[calc(100vh-80px)] mx-auto md:max-w-7xl px-4 md:px-0 flex items-start gap-4">
      <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-3 my-6">
        {blogs.map((blog) => {
          return (
            <Link key={blog._id} href={`/admin/blog/${blog.slug}`}>
              <div className="p-4 h-[500px] card relative text-ellipsis overflow-hidden">
                <img
                  src={blog.thumbnail}
                  className="h-48 w-full object-cover border-b"
                />
                <p className="text-xs mt-2">{blog.slug}</p>
                <h2 className="text-lg mt-2 font-semibold mb-2">
                  {blog.title}
                </h2>
                <p className="text-xs absolute top-2 right-2 shadow bg-white p-1 rounded truncate">
                  {blog._id}
                </p>
                <div className="h-[150px] w-full">
                  {parse(draftToHtml(blog.description))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default index;
