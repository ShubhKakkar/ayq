import User from "../../models/User";
import Product from "../../models/Product";
import order from "../../models/Order";
import Newsletter from "../../models/Newsletter";
import Content from "../../models/Content";
import Query from "../../models/Query"
import connectToDatabase from "../../utils/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const session = await getSession({ req });
    if (!session || !session.user.isAdmin) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    connectToDatabase();
    try {
      const UserCount = await User.count({});
      const ProductCount = await Product.count({});
      const OrderCount = await order.count({});
      const NewsLetterCount = await Newsletter.count({});
      const ContentCount = await Content.count({});
      const Queries = await Query.find({});
      const data = {
        userCount: UserCount,
        productCount: ProductCount,
        orderCount: OrderCount,
        newsLetterCount: NewsLetterCount,
        postCount: ContentCount,
        queries: Queries,
      }
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
