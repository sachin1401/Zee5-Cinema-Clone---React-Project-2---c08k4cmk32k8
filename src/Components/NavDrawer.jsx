import React, { useState } from "react";
import "../style/Navbar.css";

const NavDrawer = () => {
  return (
    <React.Fragment>
      <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
      <label htmlFor="drawer-toggle" id="drawer-toggle-label"></label>
      <nav id="drawer">
        <ul>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
          <li>
            <a href="#">Menu Item</a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default NavDrawer;
