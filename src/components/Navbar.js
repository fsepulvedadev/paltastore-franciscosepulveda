import React from "react";
import {
  Container,
  Navbar as NavbarComp,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div>
      <NavbarComp collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavbarComp.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavbarComp.Brand>
          <NavbarComp.Brand href="#home">Palta Store</NavbarComp.Brand>

          <NavbarComp.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarComp.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features">Novedades</Nav.Link>
              <Nav.Link href="#pricing">Ofertas</Nav.Link>
              <NavDropdown title="Categorias" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Casa</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Baño</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Cocina</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Muebles</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </NavbarComp.Collapse>
        </Container>
      </NavbarComp>
    </div>
  );
}

export default Navbar;
