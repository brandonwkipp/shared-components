import React from 'react';
import {
  Nav, Navbar, NavbarBrand,
} from 'reactstrap';

import NavPublic from './NavPublic';
// import HexagonNav from './HexagonNav';
import Sidebar from './NavSidebar';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// If we need to absolutely mimick current navbar behavior, this looks promising...
// https://stackoverflow.com/questions/54164397/bootstrap-4-how-to-make-fixed-top-navbar-disappear-on-scroll

const AppNav = () => (
  <>
    <Sidebar />
    <Navbar className="sticky-top" light expand="md">
      <NavbarBrand href="/">
        <div className="d-none d-md-block" id="brandShape" />
        <img alt="smm logo" src="https://smm-bit-test.s3.amazonaws.com/logo.svg" />
      </NavbarBrand>
      <Nav className="d-none d-md-flex d-lg-flex" navbar>
        <NavPublic />
      </Nav>
      {/* }<HexagonNav className="d-none d-md-flex d-lg-flex" /> */}
    </Navbar>
  </>
);

export default AppNav;
