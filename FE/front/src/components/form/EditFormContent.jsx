export default function EditForm(list, index, update, cancel) {
  const handleSubmit = (e) => {
    e.preventDefault();
    update(index, e.target.elements.title.value);
    console.log(e.target.elements.title.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" defaultValue={list[index].info} />
      <input onClick={() => cancel(index)} type="button" value="cancel" />
      <input type="submit" />
    </form>
  );
}
