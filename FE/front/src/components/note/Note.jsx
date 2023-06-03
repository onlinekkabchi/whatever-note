export default function Item(item, index, EDITFORM, DEFAULT) {
  return <li key={index}>{item.edit ? <>{EDITFORM} </> : <>{DEFAULT}</>}</li>;
}
