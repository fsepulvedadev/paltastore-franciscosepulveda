import React from "react";
import dataItems from "../../ItemsDB";

const ItemDetailContainer = ({}) => {
  const [Item, setItem] = useState([]);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataItems);
    }, 2000);
  });

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
