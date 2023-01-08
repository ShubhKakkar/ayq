import Link from "next/link";
import React, { useState, useContext } from "react";
import { StoreContext } from "../contexts/store";
import { signOut, useSession } from "next-auth/react";
import { Menu } from "@headlessui/react";
import DropdownLink from "./DropdownLink";

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
  const { data: session } = useSession();
  const [cart, addToCart, updateQuantity, removeFromCart, clearCart] =
    useContext(StoreContext);
  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
  }
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
      <div className="links flex-1 text-right space-x-8 o uppercase hidden md:block">
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
        <Link href="/cart">
          <div
            className="cursor-pointer text-dark font-bold flex items-center"
            style={{ fontWeight: "bold", fontSize: "1.3rem" }}
          >
            <AiOutlineShoppingCart />
            {cart.length > 0 && (
              <span className="h-5 w-5 rounded-full bg-red-600 text-white text-[10px] grid place-items-center relative bottom-3 p-1">
                {totalQuantity}
              </span>
            )}
          </div>
        </Link>
        {session ? (
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="text-orange-400 text-md font-semibold">
              {session.user.name}
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-56 origin-top-right shadow-lg">
              <Menu.Item>
                <DropdownLink className="dropdownLink" href="/user/profile">
                  Profile
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdownLink" href="/orders">
                  Order history
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdownLink" href="/user/details">
                  Login & Security
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <DropdownLink className="dropdownLink" href="/user/queries">
                  Contact Us
                </DropdownLink>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="dropdownLink w-full"
                  onClick={() => {
                    signOut();
                    clearCart();
                    localStorage.removeItem("shippingAddress");
                    localStorage.removeItem("paymentMethod");
                  }}
                >
                  Logout
                </button>
              </Menu.Item>
            </Menu.Items>
          </Menu>
        ) : (
          <Link
            href="/auth/signin"
            className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-500 active:shadow-lg transition duration-150 ease-in-out"
          >
            Log In
          </Link>
        )}
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
      <div
        className={`absolute top-0 left-0 h-full w-full ${
          mobileMenu
            ? "transfrom -translate-y-0 ease-in-out duration-700 saturate-200 backdrop-blur-xl"
            : "transfrom -translate-y-[100vh] ease-in-out duration-700"
        }`}
      >
        <MobileMenu setMobileMenu={setMobileMenu} headerList={headerList} />
      </div>
    </header>
  );
};

export default Header;
