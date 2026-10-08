import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section during scroll
      // 'clients' ends where its element ends; later banners/CTA belong to no nav item
      const sections = ['home', 'who-we-are', 'services', 'why-us', 'synergy', 'clients', 'cta-box', 'contact'];
      const scrollPosition = window.scrollY + 200;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;

      let current = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPosition >= el.offsetTop) current = sectionId;
      }
      if (atBottom) current = 'contact';
      setActiveSection(current === 'cta-box' ? '' : `#${current}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    setActiveSection('#home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'WHO WE ARE', href: '#who-we-are' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'SYNERGY', href: '#synergy' },
    { label: 'CLIENTS', href: '#clients' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 px-6 md:px-12 lg:px-20 bg-brand-navyDark shadow-md ${
        isScrolled 
          ? 'py-1.5 sm:py-2 bg-brand-navyDark/98 backdrop-blur-md' 
          : 'py-2 sm:py-2.5 md:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo (Emblem) */}
        <a href="#home" onClick={scrollToTop} className="flex items-center group py-0.5" aria-label="ALICE & CO. Home">
          <img 
            src="/LoGoDuAn.webp" 
            alt="ALICE & CO. Logo" 
            className={`w-auto object-contain brightness-110 drop-shadow group-hover:scale-105 transition-all duration-300 ${
              isScrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 md:h-22'
            }`}
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-9 text-[11px] font-semibold tracking-luxury font-sans">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a 
                key={link.label}
                href={link.href} 
                onClick={() => handleLinkClick(link.href)}
                className={`nav-link pb-1 transition duration-200 ${
                  isActive ? 'active text-brand-gold' : 'text-gray-200 hover:text-brand-gold'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Button & Mobile Hamburger Toggle */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block">
            <a 
              href="#contact"
              className="px-6 py-2.5 text-[11px] font-semibold tracking-luxury uppercase border border-brand-gold/60 text-brand-gold hover:bg-brand-gold hover:text-brand-navyDark transition-all duration-300 font-sans shadow-sm"
            >
              Let's Talk
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden text-white p-2 focus:outline-none hover:text-brand-gold transition duration-200"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Drawer Menu Overlay (outside <nav>: its backdrop-filter would otherwise trap the fixed overlay inside the navbar box) */}
      {/* Dimmed backdrop: tap to close */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Side panel: half the screen width, slides in from the right */}
      <div
        className={`fixed top-0 right-0 w-1/2 min-w-[220px] h-[100dvh] overflow-y-auto bg-brand-navyDeep shadow-2xl z-50 flex flex-col justify-start px-5 pt-2 pb-6 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="flex items-center">
            <img
              src="/LoGoDuAn.webp"
              alt="ALICE & CO. Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-brand-gold text-2xl p-1"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-3 py-4 text-left text-xs font-semibold tracking-luxury text-gray-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand-gold transition py-1.5"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 mt-auto text-left space-y-3">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center py-3 bg-brand-gold text-brand-navyDark text-[11px] font-bold tracking-luxury uppercase shadow-md hover:bg-brand-goldLight transition"
          >
            LET'S TALK
          </a>
          <div className="text-[11px] text-gray-400">
            <a href="tel:+84334095326" className="hover:text-brand-gold flex items-center justify-start space-x-1.5 font-mono">
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+84 33 409 5326</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
