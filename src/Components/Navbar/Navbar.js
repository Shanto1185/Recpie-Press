import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo">
                <h1>Recipe Press</h1>
            </div>
          </div>
          <div className="col-md-10">
            <div className="nav-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About Us</li>
                </Link>
                <Link to="/services" className="items">
                  <li>Services</li>
                </Link>
                <Link to="feedback" className="items">
                  <li>Feedback</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Navbar;