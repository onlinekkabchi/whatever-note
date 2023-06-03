import { Link } from "react-router-dom";

export default function IndexMenu() {
  const className = "black-white--index-menu";
  return (
    <ul className={className}>
      <Link to="login/kakao">Kakao</Link>
      <Link to="notes">Notes</Link>

      <Link to="stickers">Stickers</Link>
    </ul>
  );
}
