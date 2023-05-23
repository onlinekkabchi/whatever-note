"use client";

import { useState, useEffect } from "react";

function LoginSimple() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async () => {};

  const handleLogOut = async () => {};

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
