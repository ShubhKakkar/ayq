import User from "../../../models/User";
import connectToDatabase from "../../../utils/db";
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
      const Users = await User.find({});
      res.status(200).json(Users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
