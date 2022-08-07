import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Navbar.scss'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
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
    // <nav className="navbar navbar-expand-sm sticky-top p-3">
    //   <div className="container-fluid justify-content-sm-between">
    //     <a className="navbar-brand logo-popup" href="#">
    //       {/* <img src={logo} alt="logo" width={100} height={80} /> */}
    //       <div>
    //         Logo
    //       {/* <ReactLogo /> */}
    //       </div>
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarTogglerDemo01"
    //       aria-controls="navbarTogglerDemo01"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
    //         <li className="nav-item">
    //           <a
    //             className="nav-link active"
    //             aria-current="page"
    //             href="#aboutMe"
    //           >
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Experience
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Projects
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default NavBar;
