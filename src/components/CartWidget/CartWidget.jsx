import React from "react";
import "./CartWidget.css";
import Bolsa from "../../assets/bolsa.svg";

export const CartWidget = () => {
  return (
    <div>
      <a href="#">
        <img className="bolsita" src={Bolsa} alt="" />
      </a>
    </div>
  );
};

export default CartWidget;
