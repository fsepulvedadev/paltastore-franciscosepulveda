import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({
  name,
  stock,
  img,
  description,
  price,
  category,
  selectItem,
  id,
}) => {
  return (
    <>
      <Link to={`/item/${id}`} className="text-decoration-none text-black ">
        <div
          className="card rounded-3 shadow-lg m-md-4 my-4 palta-select-animation"
          style={{ width: "15rem", height: "500px" }}
        >
          <img
            src={img[0]}
            className="card-img-top h-50 w-auto card-palta-img"
            style={{}}
            alt="..."
          />
          <div className="card-body d-flex flex-column">
            <div className="h-25">
              <h5 className="card-title">{name}</h5>
            </div>
            <hr />
            <h3>${price}</h3>
            <p className="card-text text-center badge palta-background-blue text-wrap">
              Stock {stock}
            </p>
            <button className="btn btn-primary palta-btn  ">
              {" "}
              <Link
                className="text-decoration-none text-white d-flex justify-content-center align-items-center"
                to={`/item/${id}`}
              >
                <span className="mx-2 "> Ver detalle </span>
                <ion-icon name="search-sharp"></ion-icon>
              </Link>{" "}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Item;
