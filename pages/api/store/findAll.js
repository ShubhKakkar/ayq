import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";
import store from "../../../models/Store";

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
      const allStores = await store.find({}).sort({createdAt:-1});
      res.status(200).json(allStores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
