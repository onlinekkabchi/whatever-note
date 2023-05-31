// export const origin = "http://localhost:8080";
export const origin = window.location.origin;

export const allNotesUrl = "/api/note";

export const fetchNotes = async (url, token) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchNotes;
