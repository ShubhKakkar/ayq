import Content from "../../../models/Content";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  connectToDatabase();
  try {
    const filter = { _id: req.body._id };
    const update = {
      title: req.body.title,
      slug: req.body.slug,
      category: req.body.category,
      thumbnail: req.body.thumbnail,
      description: req.body.description,
      author: req.body.author,
      comments: req.body.comments,
    };
    const updatedContent = await Content.updateOne(filter, update, {
      new: true,
    });
    res.status(201).json(updatedContent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
