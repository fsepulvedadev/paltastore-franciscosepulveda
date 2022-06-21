import React, { useState, useContext } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const { setBusqueda } = useContext(CartContext);
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="d-flex mx-2 w-100 d-flex  justify-content-center justify-content-md-end mt-2 mt-md-0"
      >
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2 search-bar"
          aria-label="Search"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value.toLowerCase())}
        />

        <Button
          onClick={(e) => {
            setBusqueda(userInput);
          }}
          className="palta-btn border-0 py-2 text-center"
        >
          <ion-icon name="search-outline"></ion-icon>
        </Button>
      </Form>
    </>
  );
};

export default SearchBar;
