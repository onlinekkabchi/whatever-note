export const fetchAPI = async (urls, token) => {
  // try {
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json;charset=UTF-8",
  //       Authorization: `Bearer ${token}`,
  //       Accept: "application/json",
  //     },
  //   });

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch notes");
  //   }

  //   const data = await response.json();

  //   return data;
  // } catch (error) {
  //   console.error(error);
  // }

  const requests = urls.map(async (url) => {
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
        throw new Error(`Failed to fetch data from ${url}`);
      }

      const data = await response.json();

      return data.data ? data : null;
    } catch (err) {
      console.log("fetch 에러났당.. " + err);
      return null;
    }
  });

  try {
    const response = await Promise.all(requests);
    return response.find((data) => data !== null);
  } catch (err) {
    console.error(err);
    return null;
  }
};
