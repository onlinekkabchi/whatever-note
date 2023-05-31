import { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import paramToken from "../util/param-token";
import { origin, allNotesUrl, fetchNotes } from "../_api/notes";

export default function NoteList() {
  const theme = "black-white--";
  const className = {
    list: theme + "note-list",
  };

  const { token, saveToken } = useContext(AuthContext);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const token = paramToken();
    saveToken(token);
    console.log(origin + allNotesUrl);
    fetchNotes(origin + allNotesUrl, token)
      .then((res) => setNotes(res.data.notes))
      .catch((err) => console.error(err));
  }, []);

  const createNote = useCallback((title, len) => {
    const newNote = {
      id: len,
      seq: len * 1000,
      title: title,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }, []);

  const updateNote = useCallback((index, updatedNote) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      newNotes[index] = { title: updatedNote };
      return newNotes;
    });
  }, []);

  const deleteNote = useCallback((index) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      newNotes.splice(index, 1);
      return newNotes;
    });
  }, []);

  const editNote = useCallback((index) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      newNotes[index] = { ...newNotes[index], edit: true };
      return newNotes;
    });
  }, []);

  const cancelEditor = useCallback((index) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes];
      delete newNotes[index].edit;
      return newNotes;
    });
  }, []);

  const renderNoteList = () => {
    if (notes.length > 0) {
      return notes
        .map((item, index) => (
          <li key={index}>
            {item.edit ? (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateNote(index, e.target.elements.title.value);
                    console.log(e.target.elements.title.value);
                    e.target.reset();
                  }}
                >
                  <input
                    type="text"
                    name="title"
                    defaultValue={notes[index].title}
                  />
                  <input
                    onClick={() => cancelEditor(index)}
                    type="button"
                    value="cancel"
                  />
                  <input type="submit" />
                </form>
              </>
            ) : (
              <>
                <p>{item.title}</p>
                <button onClick={() => editNote(index)}>edit</button>
                <button onClick={() => deleteNote(index)}>delete</button>
              </>
            )}
          </li>
        ))
        .reverse();
    } else {
      return <li>노트없음</li>;
    }
  };

  return (
    <>
      <ul className={className.list}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createNote(e.target.elements.title.value, notes.length + 1);
            e.target.reset();
          }}
        >
          <input type="text" name="title" />
          <input type="submit" />
        </form>
        {renderNoteList()}
      </ul>
    </>
  );
}
