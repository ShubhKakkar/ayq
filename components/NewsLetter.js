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
    <div className="py-[120px] h-full max-w-7xl mx-auto">
      <div>
        <p className="uppercase text-md text-orange-400 font-Roboto font-[600] text-center tracking-widest">
          JOIN THE CELSIUS NEWS LETTER
        </p>
        <p className="text-white text-4xl px-24 font-Roboto font-bold my-4 text-center mx-auto leading-tight">
          SIGN UP TO GET FIRST ACCESS AND UPDATES ABOUT PRODUCTS, EVENTS AND
          MORE.
        </p>
      </div>
      <div className="text-center my-12">
        <input
          type="text"
          placeholder="Enter Email"
          className="bg-transparent border-white border-2 p-3 text-md tracking-widest uppercase pl-8 text-white w-[30vw] focus:outline-none placeholder:text-white font-Roboto"
        />
        <button className="bg-orange-400 ml-2 py-3 px-6 text-white text-lg tracking-widest uppercase font-bold font-Roboto relative bottom-[0px] hover:bg-orange-500 ease-in-out duration-300 border-2 border-orange-400 hover:border-orange-500">
          Submit
        </button>
      </div>
      <div>
        <div className="text-center my-12 border-2 border-white h-24 flex items-center">
          <div className="basis-2/5 h-full flex items-center justify-around border-r border-white">
            <FaFacebookF className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
            <FaInstagram className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
            <FaTwitter className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
            <FaYoutube className="text-3xl text-white hover:text-orange-400 ease-in-out duration-300" />
          </div>
          <div className="basis-3/5 h-full flex items-center justify-around">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.url}
                  className="text-sm font-Roboto font-semibold tracking-widest text-white uppercase cursor-pointer hover:text-orange-400 ease-in-out duration-300"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
