import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./Finish.css";

const Finish = () => {
  const { id } = useParams();
  const { finalOrder } = useContext(CartContext);
  console.log(finalOrder);

  return (
    <div className="container d-flex flex-column w-100 detail-bg justify-content-center align-items-center checkout-main shadow-lg rounded p-4 finish-main h-100">
      <div className="h-100 d-flex flex-column align-items-center green-card">
        <h1>Muchas gracias por su compra!</h1>
        <p>Pronto estaremos procesando y enviando tu pedido!</p>
        <div className="d-flex flex-column shadow-lg border-2 border border-success bg-success  text-white rounded p-4 w-100 mt-4 h-100 ">
          <div className="d-flex aling-items-center">
            <p className="m-0">
              Nombre: <span className="fw-bold">{finalOrder.user.name} </span>{" "}
            </p>
          </div>
          <div className="d-flex aling-items-center">
            <p className="m-0">
              Id: <span className="fw-bold">{id} </span>{" "}
            </p>
          </div>
          <div className="d-flex aling-items-center">
            <p className="m-0 w-100">
              Pedido:
              <ul className="bg-light w-100 py-2 text-start px-0 my-1 text-black m-0">
                {finalOrder?.items.map((item) => {
                  return (
                    <li className="px-2 w-100" key={item.name}>
                      {item.name} x {item.cantidad}{" "}
                    </li>
                  );
                })}
              </ul>
            </p>
          </div>
          <div className="d-flex aling-items-center mt-5 border border-2 rounded border-light p-2 justify-content-center">
            <div className="d-inline-flex w-100 justify-content-between">
              <p className="m-0">Total</p>
              <p className="m-0">
                <span className="fw-bold">$ {finalOrder.total} </span>
              </p>
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="palta-btn w-100 mt-4 p-2 rounded">
            Regresar a la tienda
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Finish;
