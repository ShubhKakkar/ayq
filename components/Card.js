import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import moment from "moment";

const Card = ({ data }) => {
  if(!data) {return}
  return (
    <div className="grid w-full">
      <div className="bg-gray-100 max-w-sm">
        <Link href={`/blog/${data.slug?data.slug:"/"}`}>
          <img src={data.thumbnail?data.thumbnail:""} alt="" className="h-48 w-full object-cover" />
        </Link>
        <div className="p-4 md:p-6 flex flex-col md:h-[500px]">
          <h2 className="text-dark flex-[1]  text-xl md:text-lg font-semibold mb-2 uppercase">
            {data.title?data.title:""}
          </h2>
          <div className="flex-[1] mt-2">
                  <p className="text-sm font-semibold text-gray-800">
                    {data?.author}
                  </p>
                  <p className="text-xs text-orange-400 font-semibold">
                    {moment.utc(data?.createdAt).format("DD-MM-YY")}
                  </p>
                </div>
          <div className="text-dark text-base mb-4 text-md h-[250px] mt-4 md:mt-0 md:flex-[6] font-medium leading-relaxed text-ellipsis overflow-hidden">
            {parse(data?.description)}
          </div>
          <Link
            href={`/blog/${data?.slug}`}
            type="button"
            className="inline-block max-w-fit px-6 py-3 bg-orange-400 text-white font-medium text-xs leading-tight uppercase hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out mt-2"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
