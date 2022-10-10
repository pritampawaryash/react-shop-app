import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./images/logo.png";
import "./Navbars.css";
export default function Navbars() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Nav className="me-left">
            <Navbar.Brand href="#home">
              <img href="#home" src={logo} width="40" height="40" alt="" className="mainLogo"></img>
            </Navbar.Brand>
            <Navbar.Brand href="#home" className="mt-1">AUTO BOYS</Navbar.Brand>
          </Nav>

          <Nav className="me-right">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
