"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactBurgerMenu = require("react-burger-menu");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sidebar = function Sidebar() {
  return _react["default"].createElement(_reactBurgerMenu.slide, {
    className: "text-light",
    width: 280
  }, _react["default"].createElement("a", {
    className: "menu-item",
    href: "https://www.smm.org/visit"
  }, _react["default"].createElement("h4", null, "Visit")), _react["default"].createElement("a", {
    className: "menu-item",
    href: "https://www.smm.org/camps-classes"
  }, _react["default"].createElement("h4", null, "Camps")), _react["default"].createElement("a", {
    className: "menu-item",
    href: "https://www.smm.org/educators"
  }, _react["default"].createElement("h4", null, "Educators")), _react["default"].createElement("a", {
    className: "menu-item",
    href: "https://www.smm.org/support"
  }, _react["default"].createElement("h4", null, "Support")), _react["default"].createElement("a", {
    className: "menu-item",
    href: "https://www.smm.org/store"
  }, _react["default"].createElement("h4", null, "Store")));
};

var _default = Sidebar;
exports["default"] = _default;