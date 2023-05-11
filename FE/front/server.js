import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      // let template, render;

      let template = fs.readFileSync(path.resolve("index.html"), "utf-8");

      template = await vite.transformIndexHtml(url, template);

      const render = (await vite.ssrLoadModule("/src/entry-server.jsx")).render;

      const appHtml = await render(url);

      console.log("server.js");
      console.log(url);
      console.log(render);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(5173);
}

createServer();
