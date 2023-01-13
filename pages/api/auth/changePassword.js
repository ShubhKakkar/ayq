import bcryptjs from "bcryptjs";
import { getSession, signOut } from "next-auth/react";
import User from "../../../models/User";
import connectToDatabase from "../../../utils/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({
      message: "signin required",
    });
  }
  connectToDatabase();
  if (!req.body.email) {
    res.status(400).json({
      error: "Email not found",
    });
    return;
  }
  if (!req.body.oldPassword) {
    res.status(400).json({
      error: "Old Password not found",
    });
    return;
  }
  if (!req.body.newPassword) {
    res.status(400).json({
      error: "New Password not found",
    });
    return;
  }
  if (req.body.oldPassword === req.body.newPassword) {
    res.status(400).json({
      error: "New Password cannot be the same as the old one",
    });
    return;
  }
  try {
    const verifyUser = await User.findOne({ email: req.body.email });
    if (!verifyUser) {
      res.status(400).json({
        error: "Invalid Credentials",
      });
      signOut();
      return;
    }
    if (
      verifyUser &&
      bcryptjs.compareSync(req.body.oldPassword, verifyUser.password)
    ) {
      verifyUser.password = bcryptjs.hashSync(req.body.newPassword);
      await verifyUser.save();
      res.status(200).json({
        message: "Password changed successfully",
      });
    } else {
      res.status(400).json({error: 'Invalid Credentials'})
      return;
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
}

export default handler;
