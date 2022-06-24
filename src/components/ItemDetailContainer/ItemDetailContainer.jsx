import { useState, useEffect, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";
import PaltaLogo from "../../assets/logo.svg";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setSelectItem } = useContext(CartContext);

  const db = getFirestore();
  const { id } = useParams();
  const itemRef = doc(db, "productos", id);

  useEffect(() => {
    setLoading(true);
    getDoc(itemRef)
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setSelectItem(item);
  }, [item]);

  return (
    <div className="container">
      {loading && (
        <div className="w-100 d-flex justify-content-center aling-items-center palta-spiner-container">
          <img src={PaltaLogo} alt="Palta Logo" className="palta-spiner" />
        </div>
      )}
      {!loading && item && <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
