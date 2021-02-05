import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = () => (


  <ul>
    <li>
      <NavLink to="/" className="" activeClassName="">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/shows" className="" activeClassName="">
        Shows
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
