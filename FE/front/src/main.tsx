import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./styles/style.css";

import Notes from "./components/note/Notes";
import Cards from "./components/card/Cards";
// import LoginEmail from "./components/LoginEmail";
import LoginKakao from "./components/login/LoginKakao";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <LoginKakao /> },
      { path: "login/kakao", element: <LoginKakao /> },
      {
        path: "notes",
        element: <Notes />,
      },
      { path: "notes/:noteId", element: <Cards /> },

      { path: "theme", element: <div>theme</div> },
      { path: "stickers", element: <div>stickers</div> },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<RouterProvider router={router} />);
