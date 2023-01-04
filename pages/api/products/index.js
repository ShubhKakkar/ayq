import Product from "../../../models/Product";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if(req.method !== 'GET') return;
  connectToDatabase();
  try {
    const Products = await Product.find({});
    res.status(200).json(Products);
  }
  catch(err) {
    res.status(500).json({error: err.message})
  }
}
