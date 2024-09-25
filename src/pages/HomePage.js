import React from 'react';
import './HomePage.css';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <div className="homepage-content">
        <h2>Welcome to DeviLux</h2>
        <p>Explore our exclusive collection of luxury fashion, designed to elevate your wardrobe with the finest craftsmanship and style.</p>
      </div>
    </div>
  );
};

export default HomePage;
