import React from "react";

const Content = ({ data }) => {
  if (!data) {
    return;
  }
  const words = data?.title?.split(" ");
  const direction = data?.direction;
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-top gap-16 h-screen">
        <div
          className={
            direction === "rtl"
              ? "h-full relative basis-1/2 order-2"
              : "h-full relative basis-1/2"
          }
        >
          <img
            class={
              data.imageType === "contain"
                ? "object-contain h-full w-full object-center"
                : "object-cover h-full w-full object-center"
            }
            alt="about-hero"
            src={data.url ? data.url : ""}
          />
        </div>
        <div className="basis-1/2 mt-12">
          <p
            className={
              direction === "rtl"
                ? "uppercase text-7xl font-bold leading-snug"
                : "uppercase text-7xl font-bold leading-snug relative right-48"
            }
          >
            <span className="transparentText">
              {data.title ? words[0] : ""}
            </span>{" "}
            {data.title ? words[(1, words.length - 1)] : ""}
          </p>
          <p className="uppercase text-lg font-bold text-orange-400 mt-12 tracking-widest leading-loose">
            {data.subTitle ? data.subTitle : ""}
          </p>
          <p className="text-lg font-Roboto font-medium leading-loose mt-4">
            {data.description ? data.description : ""}
          </p>
          {data.buttonText ? (
            <button className="bg-orange-400 hover:bg-orange-500 ease-in-out duration-300 px-8 py-3 font-bold text-lg tracking-widest text-white uppercase mt-12">
              {data.buttonText}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
