import { useState, useMemo, useCallback, useEffect } from "react";

const POSITION = { x: 0, y: 0 };

export default function DraggableExample({ children }) {
    const [mouseState, setMouseState] = useState({
        isDragging: false,
        origin: { x: 0, y: 0 },
        translation: { x: 0, y: 0 },
    });

    // const handleMouseDown = useCallback(({ clientX, clientY }) => {
    //     const origin = { x: clientX, y: clientY };
    //     setMouseState((mouseState) => ({
    //         ...mouseState,
    //         origin,
    //         isDragging: true,
    //     }));

    //     console.log(mouseState.isDragging);
    // }, []);

    const handleMouseDown = ({ clientX, clientY }) => {
        const origin = { x: clientX, y: clientY };
        setMouseState((mouseState) => ({
            ...mouseState,
            origin,
            isDragging: true,
        }));

        console.log(mouseState.isDragging);
    };

    const handleMouseMove = useCallback(
        ({ clientX, clientY }) => {
            const translation = {
                x: clientX - mouseState.origin.x,
                y: clientY - mouseState.origin.y,
            };

            console.log(mouseState.origin);
            console.log(translation);

            setMouseState(() => ({
                ...mouseState,
                translation,
            }));
        },
        [mouseState.origin]
    );

    const handleMouseUp = useCallback(() => {
        setMouseState((mouseState) => ({
            ...mouseState,
            translation: POSITION,
            isDragging: false,
        }));

        console.log(mouseState.isDragging);
    }, []);

    useEffect(() => {
        if (mouseState.isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    }, [mouseState.isDragging, handleMouseMove, handleMouseUp]);

    const styles = useMemo(
        () => ({
            cursor: mouseState.isDragging ? "-webkit-grabbing" : "-webkit-",
            transform: `translate(${mouseState.translation.x}px, ${mouseState.translation.y}px)`,
            transition: mouseState.isDragging ? "none" : "transform 50ms",
            zIndex: 2,
            position: "absolute",
        }),
        [mouseState.isDragging, mouseState.translation]
    );

    return (
        <div style={styles} onMouseDown={handleMouseDown}>
            {children}
        </div>
    );
}