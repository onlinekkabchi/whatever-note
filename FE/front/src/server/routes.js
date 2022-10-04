import express from "express";
import connectMongoDB from "./connect";

const app = express();

connectMongoDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
});
