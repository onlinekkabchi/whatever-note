"use client";

import { useState, useEffect } from "react";
import { kakaoLoginUrl } from "../_api/kakao";
import kakaosrc from "../static/img/kakao_login_medium_narrow.png";
import Image from "next/image";

export default function LoginKakao() {
  const handleKakaoLogin = async () => {
    try {
      window.location.href = kakaoLoginUrl;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Image style={{ cursor: "pointer" }} src={kakaosrc} alt="kakao login" />
      <p style={{ fontSize: "12px" }}>
        카카오 로그인 기능 완성되었으나 지금은 작동 안되게 만들어두었음!
      </p>
    </>
  );
}
