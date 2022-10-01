import { useState } from "react";
import { useNoteDispatch } from "../noteContext";

const inputstyle = {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
};

export default function NoteNameTag(props) {
    const [noteName, setNoteName] = useState(`${props.name}`);
    const [newNoteName, setNewNoteName] = useState(`${props.name}`);
    const dispatch = useNoteDispatch();

    const handleChange = (e) => {
        setNewNoteName(e.target.value);
        setNoteName(newNoteName);
        dispatch({
            type: "CHANGE_NOTE_NAME",
            name: noteName,
            id: props.id,
        });
    };

    return (
        <>
            {props.longPressTriggered ? (
                <input
                    style={inputstyle}
                    type="text"
                    name="text"
                    onChange={handleChange}
                    onKeyUp={handleChange}
                    value={newNoteName}
                />
            ) : (
                <>{noteName}</>
            )}
        </>
    );
}
