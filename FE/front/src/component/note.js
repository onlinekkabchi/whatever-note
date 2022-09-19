import { useState, useEffect, useRef, useReducer, useCallback } from "react";
import ChangeName from "./changeName";
import { Button } from "./button";

const POSITION = { x: 0, y: 0 };

function buttonReducer(state, action) {
    switch (action.type) {
        case "note-name":
            return <p>{state}</p>;
        case "edit":
            return <Button />;
        case "remove":
            return <Button />;
        default:
            throw new Error();
    }
}

export default function Note(props) {
    const noteInitialName = <>{props.name}</>;
    const [mouseTragger, setMouseTragger] = useState({
        isDragging: false,
        origin: POSITION,
        translation: POSITION,
    });
    const [longPressTriggered, setLongPressTriggered] = useState({
        holdEnoughTime: false,
    });
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
    }, []);

    const handleMouseTragger = useCallback(({ clientX, clientY }) => {
        if (clientX - mouseTragger.origin.x) {
            dispatch({ type: "edit" });
        }
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
        console.log("presstimer");
        if (longPressTriggered.holdEnoughTime === true) {
            timerRef.current = setTimeout(() => {
                setLongPressTriggered({ holdEnoughTime: false });
            }, 1000);
        } else if (longPressTriggered.holdEnoughTime === false) {
            timerRef.current = setTimeout(() => {
                setLongPressTriggered({ holdEnoughTime: true });
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
            {longPressTriggered.holdEnoughTime ? (
                <ChangeName />
            ) : (
                <div>{noteState}</div>
            )}
        </li>
    );
}
