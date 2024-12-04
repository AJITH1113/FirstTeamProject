import React from "react";

function Navbar() {
  return <div>Navbar</div>;
}

import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>Rad Plants</h1>
      </div>
      <div className="navigation_links">
        <Link to="/home">Home</Link>
        <Link to="/catalogue">catalogue</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="search_cart">
        <button>Search</button>
        <button>Cart({})</button>
      </div>
    </div>
  );
};

export default Navbar;
