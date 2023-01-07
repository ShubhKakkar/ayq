import Product from "../../../models/Product";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectToDatabase();
    try {
      const { slug } = req.query;
      const Products = await Product.findOne({ slug });
      res.status(200).json(Products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  if (req.method === "POST") {
    connectToDatabase();
    try {
      const filter = { _id: req.body._id };
      const update = {
        name: req.body.name,
        slug: req.body.slug,
        category: req.body.category,
        images: req.body.images,
        price: req.body.price,
        brand: req.body.brand,
        rating: req.body.rating,
        countInStock: req.body.countInStock,
        description: req.body.description,
      };
      const updatedProduct = await Product.updateOne(filter, update, {
        new: true,
      });
      res.status(201).json(updatedProduct);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  if (req.method === "DELETE") {
    connectToDatabase();
    try {
      const { slug } = req.query;
      await Product.deleteOne({ slug });
      res.status(200).json({
        message: "Product deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
