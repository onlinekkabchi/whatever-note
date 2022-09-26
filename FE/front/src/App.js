import { createContext, useReducer, useState } from "react";
import "./style/style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collection from "./component/collection";
import { collectionReducer } from "./component/collection";
import NoteInsider from "./component/noteInsider";

export const NoteContext = createContext();
const InitialData = [{ name: "sample note!", id: "2345888" }];

function App() {
    const [noteData, dispatch] = useReducer(collectionReducer, InitialData);

    const findNote = (noteId) => {
        const result = noteData.filter((e) => (e.id === noteId ? e : false));
        return result[0];
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Collection />,
            loader: () => {
                return InitialData;
            },
            children: [
                {
                    path: "/:id",
                    loader: ({ params }) => {
                        return findNote(params.id);
                    },
                    element: <NoteInsider />,
                },
            ],
        },
    ]);

    return (
        <>
            <NoteContext.Provider value={{ noteData, dispatch }}>
                <RouterProvider router={router} />
            </NoteContext.Provider>
        </>
    );
}
export default App;
