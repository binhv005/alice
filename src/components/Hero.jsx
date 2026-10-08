import React from 'react';
import { Phone, ArrowRight, Crosshair } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <header className="relative min-h-[95vh] flex items-center pt-32 pb-24 bg-brand-navyDeep overflow-hidden" id="home">
      {/* Hero Background Panorama: Clear on right, smoothly fading to Midnight Navy on left */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/AnhSanPham.png"
          alt="Ho Chi Minh City Panorama - ALICE & CO."
          className="w-full h-full object-cover object-right lg:object-center opacity-100 brightness-110 contrast-[1.05]"
        />
        {/* Horizontal Gradient: Solid readable area on left, crisp and clear on center & right */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDark/95 via-brand-navyDark/50 via-40% to-transparent"></div>
        {/* Gentle vertical gradient for seamless top/bottom blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/60 via-transparent to-brand-navyDark/30"></div>
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full mt-6">
        <div className="max-w-2xl text-left">

          {/* Main Headline */}
          <motion.h1
            className="font-luxury-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.12] mb-6 [text-wrap:balance]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            YOUR TRUSTED<br />
            LOCAL PARTNER<br />
            <span className="italic font-light text-brand-gold">IN&nbsp;VIETNAM</span>
          </motion.h1>

          {/* Subheading Paragraph */}
          <motion.p
            className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-light [text-wrap:pretty]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Business support, local representation and relocation solutions for international companies, investors, expats and executives in&nbsp;Vietnam.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3.5 bg-brand-gold hover:bg-brand-goldLight text-brand-navyDark text-xs font-bold tracking-luxury uppercase transition duration-300 shadow-lg hover:shadow-brand-gold/30 hover:-translate-y-0.5"
            >
              DISCOVER OUR SERVICES <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 border border-white/30 hover:border-brand-gold text-white hover:text-brand-gold text-xs font-semibold tracking-luxury uppercase transition duration-300 bg-white/5 backdrop-blur-sm hover:-translate-y-0.5"
            >
              LET'S TALK
            </a>
          </motion.div>

          {/* Direct Phone Contact Line */}
          <motion.div
            className="flex items-center space-x-3 text-xs tracking-wider text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
              <Phone className="w-3 h-3 text-brand-gold" />
            </div>
            <a href="tel:+84334095326" className="hover:text-brand-gold transition duration-200 font-mono tracking-widest text-sm">
              +84 33 409 5326
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Coordinates indicator */}
      <motion.div
        className="absolute bottom-8 right-8 hidden md:flex items-center space-x-3 text-[11px] tracking-luxury text-brand-gold/80 uppercase backdrop-blur-sm bg-black/20 px-4 py-2 border border-brand-gold/20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Crosshair className="w-3.5 h-3.5 text-brand-gold" />
        <span className="font-mono">10.8231° N, 106.6297° E</span>
        <div className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></div>
      </motion.div>
    </header>
  );
};

export default Hero;
