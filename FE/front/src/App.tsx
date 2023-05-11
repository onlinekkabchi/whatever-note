import { useState } from "react";

import { app } from "./util/realm";
import LoginEmail from "./components/LoginEmail";
import NoteList from "./components/NoteList";

export default function App() {
  const [user, setUser] = useState(app.currentUser);

  return (
    <div className="app">
      <div>app</div>
      {user !== null && user.hasOwnProperty("_accessToken") ? (
        <div>user</div>
      ) : (
        <LoginEmail />
      )}
      <NoteList />
    </div>
  );
}
