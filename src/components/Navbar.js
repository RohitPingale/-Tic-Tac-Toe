import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import  {styled}  from 'styled-components';


const Styles = styled.div`
 .navbar {
  background-color: #222;
 }

 .navbar-brand, .navbar-nav, .nav-link {
  color: #bbb; 

  &:hover {
    color: white;
  }
 }
`;


export const TicNavbar = () => 
( 
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand herf='/'>TicTacToe</Navbar.Brand>
      <Navbar.Toggle arid-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className = 'mr-auto'>
          <Nav.Item><Nav.Link herf ='/home'>Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link herf ='/aboutus'>About Us</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>       
    </Navbar> 
  </Styles>
) 
 