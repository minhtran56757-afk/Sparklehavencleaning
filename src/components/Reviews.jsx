import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      location: 'Bondi Junction',
      text: 'Absolutely the best cleaning service I’ve used in Sydney. They are reliable, thorough, and my house has never looked better!',
      stars: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Surry Hills',
      text: 'Great attention to detail. I booked a deep clean and was blown away by how fresh everything felt. Highly recommend Sparkle Haven.',
      stars: 5,
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Manly',
      text: 'Flexible scheduling and professional cleaners. It’s such a relief coming home to a spotless house after a long week.',
      stars: 5,
    },
  ];

  return (
    <section id="reviews" className="sec navy">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule"></div>
          <span className="ey">Testimonials</span>
          <h2 className="sec-h2">
            <span className="tw">What Our </span>
            <span className="tg">Clients Say</span>
          </h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="rev-card">
              <div className="rev-stars">
                {[...Array(rev.stars)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="rev-text">"{rev.text}"</p>
              <div className="rev-user">
                <div className="rev-avatar">{rev.name[0]}</div>
                <div>
                  <div className="rev-name">{rev.name}</div>
                  <div className="rev-loc">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
