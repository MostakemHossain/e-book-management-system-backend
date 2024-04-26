import mongoose from "mongoose";
import config from ".";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("DB connected successfully");
    });

    mongoose.connection.on("error", () => {
      console.log("Error is connected to DB");
    });
    await mongoose.connect(config.database_url as string);
  } catch (err) {
    console.error("Failed to connect DB");
    process.exit(1);
  }
};
export default connectDB;
