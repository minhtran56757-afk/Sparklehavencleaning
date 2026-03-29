import React from 'react';
import './Gallery.css';
import photo1 from '../assets/Photo 1.png';
import photo2 from '../assets/Photo 2.png';
import photo3 from '../assets/Photo 3.png';
import photo4 from '../assets/Photo 4.png';
import photo5 from '../assets/Photo 5.png';
import photo6 from '../assets/Photo 6.png';

const Gallery = () => {
  const images = [
    { id: 1, src: photo1, label: 'Living Room' },
    { id: 2, src: photo2, label: 'Kitchen' },
    { id: 3, src: photo3, label: 'Bathroom' },
    { id: 4, src: photo4, label: 'Bedroom' },
    { id: 5, src: photo5, label: 'Carpets' },
    { id: 6, src: photo6, label: 'Windows' },
  ];

  return (
    <section id="gallery" className="sec dark">
      <div className="inner">
        <div className="sec-hd">
          <div className="rule"></div>
          <span className="ey">Our Work</span>
          <h2 className="sec-h2">
            <span className="tw">Completed </span>
            <span className="tg">Services</span>
          </h2>
          <p className="sec-p">A look at some of the homes we&rsquo;ve transformed across Sydney.</p>
        </div>
        <div className="gal">
          {images.map((img) => (
            <div key={img.id} className="gal-item">
              <img src={img.src} alt={img.label} className="gal-img" />
              <div className="gal-overlay">
                <span>View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
