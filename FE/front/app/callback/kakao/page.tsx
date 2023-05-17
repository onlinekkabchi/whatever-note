"use client";

import { useEffect } from "react";

export default function Page() {
  const code = new URL(document.location.href).searchParams.get("code");

  useEffect(() => {
    const token = async () =>
      await fetch(
        `http://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT}&code=${code}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => localStorage.setItem("kakao", res))
        .catch((err) => console.log(err));

    token();
  }, []);

  return <div>카카오 로그인 redirect page</div>;
}
