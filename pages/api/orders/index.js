import order from "../../../models/Order";
import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "GET") return;
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({
      message: "signin required"
    });
  }
  try {
    connectToDatabase();
    const allOrders = await order.find({}).sort({createdAt:-1});

    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
