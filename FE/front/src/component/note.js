import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { WebButton } from "./button";
import NoteNameTag from "./changeName";

function WebNote(props) {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [showWebButton, setShowWebButton] = useState("hidden");

    const startMouseTragger = (event) => {
        switch (event.detail) {
            case 1: {
                pressTimer();
                break;
            }
            case 2: {
                setShowWebButton("visible");
                setTimeout(() => {
                    setShowWebButton("hidden");
                }, 5000);
                console.log("double click!");
                break;
            }
            default:
                break;
        }
    };

    const pressTimer = () => {
        console.log("presstimer");
        timerRef.current = setTimeout(() => {
            console.log("presstimer inside");
            longPressTriggered
                ? setLongPressTriggered(false)
                : setLongPressTriggered(true);
        }, 1000);
    };

    const removePressTimer = () => {
        if (timerRef.current) {
            console.log("removepresstimer");
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const removeThisNote = () => {
        props.removeNote(props.id);
    };

    const noteStyle = {
        width: "725px",
        height: "100px",
        background: longPressTriggered ? "#CCD5AE" : "#E9EDC9",
        display: "flex",
        alignItems: "center",
        borderRadius: "25px",
        padding: "0 0 0 25px",
        marginBottom: "25px",
    };

    return (
        <li
            style={noteStyle}
            key={props.id}
            className="note"
            onMouseDown={startMouseTragger}
            onMouseUp={removePressTimer}
        >
            {longPressTriggered ? (
                <NoteNameTag
                    decidedNewName={true}
                    nameTag={longPressTriggered}
                    initialnotename={props.name}
                    id={props.id}
                    changeName={props.changeName}
                />
            ) : (
                <>
                    <Link
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            border: "1px solid",
                            textDecoration: "none",
                        }}
                        to={props.id}
                    >
                        {props.name}
                    </Link>
                    <WebButton
                        showWebButtonTag={showWebButton}
                        buttonStartPosition={"550px"}
                        removeThisNote={removeThisNote}
                    >
                        이 삭제버튼은 5초 후 사라집니다. 짜잔.
                    </WebButton>
                </>
            )}
        </li>
    );
}

export { WebNote };
