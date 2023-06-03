// vite 환경변수 세팅
export const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${
  import.meta.env.VITE_KAKAO_CLIENT_ID
}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT}&response_type=code`;
