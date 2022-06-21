import { useEffect, useState, useContext } from "react";
import ItemList from "../ItemList/ItemList";
import dataItems from "../../ItemsDB";
import PaltaLogo from "../../assets/logo.svg";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const SearchContainer = () => {
  const [Items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { search } = useParams();

  const { setBusqueda } = useContext(CartContext);

  // EFECTO PARA BUSCAR
  useEffect(() => {
    if (search) {
      setLoading(true);
      setTimeout(() => {
        setItems(
          dataItems.filter((item) =>
            item.name.toLowerCase().normalize().includes(search)
          )
        );
        if (Items.length === 0) {
          setBusqueda("");
        }
        setLoading(false);
      }, 500);
    } else {
      setItems(dataItems);
    }
  }, [search]);

  const selectItem = (name, price, desc, cat, stock, img, id) => {
    setSelectedItem({
      id: id,
      name: name,
      price: price,
      description: desc,
      categoria: cat,
      stock: stock,
      img: img,
    });
  };

  return (
    <div className="container d-flex justify-content-center aling-items-center flex-wrap ">
      {loading && (
        <div className="w-100 d-flex justify-content-center aling-items-center palta-spiner-container">
          <img src={PaltaLogo} alt="Palta Logo" className="palta-spiner" />
        </div>
      )}
      {!loading && !selectedItem && (
        <div className="container d-flex justify-content-center aling-items-center flex-wrap">
          {Items.length > 0 && search && (
            <h1>{`Tu busqueda de ${search} arrojo ${Items.length} resultado/s`}</h1>
          )}
          <ItemList selectItem={selectItem} items={Items} />
        </div>
      )}

      {!loading && !selectedItem && Items.length === 0 && (
        <div className="d-flex flex-column justify-content-center align-items-center w-100">
          <h1 className="text-center">{`Tu busqueda de ${search} no arrojo resultado/s.`}</h1>
          <button
            onClick={() => {
              setBusqueda("");
            }}
            className="btn btn-primary palta-btn w-50 align"
          >
            <Link className="text-decoration-none text-white" to="/">
              Volver
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
