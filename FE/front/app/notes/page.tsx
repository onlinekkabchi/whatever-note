"use client";

// import NoteList from "../../src/components/NoteList";

// export default async function Page() {
//   return <NoteList />;
// }

import { useEffect, useState } from "react";
import { lambdaUrl, lambdaReq } from "../../src/_api/lambda";

export default function NoteList() {
  const theme = "black-white--";
  const className = {
    list: theme + "note-list",
  };

  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    async function fetching() {
      const res = await fetch(lambdaUrl, lambdaReq);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      setNotes(result.result);
    }

    fetching();
  }, []);

  useEffect(() => {
    async function fetching() {
      const res = await fetch("/notes/api");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      console.log("fetching");
      console.log(result);
    }

    fetching();
  }, []);

  if (!notes || notes === undefined)
    return <ul className={className.list}>노트 없음</ul>;

  return (
    <ul className={className.list}>
      {notes.map((item: { title: string }, index: number) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
}
