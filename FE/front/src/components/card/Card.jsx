import Contents from "../content/Contents";

export default function Item(item, index, EDITFORM, DEFAULT) {
  const cardId = "card" + index;

  return (
    <>
      <li key={item.id} id={item.id}>
        {item.edit ? <>{EDITFORM} </> : <>{DEFAULT}</>}
      </li>
      {/* {item.open ? <Content cardId={cardId} /> : <></>} */}
      <Contents cardId={cardId} open={item.open} />
    </>
  );
}
