import {
    useState,
    useEffect,
    useRef,
    useReducer,
    useCallback,
    useMemo,
} from "react";
import { Button } from "./button";
import NoteNameTag from "./changeName";

const POSITION = { x: 650, y: 0 };

function buttonReducer(state, action) {
    switch (action.type) {
        case "no-button":
            return <></>;
        case "edit":
            return <Button buttonstart={50}>수정버튼임시잠금</Button>;
        case "remove":
            return <Button buttonstart={650}>삭제</Button>;
        default:
            throw new Error();
    }
}

export default function Note(props) {
    const [mouseTragger, setMouseTragger] = useState({
        turnTragger: false,
        origin: POSITION,
        translation: POSITION,
    });
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [noteState, dispatch] = useReducer(buttonReducer, null);

    const startMouseTragger = useCallback(
        ({ clientX, clientY }) => {
            // const origin = { x: clientX, y: clientY };
            setMouseTragger((mouseTragger) => ({
                ...mouseTragger,
                // origin,
                turnTragger: true,
            }));
        },
        [mouseTragger.turnTragger]
    );

    const handleMouseTragger = useCallback(({ clientX, clientY }) => {
        const distance = clientX - mouseTragger.origin.x;
        if (clientX > 400 && distance < -200 && longPressTriggered === false) {
            dispatch({ type: "remove" });
        }
        // const mouseMovePosition = {
        //     x: clientX,
        //     y: 0,
        // };
        // setMouseTragger((mouseTragger) => ({
        //     ...mouseTragger,
        //     translation: mouseMovePosition,
        // }));
    }, []);

    const stopMouseTragger = useCallback(() => {
        setMouseTragger((mouseTragger) => ({
            ...mouseTragger,
            turnTragger: false,
        }));
    }, []);

    const pressTimer = () => {
        console.log("presstimer");
        if (longPressTriggered === true) {
            timerRef.current = setTimeout(() => {
                setLongPressTriggered(false);
                dispatch({ type: "no-button" });
            }, 1000);
        } else if (longPressTriggered === false) {
            timerRef.current = setTimeout(() => {
                setLongPressTriggered(true);
                dispatch({ type: "no-button" });
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
        if (mouseTragger.turnTragger === true) {
            pressTimer();
            window.addEventListener("mousemove", handleMouseTragger);
            window.addEventListener("mouseup", stopMouseTragger);
        } else if (mouseTragger.turnTragger === false) {
            window.removeEventListener("mousemove", handleMouseTragger);
            window.removeEventListener("mouseup", stopMouseTragger);
        }
    }, [
        longPressTriggered,
        mouseTragger.turnTragger,
        handleMouseTragger,
        stopMouseTragger,
    ]);

    const noteStyle = {
        width: "725px",
        height: "100px",
        background: longPressTriggered ? "#CCD5AE" : "#E9EDC9",
        display: "flex",
        alignItems: "center",
        borderRadius: "25px",
        padding: "0 0 0 25px",
    };

    return (
        <li
            style={noteStyle}
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
