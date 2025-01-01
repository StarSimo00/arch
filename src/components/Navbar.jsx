import React, { useState } from 'react';
import "../Styles/Style.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar animate__animated animate__fadeInUp">
        <div className="navbar-logo">
          <img src='../images/logo-1.png' alt="Brand Logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-menu animate__animated animate__fadeIn ${menuActive ? 'active' : ''}`}>
          <li className="navbar-item"><Link to="/">Home</Link></li>
          <li className="navbar-item dropdown">
            <Link to="#category" className="dropbtn">Category</Link>
            <div className="dropdown-content">
              <a href="#arch-tools">Arch Tools</a>
              <a href="#cracked-apps">Cracked Apps</a>
            </div>
          </li>
          <li className="navbar-item"><Link to="/Products">Product</Link></li>
          <li className="navbar-item"><Link to="/Contacts">Contact</Link></li>
          <li className="navbar-item"><Link to="/Cart"><i className="bi bi-cart-check"></i></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;