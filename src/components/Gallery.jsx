import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, label: 'Living Room' },
    { id: 2, label: 'Kitchen' },
    { id: 3, label: 'Bathroom' },
    { id: 4, label: 'Bedroom' },
    { id: 5, label: 'Carpets' },
    { id: 6, label: 'Windows' },
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
              <div className="gal-placeholder">
                <span>{img.label}</span>
              </div>
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
