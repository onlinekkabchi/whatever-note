import { createContext, useReducer, useContext, useRef } from "react";

const InitialNote = [
    {
        name: "sample note!",
        id: "1",
        cards: [
            {
                name: "name",
                card_id: "1",
                contents: [],
            },
            {
                name: "다른단어",
                card_id: "2",
                contents: [],
            },
        ],
    },
    {
        name: "sample note 두번째!!",
        id: "2",
        cards: [
            {
                name: "not",
                card_id: "1",
                contents: [],
            },
            {
                name: "뭘 써야하는걸까",
                card_id: "2",
                contents: [],
            },
        ],
    },
];

const NoteStateContext = createContext(null);
const NoteDispatchContext = createContext(null);

function noteReducer(state, action) {
    switch (action.type) {
        case "ADD_NOTE":
            const newId = `${Math.floor(Math.random() * 100)}`;
            return [...state, { name: action.name, id: newId, cards: {} }];
        case "CHANGE_NOTE_NAME":
            const noteLocation = state.findIndex(
                (item) => item.id === action.id
            );
            state.splice(noteLocation, 1, {
                name: action.name,
                id: action.id,
                cards: {},
            });
            return state;
        case "REMOVE_NOTE":
            const newArr = state.filter((item) => item.id !== action.id);
            state = newArr;
            return state;
        default:
            return state;
    }
}

function NoteProvider({ children }) {
    const [state, dispatch] = useReducer(noteReducer, InitialNote);

    return (
        <NoteStateContext.Provider value={state}>
            <NoteDispatchContext.Provider value={dispatch}>
                {children}
            </NoteDispatchContext.Provider>
        </NoteStateContext.Provider>
    );
}

function useNoteState() {
    return useContext(NoteStateContext);
}

function useNoteDispatch() {
    return useContext(NoteDispatchContext);
}

export { useNoteState, useNoteDispatch, NoteProvider };
