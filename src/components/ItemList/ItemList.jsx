import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-wrap w-75">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              name={item.name}
              stock={item.stock}
              img={item.img}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default ItemList;
