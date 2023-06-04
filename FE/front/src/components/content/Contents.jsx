import { useEffect, useState } from "react";
import { fetchAPI } from "../../_api/fetchAPI";

import NewForm from "../form/NewItem";
import EditForm from "../form/EditFormContent";
import Item from "./Content";
import Default from "./ContentDefault";

import { CONTENTURL } from "../../url/api";
import { theme, className } from "../../util/theme";

import { createContent, updateContent, deleteItem } from "../../util/crudItem";

export default function Contents(props) {
  const cardId = props.cardId;
  const open = props.open;

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (open === "visible") {
      fetchAPI(CONTENTURL, null)
        .then((res) => {
          setItems(res.data.contents);
        })
        .catch((err) => console.error("콘텐츠 fetch 에러.. " + err));
    }
  }, [open]);

  const createNote = (info, len) => {
    setItems((prevNotes) => createContent(prevNotes, info, len));
  };

  const updateNote = (index, updatedNote) => {
    setItems((prevNotes) => updateContent(prevNotes, index, updatedNote));
  };

  const deleteNote = (index) => {
    setItems((prevNotes) => deleteItem(prevNotes, index));
  };

  const editNote = (index) => {
    setItems((prev) => {
      const next = [...prev];
      next[index].edit = true;
      return next;
    });
  };

  const cancelEditor = (index) => {
    setItems((prev) => {
      const next = [...prev];
      delete next[index].edit;
      return next;
    });
  };

  const render = () => {
    if (items.length > 0) {
      return items
        .map(
          (item, index) =>
            Item(
              item,
              index,
              EditForm(items, index, updateNote, cancelEditor),
              Default(item, index, editNote, deleteNote)
            )
          // <li key={index}>{item.info}</li>
        )
        .reverse();
    } else {
      return <li>노트없음</li>;
    }
  };

  return (
    <>
      <ul className={className.contents + " " + open}>
        {/* <h3>NOTE {noteId}</h3> */}
        {NewForm(items, createNote)}
        {render()}
      </ul>
    </>
  );
}
