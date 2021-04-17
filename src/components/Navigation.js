import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Navigation.css";
import ToggleButton from "./ToggleButton";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const { toggleTheme } = useContext(AppContext);
  const location = useLocation();
  return (
    <NavBar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/test"></Nav.Link>
            <Nav.Link href="/team"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBar>
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

export default NavBar;
