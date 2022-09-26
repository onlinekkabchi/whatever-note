function WebButton(props) {
    const buttonStyle = {
        height: "100px",
        width: "200px",
        background: "#CCD5AE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "-webkit-grabbing",
        // left: `${props.buttonStartPosition}`,
        visibility: `${props.showWebButtonTag}`,
        position: "absolute",
        zIndex: 1,
        borderRadius: "25px",
        fontSize: "18px",
    };

    return (
        <div style={buttonStyle} onClick={props.removeThisNote}>
            {props.children}
        </div>
    );
}

export { WebButton };
