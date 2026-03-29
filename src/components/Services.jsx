import React from 'react';
import './Services.css';

const steps = [
  {
    n: 1,
    title: 'Get a Quote',
    p: 'Fill out our quick form and receive a tailored quote within 2 hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="2" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    n: 2,
    title: 'Choose a Time',
    p: 'Pick a date that suits you — we work 7 days a week.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    n: 3,
    title: 'We Clean',
    p: 'Our vetted, professional team arrives on time, fully equipped.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    n: 4,
    title: 'Enjoy & Relax',
    p: "Come home to a fresh, spotless space. Not satisfied? We'll make it right.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const reasons = [
  {
    n: 1,
    title: 'Reliable Service',
    p: "We show up on time, every time. If something isn't right, contact us within 24 hours and we'll make it right.",
  },
  {
    n: 2,
    title: 'Professional Results',
    p: 'Our team uses professional-grade equipment and premium eco-friendly products for a safe, sparkling home.',
  },
  {
    n: 3,
    title: 'Tailored Cleaning',
    p: 'Flexible scheduling built around your lifestyle, with transparent pricing — no hidden fees, ever.',
  },
];

const Services = () => {
  return (
    <>
      <section id="how-it-works" className="sec dark">
        <div className="inner">
          <div className="sec-hd">
            <div className="rule"></div>
            <span className="ey">The Process</span>
            <h2 className="sec-h2">
              <span className="tw">How It </span>
              <span className="tg">Works</span>
            </h2>
            <p className="sec-p">Getting your home sparkling clean is easier than ever.</p>
          </div>
          <div className="steps">
            {steps.map((step, i) => (
              <React.Fragment key={step.n}>
                <div className="step-card">
                  <div className="step-n">{step.n}</div>
                  <div className="step-ico">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.p}</p>
                </div>
                {i < steps.length - 1 && <div className="step-arr"></div>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '52px' }}>
            <a className="btn-gold" href="#contact">
              Book Your Clean{' '}
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="sec navy">
        <div className="inner">
          <div className="sec-hd">
            <div className="rule"></div>
            <span className="ey">Why Choose Us</span>
            <h2 className="sec-h2">
              <span className="tw">3 Reasons to Choose </span>
              <span className="tg">Sparkle Haven</span>
            </h2>
          </div>
          <div className="reasons">
            {reasons.map((reason) => (
              <div key={reason.n} className="reason">
                <div className="rnum">
                  <span>{reason.n}</span>
                </div>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
