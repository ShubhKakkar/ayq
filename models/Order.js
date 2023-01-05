import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    checkout_id: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
    },
    customer_address: {},
    cutomer_email: {
      type: String,
      required: true,
    },
    customer_name: {
      type: String,
      required: true,
    },
    customer_phone: {
      type: String,
    },
    paymentModes: [],
    paymentStatus: {
      type: String,
      required: true,
    },
    shippingRate: {
      type: Number,
    },
    images: [],
    orders:[],
  },
  { timestamps: true }
);

export default mongoose.models.order || mongoose.model("order", OrderSchema);
