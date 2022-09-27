import { useState } from "react";
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

    const handleChange = (e) => {
        setNewNoteName(e.target.value);
        if (e.target.value.length > 0) {
            setNoteName(newNoteName);
            props.changeName(noteName, props.id);
        }
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
