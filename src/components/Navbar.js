import React from "react";
import {Navbar,Nav} from 'react-bootstrap';
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor:"#d9312b"}}>
  <Navbar.Brand href="#">React Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
      <Nav.Link href="#Popular">Popular</Nav.Link>
      <Nav.Link href="#Latest">Latest</Nav.Link>
      <Nav.Link href="#Trending">Trending</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;