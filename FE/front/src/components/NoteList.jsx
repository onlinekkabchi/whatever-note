"use client";

import { useEffect, useState } from "react";
import { lambdaUrl, lambdaReq } from "../_api/lambda";

export default function NoteList() {
  const theme = "black-white--";
  const className = {
    list: theme + "note-list",
  };

  const [notes, setNotes] = useState(null);

  useEffect(() => {
    async function fetching() {
      const res = await fetch(lambdaUrl, lambdaReq);
      const result = await res.json();
      setNotes(result.result);
    }

    fetching();
  }, []);

  if (notes === null || notes === undefined)
    return <ul className={className.list}>노트 없음</ul>;

  return (
    <ul className={className.list}>
      {notes.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}
