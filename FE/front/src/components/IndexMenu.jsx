"use client";

import Link from "next/link";

export default function IndexMenu() {
  const theme = "black-white--";
  const className = theme + "index-menu";

  return (
    <ul className={className}>
      <Link href="/">Home</Link>
      <Link href="/notes">Notes</Link>
    </ul>
  );
}
