import { useState } from "react";

// Icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Carousel = () => {
  const [pointer, setPointer] = useState(0);
  const images = [
    "https://www.celsius.com/wp-content/uploads/2022/04/Arctic-Vibe-Desktop.jpg",
    "https://www.celsius.com/wp-content/uploads/2022/12/Lemon-Lime-Desktop.jpg",
    "https://www.celsius.com/wp-content/uploads/2022/04/strawberry-lemonade-desktop.jpg",
    "https://www.celsius.com/wp-content/uploads/2022/02/1920x980_SW_homepage-1.jpg",
  ];

  const handlePointerLeft = () => {
    pointer <= 0 ? setPointer(images.length - 1) : setPointer(pointer - 1);
  };

  const handlePointerRight = () => {
    pointer >= images.length-1 ? setPointer(0) : setPointer(pointer + 1);
  };

  setInterval(() => {
    handlePointerRight;
  },8000)

  return (
    <div className="h-[50vh] md:h-full relative">
      <div
        className="bg-dark hover:bg-orange-400 ease-in-out duration-300 absolute p-2 top-[23.5vh] md:top-[50vh] cursor-pointer z-10 carousel__left"
        onClick={handlePointerLeft}
      >
        <BsArrowLeft className="text-6xl text-white font-light relative left-6 hover:left-3 hover:text-white ease-in-out duration-300" />
      </div>
      <div className="h-full flex overflow-x-hidden relative bg-['/images/apple/apple-bg.jpg'] object-top">
        {images.map((url, index) => {
          return (
            <div key={index} className="h-full w-screen flex-shrink-0 duration-1000 ease-in-out" style={{transform: `translateX(${-100*pointer}vw)`}}>
              <img
                src={url}
                alt={`carousel-image-${index}`}
                className="w-screen h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      <div className="bg-dark hover:bg-orange-400 ease-in-out duration-300 absolute p-2 top-[23.5vh] md:top-[50vh] right-0 cursor-pointer z-10">
        <BsArrowRight
          onClick={handlePointerRight}
          className="text-6xl text-white font-light relative right-6 hover:right-3 ease-in-out duration-300 carousel__right"
        />
      </div>
    </div>
  );
};

export default Carousel;
