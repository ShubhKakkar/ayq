import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../contexts/store";
import { useSession } from "next-auth/react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const cart = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [cart, addToCart, updateQuantity, removeFromCart, clearCart] =
    useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_TEST_KEY
  );
  let totalAmount = 0;
  for (let i = 0; i < cart.length; i++) {
    totalAmount += cart[i].price * cart[i].quantity;
  }
  totalAmount = Math.round(totalAmount * 100 + Number.EPSILON) / 100;
  let totalQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    totalQuantity += cart[i].quantity;
  }
  const taxPrice = 2;
  const shippingPrice = 5;

  // handleOrder
  const handleOrder = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const datas = {
      user_id: session.user._id,
      orderItems: cart,
      itemsPrice: totalAmount,
      shippingPrice,
      taxPrice,
      totalPrice: totalAmount + taxPrice + shippingPrice,
    };
    clearCart();
    const checkOutSession = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datas),
    });
    const response = await checkOutSession.json();
    // Redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: response.id,
    });

    if (result.error) {
      toast.error(result.error.message);
    }
  };
  return (
    <div className="py-24 md:py-28 md:max-w-7xl md:mx-auto px-4 md:px-0 min-h-[calc(100vh-80px)]">
      <Head>
        <title>AyQ Beverages-Cart</title>
        <meta name="description" content={`AyQ Beverages website cart page`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-semibold uppercase">Your cart</h2>
        <p className="text-sm dark:text-gray-400">
          Total Quantity: {totalQuantity}
        </p>
        {cart.length === 0 ? (
          <h2>No products in cart!</h2>
        ) : (
          <>
            <ul className="flex flex-col divide-y divide-gray-700">
              {cart.map((item) => {
                return (
                  <li
                    key={item.slug}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={item.images[0]}
                        alt={item.name}
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <Link href={`/products/${item.slug}`}>
                              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                {item.name}
                              </h3>
                            </Link>
                            <p className="text-sm dark:text-gray-400">
                              {item.category}
                            </p>
                            <p className="flex items-center gap-2">
                              <button
                                className="font-sm bg-orange-400 text-white px-2 py-2"
                                onClick={() => {
                                  updateQuantity(item, item.quantity + 1);
                                }}
                              >
                                <AiOutlinePlus />
                              </button>
                              <button
                                className="font-sm bg-red-400 text-white px-2 py-2"
                                onClick={() => {
                                  if (item.quantity <= 1) {
                                    removeFromCart(item);
                                    return;
                                  }
                                  updateQuantity(item, item.quantity - 1);
                                }}
                              >
                                <AiOutlineMinus />
                              </button>
                            </p>
                          </div>
                          <div className="text-right flex md:items-center gap-2">
                            <p className="text-sm md:text-lg font-semibold">
                              Quantity: {item.quantity}
                            </p>
                            <p className="text-sm md:text-lg font-semibold">
                              ${item.price}
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                            onClick={() => {
                              removeFromCart({ ...item });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">${totalAmount}</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
          </>
        )}
        <div className="flex justify-end space-x-4 mt-4">
          <Link
            href="/products"
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </Link>
          {cart.length > 0 && (
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-red-400 dark:border-red-400 text-white"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              session ? handleOrder() : router.push("/auth/signin");
            }}
            className={`px-6 py-2 border rounded-md dark:text-gray-9000 ${
              cart.length === 0
                ? "disaled bg-gray-400 border-gray-400 pointer-events-none"
                : "dark:bg-violet-400 dark:border-violet-40 text-white"
            } `}
            role="link"
          >
            <span className="sr-only sm:not-sr-only">
              {loading ? "Loading" : "Place Order"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default cart;
