import React from "react";
import { NavLink } from "react-router-dom";

const NavbarPage = () => {
  return (
    <div className="row text-center">
      <div className="col-2">
        <NavLink class="nav-NavLink " aria-current="page" to="/">
          Home
        </NavLink>
      </div>

      <div className="col-2">
        <NavLink class="nav-NavLink" to="/Fullstack">
          FullStack
        </NavLink>
      </div>

      <div className="col-2">
        <NavLink class="nav-NavLink" to="/webdev">
          WebDevelopment
        </NavLink>
      </div>

      <div className="col-2">
        <NavLink class="nav-NavLink " to="/program">
          Programming
        </NavLink>
      </div>

      <div className="col-2">
        <NavLink class="nav-NavLink " to="/productive">
          Productivity
        </NavLink>
      </div>

      <div className="col-2">
        <NavLink class="nav-NavLink " to="/softdev">
          Software Developement
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarPage;
