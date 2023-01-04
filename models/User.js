import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name cannot be null"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "User email cannot be null"],
    },
    password: {
      type: String,
      min: [6, "Passwords should be atleast 6 characters long"],
      max: [64, "Passwords can be maximum 64 characters long"],
      required: [true, "User password cannot be null"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestaps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
