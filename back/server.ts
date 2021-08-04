import { Application, Router } from "https://deno.land/x/oak/mod.ts";
const port = 7000;

const app = new Application();

const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

router.post("/search", (ctx) => {
  const term = ctx.params["term"];
  const protocol = crypto.randomUUID();
  ctx.response.body = protocol;
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
