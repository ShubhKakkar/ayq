import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Vendor email cannot be null"],
    },
    address: {
      type: String,
      required: [true, "Store address cannot be null"],
    },
    pin: {
      type: String,
      required: [true, "Store pin cannot be null"],
    },
    location: {
      type: { type: "String", required: true },
      coordinates: [],
    },
  },
  { timestamps: true }
);

StoreSchema.index({ location: "2dsphere" });

export default mongoose.models.store || mongoose.model("store", StoreSchema);
