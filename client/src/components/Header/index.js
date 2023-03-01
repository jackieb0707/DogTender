import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const Header = () => {
  
  return (
   
    
    <Navbar expand='lg' bg='light'  variant='light'> 
        <Container>
       
          <Navbar.Brand href='#Home'>Dogtender</Navbar.Brand>
          <Nav style={{float:'right'}}>
            <Nav.Link href='#About-Us'>About Us</Nav.Link>
            <Nav.Link href='#Our-story'>Our Story</Nav.Link>
            <Nav.Link href='#Log-In'>Log In</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
  
  );
};

export default Header;
