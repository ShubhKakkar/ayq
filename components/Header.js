import Link from "next/link";
import React, { useState } from "react";

// Icons
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

// Components
import Avatar from "./Avatar";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const headerList = [
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "What's Within", link: "/process" },
    { name: "Blog", link: "/blog" },
    { name: "Locate Us", link: "/contact" },
  ];
  return (
    <header className="h-[80px] flex items-center gap-8 p-0 md:px-8 bg-light fixed top-0 left-0 right-0 z-20 bg-white w-screen">
      <div className="logo">
        <Link href="/">
          <img
            src="/logo-whitebg.jpg"
            alt="logo"
            className="h-[80px] w-auto cursor-pointer"
          />
        </Link>
      </div>
      <div className="links flex-1 text-right space-x-8 font-Roboto uppercase hidden md:block">
        {headerList.map((target) => {
          return (
            <Link
              key={target.name}
              href={target.link}
              className="text-md font-bold text-dark"
            >
              {target.name}
            </Link>
          );
        })}
      </div>
      <div className="user md:flex items-center gap-8 hidden">
        <Link href="/user/profile">
          <Avatar
            url="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            size={8}
          />
        </Link>
        <Link href="/cart">
          <div
            className="cursor-pointer text-dark font-bold"
            style={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            <AiOutlineShoppingCart />
          </div>
        </Link>
        <Link
          href="/auth/signin"
          className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
        >
          Log In
        </Link>
        <button className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out">
          Log Out
        </button>
      </div>
      <AiOutlineMenu
        className="text-2xl md:text-xl font-bold cursor-pointer md:hidden absolute top-6 right-4"
        onClick={() => {
          setMobileMenu(true);
        }}
      />
      {/* {
        mobileMenu?<MobileMenu setMobileMenu={setMobileMenu} headerList={headerList} />:""
      } */}
      <div className={`absolute top-0 left-0 h-full w-full ${mobileMenu ? "transfrom -translate-y-0 ease-in-out duration-700 saturate-200 backdrop-blur-xl" : "transfrom -translate-y-[100vh] ease-in-out duration-700"}`}>
        <MobileMenu setMobileMenu={setMobileMenu} headerList={headerList} />
      </div>
    </header>
  );
};

export default Header;
