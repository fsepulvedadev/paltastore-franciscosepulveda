import React from "react";
import {
  Container,
  Navbar as NavbarBootstrap,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavbarBootstrap
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="palta-nav-background"
      >
        <Container>
          <NavbarBootstrap.Brand>
            <Link to="/">
              <img
                src={logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Brand>
            <Link to="/" className="text-decoration-none light">
              Palta Store
            </Link>
          </NavbarBootstrap.Brand>

          <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBootstrap.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link>
                {" "}
                <Link className="text-white text-decoration-none" to="/">
                  {" "}
                  Inicio{" "}
                </Link>{" "}
              </Nav.Link>
              <Nav.Link href="#pricing">
                {" "}
                <Link className="text-white text-decoration-none" to="/on-sale">
                  {" "}
                  Ofertas{" "}
                </Link>{" "}
              </Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Casa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Baño</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cocina</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Muebles</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <CartWidget />
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </div>
  );
}

export default Navbar;
