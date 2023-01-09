import Query from "../../../models/Query";
import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
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
      const deletedQuery = await Query.deleteOne({ _id: _id });
      res.status(200).json({
        message: "Query deleted successfully",
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
