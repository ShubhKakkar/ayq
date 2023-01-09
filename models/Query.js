import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "User id cannot be null"],
    },
    name: {
      type: String,
      required: [true, "User name cannot be null"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "User email cannot be null"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Query || mongoose.model("Query", QuerySchema);
