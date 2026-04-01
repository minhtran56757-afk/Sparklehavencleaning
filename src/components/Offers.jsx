import React from 'react';
import './Offers.css';
import photo1 from '../assets/image 1.jpg';
import photo2 from '../assets/image 2.jpg';
import photo3 from '../assets/image 3.jpeg';
import photo4 from '../assets/image 4.jpg';
import photo5 from '../assets/Photo 5.png';
import photo6 from '../assets/Photo 6.png';

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
              <img src={photo1} alt="First-Time Discount" className="oi-img" />
              <span className="obg">New Clients</span>
            </div>
            <div className="ob">
              <h3>First-Time Discount</h3>
              <p>New clients enjoy a <strong>15% discount</strong> on their first cleaning service. Risk-free, no strings attached.</p>
              <a className="ob-link" href="#contact">Claim Offer &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo2} alt="Referral Rewards" className="oi-img" />
              <span className="obg">Referrals</span>
            </div>
            <div className="ob">
              <h3>Referral Rewards</h3>
              <p>Refer a friend and receive a <strong>$20 credit</strong> toward your next booking. Everyone wins.</p>
              <a className="ob-link" href="#contact">Learn More &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo3} alt="Seasonal Cleaning Special" className="oi-img" />
              <span className="obg">Limited Time</span>
            </div>
            <div className="ob">
              <h3>Seasonal Cleaning Special</h3>
              <p>Book a Deep Clean this season and receive a <strong>complimentary window clean</strong> included at no extra charge.</p>
              <a className="ob-link" href="#contact">Claim Offer &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo4} alt="Bundle & Save Deal" className="oi-img" />
              <span className="obg">Best Value</span>
            </div>
            <div className="ob">
              <h3>Bundle &amp; Save Deal</h3>
              <p>Book <strong>3 or more cleans</strong> upfront and save 10% on every session. Flexible scheduling included.</p>
              <a className="ob-link" href="#contact">Get Started &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo5} alt="Loyalty Reward" className="oi-img" />
              <span className="obg">Loyal Clients</span>
            </div>
            <div className="ob">
              <h3>Loyalty Reward</h3>
              <p>After your <strong>5th booking</strong> with us, receive a complimentary add-on clean of your choice — on the house.</p>
              <a className="ob-link" href="#contact">Learn More &rarr;</a>
            </div>
          </div>

          <div className="oc">
            <div className="oi">
              <img src={photo6} alt="Gift a Clean" className="oi-img" />
              <span className="obg">Gift Idea</span>
            </div>
            <div className="ob">
              <h3>Gift a Clean</h3>
              <p>Treat someone you love to a <strong>professional clean</strong>. Gift vouchers available for any service or value.</p>
              <a className="ob-link" href="#contact">Get a Voucher &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offers;
