import src from "../static/img/kakao_login_medium_narrow.png";
import { kakaoLoginUrl } from "../url/kakao";

const style = {
  cursor: "pointer",
};

export default function LoginKakao() {
  const handleKakaoLogin = async () => {
    try {
      window.location.href = kakaoLoginUrl;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <img onClick={handleKakaoLogin} src={src} alt="kakao login" style={style} />
  );
}
