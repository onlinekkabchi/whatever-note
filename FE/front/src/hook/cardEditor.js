import { createContext, useState } from "react";
import styled from "styled-components";

const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    width: 725px;
    min-height: 100px;
    height: auto;
    background: #faedcd;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

const Content = styled.li`
    width: 670px;
    min-height: 53px;
    background: #fffdee;
    display: flex;
    align-items: center;
    border-radius: 15px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

function cardReducer() {}

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

    const addCard = () => {};
    const changeCard = () => {};
    const removeCard = () => {};

    return (
        <CardContainer>
            <CardNameTag
                longPressTriggeredForCard={longPressTriggeredForCard}
                name={props.name}
            />
            {props.contents.map((e) => (
                <Content>{e}</Content>
            ))}
        </CardContainer>
    );
}
