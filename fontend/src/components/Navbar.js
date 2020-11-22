import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_branding">
        <h1>CF-EXPLORER</h1>
      </div>
      <div className="navbar_options">
        <ul>
          <li>
            <a href="#">About CF</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
