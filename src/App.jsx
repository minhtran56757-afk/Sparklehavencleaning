import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Offers from './components/Offers';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Offers />
        <Pricing />
        <Services />
        <Gallery />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <a className="mob-sticky" href="#contact">✦ &nbsp;Book a Clean</a>
    </div>
  );
}

export default App;
