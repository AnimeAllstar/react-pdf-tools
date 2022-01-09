import React from 'react';
import { Github } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavTop = () => {
  return (
    <Navbar collapseOnSelect expand="md" bg="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <h2>React PDF Tools</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/merge">
              <h5>Merge PDF</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/split">
              <h5>Split PDF</h5>
            </Nav.Link>
          </Nav>
          <Nav>
            <a href="https://github.com/AnimeAllstar/react-pdf-tools" target="_blank" rel="noreferrer" className="link-dark">
              <Github size={32} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavTop;
