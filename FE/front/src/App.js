import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NoteCollection from "./component/noteCollection.js";
import NoteInsider from "./component/noteInsider.js";
import { NoteProvider } from "./noteContext.js";

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
