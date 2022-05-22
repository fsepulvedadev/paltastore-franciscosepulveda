import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";

function NavbarComp() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="#home">Palta Store</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
