import React from "react";
import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const FBTestProdutos = () => {
  const [productos, setProductos] = useState({});

  const coleccion = "productos";
  const db = getFirestore();

  const coleccionDeProductos = collection(db, coleccion);

  useEffect(() => {
    getDocs(coleccionDeProductos).then((res) => {
      setProductos(
        res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  return <div>{JSON.stringify(productos)}</div>;
};

export default FBTestProdutos;
