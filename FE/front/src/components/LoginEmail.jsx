"use client";

import { useState, useEffect } from "react";
import { app, login, logout } from "../util/realm";

const style = {
  width: "180px",
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
};

function LoginEmail() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {
    await login(email, password).then((result) => setUser(result));
  };

  const handleLogOut = async () => {
    await logout().then((result) => setUser(result));
  };

  useEffect(() => {
    if (app.currentUser !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
    console.log(app.currentUser);
  }, []);

  return (
    <div>
      {user ? (
        <div style={style}>Realm User Logged In</div>
      ) : (
        <div style={{ marginTop: "2%" }}>
          <input
            type="email"
            name="email"
            placeholder="sample@sample.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="password"
            placeholder="sample1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogIn}>login</button>
        </div>
      )}
    </div>
  );
}

export default LoginEmail;
