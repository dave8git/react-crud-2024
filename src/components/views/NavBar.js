import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Navbar.Brand href="#home">Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/" href="#home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/about" href="#about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="/categories" href="#categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;