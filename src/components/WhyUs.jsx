import React from 'react';
import SectionHeading from './common/SectionHeading';
import { Scale, Fingerprint, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs = () => {
  return (
    <section className="py-24 bg-brand-navyDark text-white relative overflow-hidden" id="why-us" data-nav-theme="dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading 
            eyebrow="WHY ALICE & CO."
            title="One trusted local partner instead of navigating multiple providers."
            light={true}
          />
        </motion.div>

        {/* Key Value Propositions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 01: Legal Background */}
          <motion.div 
            className="bg-brand-navyCard/80 border border-brand-gold/25 p-8 rounded-none flex flex-col justify-between hover:border-brand-gold transition duration-300 shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Subtle Background Watermark / Image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <img 
                src="/04aa89bc8cb17f0e66e55ff88c373dc7.jpg" 
                alt="Legal Background" 
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 brightness-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/70 to-brand-navyDark/60"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center text-brand-gold text-2xl mb-6 bg-white/5 rounded-full border border-brand-gold/30">
                <Scale className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-brand-gold tracking-luxury mb-1 font-mono">01</div>
              <h3 className="font-luxury-serif text-xl font-semibold uppercase tracking-wider text-brand-gold mb-4 [text-wrap:balance]">
                LEGAL BACKGROUND
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed [text-wrap:pretty]">
                A strong understanding of Vietnam's legal framework, administrative procedures, and contractual risks to keep your business operations fully protected and&nbsp;compliant.
              </p>
            </div>
          </motion.div>

          {/* Pillar 02: One Trusted Partner + Comparison Counter */}
          <motion.div 
            className="bg-brand-navyCard/80 border border-brand-gold/25 p-8 rounded-none flex flex-col justify-between hover:border-brand-gold transition duration-300 shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Subtle Background Watermark / Image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <img 
                src="/tải xuống.png" 
                alt="One Trusted Local Partner Background" 
                className="w-full h-full object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDark/90 via-brand-navyDark/65 to-brand-navyDark/50"></div>
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center text-brand-gold text-2xl mb-6 bg-white/5 rounded-full border border-brand-gold/30">
                <Fingerprint className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-brand-gold tracking-luxury mb-1 font-mono">02</div>
              <h3 className="font-luxury-serif text-xl font-semibold uppercase tracking-wider text-brand-gold mb-4 [text-wrap:balance]">
                ONE TRUSTED LOCAL&nbsp;PARTNER
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-6 [text-wrap:pretty]">
                One partner replacing the need to coordinate multiple separate providers across legal, sourcing, translation, representation, coordination and personal&nbsp;assistance.
              </p>
            </div>
            {/* Comparison Graphic Counter */}
            <div className="relative z-10 pt-6 border-t border-brand-gold/20 flex items-center justify-around text-center bg-black/30 backdrop-blur-sm p-4">
              <div>
                <div className="text-3xl font-roboto text-brand-gold font-bold tracking-tight">1</div>
                <div className="text-[9px] tracking-luxury text-gray-300 uppercase mt-1 font-sans">PARTNER</div>
              </div>
              <span className="text-xs font-semibold text-brand-gold/80 italic font-mono">VS</span>
              <div>
                <div className="text-2xl text-gray-400 flex items-center justify-center space-x-1">
                  <Users className="w-4 h-4 text-gray-300 mr-1" />
                  <span className="font-roboto font-bold text-white text-3xl tracking-tight">5–8</span>
                </div>
                <div className="text-[9px] tracking-luxury text-gray-400 uppercase mt-1 font-sans">SEPARATE VENDORS</div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 03: On-the-Ground in HCMC */}
          <motion.div 
            className="bg-brand-navyCard/80 border border-brand-gold/25 p-8 rounded-none flex flex-col justify-between hover:border-brand-gold transition duration-300 shadow-lg relative overflow-hidden group"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background HCMC Map Watermark Pattern */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
              <img 
                src="/hcmap_transparent.png" 
                alt="HCMC Map" 
                className="w-[140%] max-w-none h-auto object-contain opacity-20 group-hover:opacity-30 transition-opacity duration-500 transform translate-x-2 translate-y-4 mix-blend-screen"
              />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 flex items-center justify-center text-brand-gold text-2xl mb-6 bg-white/5 rounded-full border border-brand-gold/30">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold text-brand-gold tracking-luxury mb-1 font-mono">03</div>
              <h3 className="font-luxury-serif text-xl font-semibold uppercase tracking-wider text-brand-gold mb-4 [text-wrap:balance]">
                ON-THE-GROUND IN&nbsp;HCMC
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mb-4 [text-wrap:pretty]">
                Direct local presence to solve problems quickly, combining international working standards with deep local relationships and immediate physical&nbsp;reach.
              </p>
            </div>
            {/* Stylized Geo Graphic Badge */}
            <div className="relative z-10 pt-4 border-t border-brand-gold/20 flex items-center justify-between text-xs text-brand-gold font-mono bg-black/20 p-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span className="tracking-widest">HCMC</span>
              </div>
              <span className="text-[11px] text-gray-400">10.8231° N, 106.6297° E</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
