import "dotenv/config";
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || "";

async function connectDB() {
  try {
    await mongoose.connect(URI);
    console.log("Connection to MongoDB successful!");
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
}

export default connectDB;
