import React from 'react'
import {Link} from 'react-router-dom'
import './NavbarSite.css'


//componets boostrap
import {
  Container,
  Nav,
  Navbar,
  NavDropdown
      
} from 'react-bootstrap';


function NavbarSite() {
  return (
    <>
    <Navbar bg="light"  expand="lg">
      <Container>
        <Navbar.Brand>Abiec App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="NavbarSite_text_link">Home</Link>
            </Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item>
              <Link to="/comtrade" className="NavbarSite_text_link">Comtrade</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                #
              </NavDropdown.Item>
              <NavDropdown.Item>
                #
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                #
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default NavbarSite