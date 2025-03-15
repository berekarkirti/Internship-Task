import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

export async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db(process.env.MONGODB_DB);
}
