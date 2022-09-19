import { useState, useEffect, useRef, useReducer, useCallback } from "react";
import ChangeName from "./changeName";
import Draggable from "./draggable";

const initialState = <div>테스트중</div>;

const POSITION = { x: 0, y: 0 };

function Button(props) {
    const buttonStyle = {
        background: "#CCD5AE",
        height: "100px",
        // cursor: mouseState.isDragging ? "-webkit-grabbing" : "-webkit-",
        // transform: `translate(${mouseState.translation.x}px, ${mouseState.translation.y}px)`,
        // transition: mouseState.isDragging ? "none" : "transform 50ms",
        zIndex: 1,
    };
    return <div style={buttonStyle}>{props.buttonName}</div>;
}

function buttonReducer(state, action) {
    switch (action.type) {
        case "note-name":
            return <p>{state}</p>;
        case "edit":
            return <Button>Edit</Button>;
        case "remove":
            return <Button>Remove</Button>;
        default:
            throw new Error();
    }
}

export default function Note(props) {
    const noteInitialName = <p>{props.name}</p>;
    const [mouseTragger, setMouseTragger] = useState({
        isDragging: false,
        origin: POSITION,
        translation: POSITION,
    });
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [noteState, dispatch] = useReducer(buttonReducer, noteInitialName);

    const startMouseTragger = useCallback(({ clientX, clientY }) => {
        const origin = { x: clientX, y: clientY };
        setMouseTragger((mouseTragger) => ({
            ...mouseTragger,
            origin,
            isDragging: true,
        }));
        console.log(origin);
        pressTimer();
    }, []);

    const handleMouseTragger = useCallback(({ clientX, clientY }) => {
        const mouseMovePosition = {
            x: clientX,
            y: 0,
        };
        console.log(clientX);
        console.log(mouseMovePosition.x);
        setMouseTragger((mouseTragger) => ({
            ...mouseTragger,
            translation: mouseMovePosition,
        }));
    }, []);

    const stopMouseTragger = useCallback(() => {
        setMouseTragger((mouseTragger) => ({
            ...mouseTragger,
            isDragging: false,
        }));
    }, []);

    const pressTimer = () => {
        if (timerRef.current) return;
        console.log("presstimer");
        timerRef.current = setTimeout(() => {
            setLongPressTriggered(true);
        }, 1000);
    };

    const removePressTimer = () => {
        if (timerRef.current) {
            console.log("removepresstimer");
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    useEffect(() => {
        if (mouseTragger.isDragging === true) {
            window.addEventListener("mousemove", handleMouseTragger);
            window.addEventListener("mouseup", stopMouseTragger);
            window.addEventListener("mouseleave", stopMouseTragger); // mouseleave does not work
        } else if (mouseTragger.isDragging === false) {
            window.removeEventListener("mousemove", handleMouseTragger);
        }
    }, [mouseTragger.isDragging, handleMouseTragger, stopMouseTragger]);

    return (
        <li
            key={props}
            className="note"
            onMouseDown={startMouseTragger}
            onMouseUp={removePressTimer}
        >
            {longPressTriggered ? <ChangeName /> : <>{noteState}</>}
        </li>
    );
}
