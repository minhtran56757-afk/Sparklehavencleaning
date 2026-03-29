import React from 'react';
import './Reviews.css';

const reviews = [
  { name: 'Nic T.', service: 'Apartment Clean', text: 'Great cleaner — did everything perfectly.', stars: 5, color: '#3B5998' },
  { name: 'Razia I.', service: 'General Clean', text: 'Young and energetic team. Very happy with the cleaning.', stars: 5, color: '#27AE60' },
  { name: 'Santosh K.', service: 'Cleaner Required', text: 'Great service, thank you!', stars: 5, color: '#E67E22' },
  { name: 'Andrew L.', service: 'House Cleaning', text: 'The cleaner was a pleasure to work with — very enthusiastic and committed to exceptional service. Highly recommend!', stars: 5, color: '#C0392B' },
  { name: 'Carla D.', service: 'Move In Clean', text: 'Arrived right on time and listened to all our requests.', stars: 4, color: '#8E44AD' },
  { name: 'Emily S.', service: 'End of Lease', text: 'Highly recommend!! Thank you for your help today.', stars: 5, color: '#2980B9' },
  { name: 'Alex P.', service: 'House Cleaning', text: 'Punctual, friendly, and efficient — thank you!', stars: 5, color: '#16A085' },
  { name: 'Huma M.', service: 'General Cleaning', text: 'Amazing job! Accommodated me on short notice. Highly recommend for end of lease!', stars: 5, color: '#E74C3C' },
];

const ReviewCard = ({ review }) => (
  <div className="mq-card">
    <div className="mq-user">
      <div className="mq-avatar" style={{ background: review.color }}>
        {review.name[0]}
      </div>
      <div>
        <span className="mq-name">{review.name}</span>
        <span className="mq-service">{review.service}</span>
      </div>
    </div>
    <div className="mq-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} style={{ color: i < review.stars ? '#F59E0B' : 'rgba(255,255,255,0.15)' }}>★</span>
      ))}
    </div>
    <p className="mq-text">&ldquo;{review.text}&rdquo;</p>
  </div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="sec navy rv-sec">
      <div className="rv-hd sec-hd">
        <div className="rule"></div>
        <span className="ey">Client Reviews</span>
        <h2 className="sec-h2">
          <span className="tw">What Our Clients </span>
          <span className="tg">Say</span>
        </h2>
        <p className="sec-p">Real reviews from real clients — verified and unedited.</p>
      </div>
      <div className="mq-wrap">
        <div className="mq-track">
          {[...reviews, ...reviews].map((rev, i) => (
            <ReviewCard key={i} review={rev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
