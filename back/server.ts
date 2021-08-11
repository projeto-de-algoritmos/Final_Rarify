import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { protocol } from "./db.ts";
const port = 7000;

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", async (ctx) => {
  ctx.response.body = { detail: "ok" };
});

router.post("/search", async (ctx) => {
  const term = ctx.params["term"];
  const protocolId = await protocol.insertOne({
    status: "started",
  });
  ctx.response.body = protocolId;
});

router.get("/status/:protocol", (ctx) => {
  const term = ctx.params["protocol"];
});

console.log(`Server running at port ${port}`);

await app.listen({ port });

/*
  Architecture:
  1. user makes search term request
  2. that is received and protocol generated from it
  3. whenever user makes a protocol status request, 
     he gets latest info from db
  4. worker thread makes searches and run algorithms
*/
