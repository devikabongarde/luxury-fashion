// Modify Navbar.js to add the hamburger menu
import React, { useState } from 'react';
import './Navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">DeviLux</div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span>☰</span>
      </div>
    </nav>
  );
};
export default Navbar;
