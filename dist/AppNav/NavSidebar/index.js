import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.css';

const Sidebar = () => React.createElement(Menu, {
  className: "text-light",
  width: 280
}, React.createElement("a", {
  className: "menu-item",
  href: "https://www.smm.org/visit"
}, React.createElement("h4", null, "Visit")), React.createElement("a", {
  className: "menu-item",
  href: "https://www.smm.org/camps-classes"
}, React.createElement("h4", null, "Camps")), React.createElement("a", {
  className: "menu-item",
  href: "https://www.smm.org/educators"
}, React.createElement("h4", null, "Educators")), React.createElement("a", {
  className: "menu-item",
  href: "https://www.smm.org/support"
}, React.createElement("h4", null, "Support")), React.createElement("a", {
  className: "menu-item",
  href: "https://www.smm.org/store"
}, React.createElement("h4", null, "Store")));

export default Sidebar;