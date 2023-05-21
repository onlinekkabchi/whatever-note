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
          <h3>아무단어장</h3>
        </header>
        <IndexMenu />
        <main>{children}</main>
      </body>
    </html>
  );
}
