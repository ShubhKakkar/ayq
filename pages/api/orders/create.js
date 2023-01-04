import { getSession } from "next-auth/react";
import Orders from "../../../models/Order";
import connectToDatabase from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return;
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send("signin required");
  }
  const { user } = session;
  connectToDatabase();
  console.log(req.body);
  const newOrder = new Orders({
    ...req.body,
    user: user._id,
  });
  const order = await newOrder.save();
  res.status(201).send(order);
}
