import React from "react";

// React-Icons
import { AiOutlineArrowUp } from "react-icons/ai";

// framer-motion
import { motion } from "framer-motion";

const ScrollToTop = () => {
  return (
    <motion.button
      whileHover={{scale:1.05}}
      transition={{duration:0.5, ease:"easeInOut"}}
      title="Go To Top"
      className="fixed z-90 bottom-8 right-4 md:bottom-8 md:right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-orange-400 text-white text-3xl font-bold grid place-items-center"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <AiOutlineArrowUp className="text-white" />
    </motion.button>
  );
};

export default ScrollToTop;
