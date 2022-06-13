import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import dataItems from "../../ItemsDB";
import PaltaLogo from "../../assets/logo.svg";
import { useParams, Link } from "react-router-dom";

const ItemListContainer = () => {
  const [Items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();
  console.log(Items.length);

  useEffect(() => {
    const getItems = new Promise((res, rej) => {
      setloading(true);
      setTimeout(() => {
        res(dataItems);
      }, 2000);
    });
    getItems
      .then((res) => {
        id
          ? setItems(res.filter((item) => item.categoria === id))
          : setItems(res);
      })

      .catch((err) => {
        setError(true);
        console.log(err);
      })
      .finally(() => {
        setloading(false);
      });
  }, [id]);

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
      )}
      {error && <h1>Ha ocurrido un error!</h1>}
      {!loading && !error && !selectedItem && (
        <ItemList selectItem={selectItem} items={Items} />
      )}
      {!loading && !error && !selectedItem && Items.length === 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
          <h1 className="text-center">No hay productos en esta categoria.</h1>
          <button className="btn btn-primary palta-btn w-50 align">
            <Link className="text-decoration-none text-white" to="/">
              Volver
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
