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
        <BridgeBanner />
        <CtaBox />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
