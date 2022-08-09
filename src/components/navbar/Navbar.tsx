import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Navbar.scss'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Deepak Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-4 fw-semibold links">
            <Nav.Link href="#aboutMe">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#myProjects">Projects</Nav.Link>
            <Nav.Link href="#contactMe">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
