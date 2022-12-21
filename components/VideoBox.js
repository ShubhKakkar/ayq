import React from "react";

const VideoBox = ({ url, text1, text2 }) => {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="h-screen w-screen absolute top-0 left-0"></div>
      <video
        autoplay="autoplay"
        loop={true}
        muted={true}
        className="w-screen h-screen object-cover"
      >
        <source src={url} type="video/mp4" />
      </video>
      <div className="h-screen w-screen absolute top-0 left-0 grid place-items-center text-center">
        <div className="relative bottom-8">
          <h1 className="text-8xl uppercase font-extrabold text-white font-Roboto">
            {text1 ? text1 : ""}
          </h1>
          <h2 className="text-8xl uppercase font-extrabold text-white font-Roboto">
            {text2 ? text2 : ""}
          </h2>
          <button className="mt-4 border border-white bg-transparent text-white text-md font-Roboto uppercse px-6 py-3 hover:bg-white hover:text-dark duration-300 ease-in-out uppercase font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
