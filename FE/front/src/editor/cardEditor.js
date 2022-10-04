import { useState } from "react";
import { CardContainer } from "../component/styled-component/cardStyle.js";

const inputstyle = {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
};

function CardNameTag(props) {
    const [cardName, setCardName] = useState(`${props.name}`);
    const [newCardName, setNewCardName] = useState(`${props.name}`);

    const handleCardNameChange = (e) => {
        setNewCardName(e.target.value);
        setCardName(newCardName);
    };

    return (
        <>
            {props.longPressTriggeredForCard ? (
                <input
                    style={inputstyle}
                    type="text"
                    name="text"
                    onChange={handleCardNameChange}
                    onKeyUp={handleCardNameChange}
                    value={newCardName}
                />
            ) : (
                <div
                    style={{
                        display: "flex",
                        height: "100px",
                        alignItems: "center",
                    }}
                    onClick={() => {
                        console.log("카드네임클릭 : " + cardName);
                    }}
                >
                    {cardName}
                </div>
            )}
        </>
    );
}

export default function CardEditor(props) {
    const [longPressTriggeredForCard, setLongPressTriggeredForCard] =
        useState(false);
    const [openCard, setOpenCard] = useState(false);

    const openContents = () => {
        console.log("openContetns");
        if (openCard) {
            setOpenCard(false);
        } else if (openCard === false) {
            setOpenCard(true);
        }
    };

    const contentStyle = {
        display: `${openCard ? "block" : "none"}`,
        width: "670px",
        background: "#fffdee",
        alignItems: "center",
        borderRadius: "15px",
        padding: "15px",
        marginBottom: "25px",
    };

    return (
        <CardContainer onClick={openContents} openCard={openCard}>
            <CardNameTag
                longPressTriggeredForCard={longPressTriggeredForCard}
                name={props.name}
            />
            <button
                onClick={() => {
                    if (longPressTriggeredForCard === true) {
                        setLongPressTriggeredForCard(false);
                    } else if (longPressTriggeredForCard === false) {
                        setLongPressTriggeredForCard(true);
                    }
                }}
            >
                setPressTrigger
            </button>
            {props.contents.map((e, index) => (
                <div style={contentStyle} key={index}>
                    {e}
                </div>
            ))}
        </CardContainer>
    );
}
