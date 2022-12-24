import React from "react";

const Content = ({ data }) => {
  if (!data) {
    return;
  }
  const words = data?.title?.split(" ");
  const direction = data?.direction;
  let firstWord;
  let remainingWords;
  if (words) {
    firstWord = words[0];
    words.shift();
    remainingWords = words.join(" ");
  }
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-16 min-h-screen">
        <div
          className={
            direction === "rtl"
              ? "relative basis-1/2 order-2"
              : "relative basis-1/2"
          }
        >
          <img
            className={
              data.imageType === "contain"
                ? "object-contain h-full w-full object-center"
                : "object-cover h-full w-full object-center"
            }
            alt="about-hero"
            src={data.url ? data.url : ""}
          />
        </div>
        <div className="basis-1/2 mt-12">
          {data.title ? (
            <h2
              className={
                direction === "rtl"
                  ? "uppercase text-7xl font-bold leading-snug"
                  : "uppercase text-7xl font-bold leading-snug relative right-48"
              }
            >
              <span className="transparentText">{firstWord}</span>{" "}
              {remainingWords}
            </h2>
          ) : (
            ""
          )}
          {data.normalTitle ? (
            <h2
              className={
                direction === "rtl"
                  ? "uppercase text-4xl font-bold leading-snug"
                  : "uppercase text-4xl font-bold leading-snug"
              }
            >
              {data.normalTitle}
            </h2>
          ) : (
            ""
          )}
          <p className="uppercase text-lg font-bold text-orange-400 mt-12 tracking-widest leading-loose">
            {data.subTitle ? data.subTitle : ""}
          </p>
          <div className="text-lg font-Roboto font-medium leading-loose mt-4" dangerouslySetInnerHTML={{ __html: data.description ? data.description : "" }} />
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
