// import { Lambda } from "@aws-sdk/client-lambda";

// const lambda = new Lambda({ region: "ap-northeast-2" });

// const params = {
//   FunctionName: "whatever-note-lambda-http",
//   Payload: JSON.stringify({ key1: "value1", key2: "value2" }),
// };

// lambda.invoke(params, (err, data) => {
//   if (err) {
//     console.log(err, err.stack);
//   } else {
//     console.log(data);
//   }
// });

//https://nextjs.org/docs/app/building-your-application/data-fetching/fetching

export const lambdatest = async () => {
  const res = await fetch(
    // uri
    "https://tkimv2gaxyuw5rgsfy3gyowcji0tftej.lambda-url.ap-northeast-2.on.aws/"
  );
  const json = await res.json();
  const stringified = await JSON.stringify(json);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return stringified;
};
