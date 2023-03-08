import Container from "react-bootstrap/Container";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import dogs101 from "../../assets/dogs101.jpg";

const Header = () => {
  return (
    
<<<<<<< HEAD
    <Navbar expand='lg' bg='light'  variant='light'> 
    <Container>
          
          <Navbar.Brand href="#home">
            <img
              src={dogs101}
              width="128"
              height="128"
              className="d-inline-block align-top"
              alt="Dog tender logo"
            />
          </Navbar.Brand>
        </Container>
        <Container>
          
          <Navbar.Brand href='#Home'>Dogtender</Navbar.Brand>
         
          <Nav style={{float:'right'}}>
            <Nav.Link href=''>About Us</Nav.Link>
            <Nav.Link href='/signup'>Sign up</Nav.Link>
            <Nav.Link href='/login'>Log In</Nav.Link>
          </Nav>
          
        </Container>
        
=======
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
          <Nav.Link href="#Sign-Up">Sign up</Nav.Link>
          <Nav.Link href="#Log-In">Log In</Nav.Link>
        </Nav>
>>>>>>> ec0d153314c41bf132323fd3af6d16795c4793ef
      </Navbar>
    
  );
};

export default Header;
