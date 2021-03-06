import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <NavLink
            style={({ isActive }) => {
              return {
                color: isActive ? "yellow" : "black",
              };
            }}
            className={"nav-bar-link"}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-bar-link"} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-bar-link"} to="/contact">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink className={"nav-bar-link"} to="/filter">
            Filter
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
