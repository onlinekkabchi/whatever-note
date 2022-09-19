import { useEffect, useState } from "react";
import Note from "./note";
import Draggable from "./draggable";

export default function Collection() {
    const [newNoteName, setNewNoteName] = useState("");
    const [notes, setNote] = useState([]);

    const openNoteNameLabel = () => {
        console.log("hi");
    };

    const handleChange = (event) => {
        setNewNoteName(event.target.value);
    };

    const addNote = () => {
        const newId = `${notes.length}${Math.floor(Math.random() * 100)}`; // 리스트에 키값 부여하는 문제 더 생각해보기
        const newNote = {
            name: newNoteName,
            id: newId,
        };
        if (!notes) {
            setNote([newNote]);
        } else {
            setNote([...notes, newNote]);
        }
    };

    useEffect(() => {});

    return (
        <>
            <div
                className="note note-name-label"
                onMouseDown={openNoteNameLabel}
            >
                {" "}
                <input
                    type="text"
                    className="collection--input--naming"
                    name="text"
                    onChange={handleChange}
                    value={newNoteName}
                />
                <button type="submit" className="input-btn" onClick={addNote}>
                    add
                </button>
            </div>
            <ul
                role="list"
                className="note-collection stack-large"
                aria-labelledby="list-heading"
            >
                {notes.map((e) => {
                    return <Note key={e.id} name={e.name} />;
                })}
            </ul>
        </>
    );
}
