import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import paramToken from "../../util/param-token";
import { fetchAPI } from "../../_api/fetchAPI";
import { NOTEURL } from "../../url/api";

import NewForm from "../form/NewItem";
import EditForm from "../form/EditForm";
import Default from "./NoteDefault";
import Item from "./Note";

import { createItem, updateItem, deleteItem } from "../../util/crudItem";

import { theme, className } from "../../util/theme";

export default function Notes() {
  const { token, saveToken } = useContext(AuthContext);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const token = paramToken();
    saveToken(token);
    fetchAPI(NOTEURL, token)
      // .then((res) => console.log(res))
      .then((res) => setNotes(res.data.notes))
      .catch((err) => console.error("노트 fetch 에러.. " + err));

    console.log("token: " + token);
  }, []);

  const createNote = (title, len) => {
    // const newNote = {
    //   id: len,
    //   seq: len * 1000,
    //   title: title,
    // };
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    setNotes((prevNotes) => createItem(prevNotes, title, len));
  };

  const updateNote = (index, updatedNote) => {
    // setNotes((prevNotes) => {
    //   const newNotes = [...prevNotes];
    //   newNotes[index] = { title: updatedNote };
    //   return newNotes;
    // });
    setNotes((prevNotes) => updateItem(prevNotes, index, updatedNote));
  };

  const deleteNote = (index) => {
    // setNotes((prevNotes) => {
    //   const newNotes = [...prevNotes];
    //   newNotes.splice(index, 1);
    //   return newNotes;
    // });
    setNotes((prevNotes) => deleteItem(prevNotes, index));
  };

  const editNote = (index) => {
    setNotes((prev) => {
      const next = [...prev];
      next[index].edit = true;
      return next;
    });
  };

  const cancelEditor = (index) => {
    setNotes((prev) => {
      const next = [...prev];
      delete next[index].edit;
      return next;
    });
  };

  const render = () => {
    if (notes.length > 0) {
      return notes
        .map((item, index) =>
          Item(
            item,
            index,
            EditForm(notes, index, updateNote, cancelEditor),
            Default(item, index, editNote, deleteNote)
          )
        )
        .reverse();
    } else {
      return <li>노트없음</li>;
    }
  };

  return (
    <>
      <ul className={className.list}>
        <h3>WHATEVER NOTES</h3>
        {NewForm(notes, createNote)}
        {/* {render()}
         */}

        {render()}
      </ul>
    </>
  );
}
