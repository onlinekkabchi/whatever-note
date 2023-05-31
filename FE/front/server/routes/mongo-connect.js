import express from "express";
import jwt from "jsonwebtoken";
import { conn } from "../db/connect.js";
import { verifyToken } from "../db/verify.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

router.use((req, res, next) => {
  next();
});

router.post("/notes", verifyToken, (req, res) => {
  const { userId, username } = req.user;

  // Perform actions for the protected route
  res.json({
    userId,
    username,
    message: "Protected route accessed successfully",
  });
});

router.post("/login", async (req, res) => {
  const { username } = req.body;
  // const username = body.username;

  try {
    // const coll = await conn.db("whatever-note").collection("user");
    // const user = await coll.findOne({ username });

    // if (!user) {
    //   return res.status(401).json({ error: "Invalid username" });
    // }

    // const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    // res.status(200).send({ accessToken: token });

    // conn.close();

    const generateToken = (userId) => {
      const payload = {
        sub: userId,
      };

      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + 60); // Set the expiration time to be 60 minutes from now

      const token = jwt.sign(payload, JWT_SECRET, {
        expiresAt: expirationDate.getTime() / 1000, // Convert milliseconds to seconds
      });

      res.status(200).send({ accessToken: token });
    };
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send({ error: "An internal server error occurred" });
  }
});

router.get("/", (req, res) => {
  res.status(200).send("login");
});

router.post("/movie", async (req, res) => {
  const body = req.body;
  const query = body.query;
  // const query = JSON.parse(body);

  try {
    if (!query) {
      res.status(500).send("no query");
    }

    const database = await conn.db("sample_mflix");
    const movies = await database.collection("movies");

    // const query = { runtime: { $lt: 2 } };
    // const options = {
    //   sort: { title: 1 },
    //   projection: { _id: 0, title: 1, imdb: 1 },
    // };
    const cursor = await movies.find(query).toArray();

    console.log(cursor);
    console.log(query);

    return res.status(200).send({ result: cursor });
  } catch (e) {
    return res.status(500).send({ error: e });
  }
});

export default router;
