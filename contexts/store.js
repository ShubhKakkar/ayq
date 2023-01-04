const { createContext, useState, useEffect } = require("react");

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [shippingAddress, setShippingAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
    if (localStorage.getItem("shippingAddress")) {
      setShippingAddress(JSON.parse(localStorage.getItem("shippingAddress")));
    }
  }, []);
  function addToCart(newItem) {
    const existItem = cart.find((item) => {
      return item.slug === newItem.slug;
    });
    if (existItem) {
      const newCart = cart.filter((item) => {
        return item.slug !== existItem.slug;
      });
      setCart([...newCart, newItem]);
      localStorage.setItem("cart", JSON.stringify([...newCart, newItem]));
    } else {
      setCart([...cart, newItem]);
      localStorage.setItem("cart", JSON.stringify([...cart, newItem]));
    }
  }
  const updateQuantity = (item, quantity) => {
    const updatedProducts = cart.map((product) => {
      if (quantity > product.countInStock) {
        alert("Cannot add more of such items to cart");
        return product;
      }
      if (product.slug === item.slug) {
        return { ...product, quantity };
      }
      return product;
    });
    setCart(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };
  const removeFromCart = (product) => {
    setCart(
      cart.filter((item) => {
        return item.slug !== product.slug;
      })
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cart.filter((item) => {
          return item.slug !== product.slug;
        })
      )
    );
  };
  const clearCart = () => {
    if (cart.length === 0) {
      alert("Your cart is already empty");
      return;
    }
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };
  const saveShippingAddress = (
    name,
    address,
    phone,
    city,
    postalCode,
    country
  ) => {
    setShippingAddress({
      name: name,
      address: address,
      phone: phone,
      city: city,
      postalCode: postalCode,
      country: country,
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        city: city,
        postalCode: postalCode,
        country: country,
      })
    );
  };
  const savePaymentMethod = (payment) => {
    console.log(payment);
    setPaymentMethod(payment);
    localStorage.setItem("paymentMethod", payment);
  }
  return (
    <StoreContext.Provider
      value={[
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        shippingAddress,
        saveShippingAddress,
        savePaymentMethod
      ]}
    >
      {children}
    </StoreContext.Provider>
  );
};
