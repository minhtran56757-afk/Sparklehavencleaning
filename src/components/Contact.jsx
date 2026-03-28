import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="sec dark">
      <div className="inner contact-container">
        <div className="contact-info">
          <div className="rule" style={{ margin: '0 0 28px' }}></div>
          <span className="ey">Contact Us</span>
          <h2 className="sec-h2" style={{ textAlign: 'left' }}>
            <span className="tw">Get a Free </span>
            <span className="tg">Quote Today</span>
          </h2>
          <p className="sec-p" style={{ margin: '0 0 40px', textAlign: 'left' }}>
            Fill out the form and our team will get back to you within 2 hours with a tailored estimate.
          </p>

          <div className="info-item">
            <div className="info-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            </div>
            <div>
              <span>Call Us</span>
              <strong>0412 345 678</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </div>
            <div>
              <span>Email Us</span>
              <strong>hello@sparklehaven.com.au</strong>
            </div>
          </div>

          <div className="info-item">
            <div className="info-ico">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </div>
            <div>
              <span>Service Area</span>
              <strong>All Sydney Suburbs</strong>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="https://formspree.io/f/xvzwnjbk" method="POST">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label>Service Type</label>
              <select name="service" required>
                <option value="">Select a service</option>
                <option value="Regular House Clean">Regular House Clean</option>
                <option value="Deep Clean">Deep Clean</option>
                <option value="End of Lease Clean">End of Lease Clean</option>
                <option value="Carpet Cleaning">Carpet Cleaning</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your Message / Requirements</label>
              <textarea name="message" rows="4" placeholder="Tell us about your home (bedrooms, bathrooms, etc.)"></textarea>
            </div>
            <button type="submit" className="btn-gold" style={{ width: '100%' }}>Send Quote Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
