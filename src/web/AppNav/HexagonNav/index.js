import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import TicketCalendar from '../../Tickets/TicketCalendar';
import './index.css';

const HexagonNav = () => {
  const [datePickerModalIsOpen, setDatePickerModalIsOpen] = useState(false);

  return (
    <>
      <div className="d-none d-md-block">
        <a href="https://www.smm.org/tickets">
          <div className="hex hex-tickets position-absolute">
            <div className="d-inline-block" id="hexLeft" />
            <div id="hexCenter" className="text-center text-light">
              Tickets
            </div>
            <div className="d-inline-block" id="hexRight" />
          </div>
        </a>
        <a href="https://www.smm.org/membership">
          <div className="hex hex-membership position-absolute">
            <div id="hexLeft" />
            <div id="hexCenter" className="text-center text-light">
              Membership
            </div>
            <div id="hexRight" />
          </div>
        </a>
        <div
          className="hex hex-calendar position-absolute"
          onClick={() => {
            setDatePickerModalIsOpen(!datePickerModalIsOpen);
          }}
          onKeyPress={() => {
            setDatePickerModalIsOpen(!datePickerModalIsOpen);
          }}
          role="button"
          tabIndex={0}
        >
          <div id="hexLeft" />
          <div id="hexCenter" className="text-center text-light">
            <FontAwesomeIcon icon="calendar-alt" />
          </div>
          <div id="hexRight" />
        </div>
        {/* }<TicketCalendar
          datePickerModalIsOpen={datePickerModalIsOpen}
          toggleDatePickerModal={() => {
            setDatePickerModalIsOpen(!datePickerModalIsOpen);
          }}
        /> */}
      </div>
    </>
  );
};

export default HexagonNav;
