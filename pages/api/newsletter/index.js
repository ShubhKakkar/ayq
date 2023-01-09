import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";
import Newsletter from "../../../models/Newsletter";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({
      message: "signin required",
    });
  }
  if (req.method === "GET") {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).send("signin required");
    }
    if (!session.user.isAdmin) return;
    try {
      const requests = await Newsletter.find({}).sort({createdAt:-1});
      res.status(201).json(requests);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  if (req.method !== "POST") return;
  connectToDatabase();
  try {
    const newJoining = new Newsletter(req.body);
    const joinedUser = await newJoining.save();
    res.status(201).json(joinedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
