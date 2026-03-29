import React from 'react';
import './Footer.css';
import logoImg from '../assets/Logo.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="fi">
        <div className="fb">
          <img src={logoImg} alt="Sparkle Haven" className="footer-logo-img" />
          <p>Professional, eco-friendly cleaning services across Sydney. Reliable, trusted, and tailored to your home.</p>
        </div>
        <div className="fc">
          <h4>Services</h4>
          <a href="#services">General Clean</a>
          <a href="#services">Deep Clean</a>
          <a href="#offers">Special Offers</a>
        </div>
        <div className="fc">
          <h4>Company</h4>
          <a href="#how-it-works">How It Works</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="fc">
          <h4>Contact</h4>
          <a href="tel:0439578719">0439 578 719</a>
          <a href="mailto:Hello@sparklehavencleaning.com.au">Hello@sparklehavencleaning.com.au</a>
          <a href="#contact">Book Online</a>
        </div>
      </div>
      <div className="fbot">
        <span>&copy; {new Date().getFullYear()} Sparkle Haven Cleaning. All rights reserved.</span>
        <span>Sydney, NSW, Australia</span>
      </div>
    </footer>
  );
};

export default Footer;
