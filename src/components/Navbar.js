import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppNavbar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">
        DataViz
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/home">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;
