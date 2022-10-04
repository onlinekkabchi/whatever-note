import express from "express";
import connectMongoDB from "./connect";

const app = express();

connectMongoDB();

app.use("/", (req, res) => {
    res.send("Hello World!");
});
