import Container from "react-bootstrap/Container";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import dogs101 from "../../assets/dogs101.jpg";

const Header = () => {
  return (
    
      <Navbar className="navbar-container" expand="lg" variant="light">
        <Navbar.Brand id="Title"href="#home">Dogtender</Navbar.Brand>

        <img
          src={dogs101}
          width="200"
          height="200"
          border="4px"
          border-radius="18px"
          padding="99px"
          className="photo1"
          alt="Dog tender logo"
        />

        <Nav style={{ float: "right" }}>
          <Nav.Link href="#About-Us">About Us</Nav.Link>
          <Nav.Link href="/signup">Sign up</Nav.Link>
          <Nav.Link href="/login">Log In</Nav.Link>
        </Nav>
      </Navbar>
    
  );
};

export default Header;
