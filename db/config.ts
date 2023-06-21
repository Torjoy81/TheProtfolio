import { MongoClient } from "mongoDB";

const client = new MongoClient();

await client.connect(
  "mongodb+srv://Tarekul97:526628Tarek@atlascluster.5czppuy.mongodb.net/ProtfolioCommet?authMechanism=SCRAM-SHA-1",
);

const db = client.database("ProtfolioCommet");

export default db;
