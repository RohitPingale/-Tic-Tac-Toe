import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import styled  from 'styled-components';


const Styles = styled.div`
 .navbar {
  width: 100%;
  float: left;
  margin: 0 0 1em 0;
  padding: 0;
  background-color: #f2f2f2;
 }
 .navbar-brand{
  color: black;
 }
 .navbar-nav, .nav-link {
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
      <Navbar.Brand >Tic-Tac-Toe</Navbar.Brand>
      <Navbar.Toggle arid-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className = 'ml-auto'>
          <Nav.Item><Nav.Link href ='/home'>Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href ='/aboutus'>About Us</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>       
    </Navbar> 
  </Styles>
) 
 