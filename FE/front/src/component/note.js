import { useState, useEffect, useRef, useReducer, useCallback } from "react";
import { Button } from "./button";
import NoteNameTag from "./changeName";

const POSITION = { x: 0, y: 0 };

function buttonReducer(state, action) {
    switch (action.type) {
        case "edit":
            return <div>수정버튼임시잠금</div>;
        case "remove":
            return <div>삭제</div>;
        default:
            throw new Error();
    }
}

export default function Note(props) {
    const [mouseTragger, setMouseTragger] = useState({
        isDragging: false,
        origin: POSITION,
        translation: POSITION,
    });
    const [longPressTriggered, setLongPressTriggered] = useState(true);
    const timerRef = useRef(null);
    const [noteState, dispatch] = useReducer(buttonReducer, null);

    const startMouseTragger = useCallback(({ clientX, clientY }) => {
        const origin = { x: clientX, y: clientY };
        setMouseTragger((mouseTragger) => ({
            ...mouseTragger,
            origin,
            isDragging: true,
        }));
    }, []);

    const handleMouseTragger = useCallback(({ clientX, clientY }) => {
        const editDistance = clientX - mouseTragger.origin.x;
        const removeDIstance = mouseTragger.origin.x - clientX;
        if (editDistance > 100) {
            dispatch({ type: "edit" });
            setLongPressTriggered(true);
        } else if (removeDIstance > 100) {
            dispatch({ type: "remove" });
        }
        const mouseMovePosition = {
            x: clientX,
            y: 0,
        };
        // console.log(clientX);
        // console.log(mouseMovePosition.x);
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
        console.log("mouse tragging stoped");
    }, []);

    const pressTimer = () => {
        console.log("presstimer");
        if (longPressTriggered === true) {
            timerRef.current = setTimeout(() => {
                setLongPressTriggered(false);
            }, 1000);
        } else if (longPressTriggered === false) {
            timerRef.current = setTimeout(() => {
                setLongPressTriggered(true);
            }, 1000);
        }
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
            pressTimer();
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
            <NoteNameTag
                decidedNewName={true}
                nameTag={longPressTriggered}
                initialnotename={props.name}
            />
            {noteState}
        </li>
    );
}
