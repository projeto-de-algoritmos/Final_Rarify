import { Bson, MongoClient } from "https://deno.land/x/mongo/mod.ts";
import { Protocol } from "./types.ts";

const client = new MongoClient();

//Connecting to a Local Database
await client.connect("mongodb://localhost:27017");

// //Connecting to a Mongo Atlas Database
// await client.connect({
//   db: "rarify",
//   tls: true,
//   servers: [
//     {
//       host: "localhost",
//       port: 27017,
//     },
//   ],
//   credential: {
//     username: "<username>",
//     password: "<password>",
//     db: "<db_name>",
//     mechanism: "SCRAM-SHA-1",
//   },
// });

// //Or
// await client.connect(
//   "mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1"
// );

interface ProtocolSchema extends Protocol {
  _id: { $oid: string };
}

const db = client.database("test");
const protocol = db.collection<ProtocolSchema>("protocol");

export default db;
export { protocol };
