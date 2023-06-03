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

router.get("/card", (req, res) => {
  res.status(200).send({
    code: "S-CA005",
    message: "카드 전체 조회를 성공했습니다.",
    data: {
      cards: [
        {
          id: 1,
          title: "card-1",
          seq: 1000,
          noteId: 1,
        },
        {
          id: 2,
          title: "card-2",
          seq: 2000,
          noteId: 1,
        },
        {
          id: 3,
          title: "card-3",
          seq: 3000,
          noteId: 1,
        },
      ],
      hasNext: false,
      pageNumber: 0,
    },
  });
});

router.get("/content", (req, res) => {
  res.status(200).send({
    code: "S-C005",
    message: "컨텐트 전체 조회를 성공했습니다.",
    data: {
      contents: [
        { id: 1, seq: 1000, info: "content-1", isImage: false, cardId: 1 },
        { id: 2, seq: 2000, info: "content-2", isImage: false, cardId: 1 },
        { id: 3, seq: 3000, info: "content-3", isImage: false, cardId: 1 },
      ],
      hasNext: false,
      pageNumber: 0,
    },
  });
});

export default router;
