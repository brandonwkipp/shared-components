import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './index.css';

const Sidebar = () => (
  <Menu className="text-light" width={280}>
    <a className="menu-item" href="https://www.smm.org/visit">
      <h4>Visit</h4>
    </a>
    <a className="menu-item" href="https://www.smm.org/camps-classes">
      <h4>Camps</h4>
    </a>
    <a className="menu-item" href="https://www.smm.org/educators">
      <h4>Educators</h4>
    </a>
    <a className="menu-item" href="https://www.smm.org/support">
      <h4>Support</h4>
    </a>
    <a className="menu-item" href="https://www.smm.org/store">
      <h4>Store</h4>
    </a>
  </Menu>
);

export default Sidebar;
