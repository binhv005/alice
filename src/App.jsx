import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Convergence from './components/Convergence';
import Clients from './components/Clients';
import HcmcBanner from './components/HcmcBanner';
import BridgeBanner from './components/BridgeBanner';
import CtaBox from './components/CtaBox';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  // Always scroll to the top of the page on refresh/reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-800 font-sans selection:bg-brand-gold selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Services />
        <WhyUs />
        <Convergence />
        <Clients />
        <HcmcBanner />
        <div className="relative bg-brand-navyDark overflow-hidden">
          {/* Shared background image layer for BridgeBanner + CtaBox */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.14] pointer-events-none"
            style={{ backgroundImage: "url('/bcaacd7cbc1436fd2a75c1161b52546c.jpg')" }}
          />
          <div className="relative z-10">
            <BridgeBanner />
            <CtaBox />
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
