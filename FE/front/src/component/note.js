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
    });
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [noteState, dispatch] = useReducer(buttonReducer, null);

    const startMouseTragger = (event) => {
        switch (event.detail) {
            case 1: {
                pressTimer();
                setMouseTragger((mouseTragger) => ({
                    ...mouseTragger,
                    turnTragger: true,
                }));
                break;
            }
            case 2: {
                console.log("double click!");
                break;
            }
            default:
                break;
        }
    };

    const handleMouseTragger = useCallback(({ clientX, movementX }) => {
        // console.log(clientX);
        // console.log(movementX);
        if (movementX < -2) {
            dispatch({ type: "remove" });
            if (movementX < -2 && clientX < 300) {
                props.removeNote(props.id);
            }
        }
    }, []);

    const stopMouseTragger = useCallback(() => {
        dispatch({ type: "no-button" });
        setMouseTragger((mouseTragger) => ({
            ...mouseTragger,
            turnTragger: false,
        }));
    }, []);

    const pressTimer = () => {
        console.log("presstimer");
        timerRef.current = setTimeout(() => {
            console.log("presstimer inside");
            longPressTriggered
                ? setLongPressTriggered(false)
                : setLongPressTriggered(true);
            dispatch({ type: "no-button" });
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
        if (mouseTragger.turnTragger === true) {
            window.addEventListener("mousemove", handleMouseTragger);
            window.addEventListener("mouseup", stopMouseTragger);
        } else if (mouseTragger.turnTragger === false) {
            window.removeEventListener("mousemove", handleMouseTragger);
        }
    }, [mouseTragger.turnTragger, handleMouseTragger, stopMouseTragger]);

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
            {/* <button key={props} onClick={() => removethisnote(props.id)}>
                remove
            </button> */}
        </li>
    );
}
