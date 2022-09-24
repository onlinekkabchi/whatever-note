import { useCallback, useEffect, useState } from "react";

function Button(props) {
    const [mousePosition, setMousePosition] = useState({
        translation: { x: props.buttonstart, y: 0 },
    });

    const handleMouseMovePosition = useCallback((event) => {
        const newFormation = { x: event.clientX - 150, y: 0 };
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
        height: "100px",
        width: "200px",
        background: "#CCD5AE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "-webkit-grabbing",
        transform: `translate(${mousePosition.translation.x}px, ${mousePosition.translation.y}px)`,
        transition: "transform 60ms",
        position: "absolute",
        zIndex: 1,
        borderRadius: "25px",
    };

    return <div style={buttonStyle}>{props.children}</div>;
}

function WebButton(props) {
    const buttonStyle = {
        height: "100px",
        width: "200px",
        background: "#CCD5AE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "-webkit-grabbing",
        left: `${props.buttonStartPosition}`,
        visibility: `${props.showWebButtonTag}`,
        position: "absolute",
        zIndex: 1,
        borderRadius: "25px",
        fontSize: "18px",
    };

    return (
        <div style={buttonStyle} onClick={props.removeButton}>
            {props.children}
        </div>
    );
}

export { Button, WebButton };
