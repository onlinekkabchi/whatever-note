"use client";

import { useState } from "react";
import { app, login } from "../util/realm";

function LoginEmail() {
  const [user, setUser] = useState(app.currentUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {" "}
      {user !== null && user.hasOwnProperty("_accessToken") ? (
        <p>user logged</p>
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
          <button onClick={() => login(email, password)}>login</button>
        </div>
      )}
    </>
  );
}

export default LoginEmail;
