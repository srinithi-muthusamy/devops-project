import React from 'react';
import './Header.css';
import logo from './g.jpg'; // Import the logo image
import topRightImage from './e.jpg'; // Import the top right image

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Add logo to the top left */}
        <img src={logo} alt="Logo" className="header-logo" />
        <div>
          <h1 className="header-title">E-Learning Platforms</h1>
          <p className="header-subtitle">Access Knowledge Anytime, Anywhere</p>
        </div>
      </div>
      {/* Add image to the top right */}
      <img src={topRightImage} alt="Top Right Image" className="header-top-right-image" />
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
