import ProductComment from "../../../models/ProductComment";
import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method === "GET") {
    connectToDatabase();
    try {
      const { _id } = req.query;
      const productComments = await ProductComment.find({ productId: _id });
      res.status(200).json(productComments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
