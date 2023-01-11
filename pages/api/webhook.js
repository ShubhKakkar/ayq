import connectToDatabase from "../../utils/db";
import order from "../../models/Order";
import { buffer } from "micro";

const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async function handler(req, res) {
  const fullfillOrder = async (session) => {
    connectToDatabase();
    const newOrder = new order({
      user: session.metadata.user_id,
      checkout_id: session.id,
      amount: session.amount_total / 100,
      currency: session.currency,
      customer_id: session.customer,
      customer_address: session.customer_details.address,
      cutomer_email: session.customer_details.email,
      customer_name: session.customer_details.name,
      customer_phone: session.customer_details.phone,
      paymentModes: session.payment_method_types,
      paymentStatus: session.payment_status,
      shippingRate: session.shipping_rate,
      images: JSON.parse(session.metadata.images),
      orders: JSON.parse(session.metadata.orders),
    });
    const Order = await newOrder.save();
  };
  if (req.method !== "POST") return;
  // To generate certificcate to check if it is a genuine stripe webhook
  const requestBuffer = await buffer(req);
  const payload = requestBuffer.toString();
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.log("Error", err.message);
    return res.status(500).send(`Webhook error: ${err.message}`);
  }

  // Handle the checkout.session.completed
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log(session);
    return await fullfillOrder(session)
      .then(() => {
        res.status(201);
      })
      .catch((err) => {
        console.log("Webhook Error", err.message);
      });
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
