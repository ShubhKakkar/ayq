import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title cannot be null"],
    },
    slug: {
      type: String,
      unique: true,
      required: [true, "Blog slug cannot be null"],
    },
    category: [],
    thumbnail: {
      type: String,
      required: [true, "Blog thumbnail cannot be null"],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Comment cannot be null"],
      },
      {
        type: String,
        required: [true, "Comment cannot be null"],
      },
    ],
    description: {},
    author: {
      type: String,
      required: [true, "Blog author cannot be null"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Content || mongoose.model("Content", ContentSchema);
