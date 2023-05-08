import fs from "fs";
import path from "path";
import express from "express";
import cors from "cors";

async function createServer() {
  const app = express();

  app.use(cors(corsOptions));

  app.get("/api/v1", (req, res) => {
    res.json({ hello: "world!!" });
  });

  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(path.resolve("index.html"), "utf-8");

      template = await vite.transformIndexHtml(url, template);

      const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

      const appHTML = await render(url);
      const html = template.replace(`<!--app-html-->`, appHTML);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.get("/api", (_req, res) => {
    res.json({ hello: "world!" });
  });

  app.listen(5173);
}

createServer();
