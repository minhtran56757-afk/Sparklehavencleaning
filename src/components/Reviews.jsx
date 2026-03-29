import React, { useRef, useEffect } from 'react';
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
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const SPEED = 0.7;

  useEffect(() => {
    const track = trackRef.current;

    const tick = () => {
      if (!dragging.current) {
        offsetRef.current += SPEED;
        const setWidth = track.scrollWidth / 3;
        if (offsetRef.current >= setWidth * 2) offsetRef.current -= setWidth;
        if (offsetRef.current < 0) offsetRef.current += setWidth;
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const startDrag = (clientX) => {
    dragging.current = true;
    dragStartX.current = clientX;
    dragStartOffset.current = offsetRef.current;
  };

  const moveDrag = (clientX) => {
    if (!dragging.current) return;
    const track = trackRef.current;
    const setWidth = track.scrollWidth / 3;
    let next = dragStartOffset.current + (dragStartX.current - clientX);
    if (next >= setWidth * 2) next -= setWidth;
    if (next < 0) next += setWidth;
    offsetRef.current = next;
    track.style.transform = `translateX(-${next}px)`;
  };

  const endDrag = () => { dragging.current = false; };

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
        <div
          className="mq-track"
          ref={trackRef}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseMove={(e) => moveDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
          onTouchEnd={endDrag}
        >
          {[...reviews, ...reviews, ...reviews].map((rev, i) => (
            <ReviewCard key={i} review={rev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
