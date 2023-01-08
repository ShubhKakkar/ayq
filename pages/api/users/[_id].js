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
      const { _id } = req.query;
      const User = await User.find({ _id: _id });
      res.status(200).json(User);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  if (req.method === "POST") {
    const session = await getSession({ req });
    if (!session || !session.user.isAdmin) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    connectToDatabase();
    try {
      const user = await User.findById({_id:req.body._id});
      if (!user) {
        res.status(500).json({
          error: "User not found",
        });
        return;
      }
      if (user.isAdmin === true) {
        const updatedUser = await User.updateOne(
          { _id: req.body._id },
          { $set: { isAdmin: false } },
          { upsert: true }
        );
        res.status(200).json(updatedUser);
      }
      if (user.isAdmin === false) {
        const updatedUser = await User.updateOne(
          { _id: req.body._id },
          { $set: { isAdmin: true } },
          { upsert: true }
        );
        res.status(200).json(updatedUser);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  if (req.method === "DELETE") {
    connectToDatabase();
    const session = await getSession({ req });
    if (!session || !session.user.isAdmin) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    try {
      const { _id } = req.query;
      const deletedUser = await User.deleteOne({ _id: _id });
      console.log(deletedUser);
      res.status(200).json({
        message: "User deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
