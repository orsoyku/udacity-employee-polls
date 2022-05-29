import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const TabBar = () => {
  return (
    <div>
      {" "}
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TabBar;
