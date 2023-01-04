import Orders from "../../../models/Order";
import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  if (req.method !== "GET") return;
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send("signin required");
  }
  if (!session.user.isAdmin) return;
  connectToDatabase();
  try {
    const Order = await Orders.find({});
    res.status(200).json(Order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
