import { useState } from "react";

export default function NoteNameTag(props) {
    const [noteName, setNoteName] = useState(<>{props.initialnotename}</>);
    const [newNoteName, setNewNoteName] = useState("");

    const handleChange = (event) => {
        setNewNoteName(event.target.value);
        if (props.decidedNewName) {
            setNoteName(newNoteName);
        }
    };

    const writeNewNoteName = (
        <div className="collection--input-box">
            <input
                type="text"
                className="collection--input--naming"
                name="text"
                onChange={handleChange}
                value={newNoteName}
            />
        </div>
    );

    return <>{props.nameTag ? <>{noteName}</> : <>{writeNewNoteName}</>}</>;
}
