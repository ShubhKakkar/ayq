import connectToDatabase from "../../../utils/db";
import { getSession } from "next-auth/react";
import store from "../../../models/Store";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const session = await getSession({ req });
    if (!session || !session.user.isAdmin) {
      return res.status(401).send({
        message: "signin required",
      });
    }
    connectToDatabase();
    try {
      if (!req.body.email) {
        res.status(500).send({ error: "Email not provided" });
        return;
      }
      if (!req.body.address) {
        res.status(500).send({ error: "Address not provided" });
        return;
      }
      if (!req.body.pin) {
        res.status(500).send({ error: "Pin not provided" });
        return;
      }
      if (!req.body.latitude) {
        res.status(500).send({ error: "Latitude not provided" });
        return;
      }
      if (!req.body.longitude) {
        res.status(500).send({ error: "Longitude not provided" });
        return;
      }
      const checkDuplicacy = await store.findOne({ email: req.body.email });
      if (checkDuplicacy) {
        res
          .status(500)
          .send({ error: "Store vendor with this email already exists" });
        return;
      }
      const newStore = await new store({
        email: req.body.email,
        address: req.body.address,
        pin: req.body.pin,
        location: {
          type: "Point",
          coordinates: [
            parseFloat(req.body.longitude),
            parseFloat(req.body.latitude),
          ],
        },
      });
      const savedStore = await newStore.save();
      res.status(200).json(savedStore);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
