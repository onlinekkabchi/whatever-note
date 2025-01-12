import Contents from "../content/Contents";

export default function Item(item, index, EDITFORM, DEFAULT) {
  const cardId = "card" + index;

  return (
    <>
      <li key={"card-" + index} id={item.id}>
        {item.edit ? <>{EDITFORM} </> : <>{DEFAULT}</>}
      </li>
      <Contents cardId={cardId} open={item.open} />
    </>
  );
}
