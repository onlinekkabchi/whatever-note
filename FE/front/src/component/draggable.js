import { useState, useMemo, useCallback, useEffect } from "react";

const POSITION = { x: 0, y: 0 };

export default function Draggable({ children }) {
    const [mouseState, setMouseState] = useState({
        isDragging: false,
        origin: POSITION,
        translation: POSITION,
    });

    const handleMouseDown = useCallback(({ clientX, clientY }) => {
        const origin = { x: clientX, y: clientY };
        setMouseState((mouseState) => ({
            ...mouseState,
            origin,
            isDragging: true,
        }));
    }, []);

    const handleMouseMove = useCallback(({ clientX, clientY }) => {
        const mouseMovePosition = {
            x: clientX - mouseState.origin.x,
            y: 0,
        };
        setMouseState((mouseState) => ({
            ...mouseState,
            translation: mouseMovePosition,
        }));
    }, []);

    const handleMouseUp = useCallback(() => {
        setMouseState((mouseState) => ({
            ...mouseState,
            translation: POSITION,
            isDragging: false,
        }));
    }, []);

    useEffect(() => {
        if (mouseState.isDragging === true) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else if (mouseState.isDragging === false) {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    }, [mouseState.isDragging, handleMouseMove, handleMouseUp]);

    const styles = useMemo(
        () => ({
            cursor: mouseState.isDragging ? "-webkit-grabbing" : "-webkit-",
            transform: `translate(${mouseState.translation.x}px, ${mouseState.translation.y}px)`,
            transition: mouseState.isDragging ? "none" : "transform 50ms",
            zIndex: 1,
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
