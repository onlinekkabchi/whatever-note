import "../src/styles/style.css";
import LoginKakao from "../src/components/LoginKakao";
import LoginSimple from "../src/components/LoginSimple";

export default function () {
  return (
    <section>
      <LoginSimple />
      <LoginKakao />
      {/* <LoginEmail /> */}
    </section>
  );
}
