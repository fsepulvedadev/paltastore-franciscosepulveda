import React, { useState } from "react";

import "./ItemCount.css";

const ItemCount = ({ stock, onAdd, inicial }) => {
  const [contador, setContador] = useState(inicial);
  const [stockControl, setStockControl] = useState(false);

  return (
    <>
      <div className="container d-flex  flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="input-group mb-3 col-1">
            <button
              className="btn btn-outline-secondary palta-btn"
              type="button"
              id="button-addon1"
              onClick={() => setContador(contador - 1)}
            >
              -
            </button>
            <input
              onChange={(e) => setContador(e.target.value)}
              value={contador}
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <button
              className="btn btn-outline-secondary palta-btn"
              type="button"
              id="button-addon1"
              onClick={() =>
                contador < stock
                  ? setContador(contador + 1)
                  : (setStockControl(true),
                    setTimeout(() => {
                      setStockControl(false);
                    }, 1500))
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="badge bg-success mb-2">Stock {stock} unidades</span>
          {stockControl && (
            <ul className="list-group pb-2">
              <li className="list-group-item list-group-item-warning">
                La cantidad ha superado el stock disponible.
              </li>
            </ul>
          )}
        </div>
        <button
          onClick={() => (onAdd(contador), setContador(inicial))}
          className="btn btn-secondary col-1 palta-btn"
        >
          Agregar
        </button>
      </div>
    </>
  );
};

export default ItemCount;
