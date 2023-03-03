import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




const Header = () => {
  
  return (
   
    
    <Navbar expand='lg' bg='light'  variant='light'> 
    <Container>
          
          <Navbar.Brand href="#home">
            <img
              src="./public/Dogs101.jpg"
              width="15"
              height="15"
              className="d-inline-block align-top"
              alt="Dog tender logo"
            />
          </Navbar.Brand>
        </Container>
        <Container>
          
          <Navbar.Brand href='#Home'>Dogtender</Navbar.Brand>
         
          <Nav style={{float:'right'}}>
            <Nav.Link href='#About-Us'>About Us</Nav.Link>
            <Nav.Link href='#Sign-Up'>Sign up</Nav.Link>
            <Nav.Link href='#Log-In'>Log In</Nav.Link>
          </Nav>
          
        </Container>
        
      </Navbar>
      
      
  
  );
};

export default Header;
