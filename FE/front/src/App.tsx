import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { app } from "./util/realm";

import IndexMenu from "./components/IndexMenu";
import LoginEmail from "./components/LoginEmail";

export default function App() {
  // const [user, setUser] = useState(app.currentUser);
  const storage = app.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/notelist");
  }, []);

  return (
    <div className="app">
      <p>아무단어장 리팩토링</p>
      <IndexMenu />
      {storage !== null ? <Outlet /> : <LoginEmail />}
    </div>
  );
}
