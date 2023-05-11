"use client";

import { useEffect, useState } from "react";

import { app } from "./util/realm";

import LoginEmail from "./components/LoginEmail";
import IndexMenu from "./components/IndexMenu";

function App() {
  const [user, setUser] = useState(app.currentUser);
  // const user = app.currentUser;

  useEffect(() => {
    console.log("next test");
    console.log(user);
  }, []);

  return (
    <div className="app">
      <p>nextjs client component</p>
      <IndexMenu />
      {user ? <p>유저 로그인 성공</p> : <LoginEmail />}
    </div>
  );
}

export { App };
