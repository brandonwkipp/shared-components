import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const NavPublic = () => React.createElement(React.Fragment, null, React.createElement(UncontrolledDropdown, {
  nav: true,
  inNavbar: true
}, React.createElement(DropdownToggle, {
  nav: true,
  caret: true
}, "VISIT"), React.createElement(DropdownMenu, null, React.createElement("a", {
  href: "https://smm.org/exhibits-films"
}, React.createElement(DropdownItem, null, "Exhibits & Films")), React.createElement("a", {
  href: "https://smm.org/visit/hours-admission"
}, React.createElement(DropdownItem, null, "Hours & Admissions")), React.createElement("a", {
  href: "https://smm.org/visit/parking-directions"
}, React.createElement(DropdownItem, null, "Parking & Directions")), React.createElement("a", {
  href: "https://smm.org/first"
}, React.createElement(DropdownItem, null, "First Time Visitors")), React.createElement("a", {
  href: "https://smm.org/visit/accessibility-amenities"
}, React.createElement(DropdownItem, null, "Accessibility & Amenities")), React.createElement("a", {
  href: "https://smm.org/visit/food-drink"
}, React.createElement(DropdownItem, null, "Food & Drink")), React.createElement("a", {
  href: "https://smm.org/visit/gift-shop"
}, React.createElement(DropdownItem, null, "Gift Shop")), React.createElement("a", {
  href: "https://smm.org/visit/private-events"
}, React.createElement(DropdownItem, null, "Private Events")), React.createElement("a", {
  href: "https://smm.org/birthdays"
}, React.createElement(DropdownItem, null, "Birthday Parties")), React.createElement("a", {
  href: "https://smm.org/sensorysunday"
}, React.createElement(DropdownItem, null, "Sensory Friendly Sundays")))), React.createElement(UncontrolledDropdown, {
  nav: true,
  inNavbar: true
}, React.createElement(DropdownToggle, {
  nav: true,
  caret: true
}, "CAMPS"), React.createElement(DropdownMenu, null, React.createElement("a", {
  href: "https://smm.org/classes"
}, React.createElement(DropdownItem, null, "Youth Camps & Classes")), React.createElement("a", {
  href: "https://smm.org/campins"
}, React.createElement(DropdownItem, null, "Overnights & Camp-ins")), React.createElement("a", {
  href: "https://smm.org/comped"
}, React.createElement(DropdownItem, null, "Adult Computer Education Center")))), React.createElement(UncontrolledDropdown, {
  nav: true,
  inNavbar: true
}, React.createElement(DropdownToggle, {
  nav: true,
  caret: true
}, "EDUCATORS"), React.createElement(DropdownMenu, null, React.createElement("a", {
  href: "https://smm.org/educators"
}, React.createElement(DropdownItem, null, "Teacher Resources")), React.createElement("a", {
  href: "https://smm.org/educators/field-trips"
}, React.createElement(DropdownItem, null, "Field Trips")), React.createElement("a", {
  href: "https://smm.org/educators/programs-your-school"
}, React.createElement(DropdownItem, null, "Programs at Your School")), React.createElement("a", {
  href: "https://smm.org/educators/standards"
}, React.createElement(DropdownItem, null, "Standards Database")), React.createElement("a", {
  href: "https://smm.org/educators/lending-library"
}, React.createElement(DropdownItem, null, "Lending Library")), React.createElement("a", {
  href: "https://smm.org/ideal-center"
}, React.createElement(DropdownItem, null, "Resources & Professional Development")))), React.createElement(UncontrolledDropdown, {
  nav: true,
  inNavbar: true
}, React.createElement(DropdownToggle, {
  nav: true,
  caret: true
}, "SUPPORT"), React.createElement(DropdownMenu, null, React.createElement("a", {
  href: "https://smm.org/support/donate"
}, React.createElement(DropdownItem, null, "Donate")), React.createElement("a", {
  href: "https://smm.org/membership"
}, React.createElement(DropdownItem, null, "Become a member")), React.createElement("a", {
  href: "https://smm.org/support/legacy-giving"
}, React.createElement(DropdownItem, null, "Legacy Giving")), React.createElement("a", {
  href: "https://smm.org/support/corporate-support"
}, React.createElement(DropdownItem, null, "Corporate Support")))), React.createElement(UncontrolledDropdown, {
  nav: true,
  inNavbar: true
}, React.createElement("a", {
  className: "nav-link",
  href: "https://smm.org/store"
}, "STORE")));

export default NavPublic;