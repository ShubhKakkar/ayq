import ProductComment from "../../../models/ProductComment";
import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    connectToDatabase();
    try {
      const productId = req.body.productId;
      const userId = req.body.userId;
      const name = req.body.name;
      const rating = req.body.rating;
      const description = req.body.description;
      const checkDuplicacy = await ProductComment.findOne({ userId: userId });
      if (checkDuplicacy) {
        res.status(500).json({ error: "Review already submitted" });
        return;
      }
      const newProductComment = await new ProductComment({
        productId,
        userId,
        name,
        rating,
        description,
      });
      async function updateRating(productId, newRating) {
        const product = await Product.findById(productId);
        const currentRating = product.rating;
        const numReviews = product.numReviews;
        product.rating = (currentRating * numReviews + newRating) / (numReviews + 1);
        product.numReviews++;
        await product.save();
      }
      await updateRating(productId, rating);
      const savedProductComment = await newProductComment.save();
      res.status(201).json(savedProductComment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
