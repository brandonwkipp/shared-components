"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

require("bootstrap/dist/css/bootstrap.css");

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Footer = function Footer() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("footer", {
    id: "footer"
  }, _react["default"].createElement(_reactstrap.Container, {
    className: "w-100",
    fluid: true
  }, _react["default"].createElement(_reactstrap.Row, null, _react["default"].createElement(_reactstrap.Col, {
    md: 3
  }, _react["default"].createElement("h5", null, "ABOUT THE MUSEUM"), _react["default"].createElement("ul", {
    className: "list-unstyled"
  }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/about"
  }, "About Ussssss")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/contact"
  }, "Contact Us")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/donations"
  }, "Donations to Non-Profits")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/ideal-center"
  }, "IDEAL Center Professional Development")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/kaysc"
  }, "Kitty Andersen Youth Science Center")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/educators/lending-library"
  }, "Lending Library")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/media"
  }, "Media Room")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "http://www.nps.gov/miss/planyourvisit/mrvcabou.htm"
  }, "Mississippi River Visitor Center")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/pluggedin"
  }, "Plugged In Blog")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/collections"
  }, "Our Collections")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/scientists"
  }, "Our Scientists")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/scwrs"
  }, "St. Croix Watershed Research Station")))), _react["default"].createElement(_reactstrap.Col, {
    md: 3
  }, _react["default"].createElement("h5", null, "JOIN OUR TEAM"), _react["default"].createElement("ul", {
    className: "list-unstyled"
  }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/jobs"
  }, "Jobs & Internships")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/volunteer"
  }, "Volunteer")))), _react["default"].createElement(_reactstrap.Col, {
    md: 3
  }, _react["default"].createElement("h5", null, "FOR MUSEUM PROFESSIONALS"), _react["default"].createElement("ul", {
    className: "list-unstyled"
  }, _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/exhibitservices"
  }, "Exhibit Services")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/exhibitrental"
  }, "Exhibit Rental")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/evaluation"
  }, "Evaluation & Learning Research")), _react["default"].createElement("li", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/ipage"
  }, "iPAGE Community")))), _react["default"].createElement(_reactstrap.Col, {
    md: 3
  }, _react["default"].createElement("h5", null, "CONNECT WITH US"))), _react["default"].createElement(_reactstrap.Row, null, _react["default"].createElement(_reactstrap.Col, {
    className: "text-center",
    md: 12
  }, _react["default"].createElement("h5", null, "PREMIER PARTNERS"), _react["default"].createElement("p", null, _react["default"].createElement("a", {
    href: "https://www.3m.com/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, _react["default"].createElement("img", {
    alt: "3M",
    src: "https://smm-bit-test.s3.amazonaws.com/footer-3m.png"
  })), _react["default"].createElement("a", {
    href: "https://www.healthpartners.com/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, _react["default"].createElement("img", {
    alt: "HealthPartners",
    src: "https://smm-bit-test.s3.amazonaws.com/footer-healthpartners.png"
  })), _react["default"].createElement("a", {
    href: "https://www.target.com/",
    rel: "noopener noreferrer",
    target: "_blank"
  }, _react["default"].createElement("img", {
    alt: "Target",
    src: "https://smm-bit-test.s3.amazonaws.com/footer-target.png"
  }))), _react["default"].createElement("p", {
    className: "mb-0"
  }, "\xA9 2019 Science Museum of Minnesota \u2022 120 W. Kellogg Blvd. \u2022 Saint Paul, MN 55102 \u2022 (651) 221-9444 \u2022", ' ', _react["default"].createElement("a", {
    href: "mailto:info@smm.org"
  }, "info@smm.org")), _react["default"].createElement("p", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/privacy"
  }, "Privacy Policy"), ' ', "\u2022", ' ', _react["default"].createElement("a", {
    href: "https://www.smm.org/legal"
  }, "Legal Notice")), _react["default"].createElement("p", null, _react["default"].createElement("a", {
    href: "https://www.smm.org/legacy",
    rel: "noopener noreferrer",
    target: "_blank"
  }, _react["default"].createElement("img", {
    alt: "Legacy Logo",
    id: "legacyImage",
    src: "https://smm-bit-test.s3.amazonaws.com/legacy.png"
  }))))))));
};

var _default = Footer;
exports["default"] = _default;