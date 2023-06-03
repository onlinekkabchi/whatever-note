import { Link } from "react-router-dom";

export default function EditMode(item, index, edited, deleted) {
  const id = String(item.id);
  return (
    <>
      <Link className={"note-" + id} to={id}>
        {item.title}
      </Link>
      <button onClick={() => edited(index)}>edit</button>
      <button onClick={() => deleted(index)}>delete</button>
    </>
  );
}
