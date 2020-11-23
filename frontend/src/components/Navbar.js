import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_branding">
        <a href="/" style={{ color: "#fff" }}>
          <h1>CF-EXPLORER</h1>
        </a>
      </div>
      <div className="navbar_options">
        <ul>
          <li>
            <a href="#about_cf">About CF</a>
          </li>
          <li>
            <a href="#explore">Explore</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
