import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import NoteNameTag from "./noteNameTag";
import { useNoteDispatch } from "../noteContext";
import { Button, NoteContainer } from "./styled-component/noteStyle";

export default function Note(props) {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [buttonState, showButton] = useState("hidden");
    const dispatch = useNoteDispatch();
    const navigate = useNavigate();

    const startMouseTragger = (event) => {
        switch (event.detail) {
            case 1: {
                pressTimer();
                navigate(`${props.id}`);
                break;
            }
            case 2: {
                showButton("visible");
                setTimeout(() => {
                    showButton("hidden");
                }, 5000);
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

    const removeNote = () => {
        navigate("/");
        dispatch({ type: "REMOVE_NOTE", id: props.id });
    };

    return (
        <>
            <NoteContainer
                key={props.id}
                onMouseDown={startMouseTragger}
                onMouseUp={removePressTimer}
                longPressTriggered={longPressTriggered}
            >
                <NoteNameTag
                    name={props.name}
                    id={props.id}
                    longPressTriggered={longPressTriggered}
                />
                <Button
                    buttonStartPosition={"550px"}
                    showButton={buttonState}
                    onClick={removeNote}
                >
                    이 버튼은 5초후 사라집니다
                </Button>
            </NoteContainer>
        </>
    );
}
