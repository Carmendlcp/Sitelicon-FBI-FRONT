import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-sin-fondo.png';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="footer-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="footer-author">
          <p>Carmen</p>
          <p>de la Calle Pinto</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
