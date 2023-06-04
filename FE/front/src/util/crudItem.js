export const createContent = (prev, info, len) => {
  const newItem = {
    id: len,
    seq: len * 1000,
    info,
    info,
  };
  return [...prev, newItem];
};

export const updateContent = (prev, index, updated) => {
  const newList = [...prev];
  newList[index].info = updated;
  delete newList[index].edit;
  return newList;
};

export const createItem = (prev, title, len) => {
  const newItem = {
    id: len,
    seq: len * 1000,
    title: title,
  };
  return [...prev, newItem];
};

export const updateItem = (prev, index, updated) => {
  const newList = [...prev];
  newList[index].title = updated;
  delete newList[index].edit;
  return newList;
};

export const deleteItem = (prev, index) => {
  const next = [...prev];
  next.splice(index, 1);
  return next;
};

// export const editItem = (prev, index) => {
//   const newList = [...prev];
//   newList[index].edit = true;
//   return newList;
// };

// export const cancelItemEditor = (prev, index) => {
//   const newList = [...prev];
//   delete newList[index].edit;
//   return newList;
// };
