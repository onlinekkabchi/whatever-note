import { useState, useEffect } from "react";
import Draggable from "./draggable";

function ChangeName() {
    const [newNoteName, setnewNoteName] = useState("");
    const [notes, setNote] = useState([]);

    const handleChange = (event) => {
        setnewNoteName(event.target.value);
    };

    const addNote = () => {
        const newId = notes.length; // 리스트에 키값 부여하는 문제 더 생각해보기
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

    return (
        <div className="collection--input-box">
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
    );
}

export default function Note(props) {
    const [editButton, setEditButton] = useState("");
    const [longPressTriggered, setLongPressTriggered] = useState(false);

    const pressAndHold = ({ event }) => {
        setTimeout(() => {
            console.log("press start");
        }, 200);
    };

    const removePressAndHold = () => {};

    useEffect(() => {});

    return (
        <li key={props} className="note" onMouseDown={pressAndHold}>
            {/* {props.name} */}

            {longPressTriggered ? <ChangeName /> : <p>{props.name}</p>}
        </li>
    );
}
