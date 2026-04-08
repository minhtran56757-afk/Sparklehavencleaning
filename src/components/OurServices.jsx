import './OurServices.css';
import photo1 from '../assets/image 1.jpg';
import photo2 from '../assets/image 2.jpg';
import photo3 from '../assets/image 3.jpeg';
import photo5 from '../assets/Rennovation.jpg';
import photo6 from '../assets/Office.jpg';

const services = [
  {
    img: photo1,
    alt: 'General Clean',
    badge: 'Popular',
    title: 'General Clean',
    desc: 'Great for homes that are regularly maintained. Covers bedrooms, bathrooms, kitchen, living areas, vacuuming, mopping, dusting, and tidying.',
    link: 'Book Now',
  },
  {
    img: photo2,
    alt: 'Deep Clean',
    badge: 'Recommended',
    title: 'Deep Clean',
    desc: 'Ideal if your home hasn\'t been professionally cleaned in over 30 days. Includes everything in a General Clean plus skirting boards, cornices, window frames, and more.',
    link: 'Book Now',
  },
  {
    img: photo3,
    alt: 'End-of-Lease Cleaning',
    badge: 'Bond Back',
    title: 'End-of-Lease Cleaning',
    desc: 'A thorough bond-back guarantee service covering all areas — ovens, bathrooms, carpets, walls, and more. Quotes based on property size and condition.',
    link: 'Get a Quote',
  },
  {
    img: photo5,
    alt: 'Post-Construction Cleaning',
    badge: 'New Builds',
    title: 'Post-Construction Cleaning',
    desc: 'A comprehensive service for newly completed builds and renovations. Removes dust, debris, and construction residue — polished to handover standards.',
    link: 'Get a Quote',
  },
  {
    img: photo6,
    alt: 'Commercial Cleaning',
    badge: 'Business',
    title: 'Commercial Cleaning',
    desc: 'Tailored for offices and commercial spaces with flexible daily or weekly schedules. Professional-grade results with minimal disruption to your operations.',
    link: 'Enquire Now',
  },
];

const OurServices = () => {
  return (
    <section id="services" className="sec light-alt">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule rule-dark"></div>
          <span className="ey ey-dark">What We Offer</span>
          <h2 className="sec-h2 h2-dark">
            <span className="tw-dark">Our </span>
            <span className="tg">Services</span>
          </h2>
          <p className="sec-p sp-dark">Professional cleaning solutions for every need.</p>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc-card" key={s.title}>
              <div className="svc-img-wrap">
                <img src={s.img} alt={s.alt} className="svc-img" />
                <span className="svc-badge">{s.badge}</span>
              </div>
              <div className="svc-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a className="svc-link" href="#contact">{s.link} &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
