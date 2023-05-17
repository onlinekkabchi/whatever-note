// "use client";

import "../src/styles/style.css";
import LoginEmail from "../src/components/LoginEmail";
import LoginKakao from "../src/components/LoginKakao";
// import Link from "next/link";

export default function Page() {
  // return <LoginEmail />;
  return (
    <section>
      {/* <Link href="/">Home</Link>
      <Link href="/notes">Notes</Link> */}
      <LoginEmail />
      <LoginKakao />
    </section>
  );
}
