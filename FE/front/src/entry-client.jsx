import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./styles/style.css";
import NoteList from "./components/NoteList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "notelist",
        element: <NoteList />,
      },
    ],
  },
]);

ReactDOM.hydrateRoot(
  document.getElementById("app"),
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
console.log("hydrated");
