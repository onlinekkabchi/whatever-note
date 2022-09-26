import { useState, useContext } from "react";
import styled from "styled-components";
import { WebNote } from "./note";
import { Outlet } from "react-router-dom";
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

export function collectionReducer(state, action) {
    switch (action.type) {
        case "ADD_NOTE":
            const newId = `${Math.floor(Math.random() * 100)}${state.length}`;
            return [...state, { name: action.name, id: newId }];
        case "CHANGE_NOTE_NAME":
            state.forEach((item) =>
                item.id === action.id ? (item.name = action.name) : item
            );
            return state;
        case "REMOVE_NOTE":
            const newArr = state.filter((item) => item.id !== action.id);
            state = newArr;
            return state;
        default:
            return state;
    }
}

export default function Collection() {
    const [newNoteName, setNewNoteName] = useState("");
    const { noteData, dispatch } = useContext(NoteContext);

    const handleChange = (event) => {
        setNewNoteName(event.target.value);
    };

    const addNote = () => {
        dispatch({ type: "ADD_NOTE", name: newNoteName });
    };

    const changeName = (newName, noteId) => {
        dispatch({
            type: "CHANGE_NOTE_NAME",
            name: newName,
            id: noteId,
        });
    };

    const removeNote = (noteId) => {
        dispatch({ type: "REMOVE_NOTE", id: noteId });
    };

    return (
        <>
            <CollectionContainer>
                <NoteList>
                    <InputBox>
                        <p>아무단어장</p>
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
                                removeNote={removeNote}
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
