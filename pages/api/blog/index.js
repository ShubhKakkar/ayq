import Content from "../../../models/Content";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if(req.method !== 'GET') return;
  connectToDatabase();
  try {
    const Contents = await Content.find({});
    res.status(200).json(Contents);
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
}
