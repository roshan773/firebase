import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Service/firebase';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const NavbarComponent = () => {

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">MyWebsite</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard" className="text-dark">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/signin" className="text-dark">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-dark">Sign Up</Nav.Link>
            <Button variant="outline-danger" onClick={() => signOut(auth)}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
