import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Who We Are', href: '#who-we-are' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Synergy', href: '#synergy' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <footer className="relative bg-brand-navyDeep text-white border-t border-brand-gold/20 py-16 md:py-20 overflow-hidden w-full min-h-[340px]">
        {/* Full-screen Width Transparent Background Graphic - Full 100vw Screen Width & 80% Opacity */}
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none flex items-end justify-center overflow-hidden">
          <img 
            src="/footer_transparent.png" 
            alt="ALICE & CO. Footer Background" 
            className="w-full min-w-full h-full object-cover object-bottom opacity-80 brightness-110 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-brand-navyDeep/30 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          {/* Upper Footer Row */}
          <div className="flex flex-col md:flex-row items-center justify-between pb-4 gap-8">
            {/* Brand Info */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <a href="#home" onClick={scrollToTop} className="flex items-center mb-3 group inline-flex" aria-label="ALICE & CO. Home">
                <img 
                  src="/LoGoDuAn.webp" 
                  alt="ALICE & CO." 
                  className="h-32 md:h-40 w-auto filter brightness-110 object-contain group-hover:scale-105 transition duration-300"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </a>
              <span className="text-[11px] text-gray-400 font-light block mt-1">
                Your Trusted Local Partner in Vietnam.
              </span>
            </div>

            {/* Quick Navigation Links */}
            <div className="hidden md:flex flex-wrap items-center gap-x-5 gap-y-3 md:-translate-y-8 text-[10px] tracking-luxury uppercase text-gray-300 font-sans">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="hover:text-brand-gold transition duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact Quick Links & Socials */}
            <div className="flex flex-col items-center md:items-end space-y-2 text-xs text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-brand-gold" />
                <a href="tel:+84334095326" className="hover:text-white transition duration-200 font-mono">
                  +84 33 409 5326
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-brand-gold" />
                <span>Ho Chi Minh City, Vietnam</span>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <a 
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-brand-gold transition duration-200 text-xs w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-brand-gold/30" 
                  href="https://www.facebook.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a 
                  aria-label="Google Maps"
                  className="text-gray-400 hover:text-brand-gold transition duration-200 text-xs w-7 h-7 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-brand-gold/30" 
                  href="https://maps.app.goo.gl/VLi6LK91YNqnUDEs6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-map-location-dot"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Standalone Sub-Footer Bar - Matching Footer Navy Background */}
      <div className="w-full bg-brand-navyDeep border-t border-white/10 py-4 px-6 md:px-12 lg:px-20 text-gray-400 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-[11px] sm:text-xs font-light tracking-wide">
          <div>
            &copy; 2026 ALICE &amp; CO. All rights reserved.
          </div>
          <div className="mt-1 sm:mt-0 text-gray-400/80">
            Licensed Corporate Relocation &amp; Business Advisory Services.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
