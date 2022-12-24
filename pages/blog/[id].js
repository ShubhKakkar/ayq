import React from "react";

const SingleBlog = () => {
  return (
    <article
      className="px-4 py-24 mx-auto max-w-7xl font-Roboto"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <div className="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1593023669551-3c9cb301ce81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="object-cover w-full h-64 bg-center"
          alt="Kutty"
        />
        <p className="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary">
          Development
        </p>
        <h1
          className="mb-3 uppercase text-4xl font-bold leading-snug text-dark md:text-4xl"
          itemprop="headline"
          title="Rise of Tailwind - A Utility First CSS Framework"
        >
          Rise of Tailwind - A Utility First CSS Framework
        </h1>
        <div className="flex mb-6 space-x-2">
          <a
            className="t-dark bg-white badge hover:bg-gray-100 ease-in-out duration-300"
            href="#"
          >
            CSS
          </a>
          <a
            className="t-dark bg-white badge hover:bg-gray-100 ease-in-out duration-300"
            href="#"
          >
            Tailwind
          </a>
          <a
            className="text-dark bg-white badge hover:bg-gray-100 ease-in-out duration-300"
            href="#"
          >
            AlpineJS
          </a>
        </div>
        <a className="flex items-center text-gray-700" href="#">
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Photo of Praveen Juge"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>
          <div className="ml-2">
            <p className="text-sm font-semibold text-gray-800">Praveen Juge</p>
            <p className="text-sm text-gray-500">Jan 02 2021</p>
          </div>
        </a>
      </div>

      <div className="w-full mx-auto text-lg font-Roboto font-medium leading-loose md:w-3/4 lg:w-1/2">
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let's find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          'utility'. It is basically a set of classNamees that you can use in
          your HTML.
        </p>
        <p>
          Therefore, we don't have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
      </div>
    </article>
  );
};

export default SingleBlog;
