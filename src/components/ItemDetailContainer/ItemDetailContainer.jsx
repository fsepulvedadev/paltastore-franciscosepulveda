import { useState, useEffect, useContext } from "react";
import dataItems from "../../ItemsDB";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";
import PaltaLogo from "../../assets/logo.svg";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [Item, setItem] = useState(null);
  const { handleTargetItem, loading, setLoading } = useContext(CartContext);

  const { id } = useParams();

  const filtrarSelectItem = (array, SelectItem) => {
    let targetItem = array.find((item) => {
      return item.id === parseInt(SelectItem);
    });

    setItem(targetItem);
    handleTargetItem(targetItem);
    setLoading(false);
  };

  useEffect(() => {
    const getItems = new Promise((resolve, reject) => {
      setLoading(true);
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
      {!loading && Item && <ItemDetail />}
    </div>
  );
};

export default ItemDetailContainer;
