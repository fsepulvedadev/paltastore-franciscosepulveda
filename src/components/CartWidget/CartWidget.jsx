import React, { useState, useEffect } from "react";
import "./CartWidget.css";
import Bolsa from "../../assets/bolsa.svg";

export const CartWidget = ({ carrito }) => {
  const [cantidadCart, setCantidadCart] = useState(0);
  console.log(carrito);

  useEffect(() => {
    let totalItems = 0;

    carrito.forEach((item) => {
      totalItems += item.cantidad;
    });
    setCantidadCart(totalItems);
  }, [carrito]);

  return (
    <div>
      <a href="/">
        <img className="bolsita" src={Bolsa} alt="" />
        <div className="cart-cantidad d-inline-block position-absolute text-white text-center">
          <p>{cantidadCart}</p>
        </div>
      </a>
    </div>
  );
};

export default CartWidget;
