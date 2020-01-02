import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavPublic = () => (
  <>
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        VISIT
      </DropdownToggle>
      <DropdownMenu>
        <a href="https://smm.org/exhibits-films">
          <DropdownItem>Exhibits & Films</DropdownItem>
        </a>
        <a href="https://smm.org/visit/hours-admission">
          <DropdownItem>Hours & Admissions</DropdownItem>
        </a>
        <a href="https://smm.org/visit/parking-directions">
          <DropdownItem>Parking & Directions</DropdownItem>
        </a>
        <a href="https://smm.org/first">
          <DropdownItem>First Time Visitors</DropdownItem>
        </a>
        <a href="https://smm.org/visit/accessibility-amenities">
          <DropdownItem>Accessibility & Amenities</DropdownItem>
        </a>
        <a href="https://smm.org/visit/food-drink">
          <DropdownItem>Food & Drink</DropdownItem>
        </a>
        <a href="https://smm.org/visit/gift-shop">
          <DropdownItem>Gift Shop</DropdownItem>
        </a>
        <a href="https://smm.org/visit/private-events">
          <DropdownItem>Private Events</DropdownItem>
        </a>
        <a href="https://smm.org/birthdays">
          <DropdownItem>Birthday Parties</DropdownItem>
        </a>
        <a href="https://smm.org/sensorysunday">
          <DropdownItem>Sensory Friendly Sundays</DropdownItem>
        </a>
      </DropdownMenu>
    </UncontrolledDropdown>

    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        CAMPS
      </DropdownToggle>
      <DropdownMenu>
        <a href="https://smm.org/classes">
          <DropdownItem>Youth Camps & Classes</DropdownItem>
        </a>
        <a href="https://smm.org/campins">
          <DropdownItem>Overnights & Camp-ins</DropdownItem>
        </a>
        <a href="https://smm.org/comped">
          <DropdownItem>Adult Computer Education Center</DropdownItem>
        </a>
      </DropdownMenu>
    </UncontrolledDropdown>

    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        EDUCATORS
      </DropdownToggle>
      <DropdownMenu>
        <a href="https://smm.org/educators">
          <DropdownItem>Teacher Resources</DropdownItem>
        </a>
        <a href="https://smm.org/educators/field-trips">
          <DropdownItem>Field Trips</DropdownItem>
        </a>
        <a href="https://smm.org/educators/programs-your-school">
          <DropdownItem>Programs at Your School</DropdownItem>
        </a>
        <a href="https://smm.org/educators/standards">
          <DropdownItem>Standards Database</DropdownItem>
        </a>
        <a href="https://smm.org/educators/lending-library">
          <DropdownItem>Lending Library</DropdownItem>
        </a>
        <a href="https://smm.org/ideal-center">
          <DropdownItem>Resources & Professional Development</DropdownItem>
        </a>
      </DropdownMenu>
    </UncontrolledDropdown>

    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        SUPPORT
      </DropdownToggle>
      <DropdownMenu>
        <a href="https://smm.org/support/donate">
          <DropdownItem>Donate</DropdownItem>
        </a>
        <a href="https://smm.org/membership">
          <DropdownItem>Become a member</DropdownItem>
        </a>
        <a href="https://smm.org/support/legacy-giving">
          <DropdownItem>Legacy Giving</DropdownItem>
        </a>
        <a href="https://smm.org/support/corporate-support">
          <DropdownItem>Corporate Support</DropdownItem>
        </a>
      </DropdownMenu>
    </UncontrolledDropdown>

    <UncontrolledDropdown nav inNavbar>
      <a className="nav-link" href="https://smm.org/store">
        STORE
      </a>
    </UncontrolledDropdown>
  </>
);

export default NavPublic;
