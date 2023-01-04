import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getServerSideProps(context) {
  const { _id } = context.params;
  let orderDetails;
  try {
    const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/orders/${_id}`);
    orderDetails = (await res.json());
  } catch (err) {
    console.log(err);
  }
  return {
    props: {
      orderDetails,
    },
  };
}

const SingleOrder = ({ orderDetails }) => {
  if(!orderDetails) {
    return (
      <div className="md:pt-28 md:max-w-7xl md:mx-auto px-4 md:px-0 pt-12">
        <h1 className="mb-4 text-xl">No such order found</h1>
      </div>
    )
  }
  else{
    console.log(orderDetails);
    return (
      <div className="md:pt-28 md:max-w-7xl md:mx-auto px-4 md:px-0 pt-12">
        <h1 className="mb-4 text-xl">Order {orderDetails[0]._id}</h1>
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <div className="card p-5">
              <h2 className="mb-2 text-lg">Shipping Address</h2>
              <div>
                {orderDetails[0].shippingAddress.name},{" "}
                {orderDetails[0].shippingAddress.address},{" "}
                {orderDetails[0].shippingAddress.city},
                {orderDetails[0].shippingAddress.postalCode} ,
                {orderDetails[0].shippingAddress.country}
              </div>
              <div className="text-white bg-red-400 p-3 md:p-4 mt-3">
                Not dispatched
              </div>
            </div>
            <div className="card p-5">
              <h2 className="mb-2 text-lg">Payment Method</h2>
              <h2>{orderDetails[0].paymentMethod}</h2>
              <div className="text-white bg-red-400 p-3 md:p-4 mt-3">
                Payment not completed
              </div>
            </div>
            <div className="card p-5">
            <h2 className="mb-2 text-lg">Order Items</h2>
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="text-left text-sm md:text-base p-2">Item</th>
                  <th className="text-left text-sm md:text-base p-2">Quantity</th>
                  <th className="text-left text-sm md:text-base p-2">Price</th>
                  <th className="text-left text-sm md:text-base p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails[0].orderItems.map((item) => {
                  return (
                    <tr key={item._id} className="border-b">
                      <td className="py-2">
                        <Link href={`/products/${item.slug}`}>
                          <span className="flex items-center text-xs md:text-base">
                            <Image
                              src={item.images[0]}
                              alt={item.name}
                              width={50}
                              height={50}
                              className="hidden md:block w-8 h-8 mr-4 md:h-12 md:w-12 object-cover rounded-full"
                            />
                            &nbsp;{item.name}
                          </span>
                        </Link>
                      </td>
                      <td className="md:p-5 md:text-left text-xs md:text-base text-center py-2">{item.quantity}</td>
                      <td className="md:p-5 md:text-left text-xs md:text-base text-center py-2">${item.price}</td>
                      <td className="md:p-5 md:text-left text-xs md:text-base text-center py-2">
                        ${item.quantity * item.price}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-4">
              <Link href="/cart">Edit</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SingleOrder;
