import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./styles/style.css";

import NoteList from "./components/NoteList";
// import LoginEmail from "./components/LoginEmail";
import LoginKakao from "./components/LoginKakao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <LoginKakao /> },
      { path: "login/kakao", element: <LoginKakao /> },
      { path: "notes", element: <NoteList /> },
      { path: "cards", element: <NoteList /> },
      { path: "theme", element: <NoteList /> },
      { path: "stickers", element: <NoteList /> },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<RouterProvider router={router} />);
