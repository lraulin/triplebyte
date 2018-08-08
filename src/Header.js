import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Awesome Website</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>
        <Link to="/page2">Page 2</Link>
      </NavItem>
      <NavItem>
        <Link to="/page3">Page 3</Link>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
