import React from "react";

import "./Navigation.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Navigation() {
  console.log(window.screen.width);
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
              {window.screen.width >= 1000 ? (
                <LinkContainer to="/game">
                  <Nav.Link>Game</Nav.Link>
                </LinkContainer>
              ) : null}
              <LinkContainer to="/team">
                <Nav.Link>Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="subheader">
        <p>
          <b>CHEMGAME</b>
          <br /> Proyecto de Innovación Docente (20-07)
        </p>
      </div>
    </>
  );
}
