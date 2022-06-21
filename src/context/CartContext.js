import React from "react";

export const CartContext = React.createContext({});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [busqueda, setBusqueda] = React.useState("");

  const onAddCart = (item, cantidad) => {
    setCart([
      ...cart,
      {
        id: item.id,
        name: item.name,
        price: item.price,
        cantidad: cantidad,
        img: item.img,
      },
    ]);
    console.log(cart);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const editItem = (id, cantidad) => {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.cantidad = cantidad;
        }
        return item;
      })
    );
  };
  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const clearItems = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        onAddCart,
        removeItem,
        editItem,
        clearItems,
        isInCart,
        busqueda,
        setBusqueda,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
