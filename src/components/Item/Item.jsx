import React from "react";
import "./Item.css";

const Item = ({
  name,
  stock,
  img,
  description,
  price,
  categoria,
  selectItem,
  id,
}) => {
  return (
    <>
      <div
        className="card rounded-3 shadow-lg m-md-4 my-4"
        style={{ width: "15rem", height: "500px" }}
      >
        <img
          src={img[0]}
          className="card-img-top h-50 w-auto card-palta-img"
          style={{}}
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <hr />
          <h3>${price}</h3>
          <p className="card-text text-center badge palta-background-blue text-wrap">
            Stock {stock}
          </p>
          <button
            onClick={() => {
              selectItem(name, price, description, categoria, stock, img, id);
            }}
            className="btn btn-primary palta-btn"
          >
            Ver detalle
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
