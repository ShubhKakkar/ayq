import React from "react";
import { getSession, useSession } from "next-auth/react";
import Order from "../../components/Order";
import Head from "next/head";

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY);

  const session = getSession(context);
  if (!session) return { props: {} };

  const stripeOrders = await fetch(`${process.env.NEXT_AUTH_URL}/api/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: context.req.headers.cookie,
    },
  });
  const allOrders = await stripeOrders.json();
  const orders = await Promise.all(
      allOrders.map(async(order) => ({
        id: order.checkout_id,
        amount: order.amount,
        amountShipping:order.shippingRate || 3,
        images: order.images,
        timestamp: order.createdAt,
        // items: (
        //   await stripe.checkout.sessions.listLineItems(order.checkout_id, {
        //     limit: 100
        //   }).data
        // )
      }))
  )
  return {
    props: {
      orders: orders,
    },
  };
}

const Index = ({orders}) => {
  const { data: session } = useSession();
  return (
    <div className="pt-24 px-4 md:px-0 md:max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
      <Head>
        <title>AyQ-Orders</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="AyQ Beverages-About" />
      </Head>
      <h1 className="text-3xl md:text-5xl border-b mb-2 pb-1 border-orange-400">
        Your Orders
      </h1>
      {session ? (
        <>
          <h2>{orders.length} Orders</h2>
          {orders?.map((item) => {
            return <Order key={item.id} item={item} />;
          })}
        </>
      ) : (
        <h2>Please sign in to see your orders</h2>
      )}
      <div className="mt-5 space-y-4"></div>
    </div>
  );
};

export default Index;
