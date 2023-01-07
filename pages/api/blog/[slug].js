import Content from "../../../models/Content";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectToDatabase();
    try {
      const { slug } = req.query;
      const SingleContent = await Content.findOne({ slug });
      res.status(200).json(SingleContent);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  if (req.method === "DELETE") {
    connectToDatabase();
    try {
      const { slug } = req.query;
      await Content.deleteOne({ slug });
      res.status(200).json({
        message: "Post deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
