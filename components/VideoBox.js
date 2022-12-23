import Link from "next/link";
import React from "react";

const VideoBox = ({ data }) => {
  const {
    url,
    text1,
    text2,
    shopNow,
    shopUrl,
    subText,
    subDescription,
    subButtonText1,
    subButtonText2,
    subButton1Url,
    subButton2Url,
    overlay
  } = data;
  return (
    <div className="h-screen w-full overflow-hidden relative">
      {overlay?<div className="h-screen w-screen absolute top-0 left-0 bg-gradient-to-b from-transparent to-dark"></div>:""}
      <video
        autoplay="autoplay"
        loop={true}
        muted={true}
        className="w-screen h-screen object-cover"
      >
        <source src={url?url:""} type="video/mp4" />
      </video>
      <div className="h-screen w-screen absolute top-0 left-0 grid place-items-center text-center">
        <div className="relative bottom-8">
          <h1 className="text-8xl uppercase font-extrabold text-white font-Roboto">
            {text1 ? text1 : ""}
          </h1>
          <h2 className="text-8xl uppercase font-extrabold text-white font-Roboto">
            {text2 ? text2 : ""}
          </h2>
          {shopNow === "true" ? (
            <div className="mt-6">
              <Link href={shopUrl?shopUrl:""}>
                <span className="border border-white bg-transparent text-white text-md font-Roboto uppercse px-6 py-3 hover:bg-white hover:text-dark duration-300 ease-in-out uppercase font-bold">
                  Shop Now
                </span>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {subText ? (
        <div className="h-screen w-screen absolute left-0 top-0 grid place-items-center">
          <div className="absolute bottom-20 left-8">
            <h2 className="text-3xl uppercase font-bold text-white font-Roboto pb-4 max-w-[40vw] leading-tight">
              {subText}
            </h2>
            <p className="text-md font-medium text-white font-Roboto w-96">
              {subDescription ? subDescription : ""}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {subButtonText1 ? (
                <Link href={subButton1Url ? subButton1Url : ""}>
                  <span className="border border-white bg-transparent text-white text-md font-Roboto uppercse px-6 py-3 hover:bg-white hover:text-dark duration-300 ease-in-out uppercase font-bold">
                    {subButtonText1}
                  </span>
                </Link>
              ) : (
                ""
              )}
              {subButtonText2 ? (
                <Link href={subButton2Url ? subButton2Url : ""}>
                  <span className="border border-white bg-transparent text-white text-md font-Roboto uppercse px-6 py-3 hover:bg-white hover:text-dark duration-300 ease-in-out uppercase font-bold">
                    {subButtonText2}
                  </span>
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VideoBox;
