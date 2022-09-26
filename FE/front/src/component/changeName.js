import { useState } from "react";
const inputstyle = {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
};

export default function NoteNameTag(props) {
    const [noteName, setNoteName] = useState(`${props.initialnotename}`);
    const [newNoteName, setNewNoteName] = useState(`${props.initialnotename}`);

    const handleChange = (e) => {
        setNewNoteName(e.target.value);
        if (props.decidedNewName) {
            setNoteName(newNoteName);
            props.changeName(newNoteName, props.id);
        }
    };

    return (
        <>
            {props.nameTag ? (
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
