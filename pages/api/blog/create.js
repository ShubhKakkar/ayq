import Content from "../../../models/Content";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  connectToDatabase();
  try {
    const checkDuplicacy = await Content.findOne({slug: req.body.slug});
    if(checkDuplicacy){
      res.status(409).json({ error: "Duplicate slug found!" });
    }
    const newContent = await new Content(req.body);
    const savedContent = await newContent.save();
    res.status(201).json(savedContent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
