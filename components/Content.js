import React from "react";
import { motion } from "framer-motion";

const Content = ({ data, children }) => {
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
    <div className="md:max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:gap-16 md:min-h-screen">
        <div
          className={
            direction === "rtl"
              ? "relative basis-1/2 order-2"
              : "relative basis-1/2 order-2 md:order-none"
          }
        >
          <motion.img
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              bounce: 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
            className={
              data.imageType === "contain"
                ? "object-contain h-72 md:h-full w-full object-center md:mb-0"
                : "object-cover h-72 md:h-full w-full object-center md:mb-0"
            }
            alt="about-hero"
            src={data.url ? data.url : ""}
          />
        </div>
        <div className="basis-1/2 md:mt-12">
          {data.title ? (
            <h2
              className={
                direction === "rtl"
                  ? "uppercase text-6xl md:text-7xl font-bold leading-snug"
                  : "uppercase text-6xl md:text-7xl font-bold leading-snug"
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
                  ? "uppercase text-3xl md:text-4xl font-bold leading-snug"
                  : "uppercase text-3xl md:text-4xl font-bold leading-snug"
              }
            >
              {data.normalTitle}
            </h2>
          ) : (
            ""
          )}
          <p className="uppercase md:text-lg font-bold text-orange-400 mt-4 md:mt-12 tracking-widest leading-loose">
            {data.subTitle ? data.subTitle : ""}
          </p>
          <p className="text-md md:text-lg o font-medium leading-loose mt-4">
            {children}
          </p>
          {data.buttonText ? (
            <button className="bg-orange-400 hover:bg-orange-500 ease-in-out duration-300 px-8 py-3 font-bold text-lg tracking-widest text-white uppercase my-4 md:mt-12">
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
