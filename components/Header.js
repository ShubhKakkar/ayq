import Link from "next/link";
import React from "react";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "./Avatar";

const Header = () => {
  const headerList = [
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "What's Within", link: "/process" },
    { name: "Blog", link: "/blog" },
    { name: "Locate Us", link: "/contact" },
  ];
  return (
    <header className="h-[80px] flex items-center gap-8 px-8 bg-light fixed top-0 left-0 right-0 z-20 bg-white w-screen">
      <div className="logo">
        <Link href="/">
          <img
            src="/logo-whitebg.jpg"
            alt="logo"
            className="h-[80px] w-auto cursor-pointer"
          />
        </Link>
      </div>
      <div className="links flex-1 text-right space-x-8 font-Roboto uppercase">
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
      <div className="user flex items-center gap-8">
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
        <button
          className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
        >
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
