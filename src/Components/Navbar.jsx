import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-parent">
      <p className="logo">Quoc Lam</p>
      <div className="nav-links">
        
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Resume</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <p>Hand-coded with love</p>
      </div>
    </div>
  );
};

export default Navbar;
