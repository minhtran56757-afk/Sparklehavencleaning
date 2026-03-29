import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImg from '../assets/Logo.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const SECTIONS = ['home', 'offers', 'services', 'how-it-works', 'gallery', 'reviews', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let current = 'home';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={isScrolled ? 'sc' : ''}>
      <div className="hbar"></div>
      <div className="hin">
        <a className="logo" href="#home" onClick={closeMenu}>
          <img src={logoImg} alt="Sparkle Haven" className="logo-img" />
          <div>
            <span className="logo-name">Sparkle Haven</span>
            <span className="logo-sub">Cleaning Services</span>
          </div>
        </a>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className={`nl${active === link.href.slice(1) ? ' ac' : ''}`}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="hbtn" href="#contact">
            Get a Quote
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <button
            className={`hbug${isOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mm${isOpen ? ' open' : ''}`}>
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
