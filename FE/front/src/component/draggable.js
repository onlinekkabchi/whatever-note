import { useState, useMemo, useCallback, useEffect } from "react";

const POSITION = { x: 0, y: 0 };

export default function Draggable({ children }) {
    const [mouseState, setMouseState] = useState({
        isDragging: false,
        origin: POSITION,
        translation: POSITION,
    });

    const handleMouseOver = useCallback(({ clientX, clientY }) => {
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
            window.addEventListener("mouseleave", handleMouseUp); // element와 마우스 위치가 어긋날때 isDragging의 상태가 바뀌지 않는 에러 방지.
        } else if (mouseState.isDragging === false) {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }
    }, [mouseState.isDragging, handleMouseMove, handleMouseUp]);

    const styles = useMemo(
        () => ({
            background: "#CCD5AE",
            height: "100px",
            cursor: mouseState.isDragging ? "-webkit-grabbing" : "-webkit-",
            transform: `translate(${mouseState.translation.x}px, ${mouseState.translation.y}px)`,
            transition: mouseState.isDragging ? "none" : "transform 50ms",
            zIndex: 1,
        }),
        [mouseState.isDragging, mouseState.translation]
    );

    return (
        <div style={styles} onMouseOver={handleMouseOver}>
            {children}
        </div>
    );
}
