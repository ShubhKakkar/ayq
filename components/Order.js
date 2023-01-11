import React from "react";
import moment from "moment";
import Link from "next/link";

const Order = ({ item }) => {
  return (
    <div className="relative border rounded-md my-4">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">Order Placed</p>
          <p>{moment.utc(item.timestamp).format("DD-MM-YY")}</p>
        </div>
        <div>
          <p>Total</p>
          <p>
            ${item.amount} Next Day Delivery - {item.amountShipping || "$3"}
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {item.length}
        </p>
        <p className="hidden md:block absolute top-2 right-2 width-40 lg:w-72 truncate text-xs whitespace-nowrap">
          Order # {item.id}
        </p>
      </div>
      <div className="p-5 sm:p-4">
        <div className="overflow-x-auto">
          {item.products.map((product, index) => {
            return (
              <div className="p-2 flex items-center gap-4">
                <Link href={`/products/${product.slug}`} className="hover:scale-105 ease-in-out duration-300 hover:shadow-md">
                  <img
                    src={item.images[index]}
                    alt=""
                    className="h-16 w-16 md:w-20 object-cover rounded shadow sm:h-20"
                  />
                </Link>
                <div>
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                  <p className="text-xs">{product.slug}</p>
                  <p className="text-xs">quantity: {product.quantity}</p>
                  <p className="text-xs">Total price: ₹ {product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Order;
