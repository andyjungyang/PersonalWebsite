import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'react-router-dom/Link';

function Header() {
  return (
    <div>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">Andy Yang</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/resume">Resume</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/blog">Blog</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
