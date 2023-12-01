import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-elements">
        <ul>
          <li>
            <Link className="elements" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="elements" to="/data">
              Data
            </Link>
          </li>
          <li>
            <Link className="elements" to="/transaction">
              Transaction
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
