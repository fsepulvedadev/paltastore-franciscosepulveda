import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const FBTest = () => {
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const id = "00JsoFpnl22WsjVx74bi";

    const db = getFirestore();

    const itemRef = doc(db, "productos", id);

    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto({ id: snapshot.id, ...snapshot.data() });
      }
      console.log(producto);
    });
  }, []);

  return <div>asd</div>;
};

export default FBTest;
