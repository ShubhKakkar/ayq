import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
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
    category: {
      type: String,
      required: [true, "Blog category cannot be null"],
    },
    thumbnail: {
      type: String,
      required: [true, "Blog thumbnail cannot be null"],
    },
    comments: {
      type: String,
      required: [true, "Blog comments cannot be null"],
    },
    description: {
      type: String,
      required: [true, "Blog description cannot be null"],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
