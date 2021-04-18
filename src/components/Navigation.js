import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Navigation.css";
import ToggleButton from "./ToggleButton";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  const { toggleTheme } = useContext(AppContext);
  const location = useLocation();
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Container className="justify-content-between">
          <Navbar.Brand href="#">
            <img
              src={`${process.env.PUBLIC_URL}/assets/ugr-horizontal-color.svg`}
              width="200"
              className="d-inline-block align-top"
              alt="Uni Granada logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="align-items-center">
              <LinkContainer to="/test">
                <Nav.Link>Test</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="subheader">
        <p>
          HERRAMIENTAS VIRTUALES EN INGLÉS PARA UN APRENDIZAJE INTERACTIVO Y
          DIVERTIDO DE LA QUÍMICA: CHEMGAME. Proyecto de Innovación Docente
          (20-07). Convocatoria PIBD 2020-2022
        </p>
      </div>
    </>
    // <div
    //   className="header"
    //   style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    // >
    //   <div
    //     className="navbar"
    //     style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    //   >
    //     <img
    //       src={`${process.env.PUBLIC_URL}/assets/ugr-horizontal-color.svg`}
    //     />
    //     <ul>
    //       <li>
    //         <ToggleButton />
    //       </li>
    //       <li>
    //         <Link
    //           to="/team"
    //           className={
    //             location.pathname === "/team"
    //               ? "chosen-topic"
    //               : toggleTheme
    //               ? "dark-button"
    //               : ""
    //           }
    //         >
    //           Team
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/test"
    //           className={
    //             location.pathname === "/test"
    //               ? "chosen-topic"
    //               : toggleTheme
    //               ? "dark-button"
    //               : ""
    //           }
    //         >
    //           Tests
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="subheader">
    //     <p style={toggleTheme ? { color: "black" } : {}}>
    //       HERRAMIENTAS VIRTUALES EN INGLÉS PARA UN APRENDIZAJE INTERACTIVO Y
    //       DIVERTIDO DE LA QUÍMICA: CHEMGAME. Proyecto de Innovación Docente
    //       (20-07). Convocatoria PIBD 2020-2022
    //     </p>
    //   </div>
    // </div>
  );
}
