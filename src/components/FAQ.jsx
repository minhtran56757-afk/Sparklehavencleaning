import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'How long does a cleaning service take?',
    a: 'A General Clean typically takes 2–4 hours, while a Deep Clean may take 4–8 hours depending on the size of your property.',
  },
  {
    q: 'Do I need to be home during the clean?',
    a: "No — many clients provide access while they're at work or out. All our cleaners are trusted and police-checked for your peace of mind.",
  },
  {
    q: 'Do you bring your own cleaning supplies?',
    a: 'Yes. Our team arrives fully equipped with professional tools and eco-friendly, non-toxic products to ensure the best results while keeping your home safe.',
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: 'Contact us within 24 hours and we will return to re-clean the area at no extra cost. Your satisfaction is our priority.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="sec dark">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule"></div>
          <span className="ey">Good to Know</span>
          <h2 className="sec-h2">
            <span className="tw">Common </span>
            <span className="tg">Questions</span>
          </h2>
        </div>
        <div className="faq-layout">
          <div className="faq-img-col">
            <div className="faq-badge">
              <span className="faq-bn">100%</span>
              <span className="faq-bl">Satisfaction Guarantee</span>
            </div>
          </div>
          <div className="faq-col">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${openIndex === i ? ' open' : ''}`}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <div className="faq-q">
                  <span>{item.q}</span>
                  <div className="faq-ico">
                    <svg viewBox="0 0 24 24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
                {openIndex === i && <div className="faq-a">{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
