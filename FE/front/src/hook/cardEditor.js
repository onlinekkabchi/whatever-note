import { createContext, useState } from "react";
import styled from "styled-components";

const Content = styled.li`
    width: 725px;
    height: 100px;
    background: #faedcd;
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

function cardReducer() {}

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
                    type="text"
                    name="text"
                    onChange={handleCardNameChange}
                    onKeyUp={handleCardNameChange}
                    value={newCardName}
                />
            ) : (
                <>{cardName}</>
            )}
        </>
    );
}

export default function CardEditor(props) {
    const cardPack = createContext(null);
    const [longPressTriggeredForCard, setLongPressTriggeredForCard] =
        useState(false);

    const addCard = () => {
        console.log(cardPack);
    };
    const changeCard = () => {};
    const removeCard = () => {};

    return (
        <Content>
            <CardNameTag
                longPressTriggeredForCard={longPressTriggeredForCard}
                name={props.name}
            />
        </Content>
    );
}
