"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _NavPublic = _interopRequireDefault(require("./NavPublic"));

var _NavSidebar = _interopRequireDefault(require("./NavSidebar"));

require("bootstrap/dist/css/bootstrap.css");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import HexagonNav from './HexagonNav';
// If we need to absolutely mimick current navbar behavior, this looks promising...
// https://stackoverflow.com/questions/54164397/bootstrap-4-how-to-make-fixed-top-navbar-disappear-on-scroll
var AppNav = function AppNav() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_NavSidebar["default"], null), _react["default"].createElement(_reactstrap.Navbar, {
    className: "sticky-top",
    light: true,
    expand: "md"
  }, _react["default"].createElement(_reactstrap.NavbarBrand, {
    href: "/"
  }, _react["default"].createElement("div", {
    className: "d-none d-md-block",
    id: "brandShape"
  }), _react["default"].createElement("img", {
    alt: "smm logo",
    src: "https://smm-bit-test.s3.amazonaws.com/logo.svg"
  })), _react["default"].createElement(_reactstrap.Nav, {
    className: "d-none d-md-flex d-lg-flex",
    navbar: true
  }, _react["default"].createElement(_NavPublic["default"], null))));
};

var _default = AppNav;
exports["default"] = _default;