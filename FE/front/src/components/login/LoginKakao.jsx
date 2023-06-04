import img from "../../static/img/kakao_login_medium_narrow.png";
import { kakaoLoginUrl } from "../../url/kakao";

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
    <img src={img} alt="kakao login" style={style} />
    // <img onClick={handleKakaoLogin} src={img} alt="kakao login" style={style} />
  );
}
