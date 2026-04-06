import React from 'react';
import './Hero.css';
import heroBg from '../assets/front page.jpg';

const Hero = () => {
  return (
    <section id="home">
      <img src={heroBg} alt="" className="hero-bg-img" aria-hidden="true" />
      <div className="hero-orbs" aria-hidden="true">
        <span className="orb orb1"></span>
        <span className="orb orb2"></span>
        <span className="orb orb3"></span>
      </div>
      <div className="hero-sparkles" aria-hidden="true">
        <span className="sp sp1">✦</span>
        <span className="sp sp2">✧</span>
        <span className="sp sp3">✦</span>
        <span className="sp sp4">✧</span>
        <span className="sp sp5">✦</span>
      </div>
      <div className="hero-inner">
        <span className="hero-pill">✦ Sydney&rsquo;s Professional Cleaning Service</span>
        <h1 className="hero-h1">
          Your Home, <em>Spotlessly Clean</em>
        </h1>
        <p className="hero-p">
          Reliable, eco-friendly cleaning tailored to your schedule — backed by our satisfaction guarantee.
        </p>
        <div className="hero-btns">
          <a className="hero-cta" href="#contact">
            Get a Free Quote 
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a className="hero-ghost" href="#services">Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-n">5★</span>
            <span className="stat-l">Rated by Clients</span>
          </div>
          <div className="stat-div"></div>
          <div className="stat">
            <span className="stat-n">100%</span>
            <span className="stat-l">Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
