import { useState } from "react";

export default function ChangeName() {
    const [noteName, setNoteName] = useState("");
    const [newNoteName, setNewNoteName] = useState("");

    const handleChange = (event) => {
        setNoteName(event.target.value);
    };

    const changeNoteName = () => {
        const newId = noteName.length; // 리스트에 키값 부여하는 문제 더 생각해보기
        const newNote = {
            name: noteName,
            id: newId,
        };
    };

    return (
        <div className="collection--input-box">
            <input
                type="text"
                className="collection--input--naming"
                name="text"
                onChange={handleChange}
                value={noteName}
            />
        </div>
    );
}
