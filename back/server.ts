import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { search, getProtocol } from "./controllers.ts";
const port = 7000;

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", async (ctx) => {
  ctx.response.body = { detail: "ok" };
});

router.get("/search/:term", async (ctx) => {
  const term = ctx.params["term"];
  if (term === undefined)
    ctx.response.body = { error: "Cannot create protocol without term" };
  else ctx.response.body = await search(ctx, term);
});

router.get("/protocol/:protocol", async (ctx) => {
  const protocol = ctx.params["protocol"];
  if (protocol === undefined)
    ctx.response.body = { error: "Cannot get protocol" };
  else ctx.response.body = await getProtocol(ctx, protocol);
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
