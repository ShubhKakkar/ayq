import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { StoreContext } from "../contexts/store";

const MobileMenu = ({ setMobileMenu, headerList }) => {
  const { data: session } = useSession();
  const [cart, addToCart, updateQuantity, removeFromCart, clearCart] =
    useContext(StoreContext);
  return (
    <div className="absolute top-0 left-0 m-0 h-screen w-full mobileDark z-50 px-6 md:hidden text-white">
      <Link
        href="/"
        onClick={() => {
          setMobileMenu(false);
        }}
      >
        <img src="/logo-white.png" className="w-36 mt-4 mx-auto" />
      </Link>
      <div className="font-Lora font-medium flex flex-col mt-8 text-center">
        {headerList.map((tag, index) => {
          return (
            <Link
              key={index}
              href={tag.link}
              className="text-3xl relative mr-1 md:mr-0 py-4 border-dark font-semibold"
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              {tag.name}
            </Link>
          );
        })}
        <Link
          href="/cart"
          className="text-3xl py-4 border-dark"
          onClick={() => {
            setMobileMenu(false);
          }}
        >
          Cart
        </Link>
        <Link
          href="/user/profile"
          className="text-3xl py-4 border-dark"
          onClick={() => {
            setMobileMenu(false);
          }}
        >
          Profile
        </Link>
        {!session && (
          <Link
            href="/auth/signin"
            className="text-3xl py-4 border-dark"
            onClick={() => {
              setMobileMenu(false);
            }}
          >
            Login
          </Link>
        )}
        {session && (
          <button
            className="text-3xl py-4 border-dark"
            onClick={() => {
              signOut();
                clearCart();
                localStorage.removeItem("shippingAddress");
                localStorage.removeItem("paymentMethod");
            }}
          >
            Logout
          </button>
        )}
      </div>
      <AiOutlineClose
        className="absolute right-4 top-12 text-3xl"
        onClick={() => {
          setMobileMenu(false);
        }}
      />
    </div>
  );
};

export default MobileMenu;
