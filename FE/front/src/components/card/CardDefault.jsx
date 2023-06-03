import { useState } from "react";

export default function EditMode(item, index, edited, deleted, open) {
  const id = String(item.id);
  const className = "card-" + id;

  return (
    <>
      <a className={className} onClick={() => open(index)}>
        {item.title}
      </a>
      <button onClick={() => edited(index)}>edit</button>
      <button onClick={() => deleted(index)}>delete</button>
    </>
  );
}
