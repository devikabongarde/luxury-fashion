import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Discover Luxury Fashion</h1>
        <p>Exclusive collections from the best designers</p>
       <Link to="/products">
        <button className="shop-now-btn">Shop Now</button>
      </Link>
      </div>
    </div>
  );
};

export default HeroSection;
