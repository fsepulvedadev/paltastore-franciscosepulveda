import React from "react";
import { useState, useEffect } from "react";

export const CartContext = React.createContext({});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [finalOrder, setFinalOrder] = React.useState([]);
  const [busqueda, setBusqueda] = React.useState("");
  const [selectItem, setSelectItem] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const [compraLista, setCompraLista] = useState(false);

  useEffect(() => {
    const newCart = JSON.parse(localStorage.getItem("cart"));
    if (newCart) {
      console.log(newCart);
      if (cart.length === 0) {
        setCart(newCart);
      }
    }
  }, []);

  const onAddCart = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(
        cart.reduce((newCart, _item) => {
          if (_item.id === item.id) {
            newCart.push({
              ..._item,
              cantidad: _item.cantidad + cantidad,
            });
            return newCart;
          }
          newCart.push(item);
          localStorage.setItem("cart", JSON.stringify(newCart));
          return newCart;
        }, [])
      );
    } else {
      const newCart = [...cart, { ...item, cantidad }];
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
    }

    console.log(cart);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, x) => (acc += x.price * x.cantidad), 0);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
  };
  const editItem = (id, cantidad) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.cantidad = cantidad;
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
  };
  const isInCart = (id) => {
    return cart.some((x) => x.id === id);
  };

  const clearItems = () => {
    setCart([]);
    localStorage.clear();
  };

  const resetBusqueda = () => {
    setBusqueda("");
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
        resetBusqueda,
        loading,
        setLoading,
        setSelectItem,
        selectItem,
        getCartTotal,
        compraLista,
        setCompraLista,
        finalOrder,
        setFinalOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
