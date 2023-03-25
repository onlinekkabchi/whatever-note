import { createContext, useReducer, useContext, useEffect } from "react";
import { createCard, editCard, removeCard } from "./api";
import { app } from "../util/realm";
import { useParams } from "react-router-dom";

const createUserCard = (noteId, cardTitle, cardId) => {
  app.currentUser.functions.createUserCard({
    userId: app.currentUser.id,
    noteId: noteId,
    cardTitle: cardTitle,
    cardId: cardId,
  });
};

const CardStateContext = createContext(null);
const CardDispatchContext = createContext(null);

export function cardReducer(state, action) {
  switch (action.type) {
    case "SET_CARDS":
      return action.data;
    case "ADD_CARD":
      const cardIdForm = new Date();
      const cardId = cardIdForm.toString().split(" ").join("").slice(3, 20);
      createUserCard(action.noteId, action.cardTitle, cardId);
      return [...state, { cardId: cardId, cardTitle: action.cardTitle }];
    case "EDIT_CARD":
      const editcardquery = {
        noteid: action.noteId,
        cardid: action.cardId,
        title: action.title,
      };
      editCard(editcardquery);
      return state.map((item) =>
        item.id === action.id ? { id: item.id, title: action.title } : item
      );
    case "REMOVE_CARD":
      const removecardquery = {
        noteid: action.noteId,
        cardid: action.cardId,
      };
      removeCard(removecardquery);
      return state.filter((item) => item.id !== action.cardId);

    default:
      return state;
  }
}

export function CardProvider({ children }) {
  const param = useParams();
  const noteId = param.id;
  const [state, dispatch] = useReducer(cardReducer, []);

  const getUserCardPack = async () => {
    const cardpack = await app.currentUser.functions.getUserCardPack({
      userId: app.currentUser.id,
      noteId: noteId,
    });
    console.log(cardpack.message);
    console.log(cardpack.data);
    dispatch({ type: "SET_CARDS", data: cardpack.data.cardPack });
  };

  useEffect(() => {
    getUserCardPack();
  }, []);

  return (
    <CardStateContext.Provider value={state}>
      <CardDispatchContext.Provider value={dispatch}>
        {children}
      </CardDispatchContext.Provider>
    </CardStateContext.Provider>
  );
}

export function useCardState() {
  return useContext(CardStateContext);
}

export function useCardDispatch() {
  return useContext(CardDispatchContext);
}