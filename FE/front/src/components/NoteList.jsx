"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function NoteList() {
  const theme = "black-white--";
  const className = {
    list: theme + "note-list",
  };

  const [notes, setNotes] = useState(null);

  const fetchData = () => {
    axios
      .post("/api/notes")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (notes === null) return <div>no notes</div>;

  return (
    <ul className={className.list}>
      <li>note1</li>
      <li>note2</li>
    </ul>
  );
}
