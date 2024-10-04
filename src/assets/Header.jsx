import React, { useState } from 'react';
import '../assets/Header.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/src/Logomark.png" alt="logo" className="logo" />
          <b className="ui">Untitled UI</b>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li>
            <a href="#products">Products</a>
            <ul className="dropdown">
              <li><a href="#product1">Product 1</a></li>
              <li><a href="#product2">Product 2</a></li>
              <li><a href="#product3">Product 3</a></li>
            </ul>
          </li>
          <li>
            <a href="#resources">Resources</a>
            <ul className="dropdown">
              <li><a href="#resource1">Resource 1</a></li>
              <li><a href="#resource2">Resource 2</a></li>
              <li><a href="#resource3">Resource 3</a></li>
            </ul>
          </li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <img src="/src/profile.png" alt="profile" className="profile-picture" />
      </nav>

      <div className="navbar-actions">
        <button className="new-feature-btn">New feature</button>
        <a href="#dashboard" className="dashboard-links">Check out the team dashboard →</a>
      </div>
    </>
  );
};

export default Navbar;