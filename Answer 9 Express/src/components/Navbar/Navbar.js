import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="navbar-logo">ShopEasy</a>
      </div>
      <div className={`navbar-menu ${isDropdownOpen ? 'open' : ''}`}>
        <button className="navbar-dropdown-toggle" onClick={toggleDropdown}>
          Menu
        </button>
        <ul className="navbar-links">
          <li className="navbar-item">
            <a href="#" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Products</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Cart</a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
