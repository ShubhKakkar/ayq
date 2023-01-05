import Blog from "../../../models/Blog";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if(req.method !== 'GET') return;
  connectToDatabase();
  try {
    const Blogs = await Blog.find({});
    res.status(200).json(Blogs);
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
}
