import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [stockControl, setStockControl] = useState(false);
  const { cart, editItem, removeItem, clearItems } = useContext(CartContext);
  let formatNumbers = Intl.NumberFormat("en-US");
  useEffect(() => {
    let totalList = 0;
    cart.forEach((item) => {
      totalList += item.price * item.cantidad;
    });
    setCartTotal(totalList);
  }, [cart]);

  return (
    <div>
      <div className="w-100 h-100  carrito-container container flex rounded shadow-lg my-2">
        <h1 className="p-4 flex justify-content-center text-center">
          <p className="d-inline-flex p-0 m-0"> Carrito de compras </p>{" "}
          <ion-icon className="" name="cart-outline"></ion-icon>
        </h1>
        <hr />
        <div className="container p-0 h-100">
          {cart.length === 0 && (
            <div className="text-center">
              <h1>No hay productos en el carro.</h1>
              <button className="btn btn-primary palta-btn mt-2">
                <Link className="text-decoration-none text-white" to={`/`}>
                  Ir a Comprar
                </Link>
              </button>
            </div>
          )}

          {cart.length > 0 && (
            <ul className="m-0 p-0 overflow-auto h-75">
              {cart?.map((item) => {
                return (
                  <li
                    className="my-1 p-1 rounded d-flex flex-md-row flex-column justify-content-between w-100 align-items-center border border-success"
                    key={item.name}
                  >
                    <div className="d-flex justify-content-between  align-items-center cart-item-main w-100">
                      <div className="ms-md-4 d-flex justify-content-between  align-items-center">
                        {item.img[0] && (
                          <img
                            className="img-cart rounded m-2 mx-md-2"
                            src={item.img[0]}
                            alt={`${item.name}`}
                          />
                        )}
                        {!item.img[0] && item.img && (
                          <img
                            className="img-cart rounded m-2 mx-md-2"
                            src={item.img}
                            alt={`${item.name}`}
                          />
                        )}

                        <p className="d-inline cart-item-detail-text m-0 d-none d-md-block fw-bolder">
                          {item.cantidad} x {item.name}
                        </p>
                      </div>

                      <div className="d-flex me-md-4 ">
                        <div className="d-flex justify-content-between cart-item-detail-btn w-100 p-0">
                          <div className="cart-counter d-flex justify-content-md-end  mx-md-2 w-100">
                            <button
                              className="btn btn-outline-secondary palta-btn p-1 p-md-2"
                              type="button"
                              id="button-addon1"
                              onClick={() => {
                                if (item.cantidad > 1) {
                                  editItem(item.id, item.cantidad - 1);
                                } else {
                                  removeItem(item.id);
                                }
                              }}
                            >
                              <ion-icon name="remove-outline"></ion-icon>
                            </button>
                            <input
                              type="text"
                              className="rounded border-1 border border-dark"
                              value={item.cantidad}
                              defaultValue={item.cantidad}
                            />
                            <button
                              className="btn btn-outline-secondary palta-btn p-1 p-md-2"
                              type="button"
                              id="button-addon1"
                              onClick={() => {
                                if (item.cantidad < item.stock) {
                                  editItem(item.id, item.cantidad + 1);
                                } else {
                                  setStockControl(true);
                                  setTimeout(() => {
                                    setStockControl(false);
                                  }, 1500);
                                }
                              }}
                            >
                              <ion-icon name="add-outline"></ion-icon>
                            </button>
                          </div>
                          <div className="d-flex align-items-center h-100">
                            <button
                              type="button"
                              class="btn btn-danger d-flex justify-content-center align-items-center h-md-50 ms-2"
                              onClick={() => {
                                removeItem(item.id);
                              }}
                            >
                              <ion-icon name="trash-outline"></ion-icon>
                            </button>
                          </div>
                        </div>
                        {stockControl && (
                          <div className="error error-stock-cart">
                            El stock maximo es {item.stock}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-md-end justify-content-between text-center me-md-4 mt-md-0 mt-2">
                      <h5 className="d-inline-flex cart-item-detail-text d-md-none mobile-name fs-6 align-items-center fw-bolder w-100">
                        {item.cantidad} x {item.name}
                      </h5>
                      <h4 className="ms-1 m-md-0 p-0 fs-5">
                        {`$${formatNumbers.format(item.price * item.cantidad)}`}
                      </h4>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="total d-flex justify-content-between mt-4 palta-btn rounded p-3 align-items-center">
            <h4>Total</h4> <h4>{`$${formatNumbers.format(cartTotal)}`}</h4>
          </div>
          <div className="d-flex w-100 justify-content-end my-3">
            <button
              type="button"
              class="btn btn-danger d-flex justify-content-center align-items-center h-md-50 my-3"
              onClick={() => {
                clearItems();
              }}
            >
              Eliminar todos
              <ion-icon name="trash-outline"></ion-icon>
            </button>
            <Link to="/checkout" className="text-white text-decoration-none ">
              <button
                type="button"
                class="btn palta-btn d-flex justify-content-center align-items-center h-md-50 my-3 mx-2"
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
