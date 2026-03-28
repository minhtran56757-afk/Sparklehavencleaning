import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={isScrolled ? 'sc' : ''}>
      <div className="hbar"></div>
      <div className="hin">
        <a className="logo" href="#home" onClick={closeMenu}>
          <div className="logo-placeholder">SH</div>
          <div>
            <span className="logo-name">Sparkle Haven</span>
            <span className="logo-sub">Cleaning Services</span>
          </div>
        </a>
        
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} className="nl" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="hbtn" href="#contact">
            Get a Quote 
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button 
            className={`hbug ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mm ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="mm-cta" href="#contact" onClick={closeMenu}>
          Get a Free Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
