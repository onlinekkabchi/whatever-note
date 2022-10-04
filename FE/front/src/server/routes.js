import express from "express";
import connectMongoDB from "./connect";

const app = express();

connectMongoDB();

app.get("/", (req, res) => {
    console.log("helloworld");
    res.send("Hello World!");
});
