import React from "react";
import "./ItemListContainer.css";

const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="contenedor">
      <h1 className="mensaje">{mensaje}</h1>
    </div>
  );
};

export default ItemListContainer;
