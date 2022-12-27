import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  if(!data) {return}
  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 max-w-sm">
        <Link href={`/blog/${data.slug?data.slug:"/"}`}>
          <img src={data.banner?data.banner:""} alt="" />
        </Link>
        <div className="p-6">
          <h2 className="text-dark  text-xl font-semibold mb-2 uppercase">
            {data.title?data.title:""}
          </h2>
          <span className="uppercase text-xs font-semibold text-orange-400 mt-12 tracking-widest leading-loose">
            {data.subTitle?data.subTitle:""}
          </span>
          <p className="text-dark text-base mb-4 text-md o font-medium leading-relaxed mt-4">
            {data.description?data.description:""}
          </p>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
          >
            {data.buttonText?data.buttonText:""}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
