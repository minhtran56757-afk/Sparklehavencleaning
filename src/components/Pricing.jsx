import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="services" className="sec navy">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule"></div>
          <span className="ey">What We Offer</span>
          <h2 className="sec-h2">
            <span className="tw">Our </span>
            <span className="tg">Services</span>
          </h2>
          <p className="sec-p">Professional, eco-friendly cleaning carried out by our trusted team.</p>
        </div>
        <div className="pg">
          <div className="pc">
            <div className="pc-ico">✦</div>
            <h3>General Clean</h3>
            <p className="pc-desc">Great for homes that are regularly maintained. Recommended for weekly or fortnightly upkeep.</p>
            <div className="pc-cols">
              <ul className="chk">
                <li>Bedrooms</li>
                <li>Bathrooms</li>
                <li>Kitchen</li>
                <li>Living / Dining</li>
              </ul>
              <ul className="chk">
                <li>Vacuuming</li>
                <li>Mopping</li>
                <li>Dusting</li>
                <li>Tidying</li>
              </ul>
            </div>
            <div className="pc-foot">
              <span className="pc-price">$160</span>
              <a className="pc-btn" href="#contact">Book Now</a>
            </div>
          </div>

          <div className="pc pc-feat">
            <div className="pc-rec">★ RECOMMENDED</div>
            <div className="pc-ico pc-ico-gold">✦</div>
            <h3>Deep Clean</h3>
            <p className="pc-desc">Recommended if your home has not been professionally cleaned in over 30 days, or for first-time visits.</p>
            <p className="pc-incl">Includes everything in General Clean, PLUS&hellip;</p>
            <ul className="chk chk-single">
              <li>Skirting Boards</li>
              <li>Dust Cornices</li>
              <li>Window Frames &amp; Ledges</li>
              <li>Remove Cobwebs</li>
              <li>Doors &amp; Frames</li>
            </ul>
            <div className="pc-foot">
              <span className="pc-price pc-price-gold">$230</span>
              <a className="pc-btn pc-btn-gold" href="#contact">Book Now</a>
            </div>
          </div>
        </div>
        <p className="price-note">All prices include GST &nbsp;&middot;&nbsp; No lock-in contracts</p>
      </div>
    </section>
  );
};

export default Pricing;
