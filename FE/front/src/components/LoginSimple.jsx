"use client";

import { useState, useEffect } from "react";
import { app, login, logout } from "../util/realm";

const style = {
  width: "180px",
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
};

function LoginSimple() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    await login(email, password).then((result) => setUser(result));
  };

  const handleLogOut = async () => {
    await logout().then((result) => setUser(result));
  };
  return (
    <div className="login-simple">
      <p>Login Simply</p>
      <input
        type="email"
        name="email"
        placeholder="id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="button" onClick={handleLogIn} value="login" />
    </div>
  );
}

export default LoginSimple;
