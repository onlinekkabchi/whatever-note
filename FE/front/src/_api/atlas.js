export async function helloworld() {
  const result = await fetch("http://localhost:3000/api/handler", {
    method: "POST",
    body: JSON.stringify({ hi: "hi" }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));

  return result;
}

export async function getNoteList() {
  const result = await fetch("");
}
