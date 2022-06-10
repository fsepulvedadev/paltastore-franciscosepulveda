import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./ItemListContainer.css";
import dataItems from "../../ItemsDB";
import PaltaLogo from "../../assets/logo.svg";

const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getItems = new Promise((res, rej) => {
      setTimeout(() => {
        res(dataItems);
      }, 2000);
    });
    getItems
      .then((res) => {
        setItems(res);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, []);

  const selectItem = (name, price, desc, cat, stock, img, id) => {
    setSelectedItem({
      id: id,
      name: name,
      price: price,
      description: desc,
      categoria: cat,
      stock: stock,
      img: img,
    });

    console.log(selectedItem);
  };

  return (
    <div className="container d-flex justify-content-center aling-items-center flex-wrap ">
      {loading && (
        <div className="w-100 d-flex justify-content-center aling-items-center palta-spiner-container">
          <img src={PaltaLogo} alt="Palta Logo" className="palta-spiner" />
        </div>
        /*   <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div> */
      )}
      {error && <h1>Ha ocurrido un error!</h1>}
      {!loading && !error && !selectedItem && (
        <ItemList selectItem={selectItem} items={Items} />
      )}
      {/* {!loading && !error && selectedItem && (
        <ItemDetailContainer selectedItem={selectedItem} />
      )} */}
      <ItemDetailContainer selectedItem={selectedItem} />
    </div>
  );
};

export default ItemListContainer;
