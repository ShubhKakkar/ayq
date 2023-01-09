import Query from "../../../models/Query";
import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getSession({ req });
    if (!session) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    connectToDatabase();
    try {
      const _id = req.body._id;
      const name = req.body.name;
      const email = req.body.email;
      const checkDuplicacy = await Query.findOne({ _id: _id });
      if (checkDuplicacy) {
        res.status(500).json({ error: "Query already submitted" });
        return;
      }
      const newQuery = await new Query({
        _id,
        name,
        email
      });
      const savedQuery = await newQuery.save();
      res.status(201).json(savedQuery);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
