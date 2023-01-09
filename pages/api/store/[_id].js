import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";
import store from "../../../models/Store";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const session = await getSession({ req });
    if (!session || !session.user.isAdmin) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    connectToDatabase();
    try {
      const { _id } = req.query;
      const deletedStore = await store.findOneAndDelete({ _id: _id });
      if (!deletedStore) {
        res.status(500).send({ error: "No such store found" });
      }
      res.status(200).json({ message: "Store deleted successfully" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
