import express from "express";
import axios from "axios";
const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  res.status(200).send({ message: "notes" });
});

router.get("/note", (req, res) => {
  res.status(200).send({
    code: "S-N005",
    message: "노트 전체 조회를 성공했습니다.",
    data: {
      notes: [
        { id: 1, seq: 1000, title: "note-1" },
        { id: 2, seq: 2000, title: "note-2" },
        { id: 3, seq: 3000, title: "note-3" },
      ],
      hasNext: false,
      pageNumber: 0,
    },
  });
});

export default router;
