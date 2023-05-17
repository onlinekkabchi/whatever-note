"use client";

// import { useEffect } from "react";
// import { params } from "../../../src/util/params";

export default function Page() {
  // useEffect(() => {
  //   const kakaoCode = params();
  //   // console.log(kakaoToken);
  //   // setCode(kakaoToken);
  //   async function login() {
  //     const res = await fetch(
  //       `http://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT}&code=${kakaoCode}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  //         },
  //       }
  //     );
  //     if (!res.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const result = await res.json();
  //     console.log(result);
  //     localStorage.setItem("kakao", result);
  //   }

  //   login();
  // }, []);

  return <div>카카오 로그인 redirect page</div>;
}
