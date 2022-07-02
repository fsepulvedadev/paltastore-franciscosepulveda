import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import "./Checkout.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
  const { cart, getCartTotal, setFinalOrder, clearItems } =
    useContext(CartContext);
  const [name, setName] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  let formatNumbers = Intl.NumberFormat("en-US");

  const navigate = useNavigate();

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!cart) {
      alert("No hay productos en el carrito");
      return;
    }

    const order = {
      user: { name, cel, email },
      items: cart,
      total: getCartTotal(),
    };

    console.log(order);

    addDoc(orderCollection, order).then(({ id }) => {
      console.log(id);
      setFinalOrder(order);
      clearItems();
      navigate(`/finish/${id}`);

      setLoading(false);
    });
  };

  return (
    <div>
      <div className="container d-flex flex-column w-100 detail-bg justify-content-center checkout-main shadow-lg rounded h-100 p-4">
        <h1 className="w-100 text-center mt-4">Finalizar Pedido</h1>

        <div className="d-flex flex-column flex-md-row mt-4">
          <div className="w-100">
            <ul className="m-0 p-0 overflow-auto h-75 list-detalle-checkout">
              {cart?.map((item) => {
                return (
                  <li
                    className="my-1 p-1 rounded d-flex flex-md-row flex-column justify-content-between w-100 align-items-center border border-success h-50"
                    key={item.name}
                  >
                    <div className="d-flex justify-content-between  align-items-center w-100">
                      <div className="ms-md-4 d-flex justify-content-between align-items-center">
                        {item.img[0] && (
                          <img
                            className="img-cart rounded m-2 mx-md-2 w-25 h-25"
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

                        <p className=" cart-item-detail-text m-0 d-none d-md-block fw-bolder">
                          {item.cantidad} x {item.name}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-md-end  text-center me-md-4 mt-md-0 mt-2">
                        <h5 className="d-inline-flex cart-item-detail-text d-md-none mobile-name fs-6 align-items-center fw-bolder w-100">
                          {item.cantidad} x {item.name}
                        </h5>
                        <h4 className="ms-1 m-md-0 p-0 fs-5">
                          {`$${formatNumbers.format(
                            item.price * item.cantidad
                          )}`}
                        </h4>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="palta-btn p-2 text-end d-flex justify-content-between">
              <p className="m-2">Total</p>{" "}
              <p className="m-2">${formatNumbers.format(getCartTotal())}</p>
            </h4>
          </div>
          <form className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
            <h4 className="w-100 text-center">
              Completa tus datos para finalizar el pedido.
            </h4>
            <div className="d-flex w-75 flex-column align-items-center my-2">
              <label htmlFor="name"> Nombre</label>
              <input
                className="w-50 p-1 rounded"
                placeholder="Carlos Perez"
                value={name}
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="d-flex  w-75 flex-column align-items-center my-2">
              <label htmlFor="cel"> Celular</label>
              <input
                className="w-50  p-1 rounded"
                placeholder="11 5 233 322"
                value={cel}
                type="tel"
                name="cel"
                id="name"
                onChange={(e) => setCel(e.target.value)}
              />
            </div>
            <div className="d-flex  w-75 flex-column align-items-center my-2 ">
              <label htmlFor="email"> Email</label>
              <input
                className="w-50 p-1 rounded "
                placeholder="email@myemail.com"
                value={email}
                type="email"
                name="email"
                id="name"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              disabled={loading ? true : false}
              className="w-50 mt-4 palta-btn p-2"
              onClick={handleSubmit}
            >
              {loading ? (
                <div className="loading-spiner">
                  <ion-icon size="large" name="refresh-outline"></ion-icon>
                </div>
              ) : (
                "Finalizar Compra"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
