import mongoose, { Mongoose } from "mongoose";

const ProductCommentSchema = new mongoose.Schema(
  {
    productId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: [true, "User name cannot be null"],
    },
    rating: {
      type: String,
      required: [true, "Product rating cannot be null"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ProductComment ||
  mongoose.model("ProductComment", ProductCommentSchema);
