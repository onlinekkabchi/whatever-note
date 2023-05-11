import "../src/styles/style.css";
import { App } from "../src/App";
import IndexMenu from "../src/components/IndexMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <p>아무단어장 NextJs로 리팩토링중..</p>
        </header>
        <IndexMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
