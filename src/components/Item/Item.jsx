import React from "react";
import "./Item.css";

const Item = ({ name, stock, img, description, price }) => {
  return (
    <>
      <div
        className="card rounded-3 shadow-lg"
        style={{ width: "15rem", height: "50vh", margin: "20px" }}
      >
        <img
          src={img}
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
          <a href="'/'" className="btn btn-primary palta-btn">
            Ver detalle
          </a>
        </div>
      </div>
    </>
  );
};

export default Item;
