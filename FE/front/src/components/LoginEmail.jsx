import { useState } from "react";
import { app, login, logout } from "../util/realm";

export default function LoginEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      await login(email, password).then((res) => setLoggedIn(res));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  if (loggedIn) {
    return (
      <div>
        <p>Logged</p>
        <button onClick={logout}>wanna out?</button>
      </div>
    );
  }

  return (
    <div>
      {/* <input
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
      <button onClick={handleLogin}>login</button> */}
      <button>click and simply login</button>
    </div>
  );
}
