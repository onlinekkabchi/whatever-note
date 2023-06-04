// useDragAndDrop.js
import { useCallback, useState } from "react";

export const useDragAndDrop = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const handleDragStart = useCallback((e, index) => {
    e.dataTransfer.setData("text/plain", index.toString());
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e, index) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (sourceIndex !== index) {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const [removedItem] = newItems.splice(sourceIndex, 1);
        newItems.splice(index, 0, removedItem);
        return newItems;
      });
    }
  }, []);

  return { items, handleDragStart, handleDragOver, handleDrop };
};
