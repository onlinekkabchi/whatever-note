import { useState } from "react";

export default function EditMode(item, index, edited, deleted) {
  const id = String(item.id);
  const className = "content-" + id;

  return (
    <>
      <a className={className}>{item.info}</a>
      <button onClick={() => edited(index)}>edit</button>
      <button onClick={() => deleted(index)}>delete</button>
    </>
  );
}
