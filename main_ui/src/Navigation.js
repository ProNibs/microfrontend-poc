import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function Navigation() {
    return (
        <div className="NavigationBar">
            <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/dropdown/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/dropdown/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/dropdown/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;