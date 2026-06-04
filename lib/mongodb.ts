
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

declare global {
  var mongoClient: MongoClient | undefined;
}
const client =
  global.mongoClient ??
  new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global.mongoClient = client;
}

// let clientPromise: Promise<MongoClient>;

// if (!uri) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }

export async function getDb() {
  // if (!client) {
  //   client = new MongoClient(uri,options);
  //   await client.connect();
  // }
  await client.connect();
  return client.db("gkelectricdb");
}
