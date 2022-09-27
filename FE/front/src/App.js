import { createContext, useReducer } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Collection from "./component/collection";
import collectionReducer from "./component/collectionReducer";
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
            <div className="App">
                <NoteContext.Provider value={{ noteData, dispatch }}>
                    <RouterProvider router={router} />
                </NoteContext.Provider>
            </div>
        </>
    );
}
export default App;
