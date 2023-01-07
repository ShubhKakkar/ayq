import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { toast } from "react-toastify";
import draftToHtml from "draftjs-to-html";
import parse from "html-react-parser";
import { getSession, useSession } from "next-auth/react";
import moment from "moment";
import Router, { useRouter } from "next/router";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

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
  const { slug } = context.params;
  let post;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/blog/${slug}`);
    post = await res.json();
  } catch (err) {
    console.log(err);
  }
  if (!post) {
    return {
      redirect: {
        destination: "/admin/blog",
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

const Update = ({ post }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState(post.title);
  const [slug, setSlug] = useState(post.slug);
  const [category, setCategory] = useState(post.category.join(","));
  const [thumbnail, setThumbnail] = useState(post.thumbnail);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // useEffect(() => {
  //   if (post && post.description) {
  //     setEditorState(
  //       EditorState.createWithContent(
  //         convertFromRaw(post.description)
  //       )
  //     );
  //   }
  // });

  function convertToSlug(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handlePostUpdation = async () => {
    if (!title) {
      toast.error("Please enter a title");
      return null;
    }
    if (!thumbnail) {
      toast.error("Please enter a thumbnail");
      return null;
    }

    const slugData = slug || convertToSlug(title);
    const description = convertToRaw(editorState.getCurrentContent());

    const response = await fetch("/api/blog/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: post._id,
        title,
        slug: slugData,
        category: category
          .split(/[\s,]+/)
          .map((category) => category.toLowerCase()),
        thumbnail,
        description,
        author: session?.user?.name,
        comments: post.comments,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      toast.success("Post updated successfully");
      router.push("/admin/blog");
    } else {
      toast.error(res.error);
    }
  };

  const handleDeletePost = async () => {
    const response = await fetch(`/api/blog/${post.slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: post.slug,
      }),
    });
    const res = await response.json();
    if (!res.error) {
      toast.success("Post deleted successfully");
      router.push("/admin/blog");
    } else {
      toast.error(res.error.message);
    }
  };

  return (
    <div className="pt-24 md:pt-24 min-h-screen mx-auto md:max-w-7xl px-4 md:px-0 flex items-start gap-4">
      <div className="basis-1/2">
        <h1 className="text-3xl">Update Blog</h1>
        <div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Blog title"
              className="block w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="slug"
              className="block w-full"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Category"
              className="block w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <input
              type="url"
              placeholder="Thumbnail"
              className="block w-full"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="block w-full h-96 border px-2"
              placeholder="Description"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button className="primary-button" onClick={handlePostUpdation}>
              Submit
            </button>
            <button
              className="text-white py-2 px-4 rounded bg-red-400 hover:bg-red-500 ease-in-out duration-300"
              onClick={handleDeletePost}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="basis-1/2 h-[calc(100vh-80px)] overflow-y-scroll bg-gray-100 p-8 hide-overflow">
        <div className="bg-white shadow-lg p-4">
          <article
            className=""
            itemID="#"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <div>
              <img
                src={
                  thumbnail ||
                  "https://images.unsplash.com/photo-1655635949212-1d8f4f103ea1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8M2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                }
                className="object-cover w-full h-64 bg-center"
                alt="Kutty"
              />
              <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
                {slug ? slug : title ? convertToSlug(title) : "Development"}
              </p>
              <h1
                className="mb-3 uppercase text-3xl font-bold tracking-wide text-dark md:text-2xl"
                itemProp="headline"
                title="Rise of Tailwind - A Utility First CSS Framework"
              >
                {title || "Rise of Tailwind - A Utility First CSS Framework"}
              </h1>
              <div className="flex mb-4 space-x-2">
                {category
                  ?.split(/[\s,]+/)
                  .map((category) => category.toLowerCase())
                  ?.map((e, index) => {
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
                    {session?.user?.name}
                  </p>
                  <p className="text-sm text-orange-400 font-semibold">
                    {moment.utc(post.createdAt).format("DD-MM-YY")}
                  </p>
                </div>
              </a>
            </div>

            <div className="w-full mx-auto text-md md:text-md  mt-4 font-medium leading-loose">
              {parse(
                draftToHtml(convertToRaw(editorState.getCurrentContent()))
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Update;
