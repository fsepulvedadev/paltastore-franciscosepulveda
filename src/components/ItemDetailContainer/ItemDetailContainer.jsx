import { useState, useEffect } from "react";
import dataItems from "../../ItemsDB";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";
import PaltaLogo from "../../assets/logo.svg";

const ItemDetailContainer = () => {
  const [Item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const filtrarSelectItem = (array, SelectItem) => {
    let targetItem = array.find((item) => {
      return item.id === parseInt(SelectItem);
    });

    setItem(targetItem);
    setLoading(false);
  };

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataItems);
      }, 2000);
    });
    getItems.then((data) => {
      filtrarSelectItem(data, id);
    });
  }, [id]);

  return (
    <div className="container">
      {loading && (
        <div className="w-100 d-flex justify-content-center aling-items-center palta-spiner-container">
          <img src={PaltaLogo} alt="Palta Logo" className="palta-spiner" />
        </div>
      )}
      {!loading && Item && <ItemDetail targetItem={Item} />}
    </div>
  );
};

export default ItemDetailContainer;
