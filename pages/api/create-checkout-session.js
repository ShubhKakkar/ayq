const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY);
export default async (req, res) => {
  if (req.method !== "POST") return;
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = req.body;
  // Transform data
  const transformedItems = orderItems.map((item) => {
    return {
      description: item.description,
      quantity: item.quantity,
      price_data: {
        currency: "inr",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: item.images,
        },
      },
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: { allowed_countries: ["IN"] },
    // shipping_rates: [
    //   "shr_1MMd9cSJpc19jMQbH1wA53mk",
    // ],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.NEXT_AUTH_URL}/success`,
    cancel_url: `${process.env.NEXT_AUTH_URL}/placeholder`,
    metadata: {
      name: shippingAddress.name,
      adress: shippingAddress.address,
      phone: shippingAddress.phone,
      city: shippingAddress.city,
      postalCode: shippingAddress.postalCode,
      country: shippingAddress.country,
    },
  });
  res.status(201).json({
    id: session.id,
  });
};
