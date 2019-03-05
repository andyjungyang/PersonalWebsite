import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-router-dom/Link';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Andy Yang</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/resume">Resume</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
