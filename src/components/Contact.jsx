import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('https://formspree.io/f/xvzwnjbk', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    }).then((res) => {
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    });
  };

  return (
    <section id="contact" className="sec navy">
      <div className="inner">
        <div className="ct-layout">
          <div className="ct-info">
            <div className="rule" style={{ margin: '0 0 28px' }}></div>
            <span className="ey" style={{ fontSize: '13px', letterSpacing: '3px' }}>Contact Us</span>
            <h2 className="sec-h2" style={{ textAlign: 'left', fontSize: 'clamp(36px, 4vw, 54px)' }}>
              <span className="tw">Get a Free </span>
              <span className="tg">Quote Today</span>
            </h2>
            <p className="sec-p" style={{ margin: '0 0 40px', textAlign: 'left', fontSize: '16px' }}>
              Fill out the form and our team will get back to you within 2 hours with a tailored estimate.
            </p>

            <div className="ci">
              <div className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:0439578719">0439 578 719</a>
              </div>
            </div>

            <div className="ci">
              <div className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:Hello@sparklehavencleaning.com.au">Hello@sparklehavencleaning.com.au</a>
              </div>
            </div>

            <div className="ci">
              <div className="ci-ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Service Area</h4>
                <p>All Sydney Suburbs</p>
              </div>
            </div>

            <div className="ci-gtee">
              <div className="ci-gtee-t">Our Guarantee</div>
              <p>Not satisfied? Contact us within 24 hours and we'll return to re-clean at no extra charge.</p>
            </div>
          </div>

          <div className="form-card">
            <h3 className="form-h3">Request a Free Quote</h3>
            <p className="form-sub">We'll get back to you within 2 hours with a tailored estimate.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="fg">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="fg">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="fg">
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="04XX XXX XXX" />
              </div>
              <div className="fg">
                <label>Service Type</label>
                <select name="service" required>
                  <option value="">Select a service</option>
                  <option value="General Clean">General Clean — $160</option>
                  <option value="Deep Clean">Deep Clean — $230</option>
                  <option value="Not Sure">Not sure — help me choose</option>
                </select>
              </div>
              <div className="fg">
                <label>Message / Requirements</label>
                <textarea name="message" rows="4" placeholder="Tell us about your home (bedrooms, bathrooms, etc.)"></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Quote Request</button>
              <p className="form-note">We respect your privacy. No spam, ever.</p>
              {submitted && (
                <div className="form-ok show">
                  ✓ Thank you! We'll be in touch within 2 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
