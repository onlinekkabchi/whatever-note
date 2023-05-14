import { lambdatest } from "../../src/_api/lambda";

export default async function Page() {
  const data = await lambdatest();

  return (
    <div>
      <h3>Notes</h3>
      <p>{data}</p>
    </div>
  );
}
