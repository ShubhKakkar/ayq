import Product from "../../../models/Product";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectToDatabase();
    try {
      const Products = await Product.find({});
      res.status(200).json(Products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  if (req.method === "POST") {
    connectToDatabase();
    try {
      const checkDuplicacy = await Product.findOne({ slug: req.body.slug });
      if (checkDuplicacy) {
        res.status(409).json({ error: "Duplicate slug found!" });
      }
      const newProduct = await new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
