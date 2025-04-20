import React from 'react';
import { Link } from 'react-router-dom';
import './subNavbar.css';

const SubNavbar = () => {
  return (
    <div className="sub-navbar">
      <div className="sub-nav-item">
        <Link to="/Favorite">
          <i className="fas fa-heart"></i>
          <span>Favorite</span>
        </Link>
      </div>
      <div className="sub-nav-item">
        <Link to="/Cart">
          <i className="fas fa-shopping-cart"></i>
          <span>Cart</span>
        </Link>
      </div>
      <div className="sub-nav-item">
        <Link to="/purchased">
          <i className="fas fa-shopping-bag"></i>
          <span>Purchased</span>
        </Link>
      </div>
    </div>
  );
};

export default SubNavbar;
