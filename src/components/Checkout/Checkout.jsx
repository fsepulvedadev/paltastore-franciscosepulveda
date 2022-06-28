import { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getCartTotal } = useContext(CartContext);
  const [name, setName] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart) {
      alert("No hay productos en el carrito, pobre");
      return;
    }

    let pedido = {
      user: { name, cel, email },
      items: cart,
      total: getCartTotal(),
    };

    console.log(pedido);
  };

  return (
    <div>
      <div className="container d-flex flex-column w-full detail-bg justify-content-center checkout-main shadow-lg">
        <h1 className="w-100 text-center mt-4">Finalizar Pedido</h1>
        <form className="d-flex flex-column w-100 h-100 justify-content-center align-items-center">
          <div className="d-flex w-75 flex-column align-items-center my-2">
            <label htmlFor="name"> Nombre</label>
            <input
              className="w-50 p-1 rounded"
              placeholder="Nombre"
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
              placeholder="CELULAR"
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
              placeholder="EMAIL"
              value={email}
              type="email"
              name="email"
              id="name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="w-50 mt-4 palta-btn p-2" onClick={handleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
