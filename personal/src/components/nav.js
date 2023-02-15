import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';

// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import React from 'react';

function NavScrollExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container className=''>
        <Navbar.Brand href="">Alex Chow's Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav ms-auto" id="navbar-button"/>
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

          <Nav className="border-left pl-2 ms-auto">
            <Nav.Link className="nav_link_item" id="nav_item_one" href="/">
              About
            </Nav.Link>
            <Nav.Link className="nav_link_item" id="nav_item_two" href="/#/career/">
              Career
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;