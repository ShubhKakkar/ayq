import React from "react";
import Link from "next/link";

// Social Icons
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NewsLetter = () => {
  const links = [
    {
      title: "Ambassadors",
      url: "/",
    },
    {
      title: "FAQ",
      url: "/",
    },
    {
      title: "Blog",
      url: "/blogs",
    },
    {
      title: "Accessibility Statment",
      url: "/",
    },
  ];
  return (
    <div className="bg-dark md:h-[calc(100vh-80px)]">
      <div className="p-4 pt-[60px] md:py-[120px] md:h-full md:max-w-7xl mx-auto">
        <div>
          <p className="uppercase text-md text-orange-400 o font-[600] text-left md:text-center tracking-widest">
            JOIN THE CELSIUS NEWS LETTER
          </p>
          <p className="text-white text-2xl md:text-4xl md:px-24 o font-bold my-4 text-left md:text-center mx-auto leading-snug md:leading-tight">
            SIGN UP TO GET FIRST ACCESS AND UPDATES ABOUT PRODUCTS, EVENTS AND
            MORE.
          </p>
        </div>
        <div className="text-left md:text-center my-6 md:my-12">
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-transparent border-white border-2 p-3 text-md tracking-widest uppercase pl-8 text-white w-3/4 md:w-[30vw] focus:outline-none placeholder:text-white o"
          />
          <button className="bg-orange-400 ml-1 px-1 md:ml-2 py-4 md:py-3 md:p-2 md:px-6 text-white text-sm md:text-lg tracking-widest uppercase font-bold o relative bottom-[0px] hover:bg-orange-500 ease-in-out duration-300 border-[1px] md:border-2 border-orange-400 hover:border-orange-500">
            Submit
          </button>
        </div>
        <div>
          <div className="text-left md:text-center md:my-12 border-2 border-white md:h-24 flex flex-col p-4 md:p-0 gap-8 md:gap-0 md:flex-row md:items-center">
            <div className="basis-2/5 h-full flex gap-16 md:gap-0 items-center justify-around border-r border-white">
              <FaFacebookF className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
              <FaInstagram className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
              <FaTwitter className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
              <FaYoutube className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
            </div>
            <div className="basis-3/5 h-full flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center justify-around">
              {links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.url}
                    className="text-sm o font-semibold tracking-widest text-white uppercase cursor-pointer hover:text-orange-400 ease-in-out duration-300"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
