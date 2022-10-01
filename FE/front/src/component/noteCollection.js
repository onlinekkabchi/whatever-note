import { useState } from "react";
import styled from "styled-components";
import { useNoteDispatch, useNoteState } from "../noteContext";
import Note from "./note";
import { Link, Outlet } from "react-router-dom";

const CollectionContainer = styled.div`
    display: flex;
`;

const InputBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 15px;
`;

const CardList = styled.div`
    background: #fffdee;
    // margin: 100px;
    z-index: 1;
    position: absolute;
    left: 900px;
    border: 1px solid #000000;
`;

export default function NoteCollection() {
    const notes = useNoteState();
    const dispatch = useNoteDispatch();
    const [newNoteName, setNewNoteName] = useState("");

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
    return (
        <>
            <CollectionContainer>
                <CardList>
                    <InputBox>
                        <Link to="/">
                            <p>아무단어장(Home)</p>
                        </Link>
                        <input
                            type="text"
                            className="collection--input--naming"
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
