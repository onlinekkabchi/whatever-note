//
import { createContext, useReducer } from "react";

function cardReducer() {}

function CardEditor(initialCardPack) {
    const [cards, setCards] = useState(initialCardPack);

    const addCard = () => {};
    const changeCard = () => {};
    const removeCard = () => {};

    return [cards, addCard, changeCard, removeCard];
}
