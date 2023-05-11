export default function handler(request, response) {
  try {
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  } catch (e) {
    response.status(405).json({ error: e });
  }
}
