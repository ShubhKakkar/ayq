import React from "react";

// React-Icons
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  return <button title="Go To Top"
  className="fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-orange-400 text-white text-3xl font-bold grid place-items-center" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
    <AiOutlineArrowUp className="text-white" />
  </button>;
};

export default ScrollToTop;
