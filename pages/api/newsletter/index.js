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
