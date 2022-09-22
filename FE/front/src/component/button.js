import { Children, useCallback, useEffect, useState } from "react";

function Button(props) {
    const [mousePosition, setMousePosition] = useState({
        translation: { x: 120, y: 0 },
    });

    const handleMouseMovePosition = useCallback((event) => {
        const newFormation = { x: event.clientX - 50, y: 0 };
        console.log(newFormation);
        setMousePosition((mousePosition) => ({
            ...mousePosition,
            translation: newFormation,
        }));
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMovePosition);
        console.log("move");

        return () => {
            window.removeEventListener("mousemove", handleMouseMovePosition);
            console.log("unmounted");
        };
    }, []);
    // eventlistener in react still works even after it is removed.
    // https://dev.to/marcostreng/how-to-really-remove-eventlisteners-in-react-3och

    const buttonStyle = {
        background: "#CCD5AE",
        height: "100px",
        width: "200px",
        cursor: "-webkit-grabbing",
        transform: `translate(${mousePosition.translation.x}px, ${mousePosition.translation.y}px)`,

        transition: "transform 50ms",
        position: "absolute",
        zIndex: 1,
    };

    return <div style={buttonStyle}>{props.children}</div>;
}

export { Button };
