import mongoose, { Mongoose } from "mongoose";

const ProductCommentSchema = new mongoose.Schema(
  {
    productId:{
      ype: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Product name cannot be null"],
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
