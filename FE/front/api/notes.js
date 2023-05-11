export default function notesAPI(request, response) {
  response.status(200).json({ notes: "note title" });
}
