import { useState, useContext, useEffect, useCallback } from "react";
import styled from "styled-components";
import { WebNote } from "./note";
import { Link, Outlet } from "react-router-dom";
import { NoteContext } from "../App";

const CollectionContainer = styled.div`
    display: flex;
`;

const InputBox = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 15px;
`;

const NoteList = styled.div`
    background: #fffdee;
    // margin: 100px;
    z-index: 1;
    position: absolute;
    left: 550px;
    border: 1px solid #000000;
`;

export default function Collection() {
    const [newNoteName, setNewNoteName] = useState("");
    const { noteData, dispatch } = useContext(NoteContext);

    const handleChange = (event) => {
        setNewNoteName(event.target.value);
    };

    const addNote = () => {
        console.log(noteData);
        if (newNoteName.length > 0) {
            dispatch({ type: "ADD_NOTE", name: newNoteName });
            setNewNoteName("");
        }
        return;
    };

    const changeName = (newName, noteId) => {
        dispatch({
            type: "CHANGE_NOTE_NAME",
            name: newName,
            id: noteId,
        });
    };

    return (
        <>
            <CollectionContainer>
                <NoteList>
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
                                console.log(noteData);
                            }}
                        >
                            check
                        </button>
                    </InputBox>
                    {noteData.map((e) => {
                        return (
                            <WebNote
                                key={e.id}
                                id={e.id}
                                name={e.name}
                                changeName={changeName}
                            />
                        );
                    })}
                </NoteList>
                <Outlet />
            </CollectionContainer>
        </>
    );
}
