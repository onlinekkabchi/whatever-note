export default function collectionReducer(state, action) {
    switch (action.type) {
        case "ADD_NOTE":
            const newId = `${Math.floor(Math.random() * 100)}${state.length}`;
            return [...state, { name: action.name, id: newId }];
        case "CHANGE_NOTE_NAME":
            state.forEach((item) =>
                item.id === action.id ? (item.name = action.name) : item
            );
            return state;
        case "REMOVE_NOTE":
            const newArr = state.filter((item) => item.id !== action.id);
            state = newArr;
            return state;
        default:
            return state;
    }
}
