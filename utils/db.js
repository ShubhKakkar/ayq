import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectionString = process.env.MONGO_DB_URI;

const connectToDatabase = () => {
  if (mongoose.connection.readyState === 0) {
    mongoose.connect(connectionString);
  }
};

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default connectToDatabase;
