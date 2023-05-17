"use client";

import { useState, useEffect } from "react";
import { kakaoLoginUrl } from "../_api/kakao";

export default function LoginKakao() {
  const handleKakaoLogin = async () => {
    try {
      window.location.href = kakaoLoginUrl;
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return <button onClick={() => handleKakaoLogin()}>kakao login</button>;
}
