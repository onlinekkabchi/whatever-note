export const lambdaUrl =
  "https://tkimv2gaxyuw5rgsfy3gyowcji0tftej.lambda-url.ap-northeast-2.on.aws/";

export const lambdaReq = {
  method: "POST",
  body: JSON.stringify({ runtime: 11 }),
};

// export async function fetchData(uri, req) {
//   const res = await fetch(uri, req);
//   const result = await res.json();
//   return result;
// }
