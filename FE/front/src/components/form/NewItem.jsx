export default function NewForm(list, create) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.title.value;

    if (value.length > 0) {
      create(value, list.length + 1);
    } else {
      return;
    }

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <input type="submit" />
    </form>
  );
}
