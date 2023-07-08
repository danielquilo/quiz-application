import mongoose from "mongoose";

export default async function connect() {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
