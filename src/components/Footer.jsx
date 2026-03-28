import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dark">
      <div className="inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-placeholder">SH</div>
            <p>Sydney&rsquo;s most meticulous cleaning service, delivering excellence to your doorstep every day.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Get a Quote</a>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <a>House Cleaning</a>
            <a>Deep Cleaning</a>
            <a>Office Cleaning</a>
            <a>End of Lease</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sparkle Haven Cleaning Services. All rights reserved.</p>
          <div className="footer-legal">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
