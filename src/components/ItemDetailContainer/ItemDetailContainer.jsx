import { useState, useEffect } from "react";
import dataItems from "../../ItemsDB";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ selectedItem }) => {
  const [Item, setItem] = useState({});

  const filtrarSelectItem = (array, SelectItem) => {
    console.log(array, selectedItem);

    let targetItem = array.filter((item) => {
      return item.id === SelectItem.id;
    });

    setItem(targetItem);
    console.log(Item);
  };

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataItems);
      }, 2000);
    });
    getItems.then((data) => {
      filtrarSelectItem(data, selectedItem);
    });
  }, []);

  return (
    <div className="container-fluid">
      {selectedItem && <ItemDetail targetItem={selectedItem} />}
    </div>
  );
};

export default ItemDetailContainer;
