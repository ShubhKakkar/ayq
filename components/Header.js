import Link from "next/link";
import React from "react";
// Icons
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const headerList = [
    { name: "About Us", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "What's Within", link: "/process" },
    { name: "Contact Us", link: "/contact" },
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
        <Link href="/auth/signin">
          <div
            className="cursor-pointer text-dark font-bold"
            style={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            <AiOutlineUser />
          </div>
        </Link>
        <Link href="/cart">
          <div
            className="cursor-pointer text-dark font-bold"
            style={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            <AiOutlineShoppingCart />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
