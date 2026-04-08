import './Pricing.css';

const Pricing = () => {
  return (
    <section id="services" className="sec navy">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule"></div>
          <span className="ey">What We Offer</span>
          <h2 className="sec-h2">
            <span className="tw">Our </span>
            <span className="tg">Services</span>
          </h2>
          <p className="sec-p">Professional, eco-friendly cleaning carried out by our trusted team.</p>
        </div>
        <div className="pg">

          <div className="pc">
            <div className="pc-ico">✦</div>
            <h3>General Clean</h3>
            <p className="pc-desc">Great for homes that are regularly maintained. Recommended for weekly or fortnightly upkeep.</p>
            <div className="pc-cols">
              <ul className="chk">
                <li>Bedrooms</li>
                <li>Bathrooms</li>
                <li>Kitchen</li>
                <li>Living / Dining</li>
              </ul>
              <ul className="chk">
                <li>Vacuuming</li>
                <li>Mopping</li>
                <li>Dusting</li>
                <li>Tidying</li>
              </ul>
            </div>
            <div className="pc-foot">
              <span className="pc-price">$160</span>
              <a className="pc-btn" href="#contact">Book Now</a>
            </div>
          </div>

          <div className="pc pc-feat">
            <div className="pc-rec">★ RECOMMENDED</div>
            <div className="pc-ico pc-ico-gold">✦</div>
            <h3>Deep Clean</h3>
            <p className="pc-desc">Recommended if your home has not been professionally cleaned in over 30 days, or for first-time visits.</p>
            <p className="pc-incl">Includes everything in General Clean, PLUS&hellip;</p>
            <ul className="chk chk-single">
              <li>Skirting Boards</li>
              <li>Dust Cornices</li>
              <li>Window Frames &amp; Ledges</li>
              <li>Remove Cobwebs</li>
              <li>Doors &amp; Frames</li>
            </ul>
            <div className="pc-foot">
              <span className="pc-price pc-price-gold">$230</span>
              <a className="pc-btn pc-btn-gold" href="#contact">Book Now</a>
            </div>
          </div>

          <div className="pc">
            <div className="pc-ico">✦</div>
            <h3>End-of-Lease Cleaning</h3>
            <p className="pc-desc">A thorough bond-back guarantee service covering all areas — ovens, bathrooms, carpets, walls, and more. Final quotes based on property size and condition.</p>
            <ul className="chk chk-single">
              <li>Ovens &amp; Stovetops</li>
              <li>Bathrooms &amp; Toilets</li>
              <li>Carpet Steam Clean</li>
              <li>Walls &amp; Skirting Boards</li>
              <li>Windows &amp; Tracks</li>
            </ul>
            <div className="pc-foot">
              <span className="pc-quote">Quote Based</span>
              <a className="pc-btn" href="#contact">Get a Quote</a>
            </div>
          </div>

          <div className="pc">
            <div className="pc-ico">✦</div>
            <h3>Post-Construction Cleaning</h3>
            <p className="pc-desc">Comprehensive clean for newly completed builds and renovations. Removes dust, debris, and construction residue — polished to handover standards.</p>
            <ul className="chk chk-single">
              <li>Dust &amp; Debris Removal</li>
              <li>Window &amp; Frame Cleaning</li>
              <li>Floor Polish &amp; Scrub</li>
              <li>Surface Wipe-Down</li>
              <li>Handover-Ready Finish</li>
            </ul>
            <div className="pc-foot">
              <span className="pc-quote">Quote Based</span>
              <a className="pc-btn" href="#contact">Get a Quote</a>
            </div>
          </div>

          <div className="pc">
            <div className="pc-ico">✦</div>
            <h3>Commercial Cleaning</h3>
            <p className="pc-desc">Tailored for offices and commercial spaces with flexible daily or weekly schedules. Professional results with minimal disruption to operations.</p>
            <ul className="chk chk-single">
              <li>Office &amp; Common Areas</li>
              <li>Kitchens &amp; Bathrooms</li>
              <li>Vacuuming &amp; Mopping</li>
              <li>Bin Emptying</li>
              <li>Flexible Scheduling</li>
            </ul>
            <div className="pc-foot">
              <span className="pc-quote">Quote Based</span>
              <a className="pc-btn" href="#contact">Enquire Now</a>
            </div>
          </div>

          <div className="pc pc-empty">
            <div className="pc-empty-inner">
              <span className="pc-empty-ico">✦</span>
              <h3>More Coming Soon</h3>
              <p className="pc-desc">We're always expanding our services. Get in touch to ask about a specific cleaning need.</p>
              <a className="pc-btn" href="#contact">Ask Us</a>
            </div>
          </div>

        </div>
        <p className="price-note">All prices include GST &nbsp;&middot;&nbsp; No lock-in contracts</p>
      </div>
    </section>
  );
};

export default Pricing;
