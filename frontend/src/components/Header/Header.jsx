import React from 'react';
import './Header.css';
import headerImg from "../../assets/header_img.png";


const Header = () => {
  return (
    <div
      className="header"
      style={{
        background: `url(${headerImg}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      <div className="header-contents">
        <h2>Freshly Baked Happiness in Every Bite.</h2>
        <p>Experience the magic of home-baked goodness—crafted with love, one bite at a time.❤️</p>
        <p>"Every bite tells a story of love, warmth, and sweetness."</p>
      </div>
    </div>
  );
};

export default Header;
