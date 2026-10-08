import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export const HcmcBanner = () => {
  return (
    <section data-nav-theme="dark" className="relative pt-20 md:pt-28 pb-40 md:pb-52 bg-brand-navyDeep overflow-hidden text-white">
      {/* Background: Clear on right, smoothly fading to Midnight Navy on left */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img 
          src="/AnhSanPham7.webp" 
          alt="On The Ground in HCMC - ALICE & CO." 
          className="w-full h-full object-cover object-right lg:object-center opacity-100 brightness-110 contrast-[1.05]"
        />
        {/* Horizontal Gradient: Navy fade smoothly across the left 50%, crystal clear across the right 50% */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navyDark via-brand-navyDark/75 via-[30%] to-transparent to-[50%]"></div>
        {/* Subtle vertical edge blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/35 via-transparent to-brand-navyDark/20"></div>
      </motion.div>

      {/* Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          className="max-w-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-bold tracking-luxury text-brand-gold uppercase block mb-3 font-sans">
            ON THE GROUND IN HO CHI MINH CITY
          </span>
          <h2 className="font-luxury-serif text-3xl sm:text-4xl text-white font-normal mb-4 leading-snug max-w-md [text-wrap:balance]">
            Local presence matters. Helping you move with&nbsp;confidence.
          </h2>
          <div className="inline-flex items-center space-x-2 border-t border-brand-gold/40 pt-3 text-xs tracking-luxury text-brand-gold font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>10.8231° N 106.6297° E</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HcmcBanner;
