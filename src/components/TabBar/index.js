import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TabBar = () => {
  return (
    <div>
      {" "}
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/leaderboard" style={{ textDecoration: "none" }}>
                Leaderboard
              </Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Link to="/new" style={{ textDecoration: "none" }}>
                New
              </Link>
            </Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default TabBar;
