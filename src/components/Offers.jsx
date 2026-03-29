import React from 'react';
import './Offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      badge: 'New Clients',
      title: '15% Off Your First Clean',
      desc: 'Book any service for the first time and receive 15% off. Use code ',
      code: 'SPARKLE15',
      detail: 'Valid for all residential cleans. Cannot be combined with other offers.',
    },
    {
      id: 2,
      badge: 'Returning Clients',
      title: 'Free Oven Clean',
      desc: 'Book a Deep Clean or End of Lease and get a complimentary full oven clean included at ',
      code: 'no extra cost',
      detail: 'Available to returning clients only. Mention this offer when booking.',
    },
  ];

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
          {offers.map((offer) => (
            <div key={offer.id} className="oc">
              <div className="oi">
                <div className="oi-placeholder"></div>
                <span className="obg">{offer.badge}</span>
              </div>
              <div className="ob">
                <h3>{offer.title}</h3>
                <p>
                  {offer.desc}<strong>{offer.code}</strong>. {offer.detail}
                </p>
                <a className="ob-link" href="#contact">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
