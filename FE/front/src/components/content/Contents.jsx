import { useEffect, useState } from "react";
import { fetchAPI } from "../../_api/fetchAPI";

import NewForm from "../form/NewItem";
import EditForm from "../form/EditForm";

import { CONTENTURL } from "../../url/api";
import { theme } from "../../util/theme";

import { createItem, updateItem, deleteItem } from "../../util/crudItem";

export default function Contents(props) {
  const cardId = props.cardId;
  const open = props.open;

  const [className, setClassName] = useState("content");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (open === true && items.length < 1) {
      fetchAPI(CONTENTURL, null)
        .then((res) => {
          setItems(res.data.contents);
        })
        .catch((err) => console.error("콘텐츠 fetch 에러.. " + err));
    } else {
      console.log("no content data fetch");
    }
  }, [open]);

  const createNote = (title, len) => {
    setItems((prevNotes) => createItem(prevNotes, title, len));
  };

  const updateNote = (index, updatedNote) => {
    setItems((prevNotes) => updateItem(prevNotes, index, updatedNote));
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

  // return (
  //   <div className={className + " " + open} id={cardId}>
  //     content
  //   </div>
  // );

  const render = () => {
    if (items.length > 0) {
      return items
        .map((item, index) => (
          // Item(
          //   item,
          //   index,
          //   EditForm(items, index, updateNote, cancelEditor),
          //   Default(item, index, editNote, deleteNote, open)
          // )
          <li key={index}>{item.info}</li>
        ))
        .reverse();
    } else {
      return <li>노트없음</li>;
    }
  };

  return (
    <>
      <ul className={className + " " + open}>
        {/* <h3>NOTE {noteId}</h3> */}
        {NewForm(items, createNote)}
        {render()}
      </ul>
    </>
  );
}
