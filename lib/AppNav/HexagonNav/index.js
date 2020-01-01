"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

require("./index.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HexagonNav = function HexagonNav() {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      datePickerModalIsOpen = _useState2[0],
      setDatePickerModalIsOpen = _useState2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("div", {
    className: "d-none d-md-block"
  }, _react["default"].createElement("a", {
    href: "https://www.smm.org/tickets"
  }, _react["default"].createElement("div", {
    className: "hex hex-tickets position-absolute"
  }, _react["default"].createElement("div", {
    className: "d-inline-block",
    id: "hexLeft"
  }), _react["default"].createElement("div", {
    id: "hexCenter",
    className: "text-center text-light"
  }, "Tickets"), _react["default"].createElement("div", {
    className: "d-inline-block",
    id: "hexRight"
  }))), _react["default"].createElement("a", {
    href: "https://www.smm.org/membership"
  }, _react["default"].createElement("div", {
    className: "hex hex-membership position-absolute"
  }, _react["default"].createElement("div", {
    id: "hexLeft"
  }), _react["default"].createElement("div", {
    id: "hexCenter",
    className: "text-center text-light"
  }, "Membership"), _react["default"].createElement("div", {
    id: "hexRight"
  }))), _react["default"].createElement("div", {
    className: "hex hex-calendar position-absolute",
    onClick: function onClick() {
      setDatePickerModalIsOpen(!datePickerModalIsOpen);
    },
    onKeyPress: function onKeyPress() {
      setDatePickerModalIsOpen(!datePickerModalIsOpen);
    },
    role: "button",
    tabIndex: 0
  }, _react["default"].createElement("div", {
    id: "hexLeft"
  }), _react["default"].createElement("div", {
    id: "hexCenter",
    className: "text-center text-light"
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "calendar-alt"
  })), _react["default"].createElement("div", {
    id: "hexRight"
  }))));
};

var _default = HexagonNav;
exports["default"] = _default;