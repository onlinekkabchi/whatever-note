import { useEffect, useState } from "react";
import { fetchAPI } from "../../_api/fetchAPI";
import { CARDURL } from "../../url/api";

import NewForm from "../form/NewItem";
import EditForm from "../form/EditForm";
import Default from "./CardDefault";
import Item from "./Card";
import Contents from "../content/Contents";

import { createItem, updateItem, deleteItem } from "../../util/crudItem";
import { useParams } from "react-router-dom";

import { theme, className } from "../../util/theme";

export default function Cards() {
  const { noteId } = useParams();
  const [cards, setItems] = useState([]);

  useEffect(() => {
    if (cards.length < 1) {
      fetchAPI(CARDURL, null)
        .then((res) => setItems(res.data.cards))
        .catch((err) => console.error("카드 fetch 에러.. " + err));
    }
  }, []);

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

  const open = (index) => {
    setItems((prev) => {
      const next = [...prev];

      if (!next[index].open || next[index].open === "hidden") {
        next[index].open = "visible";
      } else {
        next[index].open = "hidden";
      }

      return next;
    });
  };

  const render = () => {
    if (cards.length > 0) {
      return cards
        .map((item, index) =>
          Item(
            item,
            index,
            EditForm(cards, index, updateNote, cancelEditor),
            Default(item, index, editNote, deleteNote, open)
          )
        )
        .reverse();
    } else {
      return <li>노트없음</li>;
    }
  };

  return (
    <>
      <ul className={className.cards}>
        <h3>NOTE {noteId}</h3>
        {NewForm(cards, createNote)}
        {render()}
      </ul>
    </>
  );
}
