import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // import TicketCalendar from '../../Tickets/TicketCalendar';

import './index.css';

const HexagonNav = () => {
  const [datePickerModalIsOpen, setDatePickerModalIsOpen] = useState(false);
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "d-none d-md-block"
  }, React.createElement("a", {
    href: "https://www.smm.org/tickets"
  }, React.createElement("div", {
    className: "hex hex-tickets position-absolute"
  }, React.createElement("div", {
    className: "d-inline-block",
    id: "hexLeft"
  }), React.createElement("div", {
    id: "hexCenter",
    className: "text-center text-light"
  }, "Tickets"), React.createElement("div", {
    className: "d-inline-block",
    id: "hexRight"
  }))), React.createElement("a", {
    href: "https://www.smm.org/membership"
  }, React.createElement("div", {
    className: "hex hex-membership position-absolute"
  }, React.createElement("div", {
    id: "hexLeft"
  }), React.createElement("div", {
    id: "hexCenter",
    className: "text-center text-light"
  }, "Membership"), React.createElement("div", {
    id: "hexRight"
  }))), React.createElement("div", {
    className: "hex hex-calendar position-absolute",
    onClick: () => {
      setDatePickerModalIsOpen(!datePickerModalIsOpen);
    },
    onKeyPress: () => {
      setDatePickerModalIsOpen(!datePickerModalIsOpen);
    },
    role: "button",
    tabIndex: 0
  }, React.createElement("div", {
    id: "hexLeft"
  }), React.createElement("div", {
    id: "hexCenter",
    className: "text-center text-light"
  }, React.createElement(FontAwesomeIcon, {
    icon: "calendar-alt"
  })), React.createElement("div", {
    id: "hexRight"
  }))));
};

export default HexagonNav;