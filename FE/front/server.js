import path from "path";
import express from "express";
import kakaoRouter from "./server/routes/kakao.js";
import mongoRouter from "./server/routes/mongo-connect.js";
import noteRouter from "./server/routes/notes.js";
import cors from "cors";

const app = express();
const PORT = 8080;

app.set("port", PORT);

app.use(express.static("dist"));
app.use(cors({ origin: "http://localhost:8088" }));

app.use("/login", kakaoRouter);
app.use("/mongo", mongoRouter);
app.use("/api", noteRouter);

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./dist/index.html"));
});

app.get("*.css", (req, res, next) => {
  res.send("css files");
  res.contentType("text/css");
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
