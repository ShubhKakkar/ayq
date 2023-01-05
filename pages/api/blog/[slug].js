import Blog from "../../../models/Blog";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if(req.method !== 'GET') return;
  connectToDatabase();
  try {
    const { slug } = req.query
    const SingleBlog = await Blog.findOne({slug});
    res.status(200).json(SingleBlog);
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
}
