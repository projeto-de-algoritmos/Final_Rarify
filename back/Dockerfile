FROM denoland/deno:1.12.2

EXPOSE 7000

WORKDIR /app

USER deno

ADD . .
RUN deno cache server.ts

CMD ["deno", "run", "--allow-net", "unstable", "server.ts"]