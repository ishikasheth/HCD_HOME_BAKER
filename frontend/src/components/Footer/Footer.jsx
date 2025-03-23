import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="Company Logo" />
                <p>"Bringing sweetness to every occasion! At Radhika's Cake Boutique, we craft delicious homemade cakes, cupcakes, and chocolate delights with love and the finest ingredients. Whether it's a birthday, anniversary, or just a sweet craving, we’ve got the perfect treat for you. Order now and let us add a touch of joy to your moments!"</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="Facebook" />
                    <img src={assets.twitter_icon} alt="Twitter" />
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9026000300</li>
                    <li>Contact@mail.com</li>
                </ul>
            </div>            
        </div>
        <hr />
        <p className="footer-copyright">Copyright Text @ 2025</p>
    </div>
  )
}

export default Footer
