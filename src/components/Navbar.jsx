import React from "react";
import {
  Container,
  Navbar as NavbarBootstrap,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import CartWidget from "./CartWidget/CartWidget";

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
          <NavbarBootstrap.Brand href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Brand href="#home">
            Palta Store
          </NavbarBootstrap.Brand>

          <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarBootstrap.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Novedades</Nav.Link>
              <Nav.Link href="#pricing">Ofertas</Nav.Link>
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
