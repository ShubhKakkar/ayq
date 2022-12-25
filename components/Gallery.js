import React from "react";

const Gallery = ({ url }) => {
  return (
    <section className="overflow-hidden text-gray-700 ">
      <div className="container py-2 lg:pt-6">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={url?url:"https://source.unsplash.com/random/480x360?1"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
