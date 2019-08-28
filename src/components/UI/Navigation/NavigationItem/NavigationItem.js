import React from "react";
import { NavLink } from "react-router-dom";

const navItem = props => {
  return (
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li>
        <NavLink to="/signIn">Sign In</NavLink>
      </li>
    </ul>
  );
};

export default navItem;
