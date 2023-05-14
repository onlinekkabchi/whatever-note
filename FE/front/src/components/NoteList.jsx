"use client";

import { useEffect, useState } from "react";

export default function NoteList() {
  const theme = "black-white--";
  const className = {
    list: theme + "note-list",
  };

  const [notes, setNotes] = useState(null);

  if (notes === null) return <ul className={className.list}>노트 없음</ul>;

  return (
    <ul className={className.list}>
      <li>note1</li>
      <li>note2</li>
    </ul>
  );
}
