import mongoose, { ConnectOptions } from "mongoose";
import env from "../config/env";

const DB_URI = env.get("MONGO_URI")!;
const clientOptions: ConnectOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function connectToDB() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(DB_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error: any) {
    console.error("Failed to connect to DB", error.message);
    await mongoose.disconnect();
    process.exit(1);
  }
}
