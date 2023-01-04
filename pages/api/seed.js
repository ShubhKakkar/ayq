import User from "../../models/User";
import Product from "../../models/Product";
import { users } from "../../utils/data";
import data from "../../utils/data";
import connectToDatabase from "../../utils/db";

export default async function handler(req, res) {
  connectToDatabase();
  await User.deleteMany();
  await User.insertMany(users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
}
