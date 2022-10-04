import { useState } from "react";
import { useNoteDispatch, useNoteState } from "../noteContext";
import Note from "./note";
import { Link, Outlet } from "react-router-dom";
import {
    CollectionContainer,
    InputBox,
    CardList,
} from "./styled-component/collectionStyle";

export default function NoteCollection() {
    const notes = useNoteState();
    const dispatch = useNoteDispatch();
    const [newNoteName, setNewNoteName] = useState("");
    const [open, setOpen] = useState(true);

    const handleChange = (event) => {
        setNewNoteName(event.target.value);
    };

    const addNote = () => {
        if (newNoteName.length > 0) {
            dispatch({ type: "ADD_NOTE", name: newNoteName });
            setNewNoteName("");
        }
        return;
    };
    const handleCollectionSlider = () => {
        if (open === true) {
            setOpen(false);
        } else if (open === false) {
            setOpen(true);
        }
        console.log("sliding");
    };
    return (
        <>
            <CollectionContainer>
                <CardList open={open}>
                    <button
                        onClick={handleCollectionSlider}
                        style={{
                            position: "absolute",
                            marginTop: "15px",
                            width: "100px",
                            left: "680px",
                        }}
                    >
                        slider
                    </button>
                    <InputBox>
                        <Link to="/">
                            <p>아무단어장(Home)</p>
                        </Link>
                        <input
                            type="text"
                            name="text"
                            onChange={handleChange}
                            value={newNoteName}
                        />
                        <button onClick={addNote}>add</button>
                        <button
                            onClick={() => {
                                console.log(notes);
                            }}
                        >
                            check
                        </button>
                    </InputBox>
                    {notes.map((note) => {
                        return (
                            <Note key={note.id} id={note.id} name={note.name} />
                        );
                    })}
                </CardList>
                <Outlet />
            </CollectionContainer>
        </>
    );
}
