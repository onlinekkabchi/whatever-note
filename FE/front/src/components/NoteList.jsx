"use client";

import { useEffect, useState } from "react";

export default function NoteList() {
  const theme = "black-white--";
  const className = {
    list: theme + "note-list",
  };

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://tkimv2gaxyuw5rgsfy3gyowcji0tftej.lambda-url.ap-northeast-2.on.aws/",
        {
          method: "POST",
          body: JSON.stringify({ runtime: 11 }),
        }
      );
      const result = await res.json();
      setNotes(result.result);
    }

    fetchData();
  }, []);

  if (notes === null) return <ul className={className.list}>노트 없음</ul>;

  return (
    <ul className={className.list}>
      {notes.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}
