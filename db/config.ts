import { MongoClient } from "mongoDB";

const client = new MongoClient();

await client.connect(
  <string> Deno.env.get("MONGO_URI"),
);

const db = client.database("ProtfolioCommet");

export default db;
