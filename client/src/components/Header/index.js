import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import dogs101 from '../../assets/dogs101.jpg';


const Header = () => {
  
  return (
   
    
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
        
      </Navbar>
      
      
  
  );
};

export default Header;
