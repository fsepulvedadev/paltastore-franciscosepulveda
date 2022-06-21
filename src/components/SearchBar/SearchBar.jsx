import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./SearchBar.css";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const { setBusqueda, busqueda } = useContext(CartContext);

  useEffect(() => {
    setUserInput(busqueda);
  }, [busqueda]);
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="d-flex  w-100 d-flex me-md-2  justify-content-center justify-content-md-end mt-2 mt-md-0"
      >
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2 search-bar"
          aria-label="Search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <Link to={`/search/${userInput.toLowerCase()}`}>
          <Button
            onClick={(e) => {
              setBusqueda(userInput.toLowerCase());
            }}
            className="palta-btn border-0 py-2 text-center"
          >
            <ion-icon name="search-outline"></ion-icon>
          </Button>
        </Link>
      </Form>
    </>
  );
};

export default SearchBar;
