import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import NavPublic from './NavPublic'; // import HexagonNav from './HexagonNav';

import Sidebar from './NavSidebar';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'; // If we need to absolutely mimick current navbar behavior, this looks promising...
// https://stackoverflow.com/questions/54164397/bootstrap-4-how-to-make-fixed-top-navbar-disappear-on-scroll

const AppNav = () => React.createElement(React.Fragment, null, React.createElement(Sidebar, null), React.createElement(Navbar, {
  className: "sticky-top",
  light: true,
  expand: "md"
}, React.createElement(NavbarBrand, {
  href: "/"
}, React.createElement("div", {
  className: "d-none d-md-block",
  id: "brandShape"
}), React.createElement("img", {
  alt: "smm logo",
  src: "https://smm-bit-test.s3.amazonaws.com/logo.svg"
})), React.createElement(Nav, {
  className: "d-none d-md-flex d-lg-flex",
  navbar: true
}, React.createElement(NavPublic, null))));

export default AppNav;