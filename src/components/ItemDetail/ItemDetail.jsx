import React from "react";

import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ targetItem }) => {
  return (
    <div className="detail-bg d-flex w-100 my-4 py-4 p-md-0 flex-column flex-md-row justify-content-around align-items-start m-md-4 shadow-lg">
      <div
        id="carouselExampleControls"
        class="carousel slide palta-carrusel rounded"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active palta-carrousel">
            <img
              src={targetItem?.img}
              class="d-block w-100 palta-carrusel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={targetItem?.img}
              class="d-block w-100 palta-carrusel-img"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src={targetItem?.img}
              class="d-block w-100 palta-carrusel-img"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev palta-carrousel-control"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next palta-carrousel-control"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h2 className="text-center mt-md-4">{targetItem.name}</h2>
        <hr />
        <p className="fs-2 fw-bolder">$ {targetItem.price}</p>
        <hr />
        <p className="lh-2 w-50">{targetItem.description}</p>
        <ItemCount stock={targetItem.stock} inicial={1} />
      </div>
      <div></div>
    </div>
  );
};

export default ItemDetail;
