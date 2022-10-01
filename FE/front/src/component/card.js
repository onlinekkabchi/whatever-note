import { useContext, useState, useParams, useReducer } from "react";
import styled from "styled-components";
import { useNoteState } from "../noteContext";

const MeaningContainer = styled.li`
    width: 725px;
    height: 100px;
    background: #faedcd;
    display: flex;
    align-items: center;
    border-radius: 25px;
    padding: 0 0 0 25px;
    margin-bottom: 25px;
`;

function cardReducer(state, action) {
    switch (action.type) {
        case "ADD_CONTENT":
            break;
        case "EDIT_CONTENT":
            break;
        case "REMOVE_CONTENT":
            break;
        default:
            break;
    }
}

export default function Card(props) {
    const state = useNoteState();
    const [cardState, cardDispatch] = useReducer(cardReducer, state);

    return (
        <MeaningContainer
            onClick={() => {
                console.log("cards!");
                console.log(cardState);
                console.log(props.id);
            }}
        >
            임시
        </MeaningContainer>
    );
}
