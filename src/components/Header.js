import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="sticky-top shadow bg-light p-1 mb-4">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} alt="Site Logo" height="50" className="mr-2" />
            <span className="site-title ml-2">Restaurant Reservation</span>
          </Link>
        </div>
        <Link to="/customer" className="btn btn-secondary">
          My Reservations
        </Link>
 
      </div>
    </header>
  );
};

export default Header;