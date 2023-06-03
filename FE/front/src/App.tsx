import { useEffect } from "react";
import { AuthContextProvider } from "./contexts/authContext";
import IndexMenu from "./components/index/IndexMenu";
import { Outlet, useNavigate } from "react-router-dom";
import paramToken from "./util/param-token";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = paramToken();
    if (token) {
      navigate(`/notes?token=${token}`);
    } else {
      navigate("/login/kakao");
    }
  }, [navigate]);

  return (
    <>
      <AuthContextProvider>
        <IndexMenu />
        <main>
          <Outlet />
        </main>
      </AuthContextProvider>
    </>
  );
}
