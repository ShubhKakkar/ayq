import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name cannot be null"],
    },
    slug: {
      type: String,
      unique: true,
      required: [true, "Product slug cannot be null"],
    },
    category: {
      type: String,
      required: [true, "Product category cannot be null"],
    },
    images: {
      type: [String],
      required: [true, "Product images cannot be null"],
    },
    price: {
      type: Number,
      required: [true, "Product price cannot be null"],
    },
    brand: {
      type: String,
      required: [true, "Product brand cannot be null"],
    },
    rating: {
      type: String,
      required: [true, "Product rating cannot be null"],
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: [true, "Product count cannot be null"],
    },
    description: {
      type: String,
      required: [true, "Product description cannot be null"],
    },
  },
  { timestaps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
