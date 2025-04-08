import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt="Company Logo" />
          <p>
            "Bringing sweetness to every occasion! Radhika's Cake Boutique offers delightful homemade cakes, cupcakes, and chocolates – made with love and the finest ingredients."
          </p>
          <div className='footer-social-icons'>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={assets.instagram_icon} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className='footer-content-center'>
          <h2>Company</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className='footer-content-right'>
          <h2>Get in Touch</h2>
          <ul>
            <li><a href="tel:+919026000300">+91 9026000300</a></li>
            <li><a href="mailto:radhikascakeboutique@gmail.com">radhikascakeboutique@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <p className='footer-copyright'>
        &copy; 2025 Radhika's Cake Boutique. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
