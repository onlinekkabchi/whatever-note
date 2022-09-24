import { useEffect, useState, createContext } from "react";
import styled from "styled-components";
import { Note, WebNote } from "./note";

const InputBox = styled.div`
    position: absolute;
    top: 10px;
`;
const CollectionList = styled.div`
    background: #f6f6f6;
    position: absolute;
    top: 150px;
`;

export default function Collection() {
    const [newNoteName, setNewNoteName] = useState("");
    const [notes, setNotes] = useState([]);

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
            setNotes([newNote]);
        } else {
            setNotes([...notes, newNote]);
        }
    };

    const removeNote = (noteId) => {
        const preNotes = [...notes];
        let newNotes = [];
        preNotes.map((each) => {
            each.id !== noteId ? newNotes.push(each) : console.log(each);
        });

        // newNotes.filter((each) => each.id !== noteId);
        console.log(newNotes);
        console.log(preNotes);
        return setNotes(newNotes);
    };

    const writeNoteList = notes.map((e) => {
        return (
            <WebNote
                key={e.id}
                id={e.id}
                name={e.name}
                removeNote={removeNote}
            />
        );
    });

    return (
        <>
            <InputBox>
                <p>아무단어장</p>
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
                <button
                    onClick={() => {
                        console.log(notes);
                    }}
                >
                    check
                </button>
            </InputBox>
            <CollectionList>{writeNoteList}</CollectionList>
        </>
    );
}
