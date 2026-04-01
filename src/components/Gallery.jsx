import React, { useState, useEffect } from 'react';
import './Gallery.css';
import photo1 from '../assets/Photo 1.png';
import photo2 from '../assets/Photo 2.png';
import photo3 from '../assets/Photo 3.png';
import photo4 from '../assets/Photo 4.png';
import photo5 from '../assets/Photo 5.png';
import photo6 from '../assets/Photo 6.png';

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const images = [
    { id: 1, src: photo1, label: 'Living Room' },
    { id: 2, src: photo2, label: 'Kitchen' },
    { id: 3, src: photo3, label: 'Bathroom' },
    { id: 4, src: photo4, label: 'Bedroom' },
    { id: 5, src: photo5, label: 'Carpets' },
    { id: 6, src: photo6, label: 'Windows' },
  ];

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i + 1) % images.length);

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
          {images.map((img, i) => (
            <div key={img.id} className="gal-item" onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.label} className="gal-img" />
              <div className="gal-overlay">
                <span>View Larger</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="lb-backdrop" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <button className="lb-arrow lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox].src} alt={images[lightbox].label} className="lb-img" />
            <p className="lb-label">{images[lightbox].label}</p>
          </div>
          <button className="lb-arrow lb-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
