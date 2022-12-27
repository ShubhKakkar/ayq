import Head from "next/head";
import Link from "next/link";
import React from "react";

// Componentss
import ProductCarousel from "../../components/ProductCarousel";

const Profile = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Head>
        <title>AyQ-Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-Profile" />
      </Head>
      <section className="pt-24 px-4 md:px-0">
        <h1 className="uppercase text-3xl text-center md:text-4xl font-bold leading-snug">
          Hello Shubham Kakkar
        </h1>
      </section>
      <section>
        <div className="md:flex justify-between items-top flex-wrap mt-4 md:mt-12 px-4 md:px-0">
          <Link href="/user/orders" className="border border-gray-200 w-[400px]">
            <div className="h-48 p-4 flex items-center justify-center gap-4 max-w-[350px] mx-auto">
              <img
                src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png"
                alt="user-orders"
                className="w-24"
              />
              <div>
                <h1 className="text-xl font-Roboto font-semibold">
                  Your Orders
                </h1>
                <p className="text-xs font-Roboto font-medium leading-loose text-gray-500">
                  Track or return your orders
                </p>
              </div>
            </div>
          </Link>
          <Link href="/user/details" className="border border-gray-200 w-[400px]">
          <div className="h-48 p-4 flex items-center justify-center gap-4 max-w-[350px] mx-auto">
            <img
              src="https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png"
              alt="edit-user-profile"
              className="w-24"
            />
            <div>
              <h1 className="text-xl font-Roboto font-semibold">
                Login & Security
              </h1>
              <p className="text-xs font-Roboto font-medium leading-loose text-gray-500">
                Edit login, name and mobile number
              </p>
            </div>
          </div>
          </Link>
          <Link href="/user/queries" className="border border-gray-200 w-[400px]">
          <div className="h-48 p-4 flex items-center justify-center gap-4 max-w-[350px] mx-auto">
            <img
              src="https://m.media-amazon.com/images/G/31/x-locale/cs/help/images/gateway/self-service/contact_us._CB623781998_.png"
              alt="contact-us"
              className="w-20"
            />
            <div>
              <h1 className="text-xl font-Roboto font-semibold">Contact Us</h1>
              <p className="text-xs font-Roboto font-medium leading-loose text-gray-500">
                Contact us regarding order issues, replacment or queries.
              </p>
            </div>
          </div>
          </Link>
        </div>
      </section>
      <section className="px-4 md:px-0 mt-12">
        <h2 className="uppercase text-xl font-bold leading-snug mb-12">More Items to expolre</h2>
        <ProductCarousel />
      </section>
    </main>
  );
};

export default Profile;
