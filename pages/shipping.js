import React, { useContext, useEffect, useRef } from "react";
import { getSession, useSession } from "next-auth/react";
import CheckoutWizard from "../components/CheckoutWizard";
import { toast } from "react-toastify";
import { StoreContext } from "../contexts/store";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

const Shipping = ({ session }) => {
  const { data: data } = useSession();
  const router = useRouter();
  const [
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    shippingAddress,
    saveShippingAddress,
  ] = useContext(StoreContext);
  useEffect(() => {
    if(cart.length === 0) {
      router.push('/products');
    }
  })
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const cityRef = useRef();
  const postalCodeRef = useRef();
  const countryRef = useRef();
  const submitHandler = () => {
    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    const city = cityRef.current.value;
    const postalCode = postalCodeRef.current.value;
    const country = countryRef.current.value;
    if (!name) {
      toast.error("Enter full name");
      return;
    }
    if (!address) {
      toast.error("Enter address");
      return;
    }
    if (!phone) {
      toast.error("Enter phone");
      return;
    }
    if (address.length < 2) {
      toast.error("Enter a valid address");
      return;
    }
    if (!city) {
      toast.error("Enter city");
      return;
    }
    if (!postalCode) {
      toast.error("Enter postal code");
      return;
    }
    if (!country) {
      toast.error("Enter country");
      return;
    }
    saveShippingAddress(name, address, phone, city, postalCode, country);
    router.push('/payment');
  };
  return (
    <div className="pt-24 md:pt-28 md:max-w-7xl md:mx-auto px-4 md:px-0">
      <CheckoutWizard activeStep={1} />
      <div className="mx-auto">
        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="w-full"
            defaultValue={data.user.name}
            ref={nameRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="w-full"
            defaultValue={shippingAddress && shippingAddress.address}
            ref={addressRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            className="w-full"
            defaultValue={shippingAddress && shippingAddress.phone}
            ref={phoneRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            className="w-full"
            defaultValue={shippingAddress && shippingAddress.city}
            ref={cityRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            className="w-full"
            defaultValue={shippingAddress && shippingAddress.postalCode}
            ref={postalCodeRef}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            className="w-full"
            defaultValue={shippingAddress && shippingAddress.country}
            ref={countryRef}
            required
          />
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button" onClick={submitHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
