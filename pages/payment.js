import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import CheckoutWizard from "../components/CheckoutWizard";
import { StoreContext } from "../contexts/store";

const Payment = () => {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    shippingAddress,
    saveShippingAddress,
    savePaymentMethod
  ] = useContext(StoreContext);
  useEffect(() => {
    if (!shippingAddress.address) {
      router.push("/shipping");
    }
    if(localStorage.getItem("paymentMethod")){
        setSelectedPaymentMethod(localStorage.getItem("paymentMethod"));
    }
  });
  const paymentHandler = (payment) => {
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method");
      return;
    }
    router.push("/placeorder");
  };
  return (
    <div className="md:py-28 md:max-w-7xl md:mx-auto px-4 md:px-0 py-24">
      <CheckoutWizard activeStep={2} />
      <div>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {["Paypal", "Stripe"].map((payment, index) => {
          return (
            <div key={payment} className="mb-4">
              <input
                type="radio"
                name="payment"
                className="p-2 outline-none focus:ring-0"
                id={payment}
                checked={selectedPaymentMethod === payment}
                onChange={() => {
                  setSelectedPaymentMethod(payment);
                  savePaymentMethod(payment);
                }}
              />
              <label className="p-2" htmlFor={payment}>
                {payment}
              </label>
            </div>
          );
        })}
        <div className="w-full flex items-center justify-between">
        <button
          className="default-button"
          onClick={() => {
            router.push("/shipping");
          }}
          type="button"
        >
          Back
        </button>
        <button
          className="primary-button"
          onClick={() => {
            paymentHandler();
          }}
          type="button"
        >
          Next
        </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
