import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./styled-component/button";
import NoteNameTag from "./noteNameTag";
import { NoteContext } from "../App";
import styled from "styled-components";

const NoteContainer = styled.li`
    width: 725px;
    height: 100px;
    background: ${(props) =>
        props.longPressTriggered ? "#CCD5AE" : "#E9EDC9"};
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

function WebNote(props) {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [buttonState, showButton] = useState("hidden");
    const { dispatch } = useContext(NoteContext);
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

    const removeThisNote = () => {
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
                    longPressTriggered={longPressTriggered}
                />
                <Button
                    buttonStartPosition={"550px"}
                    showButton={buttonState}
                    onClick={removeThisNote}
                >
                    이 버튼은 5초후 사라집니다
                </Button>
            </NoteContainer>
        </>
    );
}

export { WebNote };
