import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

console.log("MONGODB_URI =", process.env.MONGODB_URI);

if (!uri) {
  throw new Error(
    "MONGODB_URI is not defined"
  );
}
declare global {
  var mongoClient: MongoClient | undefined;
}

const client = global.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  global.mongoClient = client;
}

let clientPromise: Promise<MongoClient>;

if (global.mongoClient) {
  clientPromise = Promise.resolve(client);
} else {
  clientPromise = client.connect();
}

export async function getDb() {
  const mongoClient = await clientPromise;
  return mongoClient.db("gkelectricdb");
}

// import { MongoClient } from "mongodb";
// import { createIndexes } from "./db-indexes";

// const uri = process.env.MONGODB_URI!;

// declare global {var mongoClient: MongoClient | undefined}

// const client = global.mongoClient ?? new MongoClient(uri);

// if (process.env.NODE_ENV !== "production") {
//   global.mongoClient = client;
// }

// // let clientPromise: Promise<MongoClient>;

// // if (!uri) {
// //   throw new Error("Please add your Mongo URI to .env.local");
// // }
// let isConnected = false;

// export async function getDb() {
//   // if (!client) {
//   //   client = new MongoClient(uri,options);
//   //   await client.connect();
//   // }
//   if(!isConnected){
//       await client.connect();
//       await createIndexes();
//       isConnected = true;
//   }
//   return client.db("gkelectricdb");
// }
