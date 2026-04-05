import React from 'react';
import './Offers.css';
import photo1 from '../assets/image 1.jpg';
import photo2 from '../assets/image 2.jpg';
import photo3 from '../assets/image 3.jpeg';
import photo5 from '../assets/Rennovation.jpg';
import photo6 from '../assets/Office.jpg';

const Offers = () => {
  return (
    <section id="offers" className="sec dark">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule"></div>
          <span className="ey">Exclusive Deals</span>
          <h2 className="sec-h2">
            <span className="tw">Special </span>
            <span className="tg">Offers</span>
          </h2>
          <p className="sec-p">Promotions for new and returning clients.</p>
        </div>
        <div className="og">

          <div className="oc">
            <div className="oi">
              <img src={photo1} alt="General Clean" className="oi-img" />
              <span className="obg">Popular</span>
            </div>
            <div className="ob">
              <h3>General Clean</h3>
              <p>Great for homes that are <strong>regularly maintained</strong>. Recommended for weekly or fortnightly upkeep — bedrooms, bathrooms, kitchen, living areas, vacuuming, mopping, dusting, and tidying.</p>
              <a className="ob-link" href="#contact">Book Now &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo2} alt="Deep Clean" className="oi-img" />
              <span className="obg">Recommended</span>
            </div>
            <div className="ob">
              <h3>Deep Clean</h3>
              <p>Recommended if your home has <strong>not been professionally cleaned in over 30 days</strong>, or for first-time visits. Includes everything in a General Clean, plus skirting boards, cornices, window frames, cobwebs, and more.</p>
              <a className="ob-link" href="#contact">Book Now &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo3} alt="End-of-Lease Cleaning" className="oi-img" />
              <span className="obg">Bond Back</span>
            </div>
            <div className="ob">
              <h3>End-of-Lease Cleaning</h3>
              <p>A thorough, <strong>bond-back guarantee</strong> service covering all areas: ovens, bathrooms, carpets, walls, and more. Final quotes based on property size and condition.</p>
              <a className="ob-link" href="#contact">Get a Quote &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo5} alt="Post-Construction Cleaning" className="oi-img" />
              <span className="obg">New Builds</span>
            </div>
            <div className="ob">
              <h3>Post-Construction Cleaning</h3>
              <p>A comprehensive service for newly completed builds and renovations. Removes dust, debris, and construction residue — <strong>polished to handover standards</strong>.</p>
              <a className="ob-link" href="#contact">Get a Quote &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo6} alt="Commercial Cleaning" className="oi-img" />
              <span className="obg">Business</span>
            </div>
            <div className="ob">
              <h3>Commercial Cleaning</h3>
              <p>Tailored for offices with <strong>flexible daily or weekly schedules</strong>. Services include thorough deep cleaning with flexible hours of execution.</p>
              <a className="ob-link" href="#contact">Enquire Now &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;
