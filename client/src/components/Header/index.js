import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import dogs101 from '../../assets/dogs101.jpg';


const Header = () => {
  
  return (
   
    
    <Navbar expand='lg' bg='light'  variant='light'> 
    <Container>
          
          <Navbar.Brand href="#home">Dogtender</Navbar.Brand>

             <img
              src={dogs101}
              width="200"
              height="200"
              border="4px" 
              border-radius= "18px"
              padding="99px"
            
              
            
            
              className="photo1"
              alt="Dog tender logo"
          
            />
         
        </Container>
         
          <Nav style={{float:'right'}}>
            <Nav.Link href='#About-Us'>About Us</Nav.Link>
            <Nav.Link href='#Sign-Up'>Sign up</Nav.Link>
            <Nav.Link href='#Log-In'>Log In</Nav.Link>
          </Nav>
          
     
        
      </Navbar>
      
      
  
  );
};

export default Header;
