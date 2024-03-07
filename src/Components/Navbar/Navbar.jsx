import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">HOME</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">ABOUT</Link>
        </li>
        <li className="navbar-item">
          <Link to="/users" className="navbar-link">USERS</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacts" className="navbar-link">CONTACTS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

