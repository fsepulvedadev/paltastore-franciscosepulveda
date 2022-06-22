import React from "react";
import { useState } from "react";

export const CartContext = React.createContext({});

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [busqueda, setBusqueda] = React.useState("");
  const [selectItem, setSelectItem] = React.useState(null);
  const [loading, setLoading] = useState(true);

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
          return newCart;
        }, [])
      );
    } else {
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
    }

    console.log(cart);
  };

  const handleTargetItem = (item) => {
    setSelectItem(item);
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
        selectItem,
        loading,
        setLoading,
        handleTargetItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
