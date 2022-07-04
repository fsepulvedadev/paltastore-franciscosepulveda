import React, { useState } from "react";
import {
  Container,
  Navbar as NavbarBootstrap,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar/SearchBar";

function Navbar() {
  const { cart, resetBusqueda } = useContext(CartContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <NavbarBootstrap
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="palta-nav-background "
        expanded={expanded}
      >
        <Container>
          <Link
            onClick={() => {
              setExpanded(false);
            }}
            to="/cart"
          >
            {cart && (
              <CartWidget
                className="mobile-cart"
                mobile={true}
                carrito={cart}
              />
            )}
          </Link>
          <NavbarBootstrap.Brand className="">
            <Link
              onClick={() => {
                setExpanded(false);
                resetBusqueda();
              }}
              to="/"
            >
              <img
                src={logo}
                width="40"
                height="40"
                className="d-none d-md-inline-block"
                alt="React Bootstrap logo"
              />
            </Link>
          </NavbarBootstrap.Brand>

          <NavbarBootstrap.Brand>
            <Link
              onClick={() => {
                setExpanded(false);
                resetBusqueda();
              }}
              to="/"
              className="text-decoration-none text-white"
            >
              <img
                src={logo}
                width="40"
                height="40"
                className="d-md-none"
                alt="React Bootstrap logo"
              />
              Palta Store
            </Link>
          </NavbarBootstrap.Brand>

          <NavbarBootstrap.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              setExpanded(expanded ? false : "expanded");
            }}
          />
          <NavbarBootstrap.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link>
                <Link
                  onClick={() => {
                    setExpanded(false);
                    resetBusqueda();
                  }}
                  className="text-white text-decoration-none"
                  to="/"
                >
                  Inicio
                </Link>
              </Nav.Link>

              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    onClick={() => {
                      setExpanded(false);
                    }}
                    className="text-decoration-none text-black"
                    to="/category/casa"
                  >
                    Casa
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={() => {
                      setExpanded(false);
                    }}
                    className="text-decoration-none text-black"
                    to="/category/baño"
                  >
                    Baño
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={() => {
                      setExpanded(false);
                    }}
                    className="text-decoration-none text-black"
                    to="/category/cocina"
                  >
                    Cocina
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    onClick={() => {
                      setExpanded(false);
                    }}
                    className="text-decoration-none text-black"
                    to="/category/muebles"
                  >
                    Muebles
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="d-flex align-items-md-center flex-column-reverse flex-md-row">
              <SearchBar />

              {cart && (
                <Nav>
                  <Link
                    onClick={() => {
                      setExpanded(false);
                    }}
                    to="/cart"
                  >
                    <CartWidget carrito={cart} mobile={false} />
                  </Link>
                </Nav>
              )}
            </div>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </div>
  );
}

export default Navbar;
