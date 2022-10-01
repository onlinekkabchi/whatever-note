import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoteCollection from "./component/noteCollection";
import NoteInsider from "./component/noteInsider";
import { NoteProvider, useNoteState } from "./noteContext";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <NoteCollection />,
            children: [
                {
                    path: "/:id",
                    loader: (e) => {
                        return e;
                    },
                    element: <NoteInsider />,
                },
            ],
        },
    ]);

    return (
        <>
            <div className="App">
                <NoteProvider>
                    <RouterProvider router={router} />
                </NoteProvider>
            </div>
        </>
    );
}
export default App;
