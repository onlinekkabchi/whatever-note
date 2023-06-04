export default function Item(item, index, EDITFORM, DEFAULT) {
  const cardId = "card" + index;

  return (
    <>
      <li key={"content-" + index} id={item.id}>
        {item.edit ? <>{EDITFORM} </> : <>{DEFAULT}</>}
      </li>
    </>
  );
}
