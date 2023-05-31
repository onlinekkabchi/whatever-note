export default function paramToken() {
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("token");

  return token;
}
